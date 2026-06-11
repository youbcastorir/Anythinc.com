// app.js — Anythinc Digital Marketplace
// Vanilla JS SPA — GitHub Pages ready

const WHATSAPP_NUMBER = "212612605737";
const CONTACT_EMAIL   = "salatrir@gmail.com";
const SITE_URL        = "https://anythinc.com";
const SITE_NAME       = "Anythinc";

/* ── State ─────────────────────────────────────────────────────────────── */
const App = {
  currentLang: localStorage.getItem('anythinc_lang') || 'en',
  currentTheme: localStorage.getItem('anythinc_theme') || 'dark',
  currentPage: 'home',
  currentProduct: null,
  currentCategory: null,
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('anythinc_cart') || '[]'),

  get t() { return TRANSLATIONS[this.currentLang]; },
  get dir() { return TRANSLATIONS[this.currentLang].dir; }
};

/* ── Init ───────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(App.currentTheme);
  applyLang(App.currentLang);
  Search.buildIndex(PRODUCTS, App.currentLang);
  Router.init();
  updateCartCount();
});

/* ── Theme ──────────────────────────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  App.currentTheme = theme;
  localStorage.setItem('anythinc_theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(App.currentTheme === 'dark' ? 'light' : 'dark');
}

/* ── Language ───────────────────────────────────────────────────────────── */
function applyLang(lang) {
  App.currentLang = lang;
  localStorage.setItem('anythinc_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', TRANSLATIONS[lang].dir);
  Search.buildIndex(PRODUCTS, lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active-lang', el.dataset.lang === lang);
  });
  Router.render();
}

/* ── Router ─────────────────────────────────────────────────────────────── */
const Router = {
  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-route]');
      if (a) {
        e.preventDefault();
        this.navigate(a.dataset.route, a.dataset.param);
      }
    });
    this.handleRoute();
  },

  navigate(page, param = null) {
    App.currentPage = page;
    App.currentProduct = param;
    let url = '/';
    if (page === 'product') url = `/product/${param}`;
    else if (page === 'category') url = `/category/${param}`;
    else if (page === 'search') url = `/search`;
    else if (page === 'blog') url = param ? `/blog/${param}` : '/blog';
    else if (page !== 'home') url = `/${page}`;
    window.history.pushState({ page, param }, '', url);
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  handleRoute() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(Boolean);
    if (!parts.length) { App.currentPage = 'home'; App.currentProduct = null; }
    else if (parts[0] === 'product') { App.currentPage = 'product'; App.currentProduct = parts[1]; }
    else if (parts[0] === 'category') { App.currentPage = 'category'; App.currentCategory = parts[1]; }
    else if (parts[0] === 'search') { App.currentPage = 'search'; }
    else if (parts[0] === 'blog') { App.currentPage = 'blog'; App.currentProduct = parts[1] || null; }
    else { App.currentPage = parts[0]; }
    this.render();
  },

  render() {
    renderNav();
    const main = document.getElementById('main');
    if (!main) return;
    switch (App.currentPage) {
      case 'home':     main.innerHTML = renderHome();     break;
      case 'product':  main.innerHTML = renderProductPage(App.currentProduct); break;
      case 'category': main.innerHTML = renderCategoryPage(App.currentCategory); break;
      case 'search':   main.innerHTML = renderSearchPage(); break;
      case 'blog':     main.innerHTML = App.currentProduct ? renderBlogPost(App.currentProduct) : renderBlog(); break;
      case 'about':    main.innerHTML = renderAbout(); break;
      case 'contact':  main.innerHTML = renderContact(); break;
      default:         main.innerHTML = render404();
    }
    renderFooter();
    bindDynamicEvents();
  }
};

