# Portfolio — Ammar Awan

A responsive personal portfolio website built with Tailwind CSS v4 and vanilla JavaScript, powered by Vite. Built as part of an internship track on modern CSS workflows, responsive design, and utility-first styling — with a planned conversion into a React application.

## Live Site

`https://tcintern-006.github.io/Portfolio/`

## Features

- Responsive layout across mobile, tablet, and desktop breakpoints
- Mobile navigation menu with a slide-up transition and backdrop shadow
- Dark / light mode toggle with theme-aware icon swapping (sun / moon)
- Sections: Navigation, Hero, About, Skills & Tools, Projects, Contact, Footer
- Icon integration via Iconify (Lucide, Phosphor, Simple Icons)
- Custom variable font (Geist) loaded via Fontsource
- Contact form with semantic label/input associations

## Tech Stack

- **Vite** — dev server and production build tooling
- **Tailwind CSS v4** — utility-first styling via the official Vite plugin
- **JavaScript (ES6+)** — native ES Modules, no framework yet
- **Iconify (Tailwind v4 plugin)** — icon utility classes (`icon-[collection--name]`)
- **Fontsource** — self-hosted variable font delivery (Geist)
- **gh-pages** — automated deployment to GitHub Pages

This project intentionally avoids a component framework for now. A React conversion is planned as the next phase of this project, once the design and interaction patterns are finalized in plain HTML/JS.

## Project Structure

```
Portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── style.css          # Tailwind entry point, theme tokens, font imports
│   ├── Assets/
│   │   └── ammar.Awan.png
│   └── js/
│       ├── main.js         # entry point — DOM references, event wiring
│       └── theme.js        # theme toggle + mobile menu toggle logic
└── dist/                  # production build output (generated, not committed)
```

### Why it's split this way

| File | Responsibility |
|---|---|
| `main.js` | Selects DOM elements, wires up click listeners, orchestrates behavior |
| `theme.js` | Isolated, reusable logic for dark/light mode and the mobile slide-menu |
| `style.css` | Tailwind imports, font imports, and custom theme tokens (`@theme`) |
| `vite.config.js` | Build configuration, including the Tailwind plugin and the GitHub Pages `base` path |

Interaction logic is kept separate from DOM wiring so it can be lifted directly into React components/hooks during the planned conversion, without needing to be re-architected first.

## Core Concepts Applied

### Utility-First CSS with a Constrained Scale
Styling is composed directly in markup using Tailwind's utility classes, drawing from its built-in spacing, color, and typography scale rather than arbitrary values, to keep visual rhythm consistent across sections:
```html
<section class="flex flex-col gap-5 w-full px-5 py-4 md:px-8 lg:px-10">
```

### Mobile-First Responsive Design
Base (unprefixed) classes define the mobile layout; `md:` and `lg:` prefixes progressively enhance the layout for larger viewports:
```html
<div class="flex flex-col lg:flex-row items-center">
```

### Dark Mode via Class Strategy
Tailwind v4's `dark:` variant is configured to respond to a `.dark` class on `<html>`, toggled via JavaScript and paired with `dark:` utilities throughout every section:
```css
@custom-variant dark (&:where(.dark, .dark *));
```
```js
document.documentElement.classList.toggle("dark");
```

### Transform-Based Animation (Not `display`)
The mobile menu slides in from the bottom using `translate-y` rather than toggling `display`, since transforms — unlike `display` — can be smoothly animated:
```html
class="translate-y-full md:translate-y-0 transition-all duration-300"
```
```js
slidebar.classList.toggle("translate-y-full");
```

### Dynamic Viewport Height for Mobile
`h-[100dvh]` is used instead of `h-screen` (`100vh`) for the full-height mobile menu, since `dvh` correctly accounts for a mobile browser's collapsing address bar, preventing content from being hidden behind browser UI.

### Custom Design Tokens
Font family is registered as a design token in Tailwind's `@theme` block rather than applied ad hoc, giving the whole project a single source of truth for typography:
```css
@theme {
  --font-sans: "Geist Variable", sans-serif;
}
```

## Getting Started

### Prerequisites
- Node.js and npm installed

### Setup

```bash
git clone https://github.com/tcintern-006/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

### Build for production

```bash
npm run build
```
Compiled output is generated in `dist/`.

## Deployment

This project deploys to GitHub Pages via the `gh-pages` package, since Vite requires a build step before static hosting.

```bash
npm run deploy
```

This runs `vite build` (via the `predeploy` script) and pushes the compiled `dist/` folder to the `gh-pages` branch, which GitHub Pages is configured to serve from.

**Note:** `vite.config.js` sets `base: '/Portfolio/'` to match this repository's GitHub Pages subpath. If this repository is ever renamed or forked, this value must be updated to match, or all built asset paths will resolve incorrectly.

## Known Limitations / Future Improvements

- Contact form is not yet wired to a backend or form service — it currently has no submission handling.
- Some images are placeholder stock photography; final project screenshots should replace these before this is treated as a finished portfolio.
- No automated tests yet.
- Planned: full conversion to a React application, componentizing each section and replacing manual DOM queries with state-driven rendering.

## Author

Ammar Awan — built as part of an internship track on Tailwind CSS, responsive design, and modern front-end tooling.
