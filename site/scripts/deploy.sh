#!/bin/bash

# GitHub Pages Deployment Script
# This script builds the site and prepares it for GitHub Pages deployment

echo "🚀 Building James Shrestha Website for GitHub Pages..."

# Build the static site
echo "📦 Building static site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if out directory exists
    if [ -d "out" ]; then
        echo "📁 Static files generated in 'out' directory"
        echo "📊 Build summary:"
        echo "   - Main page: out/index.html"
        echo "   - Static assets: out/_next/"
        echo "   - Images: out/*.jpeg, out/*.png, etc."
        
        echo ""
        echo "🌐 Deployment options:"
        echo "1. Upload contents of 'out' folder to your GitHub Pages repository"
        echo "2. Or push to GitHub and set up GitHub Actions for automatic deployment"
        echo ""
        echo "📝 Next steps:"
        echo "1. Copy all files from 'out' folder to your GitHub Pages repository"
        echo "2. Commit and push to GitHub"
        echo "3. Your site will be live at: https://yourusername.github.io/repository-name"
        
    else
        echo "❌ Build failed - 'out' directory not found"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi
