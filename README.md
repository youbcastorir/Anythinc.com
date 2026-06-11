# ✦ Anythinc — Buy Digital Products Instantly

**Live URL:** https://anythinc.com  
**WhatsApp:** +212 612 605 737  
**Email:** salatrir@gmail.com

---

## 📦 Project Overview

Anythinc is a fully static, multilingual digital products marketplace built with vanilla HTML, CSS, and JavaScript. It runs on GitHub Pages with zero backend requirements. Orders are processed via WhatsApp.

**Tech Stack:** HTML5 · CSS3 · Vanilla JS (no frameworks) · GitHub Pages

---

## 📁 File Structure

```
anythinc/
├── index.html          # SPA shell + all SEO meta tags
├── style.css           # Complete design system (dark/light, RTL)
├── app.js              # Router, rendering, WhatsApp integration
├── products.js         # All products + reviews data
├── categories.js       # Category definitions
├── translations.js     # EN / AR / FR / ES translations
├── search.js           # Client-side search engine
├── manifest.json       # PWA manifest
├── sitemap.xml         # Full XML sitemap
├── robots.txt          # Search engine directives
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## 🚀 Installation & Local Development

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/anythinc.git
cd anythinc

# 2. Open locally — no build step required
# Option A: Direct file open
open index.html

# Option B: Local server (recommended for SPA routing)
npx serve .
# or
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

---

## 🌐 GitHub Pages Deployment

```bash
# Initialize and push
git init
git add .
git commit -m "Launch Anythinc"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/anythinc.git
git push -u origin main
```

Then in GitHub repository settings:
1. Go to **Settings → Pages**
2. Source: **Deploy from branch → main / root**
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/anythinc`

**Custom Domain (anythinc.com):**
1. In Settings → Pages → Custom Domain, enter `anythinc.com`
2. In your DNS provider, add:
   - `A` record → `185.199.108.153` (GitHub Pages IPs)
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` `www` → `YOUR_USERNAME.github.io`

---

## 💬 WhatsApp Integration Guide

The WhatsApp order system works out of the box. When a customer clicks "Order via WhatsApp", the app generates a pre-filled message:

```
Hello,

I want to order:

Product: [Product Name]
Price: $[Price]
Product Link: [URL]

Please send me more details.
```

**Configuration** — In `app.js`, line 4:
```js
const WHATSAPP_NUMBER = "212612605737"; // Change to your number (no +)
const CONTACT_EMAIL   = "salatrir@gmail.com";
const SITE_URL        = "https://anythinc.com";
```

**Message templates per language** are in `translations.js` under `whatsapp.message`.

---

## 🛍️ Product Management Guide

Products are defined in `products.js`. To add a new product:

```js
{
  id: "xx-001",                    // Unique ID (prefix = category)
  slug: "my-product-slug",         // URL-friendly slug
  category: "software",            // Must match a CATEGORIES id
  subcategory: "productivity",     // Subcategory string
  badge: "new",                    // "new" | "trending" | "bestseller" | null
  price: 29,                       // USD price (integer)
  currency: "USD",
  rating: 4.8,                     // 0-5 rating
  reviews: 120,                    // Number of reviews
  sales: 500,                      // Total sales count
  image: "https://...",            // Product image URL (600px+ wide)
  tags: ["tag1", "tag2"],          // Search tags
  translations: {
    en: { name: "...", desc: "...", features: ["...", "..."] },
    ar: { name: "...", desc: "...", features: ["...", "..."] },
    fr: { name: "...", desc: "...", features: ["...", "..."] },
    es: { name: "...", desc: "...", features: ["...", "..."] }
  }
}
```

**Featured / Trending / New lists** (bottom of `products.js`):
```js
const FEATURED_IDS  = ["ai-001", "de-002", ...]; // Homepage featured
const TRENDING_IDS  = ["ai-002", "sw-003", ...]; // Trending section
const NEW_IDS       = ["sw-002", "eb-002", ...]; // New arrivals
```

---

## 🌍 Multilingual Guide

Translations are in `translations.js`. To add a new language:

1. Add a new key to the `TRANSLATIONS` object (copy the `en` block)
2. Translate all strings
3. Set `dir: "rtl"` for right-to-left languages
4. Add a button in the lang switcher (auto-generated from `TRANSLATIONS` keys)

---

## 🔍 SEO Guide

### On-Page SEO (already configured)
- ✅ Title tag with target keywords
- ✅ Meta description
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ Hreflang for 4 languages
- ✅ Schema.org: Organization, WebSite, Product, ItemList
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ Canonical URLs

### Programmatic SEO
Each category and product generates unique pages with:
- Dynamic `<title>` per page (set via `document.title` in `app.js`)
- Product schema.org on each product page
- Internal linking via breadcrumbs and related products

### Updating sitemap.xml
When you add new products or blog posts, add them to `sitemap.xml`:
```xml
<url>
  <loc>https://anythinc.com/product/YOUR-SLUG</loc>
  <lastmod>2025-06-01</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

### Submit to Search Engines
```
Google: https://search.google.com/search-console
Bing:   https://www.bing.com/webmasters
```

---

## 🎨 Design Customization

**Colors** — Edit CSS variables in `style.css`:
```css
:root {
  --accent: #6366F1;      /* Primary indigo */
  --green:  #10B981;      /* Success / new badge */
  --wa:     #25D366;      /* WhatsApp green */
  --bg:     #0D0F1A;      /* Dark background */
}
```

**Fonts** — Uses Google Fonts (Inter + Sora). Change in `style.css` and `index.html`.

---

## 📊 Performance Notes

- Zero JavaScript frameworks → fast initial load
- Images lazy-loaded with `loading="lazy"`
- Google Fonts with `display=swap`
- CSS animations respect `prefers-reduced-motion`
- All assets inlined or CDN-hosted

---

## 📞 Contact

- **WhatsApp:** [+212 612 605 737](https://wa.me/212612605737)
- **Email:** [salatrir@gmail.com](mailto:salatrir@gmail.com)
- **Domain:** [anythinc.com](https://anythinc.com)

---

*Built with ❤️ — Deploy once, sell forever.*
