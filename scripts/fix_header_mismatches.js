const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../src/app');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(APP_DIR);
let fixedCount = 0;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let modified = false;

    // Regex to match header tags and ensure closing tag matches opening tag
    // Pattern: <h[1-6] [attributes] > content </h[1-6]>
    // usage of [\s\S]*? to match across newlines non-greedy

    // We identify mismatches where the opening level (group 2) doesn't equal closing level (group 4)
    // However, simple regex replacement is easier: just always enforce the closing tag to match the opening level.
    // Regex Breakdown:
    // (<h([1-6])\b[^>]*>)  -> Group 1: Opening Tag (e.g. <h2 className="...">), Group 2: The Level (2)
    // ([\s\S]*?)           -> Group 3: Inner content (non-greedy)
    // (<\/h[1-6]>)         -> Group 4: Closing Tag (e.g. </h6>)

    const headerRegex = /(<h([1-6])\b[^>]*>)([\s\S]*?)(<\/h[1-6]>)/gi;

    content = content.replace(headerRegex, (match, openTag, level, innerContent, closeTag) => {
        // Construct the correct closing tag
        const correctCloseTag = `</h${level}>`;

        if (closeTag !== correctCloseTag) {
            console.log(`Fixing mismatch in ${path.basename(filePath)}: ${openTag}...${closeTag} -> ${correctCloseTag}`);
            modified = true;
            return `${openTag}${innerContent}${correctCloseTag}`;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(filePath, content);
        fixedCount++;
    }
});

console.log(`Header Mismatch Fix Complete. Fixed visible tags in ${fixedCount} files.`);
