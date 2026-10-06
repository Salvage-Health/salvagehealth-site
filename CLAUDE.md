# Salvage Health site: working notes

## Deploys cost money
- Netlify deploys on every push to main, and each production deploy costs 15 credits (Personal plan: 1,000 credits/month). Running out pauses the whole site.
- Commit work with `[skip netlify]` in the message. Deploy (a push without that tag) only when a batch of changes is finished, or when Bryan asks for something to go live.
- Never deploy after each small tweak.

## Build
- `python3 tools/build.py` regenerates the pages. Run it before committing.
