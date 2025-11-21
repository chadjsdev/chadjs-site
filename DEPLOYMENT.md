# Deployment Guide for chadjs.dev

## Prerequisites

1. **GitHub Account**: To host your code
2. **Vercel Account**: For deployment (free tier is fine)
3. **Domain**: chadjs.dev (should already be configured)

## Step 1: Push to GitHub

1. Create a new repository on GitHub named `chadjs-site` (or any name you prefer)

2. Initialize git and push your code:

```bash
cd chadjs-site
git init
git add .
git commit -m "Initial commit: Next.js portfolio and blog"
git branch -M main
git remote add origin git@github.com:cscovil/chadjs-site.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `chadjs-site` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

## Step 3: Configure Custom Domain

1. In Vercel Dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your domain: `chadjs.dev`
4. Add www subdomain: `www.chadjs.dev`
5. Vercel will provide DNS records

### DNS Configuration

Add these records to your DNS provider:

**For root domain (chadjs.dev):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

**For learn subdomain (learn.chadjs.dev):**
- Set this up separately for your Mintlify docs
- Type: CNAME
- Name: learn
- Value: (provided by Mintlify)

## Step 4: Environment Variables (Optional)

If you add any API keys or secrets later:

1. Go to Project Settings > Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy after adding variables

## Step 5: Configure Mintlify for learn.chadjs.dev

1. In your Mintlify project settings
2. Add custom domain: `learn.chadjs.dev`
3. Follow Mintlify's DNS setup instructions

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

- **Push to `main`**: Deploys to production (chadjs.dev)
- **Push to other branches**: Creates preview deployments
- **Pull Requests**: Automatic preview deployments

## Testing Locally

Always test before pushing:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (to test)
npm run build

# Start production server
npm start
```

## Writing New Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter:
```markdown
---
title: "Your Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
category: "Category Name"
---

Your content here...
```
3. Commit and push
4. Vercel will automatically deploy

## Monitoring and Analytics

### Built-in Vercel Analytics
- Go to Project > Analytics tab
- View page views, performance metrics
- Free tier included

### Adding Google Analytics (Optional)
1. Get your GA4 measurement ID
2. Add to `app/layout.tsx`
3. Deploy

## Troubleshooting

### Build Fails
- Check build logs in Vercel
- Test build locally: `npm run build`
- Ensure all dependencies are in package.json

### Domain Not Working
- Wait up to 48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status in Vercel

### Blog Posts Not Showing
- Check file is in `content/blog/`
- Verify frontmatter format
- Check file extension is `.md`
- Review build logs

## Performance Optimization

Vercel automatically optimizes:
- Image optimization via Next.js Image component
- Edge caching
- Automatic SSL
- Global CDN

## Security

Vercel provides:
- Automatic HTTPS
- DDoS protection
- Environment variable encryption
- Preview deployment protection

## Backup Strategy

1. GitHub is your primary backup
2. Vercel keeps deployment history
3. Consider periodic local backups:
```bash
git clone git@github.com:cscovil/chadjs-site.git chadjs-backup
```

## Cost

With Vercel's Hobby (free) plan, you get:
- Unlimited deployments
- 100GB bandwidth/month
- Custom domains
- Automatic SSL
- Preview deployments

Upgrade to Pro if needed for:
- More bandwidth
- Team features
- Advanced analytics
- Priority support

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: For code-specific problems

## Next Steps

After deployment:
1. ✅ Verify site is live at chadjs.dev
2. ✅ Test all pages and links
3. ✅ Submit sitemap to Google Search Console
4. ✅ Set up Google Analytics (if desired)
5. ✅ Share your site!

---

Need help? Check the troubleshooting section or reach out to the Vercel community.
