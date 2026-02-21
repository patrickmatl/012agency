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

    // Regex to find the standard hidden style pattern used in this project
    // Matches variations of: style={{ position: 'absolute', left: '-9999px', ... }}
    const hiddenStyleRegex = /style=\{\{\s*position:\s*'absolute',\s*left:\s*'-9999px'.*?\}\}\s*aria-hidden="true"/gs;

    // Also check for the "width: 1px" variation if not caught by above
    const hiddenStyleRegex2 = /style=\{\{\s*position:\s*'absolute'.*?width:\s*'1px'.*?\}\}\s*aria-hidden="true"/gs;

    // Replacement class: Visible, readable, and dark-mode friendly
    const visibleClass = 'className="max-w-5xl mx-auto px-4 py-8 text-neutral-300 space-y-6"';

    if (hiddenStyleRegex.test(content) || hiddenStyleRegex2.test(content)) {
        console.log(`Un-hiding content in: ${path.relative(APP_DIR, filePath)}`);

        // Replace the style attribute and aria-hidden
        content = content.replace(hiddenStyleRegex, visibleClass);
        content = content.replace(hiddenStyleRegex2, visibleClass);

        // STYLE CLEANUP:
        // Convert H1s inside these sections to styled H2s (since page usually has a main H1)
        // We need to be careful not to replace the REAL main H1 if it exists elsewhere. 
        // But usually these hidden blocks contain a duplicate "SEO H1". 
        // Strategy: Just style them all nicely.

        content = content.replace(/<h1>/g, '<h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">');
        content = content.replace(/<\/h1>/g, '</h2>');

        content = content.replace(/<h2>/g, '<h3 className="text-2xl font-bold text-[#FFD700] mt-10 mb-5">');
        content = content.replace(/<\/h2>/g, '</h3>');

        content = content.replace(/<h3>/g, '<h4 className="text-xl font-bold text-white mt-8 mb-4">');
        content = content.replace(/<\/h3>/g, '</h4>');

        content = content.replace(/<h4>/g, '<h5 className="text-lg font-bold text-[#FFD700] mt-6 mb-3">');
        content = content.replace(/<\/h4>/g, '</h5>');

        content = content.replace(/<h5>/g, '<h6 className="text-base font-bold text-white mt-4 mb-2">');
        content = content.replace(/<\/h5>/g, '</h6>');

        // Style paragraphs
        content = content.replace(/<p>/g, '<p className="leading-relaxed text-lg mb-4">');

        // Style lists
        content = content.replace(/<ul>/g, '<ul className="list-disc list-inside space-y-2 ml-4 mb-6">');
        content = content.replace(/<li>/g, '<li className="text-neutral-300">');

        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        fixedCount++;
    }
});

console.log(`Global Cleanse Complete. Un-hidden content in ${fixedCount} files.`);
