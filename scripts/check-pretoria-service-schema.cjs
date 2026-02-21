const fs = require('fs');
const path = require('path');

function findPretoriaServicePages(baseDir) {
  const results = [];
  function walk(dir) {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // If this directory corresponds to a Pretoria service route, collect its page.tsx
        if (entry.name.endsWith('-pretoria')) {
          const pageTsx = path.join(fullPath, 'page.tsx');
          if (fs.existsSync(pageTsx)) {
            results.push(pageTsx);
          }
        }
        // Recurse to catch nested structures that might also end with -pretoria
        walk(fullPath);
      }
    }
  }
  walk(baseDir);
  return results;
}

function hasServiceSchema(content) {
  // Robust match for Service JSON-LD regardless of quote style
  const doubleQuoted = /"@type"\s*:\s*"Service"/;
  const singleQuoted = /'@type'\s*:\s*'Service'/;
  return doubleQuoted.test(content) || singleQuoted.test(content);
}

function main() {
  const root = process.cwd();
  const servicesDir = path.join(root, 'src', 'app', 'services');
  if (!fs.existsSync(servicesDir)) {
    console.error(`[Service Schema Check] Directory not found: ${servicesDir}`);
    process.exit(1);
  }

  const pages = findPretoriaServicePages(servicesDir);
  const missing = [];

  for (const file of pages) {
    let content = '';
    try {
      content = fs.readFileSync(file, 'utf8');
    } catch {
      missing.push(file);
      continue;
    }
    if (!hasServiceSchema(content)) {
      missing.push(file);
    }
  }

  if (missing.length > 0) {
    console.error('[Service Schema Check] Missing Service JSON-LD in the following Pretoria service pages:');
    for (const file of missing) {
      console.error(` - ${path.relative(root, file)}`);
    }
    console.error(
      `\nAdd a <script type="application/ld+json"> with a Service schema to all Pretoria service pages listed above.`
    );
    process.exit(1);
  } else {
    console.log(`[Service Schema Check] OK - ${pages.length} Pretoria service page(s) contain a Service schema.`);
  }
}

if (require.main === module) {
  main();
}

