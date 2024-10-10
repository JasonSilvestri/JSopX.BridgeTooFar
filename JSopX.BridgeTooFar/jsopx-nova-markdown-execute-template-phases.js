

const fs = require('fs');
const path = require('path');

// Regex for detecting comment block
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

// Function to clean hidden characters and remove comments
function cleanAndRemoveComments(content) {
    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '').replace(commentBlockRegex, '');
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

// Function to handle draft notice based on isDraft property
function handleDraftNotice(content, isDraft) {
    const draftNoticeIncludePath = path.join(__dirname, 'Draft-Notice.md');
    const draftNotice = fs.existsSync(draftNoticeIncludePath)
        ? fs.readFileSync(draftNoticeIncludePath, 'utf8')
        : `> [!CAUTION]\n> **This is a DRAFT:**\n> \n> The content before you is a draft version of the document. It **should not** be considered **accurate**.`;

    if (isDraft === 'true') {
        // Insert draft notice at the top if it's not already present
        if (!content.includes(draftNotice)) {
            content = `${draftNotice}\n\n${content}`;
        }
    } else {
        // Remove draft notice if it exists
        content = content.replace(draftNotice, '');
    }
    return content;
}

// Function to generate a Table of Contents, while ignoring footer sections
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

// Function to insert or replace the TOC
function insertTOC(content, toc) {
    if (content.includes('# Table of Contents') || content.includes('## Table of Contents') || content.includes('### Table of Contents')) {
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
    const properties = extractCommentProperties(content);
    content = handleDraftNotice(content, properties.isDraft);
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
    const properties = extractCommentProperties(parentContent);
    parentContent = handleDraftNotice(parentContent, properties.isDraft);

    const subTemplates = fs.readdirSync(subTemplatesDir).filter(file => file.endsWith('.md'));

    // Generate TOC for parent template
    let toc = generateTOC(parentContent);

    // Add sub-template links to TOC
    const subTemplateLinks = subTemplates.map(subTemplate => {
        const subTemplateName = subTemplate.replace('.md', '').replace(/-/g, ' ');
        const anchorLink = subTemplateName.toLowerCase().replace(/\s+/g, '-');
        return `- [${subTemplateName}](#${anchorLink})`;
    }).join('\n');
    toc += '\n' + subTemplateLinks;

    // Insert the TOC correctly in the parent content
    parentContent = insertTOC(parentContent, toc);

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
    
        console.log('Is Production Ready is false');
        return;
    } else {
        console.log('Is Production Ready is true');
    }

    if (properties.isDraft !== 'true') {
            console.log('IsDraft is false');
        } else{
            console.log('IsDraft is true');
    }
    

    // Process the parent template and generate individual sub-templates
    processParentTemplate(parentTemplatePath, subTemplatesDir);
}

// Example usage
const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
const subTemplatesDir = 'DocsX/AllGlobal/Includes/Templates/SubTemplates/Phases';
const childIncludesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir);



//// Most Stable version before above

//const fs = require('fs');
//const path = require('path');

//// Regex for detecting comment block
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

//// Function to clean hidden characters and remove comments
//function cleanAndRemoveComments(content) {
//    return content.replace(/^\uFEFF/, '').replace(/\s+$/, '').replace(commentBlockRegex, '');
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

//// Function to generate a Table of Contents, while ignoring footer sections
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

//// Function to insert navigation links
//function insertNavigationLinks(content, parentPath = null, isSubTemplate = false) {
//    const backToTop = '[Back to Top](#table-of-contents)';
//    const backToParent = parentPath ? `[Back to Parent](${parentPath})` : '';
//    const topNav = isSubTemplate ? '' : `${backToTop}\n\n`;
//    const bottomNav = isSubTemplate ? `\n\n${backToParent}` : '';
//    return `${topNav}${content}${bottomNav}`;
//}

//// Function to create standalone sub-template with parent navigation
//function createSubTemplate(subTemplatePath, parentPathLink) {
//    let content = fs.readFileSync(subTemplatePath, 'utf8');
//    content = insertNavigationLinks(content, parentPathLink, true);
//    const finalSubPath = subTemplatePath.replace('DocsX', 'Docs')
//        .replace('AllGlobal', 'JSopX')
//        .replace('Includes\\Templates\\SubTemplates', 'Master');

//    fs.writeFileSync(finalSubPath, content);
//    console.log(`Processed sub-template saved to: ${finalSubPath}`);
//}

//// Function to process the parent template and generate TOC with links to sub-templates
//function processParentTemplate(parentTemplatePath, subTemplatesDir) {
//    let parentContent = fs.readFileSync(parentTemplatePath, 'utf8');
//    const subTemplates = fs.readdirSync(subTemplatesDir).filter(file => file.endsWith('.md'));

//    // Generate TOC for parent template
//    let toc = generateTOC(parentContent);

//    // Add sub-template links to TOC
//    const subTemplateLinks = subTemplates.map(subTemplate => {
//        const subTemplateName = subTemplate.replace('.md', '').replace(/-/g, ' ');
//        const anchorLink = subTemplateName.toLowerCase().replace(/\s+/g, '-');
//        return `- [${subTemplateName}](#${anchorLink})`;
//    }).join('\n');
//    toc += '\n' + subTemplateLinks;

//    // Insert the TOC correctly in the parent content
//    parentContent = insertTOC(parentContent, toc);

//    // Clean up and process includes for parent
//    parentContent = processIncludes(parentContent);
//    parentContent = cleanAndRemoveComments(parentContent);

//    const finalParentPath = parentTemplatePath.replace('DocsX', 'Docs')
//        .replace('AllGlobal', 'JSopX')
//        .replace('Includes/Templates', 'Master');
//    fs.writeFileSync(finalParentPath, parentContent);
//    console.log(`Processed parent template saved to: ${finalParentPath}`);

//    // Create sub-template files with links back to the parent
//    const parentPathLink = finalParentPath.replace('.md', '');
//    subTemplates.forEach(subTemplate => {
//        const subTemplatePath = path.join(subTemplatesDir, subTemplate);
//        createSubTemplate(subTemplatePath, parentPathLink);
//    });
//}

//// Function to handle Phases generation
//function processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir) {
//    const content = fs.readFileSync(parentTemplatePath, 'utf8');
//    const properties = extractCommentProperties(content);

//    if (properties.isProductionReady !== 'true') {
//        console.log(`Skipping ${parentTemplatePath} as it is not marked for production.`);
//        return;
//    }

//    // Process the parent template and generate individual sub-templates
//    processParentTemplate(parentTemplatePath, subTemplatesDir);
//}

//// Example usage
//const parentTemplatePath = 'DocsX/AllGlobal/Includes/Templates/Phases.md';
//const subTemplatesDir = 'DocsX/AllGlobal/Includes/Templates/SubTemplates/Phases';
//const childIncludesDir = 'DocsX/AllGlobal/Includes/Content/Template/Phases';
//processPhases(parentTemplatePath, subTemplatesDir, childIncludesDir);
