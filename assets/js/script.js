/**
 * ============================================================================
 * Developer Portfolio - Interactive Scripts
 * Technology: Vanilla JavaScript (ES6+)
 * Features:
 *   - Sticky Navbar Scroll Observer & Mobile Auto-close
 *   - Active Navigation Link State Handler
 *   - Subtle Scroll Reveal via IntersectionObserver
 *   - Project Filter Tabs (All, Websites, Applications)
 *   - Blog Search Filtering & Category Filter Tabs
 *   - Contact Form Validation & Feedback Simulation
 *   - Email Clipboard Copy with Notification Toast
 *   - Smooth Back-to-Top Button
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 0. Dark / Light Theme Toggle & Persistence
  // --------------------------------------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', storedTheme);

  const updateThemeUI = (theme) => {
    themeToggleBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'light') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('title', 'Switch to dark mode');
          btn.setAttribute('aria-label', 'Switch to dark mode');
        } else {
          icon.className = 'bi bi-moon';
          btn.setAttribute('title', 'Switch to light mode');
          btn.setAttribute('aria-label', 'Switch to light mode');
        }
      }
    });
  };

  updateThemeUI(storedTheme);

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('portfolio-theme', targetTheme);
      updateThemeUI(targetTheme);
    });
  });

  // --------------------------------------------------------------------------
  // 1. Sticky Navbar & Mobile Navigation Enhancements
  // --------------------------------------------------------------------------
  const navbar = document.querySelector('.custom-navbar');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check on load

  // Close Bootstrap mobile navbar when clicking any link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Close mobile navbar when pressing ESC key for accessibility
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });

  // --------------------------------------------------------------------------
  // 2. Single Page Scrollspy & Active Navigation State
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], header[id]');

  const updateActiveNavLinkOnScroll = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else if (href && href.startsWith('#')) {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNavLinkOnScroll, { passive: true });
  updateActiveNavLinkOnScroll();

  // --------------------------------------------------------------------------
  // 3. Subtle Reveal on Scroll (IntersectionObserver)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.1,
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      // Fallback or user prefers reduced motion: reveal immediately
      revealElements.forEach((el) => el.classList.add('revealed'));
    }
  }

  // --------------------------------------------------------------------------
  // 4. Back to Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    const toggleBackToTop = () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. Project Filtering (projects.html & index.html featured)
  // --------------------------------------------------------------------------
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-item');
  const emptyProjectsNotice = document.getElementById('noProjectsNotice');

  if (projectFilterBtns.length > 0 && projectCards.length > 0) {
    projectFilterBtns.forEach((button) => {
      button.addEventListener('click', () => {
        // Active button toggle
        projectFilterBtns.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-filter');
        let visibleCount = 0;

        projectCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (selectedFilter === 'all' || category === selectedFilter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
            visibleCount++;
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            card.style.display = 'none';
          }
        });

        if (emptyProjectsNotice) {
          emptyProjectsNotice.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Blog Search & Category Filters (blog.html)
  // --------------------------------------------------------------------------
  const blogSearchInput = document.getElementById('blogSearchInput');
  const blogFilterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogArticles = document.querySelectorAll('.blog-article-card');
  const noBlogResults = document.getElementById('noBlogResults');

  const filterBlogPosts = () => {
    if (!blogArticles.length) return;

    const searchTerm = blogSearchInput ? blogSearchInput.value.toLowerCase().trim() : '';
    const activeFilterBtn = document.querySelector('.blog-filter-btn.active');
    const selectedCategory = activeFilterBtn ? activeFilterBtn.getAttribute('data-category') : 'all';

    let matchCount = 0;

    blogArticles.forEach((article) => {
      const title = article.querySelector('.blog-title') ? article.querySelector('.blog-title').textContent.toLowerCase() : '';
      const excerpt = article.querySelector('.blog-excerpt') ? article.querySelector('.blog-excerpt').textContent.toLowerCase() : '';
      const category = article.getAttribute('data-category') || '';

      const matchesSearch = !searchTerm || title.includes(searchTerm) || excerpt.includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

      if (matchesSearch && matchesCategory) {
        article.closest('.blog-col').style.display = 'block';
        matchCount++;
      } else {
        article.closest('.blog-col').style.display = 'none';
      }
    });

    if (noBlogResults) {
      noBlogResults.style.display = matchCount === 0 ? 'block' : 'none';
    }
  };

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', filterBlogPosts);
  }

  if (blogFilterBtns.length > 0) {
    blogFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        blogFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        filterBlogPosts();
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Copy Email to Clipboard Functionality
  // --------------------------------------------------------------------------
  const copyEmailButtons = document.querySelectorAll('.btn-copy-email');
  const copyToast = document.getElementById('copyToast');

  const showCopyToast = (message = 'Email copied to clipboard!') => {
    if (!copyToast) return;
    copyToast.textContent = message;
    copyToast.classList.add('show');
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2800);
  };

  copyEmailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const emailToCopy = button.getAttribute('data-email') || 'alex.dev@example.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailToCopy)
          .then(() => {
            showCopyToast(`Copied: ${emailToCopy}`);
          })
          .catch(() => {
            fallbackCopyText(emailToCopy);
          });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  });

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopyToast(`Copied: ${text}`);
      } else {
        showCopyToast('Failed to copy. Please manually select the email.');
      }
    } catch (err) {
      showCopyToast('Failed to copy. Please manually select the email.');
    }
    document.body.removeChild(textArea);
  };

  // --------------------------------------------------------------------------
  // 8. Contact Form Validation & Feedback Simulation
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('portfolioContactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const formErrorAlert = document.getElementById('formErrorAlert');

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (input, isValid) => {
      if (isValid) {
        input.classList.remove('is-invalid-field');
      } else {
        input.classList.add('is-invalid-field');
      }
      return isValid;
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let formIsValid = true;

      // Validate Name (minimum 2 chars)
      const isNameValid = nameInput.value.trim().length >= 2;
      if (!validateField(nameInput, isNameValid)) formIsValid = false;

      // Validate Email
      const isEmailValid = emailRegex.test(emailInput.value.trim());
      if (!validateField(emailInput, isEmailValid)) formIsValid = false;

      // Validate Subject (minimum 3 chars)
      const isSubjectValid = subjectInput.value.trim().length >= 3;
      if (!validateField(subjectInput, isSubjectValid)) formIsValid = false;

      // Validate Message (minimum 10 chars)
      const isMessageValid = messageInput.value.trim().length >= 10;
      if (!validateField(messageInput, isMessageValid)) formIsValid = false;

      if (!formIsValid) {
        if (formErrorAlert) {
          formErrorAlert.style.display = 'block';
        }
        if (formSuccessAlert) {
          formSuccessAlert.style.display = 'none';
        }
        return;
      }

      // Hide error alert
      if (formErrorAlert) formErrorAlert.style.display = 'none';

      // Submit simulation button loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Validating...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        if (formSuccessAlert) {
          formSuccessAlert.style.display = 'block';
          formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        contactForm.reset();

        // Clear any leftover invalid classes
        [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
          input.classList.remove('is-invalid-field');
        });
      }, 700);
    });

    // Real-time error removal when user starts typing
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid-field')) {
          input.classList.remove('is-invalid-field');
        }
      });
    });
  }
});
