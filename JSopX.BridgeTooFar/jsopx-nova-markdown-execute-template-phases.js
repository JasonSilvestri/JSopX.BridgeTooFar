const fs = require('fs');
const path = require('path');

// Define the regex to match the comment block
const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

// Function to scan for properties in the comment block
function extractCommentProperties(content) {
    const properties = {};
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

// Function to handle properties
function handleProperties(properties, filePath) {
    if (properties.isDraft === 'true') {
        console.log(`Skipping production tasks for ${filePath} (Draft mode).`);
    }
    if (properties.toc === 'true') {
        console.log(`Generating Table of Contents for ${filePath}`);
        return true; // Flag to generate TOC
    }
    return false;
}

// Function to process includes in markdown
function processIncludes(content) {
    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
        const absolutePath = path.join(__dirname, includePath);
        try {
            return fs.readFileSync(absolutePath, 'utf8');
        } catch (err) {
            console.error(`Error including file: ${absolutePath}`);
            return '<!-- Error including file -->';
        }
    });
}

// Function to remove comments from markdown
function removeComments(content) {
    return content.replace(commentBlockRegex, '');
}

// Function to generate Table of Contents, excluding unwanted headings
function generateTOC(content) {
    const toc = [];
    const lines = content.split('\n');
    let footerDetected = false;

    lines.forEach(line => {
        // Detect if we've hit the footer or a specific sub-heading to exclude
        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
            footerDetected = true; // Stop including after this point
        }

        // Exclude specific sub-headings, like "From the jSilvestri.com BETA"
        if (footerDetected || line.match(/^\s*######\s*From the jSilvestri\.com BETA/)) {
            return; // Skip adding these lines to the TOC
        }

        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
        if (headerMatch) {
            const level = headerMatch[1].length;
            const headerText = headerMatch[2].trim();
            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

            // Skip the footer and specific subheadings
            if (!footerDetected && !headerText.toLowerCase().includes('footer')) {
                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
            }
        }
    });

    return toc.join('\n');
}



// Function to check for existing TOC and replace it, or add after Overview section
function insertTOC(content, toc) {
    // Check for existing "Table of Contents"
    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
    }

    // Check for "Overview" section to insert TOC after
    const overviewMatch = content.match(/(#{1,2} Overview)/);
    if (overviewMatch) {
        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
    }

    // Default: place TOC at the top of the content
    return `# Table of Contents\n${toc}\n\n${content}`;
}

// Function to process markdown files (universal operations for all phases and templates)
function processMarkdownFile(filePath) {
    let markdownContent = fs.readFileSync(filePath, 'utf8');
    const properties = extractCommentProperties(markdownContent);

    console.log(`Processing file ${filePath}`);

    // Handle file based on extracted properties
    const generateTOCFlag = handleProperties(properties, filePath);

    // Process includes
    markdownContent = processIncludes(markdownContent);

    // Remove comments
    markdownContent = removeComments(markdownContent);

    // Generate TOC if enabled and place appropriately
    if (generateTOCFlag) {
        const toc = generateTOC(markdownContent);
        markdownContent = insertTOC(markdownContent, toc);
    }

    // Save the processed file to the Docs directory with the right path
    const processedFilePath = filePath
        .replace('DocsX', 'Docs')
        .replace('Includes/Templates/', '');

    fs.writeFileSync(processedFilePath, markdownContent);
    console.log(`Processed markdown saved to: ${processedFilePath}`);
}

// Example usage
const markdownFilePath = 'DocsX/jsopx.BridgeTooFar/Master/p1/v1/Includes/Templates/README.md'; // Example path for p1/v1/
processMarkdownFile(markdownFilePath);


// Before Reqs
//const fs = require('fs');
//const path = require('path');

//// Define the regex to match the comment block
//const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

//// Read the main README.md file
//let mainMarkdown = fs.readFileSync('./DocsX/AllGlobal/Includes/Templates/Phases.md', 'utf8');


//// Manually replace {{[jsopx-includes](path)}} with the file content
//mainMarkdown = mainMarkdown.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
//    const absolutePath = path.join(__dirname, includePath);
//    try {
//        return fs.readFileSync(absolutePath, 'utf8');
//    } catch (err) {
//        console.error(`Error including file: ${absolutePath}`);
//        return '<!-- Error including file -->';
//    }
//});

//// Remove the comment block if it exists after includes
//mainMarkdown = mainMarkdown.replace(commentBlockRegex, '');

//// Save the processed markdown (no HTML conversion involved)
//fs.writeFileSync('./DocsX/AllGlobal/Includes/Templates/Phases-processed.md', mainMarkdown);


//console.log('Markdown processing complete for Phases.md. Output saved locally to AllGlobal in DocsX as Phases-processed.md for testing purposes');

//// Save the processed markdown from 'Docs/AllGlobal' to official public documentation 'Docs/JSopX'
//// (no HTML conversion involved)
//fs.writeFileSync('./Docs/JSopX/Master/Phases.md', mainMarkdown);

//console.log('Markdown processing complete. Output saved to JSopX in Docs as official Phases.md');
