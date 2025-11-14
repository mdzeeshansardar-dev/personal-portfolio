# Project Setup & Quick Start Guide

## 📦 Project Contents

Your modern portfolio website has been created with the following structure:

```
portfolio-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx         # Hero section with CTA buttons
│   │   ├── About.jsx        # About section with stats
│   │   ├── Timeline.jsx     # Experience timeline
│   │   ├── Education.jsx    # Education background
│   │   ├── Skills.jsx       # Skills display with categories
│   │   ├── Projects.jsx     # Project grid with modals
│   │   ├── Contact.jsx      # Contact form with validation
│   │   ├── Footer.jsx       # Footer with social links
│   │   └── BackToTop.jsx    # Scroll-to-top button
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context provider
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── globals.css          # Global styles
├── public/                  # Static assets (add images here)
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── README.md                # Complete documentation
└── CHANGELOG.md             # Version history
```

## 🚀 Installation & Running Locally

### Step 1: Navigate to Project Directory

```bash
cd portfolio-app
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all required packages:
- React 18.2.0
- Tailwind CSS 3.3.0
- Vite 5.0.0
- Framer Motion (animations)
- React Icons

### Step 3: Start Development Server

```bash
npm run dev
```

Your portfolio will automatically open at `http://localhost:5173`

## 🎯 Next Steps: Personalize Your Portfolio

### 1. Update Personal Information

**Edit `src/components/Hero.jsx`:**
- Replace avatar (line ~45): Use your actual profile image
- Update email: `zeeshan@example.com` → your email
- Update social links:
  - `https://github.com/yourusername`
  - `https://linkedin.com/in/yourprofile`

**Edit `index.html`:**
- Update `<title>` tag
- Update `<meta name="description">`
- Update Open Graph tags (og:title, og:description)
- Update Person schema (name, sameAs links)

### 2. Customize Your Projects

**Edit `src/components/Projects.jsx`:**
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/yourusername/project'
  },
  // ... add more projects
];
```

### 3. Add Your CV Download Link

**Edit `src/components/Hero.jsx` (line ~80):**
```jsx
<motion.a
  href="https://your-storage.com/your-cv.pdf"  // Replace with your CV URL
  target="_blank"
  rel="noopener noreferrer"
```

### 4. Update Education & Experience

**Edit `src/components/Timeline.jsx`:**
- Update company names, positions, and dates
- Modify experience descriptions

**Edit `src/components/Education.jsx`:**
- Update degree names and institutions

### 5. Update Skills

**Edit `src/components/Skills.jsx`:**
```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js']
  },
  // ... add your skills
];
```

### 6. Configure Contact Form (Optional)

**For EmailJS Integration:**

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. In `src/components/Contact.jsx`, uncomment and configure:

```javascript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { /* form data */ },
  'YOUR_PUBLIC_KEY'
);
```

Or use **Netlify Forms** if deploying to Netlify (no setup required).

## 🎨 Customization Options

### Change Accent Color

**Edit `tailwind.config.js`:**
```javascript
colors: {
  accent: '#YOUR_COLOR_HERE',  // e.g., '#6366f1' for indigo
  darkAccent: '#DARK_VERSION'
}
```

### Change Fonts

**Edit `index.html`:**
Replace the Google Fonts link with your preferred font

**Edit `tailwind.config.js`:**
Update the `fontFamily` configuration

### Adjust Theme Colors

The project uses Tailwind's built-in color system. Update:
- `bg-blue-600` → `bg-indigo-600` (for example)
- All `dark:` prefixed classes for dark mode

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment in 5 Minutes

### Deploy to Vercel (Easiest)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Select your GitHub repository
5. Vercel auto-detects and deploys automatically
6. Your site is live! 🎉

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to Shared Hosting (cPanel, FTP, etc.)

1. Build: `npm run build`
2. Upload the `dist/` folder via FTP/cPanel
3. Set document root to the `dist/` folder
4. Create a `.htaccess` file (for Apache):

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## ✅ Features Included

- ✨ **Responsive Design** - Perfect on all devices
- 🌙 **Dark/Light Mode** - With localStorage persistence
- ⚡ **Smooth Animations** - Framer Motion powered
- ♿ **Accessible** - WCAG compliant with ARIA labels
- 📱 **Mobile Menu** - Animated hamburger navigation
- 🎯 **SEO Ready** - Meta tags and JSON-LD schema
- 📝 **Contact Form** - With validation and email integration
- 🎨 **Modern UI** - Professional monochrome with blue accent
- 📊 **Timeline Component** - Visual experience display
- 🏆 **Project Showcase** - Interactive cards and modals
- 🚀 **Production Ready** - Optimized and minified builds

## 🔧 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Styling Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Issues
```bash
rm -rf dist
npm run build
```

## 📚 Documentation

- **README.md** - Complete feature documentation and customization guide
- **CHANGELOG.md** - All improvements over the original HTML
- **.env.example** - Environment variables template

## 💡 Pro Tips

1. **Avatar Image**: Replace the placeholder with a high-quality image (recommended: 256x256px, PNG)
2. **Project Thumbnails**: Add actual images to the `public/` folder
3. **CV**: Host your PDF on a reliable service (Google Drive, Dropbox, S3)
4. **Analytics**: Add Google Analytics by updating `index.html`
5. **Custom Domain**: Use your domain registrar to point to your deployment

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 📞 Support

For issues:
1. Check the README.md file
2. Review inline code comments
3. Consult official documentation
4. Check Vite console for error messages

---

**Your portfolio is ready! Start by editing `src/components/Hero.jsx` to add your personal information.**

Happy coding! 🚀
