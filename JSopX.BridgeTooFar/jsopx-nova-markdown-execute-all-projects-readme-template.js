

const fs = require('fs');
const path = require('path');

// Load configuration from pathConfig.json
let config;
try {
    config = JSON.parse(fs.readFileSync(path.join(__dirname, 'pathConfig.json'), 'utf8'));
} catch (error) {
    console.error("Error loading pathConfig.json:", error);
    process.exit(1);
}

// Helper function to check if a file is in an 'Includes' directory
function isIncludeFile(filePath) {
    return config.includeDirs.some(dir => filePath.includes(dir));
}

// Helper function to ensure a directory exists
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}


// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Function to create or update ReadMe.md in the Master directory based on the latest phase/version
function createMasterReadMe(projectPath) {
    if (!projectPath) {
        console.error("Error: projectPath is undefined in createMasterReadMe");
        return;
    }

    console.log(`Creating Master README for project path: ${projectPath}`);

    const phases = fs.readdirSync(projectPath).filter(phase => phase.startsWith('p'));
    if (phases.length === 0) {
        console.warn(`No phases found in ${projectPath}`);
        return;
    }

    const latestPhase = phases.sort().pop();
    const latestPhasePath = path.join(projectPath, latestPhase);

    if (!fs.existsSync(latestPhasePath)) {
        console.warn(`Phase directory ${latestPhasePath} does not exist`);
        return;
    }

    const versions = fs.readdirSync(latestPhasePath).filter(version => version.startsWith('v'));
    if (versions.length === 0) {
        console.warn(`No versions found in ${latestPhasePath}`);
        return;
    }

    const latestVersion = versions.sort().pop();
    const latestReadMePath = path.join(latestPhasePath, latestVersion, 'README.md');

    if (!fs.existsSync(latestReadMePath)) {
        console.warn(`README.md not found in ${latestReadMePath}`);
        return;
    }

    const masterReadMePath = path.join(projectPath, 'Master', 'README.md');
    ensureDirectoryExists(path.dirname(masterReadMePath));
    fs.copyFileSync(latestReadMePath, masterReadMePath);
    console.log(`Copied latest README to Master: ${masterReadMePath}`);
}


// Function to generate the final output path for a markdown file
function getFinalPath(filePath) {
    let outputPath = filePath
        .replace(config.DocsXRoot, config.DocsRoot) // Replace DocsX with Docs
        .replace(config.templatesDir, ''); // Remove Templates path

    // Special handling for AllGlobal files
    if (filePath.includes(config.allGlobalDir)) {
        outputPath = outputPath.replace(config.allGlobalDir, config.globalDocsDir);
    }

    // Apply output path rules for specific projects
    for (const [projectKey, outputDir] of Object.entries(config.outputPathRules)) {
        if (filePath.includes(projectKey)) {
            outputPath = outputPath.replace(config.DocsRoot, outputDir);
        }
    }

    // Exclude specified directories (e.g., Includes, Content, Layout)
    config.excludeDirs.forEach(dir => {
        outputPath = outputPath.replace(new RegExp(`\\b${dir}\\b\\/?`, 'g'), '');
    });

    return outputPath;
}

// Function to scan for markdown files in a directory (ignoring includes)
function findMarkdownFiles(dir) {
    let markdownFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            markdownFiles = markdownFiles.concat(findMarkdownFiles(filePath));
        } else if (file.endsWith('.md') && !isIncludeFile(filePath)) {
            markdownFiles.push(filePath); // Only add markdown files not in 'Includes' directories
        }
    });

    return markdownFiles;
}

// Helper function to extract properties from comment blocks with open/close tags
function extractCommentProperties(content) {
    const properties = {};
    const commentBlockRegex = /\{\{\- start:comments \-\}\}[\s\S]*?\{\{\- end:comments \-\}\}/g;
    const match = content.match(commentBlockRegex);

    if (match) {
        const block = match[0];
        const propertyRegex = /(\w+):\s*(\w+)/g;
        let propMatch;
        while ((propMatch = propertyRegex.exec(block)) !== null) {
            properties[propMatch[1]] = propMatch[2];
        }
    } else {
        properties.isProductionReady = 'true';
        properties.toc = 'true';
        properties.isDraft = 'false';
    }

    return properties;
}

// Function to process includes in a markdown file with newlines
function processIncludes(content, currentDir) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.resolve(currentDir, includePath);
        try {
            let includeContent = fs.readFileSync(absolutePath, 'utf8');
            includeContent = processIncludes(includeContent, path.dirname(absolutePath));
            return includeContent + '\n';
        } catch (err) {
            console.error(`Error including file: ${absolutePath}`);
            return '<!-- Error including file -->';
        }
    });
}

// Function to generate Table of Contents
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

// Function to insert TOC into content
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

// Function to handle draft notices
function handleDraftNotice(content, isDraft) {
    const draftRegex = /\{\{\- start:draft \-\}\}[\s\S]*?\{\{\- end:draft \-\}\}/g;

    if (isDraft === 'true') {
        return content;
    } else {
        return content.replace(draftRegex, '').trim();
    }
}

// Function to clean hidden characters
function cleanHiddenCharacters(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
}

// Function to process a markdown file
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

// Example usage: Process markdown files for each project and create Master README
const projects = ['AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore', 'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore', 'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper', 'jsopx.ReactCore', 'jsopx.SharedResources', 'jsopx.VueCore', 'jsopx.WebAPI'];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project);
    createMasterReadMe(projectPath);

    const markdownFiles = findMarkdownFiles(projectPath);
    markdownFiles.forEach(filePath => {
        processMarkdownFile(filePath);
    });
});