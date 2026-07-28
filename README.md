# Portfolio — React

A personal portfolio website built with **React** and **Vite**, featuring a fully responsive layout, light/dark theme toggle, and clean component-based architecture. Originally built as a static HTML/CSS site and converted into React to practice component-driven UI development.

**Live Demo:** [portfolio-react-rho-roan.vercel.app](https://portfolio-react-rho-roan.vercel.app/)

---


## Features

- 🎨 **Light / Dark theme toggle** — persists across sessions using `localStorage`
- 📱 **Fully responsive** — mobile-first design with a slide-in navigation menu
- 🧩 **Component-based architecture** — reusable, isolated components for each section
- ⚡ **Fast dev experience** — powered by Vite's instant HMR (Hot Module Replacement)
- 🎯 **Utility-first styling** — built with Tailwind CSS v4
- 🖼️ **Iconify integration** — scalable icon sets (Material Design Icons, Phosphor, Simple Icons)

---

## Tech Stack

| Category | Technology |
|---|---|
| Library | [React](https://react.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [Iconify](https://iconify.design/) (MDI, Phosphor, Simple Icons) |
| Font | [Geist Variable](https://vercel.com/font) via `@fontsource-variable/geist` |
| Linting | ESLint |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
src/
├── Assets/            # Images and static media
├── Components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx            # Root component — assembles all sections
├── App.css             # Global styles, Tailwind import, theme config
└── main.jsx            # Application entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

### Installation

Clone the repository:

```bash
git clone https://github.com/tcintern-006/portfolio-react.git
cd portfolio-react
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Deployment

This project is deployed on **Vercel**, which auto-detects the Vite configuration and deploys automatically on every push to `main`.

To deploy your own copy:

1. Push this repository to your own GitHub account
2. Import the repo at [vercel.com](https://vercel.com/)
3. Vercel auto-configures the build command (`npm run build`) and output directory (`dist`)
4. Click **Deploy**

---

## Roadmap

- [ ] Add interactivity to project filtering
- [ ] Integrate a contact form backend (e.g. EmailJS or a serverless function)
- [ ] Add page transition animations
- [ ] Add React Router for multi-page navigation

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Ammar Awan**
- GitHub: [@tcintern-006](https://github.com/tcintern-006)
- LinkedIn: [muhammadammar46](https://www.linkedin.com/in/muhammadammar46/)
