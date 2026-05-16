# filipstal

Monorepo for filipstal.com and its subdomains.

## Apps

| Path | Domain | Description |
|------|--------|-------------|
| `apps/www` | filipstal.com | Root site |
| `apps/food` | food.filipstal.com | Recipes & shopping lists |

## Development

```bash
npm install           # install all workspaces
npm run dev:food      # food.filipstal.com
npm run dev:www       # filipstal.com
```

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4 (food only).

## Deployment

Each app is its own Vercel project, with the root directory set to `apps/<name>`. Pushes to `main` deploy to production.
