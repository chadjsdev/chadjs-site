# chadjs.dev - Personal Portfolio & Blog

Modern portfolio and blog site built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog System**: Markdown-based blog with frontmatter support
- **Projects Portfolio**: Showcase of development work
- **SEO Optimized**: Metadata and OpenGraph tags
- **Type Safe**: Full TypeScript support
- **Fast Performance**: Next.js App Router with static generation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/cscovil/chadjs-site.git
cd chadjs-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Blog Posts

Create a new Markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of your post"
category: "DevSecOps"
---

Your post content here...
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Projects: `app/projects/page.tsx`
- Blog posts: `content/blog/`

### Navigation
Update links in `components/Navigation.tsx`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Environment Variables

No environment variables required for basic setup.

## 📄 License

MIT License - feel free to use this template for your own site.

## 👤 Author

**Chad Scoville**
- Website: [chadjs.dev](https://chadjs.dev)
- LinkedIn: [@chadscoville](https://linkedin.com/in/chadscoville)
- GitHub: [@cscovil](https://github.com/cscovil)

## 🙏 Acknowledgments

Built with inspiration from the Next.js and Tailwind CSS communities.
