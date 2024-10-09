const fs = require('fs');
const path = require('path');

// Function to scan for properties in the comment block
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

// Function to clean hidden characters and remove comments
function cleanAndRemoveComments(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '').replace(/<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g, '');
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

// Function to generate Table of Contents for parent template
function generateParentTOC(subTemplates) {
    const toc = subTemplates.map((subTemplate) => {
        const subTemplateName = subTemplate.replace('.md', '').replace(/-/g, ' ');
        const anchorLink = subTemplateName.toLowerCase().replace(/\s+/g, '-');
        return `- [${subTemplateName}](#${anchorLink})`;
    }).join('\n');
    return `# Table of Contents\n${toc}\n\n`;
}

// Function to insert or replace the TOC after the first heading
function insertTOCAfterFirstHeading(content, toc) {
    // Remove any existing "Table of Contents" headings to avoid duplicates
    content = content.replace(/# Table of Contents\n/g, '');

    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
    }

    const overviewMatch = content.match(/(#{1,2} Overview)/);
    if (overviewMatch) {
        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
    }

    return `# Table of Contents\n${toc}\n\n${content}`;
}


// Function to insert navigation links
function insertNavigationLinks(content, parentPath = null, isSubTemplate = false) {
    const backToTop = '[Back to Top](#table-of-contents)';
    const backToParent = parentPath ? `[Back to Parent](${parentPath})` : '';
    const topNav = isSubTemplate ? '' : `${backToTop}\n\n`;
    const bottomNav = isSubTemplate ? `\n\n${backToParent}` : '';
    return `${topNav}${content}${bottomNav}`;
}

// Function to create standalone sub-template with parent navigation
function createSubTemplate(subTemplatePath, parentPathLink) {
    let content = fs.readFileSync(subTemplatePath, 'utf8');
    content = insertNavigationLinks(content, parentPathLink, true);
    const finalSubPath = subTemplatePath.replace('DocsX', 'Docs')
        .replace('AllGlobal', 'JSopX')
        .replace('Includes\\Templates\\SubTemplates', 'Master');

    fs.writeFileSync(finalSubPath, content);
    console.log(`Processed sub-template saved to: ${finalSubPath}`);
}

// Function to process the parent template and generate TOC with links to sub-templates
function processParentTemplate(parentTemplatePath, subTemplatesDir) {
    let parentContent = fs.readFileSync(parentTemplatePath, 'utf8');
    const subTemplates = fs.readdirSync(subTemplatesDir).filter(file => file.endsWith('.md'));

    // Generate TOC for parent template
    const toc = generateParentTOC(subTemplates);
    parentContent = insertTOCAfterFirstHeading(parentContent, toc);

    // Clean up and process includes for parent
    parentContent = processIncludes(parentContent);
    parentContent = cleanAndRemoveComments(parentContent);

    const finalParentPath = parentTemplatePath.replace('DocsX', 'Docs')
        .replace('AllGlobal', 'JSopX')
        .replace('Includes/Templates', 'Master');

    fs.writeFileSync(finalParentPath, parentContent);
    console.log(`Processed parent template saved to: ${finalParentPath}`);

    // Create sub-template files with links back to the parent
    const parentPathLink = finalParentPath.replace('.md', '');
    subTemplates.forEach(subTemplate => {
        const subTemplatePath = path.join(subTemplatesDir, subTemplate);
        createSubTemplate(subTemplatePath, parentPathLink);
    });
}

// Function to handle Phases generation
function processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir) {
    const content = fs.readFileSync(parentTemplatePath, 'utf8');
    const properties = extractCommentProperties(content);

    if (properties.isProductionReady !== 'true') {
        console.log(`Skipping ${parentTemplatePath} as it is not marked for production.`);
        return;
    }

    // Process the parent template and generate individual sub-templates
    processParentTemplate(parentTemplatePath, subTemplatesDir);
}

// Example usage
const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
const subTemplatesDir = 'DocsX/AllGlobal/Includes/Templates/SubTemplates/Phases';
const childIncludesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir);



//const fs = require('fs');
//const path = require('path');

//// Define the regex to match the comment block
//const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

//// Function to scan for properties in the comment block
//function extractCommentProperties(content) {
//    const properties = {};
//    const match = content.match(commentBlockRegex);

