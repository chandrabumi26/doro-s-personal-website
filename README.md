# 🌊 Dorojatun Chandrabumi - Personal Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Motion](https://img.shields.io/badge/Motion-Animations-ff69b4?style=for-the-badge)

A stunning personal portfolio website with smooth animations, scroll effects, and a unique drawer-style project showcase.

[Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## ✨ Features

- **🎨 50s Retro Aesthetic** - Beautiful color palette with tosca/light blue, matte nude tones, and warm accents
- **📜 Smooth Scroll Animations** - Scroll-triggered reveal animations throughout the page
- **🗂️ Interactive Project Drawer** - Unique filing cabinet metaphor with documents that fan out on hover
- **🔵 Scroll Navigation Dots** - Fixed left-side navigation indicating current section
- **📱 Fully Responsive** - Optimized for all screen sizes
- **⚡ Blazing Fast** - Built with Next.js 16 and Turbopack
- **🌙 SEO Optimized** - Proper meta tags and semantic HTML

## 🎬 Animations

| Animation | Description |
|-----------|-------------|
| Hero Text Reveal | Staggered letter-by-letter animation |
| Scroll Reveal | Elements fade in as you scroll |
| Drawer Preview | 3 documents fan out when hovering the drawer |
| Drawer Open/Close | Smooth height animation with staggered cards |
| Skill Cards | Lift and glow on hover |
| Navigation Dots | Pulse animation on active section |

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (formerly Framer Motion)
- **Font:** [Geist](https://vercel.com/font) by Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chandrabumi-website.git
   cd chandrabumi-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── Header.tsx       # Fixed navigation with mobile menu
│   ├── Hero.tsx         # Animated hero section
│   ├── About.tsx        # About section with stats
│   ├── Skills.tsx       # Tech stack display
│   ├── Projects.tsx     # Drawer-style project showcase
│   ├── Contact.tsx      # Contact information
│   ├── Footer.tsx       # Footer with social links
│   ├── ScrollNav.tsx    # Left-side dot navigation
│   └── ScrollReveal.tsx # Reusable scroll animation wrapper
├── globals.css          # Global styles & color palette
├── layout.tsx           # Root layout with metadata
└── page.tsx             # Main page composition
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Tosca | `#5FBDBD` | Primary accent |
| Tosca Light | `#78CAD2` | Hover states |
| Nude | `#E8D4C4` | Secondary backgrounds |
| Cream | `#FDF8F3` | Main background |
| Charcoal | `#3D3D3D` | Text |
| Peach | `#F5D5C8` | Decorative accents |

## 📝 Customization

### Update Personal Info
Edit the content in each component file under `app/components/`.

### Add Projects
Modify the `projects` array in `app/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "🚀", // or use an actual image
    tags: ["React", "TypeScript"],
    color: "bg-tosca",
  },
  // ...more projects
];
```

### Change Colors
Update the CSS variables in `app/globals.css`:

```css
:root {
  --tosca: #5FBDBD;
  --nude: #E8D4C4;
  /* ...etc */
}
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

<div align="center">

Made with 💙 by **Dorojatun Chandrabumi**

</div>
