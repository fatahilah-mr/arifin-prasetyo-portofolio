# 🧠 Project Context & Agent Session Summary

> [!IMPORTANT]
> **Instructions for AI Coding Assistants:**
> 1. Read this entire document before proposing or executing code changes to understand the project architecture, domain models, conventions, and previous session history.
> 2. Whenever you finish a significant milestone or end a session, update the **Session History & Progress Log** section at the bottom of this file so subsequent sessions maintain continuity.

---

## 📌 1. Project Blueprint & High-Level Overview

- **Project Name:** `Arifin Prasetyo Portfolio`
- **Repository:** `fatahilah-mr/arifin-prasetyo-portofolio`
- **Current Version / Milestone:** `v1.0.0 (Production)`
- **Core Value Proposition:** `A premium culinary portfolio website designed specifically for Arifin Prasetyo, a Professional Cook and Top Culinary Graduate of 2026. It highlights his professional culinary journey, expertise, and digital creations.`
- **Primary Users / Consumers:** `Hospitality Recruiters, HR Managers, Executive Chefs, and Clients looking for culinary professionals.`

---

## 🛠️ 2. Tech Stack & Environment

| Component | Technology | Version | Notes / Conventions |
| :--- | :--- | :--- | :--- |
| **Language** | TypeScript | `v5.8.x` | Strict mode enabled |
| **Framework** | React + Vite | `19.2.0` / `8.0.x` | Modern modular component-based architecture |
| **Routing** | TanStack Router | `1.170.x` | Type-safe, file-based routing |
| **Styling** | Tailwind CSS v4 | `v4.2.x` | Utility-first CSS, mobile-first approach |
| **UI Primitives** | Radix UI | `Latest` | Unstyled, accessible components |
| **Package Manager**| Bun | `Latest` | Ultra-fast dependency management |
| **Hosting** | Cloudflare Pages | N/A | Global CDN distribution, static edge delivery |

---

## 🏗️ 3. Architecture & Data Flow

### Architecture Pattern
This project adopts a **Modular Frontend Architecture**:
- **`src/components/`**: Modular UI components (Navbar, Hero, Skills, PortfolioGrid, etc.).
- **`src/routes/`**: File-based routing handled by TanStack Router (e.g., `__root.tsx`, `index.tsx`).
- **`src/styles.css`**: Global CSS tokens and variables.
- **`public/`**: Static assets and SEO configurations (`robots.txt`, `sitemap.xml`, `_redirects`).

---

## 📂 4. Directory Map & Module Responsibilities

```text
arifin-prasetyo-portofolio/
├── public/                 # Static assets, favicon, and SEO files
│   ├── _redirects          # Cloudflare Pages routing configuration
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/             # Images and multimedia assets
│   ├── components/         # Modular UI components
│   ├── lib/                # Utility functions and error reporting
│   ├── routes/             # TanStack File-Based Routing
│   ├── styles.css          # Global stylesheet
│   ├── main.tsx            # Application entry point
│   └── router.tsx          # TanStack Router configuration
├── bun.lock                # Bun lockfile
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite bundler configuration
```

---

## ⚠️ 5. AI Agent Guardrails & Strict Rules

1. **🔒 Security & Secret Scrubbing:** Never output, print, or commit real API keys or private environment variables.
2. **✨ Type Safety:** Maintain strict TypeScript types.
3. **🎨 Styling Integrity:** Rely on Tailwind CSS v4 and the existing design tokens. Ensure mobile-first responsiveness.
4. **🚀 Performance:** Avoid heavy client-side JavaScript when unnecessary; optimize assets (WebP) and use lazy loading where appropriate.
5. **🤖 Subagent Workflow Protocol:**
   - **Research Subagent:** Read codebase, search docs, gather constraints.
   - **Planner / Implementer:** Propose changes, write code & tests.
   - **Reviewer:** Verify CI compliance and update `CONTEXT.md` session log.

---

## 🚀 6. Current State & Active Milestone

- **Active Milestone:** `Production Maintenance & AI Integrations`
- **Current Status:** 🟢 Active / Live
- **Active Task:** Updated `CONTEXT.md` to establish agent guidelines.
- **Known Blockers / Gotchas:** None at present.

---

## 📝 7. Session History & Chat Summary Log

| Session Date | Author / Agent | Milestone / Task | Key Files Touched | Next Step / Handover |
| :--- | :--- | :--- | :--- | :--- |
| `2026-07-24` | Antigravity AI | Domain Change & README Overhaul | `README.md`, `robots.txt`, `sitemap.xml` | Domain changed to `arifin.fatah.web.id` and README formatted professionally |
| `2026-07-28` | Antigravity AI | SEO Canonical Fixes | `src/routes/__root.tsx`, `src/routes/index.tsx` | Fix Google Search Console duplicate canonical issues |
| `2026-08-02` | Antigravity AI | Project Documentation Generation | `src/content/projects/*.md` | Create bilingual project docs based on GUIDE-PROJECT-AI.md |
| `2026-08-27` | Antigravity AI | Context Setup | `CONTEXT.md`, `.gitignore` | Create context file and ignore template folder |

### Session Entry: `2026-08-27` (Context Setup)
- **Objective:** Create `CONTEXT.md` based on the template and update `.gitignore` to ignore the template folder.
- **Completed Work:**
  - Written customized `CONTEXT.md`.
  - Added `template/` to `.gitignore`.
- **Key Decisions:** Adapted the backend-heavy default template to match this frontend-focused React/Vite/TanStack portfolio.
- **Next Planned Action:** Ready for future feature development and AI assistance.

---

## 📋 8. Backlog & Next Actions

- [ ] Continuous monitoring of SEO indexation on Google Search Console.
- [ ] Potential implementation of dynamic content updates or CMS integration if required.
