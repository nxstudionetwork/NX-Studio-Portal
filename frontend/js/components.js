/**
 * NX Studio - Premium Interactive UI Components
 * Houses logic for dynamic search filters, sliders, modal dialog systems,
 * project wizard states, animated counters, FAQ grids, and dynamic tab panels.
 */

/* ==========================================================================
   ANIMATED STATS COUNTERS
   ========================================================================== */
function initStatsCounters() {
  const statsElements = document.querySelectorAll('.counter-number');
  if (statsElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseInt(target.getAttribute('data-target'), 10);
        animateCounter(target, targetVal);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statsElements.forEach(el => observer.observe(el));
}

function animateCounter(element, targetVal) {
  let currentVal = 0;
  const duration = 2000; // 2 seconds
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic formula
    const ease = 1 - Math.pow(1 - progress, 3);
    
    currentVal = Math.floor(ease * targetVal);
    element.textContent = currentVal;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = targetVal;
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   TESTIMONIAL CAROUSEL SLIDER
   ========================================================================== */
function initTestimonialSlider() {
  const viewport = document.querySelector('.slider-viewport');
  const track = document.querySelector('.slider-track');
  const dotsContainer = document.querySelector('.slider-dots');

  if (!viewport || !track) return;

  // Clear existing static items (if any) and render dynamically
  const testimonials = window.NX_DATA ? window.NX_DATA.testimonials : [];
  if (testimonials.length === 0) return;

  track.innerHTML = testimonials.map(item => {
    // Generate star SVGs based on rating
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += '★';
    }

    return `
      <div class="slider-slide">
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">“</div>
          <div class="testimonial-rating">${starsHtml}</div>
          <p class="testimonial-review">"${item.review}"</p>
          <div class="testimonial-profile">
            <div class="testimonial-avatar">
              <img src="${item.photo}" alt="${item.name}" loading="lazy">
            </div>
            <div class="testimonial-meta">
              <h4>${item.name}</h4>
              <p>${item.company} &bull; ${item.industry}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const slides = Array.from(track.children);
  const slideCount = slides.length;
  let activeIndex = 0;

  // Create dot indicators
  dotsContainer.innerHTML = testimonials.map((_, idx) => `
    <div class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
  `).join('');

  const dots = Array.from(dotsContainer.children);

  // Position slides side-by-side
  slides.forEach((slide, idx) => {
    slide.style.width = `${100 / slideCount}%`;
  });
  track.style.width = `${slideCount * 100}%`;

  const updateSlider = (index) => {
    activeIndex = index;
    track.style.transform = `translateX(-${activeIndex * (100 / slideCount)}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[activeIndex].classList.add('active');
  };

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.dataset.index, 10);
      updateSlider(targetIndex);
    });
  });

  // Touch/Drag Support variables
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  viewport.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - currentX;
    if (Math.abs(diff) > 80) { // Drag threshold
      if (diff > 0 && activeIndex < slideCount - 1) {
        updateSlider(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        updateSlider(activeIndex - 1);
      }
    }
  });

  // Mobile Touch Support
  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  viewport.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  viewport.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeIndex < slideCount - 1) {
        updateSlider(activeIndex + 1);
      } else if (diff < 0 && activeIndex > 0) {
        updateSlider(activeIndex - 1);
      }
    }
  });

  // Auto-scroll loop
  let autoScroll = setInterval(() => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= slideCount) nextIndex = 0;
    updateSlider(nextIndex);
  }, 7000);

  viewport.addEventListener('mouseenter', () => clearInterval(autoScroll));
  viewport.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= slideCount) nextIndex = 0;
      updateSlider(nextIndex);
    }, 7000);
  });
}

/* ==========================================================================
   FAQ ACCORDION TRIGGERS
   ========================================================================== */
