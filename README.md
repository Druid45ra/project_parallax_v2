# project_parallax_v2

Vârful de Vis - Premium Mountain Resort Landing Page

Project parallax v2 is a high-performance, responsive landing page for a boutique hotel located in the mountains. This project serves as a showcase for modern frontend best practices, transitioning from a basic structure to a professionally audited and refactored architecture.

Goals & Evolution:

The project started as a standard landing page and was systematically upgraded through a Senior-level Technical Audit to meet industry standards in:

    Performance: Drastic reduction in initial load time.

    Accessibility: Semantic HTML and WCAG-compliant attributes.

    Code Quality: Clean, modular, and maintainable CSS/JS.

Key Technical Features
1. Smart Booking System

    Dynamic Validation: Real-time JavaScript logic that prevents booking dates in the past.

    Date Synchronization: Automatically updates the minimum check-out date based on the check-in selection to ensure a valid stay duration.

    User Feedback: Inline error messaging with visual cues and double-submit prevention.

2. Modern UI/UX & Responsive Design

    Mobile-First Approach: Custom-built hamburger menu and navigation system designed for high conversion on mobile devices.

    iOS/Safari Optimized Parallax: A specialized CSS implementation that solves the common "parallax jump" bug on mobile touch devices.

    Fluid Transitions: 300ms cubic-bezier transitions on all interactive elements for a premium feel.

3. SEO & Semantic Integrity

    Schema.org Integration: JSON-LD structured data to help search engines index the site as a LodgingBusiness.

    SEO Best Practices: Optimized meta-tags, hierarchical heading structure, and image alt-text.

    Semantic HTML5: Full use of `<main>`, `<section>`, and `<article>` tags for better screen reader compatibility.

Optimization & Performance

    Lazy Loading: Native loading="lazy" implementation for the gallery and activity sections.

    Asset Management: Optimized external font loading with font-display: swap.

    Refactored CSS: Replaced inline styles with a centralized variable system (:root) for easy global branding changes.

Tech Stack

- HTML5 — semantic markup
- CSS3 — responsive layout and CSS variables
- JavaScript (Vanilla) — booking form validation and small UI interactions
- Google Fonts — Playfair Display, Inter
- Schema.org (JSON-LD) — basic SEO structured data

How to Run

    Clone the Repo: git clone https://github.com/Druid45ra/project_parallax_v2.git

    Open Index: Launch index.html in any modern browser.

    Live Demo: [https://github.com/Druid45ra/project_parallax_v2](https://github.com/Druid45ra/project_parallax_v2)

Project Structure
project_parallax_v2/

index.html        # Main site markup
style.css         # Global styles (UI + responsive)
booking.js        # Minimal booking form JS
README.md         # Project documentation (this file)
favicon.ico       # Optional favicon
assets/           # Optional local images / icons

Local development

The site is 100% static.

Quick start

Open `index.html` directly in your browser for a simple preview.

Recommended (local server)

Run a simple static server for the closest production-like behavior:
    Install `live-server` globally with npm: `npm install -g live-server`
    Run `live-server` in the project root: `live-server --port=8080 --open=index.html`
