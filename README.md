# brahmani-thota.github.io

Personal portfolio — built with React + Vite, styled around a data-pipeline/dashboard
theme (career history rendered as a DAG, achievements as a metrics dashboard).

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Push to GitHub and go live

1. Create a **new, empty** repo on GitHub named exactly `brahmani-thota.github.io`
   (no README, no .gitignore — leave it empty). The name must match your username
   exactly or GitHub Pages won't serve it at the root domain.

2. From this project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/brahmani-thota/brahmani-thota.github.io.git
   git push -u origin main
   ```

3. On GitHub: go to **Settings → Pages** on the new repo. Under "Build and
   deployment", set **Source** to **GitHub Actions** (not "Deploy from a branch").

4. The push already triggers `.github/workflows/deploy.yml`, which builds the site
   and deploys it. Check the **Actions** tab for progress — first deploy takes ~1-2 min.

5. Your site will be live at `https://brahmani-thota.github.io`.

## Updating content later

Edit the data arrays at the top of each component file — no need to touch styling:

- `src/components/Hero.jsx` — name, tagline, top-line metrics
- `src/components/CareerDAG.jsx` — `nodes` (roles) and `branches` (fellowships)
- `src/components/Metrics.jsx` — `metrics` array
- `src/components/CaseStudies.jsx` — `cases` array
- `src/components/Skills.jsx` — `groups` array
- `src/components/Contact.jsx` — contact links

Commit and push to `main` — the Action redeploys automatically.

## Known follow-up

The headshot in `src/assets/headshot.jpg` is cropped from a full-length outdoor
photo. It works but is upscaled from a small region. Swap in a proper shoulders-up
headshot (same filename, or update the import in `Hero.jsx`) when you have one —
indoor or plain background, good lighting, shot closer to the face.
