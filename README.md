# ePortfolio

Personal portfolio site built with React, TypeScript, and Vite.

## Local Development

```bash
npm install
npm run dev
```

## GitHub Pages Deployment

This repo includes an automated GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the site to GitHub Pages whenever `main` is updated.

### One-time setup in GitHub

1. Open your repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).

After the workflow completes, your site will be live at:

`https://<your-github-username>.github.io/<repo-name>/`

## Manual Deploy Option

You can still deploy manually using:

```bash
npm run deploy
```

This uses the existing `gh-pages` script and publishes the `dist` folder.
