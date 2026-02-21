const fs = require('fs');
const path = require('path');

const PRICING_DIR = path.join(__dirname, '../src/app/pricing');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file === 'page.tsx') {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(PRICING_DIR);

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Remove the hidden style object
    // Target: style={{position:'absolute',left:'-9999px',top:'auto',width:'1px',height:'1px',overflow:'hidden'}}
    // We use a regex that is flexible with spaces
    const hiddenStyleRegex = /style=\{\{.*?position:\s*'absolute'.*?left:\s*'-9999px'.*?\}\}\s*aria-hidden="true"/gs;

    // Replacement: Visible container class
    const visibleClass = 'className="max-w-4xl mx-auto px-4 py-16 text-neutral-300 space-y-6"';

    if (hiddenStyleRegex.test(content)) {
        console.log(`Fixing hidden content in: ${path.basename(path.dirname(filePath))}`);

        // Replace the style attribute and aria-hidden
        content = content.replace(hiddenStyleRegex, visibleClass);

        // 2. Adjust Headings to avoid H1 conflicts and style them
        // Current H1 -> H2
        content = content.replace(/<h1>/g, '<h2 className="text-3xl font-bold text-white mt-12 mb-6 font-syne">');
        content = content.replace(/<\/h1>/g, '</h2>');

        // Current H2 -> H3
        content = content.replace(/<h2>/g, '<h3 className="text-2xl font-bold text-[#FFD700] mt-8 mb-4">');
        content = content.replace(/<\/h2>/g, '</h3>');

        // Current H3 -> H4
        content = content.replace(/<h3>/g, '<h4 className="text-xl font-bold text-white mt-6 mb-3">');
        content = content.replace(/<\/h3>/g, '</h4>');

        // Current H4 -> H5
        content = content.replace(/<h4>/g, '<h5 className="text-lg font-bold text-[#FFD700] mt-4 mb-2">');
        content = content.replace(/<\/h4>/g, '</h5>');

        // Style paragraphs
        content = content.replace(/<p>/g, '<p className="leading-relaxed text-lg mb-4">');

        // Style lists
        content = content.replace(/<ul>/g, '<ul className="list-disc list-inside space-y-2 ml-4 mb-6">');
        content = content.replace(/<li>/g, '<li className="text-neutral-300">');

        // 3. Special handling for the FAQ hidden section
        // There might be a second hidden section. The regex /g flag should catch all occurrences if we used replaceAll or regex global.
        // However, replace() with global regex works.

        fs.writeFileSync(filePath, content);
    }
});

console.log('Finished un-hiding content on pricing pages.');