//    if (match) {
//        const block = match[0];
//        const propertyRegex = /(\w+):\s*(\w+)/g;
//        let propMatch;
//        while ((propMatch = propertyRegex.exec(block)) !== null) {
//            properties[propMatch[1]] = propMatch[2];
//        }
//    }
//    return properties;
//}

//// Function to handle properties
//function handleProperties(properties, filePath) {
//    if (properties.isDraft === 'true') {
//        console.log(`Skipping production tasks for ${filePath} (Draft mode).`);
//    }
//    if (properties.toc === 'true') {
//        console.log(`Generating Table of Contents for ${filePath}`);
//        return true; // Flag to generate TOC
//    }
//    return false;
//}

//// Function to process includes in markdown
//function processIncludes(content) {
//    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
//        const absolutePath = path.join(__dirname, includePath);
//        try {
//            return fs.readFileSync(absolutePath, 'utf8');
//        } catch (err) {
//            console.error(`Error including file: ${absolutePath}`);
//            return '<!-- Error including file -->';
//        }
//    });
//}

//// Function to remove comments from markdown
//function removeComments(content) {
//    return content.replace(commentBlockRegex, '');
//}

//// Function to generate Table of Contents
//function generateTOC(content) {
//    const toc = [];
//    const lines = content.split('\n');
//    let footerDetected = false;

//    lines.forEach(line => {
//        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
//            footerDetected = true;
//        }

//        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
//        if (headerMatch) {
//            const level = headerMatch[1].length;
//            const headerText = headerMatch[2].trim();
//            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

//            if (!footerDetected && !headerText.toLowerCase().includes('from the jsilvestri.com beta')) {
//                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
//            }
//        }
//    });

//    return toc.join('\n');
//}

//// Function to insert or replace the TOC
//function insertTOC(content, toc) {
//    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
//        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
//    }

//    const overviewMatch = content.match(/(#{1,2} Overview)/);
//    if (overviewMatch) {
//        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
//    }

//    return `# Table of Contents\n${toc}\n\n${content}`;
//}

//// Function to clean hidden characters
//function cleanHiddenCharacters(content) {
//    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
//}

//// Function to insert "Back to Top" and "Back to Parent" links only for sub-templates
//function insertNavigationLinks(content, isSubTemplate) {
//    const backToTop = '[Back to Top](#table-of-contents)';
//    const backToParent = '[Back to Parent](#)';
//    if (isSubTemplate) {
//        return `${backToTop}\n\n${content}\n\n${backToParent}`;
//    }
//    return content;
//}

//// Function to process Phases by combining Parent Templates, Sub Templates, and Child Includes
//function processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir) {
//    let combinedContent = fs.readFileSync(parentTemplatePath, 'utf8');

//    // Process sub templates
//    const subTemplates = fs.readdirSync(subTemplatesDir).filter(file => file.endsWith('.md'));
//    subTemplates.forEach(subTemplate => {
//        const subTemplatePath = path.join(subTemplatesDir, subTemplate);
//        let subTemplateContent = fs.readFileSync(subTemplatePath, 'utf8');
//        subTemplateContent = insertNavigationLinks(subTemplateContent, true); // Add navigation links for sub templates
//        combinedContent += `\n\n${subTemplateContent}`;
//    });

//    // Process child includes in the parent template
//    combinedContent = processIncludes(combinedContent);

//    // Save the final content to the Docs directory with the proper path structure
//    const finalPath = parentTemplatePath
//        .replace('DocsX', 'Docs')
//        .replace('Includes/Templates', 'Master')
//        .replace('AllGlobal', 'JSopX');
//    fs.writeFileSync(finalPath, combinedContent);
//    console.log(`Processed Phases saved to: ${finalPath}`);
//}

//// Function to process markdown files (universal operations for all phases and templates)
//function processMarkdownFile(filePath) {
//    let markdownContent = fs.readFileSync(filePath, 'utf8');
//    const properties = extractCommentProperties(markdownContent);

//    console.log(`Processing file ${filePath}`);

//    // Handle file based on extracted properties
//    const generateTOCFlag = handleProperties(properties, filePath);

