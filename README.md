# Kreative Savages — Website

Modern minimalist redesign of [kreativesavages.com](https://www.kreativesavages.com/).

## Deployment (GitHub Pages)

1. Create a new GitHub repository (e.g. `kreativesavages-website` or `kreativesavages.github.io`)
2. Upload all files in this folder to the repo root
3. Go to **Settings → Pages** in your repo
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live at `https://<username>.github.io/<repo-name>/`

## Custom Domain (kreativesavages.com)

To point your own domain to GitHub Pages:

1. Add a file called `CNAME` (no extension) to the repo root with this content:
   ```
   www.kreativesavages.com
   ```
2. In your domain registrar (DNS settings), add:
   - Type `CNAME` | Name `www` | Value `<username>.github.io`
   - Or use A records pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. In GitHub → Settings → Pages → Custom domain, enter `www.kreativesavages.com`
4. Enable **Enforce HTTPS** once DNS propagates (can take up to 24hrs)

## Files

```
/
├── index.html        ← Main website (single-page)
├── favicon.svg       ← Vector favicon (all modern browsers)
└── README.md         ← This file
```

## Customisation Tips

- **Videos section**: Replace the placeholder cards in `#work` with actual `<iframe>` YouTube embeds
- **Colours**: All colours are CSS variables at the top of `<style>` — easy to tweak
- **Contact form**: Currently a UI-only demo. To make it functional, integrate with [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/) — just add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Images**: Add a real hero background or team photo by replacing the CSS gradient in `.hero-bg`
