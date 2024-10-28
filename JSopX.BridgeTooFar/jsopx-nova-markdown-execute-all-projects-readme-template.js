const fs = require('fs');
const path = require('path');

// Load configuration from pathConfig.json
const configPath = path.join(__dirname, 'pathConfig.json');
let config;

try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (error) {
    console.error("Error loading pathConfig.json:", error);
    process.exit(1);
}

// Ensure directory exists
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Create or update README.md in the Master directory based on latest phase/version
function createMasterReadMe(projectPath) {
    console.log(`Creating Master README for project path: ${projectPath}`);
    const phases = fs.readdirSync(projectPath).filter(phase => phase.startsWith('p'));
    if (phases.length === 0) return;

    const latestPhase = phases.sort().pop();
    const latestPhasePath = path.join(projectPath, latestPhase);
    const versions = fs.readdirSync(latestPhasePath).filter(version => version.startsWith('v'));
    if (versions.length === 0) return;

    const latestVersion = versions.sort().pop();
    const latestReadMePath = path.join(latestPhasePath, latestVersion, 'README.md');
    if (!fs.existsSync(latestReadMePath)) return;

    const masterReadMePath = path.join(projectPath, 'Master', 'README.md');
    ensureDirectoryExists(path.dirname(masterReadMePath));
    fs.copyFileSync(latestReadMePath, masterReadMePath);
    console.log(`Copied latest README to Master: ${masterReadMePath}`);
}

// Check if a file is in an excluded 'Includes' directory
function isIncludeFile(filePath) {
    return config.excludeDirs.some(dir => filePath.includes(dir));
}

// Generate the final output path for a markdown file
function getFinalPath(filePath) {
    let outputPath = filePath
        .replace(config.DocsXRoot, config.DocsRoot)
        .replace(config.templatesDir, '');

    // Handle AllGlobal replacement
    if (filePath.includes(config.allGlobalDir)) {
        outputPath = outputPath.replace(config.allGlobalDir, config.globalDocsDir);
    }

    // Apply specific output path rules for projects
    for (const [projectKey, outputDir] of Object.entries(config.outputPathRules)) {
        if (filePath.includes(projectKey)) {
            outputPath = outputPath.replace(config.DocsRoot, outputDir);
        }
    }

    // Remove any excluded directories from the path
    config.excludeDirs.forEach(dir => {
        outputPath = outputPath.replace(new RegExp(`\\b${dir}\\b/?`, 'g'), '');
    });

    return outputPath;
}

// Find markdown files in a directory, ignoring includes
function findMarkdownFiles(dir) {
    let markdownFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            markdownFiles = markdownFiles.concat(findMarkdownFiles(filePath));
        } else if (file.endsWith('.md') && !isIncludeFile(filePath)) {
            markdownFiles.push(filePath);
        }
    });

    return markdownFiles;
}

// Extract properties from comment blocks
function extractCommentProperties(content) {
    const properties = { isProductionReady: 'true', toc: 'true', isDraft: 'false' };
    const commentBlockRegex = /{{- start:comment -}}[\s\S]*?{{- end:comment -}}/g;
    const match = content.match(commentBlockRegex);

    if (match) {
        const block = match[0];
        const propertyRegex = /(\w+):\s*(\w+)/g;
        let propMatch;
        while ((propMatch = propertyRegex.exec(block)) !== null) {
            properties[propMatch[1]] = propMatch[2];
        }
    }

    return properties;
}

// Process includes in a markdown file
function processIncludes(content, currentDir) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.resolve(currentDir, includePath);
        try {
            let includeContent = fs.readFileSync(absolutePath, 'utf8');
            includeContent = processIncludes(includeContent, path.dirname(absolutePath));
            return includeContent;
        } catch (err) {
            console.error(`Error including file: ${absolutePath}`);
            return '<!-- Error including file -->';
        }
    });
}

// Generate a Table of Contents from the markdown headers
function generateTOC(content) {
    const toc = [];
    const lines = content.split('\n');
    let footerDetected = false;

    lines.forEach(line => {
        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
            footerDetected = true;
        }

        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headerMatch) {
            const level = headerMatch[1].length;
            const headerText = headerMatch[2].trim();
            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

            if (!footerDetected && !headerText.toLowerCase().includes('from the jsilvestri.com beta')) {
                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
            }
        }
    });

    return toc.join('\n');
}

// Insert TOC into content
function insertTOC(content, toc) {
    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
    }

    const overviewMatch = content.match(/(#{1,2} Overview)/);
    if (overviewMatch) {
        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
    }

    return `# Table of Contents\n${toc}\n\n${content}`;
}

// Handle draft notices
function handleDraftNotice(content, isDraft) {
    const draftRegex = /{{- start:draft -}}[\s\S]*?{{- end:draft -}}/g;

    if (isDraft === 'true') {
        return content;
    } else {
        return content.replace(draftRegex, '').trim();
    }
}

// Clean hidden characters
function cleanHiddenCharacters(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
}

// Process a markdown file
function processMarkdownFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    console.log(`Processing file: ${filePath}`);

    const properties = extractCommentProperties(content);

    if (properties.isProductionReady !== 'true') {
        console.log(`Skipping ${filePath} as it is not marked as production-ready.`);
        return;
    }

    content = processIncludes(content, path.dirname(filePath));
    content = handleDraftNotice(content, properties.isDraft);
    content = cleanHiddenCharacters(content);

    if (properties.toc === 'true') {
        const toc = generateTOC(content);
        content = insertTOC(content, toc);
    }

    const finalPath = getFinalPath(filePath);
    ensureDirectoryExists(path.dirname(finalPath));
    fs.writeFileSync(finalPath, content);
    console.log(`Saved processed file to: ${finalPath}`);
}

// Example usage: Process all markdown files for each listed project
const projects = ['AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore', 'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore', 'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper', 'jsopx.ReactCore', 'jsopx.SharedResources', 'jsopx.VueCore', 'jsopx.WebAPI'];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project);
    if (!fs.existsSync(projectPath)) {
        console.warn(`Project path does not exist: ${projectPath}`);
        return;
    }
    createMasterReadMe(projectPath);
    findMarkdownFiles(projectPath).forEach(processMarkdownFile);
});
