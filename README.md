This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Visitor Tracking

This portfolio website includes a visitor counter that tracks the number of visitors to the site. The visitor count is stored in a JSON file and is updated whenever someone visits the site.

### How It Works

1. The visitor counter is implemented as a React component (`VisitorCounter.tsx`) that makes API calls to track visitors.
2. The API endpoint (`/api/visitors`) handles incrementing and retrieving the visitor count.
3. The visitor data is stored in a JSON file (`data/visitors.json`).
4. Before pushing to Git, a pre-push hook runs a script (`scripts/scrape-visitors.js`) to fetch the latest visitor count from the live website and update the local data.

### Manual Update

If you need to manually update the visitor count, you can run:

```bash
node scripts/scrape-visitors.js
```

This will fetch the latest visitor count from the live website and update the local data file.