function initFaqAccordions() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  const faqs = window.NX_DATA ? window.NX_DATA.faqs : [];
  if (faqs.length === 0) return;

  // Filter based on active page category defaults or list all
  const currentPage = window.location.pathname.split("/").pop();
  let filteredFaqs = faqs;
  if (currentPage === 'services.html') {
    filteredFaqs = faqs.filter(f => f.category === 'services' || f.category === 'workflow');
  } else if (currentPage === 'studio.html') {
    filteredFaqs = faqs.filter(f => f.category === 'equipment' || f.category === 'agency');
  }

  container.innerHTML = filteredFaqs.map(faq => `
    <div class="faq-item">
      <button class="faq-trigger">
        <span>${faq.question}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div class="faq-panel">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  // Add click toggle logic
  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordions
      items.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   EQUIPMENT TABS DISPLAY (Studio Page)
   ========================================================================== */
function initEquipmentTabs() {
  const tabsContainer = document.getElementById('equipment-tabs');
  const panelsContainer = document.getElementById('equipment-panels');

  if (!tabsContainer || !panelsContainer) return;

  const equipment = window.NX_DATA ? window.NX_DATA.equipment : [];
  if (equipment.length === 0) return;

  // Render tabs
  tabsContainer.innerHTML = equipment.map((eq, idx) => `
    <button class="equipment-tab ${idx === 0 ? 'active' : ''}" data-tab="${idx}">${eq.category}</button>
  `).join('');

  // Render panels
  panelsContainer.innerHTML = equipment.map((eq, idx) => `
    <div class="equipment-panel ${idx === 0 ? 'active' : ''}" id="eq-panel-${idx}">
      <div class="equipment-grid">
        ${eq.items.map(item => `
          <div class="equipment-item">
            <div class="equipment-item-bullet"></div>
            <div class="equipment-item-text">${item}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Tab click toggle logic
  const tabs = tabsContainer.querySelectorAll('.equipment-tab');
  const panels = panelsContainer.querySelectorAll('.equipment-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const idx = tab.dataset.tab;
      document.getElementById(`eq-panel-${idx}`).classList.add('active');
    });
  });
}

/* ==========================================================================
   DYNAMIC PORTFOLIO GRID (Search, Filters, Sort)
   ========================================================================== */
let activePortfolioFilter = 'all';
let activePortfolioSort = 'newest';
let portfolioSearchQuery = '';
let portfolioViewMode = 'grid'; // 'grid' or 'masonry'

function initPortfolioFilters() {
  const grid = document.getElementById('portfolio-grid');
  const filtersContainer = document.getElementById('portfolio-filters-container');
  const searchInput = document.getElementById('portfolio-search-input');
  const sortSelect = document.getElementById('portfolio-sort-select');
  const viewToggle = document.getElementById('portfolio-view-toggle');

  if (!grid) return;

  const projects = window.NX_DATA ? window.NX_DATA.portfolio : [];
  if (projects.length === 0) return;

  // Render filters dynamically (categories present in database)
  if (filtersContainer) {
    const categories = ['all', 'branding', 'films', 'ads', 'photography', 'editing', 'motiongraphics', 'uiux', 'webdesign'];
    const friendlyNames = {
      all: 'All', branding: 'Branding', films: 'Films', ads: 'Ads', 
      photography: 'Photography', editing: 'Editing', motiongraphics: 'Motion Graphics',
      uiux: 'UI/UX', webdesign: 'Web Design'
    };

    filtersContainer.innerHTML = categories.map(cat => `
      <button class="btn btn-secondary ${cat === activePortfolioFilter ? 'btn-primary' : ''}" data-filter="${cat}" style="padding: 0.5rem 1.25rem; font-size: 0.75rem; text-transform: uppercase;">
        ${friendlyNames[cat] || cat}
      </button>
    `).join('');

    // Click handler for category filters
    filtersContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        filtersContainer.querySelectorAll('button').forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        activePortfolioFilter = btn.dataset.filter;
        renderPortfolioGrid(grid, projects);
      });
    });
  }

  // Live search handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      portfolioSearchQuery = e.target.value.toLowerCase().trim();
      renderPortfolioGrid(grid, projects);
    });
  }

  // Sort handler
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activePortfolioSort = e.target.value;
      renderPortfolioGrid(grid, projects);
    });
  }

  // View toggle layout handler
  if (viewToggle) {
    viewToggle.addEventListener('click', () => {
      portfolioViewMode = portfolioViewMode === 'grid' ? 'masonry' : 'grid';
      viewToggle.textContent = portfolioViewMode === 'grid' ? 'Masonry View' : 'Standard Grid';
      grid.className = portfolioViewMode === 'grid' ? 'portfolio-grid-layout' : 'portfolio-masonry-layout';
      renderPortfolioGrid(grid, projects);
    });
  }

  // Initial draw
  renderPortfolioGrid(grid, projects);
}

function renderPortfolioGrid(container, items) {
  // Show skeletons loader initially
  container.innerHTML = Array(3).fill(0).map(() => `
    <div style="height: 380px; border-radius: 8px; overflow: hidden;">
      <div class="skeleton-box"></div>
    </div>
  `).join('');

  setTimeout(() => {
    // 1. Filter by category
    let filtered = items;
    if (activePortfolioFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activePortfolioFilter);
    }

    // 2. Filter by search query (title, tags, client, industry)
    if (portfolioSearchQuery) {
      filtered = filtered.filter(item => {
        return item.title.toLowerCase().includes(portfolioSearchQuery) ||
               item.client.toLowerCase().includes(portfolioSearchQuery) ||
               item.industry.toLowerCase().includes(portfolioSearchQuery) ||
               item.tags.some(tag => tag.toLowerCase().includes(portfolioSearchQuery)) ||
               item.technologies.some(tech => tech.toLowerCase().includes(portfolioSearchQuery));
      });
    }

    // 3. Sort logic
    if (activePortfolioSort === 'newest') {
      filtered.sort((a, b) => b.year - a.year);
    } else if (activePortfolioSort === 'oldest') {
      filtered.sort((a, b) => a.year - b.year);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-grey-light);">No projects found matching the criteria.</div>`;
      return;
    }

    // Render cards
    container.innerHTML = filtered.map(item => {
      const friendlyCats = {
        branding: 'Branding', films: 'Film', ads: 'Ad Campaign',
        photography: 'Photography', editing: 'Post Production', motiongraphics: 'Motion Graphics',
        uiux: 'UI/UX', webdesign: 'Web Design'
      };

      return `
        <div class="portfolio-card reveal-scale-up revealed" data-project-id="${item.id}">
          <div class="portfolio-card-media">
            <span class="portfolio-card-badge">${friendlyCats[item.category] || item.category}</span>
            <img src="${item.featuredImage}" alt="${item.title}" loading="lazy">
            <div class="portfolio-card-overlay"></div>
          </div>
          <div class="portfolio-card-body">
            <p class="portfolio-card-client">${item.client} &bull; ${item.industry}</p>
            <h3 class="portfolio-card-title">${item.title}</h3>
            <p class="portfolio-card-desc">${item.summary}</p>
            <div class="portfolio-card-tags">
              ${item.tags.map(t => `<span>#${t}</span>`).join('')}
            </div>
            <div class="portfolio-card-footer">
              <span class="portfolio-card-year">${item.year}</span>
              <button class="btn-link view-case-btn" data-project-id="${item.id}">View Case Study</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click triggers to open project detail modals
    container.querySelectorAll('.portfolio-card, .view-case-btn').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = trigger.dataset.projectId;
        openProjectModal(id);
      });
    });
  }, 400); // Small delay for organic transition feel
}

/* ==========================================================================
   DYNAMIC DYNAMIC CONTENT GENERATION ON HERO & OTHER PAGES
   ========================================================================== */
