# Kreative Savages — Official Website

Static website for **Kreative Savages Limited** — independent Digital Media production house, Port Moresby, Papua New Guinea.

Pure HTML/CSS/JS. No build step, no dependencies. Brand red `#BF1B2C` sampled from the company profile.

## Structure

```
index.html      Home — hero, services, mission, stats, past works
videos.html     Video portfolio (click-to-play YouTube embeds)
about.html      Background, ownership, company registration
contact.html    Contact details and socials
css/style.css   All styling and animations
js/main.js      Scroll reveals, counters, mobile menu, video player
assets/         Logo (transparent PNG), favicon, photos
```

## Host on GitHub Pages

1. Create a repository on GitHub (e.g. `kreativesavages.github.io` for a root site, or any name like `website`).
2. Upload everything in this folder to the repository root (keep the folder structure).
3. In the repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / (root) → Save**.
4. Your site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

To use the `www.kreativesavages.com` domain: in **Settings → Pages → Custom domain** enter the domain, then add a CNAME record at your DNS provider pointing `www` to `<username>.github.io`.

## Editing

- Videos: duplicate any `<article class="vid">` block in `videos.html` and change the YouTube ID in `data-id` and the thumbnail URL.
- Colors and fonts: edit the `:root` variables at the top of `css/style.css`.
