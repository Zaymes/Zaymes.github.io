# GitHub Pages Setup Guide

## 🚀 Quick Setup

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 2. Push Your Code
```bash
git add .
git commit -m "Add GitHub Actions workflow for deployment"
git push origin main
```

### 3. Monitor Deployment
1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, your site will be live!

## 🔧 What the Workflow Does

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Checkout** your code
2. **Setup Node.js 18** (required for Next.js 14)
3. **Install dependencies** from `site/package-lock.json`
4. **Build** the static site using `npm run build`
5. **Deploy** the `site/out` folder to GitHub Pages

## 🌐 Your Live Site

Once deployed, your site will be available at:
`https://zaymes.github.io/` (or your username)

## 🔄 Automatic Updates

Every time you push to the `main` branch:
- The workflow automatically runs
- Builds your site with the latest changes
- Deploys the updated site
- No manual intervention needed!

## 🛠️ Troubleshooting

### If the workflow fails:
1. Check the **Actions** tab for error details
2. Common issues:
   - Node.js version mismatch (fixed with Node 18)
   - Missing dependencies
   - Build errors

### If the site doesn't update:
1. Wait 2-3 minutes for deployment
2. Clear your browser cache
3. Check the Actions tab for deployment status

## 📝 Making Updates

To update your site:
1. Edit content in `site/lib/content.js`
2. Test locally with `npm run dev`
3. Commit and push changes
4. Site updates automatically!

## ✅ Success Indicators

- ✅ Workflow shows green checkmark in Actions tab
- ✅ Site loads at your GitHub Pages URL
- ✅ All styling and functionality works
- ✅ Updates appear after pushing changes
