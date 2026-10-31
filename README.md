# Old Shakespeare

Website for Old Shakespeare Pub & Restaurant, built with React and Vite. The interface supports English, Russian, and Turkish URLs and content.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
git clone https://github.com/yanj1337/react-oldshakespeare.git
cd react-oldshakespeare
npm ci
npm run dev
```

Open the local address printed by Vite (normally `http://localhost:5173`).

## Checks and production build

```bash
npm run lint
npm run build
npm run preview
```

The production output is written to `dist/`. When deploying, configure the host to serve `index.html` as a fallback for direct visits to localized paths such as `/ru/menu`.
