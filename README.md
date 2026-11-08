# WeightAI colour system

A single Next.js App Router page with seven healthcare colour palettes: the three supplied directions plus clear blue, deep indigo, aqua, and warm stone. Includes HEX/RGB switching, clipboard controls, semantic status colours and downloadable CSS custom properties. No dashboard or extra pages.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for the static export in `out/` and `npm run typecheck` for TypeScript validation.

Dependencies use the npm stable `latest` dist-tag. Install resolves the versions and creates a lockfile. Google Fonts has a local sans-serif fallback.

## TypeScript configuration

Keep both `.next/types/**/*.ts` and `.next/dev/types/**/*.ts` in `tsconfig.json`. Next.js generates production and development route types separately and may add these paths automatically. The configuration update message is informational.

`npm run typecheck` generates Next.js route types before checking TypeScript, so it also works before the first development run. Let Next.js manage `next-env.d.ts`.

## Vercel deployment

Import `ShabeehaSarook/color-Platte` in Vercel and use the repository root as the Root Directory. The committed `vercel.json` sets the Next.js framework, `npm ci` install command, `npm run build` build command, and `out` output directory. Select Node.js 24.x in the project settings. This palette library requires no environment variables.

The app uses `output: 'export'` in `next.config.ts`. Vercel serves the generated HTML, CSS, and JavaScript; palette selection, clipboard actions, and CSS downloads run in the browser. No server functions or catch-all rewrites are needed.

Once the repository is connected in Vercel, pushes to its configured production branch deploy automatically; other branches receive preview deployments. Local Vercel account links and build artifacts are excluded from uploads and Git.
