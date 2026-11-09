# GrowthLoop

Next.js website project.

## Run locally

```sh
cd app
npm ci
npm run dev
```

## Production build

```sh
cd app
npm ci
npm run build
```

See `app/next.config.mjs` for the export configuration. The static build is generated in `app/out/`.

## Project structure

- `app/`: website source, public assets, and dependency lockfile.
- `capture/`: reference captures and notes.
- `checks/`: visual verification captures and notes.

Dependencies, generated builds, local environment files, and Craft session/runtime data are excluded from version control.
