# ARCHIVE — The Encyclopedia of Everything

A responsive Next.js starter for a premium editorial encyclopedia.

## Included
- Warm ivory / charcoal / oxide editorial design system
- Responsive classic navigation and mobile menu
- Homepage with featured story, domains, discoveries and curated sections
- 15 domain landing pages generated from shared data
- Topic/article pages with breadcrumbs, table of contents, key facts and related topics
- Client-side global search
- Explore, timelines, collections and about pages
- Starter admin dashboard shell
- Reusable TypeScript content model

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build
```bash
npm run build
npm start
```

## Project structure
- `src/app`: routes and page layouts
- `src/components`: shared UI
- `src/data`: domain and sample article data
- `src/lib`: content helpers

## Important next steps
This is a frontend starter with sample content. It does not yet include a production database, CMS, authentication, persistent bookmarks, editorial publishing workflow, or live search service. Connect Sanity + PostgreSQL + Meilisearch before treating it as a production encyclopedia. Replace sample copy and imagery with researched, cited editorial content.
