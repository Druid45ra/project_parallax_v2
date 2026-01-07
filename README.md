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

## 🧱 Tehnologii utilizate

* **HTML5** – structură semantică validă
* **CSS3** – layout modern, variabile CSS, responsive design
* **JavaScript (Vanilla)** – validare formular & UX
* **Google Fonts** – Playfair Display, Inter
* **Schema.org (JSON-LD)** – SEO pentru domeniul turismului

---

## 📂 Structura proiectului

```
project-root/
│
├── index.html        # Structura principală a site-ului
├── style.css         # Stiluri globale (UI + responsive)
├── booking.js        # JS minimal pentru formularul de rezervare
├── README.md         # Documentația proiectului
├── favicon.ico       # Favicon (opțional)
└── assets/           # (opțional) imagini locale / iconuri
```

---

## ⚙️ Funcționalități

### ✔ Implementate

* Layout responsive (desktop / tablet / mobile)
* Navigație sticky
* Secțiuni multiple (Hero, Camere, Pachete, Blog, Galerie etc.)
* Formular de rezervare cu:

  * validare date
  * validare email
  * validare telefon
  * feedback UX fără reload
* Optimizare SEO (meta tags, Open Graph, Schema.org)
* Lazy loading pentru imagini

### ⏳ Neimplementate (intenționat)

* Backend (trimitere email / stocare rezervări)
* Autentificare utilizatori
* CMS

---

## 🚀 Rulare locală

Proiectul este **100% static**.

### Varianta simplă

Deschide fișierul `index.html` direct în browser.

### Varianta recomandată

Rulează cu un server local (pentru comportament identic cu producția):

```bash
# folosind VS Code Live Server
sau

python -m http.server
```

Accesează: `http://localhost:8000`

---

## 🔍 SEO & Lighthouse

Proiectul este optimizat pentru:

* **SEO** – title, meta description, heading-uri corecte, Schema.org
* **Performance** – fără JS heavy, lazy loading imagini
* **Accessibility** – label-uri corecte, aria attributes

Scoruri Lighthouse așteptate:

* Performance: **85+**
* Accessibility: **90+**
* Best Practices: **95–100**
* SEO: **90+**

---

## 🧩 Extensii recomandate

* Integrare backend (PHP / Node / API)
* Salvare rezervări într-o bază de date
* Trimitere email automat
* Scroll spy pentru navigație
* Galerie modal (lightbox)
* Migrare către React / Astro / Next.js

---

## 🛡️ Licență

Acest proiect este furnizat ca **template educațional / demo**.

Pentru utilizare comercială:

* înlocuiește imaginile stock
* personalizează conținutul
* adaugă backend real

---

## ✍️ Autor

Creat și arhitecturat ca proiect demonstrativ de front-end modern, cu focus pe:

* claritate
* performanță
* UX
* bune practici web



> „Un site bun nu este cel care arată bine, ci cel care poate fi întreținut și scalat fără frică.”
