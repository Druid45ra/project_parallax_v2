# project_parallax_v2

# Vârful de Vis – Website Pensiune Montană Premium

Website de prezentare pentru **Vârful de Vis**, o pensiune montană premium situată în Sinaia, România. Proiectul este realizat ca **site static HTML + CSS + JavaScript minimal**, optimizat pentru performanță, accesibilitate și SEO.

---

## 🎯 Scopul proiectului

* Prezentarea pensiunii, camerelor și experiențelor oferite
* Colectarea cererilor de rezervare printr-un formular validat UX
* Oferirea unei experiențe vizuale premium, inspirată de natură
* Bază solidă pentru extindere ulterioară (backend / framework)

---
# project_parallax_v2

# Vârful de Vis — Mountain Guesthouse Showcase

This repository contains a minimal, static showcase website for "Vârful de Vis", a premium mountain guesthouse in Sinaia, Romania. The project is a simple static site built with HTML, CSS and vanilla JavaScript, optimized for performance, accessibility and SEO.

---

## 🎯 Project Goals

- Present the guesthouse, rooms and guest experiences
- Collect reservation requests via a small UX-validated booking form
- Provide a premium visual experience inspired by nature
- Serve as a clean, maintainable starter for future backend or framework migrations

---

## 🧱 Technologies

- HTML5 — semantic markup
- CSS3 — responsive layout and CSS variables
- JavaScript (Vanilla) — booking form validation and small UI interactions
- Google Fonts — Playfair Display, Inter
- Schema.org (JSON-LD) — basic SEO structured data

---

## 📂 Project Structure

```
project-root/
│
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

## 🖼 Preview

Add a screenshot to `assets/preview.png` and it will render below. If the project is deployed, replace the image with the live URL or a deployed preview.

![Site preview](assets/preview.png)

Key pages and sections:

- Hero / Welcome section with a large background image
- Rooms gallery and featured packages
- Blog teasers and read-more interactions
- Booking form with client-side validation

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
* claritate
