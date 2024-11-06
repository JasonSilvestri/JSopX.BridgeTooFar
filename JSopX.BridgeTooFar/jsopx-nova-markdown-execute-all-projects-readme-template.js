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

// Ensure directory creation
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Check if a file is in the Templates directory
function isTemplateFile(filePath) {
    return filePath.includes(config.templatesDir);
}

// Safely read file contents
function readFileSafe(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return null;
    }
}

// Create or update README in Master based on latest phase/version
function createMasterReadMe(projectPath) {
    const phases = fs.readdirSync(projectPath).filter(phase => phase.startsWith('p'));
    if (phases.length === 0) return;

    const latestPhase = phases.sort().pop();
    const latestPhasePath = path.join(projectPath, latestPhase);
    const versions = fs.readdirSync(latestPhasePath).filter(version => version.startsWith('v'));
    if (versions.length === 0) return;

    const latestVersion = versions.sort().pop();
    const latestReadMePath = path.join(latestPhasePath, latestVersion, 'README.md');

    const masterReadMePath = path.join(projectPath, 'Master', 'README.md');
    if (fs.existsSync(latestReadMePath)) {
        ensureDirectoryExists(path.dirname(masterReadMePath));
        fs.copyFileSync(latestReadMePath, masterReadMePath);
        console.log(`Copied latest README to Master: ${masterReadMePath}`);
    }
}

// Generate the final path for saving markdown files
function getFinalPath(filePath) {
    let outputPath = filePath.replace(config.DocsXRoot, config.DocsRoot);

    if (!isTemplateFile(filePath)) {
        console.log(`Skipping non-template file: ${filePath}`);
        return null;
    }

    if (filePath.includes(config.allGlobalDir)) {
        outputPath = outputPath.replace(config.allGlobalDir, config.globalDocsDir);
    }

    for (const [projectKey, outputDir] of Object.entries(config.outputPathRules)) {
        if (filePath.includes(projectKey)) {
            outputPath = outputPath.replace(config.DocsRoot, outputDir);
        }
    }

    config.excludeDirs.forEach(dir => {
        outputPath = outputPath.replace(new RegExp(`\\b${dir}(\\/|\\\\)?`, 'g'), '');
    });

    return outputPath;
}

// Recursively find markdown files, focusing on Templates
function findMarkdownFiles(dir) {
    let markdownFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            markdownFiles = markdownFiles.concat(findMarkdownFiles(filePath));
        } else if (file.endsWith('.md') && isTemplateFile(filePath)) {
            markdownFiles.push(filePath);
        }
    });

    return markdownFiles;
}

// Process and embed includes within markdown content
function processIncludes(content, currentDir) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.resolve(currentDir, includePath);
        const includeContent = readFileSafe(absolutePath);
        if (includeContent) {
            return processIncludes(includeContent, path.dirname(absolutePath));
        }
        return '<!-- Error including file -->';
    });
}

// Insert Table of Contents if flagged
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

// Clean hidden characters for markdown consistency
function cleanHiddenCharacters(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
}

// Main function to process a markdown file and save it in the target structure
function processMarkdownFile(filePath) {
    let content = readFileSafe(filePath);
    if (!content) return;

    console.log(`Processing file: ${filePath}`);

    const properties = extractCommentProperties(content);
    if (properties.isProductionReady !== 'true') {
        console.log(`Skipping ${filePath} as it is not production-ready.`);
        return;
    }

    content = processIncludes(content, path.dirname(filePath));
    content = handleDraftNotice(content, properties.isDraft);
    content = cleanHiddenCharacters(content);

    if (properties.toc === 'true') {
        const toc = generateTOC(content);
        content = insertTOC(content, toc);
    }

    content = content.replace(/{{- start:comment -}}[\s\S]*?{{- end:comment -}}/g, '').trim();

    const finalPath = getFinalPath(filePath);
    if (!finalPath) return;

    ensureDirectoryExists(path.dirname(finalPath));
    fs.writeFileSync(finalPath, content);
    console.log(`Saved processed file to: ${finalPath}`);
}

// Iterate over each project and process the markdown files
const projects = [
    'AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore',
    'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore',
    'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper',
    'jsopx.ReactCore', 'jsopx.SharedResources', 'jsopx.VueCore', 'jsopx.WebAPI'
];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project, 'Master');
    if (fs.existsSync(projectPath)) {
        const markdownFiles = findMarkdownFiles(projectPath);

        if (markdownFiles.length === 0) {
            console.log(`No markdown files found in project: ${project}`);
        }

        markdownFiles.forEach(filePath => {
            processMarkdownFile(filePath);
        });
    } else {
        console.log(`Master directory not found for project: ${project}`);
    }
});

