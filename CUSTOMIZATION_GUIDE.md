# Quick Customization Guide

## 🎨 Common Customizations

### 1. Change Accent Color

Open `src/components/` files and find color classes like `text-amber-500`, `border-amber-500/30`, etc.

Replace:
- `amber-500` → Any Tailwind color (e.g., `blue-500`, `purple-500`, `red-500`)
- `amber-400` → Lighter shade of your chosen color
- `orange-500` → Darker shade

**Example:**
```typescript
// Before
<span className="text-amber-500 uppercase tracking-widest">Welcome</span>

// After (using blue instead)
<span className="text-blue-500 uppercase tracking-widest">Welcome</span>
```

### 2. Update Hero Section

File: `src/components/Hero.tsx`

```typescript
// Update the main headline
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
  Your amazing headline here
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
    with an accent
  </span>
</h1>

// Update description
<p className="text-lg sm:text-xl text-gray-400 mb-8">
  Your professional description goes here. Make it compelling and authentic.
</p>
```

### 3. Add/Remove Projects

File: `src/components/FeaturedProjects.tsx`

```typescript
const projects = [
  {
    title: 'Your Project Title',
    description: 'A brief description of what you did and the impact.',
    image: 'https://your-image-url.com/project.jpg',
    tags: ['React', 'TypeScript', 'Design'],
  },
  // Add more projects or remove existing ones
];
```

### 4. Update Experience Timeline

File: `src/components/Experience.tsx`

```typescript
const experiences = [
  {
    role: 'Senior Designer',
    company: 'Your Company',
    period: '2023 - Present',
    description: 'Led design initiatives and mentored junior designers.',
    highlights: ['Leadership', 'Design Systems', 'UX Strategy'],
  },
  {
    role: 'Product Designer',
    company: 'Previous Company',
    period: '2020 - 2023',
    description: 'Designed mobile and web applications.',
    highlights: ['Mobile Design', 'UX Research', 'Prototyping'],
  },
];
```

### 5. Update Skills/Services

File: `src/components/Skills.tsx`

```typescript
const services = [
  {
    title: 'Your Service 1',
    description: 'Detailed description of what you offer.',
  },
  {
    title: 'Your Service 2',
    description: 'Another service description.',
  },
  // Continue with up to 6 services
];
```

### 6. Update About Section

File: `src/components/About.tsx`

```typescript
// Update intro text
<p className="text-lg leading-relaxed">
  I'm a [your title] passionate about [your passion].
  With a background in [your background], I bridge the gap between...
</p>

// Update stats
{[
  { number: '100+', label: 'Projects Completed' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Happy Clients' },
]}

// Update about image
<img src="https://your-professional-photo.com/photo.jpg" alt="About" />
```

### 7. Add Testimonials

File: `src/components/Testimonials.tsx`

```typescript
const testimonials = [
  {
    quote: "Their work transformed our product. Highly recommended!",
    author: 'Client Name',
    role: 'Product Manager',
    company: 'Company Name',
  },
  // Add more testimonials (up to 6 is ideal for 3-column layout)
];
```

### 8. Update Contact Information

File: `src/components/Contact.tsx`

```typescript
// Change email
<a href="mailto:your.email@example.com">Get in touch via email</a>

// Add social links
{[
  { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
  { label: 'GitHub', href: 'https://github.com/yourprofile' },
  { label: 'Dribbble', href: 'https://dribbble.com/yourprofile' },
]}
```

### 9. Update Navbar Links

File: `src/components/Navbar.tsx`

```typescript
const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
// Add, remove, or reorder navigation items
```

### 10. Update Footer

File: `src/components/Footer.tsx`

```typescript
// Update brand description
<p className="text-gray-400 text-sm">
  Your brand tagline and description here.
</p>

// Update footer links - customize as needed
const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Portfolio', href: '#work' },
  // Add more links
];
```

### 11. Update Page Metadata

File: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your professional portfolio showcasing your work and expertise.',
};
```

### 12. Customize Typography

File: `tailwind.config.ts`

```typescript
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // Adjust heading sizes
      },
      fontFamily: {
        // Change font family if desired
      },
    },
  },
}
```

---

## 🖼️ Image URLs to Update

Replace these placeholder image URLs with your own:

1. **About Section Image**
   - Current: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80`
   - File: `src/components/About.tsx`

2. **Project Images** (6 images)
   - File: `src/components/FeaturedProjects.tsx`
   - Replace all unsplash URLs with your project screenshots

3. **Hero Background** (optional)
   - Add a background image gradient or image to Hero section

---

## 🎯 Complete Customization Checklist

- [ ] Update page title and metadata
- [ ] Replace all placeholder text with your content
- [ ] Update all image URLs with your images
- [ ] Change accent color if desired
- [ ] Update all social media links
- [ ] Update email address
- [ ] Add your projects to the portfolio
- [ ] Update about section with your story
- [ ] Add your experience and skills
- [ ] Get client testimonials (optional)
- [ ] Test on mobile, tablet, and desktop
- [ ] Deploy to your domain

---

## 🚀 Ready to Deploy

Once you've customized your portfolio:

```bash
# Build for production
npm run build

# Test production build
npm start

# Deploy with Vercel (recommended)
vercel

# Or use your preferred hosting
# (Netlify, GitHub Pages, AWS Amplify, etc.)
```

Enjoy your premium portfolio! 🎉