//    // Clean Hidden Characters
//    markdownContent = cleanHiddenCharacters(markdownContent);

//    // Process includes
//    markdownContent = processIncludes(markdownContent);

//    // Remove comments
//    markdownContent = removeComments(markdownContent);

//    // Generate TOC if enabled
//    if (generateTOCFlag) {
//        const toc = generateTOC(markdownContent);
//        markdownContent = insertTOC(markdownContent, toc);
//    }

//    // Save the processed file to the Docs directory with the right path
//    const processedFilePath = filePath
//        .replace('DocsX', 'Docs')
//        .replace('AllGlobal', 'JSopX')
//        .replace('Includes/Templates', 'Master');

//    fs.writeFileSync(processedFilePath, markdownContent);
//    console.log(`Processed markdown saved to: ${processedFilePath}`);
//}

//// Example usage for Phases
//const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//const subTemplatesDir = 'DocsX/AllGlobal/Includes/Templates/SubTemplates/Phases';
//const childIncludesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
//processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir);

//// Example usage for processing a markdown file
//const markdownFilePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//processMarkdownFile(markdownFilePath);


//const fs = require('fs');
//const path = require('path');

//// Define the regex to match the comment block
//const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

//// Function to scan for properties in the comment block
//function extractCommentProperties(content) {
//    const properties = {};
//    const match = content.match(commentBlockRegex);

//    if (match) {
//        const block = match[0];
//        const propertyRegex = /(\w+):\s*(\w+)/g;
//        let propMatch;
//        while ((propMatch = propertyRegex.exec(block)) !== null) {
//            properties[propMatch[1]] = propMatch[2];
//        }
//    }
//    return properties;
//}

//// Function to handle properties
//function handleProperties(properties, filePath) {
//    if (properties.isDraft === 'true') {
//        console.log(`Skipping production tasks for ${filePath} (Draft mode).`);
//    }
//    if (properties.toc === 'true') {
//        console.log(`Generating Table of Contents for ${filePath}`);
//        return true; // Flag to generate TOC
//    }
//    return false;
//}

//// Function to process includes in markdown
//function processIncludes(content) {
//    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
//        const absolutePath = path.join(__dirname, includePath);
//        try {
//            return fs.readFileSync(absolutePath, 'utf8');
//        } catch (err) {
//            console.error(`Error including file: ${absolutePath}`);
//            return '<!-- Error including file -->';
//        }
//    });
//}

//// Function to remove comments from markdown
//function removeComments(content) {
//    return content.replace(commentBlockRegex, '');
//}

//// Function to generate Table of Contents
//function generateTOC(content) {
//    const toc = [];
//    const lines = content.split('\n');
//    let footerDetected = false;

//    lines.forEach(line => {
//        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
//            footerDetected = true;
//        }

//        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
//        if (headerMatch) {
//            const level = headerMatch[1].length;
//            const headerText = headerMatch[2].trim();
//            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

//            if (!footerDetected && !headerText.toLowerCase().includes('from the jsilvestri.com beta')) {
//                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
//            }
//        }
//    });

//    return toc.join('\n');
//}

//// Function to insert or replace the TOC
//function insertTOC(content, toc) {
//    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
//        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
//    }

//    const overviewMatch = content.match(/(#{1,2} Overview)/);
//    if (overviewMatch) {
//        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
//    }

//    return `# Table of Contents\n${toc}\n\n${content}`;
//}

//// Function to clean hidden characters
//function cleanHiddenCharacters(content) {
//    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
//}

//// Function to insert "Back to Top" and "Back to Parent" links
//function insertNavigationLinks(content) {
//    const backToTop = '[Back to Top](#table-of-contents)';
//    const backToParent = '[Back to Parent](#)';
//    return `${backToTop}\n\n${content}\n\n${backToParent}`;
//}

//// Function to process Phases by combining Parent Templates, Sub Templates, and Child Includes
//function processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir) {
//    let combinedContent = fs.readFileSync(parentTemplatePath, 'utf8');

//    // Process sub templates
//    const subTemplates = fs.readdirSync(subTemplatesDir).filter(file => file.endsWith('.md'));
//    subTemplates.forEach(subTemplate => {
//        const subTemplatePath = path.join(subTemplatesDir, subTemplate);
//        const subTemplateContent = fs.readFileSync(subTemplatePath, 'utf8');
//        combinedContent += `\n\n${subTemplateContent}`;
//    });

