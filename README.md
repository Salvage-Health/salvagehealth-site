# salvagehealth-site

Static site for salvagehealth.com, deployed on Netlify from `main`.

- `/` : Salvage Health home (Oswald wordmark, rust #BE5126, cream #FAF9F5 on #141413, tagline "Built from what's left.")
- `/brand/` : logo mark, social preview image, touch icon; `/favicon.svg`
- `/book/` : Fitness Without the Fear companion page (Personal Plan app, printable worksheet, sources, glossary, editions)
- `_redirects` : `/companion` and `/fitness-companion` forward to `/book`

No build step: Netlify publishes the repo root as-is.
