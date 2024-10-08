const fs = require('fs');
const path = require('path');

// Define the regex to match the comment block
const commentBlockRegex = /<!-- START JSOPX NOVA DOCX HEADER[\s\S]*?END JSOPX NOVA DOCX HEADER -->/g;


// Read the main README.md file
let mainMarkdown = fs.readFileSync('./DocsX/jsopx.BridgeTooFar/Master/p1/v1/Includes/Templates/README.md', 'utf8');


// Manually replace {{[jsopx-includes](path)}} with the file content
mainMarkdown = mainMarkdown.replace(/\{\{\[jsopx-includes\]\((.*?)\)\}\}/g, (match, includePath) => {
    const absolutePath = path.join(__dirname, includePath);
    try {
        return fs.readFileSync(absolutePath, 'utf8');
    } catch (err) {
        console.error(`Error including file: ${absolutePath}`);
        return '<!-- Error including file -->';
    }
});

// Remove the comment block if it exists after includes
mainMarkdown = mainMarkdown.replace(commentBlockRegex, '');

// Save the processed README.md markdown to official public documentation 
// 'Docs/jsopx.BridgeTooFar/Master/p1/v1' (no HTML conversion involved)
fs.writeFileSync('./Docs/jsopx.BridgeTooFar/Master/p1/v1/README.md', mainMarkdown);

console.log('Markdown processing complete for ReadMe.md for Bridge Too Far. Output saved locally to official v1 in Docs as README.md.');

// Save the processed README.md markdown to official public documentation
// 'Docs/jsopx.BridgeTooFar/Master' as official root ReadMe.md 
// (no HTML conversion involved)
fs.writeFileSync('./Docs/jsopx.BridgeTooFar/Master/README.md', mainMarkdown);

console.log('Markdown processing complete for ReadMe.md for Bridge Too Far. Output saved locally to official absolue root in Docs as README.md.');
