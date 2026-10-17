# DevNode Website

The company website for **DevNode** (https://devnode.info), built with [Astro](https://astro.build) as a fast static site for cPanel hosting.

## Edit content

Almost everything (phone numbers, prices, services, projects, manager bio, FAQ) lives in **`src/data/site.ts`**. Change it there and every page updates.

| What | Where |
| --- | --- |
| Business email (when ready) | `site.email` in `src/data/site.ts`, and `$to` in `public/send.php` |
| Google Analytics | `site.gaId` in `src/data/site.ts` (e.g. `G-XXXXXXXXXX`) |
| Manager photo | Save as `public/images/hassan-fakih.jpg`, set `manager.photo` |
| Project screenshots | Save in `public/images/`, add an `image` to the `BrowserMock` usage |
| Testimonials | `testimonials` in `src/data/site.ts` (the section appears once it has entries) |
| Blog posts | Add a `.md` file in `src/content/blog/` |

## Commands

```bash
npm install        # once
npm run dev        # local preview at http://localhost:4321
npm run package    # build and create devnode-site.zip for upload
```

## Deploy to cPanel

1. Run `npm run package`.
2. In cPanel open **File Manager → public_html**. Delete the old site files if any. Make sure hidden files are shown (Settings → Show Hidden Files).
3. **Upload** `devnode-site.zip`, then right-click → **Extract**. Delete the zip afterwards.
4. In cPanel open **SSL/TLS Status** (or AutoSSL) and make sure `devnode.info` has a certificate. The `.htaccess` file redirects all traffic to `https://devnode.info`.
5. Submit `https://devnode.info/sitemap-index.xml` in Google Search Console.

## Adding languages later

Add the locale in `astro.config.mjs` (`locales: ['en', 'ar', 'fr']`) and create the translated pages under `src/pages/ar/` and `src/pages/fr/`.
