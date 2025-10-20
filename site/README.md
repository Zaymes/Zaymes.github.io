# James Shrestha - Personal Website

A modern, clean personal website built with Next.js 14, featuring easy content management and responsive design.

## 🚀 Features

- **Modern Design**: Clean, elegant, and professional layout
- **Responsive**: Works perfectly on all devices
- **Easy Content Management**: All content is centralized in one file
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Follows web accessibility best practices

## 📝 Content Management

All website content is managed through the `lib/content.js` file. This makes it incredibly easy to update your information without touching any code.

### How to Edit Content

1. Open `lib/content.js`
2. Find the section you want to edit
3. Update the content directly
4. Save the file
5. The changes will be reflected immediately

### Content Sections

#### Site Configuration (`siteConfig`)
- Basic site information
- Social media links
- SEO metadata

#### Hero Section (`heroContent`)
- Main headline
- Subtext description
- Call-to-action buttons

#### About Section (`aboutContent`)
- Personal description
- Current role information
- Mission statement
- Professional highlights
- Technology skills

#### Projects Section (`projectsContent`)
- Project titles and descriptions
- Technologies used
- GitHub and live demo links

#### Blog Section (`blogContent`)
- Blog post titles and excerpts
- Publication dates
- Reading times

#### Contact Section (`contactContent`)
- Contact information
- Social media links

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
site/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Main page component
├── lib/
│   └── content.js          # All website content
├── public/
│   └── james.jpeg          # Profile image
└── README.md
```

## 🎨 Customization

### Colors and Styling

The website uses Tailwind CSS for styling. You can customize colors and styles in:

1. `app/globals.css` - Global styles and component classes
2. `lib/content.js` - Content-specific styling

### Adding New Sections

1. Add content to `lib/content.js`
2. Create a new component in `app/page.js`
3. Add the component to the main page

### Adding New Projects

Simply add a new project object to the `projects` array in `projectsContent`:

```javascript
{
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["React", "Node.js"],
  github: "https://github.com/your-username/project",
  live: "https://your-project.com"
}
```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

The website is configured for static export and can be deployed to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

### GitHub Pages Deployment

1. Run `npm run build`
2. The `out` folder contains the static files
3. Upload the contents to your GitHub Pages repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ by James Shrestha
