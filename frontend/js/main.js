/**
 * NX Studio - Global Site Logic (Vanilla JS)
 * Coordinates Shared Header/Footer Rendering, Page Loaders, Sticky Navigation,
 * Custom Cursor Tracking, Scroll Progress Meters, Viewport Reveal animations,
 * Forms, Newsletter, and Email submission handling.
 */

// Notification email configuration (for backend integration)
const NX_NOTIFICATION_EMAIL = "nx.studio.net@outlook.com";
const NX_CONTACT_EMAIL = "nx.studio.network@gmail.com";

// Backend API base URL - using port 5000 for backend
const API_BASE_URL = "http://localhost:8000/api";

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  renderHeader();
  renderFooter();
  initCustomCursor();
  initStickyHeader();
  initMobileMenu();
  initScrollProgress();
  initAmbientGlows();
  initScrollReveal();
  initNewsletterValidation();
  initContactForm();
  initGeneralInquiryForm();
});

/* ==========================================================================
   GLOBAL PAGE LOADER
   ========================================================================== */
function initLoader() {
  const loader = document.getElementById('global-loader');
  if (!loader) return;

  // Fade out loader when window has fully loaded
  window.addEventListener('load', () => {
    fadeOutLoader(loader);
  });

  // Backup timeout in case resource loads stall
  setTimeout(() => {
    if (!loader.classList.contains('fade-out')) {
      fadeOutLoader(loader);
    }
  }, 2000);
}

function fadeOutLoader(loader) {
  loader.classList.add('fade-out');
  // Trigger text animations on active page
  setTimeout(() => {
    document.querySelectorAll('.hero-reveal').forEach(el => {
      el.classList.add('revealed');
    });
  }, 400);
}

/* ==========================================================================
   DYNAMIC HEADER RENDERING
   ========================================================================== */
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  // Determine current active page
  const path = window.location.pathname;
  const pageName = path.split("/").pop() || "index.html";

  const menuItems = [
    { label: "Home", file: "index.html" },
    { label: "Services", file: "services.html" },
    { label: "Portfolio", file: "portfolio.html" },
    { label: "Studio", file: "studio.html" },
    { label: "Contact", file: "contact.html" }
  ];

  // Render navigation lists
  let navItemsHtml = '';
  let mobileItemsHtml = '';

  menuItems.forEach(item => {
    const isActive = pageName === item.file ? 'class="active"' : '';
    navItemsHtml += `<li><a href="${item.file}" ${isActive}>${item.label}</a></li>`;
    mobileItemsHtml += `<li><a href="${item.file}" ${isActive}>${item.label}</a></li>`;
  });

  const headerContent = `
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" id="scroll-progress-bar"></div>
    </div>
    <div class="container header-container">
      <a href="index.html" class="site-logo">
        NX STUDIO
        <span class="sub-logo">IFX Group Division</span>
      </a>
      
      <nav class="main-nav">
        <ul>
          ${navItemsHtml}
        </ul>
        <a href="contact.html" class="btn btn-secondary btn-nav-cta" style="padding: 0.6rem 1.5rem; font-size: 0.75rem; margin-left: 1.5rem;">Start Your Project</a>
      </nav>

      <button class="hamburger-menu" id="hamburger-menu" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-menu-overlay" id="mobile-menu-overlay">
      <ul>
        ${mobileItemsHtml}
      </ul>
      <a href="contact.html" class="btn btn-primary btn-nav-cta">Start Your Project</a>
    </div>
  `;

  header.innerHTML = headerContent;
}

