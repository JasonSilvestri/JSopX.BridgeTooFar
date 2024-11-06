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

// Helper functions
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function readFileSafe(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return null;
    }
}

function isTemplateFile(filePath) {
    return filePath.includes(config.templatesDir);
}

function getFinalPath(filePath) {
    let outputPath = filePath.replace(config.DocsXRoot, config.DocsRoot);

    if (!isTemplateFile(filePath)) return null;

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

// Updated processIncludes to handle "./" and "./DocsX"
function processIncludes(content, currentDir) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const resolvedPath = includePath.startsWith('./')
            ? path.join(currentDir, includePath.replace(/^\.\/(DocsX\/)?/, ''))
            : path.resolve(currentDir, includePath);

        const includeContent = readFileSafe(resolvedPath);
        if (includeContent) {
            return processIncludes(includeContent, path.dirname(resolvedPath));
        }
        return '<!-- Missing include: Skipped -->';
    });
}

// Function to extract properties from comment blocks
function extractCommentProperties(content) {
    const properties = { isProductionReady: 'true', toc: 'true', isDraft: 'false' };

    const match = content.match(/{{- start:comment -}}[\s\S]*?{{- end:comment -}}/);
    if (match) {
        const propertyRegex = /(\w+):\s*(\w+)/g;
        let propMatch;
        while ((propMatch = propertyRegex.exec(match[0])) !== null) {
            properties[propMatch[1]] = propMatch[2];
        }
    }
    return properties;
}

// Generate TOC
function generateTOC(content) {
    const toc = [];
    const lines = content.split('\n');
    let footerDetected = false;

    lines.forEach(line => {
        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) footerDetected = true;
        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headerMatch) {
            const level = headerMatch[1].length;
            const anchor = headerMatch[2].trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
            if (!footerDetected) toc.push(`${' '.repeat((level - 1) * 2)}- [${headerMatch[2]}](#${anchor})`);
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

function handleDraftNotice(content, isDraft) {
    const draftRegex = /{{- start:draft -}}[\s\S]*?{{- end:draft -}}/g;
    return isDraft === 'true' ? content : content.replace(draftRegex, '').trim();
}

function cleanHiddenCharacters(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
}

// Function to process markdown file
function processMarkdownFile(filePath) {
    let content = readFileSafe(filePath);
    if (!content) return;

    const properties = extractCommentProperties(content);
    if (properties.isProductionReady !== 'true') return;

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

// Start processing
const projects = [
    'AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore',
    'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore',
    'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper',
    'jsopx.ReactCore', 'jsopx.SharedResources', 'jsopx.VueCore', 'jsopx.WebAPI'
];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project, 'Master');
    if (fs.existsSync(projectPath)) {
        const phasePaths = fs.readdirSync(projectPath).filter(phase => phase.startsWith('p'));
        phasePaths.forEach(phase => {
            const versionPaths = fs.readdirSync(path.join(projectPath, phase)).filter(version => version.startsWith('v'));
            versionPaths.forEach(version => {
                const templateDir = path.join(projectPath, phase, version, 'Templates');
                if (fs.existsSync(templateDir)) {
                    const markdownFiles = findMarkdownFiles(templateDir);
                    if (markdownFiles.length === 0) console.log(`No markdown files found in project: ${project}`);
                    markdownFiles.forEach(filePath => processMarkdownFile(filePath));
                }
            });
        });
    } else {
        console.log(`Master directory not found for project: ${project}`);
    }
});

