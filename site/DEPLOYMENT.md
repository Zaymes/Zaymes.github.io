# Deployment Guide

This guide will help you deploy your James Shrestha website to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `out`
6. Deploy!

### Option 3: GitHub Pages

1. Run `npm run build` locally
2. The `out` folder contains your static files
3. Push the `out` folder contents to a `gh-pages` branch
4. Enable GitHub Pages in your repository settings

## 📝 Pre-deployment Checklist

- [ ] Update all content in `lib/content.js`
- [ ] Test the website locally with `npm run dev`
- [ ] Build the website with `npm run build`
- [ ] Check that all images are in the `public` folder
- [ ] Verify all links work correctly
- [ ] Test on mobile devices

## 🔧 Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file in the root directory
2. Add your variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```
3. Update your deployment platform with these variables

## 📊 Analytics Setup

To add Google Analytics:

1. Get your GA tracking ID
2. Add it to `lib/content.js` in the `siteConfig` object
3. The tracking code will be automatically included

## 🔄 Updating Content After Deployment

1. Edit content in `lib/content.js`
2. Commit and push changes to GitHub
3. Your deployment platform will automatically rebuild and deploy

## 🐛 Troubleshooting

### Build Errors
- Check that all imports are correct
- Ensure all images exist in the `public` folder
- Verify that all content in `lib/content.js` is valid

### Styling Issues
- Clear your browser cache
- Check that Tailwind CSS is properly configured
- Verify responsive breakpoints

### Performance Issues
- Optimize images before adding to `public` folder
- Use Next.js Image component for better performance
- Check bundle size with `npm run build`

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Review the Next.js documentation
3. Check the deployment platform's logs