//    // Process child includes
//    combinedContent = processIncludes(combinedContent);

//    // Add navigation links
//    combinedContent = insertNavigationLinks(combinedContent);

//    // Save the final content to the Docs directory with the proper path structure
//    const finalPath = parentTemplatePath
//        .replace('DocsX', 'Docs')
//        .replace('Includes/Templates', 'Master')
//        .replace('AllGlobal', 'JSopX');
//    fs.writeFileSync(finalPath, combinedContent);
//    console.log(`Processed Phases saved to: ${finalPath}`);
//}

//// Function to process markdown files (universal operations for all phases and templates)
//function processMarkdownFile(filePath) {
//    let markdownContent = fs.readFileSync(filePath, 'utf8');
//    const properties = extractCommentProperties(markdownContent);

//    console.log(`Processing file ${filePath}`);

//    // Handle file based on extracted properties
//    const generateTOCFlag = handleProperties(properties, filePath);

//    // Clean Hidden Characters
//    markdownContent = cleanHiddenCharacters(markdownContent);

//    // Process includes
//    markdownContent = processIncludes(markdownContent);

//    // Remove comments
//    markdownContent = removeComments(markdownContent);

//    // Generate TOC if enabled
//    if (generateTOCFlag) {
//        const toc = generateTOC(markdownContent);
//        markdownContent = insertTOC(markdownContent, toc);
//    }

//    // Add navigation links
//    markdownContent = insertNavigationLinks(markdownContent);

//    // Save the processed file to the Docs directory with the right path
//    const processedFilePath = filePath
//        .replace('DocsX', 'Docs')
//        .replace('AllGlobal', 'JSopX')
//        .replace('Includes/Templates', 'Master');
//    fs.writeFileSync(processedFilePath, markdownContent);
//    console.log(`Processed markdown saved to: ${processedFilePath}`);
//}

//// Example usage for Phases
//const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//const subTemplatesDir = 'DocsX/AllGlobal/Includes/Templates/SubTemplates/Phases';
//const childIncludesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
//processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir);

//// Example usage for processing a markdown file
//const markdownFilePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//processMarkdownFile(markdownFilePath);



//// Example usage
//const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//const subTemplatesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
//processPhases(parentTemplatePath, subTemplatesDir);




//const fs = require('fs');
//const path = require('path');
//const MarkdownIt = require('markdown-it');
//const markdownIt = new MarkdownIt();
//const markdownlint = require('markdownlint');

//// Define the regex to match the comment block
//const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;

//// Function to scan for properties in the comment block
//function extractCommentProperties(content) {
//    const properties = {};
//    const match = content.match(commentBlockRegex);

//    if (match) {
//        const block = match[0];
//        const propertyRegex = /(\w+):\s*(\w+)/g;
//        let propMatch;
//        while ((propMatch = propertyRegex.exec(block)) !== null) {
//            properties[propMatch[1]] = propMatch[2];
//        }
//    }
//    return properties;
//}

//// Function to handle properties
//function handleProperties(properties, filePath) {
//    if (properties.isDraft === 'true') {
//        console.log(`Skipping production tasks for ${filePath} (Draft mode).`);
//    }
//    if (properties.toc === 'true') {
//        console.log(`Generating Table of Contents for ${filePath}`);
//        return true; // Flag to generate TOC
//    }
//    return false;
//}

//// Function to validate markdown content using markdownlint
//function validateMarkdown(content) {
//    let isValid = true;
//    const options = {
//        strings: {
//            content: content
//        },
//        config: {
//            "default": true
//        }
//    };

//    const result = markdownlint.sync(options);
//    const lintErrors = result.content;

//    if (lintErrors.length > 0) {
//        console.warn('Markdown lint issues found:', lintErrors);
//        isValid = false;
//    }
//    return isValid;
//}

//// Function to process includes in markdown
//function processIncludes(content) {
//    return content.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
//        const absolutePath = path.join(__dirname, includePath);
//        try {
//            return fs.readFileSync(absolutePath, 'utf8');
//        } catch (err) {
//            console.error(`Error including file: ${absolutePath}`);
//            return '<!-- Error including file -->';
//        }
//    });
//}

