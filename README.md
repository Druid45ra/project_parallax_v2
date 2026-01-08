# project_parallax_v2

Project parallax v2  is a high-performance, responsive landing page for a boutique hotel located in the mountains. This project serves as a showcase for modern frontend best practices, transitioning from a basic structure to a professionally audited and refactored architecture.

🎯 Project Goals & Evolution:
The project started as a standard landing page and was systematically upgraded through a Senior-level Technical Audit to meet industry standards in:

    Performance: Drastic reduction in initial load time.

    Accessibility: Semantic HTML and WCAG-compliant attributes.

    Code Quality: Clean, modular, and maintainable CSS/JS.

🛠️ Key Technical Features
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

    Semantic HTML5: Full use of <main>, <section>, and <article> tags for better screen reader compatibility.

🚀 Optimization & Performance

    Lazy Loading: Native loading="lazy" implementation for the gallery and activity sections.

    Asset Management: Optimized external font loading with font-display: swap.

    Refactored CSS: Replaced inline styles with a centralized variable system (:root) for easy global branding changes.

💻 Tech Stack

- HTML5 — semantic markup
- CSS3 — responsive layout and CSS variables
- JavaScript (Vanilla) — booking form validation and small UI interactions
- Google Fonts — Playfair Display, Inter
- Schema.org (JSON-LD) — basic SEO structured data


📦 How to Run

    Clone the Repo: git clone https://github.com/Druid45ra/project_parallax_v2.git

    Open Index: Launch index.html in any modern browser.

    Live Demo: [https://github.com/Druid45ra/project_parallax_v2](https://github.com/Druid45ra/project_parallax_v2)

## 📂 Project Structure
project_parallax_v2/

├── index.html        # Main site markup
├── style.css         # Global styles (UI + responsive)
├── booking.js        # Minimal booking form JS
├── README.md         # Project documentation (this file)
├── favicon.ico       # Optional favicon
└── assets/           # Optional local images / icons
```

---

## ⚙️ Local development

The site is 100% static.

### Quick start

Open `index.html` directly in your browser for a simple preview.

### Recommended (local server)

Run a simple static server for the closest production-like behavior:

```bash
# Using VS Code Live Server extension
or

python -m http.server
```

Open: `http://localhost:8000`

---

## 🔍 SEO, Performance & Accessibility

This project emphasizes:

- SEO: proper titles, meta descriptions, headings and Schema.org
- Performance: minimal JS, lazy-loaded images and responsive assets
- Accessibility: labels, ARIA attributes and pa11y checks in CI

Typical Lighthouse targets:

- Performance: 85+
- Accessibility: 90+
- Best Practices: 95–100
- SEO: 90+

---

## 🧩 Recommended Enhancements

- Integrate a lightweight backend (serverless function or small API) to persist bookings
- Add automated image generation (WebP, srcset) for backgrounds and image optimization
- Add CI checks (ESLint, Stylelint, pa11y, Lighthouse) — already configured in `.github/workflows`
- Consider visual regression tests for the gallery and hero sections

---

## 🛡 License

This project is provided as an educational/demo template. For production use, replace stock images, adapt content and add a proper backend.

---

## ✍️ Author

An example front-end scaffold focusing on clarity, performance and maintainability.

"A good site is not only one that looks great, but one that can be maintained and scaled without fear."

[Druid45ra](https://github.com/Druid45ra)
