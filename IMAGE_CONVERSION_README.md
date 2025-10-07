# Image Conversion Script Documentation

## Overview
This script automatically converts all JPEG, JPG, and PNG images in the `public` folder to WebP format, updates all references in the codebase, and removes the original files.

## What It Does

1. **Finds Images**: Recursively scans the `public` folder and all subfolders for `.jpg`, `.jpeg`, and `.png` files
2. **Converts to WebP**: Converts each image to WebP format with 85% quality using Sharp library
3. **Updates References**: Automatically updates all image references in:
   - TypeScript/JavaScript files (`.ts`, `.tsx`, `.js`, `.jsx`)
   - JSON files
   - CSS/SCSS files
   - HTML files
   - Source code in the `src` directory
   - Root level HTML files
4. **Deletes Originals**: Removes the original PNG/JPEG/JPG files after successful conversion

## Usage

### Run the conversion script:
```bash
npm run convert-images
```

or

```bash
node convert-to-webp.js
```

## Benefits of WebP Format

- **Smaller File Sizes**: WebP images are typically 25-35% smaller than PNG/JPEG
- **Better Performance**: Faster page load times and reduced bandwidth usage
- **Wide Browser Support**: Supported by all modern browsers
- **Quality**: Maintains visual quality while reducing file size

## Script Output

The script provides detailed logging:
- ✅ Successfully converted images
- 📝 Updated source files
- 🗑️ Deleted original files
- ❌ Any errors encountered

## Example Output

```
🔍 Finding images in public directory...

Found 65 images to convert

🔄 Converting images to WebP...

✅ Converted: home/banner.png -> banner.webp
✅ Converted: about-us/whoweare.jpg -> whoweare.webp
...

📝 Updating references in source code...

📝 Updated references in: src/components/Footer.tsx
📝 Updated references in: src/components/HomePageSections/Hero.tsx
...

🗑️ Deleting original image files...

✨ Conversion complete!

Summary:
- Images converted: 65
- Original files deleted: 65
- Total code references updated: 56
```

## Requirements

- Node.js
- Sharp library (automatically installed if not present)

## Notes

- The script uses 85% quality for WebP conversion, which provides a good balance between file size and visual quality
- All image paths are automatically updated in the codebase
- External URLs (https://) are not modified, only local images
- The script is safe to run multiple times (it only processes PNG/JPEG/JPG files)

## Troubleshooting

If you encounter any issues:

1. **Sharp not installed**: The script will automatically attempt to install it
2. **Permission errors**: Ensure you have write permissions for the `public` folder
3. **File not found**: Verify the file paths in your codebase match the actual file locations

## Reverting Changes

If you need to revert:
1. Restore original images from version control (git)
2. Run: `git checkout -- public/` 
3. Run: `git checkout -- src/`

## Maintenance

This script can be run anytime you add new PNG/JPEG/JPG images to the project. Simply place your images in the `public` folder and run the script.
