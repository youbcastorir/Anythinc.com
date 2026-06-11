// search.js — Anythinc Digital Marketplace

const Search = (() => {
  let searchIndex = [];

  function buildIndex(products, lang) {
    searchIndex = products.map(p => {
      const t = p.translations[lang] || p.translations['en'];
      return {
        id: p.id,
        slug: p.slug,
        category: p.category,
        subcategory: p.subcategory,
        price: p.price,
        rating: p.rating,
        badge: p.badge,
        name: t.name.toLowerCase(),
        desc: t.desc.toLowerCase(),
        features: (t.features || []).join(' ').toLowerCase(),
        tags: (p.tags || []).join(' ').toLowerCase(),
        raw: p
      };
    });
  }

  function query(term, filters = {}) {
    const q = term.toLowerCase().trim();
    if (!q && !filters.category) return searchIndex.map(i => i.raw);

    return searchIndex.filter(item => {
      // Category filter
      if (filters.category && item.category !== filters.category) return false;
      // Price filter
      if (filters.maxPrice && item.price > filters.maxPrice) return false;
      if (filters.minPrice && item.price < filters.minPrice) return false;
      // Text search
      if (!q) return true;
      return (
        item.name.includes(q) ||
        item.desc.includes(q) ||
        item.tags.includes(q) ||
        item.features.includes(q) ||
        item.category.includes(q) ||
        item.subcategory.includes(q)
      );
    }).map(i => i.raw);
  }

  function sortResults(results, sortBy = 'relevance') {
    const copy = [...results];
    switch (sortBy) {
      case 'price_asc':  return copy.sort((a, b) => a.price - b.price);
      case 'price_desc': return copy.sort((a, b) => b.price - a.price);
      case 'rating':     return copy.sort((a, b) => b.rating - a.rating);
      case 'sales':      return copy.sort((a, b) => b.sales - a.sales);
      default:           return copy;
    }
  }

  function getSuggestions(term, limit = 5) {
    const q = term.toLowerCase().trim();
    if (q.length < 2) return [];
    return searchIndex
      .filter(i => i.name.includes(q) || i.tags.includes(q))
      .slice(0, limit)
      .map(i => ({ id: i.id, name: i.raw.translations[App.currentLang]?.name || i.raw.translations['en'].name, slug: i.slug }));
  }

  return { buildIndex, query, sortResults, getSuggestions };
})();

if (typeof module !== 'undefined') module.exports = Search;
