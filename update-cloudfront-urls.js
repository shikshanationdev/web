#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CLOUDFRONT_URL = 'https://d10ge3ci2b88dm.cloudfront.net';
const SRC_DIR = path.join(__dirname, 'src');

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Update WebP URLs in files
function updateCloudFrontUrls() {
  const filesToUpdate = findSourceFiles(SRC_DIR);
  
  // Also check root level HTML files
  const rootFiles = ['navbar.html', 'footer.html', 'floating-contact-widget.html'];
  rootFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      filesToUpdate.push(fullPath);
    }
  });
  
  let totalReplacements = 0;
  let filesModified = 0;
  
  for (const filePath of filesToUpdate) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fileModified = false;
      let replacementsInFile = 0;
      
      // Pattern to match local WebP image paths (not external URLs)
      // Matches: "/path/to/image.webp" or '/path/to/image.webp'
      // But NOT: "https://..." or "http://..."
      const webpPattern = /(['"`])(\/)([^'"`]*?\.webp)\1/g;
      
      const updatedContent = content.replace(webpPattern, (match, quote, slash, imagePath) => {
        // Skip if it's already using CloudFront or another external URL
        if (content.substring(content.lastIndexOf('https://', content.indexOf(match)), content.indexOf(match)).includes('https://')) {
          return match;
        }
        
        fileModified = true;
        replacementsInFile++;
        
        // Return the CloudFront URL with the image path
        return `${quote}${CLOUDFRONT_URL}/${imagePath}${quote}`;
      });
      
      if (fileModified) {
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        filesModified++;
        totalReplacements += replacementsInFile;
        console.log(`✅ Updated ${replacementsInFile} WebP URLs in: ${path.relative(__dirname, filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error.message);
    }
  }
  
  console.log(`\n✨ Complete!`);
  console.log(`- Files modified: ${filesModified}`);
  console.log(`- Total WebP URLs updated: ${totalReplacements}`);
  console.log(`- CloudFront URL: ${CLOUDFRONT_URL}\n`);
}

// Main execution
console.log('🔄 Updating WebP image URLs to use CloudFront...\n');
console.log(`CloudFront URL: ${CLOUDFRONT_URL}\n`);

updateCloudFrontUrls();
