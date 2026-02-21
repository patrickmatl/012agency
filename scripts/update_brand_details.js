const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '../src');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            // Process ts, tsx, js, jsx, json, md, mdx
            if (/\.(tsx|ts|js|jsx|json|md|mdx)$/.test(file)) {
                arrayOfFiles.push(fullPath);
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(ROOT_DIR);
let brandCount = 0;
let emailCount = 0;

files.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let modified = false;

    // 1. Replace "WL Creationx" with "012 Agency"
    if (content.includes('WL Creationx')) {
        content = content.replace(/WL Creationx/g, '012 Agency');
        modified = true;
        brandCount++;
    }

    // 2. Replace emails
    // info@wlcreationx.co.za -> info@012agency.co.za
    if (content.includes('info@wlcreationx.co.za')) {
        content = content.replace(/info@wlcreationx.co.za/g, 'info@012agency.co.za');
        modified = true;
        emailCount++;
    }

    // careers@wlcreationx.co.za -> careers@012agency.co.za
    // (Assuming careers might exist, user asked for it specifically)
    if (content.includes('careers@wlcreationx.co.za')) {
        content = content.replace(/careers@wlcreationx.co.za/g, 'careers@012agency.co.za');
        modified = true;
        emailCount++;
    }

    // Also check for just "careers@" if it was generic before, but better to be specific to avoid false positives.
    // User said "emails careers to careers@012agency.co.za". 
    // It's possible there's no old careers email and they want to ADD it, or replace an old one.
    // I will assume replacement of the old domain for now.

    if (modified) {
        console.log(`Updating: ${path.relative(ROOT_DIR, filePath)}`);
        fs.writeFileSync(filePath, content);
    }
});

console.log(`Brand updates: ${brandCount} files.`);
console.log(`Email updates: ${emailCount} files.`);
