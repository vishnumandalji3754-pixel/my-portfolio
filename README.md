# Premium Single-Page Frontend Developer Portfolio

A modern, high-converting, fully responsive single-page developer portfolio website crafted with semantic **HTML5**, **CSS3**, **Vanilla JavaScript (ES6+)**, **Bootstrap 5**, **Bootstrap Icons**, and **Google Fonts**.

Designed specifically for frontend developers, web engineers, and UI specialists to showcase skills, interactive projects, education milestones, and contact channels to recruiters, hiring managers, and prospective clients.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Single-page portfolio with all smooth-scroll sections
├── css/
│   └── style.css               # Design tokens (CSS variables), layouts & animations
├── js/
│   └── script.js               # Vanilla JS: scrollspy, typewriter, form validation, theme toggle
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # Stylized developer avatar image (600x600)
│   │   ├── project-1.jpg       # Project 1: Chocolate E-Commerce Storefront
│   │   ├── project-2.jpg       # Project 2: Developer Portfolio Website
│   │   ├── project-3.jpg       # Project 3: Task Management Application
│   │   └── project-4.jpg       # Project 4: Weather Dashboard Application
│   └── resume.pdf              # Sample developer resume PDF for download
├── generate_assets.py          # Python asset generator for sample images and PDF
└── README.md                   # Comprehensive customization and setup guide
```

---

## 🚀 How to Run the Website (Live Server in VS Code)

This website is **100% static** and runs directly in any modern browser without requiring Node.js, npm, or build steps.

### Step 1: Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Click **File > Open Folder...** (`Ctrl+K Ctrl+O` on Windows).
3. Select the `portfolio` folder:
   ```text
   C:\Users\LENOVO\.gemini\antigravity\scratch\portfolio
   ```

### Step 2: Install Live Server (if not already installed)
1. In VS Code, open the Extensions sidebar (`Ctrl+Shift+X`).
2. Search for **Live Server** (by *Ritwick Dey*).
3. Click **Install**.

### Step 3: Launch the Website
1. In the VS Code File Explorer, right-click `index.html`.
2. Select **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
3. Your default web browser will automatically open:
   ```text
   http://127.0.0.1:5500/index.html
   ```
4. Any edits made to `index.html`, `css/style.css`, or `js/script.js` will trigger instant hot-reloading in the browser.

---

## 🎨 Visual Design System & Color Palette

The project is styled using CSS Variables (`:root` in `css/style.css`) following a dark developer aesthetic with blue-to-purple gradient highlights:

| Token | Variable | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `--bg-primary` | `#070B16` | Deep navy-black page body |
| **Secondary Background** | `--bg-secondary` | `#0D1424` | Alternate section background |
| **Card Surface** | `--bg-card` | `#111B2D` | Rounded card containers |
| **Card Hover** | `--bg-card-hover` | `#152238` | Card elevation on hover |
| **Primary Accent** | `--primary-accent` | `#438AFF` | Electric blue buttons, links & badges |
| **Secondary Accent** | `--secondary-accent` | `#A855F7` | Vibrant purple gradient highlight |
| **Main Text** | `--text-primary` | `#F8FAFC` | High-contrast headings and prominent text |
| **Muted Text** | `--text-muted` | `#9CA8BA` | Body paragraphs and descriptions |
| **Card Border** | `--border-color` | `rgba(67, 138, 255, 0.15)` | Subtle translucent card borders |
| **Hover Glow** | `--border-glow` | `rgba(168, 85, 247, 0.35)` | Violet ambient glow on card hover |

---

## 🧭 Page Sections & Structure

All navigation items smoothly scroll to their corresponding sections:

1. **Sticky Navigation Bar (`#mainNavbar`)**
   - Brand logo: `vishnu.dev`
   - Nav links: Home, About, Skills, Projects, Services, Contact
   - Resume download button (`assets/resume.pdf` ➔ `Vishnu_Kumar_Mandal_Resume.pdf`)
   - GitHub (`vishnumandalji3754-pixel`) & LinkedIn (`vishnu-kumar-mandal-510261439`) shortcuts
   - Dark / Light mode toggle button (persists in `localStorage`)
   - Scroll progress bar at the very top of the page
   - Auto-collapsing mobile hamburger menu
2. **Hero Section (`#home`)**
   - "Available for new opportunities" status badge with pulsating green beacon dot
   - Prominent greeting: "Hi, I'm Vishnu Kumar Mandal" with blue-to-purple gradient text
   - Typewriter rotating role animation ("Frontend Developer", "Web Developer", "JavaScript Developer", "UI Enthusiast")
   - Action CTAs: "Explore My Work" and "Download Resume"
   - Profile photo: High-resolution portrait of Vishnu with subtle gradient border and gentle floating animation
   - 4 floating technology badges: HTML5, CSS3, JavaScript, Bootstrap 5
3. **About Me (`#about`)**
   - Professional narrative highlighting Vishnu's CS background in Ranchi and web engineering skills
   - Interactive VS Code code snippet mockup card (`vishnu.config.js`)
   - 4 achievement cards (`15+ Projects`, `12+ Technologies`, `100+ Problems Solved`, `100% Growth`)
   - Personal philosophy highlight quote card
