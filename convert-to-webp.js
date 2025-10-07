#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('Sharp is not installed. Installing sharp...');
  execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const PUBLIC_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');

// Store mapping of old paths to new paths
const pathMappings = new Map();

// Recursively find all image files
function findImages(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  const images = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return images;
}

// Convert image to WebP
async function convertToWebP(imagePath) {
  const dir = path.dirname(imagePath);
  const ext = path.extname(imagePath);
  const basename = path.basename(imagePath, ext);
  const webpPath = path.join(dir, `${basename}.webp`);
  
  try {
    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(webpPath);
    
    console.log(`✅ Converted: ${path.relative(PUBLIC_DIR, imagePath)} -> ${path.basename(webpPath)}`);
    
    // Store the mapping (relative to public dir)
    const oldRelativePath = path.relative(PUBLIC_DIR, imagePath);
    const newRelativePath = path.relative(PUBLIC_DIR, webpPath);
    pathMappings.set(oldRelativePath, newRelativePath);
    
    return webpPath;
  } catch (error) {
    console.error(`❌ Error converting ${imagePath}:`, error.message);
    return null;
  }
}

// Update references in source files
function updateReferences() {
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.html'];
  const filesToUpdate = [];
  
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
          filesToUpdate.push(fullPath);
        }
      }
    }
  }
  
  traverse(SRC_DIR);
  
  // Also check root level files
  const rootFiles = ['navbar.html', 'footer.html', 'floating-contact-widget.html'];
  rootFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
      filesToUpdate.push(fullPath);
    }
  });
  
  let totalReplacements = 0;
  
  for (const filePath of filesToUpdate) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fileModified = false;
      
      // For each mapping, try to replace references
      for (const [oldPath, newPath] of pathMappings.entries()) {
        const oldBasename = path.basename(oldPath);
        const newBasename = path.basename(newPath);
        
        // Different patterns to match
        const patterns = [
          // Standard file references with forward slash
          new RegExp(`(['"\`])/${oldPath.replace(/\\/g, '/')}\\1`, 'g'),
          new RegExp(`(['"\`])${oldPath.replace(/\\/g, '/')}\\1`, 'g'),
          // Just the filename with extension
          new RegExp(`(['"\`])[^'"]*/${oldBasename}\\1`, 'g'),
          new RegExp(`(['"\`])${oldBasename}\\1`, 'g'),
        ];
        
        patterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            // For filename-only matches, we need to be more careful
            if (pattern.source.includes(oldBasename)) {
              const updatedContent = content.replace(pattern, (match) => {
                const quote = match[0];
                const fullMatch = match.slice(1, -1); // Remove quotes
                
                // If it's a full path match
                if (fullMatch === `/${oldPath.replace(/\\/g, '/')}` || 
                    fullMatch === oldPath.replace(/\\/g, '/')) {
                  fileModified = true;
                  totalReplacements++;
                  return `${quote}/${newPath.replace(/\\/g, '/')}${quote}`;
                }
                
                // If it ends with the old basename, replace just the basename
                if (fullMatch.endsWith(oldBasename)) {
                  fileModified = true;
                  totalReplacements++;
                  const prefix = fullMatch.slice(0, -oldBasename.length);
                  return `${quote}${prefix}${newBasename}${quote}`;
                }
                
                return match;
              });
              content = updatedContent;
            }
          }
        });
      }
      
      if (fileModified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`📝 Updated references in: ${path.relative(__dirname, filePath)}`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${filePath}:`, error.message);
    }
  }
  
  console.log(`\n✨ Total replacements made: ${totalReplacements}`);
}

// Main execution
async function main() {
  console.log('🔍 Finding images in public directory...\n');
  const images = findImages(PUBLIC_DIR);
  
  console.log(`Found ${images.length} images to convert\n`);
  
  if (images.length === 0) {
    console.log('No images found to convert.');
    return;
  }
  
  console.log('🔄 Converting images to WebP...\n');
  
  const convertedImages = [];
  for (const imagePath of images) {
    const webpPath = await convertToWebP(imagePath);
    if (webpPath) {
      convertedImages.push({ original: imagePath, webp: webpPath });
    }
  }
  
  console.log(`\n✅ Converted ${convertedImages.length} images\n`);
  
  console.log('📝 Updating references in source code...\n');
  updateReferences();
  
  console.log('\n🗑️  Deleting original image files...\n');
  for (const { original } of convertedImages) {
    try {
      fs.unlinkSync(original);
      console.log(`🗑️  Deleted: ${path.relative(PUBLIC_DIR, original)}`);
    } catch (error) {
      console.error(`❌ Error deleting ${original}:`, error.message);
    }
  }
  
  console.log('\n✨ Conversion complete!');
  console.log(`\nSummary:`);
  console.log(`- Images converted: ${convertedImages.length}`);
  console.log(`- Original files deleted: ${convertedImages.length}`);
  console.log(`- Total code references updated: Check above for details\n`);
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