/* ── Nav ─────────────────────────────────────────────────────────────────── */
function renderNav() {
  const t = App.t;
  const navEl = document.getElementById('navbar');
  if (!navEl) return;
  navEl.setAttribute('dir', App.dir);
  navEl.innerHTML = `
    <div class="nav-inner">
      <a class="nav-brand" data-route="home" data-param="">
        <span class="brand-logo">✦</span> ${SITE_NAME}
      </a>
      <nav class="nav-links" id="navLinks">
        <a data-route="home"     data-param="" class="nav-link">${t.nav.home}</a>
        <a data-route="products" data-param="" class="nav-link">${t.nav.products}</a>
        <a data-route="category" data-param="" class="nav-link has-dropdown">
          ${t.nav.categories} <span class="chevron">▾</span>
          <div class="nav-dropdown">
            ${CATEGORIES.map(c => `
              <a data-route="category" data-param="${c.slug}" class="dropdown-item">
                <span>${c.icon}</span> ${c.translations[App.currentLang]?.name || c.translations.en.name}
              </a>`).join('')}
          </div>
        </a>
        <a data-route="blog" data-param="" class="nav-link">${t.nav.blog}</a>
        <a data-route="contact" data-param="" class="nav-link">${t.nav.contact}</a>
      </nav>
      <div class="nav-actions">
        <div class="search-bar-small">
          <input type="text" id="navSearch" placeholder="${t.nav.search_placeholder}" autocomplete="off">
          <div class="search-suggestions" id="navSuggestions"></div>
        </div>
        <div class="lang-switcher">
          ${Object.keys(TRANSLATIONS).map(l => `
            <button class="lang-btn ${l === App.currentLang ? 'active-lang' : ''}" data-lang="${l}" onclick="applyLang('${l}')">${TRANSLATIONS[l].name.slice(0,2)}</button>
          `).join('')}
        </div>
        <button class="theme-btn" id="themeToggle" onclick="toggleTheme()">${App.currentTheme === 'dark' ? '☀️' : '🌙'}</button>
        <button class="cart-btn" data-route="cart" data-param="">
          🛒 <span class="cart-count" id="cartCount">${App.cart.length}</span>
        </button>
        <button class="hamburger" id="hamburger" onclick="toggleMenu()">☰</button>
      </div>
    </div>`;
  bindNavSearch();
}

function toggleMenu() {
  document.getElementById('navLinks')?.classList.toggle('nav-open');
}

function bindNavSearch() {
  const input = document.getElementById('navSearch');
  const sug   = document.getElementById('navSuggestions');
  if (!input) return;
  input.addEventListener('input', () => {
    const v = input.value.trim();
    if (v.length < 2) { sug.innerHTML = ''; sug.classList.remove('visible'); return; }
    const suggestions = Search.getSuggestions(v);
    if (!suggestions.length) { sug.innerHTML = ''; sug.classList.remove('visible'); return; }
    sug.innerHTML = suggestions.map(s => `
      <div class="suggestion-item" data-route="product" data-param="${s.slug}">${s.name}</div>`).join('');
    sug.classList.add('visible');
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      App.searchQuery = input.value.trim();
      Router.navigate('search');
      sug.classList.remove('visible');
    }
  });
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !sug.contains(e.target)) sug.classList.remove('visible');
  });
}

