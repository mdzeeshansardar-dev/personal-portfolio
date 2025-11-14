# Md Zeeshan Sardar - Modern Portfolio Website

A production-ready, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a modern UI/UX with dark mode support, smooth animations, and complete accessibility compliance.

## ✨ Features

- **Responsive Design**: Mobile-first approach with perfect desktop experience
- **Dark/Light Mode**: Toggle theme with localStorage persistence
- **Smooth Animations**: Framer Motion animations on scroll and interactions
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- **SEO Optimized**: JSON-LD structured data, Open Graph tags, meta tags
- **Contact Form**: Client-side validation with EmailJS integration ready
- **Project Showcase**: Interactive project cards with modal previews
- **Timeline Component**: Professional experience timeline with visual indicators
- **Skills Display**: Interactive skill badges with animated progress bars
- **Social Integration**: Links to GitHub, LinkedIn, and email
- **Performance**: Optimized bundling with Vite

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm installed
- Git (optional, for version control)

### Installation

1. **Clone/Extract the project:**
   ```bash
   cd portfolio-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:5173`

## 📝 Customize Your Content

### Personal Information

Edit the following files to replace placeholder content:

#### `src/components/Hero.jsx`
- Replace avatar: Update the SVG data URI or use an image file
- Update social links: Replace `yourusername` and `yourprofile` placeholders
- Update email: Replace `zeeshan@example.com`

#### `src/components/Projects.jsx`
- Update project details, descriptions, and links
- Replace demo URLs with actual project links
- Update GitHub repository URLs

#### `src/components/Contact.jsx`
- Update email address in the alternative contact section
- Configure EmailJS (see below)

#### `index.html`
- Update page title, description, and Open Graph tags
- Update the Person schema with your actual links

### Setting Up Email Form

The contact form uses EmailJS for sending emails. Follow these steps:

1. **Create EmailJS Account:**
   - Visit [emailjs.com](https://www.emailjs.com)
   - Sign up for a free account
   - Create an email service and template

2. **Configure in Contact Form:**
   - In `src/components/Contact.jsx`, uncomment the EmailJS code block
   - Replace with your actual credentials:
     ```javascript
     const response = await emailjs.send(
       'YOUR_SERVICE_ID',           // From EmailJS dashboard
       'YOUR_TEMPLATE_ID',          // From EmailJS dashboard
       {
         from_name: formData.name,
         from_email: formData.email,
         subject: formData.subject,
         message: formData.message,
         to_email: 'zeeshan@example.com'
       },
       'YOUR_PUBLIC_KEY'            // From EmailJS account settings
     );
     ```

3. **Alternative: Use Netlify Forms**
   - If deploying on Netlify, uncomment the Netlify Forms integration
   - No additional configuration needed

### CV Download Link

Update the CV link in `src/components/Hero.jsx`:
```jsx
<motion.a
  href="https://your-cv-storage.com/your-cv.pdf"  // Replace URL
  target="_blank"
  rel="noopener noreferrer"
```

## 🎨 Theming & Customization

### Colors

Update `tailwind.config.js` to change the accent color:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#3B82F6',      // Change to your brand color
      darkAccent: '#1E40AF'
    }
  }
}
```

### Fonts

The project uses **Inter** font from Google Fonts. To change:

1. Update the link in `index.html`
2. Update font-family in `tailwind.config.js`

### Dark Mode

Dark mode is enabled by default and uses the `dark:` class prefix throughout. Customize dark mode colors by modifying the `dark:` utilities.

## 🔨 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy with Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite and deploys automatically
   - Your site is live at `your-project.vercel.app`

### Option 2: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Or connect GitHub:**
   - Push code to GitHub
   - Log in to [netlify.com](https://netlify.com)
   - Connect your repository
   - Configure build command: `npm run build`
   - Configure publish directory: `dist`

### Option 3: Deploy to GitHub Pages

1. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',  // Add this if using project site
     // ... rest of config
   })
   ```

2. **Add to `package.json`:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm install --save-dev gh-pages
   npm run deploy
   ```

### Option 4: Traditional Hosting

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to your web host (cpanel, FTP, etc.)

3. **Important:** Configure web server to route all requests to `index.html` (for React Router support)

## 📊 Performance Optimization

The project is optimized for performance:

- **Vite bundling**: Fast build times and optimized output
- **Code splitting**: Components are naturally code-split
- **Image optimization**: Use appropriately sized images
- **Lazy loading**: Images should use `loading="lazy"` attribute
- **Minification**: Vite minifies CSS/JS automatically

### Lighthouse Score Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔒 Security Considerations

- All external links use `rel="noopener noreferrer"`
- Form validation on client-side (always validate on server too)
- No sensitive data stored in localStorage (only theme preference)
- Keep dependencies updated: `npm audit` and `npm update`

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android 80+

## 🚨 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000  # Use different port
```

### Tailwind CSS not working
```bash
npm install                 # Reinstall dependencies
npm run dev                 # Clear cache and restart
```

### Build fails
```bash
rm -rf node_modules dist   # Clean install
npm install
npm run build
```

### EmailJS not sending
- Verify Service ID, Template ID, and Public Key
- Check spam folder
- Verify email address in template
- Test at [emailjs.com/docs](https://www.emailjs.com/docs/)

## 📈 Analytics (Optional)

To add Google Analytics:

1. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

2. Replace `GA_ID` with your Google Analytics ID

## 🔄 Version History

### v1.0.0 (Initial Release)
- ✅ React + Vite + Tailwind CSS setup
- ✅ Responsive mobile-first design
- ✅ Dark/Light mode toggle
- ✅ Smooth Framer Motion animations
- ✅ Accessible components (ARIA, keyboard nav)
- ✅ SEO optimization (JSON-LD, OG tags)
- ✅ Contact form with validation
- ✅ Timeline experience component
- ✅ Skills display with progress indicators
- ✅ Project showcase with modals
- ✅ Back-to-top button
- ✅ Complete documentation

## 📄 File Structure

```
portfolio-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Timeline.jsx   # Experience timeline
│   │   ├── Education.jsx  # Education section
│   │   ├── Skills.jsx     # Skills display
│   │   ├── Projects.jsx   # Projects grid
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Footer.jsx     # Footer
│   │   └── BackToTop.jsx  # Back-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── globals.css        # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── package.json           # Dependencies
└── README.md              # This file
```

## 🤝 Contributing

This is a personal portfolio, but improvements are welcome:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues or questions:

1. Check the troubleshooting section
2. Review component comments in source code
3. Check official docs: [React](https://react.dev), [Tailwind](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/)

## 📜 License

This project is MIT licensed. Feel free to use as a template for your own portfolio.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

Last updated: November 2024
