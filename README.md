# Professional Multi-Page Frontend Developer Portfolio

A modern, premium, dark-themed, and responsive developer portfolio website built using semantic **HTML5**, **CSS3**, **Vanilla JavaScript (ES6+)**, **Bootstrap 5**, and **Bootstrap Icons**.

Designed for frontend web developers applying for engineering roles, internships, and freelance projects.

---

## 🌟 Visual Theme & Design System

- **Color Palette:**
  - Deep Charcoal Canvas: `#0a0e17` & `#111827`
  - High-Contrast Headings: `#f8fafc` & White
  - Muted Body Text: `#94a3b8` & `#64748b`
  - Electric Indigo / Violet Accents: `#6366f1` / `#8b5cf6` with cyan highlights
- **Typography:** Google Fonts **Inter** (`wght@300;400;500;600;700;800`).
- **Components:** Glassmorphism card surfaces, soft shadows, thin borders (`rgba(255, 255, 255, 0.08)`), pulsing status indicator badges, and smooth scroll transitions.
- **Accessibility:** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), visible focus states, label associations, and `prefers-reduced-motion` detection.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Homepage with Hero, Expertise, Featured Work & Metrics
├── about.html                  # Developer Journey, UI/UX Mindset, Education & Goals
├── skills.html                 # Categorized Toolkit (Frontend, Tools, Exploratory)
├── projects.html               # Showcase with Interactive Category Filters
├── blog.html                   # Technical Notes with Live Search & Topic Filters
├── article.html                # Reusable Article & Tutorial Template
├── contact.html                # Responsive Contact Form with Client-Side Validation
├── assets/
│   ├── css/
│   │   └── style.css           # Custom Design Tokens, Layouts & Animations
│   ├── js/
│   │   └── script.js           # Vanilla JavaScript Interactivity & Handlers
│   └── images/
│       ├── profile.jpg         # Developer Avatar / Stylized Visual
│       ├── project-chocolate.jpg   # Chocolate Store Preview Thumbnail
│       ├── project-notes.jpg       # Notes App Preview Thumbnail
│       └── project-authentication.jpg # Auth System Preview Thumbnail
├── create_images.py            # Automated Asset Generator Script
└── README.md                   # Documentation & Setup Guide
```

---

## 🚀 How to Run the Website (Live Server in VS Code)

This website is completely static and runs directly in any modern browser without needing Node.js, npm, or build tools.

### Option 1: VS Code Live Server (Recommended)
1. Open **Visual Studio Code**.
2. Go to **File > Open Folder...** and select the `portfolio` folder:
   ```text
   C:\Users\LENOVO\.gemini\antigravity\scratch\portfolio
   ```
3. Install the **Live Server** extension (by Ritwick Dey) from the VS Code Extensions marketplace (`Ctrl+Shift+X`).
4. Right-click on `index.html` and select **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
5. The portfolio will automatically open in your browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Direct Browser Execution
Double-click `index.html` in Windows Explorer to open it directly in Chrome, Firefox, Edge, or Brave.

---

## ⚡ Interactive JavaScript Capabilities

All interactions are implemented in pure **Vanilla JavaScript** (`assets/js/script.js`):

1. **Sticky Navbar Observer:** Transitions background blur and border on scroll; auto-closes mobile navigation upon link clicks or `Escape` key press.
2. **Active Page Detection:** Automatically highlights the current page in the navbar based on the window path.
3. **Scroll Reveal:** Smooth reveal effects triggered via `IntersectionObserver` with fallback for reduced-motion settings.
4. **Project Category Filter:** Instant filtering between `All`, `Websites`, and `Applications` on `projects.html`.
5. **Real-time Blog Search & Tag Filters:** Live search input filters article titles and descriptions immediately with custom no-results feedback.
6. **Client-side Form Validation:** Validates full name (min 2 characters), email structure (regex), subject (min 3 characters), and message length (min 10 characters) with real-time error clearance.
7. **One-Click Email Copy:** Copies email address to the clipboard via the Clipboard API and displays a transient toast alert.
8. **Back to Top Button:** Smoothly scrolls back to top when clicked after scrolling down 350px.

---

## ✏️ Personalization & Placeholders Guide

All personal identifiers are marked with clear bracketed placeholders. Perform a find-and-replace in VS Code (`Ctrl+Shift+F`) to customize your details:

| Placeholder | Description | Example Replacement |
| :--- | :--- | :--- |
| `[Your Name]` | Your full name | `Alex Rivera` |
| `[Your Professional Title]` | Target role | `Frontend Web Developer` |
| `[Your Email]` | Contact email address | `alex.rivera@example.com` |
| `[Your Location]` | City, State or Country | `San Francisco, CA` |
| `[GitHub URL]` | GitHub profile username | `alexrivera-dev` |
| `[LinkedIn URL]` | LinkedIn handle | `alexrivera-dev` |
| `[Resume File]` | Resume path or link | `assets/docs/resume.pdf` |
| `[Education Details]` | University, Degree, Year | `B.S. in Computer Science, 2025` |

---

## 📬 Connecting the Contact Form to a Real Backend

Because this is a static frontend website, `contact.html` validates submissions client-side and displays a simulated confirmation banner.

To receive real email notifications from clients and recruiters in production, integrate a static form endpoint:

### Using Formspree (Free & Simple)
1. Register at [formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint ID (e.g., `https://formspree.io/f/xv...`).
3. In `contact.html`, set the form attribute:
   ```html
   <form id="portfolioContactForm" action="https://formspree.io/f/your-form-id" method="POST">
   ```

### Other Free Alternatives:
- **Web3Forms:** Simple access key without account registration.
- **EmailJS:** Trigger emails directly from client-side JavaScript.

---

## 📝 Adding New Blog Posts

1. Make a copy of `article.html` and name it after your article (e.g., `mastering-css-grid.html`).
2. Update the `<title>`, metadata, and article content.
3. Open `blog.html` and add a new article card inside `#blogGrid`:
   ```html
   <div class="col-md-6 col-lg-4 blog-col reveal-fade-up">
     <article class="custom-card blog-article-card" data-category="css">
       <span class="card-top-glow" aria-hidden="true"></span>
       <div class="d-flex justify-content-between align-items-center mb-3">
         <span class="badge bg-info text-dark">CSS & Layout</span>
         <span class="text-muted-custom small">Nov 2026</span>
       </div>
       <h3 class="h5 mb-2">
         <a href="mastering-css-grid.html" class="text-white text-decoration-none blog-title">
           Mastering CSS Grid in 2026
         </a>
       </h3>
       <p class="text-secondary-custom small mb-4 blog-excerpt">
         A comprehensive visual guide to grid tracks, fractional units, and named grid areas.
       </p>
       <div class="mt-auto pt-3 border-top border-subtle d-flex justify-content-between align-items-center">
         <span class="text-muted-custom small"><i class="bi bi-clock me-1"></i>5 min read</span>
         <a href="mastering-css-grid.html" class="fw-semibold small text-primary">Read Article <i class="bi bi-arrow-right"></i></a>
       </div>
     </article>
   </div>
   ```

---

## 📄 License & Attribution

Designed and built as an open portfolio template. Free to use, adapt, and deploy for personal portfolio showcases.
