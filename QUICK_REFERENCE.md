# Quick Reference – Make Changes Fast

## 🎯 Most Common Customizations

### 1. Change Your Name/Initials
**File**: `src/components/Navbar.tsx` (Line 44)
```tsx
// FROM:
<Link href="/" className="...">WR</Link>

// TO:
<Link href="/" className="...">YourInitials</Link>
```

---

### 2. Update Hero Section
**File**: `src/app/page.tsx` (Lines 44-50)

```tsx
<Hero
  title="Your headline here"  // Main headline (LARGE!)
  label="Explore"             // Small uppercase label
  description="Your tagline and intro..."  // Supporting text
  cta={{ label: 'View Work', href: '#projects' }}
  secondary={{ label: 'About Me', href: '/about' }}
  imageUrl="your-image-url-here"  // Hero image
/>
```

---

### 3. Add or Update Projects
**File**: `src/app/page.tsx` (Lines 4-32)

```tsx
const projects = [
  {
    id: '1',
    title: 'Project Name',
    description: 'What the project does...',
    tags: ['React', 'Design', 'UX'],
    image: 'https://images.unsplash.com/...',
    href: '/projects/project-1',  // or external URL
  },
  // Add more...
];
```

---

### 4. Change Colors
**File**: `src/app/globals.css` (Lines 3-9)

```css
:root {
  --background: #f5f5f5;      /* Page background */
  --foreground: #111111;      /* Text color */
  --text-secondary: #666666;  /* Gray text */
  --accent: #2563eb;          /* Blue highlights */
  --footer-bg: #000000;       /* Footer */
}
```

Change any value to your preferred color (hex, rgb, or color names).

---

### 5. Update Footer Content
**File**: `src/components/Footer.tsx` (Lines 19-34)

```tsx
// Brand blurb (line 19)
<p className="text-sm text-[#999999]...">
  Designer & developer crafting modern digital experiences.
</p>

// Social links (line 30-35)
const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub', href: 'https://github.com/yourprofile' },
];
```

---

### 6. Customize CTA Section
**File**: `src/app/page.tsx` (Lines 53-58)

```tsx
<CTA
  title="Ready to build something great?"  // Heading
  description="Let's collaborate..."       // Subtitle
  primaryButton={{ label: 'Get in Touch', href: '/contact' }}
  secondaryButton={{ label: 'Learn More', href: '/about' }}
/>
```

---

### 7. Update Navbar Links
**File**: `src/components/Navbar.tsx` (Lines 15-18)

```tsx
const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  // Add more items here
];
```

---

### 8. Adjust Animations (Faster/Slower)
**File**: Component files, look for `duration: 0.8`

```tsx
// CURRENT (slow):
transition: { duration: 0.8 }

// FAST:
transition: { duration: 0.4 }

// VERY SLOW:
transition: { duration: 1.2 }
```

---

### 9. Change Button Styles
**File**: Multiple locations (search for `className="px-8 py-3 bg"`)

Primary button example in `src/components/CTA.tsx`:
```tsx
className="px-10 py-4 bg-[#111111] text-[#f5f5f5] font-semibold hover:bg-[#2563eb]"

// Style breakdown:
// px-10 py-4 = padding
// bg-[#111111] = button background
// text-[#f5f5f5] = text color
// hover:bg-[#2563eb] = hover color (blue)
```

---

### 10. Update Page Metadata
**File**: `src/app/layout.tsx` (Lines 14-17)

```tsx
export const metadata: Metadata = {
  title: "Your Name | Designer & Developer",
  description: "Your custom meta description for SEO",
};
```

---

## 🎨 Color Variables by Component

| Component | Color Variable | Hex | Usage |
|-----------|---|---|---|
| Text | `--foreground` | `#111111` | Body text, headings |
| Muted text | `--text-secondary` | `#666666` | Descriptions, labels |
| Accent | `--accent` | `#2563eb` | Links, highlights, hover states |
| Background | `--background` | `#f5f5f5` | Page background |
| Border | `--border` | `#e0e0e0` | Dividers, outlines |
| Footer bg | `--footer-bg` | `#000000` | Footer background |

### Use in Tailwind
```tsx
// Using Tailwind colors directly:
<div className="text-[#111111]">
<button className="bg-[#2563eb] hover:bg-[#1d4ed8]">

// Or use CSS var:
<div className="text-foreground">  // Uses CSS variable
```

---

## 📝 Updating Text Content

### Hero Label
File: `src/app/page.tsx`, line 46
```tsx
label="Start"  // Change to any text
```

### Hero Title
File: `src/app/page.tsx`, line 45
```tsx
title="Bold ideas for modern digital."  // Your headline
```

### Hero Description
File: `src/app/page.tsx`, line 47
```tsx
description="I design and develop beautiful, high-performance digital experiences..."
```

### CTA Heading
File: `src/app/page.tsx`, line 54
```tsx
title="Ready to build something great?"
```

---

## 🔍 Finding Things

| What you want | Search for | File |
|---|---|---|
| Navbar styling | `md:hidden` | Navbar.tsx |
| Hero layout | `grid grid-cols-1 lg:grid-cols-2` | Hero.tsx |
| Project cards | `whileHover={{ scale: 1.02 }}` | FeaturedProjects.tsx |
| Footer links | `className="space-y-4"` | Footer.tsx |
| All animations | `motion.` | Any component |

---

## 🧪 Testing Your Changes

### 1. Run dev server
```bash
npm run dev
```

### 2. Open browser
```
http://localhost:3001
```

### 3. Edit and see changes live
Changes save automatically with hot reload.

### 4. Build for production
```bash
npm run build
```

---

## 🎯 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Colors not changing | Check the CSS class names use correct hex codes |
| Text not updating | Hard refresh browser (Ctrl+Shift+R) |
| Image not showing | Verify image URL starts with http(s):// |
| Button not clickable | Check `href` prop is correct |
| Animation too fast | Increase `duration` value (e.g., 0.8 → 1.2) |
| Mobile menu stuck | Check mobile viewport size, use browser DevTools |

---

## 🚀 Quick Deploy Commands

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.next
```

### Manual build
```bash
npm run build  # Creates optimized production build
npm start      # Runs production server
```

---

## 📚 Useful Documentation Links

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/

---

## ✅ Checklist Before Going Live

- [ ] Custom name/initials in Navbar
- [ ] Hero headline, description, image updated
- [ ] At least 1-2 projects added
- [ ] Social media links in Footer
- [ ] Contact CTA button linked to contact form
- [ ] Metadata updated (title, description)
- [ ] All images optimized and working
- [ ] Mobile version tested and looks good
- [ ] No console errors
- [ ] Build completes successfully

---

## 💡 Pro Tips

1. **Image optimization**: Use https://squoosh.app/ to compress images before adding
2. **Color picker**: Use https://coolors.co/ to find accent colors
3. **Typography**: Keep it simple – use existing text sizes, don't add new ones
4. **Spacing**: Stick to Tailwind spacing (px-6, py-8, gap-16, etc.)
5. **Animations**: Don't add too many – subtlety wins
6. **Mobile first**: Always test on mobile devices
7. **Backups**: Git commit before major changes

---

**Last Updated**: March 17, 2026
