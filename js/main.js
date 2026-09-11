/* ============================================
   MAIN.JS - Main JavaScript for flyp replica
   Hazionetechnologies Template
   ============================================ */

(function () {
  'use strict';

  const CONFIG = typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : {};

  // ---- HELPER: Apply CSS variables from theme config ----
  function applyTheme() {
    const theme = CONFIG.theme;
    if (!theme) return;
    const root = document.documentElement;
    const mapping = {
      primary: '--color-primary',
      primaryDark: '--color-primary-dark',
      secondary: '--color-secondary',
      accent: '--color-accent',
      success: '--color-success',
      background: '--color-bg',
      surface: '--color-surface',
      surfaceAlt: '--color-surface-alt',
      textPrimary: '--color-text',
      textSecondary: '--color-text-muted',
      textLight: '--color-text-light',
      border: '--color-border',
    };
    Object.entries(mapping).forEach(([key, cssVar]) => {
      if (theme[key]) root.style.setProperty(cssVar, theme[key]);
    });
    if (CONFIG.typography) {
      if (CONFIG.typography.fontFamily)
        root.style.setProperty('--font-body', CONFIG.typography.fontFamily);
      if (CONFIG.typography.headingFont)
        root.style.setProperty('--font-heading', CONFIG.typography.headingFont);
    }
  }

  // ---- SEO ----
  function applySEO() {
    const seo = CONFIG.seo;
    if (!seo) return;
    if (seo.title) document.getElementById('page-title').textContent = seo.title;
    if (seo.description)
      document.getElementById('page-description').setAttribute('content', seo.description);
  }

  // ---- COOKIE BANNER ----
  function initCookieBanner() {
    const cfg = CONFIG.cookieBanner;
    if (!cfg || !cfg.enabled) return;
    if (localStorage.getItem('cookiesAccepted')) return;

    const banner = document.getElementById('cookie-banner');
    banner.classList.remove('hidden');
    document.getElementById('cookie-message').textContent = cfg.message;
    document.getElementById('cookie-accept').textContent = cfg.acceptText;
    document.getElementById('cookie-learn-more').textContent = cfg.learnMoreText;
    document.getElementById('cookie-learn-more').href = cfg.learnMoreLink || '#';

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.classList.add('hidden');
    });
  }

  // ---- NAVIGATION ----
  function initNav() {
    const brand = CONFIG.brand || {};
    const nav = CONFIG.nav || {};

    // Logo
    const logoIcon = document.getElementById('logo-icon');
    const logoText = document.getElementById('logo-text');
    logoIcon.textContent = brand.logo?.upsideDownIcon || '🏠';
    logoText.textContent = brand.logo?.text || brand.name || 'flyp';

    // Nav links
    const navLinks = document.getElementById('nav-links');
    if (nav.links) {
      navLinks.innerHTML = nav.links
        .map((l) => `<li><a href="${l.href}">${l.text}</a></li>`)
        .join('');
    }

    // CTA
    const navCta = document.getElementById('nav-cta');
    if (nav.ctaButton) {
      navCta.textContent = nav.ctaButton.text;
      navCta.href = nav.ctaButton.href;
    }

    // Hamburger
    const hamburger = document.getElementById('nav-hamburger');
    const menu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('main-nav');
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- HERO ----
  function initHero() {
    const hero = CONFIG.hero || {};
    document.getElementById('hero-heading').textContent = hero.heading || '';
    document.getElementById('hero-subheading').textContent = hero.subheading || '';
    const cta = document.getElementById('hero-cta');
    if (hero.ctaButton) {
      cta.textContent = hero.ctaButton.text;
      cta.href = hero.ctaButton.href;
    }
    if (hero.backgroundImage) {
      document.getElementById('hero-bg').style.backgroundImage = `url(${hero.backgroundImage})`;
    }
  }

  // ---- FEATURED ----
  function initFeatured() {
    const featured = CONFIG.featured;
    if (!featured || !featured.enabled) {
      document.getElementById('featured').style.display = 'none';
      return;
    }
    document.getElementById('featured-label').textContent = featured.label || '';
    const logosContainer = document.getElementById('featured-logos');
    logosContainer.innerHTML = featured.logos
      .map(
        (logo) =>
          `<div class="featured__logo">${logo.name}</div>`
      )
      .join('');
  }

  // ---- HOW IT WORKS ----
  function initHowItWorks() {
    const hiw = CONFIG.howItWorks || {};
    document.getElementById('hiw-heading').textContent = hiw.heading || '';
    document.getElementById('hiw-subtitle').textContent = hiw.subtitle || '';

    const grid = document.getElementById('steps-grid');
    if (hiw.steps) {
      grid.innerHTML = hiw.steps
        .map(
          (step) => `
            <div class="step-card reveal">
              <div class="step-card__number">${step.number}</div>
              <span class="step-card__icon">${step.icon}</span>
              <h3 class="step-card__title">${step.title}</h3>
              <p class="step-card__desc">${step.description}</p>
            </div>
          `
        )
        .join('');
    }

    const cta = document.getElementById('hiw-cta');
    if (hiw.ctaButton) {
      cta.textContent = hiw.ctaButton.text;
      cta.href = hiw.ctaButton.href;
    }
  }

  // ---- COMPARE AGENTS ----
  function initCompareAgents() {
    const cmp = CONFIG.compareAgents || {};
    document.getElementById('compare-heading').textContent = cmp.heading || '';
    document.getElementById('compare-description').textContent = cmp.description || '';
    const cta = document.getElementById('compare-cta');
    if (cmp.ctaButton) {
      cta.textContent = cmp.ctaButton.text;
      cta.href = cmp.ctaButton.href;
    }
  }

  // ---- USER PATHS ----
  function initUserPaths() {
    const paths = CONFIG.userPaths || {};
    document.getElementById('paths-heading').textContent = paths.heading || '';
    document.getElementById('paths-subtitle').textContent = paths.subtitle || '';

    const grid = document.getElementById('paths-grid');
    if (paths.paths) {
      grid.innerHTML = paths.paths
        .map(
          (p) => `
            <div class="path-card reveal">
              <span class="path-card__emoji">${p.emoji}</span>
              <h3 class="path-card__title">${p.title}</h3>
              <p class="path-card__desc">${p.description}</p>
              <a href="${p.ctaHref}" class="path-card__cta">${p.ctaText}</a>
            </div>
          `
        )
        .join('');
    }
  }

  // ---- STORIES ----
  function initStories() {
    const stories = CONFIG.stories || {};
    document.getElementById('stories-heading').textContent = stories.heading || '';
    document.getElementById('stories-subtitle').textContent = stories.subtitle || '';

    const carousel = document.getElementById('stories-carousel');
    if (stories.properties) {
      carousel.innerHTML = stories.properties
        .map(
          (p) => `
            <div class="property-card reveal">
              <div class="property-card__image-wrapper">
                <img src="${p.image}" alt="${p.title}" class="property-card__image" loading="lazy" />
                <span class="property-card__badge">flyp'd</span>
              </div>
              <div class="property-card__info">
                <h3 class="property-card__title">${p.title}</h3>
                <p class="property-card__location">${p.location}</p>
                <span class="property-card__link">See more →</span>
              </div>
            </div>
          `
        )
        .join('');
    }

    const cta = document.getElementById('stories-cta');
    if (stories.ctaButton) {
      cta.textContent = stories.ctaButton.text;
      cta.href = stories.ctaButton.href;
    }
  }

  // ---- STATS ----
  function initStats() {
    const stats = CONFIG.stats || {};
    document.getElementById('stats-heading').textContent = stats.heading || '';
    document.getElementById('stats-subtitle').textContent = stats.subtitle || '';

    const grid = document.getElementById('stats-grid');
    if (stats.items) {
      grid.innerHTML = stats.items
        .map(
          (item) => `
            <div class="stat-item reveal">
              <div class="stat-item__value">${item.prefix || ''}<span class="counter" data-target="${item.value}">0</span></div>
              <p class="stat-item__label">${item.label}</p>
            </div>
          `
        )
        .join('');
    }
  }

  // ---- TESTIMONIALS ----
  let testimonialIndex = 0;

  function initTestimonials() {
    const testimonials = CONFIG.testimonials || {};
    document.getElementById('testimonials-heading').textContent = testimonials.heading || '';

    const track = document.getElementById('testimonials-track');
    if (testimonials.items) {
      track.innerHTML = testimonials.items
        .map(
          (t) => `
            <div class="testimonial-card">
              <p class="testimonial-card__quote">${t.quote}</p>
              <p class="testimonial-card__author">${t.author}</p>
              <p class="testimonial-card__location">${t.location}</p>
            </div>
          `
        )
        .join('');
    }

    const total = testimonials.items ? testimonials.items.length : 0;

    function updateSlider() {
      track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
    }

    document.getElementById('testimonial-next').addEventListener('click', () => {
      testimonialIndex = (testimonialIndex + 1) % total;
      updateSlider();
    });

    document.getElementById('testimonial-prev').addEventListener('click', () => {
      testimonialIndex = (testimonialIndex - 1 + total) % total;
      updateSlider();
    });

    // Auto-slide
    setInterval(() => {
      testimonialIndex = (testimonialIndex + 1) % total;
      updateSlider();
    }, 6000);
  }

  // ---- ABOUT ----
  function initAbout() {
    const about = CONFIG.about || {};
    document.getElementById('about-tagline').textContent = about.tagline || '';
    document.getElementById('about-heading').textContent = about.heading || '';
    document.getElementById('about-description').textContent = about.description || '';
    const cta = document.getElementById('about-cta');
    if (about.ctaButton) {
      cta.textContent = about.ctaButton.text;
      cta.href = about.ctaButton.href;
    }
  }

  // ---- CONTACT FORM ----
  function initContact() {
    const contact = CONFIG.contact || {};
    document.getElementById('contact-heading').textContent = contact.heading || '';
    document.getElementById('contact-subtitle').textContent = contact.subtitle || '';

    const fieldsContainer = document.getElementById('form-fields');
    if (contact.fields) {
      fieldsContainer.innerHTML = contact.fields
        .map((f) => {
          if (f.type === 'textarea') {
            return `
              <div class="form-group">
                <label class="form-label">${f.label}${f.required ? ' *' : ''}</label>
                <textarea name="${f.name}" class="form-textarea" ${f.required ? 'required' : ''}></textarea>
              </div>
            `;
          }
          return `
            <div class="form-group">
              <label class="form-label">${f.label}${f.required ? ' *' : ''}</label>
              <input type="${f.type}" name="${f.name}" class="form-input" ${f.required ? 'required' : ''} />
            </div>
          `;
        })
        .join('');
    }

    // Options
    const optionsContainer = document.getElementById('form-options');
    if (contact.options) {
      optionsContainer.innerHTML = `
        <div class="form-options__label">${contact.options.label}</div>
        <div class="form-radio-group">
          ${contact.options.choices
            .map(
              (c, i) => `
                <label class="form-radio">
                  <input type="radio" name="option" value="${c}" ${i === 0 ? 'checked' : ''} />
                  <span>${c}</span>
                </label>
              `
            )
            .join('')}
        </div>
      `;
    }

    const submitBtn = document.getElementById('form-submit');
    submitBtn.textContent = contact.submitButton?.text || 'Submit';

    // Form submission
    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('form-success');
      successMsg.textContent = contact.successMessage || 'Thanks! We\'ll be in touch.';
      successMsg.classList.remove('hidden');
      e.target.reset();
      setTimeout(() => successMsg.classList.add('hidden'), 5000);
    });
  }

  // ---- FOOTER ----
  function initFooter() {
    const footer = CONFIG.footer || {};
    const brand = CONFIG.brand || {};

    // Logo
    document.getElementById('footer-logo').innerHTML = `
      <span class="footer__logo-icon">${brand.logo?.upsideDownIcon || '🏠'}</span>
      ${brand.logo?.text || brand.name || 'flyp'}
    `;
    document.getElementById('footer-tagline').textContent = footer.tagline || '';

    // Social links
    const socialContainer = document.getElementById('footer-social');
    if (footer.social) {
      socialContainer.innerHTML = footer.social
        .map(
          (s) => `
            <a href="${s.url}" class="footer__social-link" target="_blank" rel="noopener" aria-label="${s.name}">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="${s.icon}"/>
              </svg>
            </a>
          `
        )
        .join('');
    }

    // Nav links
    const footerNav = document.getElementById('footer-nav');
    if (CONFIG.nav && CONFIG.nav.links) {
      footerNav.innerHTML = CONFIG.nav.links
        .map((l) => `<li><a href="${l.href}">${l.text}</a></li>`)
        .join('');
    }

    // Site links (privacy, terms, etc.)
    const siteLinks = document.getElementById('footer-site-links');
    if (footer.links) {
      siteLinks.innerHTML = footer.links
        .map((l) => `<li><a href="${l.href}">${l.text}</a></li>`)
        .join('');
    }

    // Copyright
    const year = brand.year || new Date().getFullYear();
    const copyrightText = (footer.copyright || '')
      .replace('{year}', year)
      .replace('{brand}', brand.name || 'flyp');
    document.getElementById('footer-copyright').textContent = copyrightText;
  }

  // ---- SCROLL REVEAL ----
  function initScrollReveal() {
    if (!CONFIG.animations?.scrollReveal) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${i * (CONFIG.animations.scrollRevealDelay || 100)}ms`;
      observer.observe(el);
    });
  }

  // ---- COUNTER ANIMATION ----
  function initCounterAnimation() {
    if (!CONFIG.animations?.counterAnimation) return;

    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function animateCounter(el) {
    const target = el.getAttribute('data-target');
    // Extract numeric value and preserve formatting
    const match = target.match(/([£$€-]*)\s*([0-9,]+)/);
    if (!match) {
      el.textContent = target;
      return;
    }
    const prefix = match[1] || '';
    const numStr = match[2].replace(/,/g, '');
    const numericTarget = parseInt(numStr, 10);
    const suffix = target.replace(match[0], '').trim();

    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericTarget / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        current = numericTarget;
        clearInterval(timer);
      }
      const formatted = Math.floor(current).toLocaleString();
      el.textContent = `${prefix}${formatted}${suffix ? ' ' + suffix : ''}`;
    }, stepTime);
  }

  // ---- SMOOTH SCROLL ----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
          );
          const top = target.offsetTop - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ---- INIT ----
  function init() {
    applyTheme();
    applySEO();
    initNav();
    initHero();
    initFeatured();
    initHowItWorks();
    initCompareAgents();
    initUserPaths();
    initStories();
    initStats();
    initTestimonials();
    initAbout();
    initContact();
    initFooter();
    initCookieBanner();

    // Wait for DOM to settle before running observers
    requestAnimationFrame(() => {
      initScrollReveal();
      initCounterAnimation();
      initSmoothScroll();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
