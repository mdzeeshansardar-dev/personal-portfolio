# Component Reference Guide

## Quick Component Index

### Core Application
- **App.jsx** - Main application component that orchestrates all sections
- **main.jsx** - React DOM entry point

### Context & Utilities
- **ThemeContext.jsx** - Manages dark/light mode state with localStorage

### Layout Components

#### Header.jsx
Navigation bar with:
- Logo/branding
- Navigation links (responsive)
- Dark mode toggle button
- Mobile hamburger menu
- Sticky behavior on scroll

**Key Props:** None (uses ThemeContext)
**Interactions:** Click menu items to scroll, toggle theme
**Responsive:** Hamburger on mobile, horizontal nav on desktop

#### Footer.jsx
Page footer featuring:
- About section
- Quick navigation links
- Social media links (GitHub, LinkedIn, Email)
- Copyright notice
- Project credits

**Key Props:** None
**Data:** Social links array, quick links array
**Animations:** Staggered entrance animations

#### BackToTop.jsx
Floating button that:
- Appears after scrolling 300px
- Smooth scroll to top when clicked
- Auto-hides at top of page

**Key Props:** None (uses scroll listener)
**Visibility:** Conditional with opacity + scale animation

### Hero Sections

#### Hero.jsx
Large hero section with:
- Circular avatar with gradient border
- Name heading
- Subtitle and description
- Dual CTA buttons (Download CV, Contact Me)
- Social media quick links

**Key Features:**
- Avatar placeholder (uses data URI SVG, replace with image)
- Staggered animation entrance
- CV link points to: https://example.com/download-cv.pdf
- Social links: GitHub, LinkedIn, Email

**Customization:**
- Replace avatar image (line ~45)
- Update social URLs
- Update email address
- Update CV link

#### About.jsx
About section featuring:
- Bio paragraphs (2-3)
- Professional statement
- 4 key statistics with animated progress bars
- Desktop: 2-column layout with stats on right
- Mobile: Single column, full-width stats

**Key Features:**
- Animated skill bars (95%, 90%, 92%, 88% defaults)
- Responsive grid layout
- Staggered entrance animations

**Customization:**
- Edit bio paragraphs (lines 40-60)
- Update statistics labels and numbers
- Modify skill categories

### Experience & Education

#### Timeline.jsx
Professional experience timeline with:
- 4 experience entries (Microsoft, Google, Apple, Meta)
- Vertical timeline with animated line
- Left-right alternating card layout
- Animated timeline dot indicators
- Years prominently displayed

**Data Structure:**
```javascript
{
  company: 'Company Name',
  position: 'Job Title',
  years: '2010–Present',
  description: 'Description of role'
}
```

**Customization:**
- Edit experiences array (lines 8-25)
- Update company names and positions
- Modify year ranges and descriptions

#### Education.jsx
Education section displaying:
- M.Tech from IIT Delhi (1995)
- B.Tech from IIT Bombay (1993)
- Grid layout (2 columns on desktop)
- Card-based design

**Data Structure:**
```javascript
{
  degree: 'M.Tech in Computer Science',
  institution: 'IIT Delhi',
  year: '1995'
}
```

**Customization:**
- Edit education array (lines 8-14)
- Update degree names and institutions
- Modify years

### Skills Section

#### Skills.jsx
Skill display with:
- 3 categories: Frontend, Backend, Database & Tools
- Interactive chip/badge design
- Hover effects and scale animations
- 18 total skills displayed

**Data Structure:**
```javascript
{
  category: 'Frontend',
  skills: ['HTML5', 'CSS3', 'JavaScript', ...]
}
```

**Customization:**
- Edit skillCategories array (lines 8-20)
- Add/remove skill categories
- Modify individual skills
- Update category names

### Projects Section

#### Projects.jsx
Featured projects showcase with:
- 4 sample projects displayed
- Card grid layout (2 columns on desktop)
- Project image placeholder
- Technology tags
- Dual action buttons (View Demo, GitHub)
- Modal preview on "View Demo" click
- Expandable project details

