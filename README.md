# Kevin Bueno — Portfolio

Personal site and portfolio: experience, projects, certifications, and contact. Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS**, with view transitions and a sidebar layout.

## Scripts

```bash
npm run dev    # local dev (Turbopack)
npm run build  # production build
npm run start  # run production server
npm run lint   # ESLint
```

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical site URL for metadata, sitemap, and robots. Falls back to `VERCEL_URL` or localhost. |
| `RESEND_API_KEY` | For contact form | API route at `/api/send` uses [Resend](https://resend.com) to deliver email. Without it, that route fails at build/runtime when invoked. |

Create a `.env.local` for local development (never commit secrets).

## Project layout

- `src/app/` — routes, root layout, global styles, `error` / `global-error` / `not-found` boundaries
- `src/modules/` — UI sections (sidebar, projects, timeline, contact, etc.)
- `public/` — static assets, project and company logos

## Author

Kevin Bueno — Frontend developer and UI/UX specialist (Miami).
