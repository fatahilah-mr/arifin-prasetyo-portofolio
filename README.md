<div align="center">
  # Arifin Prasetyo Portfolio
  *A premium culinary portfolio website designed specifically for Arifin Prasetyo, a Professional Cook and Top Culinary Graduate of 2026.*

  <p>
    <a href="https://arifin.fatah.web.id">
      <img src="https://img.shields.io/badge/Live_Demo-arifin.fatah.web.id-blue?style=flat-square" alt="Live Demo" />
    </a>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Cloudflare%20Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" />
  </p>
</div>

---

## Overview

This project is built using a modern modular component-based architecture, prioritizing a **mobile-first** approach, and optimized for performance and search engine indexing. It highlights the professional culinary journey and expertise of Arifin Prasetyo.

---

## Tech Stack & Ecosystem

| Category | Technology / Library | Purpose & Implementation |
| :--- | :--- | :--- |
| **Core Framework** | **React 19 + Vite** | Fast build tooling and cutting-edge frontend architecture. |
| **Language** | **TypeScript** | Strict type safety for components and configurations. |
| **Routing** | **TanStack Router** | Fully type-safe, file-based routing. |
| **Styling** | **Tailwind CSS v4** | Utility-first CSS framework for rapid UI development. |
| **UI Primitives** | **Radix UI** | Unstyled, accessible components for building high-quality design systems. |
| **Cloud Hosting** | **Cloudflare Pages** | Global CDN distribution, fast static edge delivery, and production-ready deployments. |
| **Package Manager**| **Bun** | Ultra-fast dependency management and task execution. |

---

## Key Features

- **Floating Navigation Bar**: Modern navbar with backdrop blur effects and a responsive menu.
- **Dynamic Culinary Gallery**: State-based filtering system for various dishes (Main Course, Pastry & Bakery, and Beverages).
- **Responsive Credentials Timeline**: Professional certification timeline with responsive image ratios.
- **Direct Call-to-Action (CTA)**: Easily accessible buttons navigating to official WhatsApp and Email.
- **Production-Ready SEO Config**: Full support for Cloudflare Pages, Google Search Console, `robots.txt`, `sitemap.xml`, and `_redirects`.

---

## Project Structure

```text
arifin-prasetyo-portofolio/
├── public/                 # Static assets and SEO configurations
│   ├── _redirects          # Cloudflare Pages routing configuration
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Modular UI components (Navbar, Hero, Skills, Gallery, etc.)
│   ├── routes/             # TanStack File-Based Routing (__root.tsx, index.tsx)
│   ├── main.tsx            # Application entry point
│   └── router.tsx          # TanStack Router configuration
├── bun.lock
├── package.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

Ensure your local development environment meets the following requirements:
- **Node.js**: `v20+` recommended
- **Package Manager**: **Bun**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fatahilah-mr/arifin-prasetyo-portofolio.git
   cd arifin-prasetyo-portofolio
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the local development server:
   ```bash
   bun run dev
   ```

   > [!NOTE]
   > The application will be running at `http://localhost:5173` by default.

### Build & Verification

To compile the application into production-ready static files:

```bash
bun run build
```

This compiles the output into the `dist/` directory. Preview the compiled build locally using:

```bash
bun run preview
```

---

## Attribution

- **Identity Owner:** Arifin Prasetyo
- **Director & Developer:** Fatahilah Miftahul Rahman
