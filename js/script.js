/**
 * ============================================================================
 * PREMIUM SINGLE-PAGE DEVELOPER PORTFOLIO - MAIN SCRIPT
 * Stack: HTML5, CSS3, Vanilla JavaScript (ES6+)
 * Features:
 *   1. Scroll Progress Bar Indicator
 *   2. Sticky Navbar Glassmorphism & Mobile Menu Auto-Close
 *   3. Active Section ScrollSpy via IntersectionObserver
 *   4. Typewriter Rotating Text in Hero
 *   5. Scroll Reveal Animations via IntersectionObserver
 *   6. Back-to-Top Button Handler
 *   7. Client-Side Contact Form Validation & Prefilled Mailto Trigger
 *   8. One-Click Email Copy to Clipboard
 *   9. Dynamic Footer Year
 *  10. Dark / Light Mode Theme Toggle with LocalStorage Persistence
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. CONFIGURATION & PLACEHOLDERS
  // --------------------------------------------------------------------------
  const CONFIG = {
    developerEmail: 'vishnumandalji3754@gmail.com',
    roles: [
      'Frontend Developer',
      'Web Developer',
      'JavaScript Developer',
      'UI Enthusiast'
    ],
    typingSpeed: 100,
    erasingSpeed: 50,
    pauseBetweenWords: 2000,
    pauseBeforeType: 500
  };

  // --------------------------------------------------------------------------
  // 2. THEME TOGGLE (DARK / LIGHT MODE)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const htmlRoot = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Default to premium dark theme
    htmlRoot.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.className = 'bi bi-sun';
      themeToggleBtn.setAttribute('title', 'Switch to dark theme');
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeIcon.className = 'bi bi-moon-stars';
      themeToggleBtn.setAttribute('title', 'Switch to light theme');
      themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }
  }

  // --------------------------------------------------------------------------
  // 3. SCROLL PROGRESS BAR & STICKY NAVBAR
  // --------------------------------------------------------------------------
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const mainNavbar = document.getElementById('mainNavbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Progress bar width
    if (scrollProgressBar && scrollHeight > 0) {
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    // Sticky navbar backdrop blur styling
    if (mainNavbar) {
      if (scrollTop > 40) {
        mainNavbar.classList.add('navbar-scrolled');
      } else {
        mainNavbar.classList.remove('navbar-scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollTop > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION AUTO-CLOSE & SMOOTH SCROLLING
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link:not(.external-link)');
  const navbarCollapse = document.getElementById('navbarNav');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Auto-collapse mobile navbar if open
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }

      // Smooth scroll with navbar height compensation
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navHeight = mainNavbar ? mainNavbar.offsetHeight : 70;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navHeight + 2;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Set focus for accessibility without visible jerk
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });

  // Close mobile navbar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });

  // --------------------------------------------------------------------------
  // 5. ACTIVE NAVIGATION SCROLLSPY (IntersectionObserver)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const sectionObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const linkHref = link.getAttribute('href');
            if (linkHref === `#${currentId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, sectionObserverOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }

  // --------------------------------------------------------------------------
  // 6. TYPEWRITER EFFECT IN HERO SECTION
  // --------------------------------------------------------------------------
  const typewriterTarget = document.getElementById('typewriterText');
  
  if (typewriterTarget && CONFIG.roles.length > 0) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentRole = CONFIG.roles[roleIndex];

      if (isDeleting) {
        charIndex--;
        typewriterTarget.textContent = currentRole.substring(0, charIndex);
      } else {
        charIndex++;
        typewriterTarget.textContent = currentRole.substring(0, charIndex);
      }

      let timeoutDuration = isDeleting ? CONFIG.erasingSpeed : CONFIG.typingSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing word, wait before deleting
        timeoutDuration = CONFIG.pauseBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished erasing, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % CONFIG.roles.length;
        timeoutDuration = CONFIG.pauseBeforeType;
      }

      setTimeout(typeLoop, timeoutDuration);
    }

    typeLoop();
  }

  // --------------------------------------------------------------------------
  // 7. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Reveal everything immediately if user prefers reduced motion
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  } else if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // --------------------------------------------------------------------------
  // 8. ONE-CLICK EMAIL COPY TO CLIPBOARD
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.developerEmail);
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
        copyEmailBtn.classList.add('btn-success');

        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
          copyEmailBtn.classList.remove('btn-success');
        }, 2500);
      } catch (err) {
        // Fallback prompt
        window.prompt('Copy email to clipboard: Ctrl+C, Enter', CONFIG.developerEmail);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. CLIENT-SIDE CONTACT FORM VALIDATION & MAILTO HANDLER
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formAlertBanner = document.getElementById('formAlertBanner');

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    // Email regex validator
    const isValidEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email.trim());
    };

    // Real-time validation helper
    const validateField = (input, isValid, errorMsg) => {
      const feedbackEl = input.parentElement.querySelector('.invalid-feedback');
      if (isValid) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        if (feedbackEl && errorMsg) {
          feedbackEl.textContent = errorMsg;
        }
      }
      return isValid;
    };

    // Input blur & input event listeners
    nameInput?.addEventListener('input', () => {
      validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter at least 2 characters.');
    });

    emailInput?.addEventListener('input', () => {
      validateField(emailInput, isValidEmail(emailInput.value), 'Please enter a valid email address.');
    });

    subjectInput?.addEventListener('input', () => {
      validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Please enter a subject (min 3 characters).');
    });

    messageInput?.addEventListener('input', () => {
      validateField(messageInput, messageInput.value.trim().length >= 10, 'Please write a message with at least 10 characters.');
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter at least 2 characters.');
      const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value), 'Please enter a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Please enter a subject (min 3 characters).');
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'Please write a message with at least 10 characters.');

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        // Focus first invalid element
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Valid submission: create prefilled mailto link
      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const subject = encodeURIComponent(subjectInput.value.trim());
      const rawMessage = messageInput.value.trim();
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${rawMessage}`);

      const mailtoUrl = `mailto:${CONFIG.developerEmail}?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show reassuring feedback banner in UI
      if (formAlertBanner) {
        formAlertBanner.style.display = 'block';
        formAlertBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset form states
      contactForm.reset();
      [nameInput, emailInput, subjectInput, messageInput].forEach((el) => {
        el.classList.remove('is-valid');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. DYNAMIC FOOTER COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