/* ==========================================================================
   DYNAMIC FOOTER RENDERING
   ========================================================================== */
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  const data = window.NX_DATA || {};
  const agency = data.agency || {};
  const socials = data.socials || [];
  
  // Render socials html
  let socialsHtml = '';
  socials.forEach(soc => {
    socialsHtml += `<a href="${soc.url}" target="_blank" aria-label="${soc.platform}" class="footer-social-link">${soc.iconSvg}</a>`;
  });

  footer.innerHTML = `
    <div class="footer-top" style="border-bottom: 1px solid var(--color-grey-dark); padding: 5rem 0 4rem;">
      <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3.5rem;">
        
        <!-- Block 1: Brand Info -->
        <div>
          <a href="index.html" class="site-logo" style="display: inline-block; margin-bottom: 1.5rem;">
            NX STUDIO
            <span class="sub-logo">IFX Group Division</span>
          </a>
          <p style="font-size: 0.9rem; line-height: 1.7; margin-bottom: 2rem; color: var(--color-grey-light);">
            Bespoke cinematic visuals, brand engineering, and digital interfaces. NX Studio is the flagship creative studio of ${agency.parentName || 'IFX Group'}.
          </p>
          <div class="footer-socials" style="display: flex; gap: 1rem;">
            ${socialsHtml}
          </div>
        </div>

        <!-- Block 2: Quick Links -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-white); margin-bottom: 1.5rem;">Quick Links</h4>
          <ul style="display: grid; gap: 0.75rem; font-size: 0.9rem;">
            <li><a href="index.html" style="color: var(--color-grey-light);">Home</a></li>
            <li><a href="services.html" style="color: var(--color-grey-light);">Services</a></li>
            <li><a href="portfolio.html" style="color: var(--color-grey-light);">Portfolio</a></li>
            <li><a href="studio.html" style="color: var(--color-grey-light);">Studio</a></li>
            <li><a href="contact.html" style="color: var(--color-grey-light);">Contact</a></li>
          </ul>
        </div>

        <!-- Block 3: Business Details -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-white); margin-bottom: 1.5rem;">Contact Info</h4>
          <p style="font-size: 0.9rem; color: var(--color-grey-light); margin-bottom: 1rem; line-height: 1.6;">
            <strong>HQ Studio:</strong><br>
            ${agency.officeAddress}
          </p>
          <p style="font-size: 0.9rem; color: var(--color-grey-light); margin-bottom: 1rem;">
            <strong>Hours:</strong><br>
            ${agency.hours}
          </p>
          <p style="font-size: 0.9rem; color: var(--color-grey-light);">
            <strong>Email:</strong> <a href="mailto:${agency.email}" style="color: var(--color-red);">${agency.email}</a><br>
            <strong>Phone:</strong> ${agency.phone}
          </p>
        </div>

        <!-- Block 4: Newsletter -->
        <div>
          <h4 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-white); margin-bottom: 1.5rem;">Newsletter</h4>
          <p style="font-size: 0.9rem; color: var(--color-grey-light); margin-bottom: 1.25rem;">
            Subscribe to our creative digests, campaign methodologies, and free downloads.
          </p>
          <form id="footer-newsletter-form" style="position: relative; display: flex;">
            <input type="email" id="footer-newsletter-email" placeholder="Your Email Address" style="width: 100%; padding: 0.9rem 1.25rem; background-color: var(--color-charcoal-deep); border: 1px solid var(--color-grey-dark); border-radius: 4px; color: var(--color-white); font-size: 0.85rem; outline: none; transition: var(--transition-fast);" required>
            <button type="submit" style="position: absolute; right: 4px; top: 4px; bottom: 4px; background-color: var(--color-red); color: var(--color-white); border: none; padding: 0 1.25rem; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; border-radius: 3px; cursor: pointer; transition: var(--transition-fast);">Join</button>
          </form>
          <p id="newsletter-status-msg" style="font-size: 0.75rem; color: var(--color-red); margin-top: 0.5rem; display: none;"></p>
        </div>

      </div>
    </div>

    <div class="footer-bottom" style="padding: 2.5rem 0; font-size: 0.8rem; color: var(--color-grey-light);">
      <div class="container" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1.5rem; align-items: center;">
        <div>
          &copy; ${new Date().getFullYear()} NX Studio. Flagship division of IFX Group. All rights reserved.
        </div>
        <div style="display: flex; gap: 2rem;">
          <a href="#" style="color: var(--color-grey-light);">Privacy Policy</a>
          <a href="#" style="color: var(--color-grey-light);">Terms & Conditions</a>
          <a href="#" style="color: var(--color-grey-light);">Cookie Policy</a>
          <a href="#" id="back-to-top" style="color: var(--color-red); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Back to Top ↑</a>
        </div>
      </div>
    </div>
  `;

  // Back to top scroll listener
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   CUSTOM DUAL-CIRCLE CURSOR
   ========================================================================== */
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const outline = document.querySelector('.custom-cursor-outline');

  if (!dot || !outline) return;

  let mouseX = 0, mouseY = 0; // Mouse coords
  let outlineX = 0, outlineY = 0; // Outline coords (lagging)

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.top = `${mouseY}px`;
    dot.style.left = `${mouseX}px`;
  });

  // Smooth lagging outline tracking (lerp animation)
  function updateOutline() {
    const ease = 0.12; // Lower is smoother/laggier
    outlineX += (mouseX - outlineX) * ease;
    outlineY += (mouseY - outlineY) * ease;

    outline.style.top = `${outlineY}px`;
    outline.style.left = `${outlineX}px`;

    requestAnimationFrame(updateOutline);
  }
  updateOutline();

  // Attach hover styles to standard selectors
  const attachHoverListeners = () => {
    const targets = document.querySelectorAll('a, button, input, textarea, select, .btn, .selection-card, .portfolio-card, .faq-trigger, .equipment-tab');
    targets.forEach(target => {
      // Avoid duplicate attachments
      if (target.dataset.cursorListened) return;
      target.dataset.cursorListened = "true";

      target.addEventListener('mouseenter', () => {
        dot.classList.add('hovered');
        outline.classList.add('hovered');
      });
      target.addEventListener('mouseleave', () => {
        dot.classList.remove('hovered');
        outline.classList.remove('hovered');
      });
    });
  };

  // Run immediately
  attachHoverListeners();

  // Re-run periodically to cover dynamically generated cards
  setInterval(attachHoverListeners, 1500);

  // Magnet button pull logic helper
  document.addEventListener('mousemove', (e) => {
    const magnets = document.querySelectorAll('.btn-magnetic');
    magnets.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x*x + y*y);
      if (distance < 70) {
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        btn.style.transition = 'none';
      } else {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      }
    });
  });
}

