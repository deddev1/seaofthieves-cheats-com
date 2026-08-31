# Sea of Thieves Cheats — Marketing Site

Static Astro 7 site for [seaofthievescheats.com](https://seaofthievescheats.com). Primary SEO keyword: **sea of thieves cheats** (secondary: sea of thieves esp, sea of thieves aimbot, sea of thieves wallhack).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers deployment with `src/worker.ts`

## Quick start

```bash
npm install
npm run localhost
# open http://localhost:5173
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Workers Builds setup targeting **seaofthievescheats.com**.