function initFeaturedServices() {
  const homeGrid = document.getElementById('services-grid-home');
  const services = window.NX_DATA ? window.NX_DATA.services : [];
  if (services.length === 0) return;

  if (homeGrid) {
    // Show first 6 featured services on Home page
    homeGrid.innerHTML = services.slice(0, 6).map(item => `
      <div class="service-card reveal-scale-up">
        <div class="service-card-image">
          <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=90&w=2400&auto=format&fit=crop" alt="${item.name}" loading="lazy">
          <div class="service-card-icon">${item.iconSvg}</div>
        </div>
        <div class="service-card-body">
          <h3 class="service-card-title">${item.name}</h3>
          <p class="service-card-tagline">${item.tagline}</p>
          <p class="service-card-desc">${item.description}</p>
          <ul class="service-card-features">
            ${item.features.slice(0, 5).map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="service-card-footer">
            <div class="service-card-meta">
              <span>Timeline</span> ${item.timeline}
            </div>
            <a href="services.html#${item.id}" class="btn-link">Details</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // If on services list page, render all categorized services
  const creativeGrid = document.getElementById('services-grid-creative');
  const digitalGrid = document.getElementById('services-grid-digital');
  const strategyGrid = document.getElementById('services-grid-strategy');

  if (creativeGrid && digitalGrid && strategyGrid) {
    const renderServiceBlock = (targetGrid, filteredItems) => {
      targetGrid.innerHTML = filteredItems.map(item => `
        <div class="service-card reveal-scale-up" id="${item.id}">
          <div class="service-card-image">
            <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=90&w=2400&auto=format&fit=crop" alt="${item.name}">
            <div class="service-card-icon">${item.iconSvg}</div>
          </div>
          <div class="service-card-body">
            <h3 class="service-card-title">${item.name}</h3>
            <p class="service-card-tagline">${item.tagline}</p>
            <p class="service-card-desc">${item.description}</p>
            
            <div style="margin-bottom:1.5rem;">
              <strong style="font-size:0.75rem; text-transform:uppercase; color:var(--color-red); display:block; margin-bottom:0.5rem; letter-spacing:0.05em;">Key Deliverables</strong>
              <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                ${item.deliverables.map(d => `<span style="font-size:0.75rem; background-color:var(--color-black); border:1px solid var(--color-grey-dark); padding:0.25rem 0.5rem; border-radius:3px;">${d}</span>`).join('')}
              </div>
            </div>

            <ul class="service-card-features">
              ${item.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <div style="background-color:var(--color-charcoal-deep); padding:1rem; border-radius:4px; margin-bottom:2rem; font-size:0.85rem;">
              <strong style="color:var(--color-white);">Best For:</strong> ${item.bestFor}
            </div>

            <div class="service-card-footer">
              <div class="service-card-meta">
                <span>Timeline</span> ${item.timeline}
              </div>
              <a href="contact.html?service=${item.id}" class="btn btn-primary" style="padding: 0.6rem 1.25rem; font-size: 0.75rem;">Get Started</a>
            </div>
          </div>
        </div>
      `).join('');
    };

    renderServiceBlock(creativeGrid, services.filter(s => s.category === 'creative-film'));
    renderServiceBlock(digitalGrid, services.filter(s => s.category === 'digital-dev'));
    renderServiceBlock(strategyGrid, services.filter(s => s.category === 'brand-strategy'));
  }
}

function initLatestWork() {
  const latestGrid = document.getElementById('latest-work-grid');
  if (!latestGrid) return;

  const projects = window.NX_DATA ? window.NX_DATA.portfolio : [];
  if (projects.length === 0) return;

  // Render first 3 portfolio items as Latest Work
  latestGrid.innerHTML = projects.slice(0, 3).map(item => `
    <div class="portfolio-card reveal-scale-up" data-project-id="${item.id}">
      <div class="portfolio-card-media">
        <span class="portfolio-card-badge">${item.category.toUpperCase()}</span>
        <img src="${item.featuredImage}" alt="${item.title}" loading="lazy">
        <div class="portfolio-card-overlay"></div>
      </div>
      <div class="portfolio-card-body">
        <p class="portfolio-card-client">${item.client} &bull; ${item.industry}</p>
        <h3 class="portfolio-card-title">${item.title}</h3>
        <p class="portfolio-card-desc">${item.summary}</p>
        <div class="portfolio-card-footer">
          <span class="portfolio-card-year">${item.year}</span>
          <button class="btn-link view-case-btn" data-project-id="${item.id}">View Project</button>
        </div>
      </div>
    </div>
  `).join('');

  latestGrid.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.projectId;
      openProjectModal(id);
    });
  });
}

function initIndustriesGrid() {
  const container = document.getElementById('industries-grid');
  if (!container) return;

  const industries = window.NX_DATA ? window.NX_DATA.industries : [];
  container.innerHTML = industries.map(ind => `
    <div class="service-card reveal-scale-up" style="padding: 2.5rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 220px;">
      <div style="color: var(--color-red); margin-bottom: 1.25rem;">${ind.iconSvg}</div>
      <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">${ind.name}</h3>
      <p style="font-size: 0.9rem; line-height: 1.5; color: var(--color-grey-light);">${ind.description}</p>
    </div>
  `).join('');
}

function initProcessTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  const steps = window.NX_DATA ? window.NX_DATA.creativeProcess : [];
  container.innerHTML = steps.map(step => `
    <div class="timeline-item reveal-fade-in">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title-row">
          <span class="timeline-number">0${step.step}</span>
          <span class="timeline-icon">${step.icon}</span>
          <h4 class="timeline-title">${step.title}</h4>
        </div>
        <p class="timeline-desc">${step.description}</p>
      </div>
    </div>
  `).join('');
}

function initWhyChooseGrid() {
  const container = document.getElementById('why-choose-grid');
  if (!container) return;

  const features = window.NX_DATA ? window.NX_DATA.whyChooseUs : [];
  container.innerHTML = features.map(feat => `
    <div class="service-card reveal-scale-up" style="padding: 2.5rem;">
      <div style="font-size: 2.5rem; color: var(--color-red); margin-bottom: 1rem;">${feat.icon}</div>
      <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">${feat.title}</h3>
      <p style="font-size: 0.9rem; line-height: 1.5; color: var(--color-grey-light);">${feat.description}</p>
    </div>
  `).join('');
}

function initTeamGrid() {
  const container = document.getElementById('team-grid');
  if (!container) return;

  const team = window.NX_DATA ? window.NX_DATA.team : [];
  container.innerHTML = team.map(member => `
    <div class="team-card reveal-scale-up">
      <div class="team-card-image">
        <img src="${member.photo}" alt="${member.name}" loading="lazy">
      </div>
      <div class="team-card-overlay">
        <div class="team-card-details">
          <h3 class="team-card-name">${member.name}</h3>
          <p class="team-card-role">${member.position} &bull; ${member.experience}</p>
          <p class="team-card-bio">${member.bio}</p>
          <div class="team-card-skills">
            ${member.skills.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initClientLogos() {
  const track = document.getElementById('client-marquee-track');
  if (!track) return;

  const clients = window.NX_DATA ? window.NX_DATA.clients : [];
  // Render clients twice for seamless infinite marquee loop
  const doubleList = [...clients, ...clients];
  
  track.innerHTML = doubleList.map(c => `
    <div style="flex-shrink: 0; padding: 0 3.5rem; display: flex; align-items: center; justify-content: center; height: 100%;">
      <span style="font-family: var(--font-display); font-size: 1.85rem; font-weight: 800; color: var(--color-grey-mid); letter-spacing: 0.08em; transition: var(--transition-fast); cursor: default;" onmouseover="this.style.color='var(--color-red)'" onmouseout="this.style.color='var(--color-grey-mid)'">${c.logoText}</span>
    </div>
  `).join('');
}

function initCareersAccordions() {
  const container = document.getElementById('careers-container');
  if (!container) return;

  const careers = window.NX_DATA ? window.NX_DATA.careers : [];
  container.innerHTML = careers.map(c => `
    <div class="faq-item" style="border-top:1px solid var(--color-grey-dark);">
      <button class="faq-trigger">
        <div>
          <span style="display:block; font-size:1.25rem; font-weight:700;">${c.title}</span>
          <span style="font-size:0.75rem; color:var(--color-grey-light); text-transform:uppercase; letter-spacing:0.05em; font-weight:600;">${c.department} &bull; ${c.location} &bull; ${c.type}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div class="faq-panel">
        <div style="padding-top:1.5rem; font-size:0.95rem; line-height:1.6; color:var(--color-grey-light);">
          <p style="margin-bottom:1.5rem;">${c.description}</p>
          <strong style="color:var(--color-white); display:block; margin-bottom:0.5rem; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.05em;">Key Requirements:</strong>
          <ul style="list-style:disc; padding-left:1.5rem; margin-bottom:2rem; display:grid; gap:0.5rem;">
            ${c.requirements.map(req => `<li>${req}</li>`).join('')}
          </ul>
          <a href="contact.html?career=${c.id}" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.75rem;">Apply For This Position</a>
        </div>
      </div>
    </div>
  `).join('');

  const items = container.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const active = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });
}

function initResourcesGrid() {
  const container = document.getElementById('resources-grid');
  if (!container) return;

  const resources = window.NX_DATA ? window.NX_DATA.resources : [];
  container.innerHTML = resources.map(res => `
    <div class="service-card reveal-scale-up" style="padding: 2.25rem;">
      <span style="background-color: rgba(255, 30, 39, 0.1); color: var(--color-red); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; padding: 0.35rem 0.75rem; border-radius: 3px; display: inline-block; margin-bottom: 1.25rem;">${res.type} &bull; ${res.downloadSize}</span>
      <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">${res.title}</h3>
      <p style="font-size: 0.9rem; line-height: 1.5; color: var(--color-grey-light); margin-bottom: 2rem;">${res.description}</p>
      <a href="${res.link}" class="btn btn-secondary" style="width: 100%; font-size: 0.75rem; padding: 0.75rem;">Download Resource</a>
    </div>
  `).join('');
}

/* ==========================================================================
   INITIALIZE DYNAMIC SCRIPTS
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive widgets
  initStatsCounters();
  initTestimonialSlider();
  initFaqAccordions();
  initEquipmentTabs();
  initPortfolioFilters();
  initBlogFilters();
  initProjectWizard();

  // 2. Dynamic content renderers
  initFeaturedServices();
  initLatestWork();
  initIndustriesGrid();
  initProcessTimeline();
  initWhyChooseGrid();
  initTeamGrid();
  initClientLogos();
  initCareersAccordions();
  initResourcesGrid();

  // 3. Re-run scroll-reveal after dynamic content is injected
  //    Short delay allows rendered DOM nodes to exist before observer attaches
  setTimeout(() => {
    if (typeof initScrollReveal === 'function') initScrollReveal();
  }, 600);
});


/* ==========================================================================
   DYNAMIC PROJECT DETAILS MODAL & LIGHTBOX
   ========================================================================== */
function openProjectModal(projectId) {
  const projects = window.NX_DATA ? window.NX_DATA.portfolio : [];
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  let modal = document.getElementById('project-detail-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'project-detail-modal';
    document.body.appendChild(modal);
  }

  // Create markup structure
  modal.innerHTML = `
    <div class="modal-content-container">
      <button class="modal-close-btn" id="modal-close-btn">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <!-- Banner image -->
      <div style="width:100%; height: 380px; position:relative; overflow:hidden;">
        <img src="${project.featuredImage}" style="width:100%; height:100%; object-fit:cover;">
        <div style="position:absolute; bottom:0; left:0; width:100%; height:100%; background:linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 80%);"></div>
        <div style="position:absolute; bottom:2.5rem; left:2.5rem; right:2.5rem;">
          <span style="background-color:var(--color-red); color:var(--color-white); font-size:0.75rem; font-weight:700; text-transform:uppercase; padding:0.4rem 0.8rem; border-radius:3px; letter-spacing:0.05em; display:inline-block; margin-bottom:1rem;">${project.category}</span>
          <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight:800; line-height:1.1;">${project.title}</h2>
        </div>
      </div>

      <!-- Case study details -->
      <div style="padding:3.5rem 2.5rem;">
        
        <!-- Grid: Core Metrics and info -->
        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:3rem; margin-bottom:4rem;">
          
          <!-- Column 1: Narrative sections -->
          <div>
            <div style="margin-bottom:2.5rem;">
              <h3 style="font-size:1.5rem; margin-bottom:1rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">Project Overview</h3>
              <p style="color:var(--color-grey-light); font-size:1rem; line-height:1.7;">${project.overview}</p>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h3 style="font-size:1.5rem; margin-bottom:1rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">The Challenge</h3>
              <p style="color:var(--color-grey-light); font-size:1rem; line-height:1.7;">${project.problem}</p>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h3 style="font-size:1.5rem; margin-bottom:1rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">Research & Creative Strategy</h3>
              <p style="color:var(--color-grey-light); font-size:1rem; line-height:1.7;">${project.research}<br><br>${project.strategy}</p>
            </div>

            <div style="margin-bottom:2.5rem;">
              <h3 style="font-size:1.5rem; margin-bottom:1rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">The Execution</h3>
              <p style="color:var(--color-grey-light); font-size:1rem; line-height:1.7;">${project.process}<br><br>${project.finalResult}</p>
            </div>
          </div>

          <!-- Column 2: Specs Sidebar -->
          <div>
            <div style="background-color:var(--color-card); border:1px solid var(--color-grey-dark); padding:2rem; border-radius:6px; margin-bottom:2rem;">
              <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-white); margin-bottom:1.5rem;">Project Specs</h4>
              <ul style="font-size:0.9rem; display:grid; gap:1.25rem;">
                <li><strong style="display:block; color:var(--color-grey-light); font-size:0.75rem; text-transform:uppercase;">Client</strong>${project.client}</li>
                <li><strong style="display:block; color:var(--color-grey-light); font-size:0.75rem; text-transform:uppercase;">Industry</strong>${project.industry}</li>
                <li><strong style="display:block; color:var(--color-grey-light); font-size:0.75rem; text-transform:uppercase;">Timeline / Year</strong>${project.year}</li>
                <li>
                  <strong style="display:block; color:var(--color-grey-light); font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem;">Software Used</strong>
                  <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
                    ${project.technologies.map(tech => `<span style="font-size:0.7rem; background-color:var(--color-black); border:1px solid var(--color-grey-dark); padding:0.25rem 0.5rem; border-radius:3px;">${tech}</span>`).join('')}
                  </div>
                </li>
                <li>
                  <strong style="display:block; color:var(--color-grey-light); font-size:0.75rem; text-transform:uppercase; margin-bottom:0.4rem;">Deliverables</strong>
                  <ul style="list-style:disc; padding-left:1.2rem; color:var(--color-grey-light);">
                    ${project.deliverables.map(del => `<li>${del}</li>`).join('')}
                  </ul>
                </li>
              </ul>
            </div>

            <!-- Campaign outcome indicators -->
            <div style="background-color:rgba(255,30,39,0.02); border:1px dashed rgba(255,30,39,0.2); padding:2rem; border-radius:6px;">
              <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-white); margin-bottom:1.5rem; text-align:center;">Key Outcomes</h4>
              <div style="display:grid; gap:1.5rem; text-align:center;">
                ${project.metrics.map(m => `
                  <div>
                    <span style="display:block; font-size:2rem; font-weight:800; color:var(--color-red); font-family:var(--font-display);">${m.value}</span>
                    <span style="font-size:0.75rem; color:var(--color-grey-light); text-transform:uppercase; letter-spacing:0.05em;">${m.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Video Player Block -->
        <div style="margin-bottom:4rem;">
          <h3 style="font-size:1.5rem; margin-bottom:1.5rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">Campaign Presentation</h3>
          <div style="width:100%; aspect-ratio:16/9; border-radius:8px; overflow:hidden; border:1px solid var(--color-grey-dark); background-color:var(--color-black);">
            <iframe src="${project.videoUrl}" style="width:100%; height:100%;" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <!-- Media Gallery -->
        <div style="margin-bottom:4rem;">
          <h3 style="font-size:1.5rem; margin-bottom:1.5rem; border-bottom:1px solid var(--color-grey-dark); padding-bottom:0.5rem; color:var(--color-red);">Aesthetic Highlights</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">
            ${project.images.map(imgUrl => `
              <div class="gallery-image-box" style="height:220px; border-radius:6px; overflow:hidden; border:1px solid var(--color-grey-dark); cursor:zoom-in;">
                <img src="${imgUrl}" style="width:100%; height:100%; object-fit:cover; transition:var(--transition-fast);">
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Client Testimonial -->
        <div style="background-color:var(--color-card); border:1px solid var(--color-grey-dark); padding:3rem 2.5rem; border-radius:8px; position:relative; margin-bottom:4rem;">
          <div style="position:absolute; top:-1rem; left:2.5rem; background-color:var(--color-red); color:var(--color-white); font-size:0.75rem; font-weight:700; text-transform:uppercase; padding:0.4rem 1rem; border-radius:3px; letter-spacing:0.05em;">Client Feedback</div>
          <p style="font-size:1.15rem; font-style:italic; line-height:1.6; color:var(--color-white); margin-bottom:1.5rem;">"${project.testimonial.text}"</p>
          <div style="border-top:1px solid var(--color-grey-dark); padding-top:1rem; font-size:0.9rem;">
            <strong>${project.testimonial.name}</strong><br>
            <span style="font-size:0.8rem; color:var(--color-grey-light);">${project.testimonial.role} &bull; ${project.testimonial.company}</span>
          </div>
        </div>

        <!-- Creative Team Credits -->
        <div>
          <h4 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-grey-light); margin-bottom:1rem;">Production Credits</h4>
          <div style="display:flex; flex-wrap:wrap; gap:1.5rem;">
            ${project.team.map(member => `
              <div style="font-size:0.9rem;">
                <strong>${member.name}</strong><br>
                <span style="font-size:0.75rem; color:var(--color-red);">${member.role}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;

  // Display modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Modal close handlers
  const closeBtn = modal.querySelector('#modal-close-btn');
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Clean iframe output to stop playing sound in background
    setTimeout(() => { modal.innerHTML = ''; }, 400);
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Attach Lightbox triggers to gallery images inside modal
  const galleryBoxes = modal.querySelectorAll('.gallery-image-box');
  galleryBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const src = box.querySelector('img').src;
      openLightbox(src);
    });
  });
}

function openLightbox(imgSrc) {
  let lightbox = document.getElementById('image-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'modal-overlay';
    lightbox.id = 'image-lightbox';
    lightbox.style.zIndex = '10005';
    document.body.appendChild(lightbox);
  }

  lightbox.innerHTML = `
    <button class="modal-close-btn" id="lightbox-close-btn" style="background:rgba(0,0,0,0.8);">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <div class="lightbox-container">
      <img src="${imgSrc}" class="lightbox-img">
    </div>
  `;

  lightbox.classList.add('active');

  const closeBtn = lightbox.querySelector('#lightbox-close-btn');
  const close = () => lightbox.classList.remove('active');
  
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.className === 'lightbox-container') close();
  });
}

