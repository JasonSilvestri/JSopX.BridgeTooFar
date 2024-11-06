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

// Helper function to check if a file is in an 'Includes' directory
function isIncludeFile(filePath) {
    return config.includeDirs.some(dir => filePath.includes(dir));
}

// Helper function to check if a file is from the Templates directory
function isTemplateFile(filePath) {
    return filePath.includes(config.templatesDir);
}

// Helper function to ensure directory exists
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Enhanced error-handling wrapper for safe file reading
function readFileSafe(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.warn(`Warning: tried to embed an include that did not exist: ${filePath}. Skipping.`);
        return '';  // Skip missing includes or provide a fallback message
    }
}

// Function to create or update ReadMe.md in the Master directory based on the latest phase/version
function createMasterReadMe(projectPath) {
    const phases = fs.readdirSync(projectPath).filter(phase => phase.startsWith('p'));
    if (phases.length === 0) return;

    const latestPhase = phases.sort().pop(); // Get latest phase
    const latestPhasePath = path.join(projectPath, latestPhase);
    const versions = fs.readdirSync(latestPhasePath).filter(version => version.startsWith('v'));
    if (versions.length === 0) return;

    const latestVersion = versions.sort().pop(); // Get latest version
    const latestReadMePath = path.join(latestPhasePath, latestVersion, 'README.md');

    const masterReadMePath = path.join(projectPath, 'Master', 'README.md');
    if (fs.existsSync(latestReadMePath)) {
        ensureDirectoryExists(path.dirname(masterReadMePath));
        fs.copyFileSync(latestReadMePath, masterReadMePath);
        console.log(`Copied latest README to Master: ${masterReadMePath}`);
    }
}

// Function to generate the final output path for a markdown file
function getFinalPath(filePath) {
    let outputPath = filePath.replace(config.DocsXRoot, config.DocsRoot);

    // Skip non-template files for final path creation
    if (!isTemplateFile(filePath)) {
        console.log(`Skipping non-template file: ${filePath}`);
        return null;
    }

    // Avoid adding redundant paths and remove unwanted directories
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

// Function to find markdown files within nested directories like Master
function findMarkdownFiles(dir) {
    let markdownFiles = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Recursively search for markdown files, including within Master directories
            markdownFiles = markdownFiles.concat(findMarkdownFiles(filePath));
        } else if (file.endsWith('.md') && isTemplateFile(filePath)) {
            markdownFiles.push(filePath);
        }
    });

    return markdownFiles;
}

// Helper function to extract properties from comment blocks
function extractCommentProperties(content) {
    const properties = {
        isProductionReady: 'true', // Default to true if not found
        toc: 'true',               // Default to true if not found
        isDraft: 'false'           // Default to false if not found
    };

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

// Function to process includes in a markdown file
function processIncludes(content, currentDir) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.resolve(currentDir, includePath);
        const includeContent = readFileSafe(absolutePath);
        if (includeContent) {
            return processIncludes(includeContent, path.dirname(absolutePath));
        }
        return '';  // Skip if the file is missing
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
    const draftRegex = /{{- start:draft -}}[\s\S]*?{{- end:draft -}}/g;

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

// Function to process markdown file
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

// Start processing and look within Master directories for markdown files
const projects = [
    'AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore',
    'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore',
    'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper',
    'jsopx.ReactCore', 'jsopx.SharedResources', 'jsopx.VueCore', 'jsopx.WebAPI'
];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project, 'Master'); // Look within Master
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