/* ── Home Page ───────────────────────────────────────────────────────────── */
function renderHome() {
  const t = App.t;
  const featured  = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const trending  = TRENDING_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const newArrivals = NEW_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  return `
    <!-- Hero -->
    <section class="hero" dir="${App.dir}">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">${t.hero.badge}</div>
        <h1 class="hero-headline">
          ${t.hero.headline} <span class="accent">${t.hero.headline_accent}</span>
        </h1>
        <p class="hero-sub">${t.hero.sub}</p>
        <div class="hero-ctas">
          <button class="btn btn-primary" data-route="products" data-param="">${t.hero.cta_browse}</button>
          <button class="btn btn-outline" data-route="category" data-param="">${t.hero.cta_categories}</button>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-val">${t.hero.stat1_val}</span><span class="stat-label">${t.hero.stat1_label}</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-val">${t.hero.stat2_val}</span><span class="stat-label">${t.hero.stat2_label}</span></div>
          <div class="stat-divider"></div>
          <div class="stat"><span class="stat-val">${t.hero.stat3_val}</span><span class="stat-label">${t.hero.stat3_label}</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card-float">
          ${featured.slice(0,3).map(p => `<div class="float-card">${renderMiniCard(p)}</div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Categories Bar -->
    <section class="categories-bar" dir="${App.dir}">
      <div class="container">
        <h2 class="section-title">${t.sections.categories}</h2>
        <div class="cats-grid">
          ${CATEGORIES.map(c => `
            <div class="cat-card" data-route="category" data-param="${c.slug}" style="--cat-color:${c.color}">
              <div class="cat-icon">${c.icon}</div>
              <div class="cat-name">${c.translations[App.currentLang]?.name || c.translations.en.name}</div>
              <div class="cat-desc">${c.translations[App.currentLang]?.desc || c.translations.en.desc}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Featured -->
    <section class="products-section" dir="${App.dir}">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t.sections.featured}</h2>
          <a class="see-all" data-route="products" data-param="">→</a>
        </div>
        <div class="products-grid">${featured.map(p => renderProductCard(p)).join('')}</div>
      </div>
    </section>

    <!-- Why Us -->
    <section class="why-section" dir="${App.dir}">
      <div class="container">
        <h2 class="section-title center">${t.sections.why_us}</h2>
        <div class="why-grid">
          ${t.why.map(w => `
            <div class="why-card">
              <div class="why-icon">${w.icon}</div>
              <h3>${w.title}</h3>
              <p>${w.desc}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Trending -->
    <section class="products-section alt-bg" dir="${App.dir}">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t.sections.trending}</h2>
          <a class="see-all" data-route="products" data-param="">→</a>
        </div>
        <div class="products-grid">${trending.map(p => renderProductCard(p)).join('')}</div>
      </div>
    </section>

    <!-- Reviews Marquee -->
    <section class="reviews-section" dir="${App.dir}">
      <div class="container">
        <h2 class="section-title center">${t.sections.reviews}</h2>
        <div class="reviews-marquee">
          <div class="reviews-track">
            ${[...REVIEWS, ...REVIEWS].map(r => `
              <div class="review-card">
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-author">${r.country} ${r.author}</div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- New Arrivals -->
    <section class="products-section" dir="${App.dir}">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">${t.sections.new_arrivals}</h2>
          <a class="see-all" data-route="products" data-param="">→</a>
        </div>
        <div class="products-grid">${newArrivals.map(p => renderProductCard(p)).join('')}</div>
      </div>
    </section>

    <!-- Blog Teaser -->
    <section class="blog-teaser alt-bg" dir="${App.dir}">
      <div class="container">
        <h2 class="section-title">${t.sections.blog}</h2>
        <div class="blog-grid">
          ${BLOG_POSTS.slice(0,3).map(post => renderBlogCard(post)).join('')}
        </div>
      </div>
    </section>

    <!-- WhatsApp CTA -->
    <section class="wa-cta" dir="${App.dir}">
      <div class="container">
        <div class="wa-cta-inner">
          <div class="wa-icon">💬</div>
          <div class="wa-text">
            <h2>${App.currentLang === 'ar' ? 'هل لديك سؤال؟ تواصل معنا عبر واتساب' : App.currentLang === 'fr' ? 'Une question? Contactez-nous sur WhatsApp' : App.currentLang === 'es' ? '¿Tienes preguntas? Contáctanos en WhatsApp' : 'Have questions? Chat with us on WhatsApp'}</h2>
            <p>+212 612 605 737 · ${CONTACT_EMAIL}</p>
          </div>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener" class="btn btn-whatsapp">
            ${App.currentLang === 'ar' ? 'تواصل الآن' : App.currentLang === 'fr' ? 'Contacter Maintenant' : App.currentLang === 'es' ? 'Contactar Ahora' : 'Chat Now'}
          </a>
        </div>
      </div>
    </section>`;
}

/* ── Product Card ────────────────────────────────────────────────────────── */
function renderProductCard(p) {
  const t   = App.t;
  const tr  = p.translations[App.currentLang] || p.translations.en;
  const cat = CATEGORIES.find(c => c.id === p.category);
  const badgeLabel = p.badge === 'bestseller' ? t.product.badge_bestseller :
                     p.badge === 'new'        ? t.product.badge_new :
                     p.badge === 'trending'   ? t.product.badge_trending : '';
  return `
    <div class="product-card" data-route="product" data-param="${p.slug}">
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${tr.name}" loading="lazy">
        ${p.badge ? `<span class="card-badge badge-${p.badge}">${badgeLabel}</span>` : ''}
        <div class="card-cat-tag" style="background:${cat?.color || '#6366F1'}">${cat?.icon || '📦'}</div>
      </div>
      <div class="card-body">
        <div class="card-cat-name">${cat?.translations[App.currentLang]?.name || cat?.translations.en.name || ''}</div>
        <h3 class="card-title">${tr.name}</h3>
        <p class="card-desc">${tr.desc.slice(0,90)}...</p>
        <div class="card-meta">
          <div class="card-rating">
            ${'★'.repeat(Math.floor(p.rating))}<span class="rating-val"> ${p.rating}</span>
            <span class="review-count">(${p.reviews})</span>
          </div>
          <div class="card-sales">${p.sales.toLocaleString()} ${t.product.sales}</div>
        </div>
        <div class="card-footer">
          <div class="card-price">$${p.price}</div>
          <button class="btn btn-sm btn-primary order-btn"
            onclick="event.stopPropagation(); orderViaWhatsApp('${p.id}', '${encodeURIComponent(tr.name)}', ${p.price})">
            ${t.product.order_now}
          </button>
        </div>
      </div>
    </div>`;
}

function renderMiniCard(p) {
  const tr = p.translations[App.currentLang] || p.translations.en;
  return `
    <div class="mini-card">
      <img src="${p.image}" alt="${tr.name}">
      <div class="mini-card-info">
        <div class="mini-name">${tr.name.slice(0,30)}</div>
        <div class="mini-price">$${p.price}</div>
      </div>
    </div>`;
}

/* ── Product Page ────────────────────────────────────────────────────────── */
function renderProductPage(slug) {
  const p = PRODUCTS.find(pr => pr.slug === slug || pr.id === slug);
  if (!p) return render404();
  const t  = App.t;
  const tr = p.translations[App.currentLang] || p.translations.en;
  const cat = CATEGORIES.find(c => c.id === p.category);
  const related = PRODUCTS.filter(pr => pr.category === p.category && pr.id !== p.id).slice(0,4);
  const pageReviews = REVIEWS.filter(r => r.productId === p.id);
  const badgeLabel = p.badge === 'bestseller' ? t.product.badge_bestseller :
                     p.badge === 'new'        ? t.product.badge_new :
                     p.badge === 'trending'   ? t.product.badge_trending : '';
  const waMsg = encodeURIComponent(
    t.whatsapp.message
      .replace('{name}', tr.name)
      .replace('{price}', p.price)
      .replace('{url}', `${SITE_URL}/product/${p.slug}`)
  );

  // Schema.org
  const schema = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": tr.name,
    "description": tr.desc,
    "image": p.image,
    "sku": p.id,
    "offers": { "@type": "Offer", "priceCurrency": "USD", "price": p.price, "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": p.rating, "reviewCount": p.reviews }
  });

  return `
    <script type="application/ld+json">${schema}</script>
    <div class="product-page" dir="${App.dir}">
      <div class="container">
        <nav class="breadcrumb">
          <a data-route="home" data-param="">Home</a> /
          <a data-route="category" data-param="${cat?.slug}">${cat?.translations[App.currentLang]?.name}</a> /
          <span>${tr.name}</span>
        </nav>

        <div class="product-layout">
          <div class="product-image-col">
            <div class="product-main-img">
              <img src="${p.image}" alt="${tr.name}">
              ${p.badge ? `<span class="card-badge badge-${p.badge}">${badgeLabel}</span>` : ''}
            </div>
          </div>
          <div class="product-info-col">
            <div class="product-cat-tag" style="color:${cat?.color}">${cat?.icon} ${cat?.translations[App.currentLang]?.name}</div>
            <h1 class="product-title">${tr.name}</h1>
            <div class="product-meta-row">
              <div class="product-rating">${'★'.repeat(Math.floor(p.rating))} ${p.rating} (${p.reviews} ${t.product.reviews})</div>
              <div class="product-sales-badge">${p.sales.toLocaleString()} ${t.product.sales}</div>
            </div>
            <p class="product-desc">${tr.desc}</p>
            <div class="product-price-row">
              <div class="product-price">$${p.price}</div>
            </div>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" rel="noopener"
               class="btn btn-whatsapp btn-lg wa-order-btn">
              <span class="wa-icon-inline">💬</span> ${t.product.order_now}
            </a>
            <div class="product-trust">
              <span>⚡ Instant Delivery</span>
              <span>🔒 Secure Order</span>
              <span>💎 Premium Quality</span>
            </div>
          </div>
        </div>

        <!-- Features -->
        <div class="product-section-block">
          <h2>${t.product.features}</h2>
          <ul class="features-list">
            ${(tr.features || []).map(f => `<li><span class="feature-check">✓</span> ${f}</li>`).join('')}
          </ul>
        </div>

        <!-- FAQ -->
        <div class="product-section-block">
          <h2>${t.product.faq}</h2>
          <div class="faq-list">
            ${t.faq.map((fq, i) => `
              <div class="faq-item" id="faq-${i}">
                <button class="faq-q" onclick="toggleFaq(${i})">${fq.q} <span class="faq-arrow">▾</span></button>
                <div class="faq-a" id="faq-a-${i}">${fq.a}</div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Reviews -->
        ${pageReviews.length ? `
        <div class="product-section-block">
          <h2>${t.sections.reviews}</h2>
          <div class="reviews-list">
            ${pageReviews.map(r => `
              <div class="review-item">
                <div class="review-top">
                  <span class="r-author">${r.country} ${r.author}</span>
                  <span class="r-stars">${'★'.repeat(r.rating)}</span>
                  <span class="r-date">${r.date}</span>
                </div>
                <p>${r.text}</p>
              </div>`).join('')}
          </div>
        </div>` : ''}

        <!-- Related -->
        <div class="product-section-block">
          <h2>${t.product.related}</h2>
          <div class="products-grid related-grid">${related.map(renderProductCard).join('')}</div>
        </div>
      </div>
    </div>`;
}

/* ── Category Page ───────────────────────────────────────────────────────── */
function renderCategoryPage(slug) {
  const t = App.t;
  const cat = CATEGORIES.find(c => c.slug === slug);

  if (!slug || !cat) {
    // All categories
    return `
      <div class="page-header" dir="${App.dir}">
        <div class="container">
          <h1>${t.nav.categories}</h1>
        </div>
      </div>
      <section class="products-section" dir="${App.dir}">
        <div class="container">
          <div class="cats-grid large">
            ${CATEGORIES.map(c => `
              <div class="cat-card large" data-route="category" data-param="${c.slug}" style="--cat-color:${c.color}">
                <div class="cat-icon big">${c.icon}</div>
                <div class="cat-name">${c.translations[App.currentLang]?.name}</div>
                <div class="cat-desc">${c.translations[App.currentLang]?.desc}</div>
                <div class="cat-count">${PRODUCTS.filter(p => p.category === c.id).length} products</div>
              </div>`).join('')}
          </div>
        </div>
      </section>`;
  }

  const products = PRODUCTS.filter(p => p.category === cat.id);
  const catT = cat.translations[App.currentLang] || cat.translations.en;

  return `
    <div class="page-header" dir="${App.dir}" style="--cat-color:${cat.color}">
      <div class="container">
        <nav class="breadcrumb"><a data-route="home" data-param="">Home</a> / <span>${catT.name}</span></nav>
        <div class="page-header-icon">${cat.icon}</div>
        <h1>${catT.name}</h1>
        <p>${catT.desc}</p>
      </div>
    </div>
    <section class="products-section" dir="${App.dir}">
      <div class="container">
        <div class="filter-bar">
          <span class="result-count">${products.length} products</span>
          <select onchange="App.sortBy=this.value; Router.render()" class="sort-select">
            <option value="relevance">Sort: Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="sales">Best Selling</option>
          </select>
        </div>
        <div class="products-grid">
          ${products.length ? products.map(renderProductCard).join('') : '<p class="no-results">No products found.</p>'}
        </div>
      </div>
    </section>`;
}

/* ── Search Page ─────────────────────────────────────────────────────────── */
function renderSearchPage() {
  const t = App.t;
  const q = App.searchQuery || new URLSearchParams(window.location.search).get('q') || '';
  const results = q ? Search.sortResults(Search.query(q), App.sortBy) : PRODUCTS;
  return `
    <div class="page-header" dir="${App.dir}">
      <div class="container">
        <h1>${t.search.title}</h1>
        <div class="search-hero-bar">
          <input type="text" id="searchInput" value="${q}" placeholder="${t.search.placeholder}" class="search-input">
          <button onclick="doSearch()" class="btn btn-primary">🔍</button>
        </div>
      </div>
    </div>
    <section class="products-section" dir="${App.dir}">
      <div class="container">
        ${q && !results.length ? `
          <div class="no-results-block">
            <div class="no-results-icon">🔍</div>
            <h2>${t.search.no_results} "${q}"</h2>
            <p>${t.search.try}</p>
          </div>` : `
          <div class="filter-bar">
            <span class="result-count">${results.length} results${q ? ` for "${q}"` : ''}</span>
          </div>
          <div class="products-grid">${results.map(renderProductCard).join('')}</div>`}
      </div>
    </section>`;
}

function doSearch() {
  const val = document.getElementById('searchInput')?.value?.trim();
  if (val) { App.searchQuery = val; Router.navigate('search'); }
}

/* ── Blog ────────────────────────────────────────────────────────────────── */
const BLOG_POSTS = [
  { slug: "best-digital-products-2025", title: "Top 10 Digital Products to Buy in 2025", cat: "Digital Products", date: "2025-05-20", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", excerpt: "Discover the most in-demand digital products that are driving real results for entrepreneurs, creators, and professionals in 2025." },
  { slug: "ai-prompts-guide", title: "How AI Prompt Libraries Are Changing the Way We Work", cat: "AI Tools", date: "2025-05-18", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", excerpt: "AI prompt libraries are becoming essential tools for marketers, writers, and developers. Here's everything you need to know." },
  { slug: "notion-templates-productivity", title: "Notion Templates: The Ultimate Productivity Hack", cat: "Software", date: "2025-05-15", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80", excerpt: "If you're not using Notion templates yet, you're leaving serious productivity gains on the table. Here's how to maximize them." },
  { slug: "sell-digital-products-online", title: "How to Start Selling Digital Products Online in 2025", cat: "Online Business", date: "2025-05-12", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", excerpt: "Selling digital products is one of the most scalable online business models. This step-by-step guide will help you get started." },
  { slug: "midjourney-art-business", title: "Building a Business with Midjourney AI Art", cat: "AI Tools", date: "2025-05-10", img: "https://images.unsplash.com/photo-1681412332145-30b88e7f2b6e?w=600&q=80", excerpt: "AI art generators like Midjourney are creating real business opportunities. Learn how to monetize your prompt-crafting skills." },
  { slug: "email-marketing-templates", title: "Why Email Marketing Templates Beat Starting from Scratch", cat: "Marketing", date: "2025-05-08", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80", excerpt: "The difference between a 15% and 45% open rate often comes down to template quality. Here's what to look for." },
  { slug: "freelance-tools-2025", title: "Essential Digital Tools for Freelancers in 2025", cat: "Freelance", date: "2025-05-05", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80", excerpt: "The right digital toolkit can double your freelance income. We've curated the top tools every freelancer needs this year." },
  { slug: "seo-resources-guide", title: "The Complete Guide to SEO Resources Every Marketer Needs", cat: "SEO", date: "2025-05-02", img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80", excerpt: "SEO is only as strong as the resources backing your strategy. From keyword databases to backlink templates, here's what you need." },
  { slug: "game-streaming-guide", title: "How to Set Up a Professional Game Streaming Channel", cat: "Gaming", date: "2025-04-30", img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80", excerpt: "Professional streaming setups don't have to cost thousands. The right digital assets and overlays make all the difference." },
  { slug: "python-automation-business", title: "Python Automation Scripts That Are Worth Every Penny", cat: "Software", date: "2025-04-28", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80", excerpt: "Automation is the great equalizer for solo entrepreneurs. These Python scripts can save you 10+ hours per week." },
  { slug: "brand-identity-importance", title: "Why Your Brand Identity Is Your Most Valuable Digital Asset", cat: "Design", date: "2025-04-25", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80", excerpt: "In a crowded digital market, brand identity is what separates forgettable businesses from iconic ones." },
  { slug: "make-automation-workflows", title: "Make.com Workflows That Will Transform Your Business", cat: "AI Tools", date: "2025-04-22", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80", excerpt: "Make.com (formerly Integromat) is the automation platform of choice for serious digital entrepreneurs. Here's why." }
];

function renderBlogCard(post) {
  return `
    <div class="blog-card" data-route="blog" data-param="${post.slug}">
      <div class="blog-img-wrap"><img src="${post.img}" alt="${post.title}" loading="lazy"></div>
      <div class="blog-body">
        <div class="blog-cat">${post.cat}</div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt.slice(0,100)}...</p>
        <div class="blog-date">${post.date}</div>
      </div>
    </div>`;
}

function renderBlog() {
  return `
    <div class="page-header" dir="${App.dir}">
      <div class="container"><h1>${App.t.nav.blog}</h1></div>
    </div>
    <section class="blog-section" dir="${App.dir}">
      <div class="container">
        <div class="blog-grid large">${BLOG_POSTS.map(renderBlogCard).join('')}</div>
      </div>
    </section>`;
}

function renderBlogPost(slug) {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return render404();
  return `
    <div class="page-header" dir="${App.dir}">
      <div class="container">
        <nav class="breadcrumb"><a data-route="blog" data-param="">Blog</a> / <span>${post.cat}</span></nav>
        <h1>${post.title}</h1>
        <div class="blog-meta">${post.cat} · ${post.date}</div>
      </div>
    </div>
    <article class="blog-article" dir="${App.dir}">
      <div class="container narrow">
        <img src="${post.img}" alt="${post.title}" class="article-hero-img">
        <div class="article-body">
          <p>${post.excerpt}</p>
          <p>Digital products represent one of the most powerful business models available today. With zero inventory costs, instant delivery, and unlimited scalability, the digital marketplace continues to grow at an unprecedented pace. Whether you're a freelancer looking to package your knowledge, a creator wanting to monetize your skills, or an entrepreneur building a passive income stream, digital products offer unmatched opportunities.</p>
          <h2>The Key Advantage of Digital Products</h2>
          <p>Unlike physical goods, digital products can be sold infinitely without additional production costs. A well-crafted ebook, template pack, or software tool created once can generate revenue for years. This scalability is what makes the digital products market so attractive to entrepreneurs worldwide.</p>
          <h2>Getting Started</h2>
          <p>The best digital products solve specific, well-defined problems for a clearly identified audience. Start by identifying your area of expertise, then create a product that delivers measurable value. Whether that's saving time, making money, or learning a skill, the best products have a clear value proposition.</p>
          <p>Browse our <a data-route="home" data-param="" class="inline-link">marketplace</a> to discover premium digital products that top creators and entrepreneurs trust to grow their businesses.</p>
        </div>
        <div class="article-cta">
          <h3>${App.currentLang === 'ar' ? 'هل وجدت هذا مفيداً؟' : 'Found this helpful?'}</h3>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="btn btn-whatsapp">
            💬 ${App.t.product.order_now}
          </a>
        </div>
      </div>
    </article>`;
}

/* ── About / Contact ─────────────────────────────────────────────────────── */
function renderAbout() {
  return `
    <div class="page-header" dir="${App.dir}">
      <div class="container"><h1>${App.t.nav.about}</h1></div>
    </div>
    <section class="static-page" dir="${App.dir}">
      <div class="container narrow">
        <h2>About Anythinc</h2>
        <p>Anythinc is a global digital products marketplace connecting creators and entrepreneurs with premium digital resources. From AI prompts and design templates to automation workflows and educational guides — we curate only the best.</p>
        <p>Our mission: make premium digital tools accessible to everyone, anywhere in the world, delivered instantly via WhatsApp.</p>
        <div class="about-grid">
          <div class="about-stat"><span>15,000+</span> Products Sold</div>
          <div class="about-stat"><span>50K+</span> Happy Customers</div>
          <div class="about-stat"><span>4.9★</span> Average Rating</div>
          <div class="about-stat"><span>4</span> Languages Supported</div>
        </div>
        <h2>Contact</h2>
        <p>📱 WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">+212 612 605 737</a></p>
        <p>📧 Email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
      </div>
    </section>`;
}

function renderContact() {
  return `
    <div class="page-header" dir="${App.dir}">
      <div class="container"><h1>${App.t.nav.contact}</h1></div>
    </div>
    <section class="static-page" dir="${App.dir}">
      <div class="container narrow">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>+212 612 605 737</p>
            <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="btn btn-whatsapp">Open WhatsApp</a>
          </div>
          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>Email</h3>
            <p>${CONTACT_EMAIL}</p>
            <a href="mailto:${CONTACT_EMAIL}" class="btn btn-primary">Send Email</a>
          </div>
        </div>
        <div class="faq-list contact-faq">
          <h2>${App.t.product.faq}</h2>
          ${App.t.faq.map((fq, i) => `
            <div class="faq-item">
              <button class="faq-q" onclick="toggleFaq(${i})">${fq.q} <span class="faq-arrow">▾</span></button>
              <div class="faq-a" id="faq-a-${i}">${fq.a}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
}

function render404() {
  return `
    <div class="page-404" dir="${App.dir}">
      <div class="container center">
        <div class="err-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button class="btn btn-primary" data-route="home" data-param="">Go Home</button>
      </div>
    </div>`;
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function renderFooter() {
  const t = App.t;
  const footerEl = document.getElementById('footer');
  if (!footerEl) return;
  footerEl.setAttribute('dir', App.dir);
  footerEl.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="brand-logo-lg">✦ ${SITE_NAME}</div>
        <p class="footer-tagline">${t.footer.tagline}</p>
        <div class="footer-contact">
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="footer-contact-link">💬 ${t.footer.whatsapp_label}: +212 612 605 737</a>
          <a href="mailto:${CONTACT_EMAIL}" class="footer-contact-link">📧 ${t.footer.email_label}: ${CONTACT_EMAIL}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>${t.footer.links_title}</h4>
        <a data-route="home" data-param="">${t.nav.home}</a>
        <a data-route="products" data-param="">${t.nav.products}</a>
        <a data-route="blog" data-param="">${t.nav.blog}</a>
        <a data-route="about" data-param="">${t.nav.about}</a>
        <a data-route="contact" data-param="">${t.nav.contact}</a>
      </div>
      <div class="footer-col">
        <h4>${t.footer.cats_title}</h4>
        ${CATEGORIES.map(c => `<a data-route="category" data-param="${c.slug}">${c.icon} ${c.translations[App.currentLang]?.name}</a>`).join('')}
      </div>
      <div class="footer-col">
        <h4>${t.footer.contact_title}</h4>
        <p>📱 +212 612 605 737</p>
        <p>📧 ${CONTACT_EMAIL}</p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="btn btn-whatsapp btn-sm" style="margin-top:12px">Chat on WhatsApp</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>${t.footer.rights}</span>
      <div class="footer-bottom-links">
        <a data-route="privacy" data-param="">${t.footer.privacy}</a>
        <a data-route="terms" data-param="">${t.footer.terms}</a>
      </div>
    </div>`;
}

/* ── WhatsApp Order ──────────────────────────────────────────────────────── */
function orderViaWhatsApp(productId, encodedName, price) {
  const name = decodeURIComponent(encodedName);
  const t = App.t;
  const p = PRODUCTS.find(pr => pr.id === productId);
  const url = p ? `${SITE_URL}/product/${p.slug}` : SITE_URL;
  const msg = t.whatsapp.message
    .replace('{name}', name)
    .replace('{price}', price)
    .replace('{url}', url);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ── Utility: FAQ toggle ─────────────────────────────────────────────────── */
function toggleFaq(i) {
  const el = document.getElementById(`faq-a-${i}`);
  if (!el) return;
  el.classList.toggle('open');
}

/* ── Utility: Cart ───────────────────────────────────────────────────────── */
function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = App.cart.length;
}

/* ── Bind dynamic events after render ───────────────────────────────────── */
function bindDynamicEvents() {
  updateCartCount();
  // Products page — all products
  if (App.currentPage === 'products') {
    const main = document.getElementById('main');
    if (main && !main.querySelector('.products-grid')) {
      main.innerHTML = `
        <div class="page-header" dir="${App.dir}">
          <div class="container"><h1>${App.t.nav.products}</h1></div>
        </div>
        <section class="products-section" dir="${App.dir}">
          <div class="container">
            <div class="products-grid">${PRODUCTS.map(renderProductCard).join('')}</div>
          </div>
        </section>`;
    }
  }
}