/* ==========================================================================
   STICKY HEADER SCROLL TRIGGER
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger immediately in case page loads scrolled down
}

/* ==========================================================================
   MOBILE MENU OVERLAY CONTROLS
   ========================================================================== */
function initMobileMenu() {
  // Mobile overlay elements are dynamically rendered inside renderHeader()
  // Wait slightly or query dynamically
  const checkInterval = setInterval(() => {
    const burger = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (burger && overlay) {
      clearInterval(checkInterval);

      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
      });

      // Close menu if link is clicked
      overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          burger.classList.remove('active');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }, 100);
}

/* ==========================================================================
   SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  });
}

/* ==========================================================================
   AMBIENT GLOWS GENERATOR
   ========================================================================== */
function initAmbientGlows() {
  if (document.querySelector('.ambient-glow-container')) return;

  const container = document.createElement('div');
  container.className = 'ambient-glow-container';
  container.innerHTML = `
    <div class="ambient-glow-ball"></div>
    <div class="ambient-glow-ball"></div>
  `;
  document.body.appendChild(container);
}

/* ==========================================================================
   SCROLL REVEAL (Intersection Observer)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-element, .reveal-fade-in, .reveal-scale-up');
  
  if (elements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Stop observing once animation has run
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   GLOBAL FOOTER NEWSLETTER VALIDATION
   ========================================================================== */
function initNewsletterValidation() {
  const form = document.getElementById('footer-newsletter-form');
  const email = document.getElementById('footer-newsletter-email');
  const statusMsg = document.getElementById('newsletter-status-msg');

  if (!form || !email || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = email.value.trim();

    if (!validateEmail(emailVal)) {
      showNewsletterStatus("Please enter a valid email address.", true);
      return;
    }

    fetch(API_BASE_URL + '/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailVal, source: 'footer' })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.success) {
        showNewsletterStatus(data.message || "Subscription successful! Welcome to NX Studio.", false);
        form.reset();
        showToast(data.message || "Newsletter subscription successful!");
      } else {
        showNewsletterStatus(data.message || "Subscription failed.", true);
      }
    })
    .catch(function() {
      showNewsletterStatus("Unable to subscribe. Please try again later.", true);
    });
  });

  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function showNewsletterStatus(msg, isError) {
    statusMsg.textContent = msg;
    statusMsg.style.color = isError ? 'var(--color-red)' : '#00E676';
    statusMsg.style.display = 'block';

    setTimeout(() => {
      statusMsg.style.display = 'none';
    }, 4000);
  }
}