/* ==========================================================================
   DYNAMIC INSIGHTS RENDERING & DRAWER READER (Blog Page)
   ========================================================================== */
let activeBlogFilter = 'all';
let blogSearchQuery = '';

function initBlogFilters() {
  const grid = document.getElementById('blog-grid');
  const filtersContainer = document.getElementById('blog-filters-container');
  const searchInput = document.getElementById('blog-search-input');

  if (!grid) return;

  const blogs = window.NX_DATA ? window.NX_DATA.blog : [];
  if (blogs.length === 0) return;

  // Render categories filters based on present items
  if (filtersContainer) {
    const categories = ['all', 'branding', 'filmmaking', 'ai-innovation', 'ui-ux'];
    const friendlyNames = {
      all: 'All Articles', branding: 'Branding', filmmaking: 'Filmmaking',
      'ai-innovation': 'AI & Innovation', 'ui-ux': 'UI/UX'
    };

    filtersContainer.innerHTML = categories.map(cat => `
      <button class="btn btn-secondary ${cat === activeBlogFilter ? 'btn-primary' : ''}" data-filter="${cat}" style="padding: 0.5rem 1.25rem; font-size: 0.75rem; text-transform: uppercase;">
        ${friendlyNames[cat] || cat}
      </button>
    `).join('');

    filtersContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('button').forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
        });
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');

        activeBlogFilter = btn.dataset.filter;
        renderBlogGrid(grid, blogs);
      });
    });
  }

  // Live search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      blogSearchQuery = e.target.value.toLowerCase().trim();
      renderBlogGrid(grid, blogs);
    });
  }

  renderBlogGrid(grid, blogs);
}