4. **Skills & Technologies (`#skills`)**
   - **Programming Languages:** C, C++, Java, Python, JavaScript (ES6+)
   - **Frontend Development:** HTML5, CSS3, Bootstrap 5, Responsive Design
   - **Tools & Workflow:** Git, GitHub, VS Code, Browser DevTools
   - **Currently Exploring:** React, Node.js, SQL & Databases
   - Premium 4-column Bento modules with radiant top beams, brand-colored neon icons, and micro-tag pills (compact & attractive in a single screen view)
5. **Featured Projects (`#projects`)**
   - Compact 3-column responsive project grid:
     1. **Ganesh Ji Website:** Interactive devotional web experience with cultural aesthetics, devotional audio elements, and smooth modern animations ([Live Demo](https://ganesh-git-main-alpha-fa7c.vercel.app/) · [Source Code](https://github.com/vishnumandalji3754-pixel/frontend-)).
     2. **Online Complaint Register System:** Comprehensive grievance registration and tracking portal with category selection, issue logging, and responsive UI ([Live Demo](https://complaint-register-system-git-main-alpha-fa7c.vercel.app/)).
     3. **Developer Portfolio (`vishnu.dev`):** High-performance single-page showcase featuring dark/light modes, scrollspy, interactive typing effect, and client-side contact validation.
   - Preview image zoom and card elevation on hover
   - GitHub repo link and Live demo link buttons pointing to `vishnumandalji3754-pixel`
   - "View All Projects on GitHub" link button
6. **Services Section (`#services`)**
   - 4 specialized cards: Responsive Website Development, Frontend UI Development, Landing Page Design, Website Optimization
7. **Additional Highlights (`#highlights`)**
   - Compact cards: Coding Interests, Learning Goals, Favorite Tools, Areas of Interest
8. **Contact Section (`#contact`)**
   - Heading: *"Let's Build Something Great Together"*
   - Email address (`vishnumandalji3754@gmail.com`) with one-click clipboard copy button
   - GitHub (`github.com/vishnumandalji3754-pixel`), LinkedIn, and Location (`Ranchi, Jharkhand, India`) cards
   - Client-side validated form (Name, Email, Subject, Message) with real-time feedback
   - Submits via prefilled `mailto:` trigger to `vishnumandalji3754@gmail.com`
9. **Footer**
   - Developer brand (`vishnu.dev`), Ranchi tagline, quick links, social icons, dynamic copyright year (`new Date().getFullYear()`), and smooth "Back to Top" button

---

## ✏️ Personalization Reference

| Target | Value in Portfolio |
| :--- | :--- |
| **Developer Name** | `Vishnu Kumar Mandal` |
| **Brand Logo** | `vishnu.dev` |
| **Phone / WhatsApp** | `+91 62998 30228` |
| **Education** | `BCA (DSPMU Ranchi, 2024-2028, 8.7 SGPA)` |
| **Email Address** | `vishnumandalji3754@gmail.com` |
| **Location** | `Ranchi, Jharkhand, India` |
| **GitHub Profile** | `https://github.com/vishnumandalji3754-pixel` |
| **LinkedIn Profile** | `https://www.linkedin.com/in/vishnu-kumar-mandal-510261439` |
| **Profile Photo** | `assets/images/profile.jpg` (User portrait) |
| **Resume (Google Drive)** | `https://drive.google.com/drive/folders/1cDdxOpzmTmxGqJqyf6_WLyZJsfHdydfG?usp=sharing` |
| **Resume PDF (Offline)** | `assets/resume.pdf` (Vishnu Kumar Mandal Resume) |
| **Core Languages** | `C, C++, Java, Python, JavaScript` |

---

## 🛠️ How to Customize Colors & Animations

### Customizing Colors
Open `css/style.css` and adjust the variables under `:root`:
```css
:root {
  /* Change the accent gradient to Emerald / Cyan: */
  --primary-accent: #10B981;
  --secondary-accent: #06B6D4;
  --accent-gradient: linear-gradient(135deg, #10B981 0%, #06B6D4 100%);

  /* Change background colors: */
  --bg-primary: #070B16;
  --bg-card: #111B2D;
}
```

### Customizing Typewriter Roles
Open `js/script.js` and modify the `CONFIG.roles` array:
```javascript
const CONFIG = {
  roles: [
    'Frontend Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Open Source Contributor'
  ],
  typingSpeed: 100,
  erasingSpeed: 50,
  pauseBetweenWords: 2000
};
```

### Accessibility & Reduced Motion
The stylesheet includes built-in support for `prefers-reduced-motion: reduce`. Users who prefer reduced motion will automatically have keyframe animations, floating elements, and transitions disabled.

---

## 📬 Connecting the Contact Form to a Backend Email Service

By default, the contact form validates input client-side and triggers a prefilled `mailto:` link. To receive messages directly in your inbox without opening an email client:

### Option A: Using Formspree (Free & Simple)
1. Register an account at [Formspree.io](https://formspree.io/).
2. Create a new form and copy your Form ID (e.g., `xpzgvyab`).
3. In `index.html`, add the `action` and `method` attributes to `<form id="contactForm">`:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Comment out or adapt the `e.preventDefault()` mailto logic in `js/script.js`.

### Option B: Using EmailJS
1. Register at [EmailJS.com](https://www.emailjs.com/).
2. Add the EmailJS CDN script and send form data via `emailjs.sendForm(...)`.

---

## 📄 License
This portfolio template is free and open-source for personal and commercial use.