/* ==========================================================================
   GLOBAL UTILITIES: TOASTS
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-msg">${message}</span>
    <button class="toast-close" aria-label="Close Toast">&times;</button>
  `;

  container.appendChild(toast);

  // Trigger reflow to start transition
  toast.offsetHeight;
  toast.classList.add('show');

  // Auto close trigger
  const autoClose = setTimeout(() => {
    closeToast(toast);
  }, 4000);

  // Manual close listener
  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(autoClose);
    closeToast(toast);
  });
}

function closeToast(toast) {
  toast.classList.remove('show');
  toast.addEventListener('transitionend', () => {
    toast.remove();
  });
}

/* ==========================================================================
   GLOBAL FORM HANDLING UTILITY
   ========================================================================== */
function handleFormSubmit(form, options) {
  const defaults = {
    onSuccess: null,
    onError: null,
    disableButton: true,
    buttonSelector: 'button[type="submit"]',
    apiUrl: null
  };
  const settings = Object.assign({}, defaults, options);
  const submitBtn = form.querySelector(settings.buttonSelector);
  const originalText = submitBtn ? submitBtn.textContent : '';

  if (settings.disableButton && submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
  }

  var formData = {};
  var formElements = form.querySelectorAll('[name]');
  formElements.forEach(function(el) {
    if (el.name) formData[el.name] = el.value.trim();
  });

  var apiUrl = settings.apiUrl || form.getAttribute('data-api') || API_BASE_URL + '/contact';

  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(function(resp) {
    return resp.json().then(function(data) { return { status: resp.status, body: data }; });
  })
  .then(function(result) {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
    if (result.body.success) {
      if (settings.onSuccess) settings.onSuccess(result.body);
      showToast(result.body.message || 'Your message has been sent successfully!');
    } else {
      if (settings.onError) settings.onError(result.body);
      showToast(result.body.message || 'Unable to process your request. Please try again.');
    }
  })
  .catch(function(err) {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
    if (settings.onError) settings.onError(err);
    showToast('Unable to connect to the server. Please try again later.');
  });
}

/* ==========================================================================
   CONTACT PAGE FORM (if any direct form exists)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-direct-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const nameInput = form.querySelector('input[name="name"]');
    const messageTextarea = form.querySelector('textarea');

    let isValid = true;
    if (nameInput && !nameInput.value.trim()) {
      showToast('Please enter your name.');
      isValid = false;
    }
    if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showToast('Please enter a valid email address.');
      isValid = false;
    }
    if (messageTextarea && !messageTextarea.value.trim()) {
      showToast('Please enter a message.');
      isValid = false;
    }
    if (!isValid) return;

    handleFormSubmit(form, {
      apiUrl: API_BASE_URL + '/contact',
      onSuccess: () => {
        form.reset();
        showToast('Thank you for contacting NX Studio. We will respond within 24 hours.');
      }
    });
  });
}

/* ==========================================================================
   GENERAL INQUIRY FORM
   ========================================================================== */
function initGeneralInquiryForm() {
  const form = document.getElementById('general-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[type="tel"]');

    let isValid = true;
    if (nameInput && !nameInput.value.trim()) {
      showToast('Please enter your name.');
      isValid = false;
    }
    if (emailInput) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.');
        isValid = false;
      }
    }
    if (!isValid) return;

    handleFormSubmit(form, {
      apiUrl: API_BASE_URL + '/contact',
      onSuccess: () => {
        form.reset();
        showToast('Your inquiry has been submitted. We will contact you shortly.');
      }
    });
  });
}

/* ==========================================================================
   WIZARD SUBMISSION – connected to global email notification config
   ========================================================================== */
window.submitToNotificationEmail = function(formData) {
  var apiUrl = API_BASE_URL + '/contact';
  if (formData.budget || formData.timeline) {
    apiUrl = API_BASE_URL + '/quote';
  }
  fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }).catch(function(err) {
    console.error('Notification email failed:', err);
  });
  return true;
};

// Expose globals for other components
window.showToast = showToast;
window.NX_NOTIFICATION_EMAIL = NX_NOTIFICATION_EMAIL;
window.NX_CONTACT_EMAIL = NX_CONTACT_EMAIL;
window.API_BASE_URL = API_BASE_URL;
