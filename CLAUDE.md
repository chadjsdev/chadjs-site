# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog site for Chad Scoville (chadjs.dev), built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases DevSecOps expertise, software development projects, and technical blog content focused on federal compliance and cloud security.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Create production build (includes TypeScript checking and optimization)
- `npm run start` - Start production server (requires `npm run build` first)
- `npm run lint` - Run ESLint to check code quality

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict typing
- **Styling**: Tailwind CSS with custom theme configuration
- **Content Processing**: Markdown blog posts with gray-matter frontmatter parsing and remark/remark-html for rendering
- **Icons**: Lucide React
- **Font**: Inter (via next/font/google)
- **Deployment**: Configured for Vercel with standalone output

### Directory Structure
```
app/                    # Next.js App Router pages
├── page.tsx           # Homepage with hero, expertise cards, and CTA
├── layout.tsx         # Root layout with Navigation and Footer
├── globals.css        # Tailwind directives and custom styles
├── about/page.tsx     # About page with bio, certifications, contact
├── blog/
│   ├── page.tsx       # Blog listing page (fetches from content/blog/)
│   └── [slug]/page.tsx # Dynamic blog post pages
└── projects/page.tsx  # Portfolio/projects showcase

components/            # Reusable React components
├── Navigation.tsx     # Responsive header with mobile menu (client component)
└── Footer.tsx         # Site footer with social links

content/
└── blog/             # Markdown blog posts
    ├── *.md          # Each .md file becomes a blog post
    └── frontmatter   # Required: title, date, excerpt, category

lib/
└── blog.ts           # Blog utilities: getAllPosts(), getPostBySlug()

public/               # Static assets served from root
```

### Key Architectural Patterns

**Markdown Blog System**:
- Blog posts are stored as Markdown files in `content/blog/`
- Frontmatter parsed with gray-matter (title, date, excerpt, category)
- Content rendered to HTML using remark + remark-html
- Posts sorted by date (newest first)
- `lib/blog.ts` provides getAllPosts() and getPostBySlug() utilities

**Component Patterns**:
- Most components are Server Components by default (faster, smaller bundles)
- Only `Navigation.tsx` uses 'use client' directive for interactive mobile menu
- All pages use static metadata generation for SEO

**Styling**:
- Tailwind CSS with custom primary color palette (blue theme)
- Responsive design (mobile-first breakpoints: sm, md, lg)
- Custom typography plugin for blog post content
- Consistent spacing and component patterns

**Metadata & SEO**:
- Root metadata in `app/layout.tsx` with OpenGraph and Twitter cards
- Site optimized for chadjs.dev domain
- Author: Chad Scoville, focused on DevSecOps and federal compliance

### Configuration Files

**next.config.js**:
- `output: 'standalone'` - Optimized for Vercel deployment
- Image optimization with remote patterns enabled

**tailwind.config.js**:
- Custom primary color palette (50-900 shades of blue)
- Typography plugin configured for blog content
- Content paths: pages, components, app directories

**tsconfig.json**:
- Strict TypeScript configuration
- Path aliases: `@/*` maps to root directory

## Content Management

### Adding Blog Posts
1. Create new `.md` file in `content/blog/`
2. Add required frontmatter:
   ```markdown
   ---
   title: "Post Title"
   date: "2024-11-20"
   excerpt: "Brief description"
   category: "DevSecOps"
   ---
   ```
3. Write content in Markdown below frontmatter
4. Posts automatically appear on `/blog` sorted by date

### Updating Projects
- Edit `app/projects/page.tsx` directly
- Projects are currently hardcoded in the component

### Customizing Branding
- Colors: `tailwind.config.js` (primary theme)
- Navigation links: `components/Navigation.tsx` (navigation array)
- Social links: `components/Footer.tsx`
- Site metadata: `app/layout.tsx`

## Important Notes

- The site uses Next.js App Router (not Pages Router)
- Blog posts are processed at build time for optimal performance
- Navigation component includes sticky header and mobile menu
- External link to "Learning Hub" (learn.chadjs.dev) in navigation
- Target audience: Government contracting opportunities in Northern Virginia
- Focus areas: CMMC, FedRAMP, Zero Trust, AWS/Azure cloud security