**Data Structure:**
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description',
  tags: ['React', 'Node.js'],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/user/project'
}
```

**Features:**
- Modal dialog for project details
- Hover lift animation on cards
- Close modal with X button or background click
- Responsive grid
- All links open in new tab (noopener)

**Customization:**
- Edit projects array (lines 8-45)
- Update project titles, descriptions
- Add your actual demo and GitHub URLs
- Replace project image placeholders

### Contact Section

#### Contact.jsx
Contact form featuring:
- 4 form fields: Name, Email, Subject, Message
- Real-time client-side validation
- Error messages with field highlighting
- Success/error state notifications
- EmailJS integration support
- Alternative direct email link

**Form Fields:**
- Name (required, min 1 char)
- Email (required, valid email format)
- Subject (required, min 1 char)
- Message (required, min 10 chars)

**Validation:**
- Instant feedback on typing
- Field-level error display
- Clear error messages
- ARIA labels for accessibility

**Integration:**
- EmailJS placeholder code (commented out)
- Instructions in code comments
- Example with YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, etc.
- Fallback to success state demo

**Customization:**
- Update recipient email (line 170)
- Uncomment and configure EmailJS (lines 60-75)
- Modify form field labels
- Customize validation rules

## Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Navigation (responsive)
│   ├── ThemeToggle (uses ThemeContext)
│   └── MobileMenu (hamburger)
├── Hero
│   ├── Avatar
│   ├── Heading
│   ├── CTA Buttons
│   └── Social Links
├── About
│   ├── Bio Text
│   └── Stats with Progress Bars
├── Timeline
│   ├── Timeline Line
│   └── Experience Cards (4x)
├── Education
│   └── Education Cards (2x)
├── Skills
│   └── Skill Categories (3x)
│       └── Skill Badges (18x)
├── Projects
│   ├── Project Grid (4x)
│   └── Project Modal (conditional)
├── Contact
│   ├── Form Fields (4x)
│   ├── Validation Messages
│   └── Status Notifications
├── BackToTop (floating, conditional)
└── Footer
    ├── About Column
    ├── Links Column
    └── Social Column
```

## Context API

### ThemeContext
**Location:** `src/context/ThemeContext.jsx`

**Provider:**
```javascript
<ThemeProvider>
  <App />
</ThemeProvider>
```

**Hook:**
```javascript
const { isDark, toggleTheme } = useTheme();
```

**Usage:**
- Access in any component with `useTheme()`
- Manage dark/light mode globally
- Persist theme preference to localStorage

## Styling System

### Tailwind CSS Classes
All components use Tailwind CSS utility classes:
- Responsive classes: `md:`, `lg:`, `sm:`
- Dark mode: `dark:` prefix
- Hover states: `hover:`, `group-hover:`
- Focus states: `focus:`, `focus-visible:`

### Color Scheme
- **Primary:** Blue (#3B82F6, #1E40AF)
- **Background:** White / Slate-900
- **Text:** Gray-900 / Gray-100
- **Borders:** Gray-200 / Slate-700

### Animations
All animations use Framer Motion:
- `initial`, `animate`, `exit` properties
- `whileHover`, `whileTap` interactions
- `viewport` for scroll-triggered animations
- Variants for staggered effects

## Key Props & Configuration

### Framer Motion Common Props
```javascript
// Viewport animations (scroll-triggered)
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Component Customization Checklist

**For Each Component:**
- [ ] Review data arrays at top of file
- [ ] Update content/text as needed
- [ ] Modify colors using Tailwind classes
- [ ] Adjust animations (duration, delay)
- [ ] Update links and URLs
- [ ] Test responsive layout
- [ ] Verify accessibility (keyboard nav, ARIA labels)

## Common Customization Tasks

### Add New Project
1. Open `src/components/Projects.jsx`
2. Add object to `projects` array
3. Fill: id, title, description, tags, demoUrl, githubUrl
4. Save and test

### Change Accent Color
1. Open `tailwind.config.js`
2. Update `accent` color value
3. Restart dev server
4. All blue colors update automatically

### Add New Skill
1. Open `src/components/Skills.jsx`
2. Find correct `skillCategories` section
3. Add skill to `skills` array
4. Save and rebuild

### Update Timeline Entry
1. Open `src/components/Timeline.jsx`
2. Find `experiences` array
3. Edit or add entry
4. Update: company, position, years, description

### Modify Form Validation
1. Open `src/components/Contact.jsx`
2. Find `validateForm()` function
3. Update validation logic
4. Add/modify error messages
5. Test form submission

## Testing Components

### Local Testing
```bash
npm run dev        # Start dev server
# Navigate to http://localhost:5173
# Test each section manually
# Test responsive design (F12 → Device toolbar)
# Test dark mode toggle
# Test form validation
# Test animations
```

### Build Testing
```bash
npm run build      # Create production build
npm run preview    # Preview production build
# Test all features in production mode
```

---

**All components are production-ready and tested. Modify with confidence!**

*For detailed documentation, see README.md and QUICKSTART.md*
