// categories.js — Anythinc Digital Marketplace

const CATEGORIES = [
  {
    id: "software",
    slug: "software",
    icon: "💻",
    color: "#6366F1",
    subcategories: ["productivity", "templates", "scripts", "plugins", "utilities"],
    translations: {
      en: { name: "Software", desc: "Productivity tools, scripts, plugins & utilities" },
      ar: { name: "البرمجيات", desc: "أدوات الإنتاجية والسكريبتات والإضافات" },
      fr: { name: "Logiciels", desc: "Outils de productivité, scripts et plugins" },
      es: { name: "Software", desc: "Herramientas de productividad, scripts y plugins" }
    }
  },
  {
    id: "ebooks",
    slug: "ebooks",
    icon: "📚",
    color: "#10B981",
    subcategories: ["business", "marketing", "education", "courses"],
    translations: {
      en: { name: "eBooks", desc: "Books, guides, courses & educational materials" },
      ar: { name: "الكتب الإلكترونية", desc: "الكتب والأدلة والدورات التعليمية" },
      fr: { name: "eBooks", desc: "Livres, guides, cours et matériels éducatifs" },
      es: { name: "eBooks", desc: "Libros, guías, cursos y materiales educativos" }
    }
  },
  {
    id: "design",
    slug: "design",
    icon: "🎨",
    color: "#F59E0B",
    subcategories: ["logos", "templates", "mockups", "icons", "graphics"],
    translations: {
      en: { name: "Design Resources", desc: "Logos, templates, mockups, icons & graphics" },
      ar: { name: "موارد التصميم", desc: "الشعارات والقوالب والنماذج والأيقونات" },
      fr: { name: "Ressources Design", desc: "Logos, templates, maquettes et icônes" },
      es: { name: "Recursos de Diseño", desc: "Logos, plantillas, mockups e iconos" }
    }
  },
  {
    id: "services",
    slug: "services",
    icon: "🚀",
    color: "#EC4899",
    subcategories: ["seo", "marketing", "website"],
    translations: {
      en: { name: "Digital Services", desc: "SEO resources, marketing & website assets" },
      ar: { name: "الخدمات الرقمية", desc: "موارد السيو والتسويق وأصول المواقع" },
      fr: { name: "Services Numériques", desc: "Ressources SEO, marketing et web" },
      es: { name: "Servicios Digitales", desc: "Recursos SEO, marketing y web" }
    }
  },
  {
    id: "gaming",
    slug: "gaming",
    icon: "🎮",
    color: "#8B5CF6",
    subcategories: ["guides", "assets", "tools"],
    translations: {
      en: { name: "Gaming", desc: "Game guides, digital assets & gaming tools" },
      ar: { name: "الألعاب", desc: "أدلة الألعاب والأصول الرقمية وأدوات الألعاب" },
      fr: { name: "Gaming", desc: "Guides de jeux, assets numériques" },
      es: { name: "Gaming", desc: "Guías de juegos, activos digitales" }
    }
  },
  {
    id: "ai",
    slug: "ai",
    icon: "🤖",
    color: "#06B6D4",
    subcategories: ["prompts", "templates", "workflows", "automation"],
    translations: {
      en: { name: "AI Resources", desc: "Prompts, templates, workflows & automation" },
      ar: { name: "موارد الذكاء الاصطناعي", desc: "البرومبتات والقوالب وسير العمل" },
      fr: { name: "Ressources IA", desc: "Prompts, templates, workflows et automatisation" },
      es: { name: "Recursos de IA", desc: "Prompts, plantillas, workflows y automatización" }
    }
  }
];

if (typeof module !== 'undefined') module.exports = CATEGORIES;