function renderBlogGrid(container, items) {
  container.innerHTML = Array(3).fill(0).map(() => `
    <div style="height: 360px; border-radius: 8px; overflow: hidden;">
      <div class="skeleton-box"></div>
    </div>
  `).join('');

  setTimeout(() => {
    // 1. Filter by category
    let filtered = items;
    if (activeBlogFilter !== 'all') {
      filtered = filtered.filter(item => item.category.toLowerCase().replace('&', '').replace(' ', '-') === activeBlogFilter);
    }

    // 2. Filter by search text
    if (blogSearchQuery) {
      filtered = filtered.filter(item => {
        return item.title.toLowerCase().includes(blogSearchQuery) ||
               item.description.toLowerCase().includes(blogSearchQuery) ||
               item.author.toLowerCase().includes(blogSearchQuery) ||
               item.tags.some(tag => tag.toLowerCase().includes(blogSearchQuery));
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-grey-light);">No articles found matching criteria.</div>`;
      return;
    }

    // Render cards
    container.innerHTML = filtered.map(item => `
      <div class="blog-card reveal-scale-up revealed" data-blog-id="${item.id}" style="cursor:pointer;">
        <div class="blog-card-media">
          <img src="${item.coverImage}" alt="${item.title}" loading="lazy">
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-category">${item.category}</span>
            <span>${item.readingTime}</span>
          </div>
          <h3 class="blog-card-title">${item.title}</h3>
          <p class="blog-card-desc">${item.description}</p>
          <div class="blog-card-footer">
            <span class="blog-card-author">${item.author}</span>
            <span style="color:var(--color-grey-light);">${item.date}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Click handler to open Drawer Reader
    container.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.blogId;
        openBlogDrawer(id);
      });
    });
  }, 400);
}

function openBlogDrawer(blogId) {
  const blogs = window.NX_DATA ? window.NX_DATA.blog : [];
  const article = blogs.find(b => b.id === blogId);
  if (!article) return;

  let drawer = document.getElementById('blog-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'modal-overlay';
    drawer.id = 'blog-drawer';
    document.body.appendChild(drawer);
  }

  drawer.innerHTML = `
    <div class="modal-content-container" style="max-width: 800px;">
      <button class="modal-close-btn" id="drawer-close-btn">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div style="width:100%; height: 300px; position:relative; overflow:hidden;">
        <img src="${article.coverImage}" style="width:100%; height:100%; object-fit:cover;">
        <div style="position:absolute; bottom:0; left:0; width:100%; height:100%; background:linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 80%);"></div>
        <div style="position:absolute; bottom:2rem; left:2rem; right:2rem;">
          <span style="color:var(--color-red); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; display:inline-block; margin-bottom:0.5rem;">${article.category}</span>
          <h2 style="font-size: 1.85rem; font-weight:800; line-height:1.2;">${article.title}</h2>
        </div>
      </div>

      <div style="padding:3rem 2rem;">
        <!-- Meta Row -->
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--color-grey-dark); padding-bottom:1.25rem; margin-bottom:2rem; font-size:0.85rem; color:var(--color-grey-light);">
          <div>
            <strong>By:</strong> <span style="color:var(--color-white);">${article.author}</span>
          </div>
          <div>
            <span>${article.date}</span> &bull; <span>${article.readingTime}</span>
          </div>
        </div>

        <!-- Article Body -->
        <div class="article-body-text" style="font-size:1.05rem; line-height:1.8; color:var(--color-grey-light); display:grid; gap:1.5rem; margin-bottom:3rem;">
          ${article.contentText.map(pText => `<p>${pText}</p>`).join('')}
        </div>

        <!-- Tags -->
        <div style="border-top:1px solid var(--color-grey-dark); padding-top:1.5rem;">
          <h4 style="font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.75rem; color:var(--color-white);">Article Tags</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            ${article.tags.map(t => `<span style="font-size:0.75rem; background-color:var(--color-card); border:1px solid var(--color-grey-dark); padding:0.3rem 0.6rem; border-radius:3px; color:var(--color-grey-light);">#${t}</span>`).join('')}
          </div>
        </div>

      </div>
    </div>
  `;

  drawer.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = drawer.querySelector('#drawer-close-btn');
  const close = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', close);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) close();
  });
}

/* ==========================================================================
   PROJECT STARTER WIZARD (Contact Page)
   ========================================================================== */
function initProjectWizard() {
  const wizard = document.getElementById('project-starter-wizard');
  if (!wizard) return;

  const steps = Array.from(wizard.querySelectorAll('.wizard-step'));
  const prevBtn = wizard.querySelector('#wizard-prev-btn');
  const nextBtn = wizard.querySelector('#wizard-next-btn');
  const progressBar = wizard.querySelector('.wizard-progress-bar');
  const progressTextStep = wizard.querySelector('#progress-text-step');
  const successOverlay = wizard.querySelector('.wizard-success-overlay');

  if (steps.length === 0) return;

  let currentStepIndex = 0;
  const totalSteps = steps.length;

  // Wizard state store
  const wizardState = {
    name: '', email: '', phone: '',
    company: '', country: '',
    category: '', budget: '', timeline: '',
    services: [], description: ''
  };

  // 1. selection cards logic
  const attachSelectionListeners = () => {
    // Single select cards (Steps 3, 4, 5)
    wizard.querySelectorAll('.selection-card[data-single-select]').forEach(card => {
      card.addEventListener('click', () => {
        const stepId = card.closest('.wizard-step').id;
        const value = card.dataset.value;
        const key = card.dataset.stateKey;

        // Deselect other cards in this step
        card.closest('.wizard-step').querySelectorAll('.selection-card').forEach(c => c.classList.remove('selected'));
        
        card.classList.add('selected');
        wizardState[key] = value;
      });
    });

    // Multi-select cards (Step 6)
    wizard.querySelectorAll('.selection-card[data-multi-select]').forEach(card => {
      card.addEventListener('click', () => {
        const value = card.dataset.value;
        card.classList.toggle('selected');

        if (card.classList.contains('selected')) {
          if (!wizardState.services.includes(value)) {
            wizardState.services.push(value);
          }
        } else {
          wizardState.services = wizardState.services.filter(s => s !== value);
        }
      });
    });
  };
  attachSelectionListeners();

  // 2. Navigation Button States
  const updateButtons = () => {
    // First step: hide prev
    if (currentStepIndex === 0) {
      prevBtn.style.visibility = 'hidden';
    } else {
      prevBtn.style.visibility = 'visible';
    }

    // Last step: change button text to "Submit"
    if (currentStepIndex === totalSteps - 1) {
      nextBtn.textContent = 'Submit Proposal';
    } else {
      nextBtn.textContent = 'Next Step ➔';
    }
  };

  // 3. Navigation Actions
  const updateProgress = () => {
    const percent = ((currentStepIndex + 1) / totalSteps) * 100;
    progressBar.style.width = `${percent}%`;
    progressTextStep.textContent = currentStepIndex + 1;
  };

  const showStep = (index) => {
    steps.forEach(step => step.classList.remove('active'));
    steps[index].classList.add('active');
    updateButtons();
    updateProgress();

    // If final step (Review), populate review summary details dynamically
    if (index === totalSteps - 1) {
      populateReviewSummary();
    }
  };

  const validateCurrentStep = () => {
    const activeStep = steps[currentStepIndex];
    const inputs = activeStep.querySelectorAll('.form-control[required]');
    let isValid = true;

    inputs.forEach(input => {
      const parent = input.closest('.form-group');
      const errorMsg = parent.querySelector('.form-error-msg');
      const val = input.value.trim();

      if (!val) {
        isValid = false;
        showInputError(input, errorMsg, "This field is required.");
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        isValid = false;
        showInputError(input, errorMsg, "Please enter a valid email address.");
      } else {
        hideInputError(input, errorMsg);
        // Save text states
        wizardState[input.name] = val;
      }
    });

    // Check custom select validation cards
    if (activeStep.id === 'step-category' && !wizardState.category) {
      isValid = false;
      window.showToast("Please select a project category.");
    }
    if (activeStep.id === 'step-budget' && !wizardState.budget) {
      isValid = false;
      window.showToast("Please choose a budget range.");
    }
    if (activeStep.id === 'step-timeline' && !wizardState.timeline) {
      isValid = false;
      window.showToast("Please specify a target timeline.");
    }
    if (activeStep.id === 'step-services' && wizardState.services.length === 0) {
      isValid = false;
      window.showToast("Please pick at least one creative service.");
    }

    return isValid;
  };

  const showInputError = (input, errorEl, msg) => {
    input.style.borderColor = 'var(--color-red)';
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.style.display = 'block';
    }
  };

  const hideInputError = (input, errorEl) => {
    input.style.borderColor = 'var(--color-grey-dark)';
    if (errorEl) {
      errorEl.style.display = 'none';
    }
  };

  // Populate Review Details
  const populateReviewSummary = () => {
    // Populate text inputs
    wizardState.name = wizard.querySelector('input[name="name"]').value.trim();
    wizardState.email = wizard.querySelector('input[name="email"]').value.trim();
    wizardState.phone = wizard.querySelector('input[name="phone"]').value.trim();
    wizardState.company = wizard.querySelector('input[name="company"]').value.trim();
    wizardState.country = wizard.querySelector('input[name="country"]').value.trim();
    wizardState.description = wizard.querySelector('textarea[name="description"]').value.trim();

    const reviewGrid = document.getElementById('wizard-review-summary');
    if (!reviewGrid) return;

    reviewGrid.innerHTML = `
      <div style="background-color:var(--color-black); border:1px solid var(--color-grey-dark); padding:1.5rem; border-radius:6px; font-size:0.9rem; display:grid; gap:0.5rem;">
        <span style="color:var(--color-red); font-size:0.75rem; text-transform:uppercase; font-weight:700;">Client Profile</span>
        <strong>${wizardState.name}</strong>
        <span style="color:var(--color-grey-light);">${wizardState.email} &bull; ${wizardState.phone}</span>
        <span style="color:var(--color-grey-light);">${wizardState.company} (${wizardState.country})</span>
      </div>

      <div style="background-color:var(--color-black); border:1px solid var(--color-grey-dark); padding:1.5rem; border-radius:6px; font-size:0.9rem; display:grid; gap:0.5rem;">
        <span style="color:var(--color-red); font-size:0.75rem; text-transform:uppercase; font-weight:700;">Project Scope</span>
        <strong>Category: ${wizardState.category.toUpperCase()}</strong>
        <span style="color:var(--color-grey-light);">Budget: ${wizardState.budget}</span>
        <span style="color:var(--color-grey-light);">Timeline: ${wizardState.timeline}</span>
      </div>

      <div style="grid-column: 1 / -1; background-color:var(--color-black); border:1px solid var(--color-grey-dark); padding:1.5rem; border-radius:6px; font-size:0.9rem; display:grid; gap:0.5rem;">
        <span style="color:var(--color-red); font-size:0.75rem; text-transform:uppercase; font-weight:700;">Required Services & Description</span>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.5rem;">
          ${wizardState.services.map(s => `<span style="font-size:0.75rem; background-color:var(--color-card); border:1px solid var(--color-grey-dark); padding:0.25rem 0.5rem; border-radius:3px;">${s.replace('-', ' ')}</span>`).join('')}
        </div>
        <p style="color:var(--color-grey-light); font-style:italic;">"${wizardState.description || 'No description provided.'}"</p>
      </div>
    `;
  };

  // Prev / Next Listeners
  prevBtn.addEventListener('click', () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      showStep(currentStepIndex);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (!validateCurrentStep()) return;

    if (currentStepIndex < totalSteps - 1) {
      currentStepIndex++;
      showStep(currentStepIndex);
    } else {
      // Final Submit action
      submitWizardProposal();
    }
  });

  const submitWizardProposal = () => {
    // Check terms checkbox
    const termsEl = document.getElementById('w-terms');
    if (termsEl && !termsEl.checked) {
      window.showToast('Please accept the Terms & Conditions to continue.');
      return;
    }

    // Show spinner loader state on button
    nextBtn.disabled = true;
    nextBtn.textContent = 'Submitting Proposal...';

    // Gather form data for notification email
    const formData = {
      to: window.NX_NOTIFICATION_EMAIL || 'nx.studio.net@outlook.com',
      subject: 'New Project Inquiry - NX Studio Wizard',
      name: wizardState.name,
      email: wizardState.email,
      phone: wizardState.phone,
      company: wizardState.company,
      country: wizardState.country,
      category: wizardState.category,
      budget: wizardState.budget,
      timeline: wizardState.timeline,
      services: wizardState.services,
      description: wizardState.description
    };

    var apiUrl = window.API_BASE_URL || 'http://localhost:8000/api';
    fetch(apiUrl + '/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      successOverlay.classList.add('active');
      window.showToast(data.message || "Proposal submitted successfully!");
      nextBtn.disabled = false;
      nextBtn.textContent = 'Submit Proposal';
    })
    .catch(function(err) {
      successOverlay.classList.add('active');
      window.showToast("Proposal submitted! We'll follow up shortly.");
      nextBtn.disabled = false;
      nextBtn.textContent = 'Submit Proposal';
    });
  };

  // Initialize
  showStep(currentStepIndex);
}

/* ==========================================================================
   GLOBAL UTILITY: expose openProjectModal for cross-page linking
   ========================================================================== */
window.openProjectModal = openProjectModal;
window.openBlogDrawer = openBlogDrawer;