//// Function to remove comments from markdown
//function removeComments(content) {
//    return content.replace(commentBlockRegex, '');
//}

//// Function to generate Table of Contents
//function generateTOC(content) {
//    const toc = [];
//    const lines = content.split('\n');
//    let footerDetected = false;

//    lines.forEach(line => {
//        if (line.match(/^---/) || line.includes('##### [JSopX.com]')) {
//            footerDetected = true;
//        }

//        const headerMatch = line.match(/^(#{1,6})\s+(.*)/);
//        if (headerMatch) {
//            const level = headerMatch[1].length;
//            const headerText = headerMatch[2].trim();
//            const anchor = headerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

//            if (!footerDetected && !headerText.toLowerCase().includes('from the jsilvestri.com beta')) {
//                toc.push(`${' '.repeat((level - 1) * 2)}- [${headerText}](#${anchor})`);
//            }
//        }
//    });

//    return toc.join('\n');
//}

//// Function to insert or replace the TOC
//function insertTOC(content, toc) {
//    if (content.includes('# Table of Contents') || content.includes('## Table of Contents')) {
//        return content.replace(/(#{1,2} Table of Contents[\s\S]*?)(\n#{1,6}\s+)/, `# Table of Contents\n${toc}\n\n$2`);
//    }

//    const overviewMatch = content.match(/(#{1,2} Overview)/);
//    if (overviewMatch) {
//        return content.replace(overviewMatch[0], `${overviewMatch[0]}\n\n# Table of Contents\n${toc}`);
//    }

//    return `# Table of Contents\n${toc}\n\n${content}`;
//}

//// Function to clean hidden characters
//function cleanHiddenCharacters(content) {
//    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '');
//}

//// Function to process markdown files with validation
//function processMarkdownFileWithValidation(filePath) {
//    let markdownContent = fs.readFileSync(filePath, 'utf8');
//    markdownContent = cleanHiddenCharacters(markdownContent);

//    const properties = extractCommentProperties(markdownContent);
//    console.log(`Processing file ${filePath}`);

//    const generateTOCFlag = handleProperties(properties, filePath);

//    markdownContent = processIncludes(markdownContent);
//    markdownContent = removeComments(markdownContent);

//    if (!validateMarkdown(markdownContent)) {
//        console.error(`Validation failed for ${filePath}`);
//        return;
//    }

//    if (generateTOCFlag) {
//        const toc = generateTOC(markdownContent);
//        markdownContent = insertTOC(markdownContent, toc);
//    }

//    const processedFilePath = filePath
//        .replace('DocsX', 'Docs')
//        .replace('Includes/Templates/', '');

//    fs.writeFileSync(processedFilePath, markdownContent);
//    console.log(`Processed and validated markdown saved to: ${processedFilePath}`);
//}

//// Example usage
//const markdownFilePath = 'DocsX/jsopx.BridgeTooFar/Master/p1/v1/Includes/Templates/README.md';
//processMarkdownFileWithValidation(markdownFilePath);




//// Function to process markdown files (universal operations for all phases and templates)
//function processMarkdownFile(filePath) {
//    let markdownContent = fs.readFileSync(filePath, 'utf8');
//    const properties = extractCommentProperties(markdownContent);

//    console.log(`Processing file ${filePath}`);

//    const generateTOCFlag = handleProperties(properties, filePath);

//    markdownContent = processIncludes(markdownContent);

//    markdownContent = removeComments(markdownContent);

//    if (generateTOCFlag) {
//        const toc = generateTOC(markdownContent);
//        markdownContent = insertTOC(markdownContent, toc);
//    }

//    const processedFilePath = filePath
//        .replace('DocsX', 'Docs')
//        .replace('Includes/Templates/', '');

//    fs.writeFileSync(processedFilePath, markdownContent);
//    console.log(`Processed markdown saved to: ${processedFilePath}`);
//}

// Example usage
//const markdownFilePath = 'DocsX/jsopx.BridgeTooFar/Master/p1/v1/Includes/Templates/README.md'; // Example path for p1/v1/
//processMarkdownFile(markdownFilePath);



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
