# Today News

A lightweight Next.js application that aggregates the latest headlines from several major publishers (Google News, The Guardian, The New York Times) in real time. Data is pulled server-side from public RSS feeds, deduplicated, and presented in an adaptive grid designed for quick scanning.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

The app is available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## Deployment

The project is ready for Vercel. After a successful build you can deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-4d5fd9ca
```

## How It Works

- `lib/news.ts` fetches and parses RSS feeds, normalizes items, removes duplicates, and sorts by freshness.
- The `app/page.tsx` server component calls `getTodayNews` and renders headline cards via `app/components/news-card.tsx`.
- Styling is handled in `app/globals.css` using hand-crafted gradients and hover states.

## Notes

- Feeds are fetched with a 10-minute revalidation window via Next.js caching.
- If a feed is temporarily unavailable, its errors are logged and the remaining sources continue to render.
