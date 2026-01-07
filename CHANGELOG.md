# Changelog

Toate modificările notabile ale acestui proiect sunt documentate în acest fișier.

Format inspirat din **Keep a Changelog** și **Semantic Versioning**.

---

## [1.0.0] – 2026-01-07

### 🎉 Lansare inițială (Production Ready)

#### Added

* Structură HTML5 semantică (`nav`, `main`, `section`, `article`, `footer`)
* Layout complet website: Hero, Poveste, Camere, Rezervări, Contact
* Formular de rezervare cu câmpuri esențiale
* Validare UX frontend (JavaScript vanilla)
* Feedback vizual la submit (fără reload)
* Optimizare SEO:

  * meta title & description
  * Open Graph
  * Twitter Card
  * Schema.org (LodgingBusiness)
* Lazy loading pentru imagini
* Google Fonts optimizate (`preconnect`)
* README.md documentație completă

#### Changed

* Refactor complet al `<body>` pentru markup valid
* Eliminare elemente redundante / duplicate
* Corectare ierarhie heading-uri (`h1` unic)
* Formular refăcut pentru accesibilitate (`label` ↔ `input`)

#### Fixed

* DOM corupt și nesting invalid
* Probleme Lighthouse Accessibility
* Probleme SEO critice (meta lipsă)
* Posibilitate submit invalid formular

#### Removed

* Markup duplicat
* Structuri HTML nefolosite
* Pattern-uri UX anti-user (alert-uri, reload-uri)

---

## [Unreleased]

### 🔜 Planificat

* Integrare backend (email / API rezervări)
* Scroll spy pentru navigație
* Modal confirmare rezervare
* Galerie foto cu lightbox
* Pagini dedicate (Camere, Blog)
* Optimizare imagini WebP / AVIF
* Testare Lighthouse oficială

---

> Regula proiectului: **orice modificare trebuie să apară aici înainte de producție.**
