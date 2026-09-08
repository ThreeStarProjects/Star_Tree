# Star Tree

A tiny, config-driven Linktree alternative. Vite + React + TypeScript + Tailwind.

## Run locally

```bash
npm install
npm run dev
```

## Customize

Edit `public/config.json` — profile, socials, spotlight, posts. No code changes needed.

- Avatar: any image URL, or drop a file in `public/` and reference `/your-file.jpg`.
- Background: solid `backgroundColor`, or `backgroundGradient` (any valid CSS gradient) for extra flair.
- Socials supported out of the box: facebook, instagram, linkedin, twitter/x, tiktok, github, youtube, twitch, mail. Anything else falls back to a generic link icon.

## Deploy to Vercel

Push to GitHub, import the repo at [vercel.com/new](https://vercel.com/new), accept defaults. Vite is detected automatically.
