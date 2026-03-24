/**
 * DevPortfolio Starter Kit - Main JavaScript
 * Handles all interactive features and animations
 *
 * Features:
 * - Dark/Light mode toggle
 * - Scroll reveal animations
 * - Smooth scroll navigation
 * - Active nav highlighting
 * - Skill bar animations
 * - Sticky navigation
 * - Custom cursor
 * - Particle system
 * - Mobile navigation
 * - Dynamic year update
 *
 * @author Subham Paul
 * @license MIT
 */

(function() {
  'use strict';

  // === DOM ELEMENTS ===
  const html = document.documentElement;
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const sections = document.querySelectorAll('section[id]');
  const skillBars = document.querySelectorAll('.skill-bar');
  const particlesContainer = document.querySelector('[data-particles]');
  const yearElement = document.querySelector('[data-year]');
  const cursorDot = document.querySelector('[data-cursor]');
  const cursorOutline = document.querySelector('[data-cursor-outline]');

  // === STATE ===
  let isScrolling = false;
  let lastScrollY = window.scrollY;
  let cursorX = 0, cursorY = 0;
  let outlineX = 0, outlineY = 0;

  // === DARK/LIGHT MODE TOGGLE ===
  function initTheme() {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    } else if (prefersLight) {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add animation class
    themeToggle.classList.add('theme-animating');
    setTimeout(() => {
      themeToggle.classList.remove('theme-animating');
    }, 300);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // === SCROLL REVEAL ===
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once revealed
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // === SMOOTH SCROLL ===
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or empty
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const navHeight = nav ? nav.offsetHeight : 0;
          const targetPosition = target.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
          }
        }
      });
    });
  }

  // === ACTIVE NAV HIGHLIGHTING ===
  function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // === SKILL BARS ANIMATION ===
  function initSkillBars() {
    const skillsSection = document.querySelector('.skills');

    if (!skillsSection) return;

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar');
          bars.forEach(bar => {
            const width = bar.dataset.width || 0;
            bar.style.setProperty('--target-width', `${width}%`);
          });
          // Stop observing
          skillObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    skillObserver.observe(skillsSection);
  }

  // === STICKY NAV ===
  function initStickyNav() {
    function handleScroll() {
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on load
  }

  // === CUSTOM CURSOR ===
  function initCustomCursor() {
    if (!cursorDot || !cursorOutline) return;

    // Only enable on desktop
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;

        // Move dot immediately
        cursorDot.style.left = `${cursorX}px`;
        cursorDot.style.top = `${cursorY}px`;

        // Smooth follow for outline (lerp)
        animateOutline();
      });

      // Hover effects
      const hoverElements = document.querySelectorAll('a, button, .project-card, .stat-card, .contact-card, .tech-badge');

      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorDot.classList.add('hover');
          cursorOutline.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
          cursorDot.classList.remove('hover');
          cursorOutline.classList.remove('hover');
        });
      });
    } else {
      // Hide cursor on touch devices
      cursorDot.style.display = 'none';
      cursorOutline.style.display = 'none';
    }
  }

  function animateOutline() {
    if (!cursorOutline) return;

    const delay = 6;
    outlineX += (cursorX - outlineX) / delay;
    outlineY += (cursorY - outlineY) / delay;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;

    requestAnimationFrame(animateOutline);
  }

  // === PARTICLE SYSTEM ===
  function initParticles() {
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;

      // Random size variation
      const size = 2 + Math.random() * 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;

      // Random opacity
      particle.style.opacity = 0.2 + Math.random() * 0.3;

      particlesContainer.appendChild(particle);
    }
  }

  // === MOBILE NAVIGATION ===
  function initMobileNav() {
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Prevent body scroll when menu is open
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // === FOOTER YEAR ===
  function updateFooterYear() {
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // === SCROLL LISTENER FOR ACTIVE NAV ===
  function initScrollListener() {
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          updateActiveNav();
          isScrolling = false;
        });
        isScrolling = true;
      }
    }, { passive: true });
  }

  // === PARALLAX EFFECT FOR HERO ===
  function initParallax() {
    const heroContent = document.querySelector('.hero-content');

    if (!heroContent) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero')?.offsetHeight || 0;

      if (scrolled < heroHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight);
      }
    }, { passive: true });
  }

  // === PERFORMANCE OPTIMIZATION ===
  // Throttle function for scroll events
  function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;

    return function(...args) {
      const currentTime = Date.now();

      if (currentTime - lastExecTime < delay) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          lastExecTime = currentTime;
          func.apply(this, args);
        }, delay);
      } else {
        lastExecTime = currentTime;
        func.apply(this, args);
      }
    };
  }

  // === INITIALIZATION ===
  function init() {
    initTheme();
    initParticles();
    initScrollReveal();
    initSmoothScroll();
    initStickyNav();
    initSkillBars();
    initMobileNav();
    initCustomCursor();
    updateFooterYear();
    initScrollListener();
    initParallax();

    // Trigger initial nav check
    updateActiveNav();

    // Log initialization
    console.log('DevPortfolio initialized successfully');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
