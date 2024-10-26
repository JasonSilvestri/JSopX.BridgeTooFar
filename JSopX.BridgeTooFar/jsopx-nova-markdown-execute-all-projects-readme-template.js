const fs = require('fs');
const path = require('path');

// Load configuration from pathConfig.json
const config = JSON.parse(fs.readFileSync('pathConfig.json', 'utf8'));

// Helper function to check if a file is in an 'Includes' directory
function isIncludeFile(filePath) {
    return config.includeDirs.some(dir => filePath.includes(dir));
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

// Helper function to extract properties from comment blocks
function extractCommentProperties(content) {
    const properties = {};
    const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;
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
        try {
            let includeContent = fs.readFileSync(absolutePath, 'utf8');
            // Recursively process includes in the included content
            includeContent = processIncludes(includeContent, path.dirname(absolutePath));
            return includeContent;
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
    const draftRegex = />\s*\[!\s*CAUTION\s*\]\s*>\s*\*\*This\s+is\s+a\s+DRAFT\s*:\s*\*\*[\s\S]*?>[\s\S]*?\n{0,2}/g;

    if (isDraft === 'true') {
        return content; // Keep draft content
    } else {
        return content.replace(draftRegex, '').trim(); // Remove draft content
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

    // Check production readiness
    if (properties.isProductionReady !== 'true') {
        console.log(`Skipping ${filePath} as it is not marked as production-ready.`);
        return;
    }

    // Process includes within the file
    content = processIncludes(content, path.dirname(filePath));

    // Handle draft notices
    content = handleDraftNotice(content, properties.isDraft);

    // Clean hidden characters
    content = cleanHiddenCharacters(content);

    // Generate and insert Table of Contents
    if (properties.toc === 'true') {
        const toc = generateTOC(content);
        content = insertTOC(content, toc);
    }

    // Generate final output path
    const finalPath = getFinalPath(filePath);

    // Ensure the directory exists
    const finalDir = path.dirname(finalPath);
    if (!fs.existsSync(finalDir)) {
        fs.mkdirSync(finalDir, { recursive: true });
    }

    // Save the processed markdown to the final path
    fs.writeFileSync(finalPath, content);
    console.log(`Saved processed file to: ${finalPath}`);
}

// Example usage: Processing all markdown files for the listed projects
const projects = ['AllGlobal', 'jsopx.AngularCore', 'jsopx.AspNetCore', 'jsopx.BlazorServerCore', 'jsopx.BridgeTooFar', 'jsopx.ClassLibrary', 'jsopx.MauiHybridNetCore', 'jsopx.OpenProjectX', 'jsopx.RCLxAssets', 'jsopx.RCLxComponents', 'jsopx.RCLxProper', 'jsopx.ReactCore', 'jsopx.SharedResources','jsopx.VueCore', 'jsopx.WebAPI'];

projects.forEach(project => {
    const projectPath = path.join(config.DocsXRoot, project);
    const markdownFiles = findMarkdownFiles(projectPath);
    markdownFiles.forEach(filePath => {
        processMarkdownFile(filePath);
    });
});
