// products.js — Anythinc Digital Marketplace

const PRODUCTS = [
  // ── SOFTWARE ────────────────────────────────────────────────────────────────
  {
    id: "sw-001",
    slug: "ultimate-productivity-bundle",
    category: "software",
    subcategory: "productivity",
    badge: "bestseller",
    price: 29,
    currency: "USD",
    rating: 4.9,
    reviews: 214,
    sales: 1820,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    tags: ["productivity", "templates", "tools"],
    translations: {
      en: {
        name: "Ultimate Productivity Bundle",
        desc: "50+ Notion templates, task trackers, habit builders & goal planners in one powerful bundle.",
        features: ["50+ Notion templates", "Habit tracker system", "Goal planner", "Weekly review kit", "Lifetime updates"]
      },
      ar: {
        name: "حزمة الإنتاجية الشاملة",
        desc: "أكثر من 50 قالب نوشن، أدوات تتبع المهام وبناء العادات ومخططات الأهداف.",
        features: ["أكثر من 50 قالب نوشن", "نظام تتبع العادات", "مخطط الأهداف", "مجموعة المراجعة الأسبوعية", "تحديثات مدى الحياة"]
      },
      fr: {
        name: "Bundle Productivité Ultime",
        desc: "Plus de 50 templates Notion, trackers de tâches, constructeurs d'habitudes et planificateurs.",
        features: ["50+ templates Notion", "Système de suivi des habitudes", "Planificateur d'objectifs", "Kit de révision hebdomadaire", "Mises à jour à vie"]
      },
      es: {
        name: "Bundle de Productividad Definitivo",
        desc: "Más de 50 plantillas Notion, rastreadores de tareas y planificadores de metas.",
        features: ["50+ plantillas Notion", "Sistema de seguimiento de hábitos", "Planificador de metas", "Kit de revisión semanal", "Actualizaciones de por vida"]
      }
    }
  },
  {
    id: "sw-002",
    slug: "python-automation-scripts-pack",
    category: "software",
    subcategory: "scripts",
    badge: "new",
    price: 19,
    currency: "USD",
    rating: 4.7,
    reviews: 89,
    sales: 560,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tags: ["python", "automation", "scripts"],
    translations: {
      en: {
        name: "Python Automation Scripts Pack",
        desc: "30 ready-to-use Python scripts for web scraping, file management, API calls, and data processing.",
        features: ["30 Python scripts", "Web scraping tools", "File automation", "API integrations", "Full documentation"]
      },
      ar: {
        name: "حزمة سكريبتات بايثون للأتمتة",
        desc: "30 سكريبت بايثون جاهز للاستخدام لاستخراج الويب وإدارة الملفات ومعالجة البيانات.",
        features: ["30 سكريبت بايثون", "أدوات استخراج الويب", "أتمتة الملفات", "تكاملات API", "توثيق كامل"]
      },
      fr: {
        name: "Pack Scripts Python Automation",
        desc: "30 scripts Python prêts à l'emploi pour le web scraping, gestion de fichiers et traitement de données.",
        features: ["30 scripts Python", "Outils de web scraping", "Automatisation des fichiers", "Intégrations API", "Documentation complète"]
      },
      es: {
        name: "Pack de Scripts Python para Automatización",
        desc: "30 scripts Python listos para usar para web scraping, gestión de archivos y procesamiento de datos.",
        features: ["30 scripts Python", "Herramientas de web scraping", "Automatización de archivos", "Integraciones API", "Documentación completa"]
      }
    }
  },
  {
    id: "sw-003",
    slug: "wordpress-plugin-collection",
    category: "software",
    subcategory: "plugins",
    badge: "trending",
    price: 49,
    currency: "USD",
    rating: 4.8,
    reviews: 156,
    sales: 934,
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
    tags: ["wordpress", "plugins", "website"],
    translations: {
      en: {
        name: "WordPress Plugin Collection",
        desc: "10 premium WordPress plugins for SEO, performance, security, and lead generation.",
        features: ["10 premium plugins", "SEO optimizer", "Speed booster", "Security suite", "Lead gen tools"]
      },
      ar: {
        name: "مجموعة إضافات ووردبريس",
        desc: "10 إضافات ووردبريس للسيو والأداء والأمان وتوليد العملاء المحتملين.",
        features: ["10 إضافات متميزة", "محسّن السيو", "معزز السرعة", "مجموعة الأمان", "أدوات توليد العملاء"]
      },
      fr: {
        name: "Collection de Plugins WordPress",
        desc: "10 plugins WordPress premium pour SEO, performance, sécurité et génération de leads.",
        features: ["10 plugins premium", "Optimiseur SEO", "Booster de vitesse", "Suite de sécurité", "Outils de génération de leads"]
      },
      es: {
        name: "Colección de Plugins WordPress",
        desc: "10 plugins premium de WordPress para SEO, rendimiento, seguridad y generación de leads.",
        features: ["10 plugins premium", "Optimizador SEO", "Potenciador de velocidad", "Suite de seguridad", "Herramientas de generación de leads"]
      }
    }
  },

  // ── EBOOKS ───────────────────────────────────────────────────────────────────
  {
    id: "eb-001",
    slug: "digital-marketing-mastery-guide",
    category: "ebooks",
    subcategory: "marketing",
    badge: "bestseller",
    price: 15,
    currency: "USD",
    rating: 4.9,
    reviews: 342,
    sales: 2910,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    tags: ["marketing", "business", "guide"],
    translations: {
      en: {
        name: "Digital Marketing Mastery Guide",
        desc: "Complete 200-page guide covering SEO, social media, email marketing, PPC, and conversion optimization.",
        features: ["200 pages of content", "SEO strategies", "Social media playbook", "Email marketing templates", "Conversion tactics"]
      },
      ar: {
        name: "دليل إتقان التسويق الرقمي",
        desc: "دليل شامل من 200 صفحة يغطي السيو ووسائل التواصل الاجتماعي والتسويق عبر البريد الإلكتروني.",
        features: ["200 صفحة من المحتوى", "استراتيجيات السيو", "دليل وسائل التواصل الاجتماعي", "قوالب البريد الإلكتروني", "تكتيكات التحويل"]
      },
      fr: {
        name: "Guide Maîtrise du Marketing Digital",
        desc: "Guide complet de 200 pages couvrant SEO, réseaux sociaux, email marketing et optimisation.",
        features: ["200 pages de contenu", "Stratégies SEO", "Playbook réseaux sociaux", "Templates email marketing", "Tactiques de conversion"]
      },
      es: {
        name: "Guía Maestra de Marketing Digital",
        desc: "Guía completa de 200 páginas sobre SEO, redes sociales, email marketing y optimización de conversiones.",
        features: ["200 páginas de contenido", "Estrategias SEO", "Playbook de redes sociales", "Plantillas de email marketing", "Tácticas de conversión"]
      }
    }
  },
  {
    id: "eb-002",
    slug: "freelance-success-blueprint",
    category: "ebooks",
    subcategory: "business",
    badge: "new",
    price: 12,
    currency: "USD",
    rating: 4.7,
    reviews: 198,
    sales: 1540,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    tags: ["freelance", "business", "income"],
    translations: {
      en: {
        name: "Freelance Success Blueprint",
        desc: "Step-by-step guide to building a 6-figure freelance business from scratch in 90 days.",
        features: ["Client acquisition system", "Pricing strategy", "Portfolio templates", "Contract templates", "Scaling roadmap"]
      },
      ar: {
        name: "مخطط نجاح العمل الحر",
        desc: "دليل خطوة بخطوة لبناء عمل حر بدخل 6 أرقام من الصفر في 90 يوماً.",
        features: ["نظام اكتساب العملاء", "استراتيجية التسعير", "قوالب المحفظة", "قوالب العقود", "خارطة طريق التوسع"]
      },
      fr: {
        name: "Blueprint Succès Freelance",
        desc: "Guide étape par étape pour construire une activité freelance à 6 chiffres en 90 jours.",
        features: ["Système d'acquisition clients", "Stratégie de prix", "Templates portfolio", "Templates de contrats", "Feuille de route scaling"]
      },
      es: {
        name: "Blueprint de Éxito Freelance",
        desc: "Guía paso a paso para construir un negocio freelance de 6 cifras desde cero en 90 días.",
        features: ["Sistema de adquisición de clientes", "Estrategia de precios", "Plantillas de portfolio", "Plantillas de contratos", "Hoja de ruta de escalado"]
      }
    }
  },

  // ── DESIGN ───────────────────────────────────────────────────────────────────
  {
    id: "de-001",
    slug: "brand-identity-kit-pro",
    category: "design",
    subcategory: "logos",
    badge: "trending",
    price: 39,
    currency: "USD",
    rating: 4.8,
    reviews: 127,
    sales: 720,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    tags: ["branding", "logo", "design"],
    translations: {
      en: {
        name: "Brand Identity Kit Pro",
        desc: "Complete brand identity system with 100+ logo templates, color palettes, typography sets, and brand guidelines.",
        features: ["100+ logo templates", "50 color palettes", "Typography collections", "Brand guidelines template", "Social media kit"]
      },
      ar: {
        name: "مجموعة هوية العلامة التجارية",
        desc: "نظام هوية علامة تجارية كاملة مع أكثر من 100 قالب شعار وألوان وطباعة.",
        features: ["أكثر من 100 قالب شعار", "50 لوحة ألوان", "مجموعات الطباعة", "قالب إرشادات العلامة التجارية", "مجموعة وسائل التواصل الاجتماعي"]
      },
      fr: {
        name: "Kit Identité de Marque Pro",
        desc: "Système d'identité de marque complet avec 100+ templates logo, palettes de couleurs et typographies.",
        features: ["100+ templates logo", "50 palettes de couleurs", "Collections typographiques", "Template guide de marque", "Kit réseaux sociaux"]
      },
      es: {
        name: "Kit de Identidad de Marca Pro",
        desc: "Sistema completo de identidad de marca con 100+ plantillas de logo, paletas de colores y tipografías.",
        features: ["100+ plantillas de logo", "50 paletas de colores", "Colecciones tipográficas", "Plantilla de guía de marca", "Kit de redes sociales"]
      }
    }
  },
  {
    id: "de-002",
    slug: "social-media-template-mega-pack",
    category: "design",
    subcategory: "templates",
    badge: "bestseller",
    price: 25,
    currency: "USD",
    rating: 4.9,
    reviews: 389,
    sales: 3200,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    tags: ["social media", "templates", "canva"],
    translations: {
      en: {
        name: "Social Media Template Mega Pack",
        desc: "500+ editable social media templates for Instagram, TikTok, LinkedIn, and Twitter in Canva & Figma.",
        features: ["500+ templates", "Instagram posts & stories", "TikTok thumbnails", "LinkedIn banners", "Canva & Figma formats"]
      },
      ar: {
        name: "حزمة قوالب وسائل التواصل الضخمة",
        desc: "أكثر من 500 قالب قابل للتحرير لانستغرام وتيك توك ولينكد إن وتويتر.",
        features: ["أكثر من 500 قالب", "منشورات وقصص انستغرام", "صور مصغرة لتيك توك", "لافتات لينكد إن", "صيغ Canva و Figma"]
      },
      fr: {
        name: "Mega Pack Templates Réseaux Sociaux",
        desc: "500+ templates éditables pour Instagram, TikTok, LinkedIn et Twitter en Canva & Figma.",
        features: ["500+ templates", "Posts & stories Instagram", "Miniatures TikTok", "Bannières LinkedIn", "Formats Canva & Figma"]
      },
      es: {
        name: "Mega Pack de Plantillas de Redes Sociales",
        desc: "500+ plantillas editables para Instagram, TikTok, LinkedIn y Twitter en Canva y Figma.",
        features: ["500+ plantillas", "Posts y stories de Instagram", "Miniaturas de TikTok", "Banners de LinkedIn", "Formatos Canva y Figma"]
      }
    }
  },
  {
    id: "de-003",
    slug: "premium-icon-pack-5000",
    category: "design",
    subcategory: "icons",
    badge: "new",
    price: 18,
    currency: "USD",
    rating: 4.7,
    reviews: 94,
    sales: 445,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    tags: ["icons", "ui", "design"],
    translations: {
      en: {
        name: "Premium Icon Pack 5000",
        desc: "5,000 vector icons in 10 styles — outline, filled, duotone, 3D, gradient, and more in SVG & PNG.",
        features: ["5,000 icons", "10 visual styles", "SVG & PNG formats", "Dark & light versions", "Commercial license"]
      },
      ar: {
        name: "حزمة أيقونات بريميوم 5000",
        desc: "5000 أيقونة متجهية بـ 10 أنماط بصرية في صيغ SVG و PNG.",
        features: ["5,000 أيقونة", "10 أنماط بصرية", "صيغ SVG و PNG", "إصدارات داكنة وفاتحة", "ترخيص تجاري"]
      },
      fr: {
        name: "Pack Icônes Premium 5000",
        desc: "5 000 icônes vectorielles en 10 styles — contour, rempli, duotone, 3D, dégradé en SVG & PNG.",
        features: ["5 000 icônes", "10 styles visuels", "Formats SVG & PNG", "Versions sombre & claire", "Licence commerciale"]
      },
      es: {
        name: "Pack de Iconos Premium 5000",
        desc: "5,000 iconos vectoriales en 10 estilos — contorno, relleno, duotono, 3D, gradiente en SVG y PNG.",
        features: ["5,000 iconos", "10 estilos visuales", "Formatos SVG y PNG", "Versiones oscura y clara", "Licencia comercial"]
      }
    }
  },

  // ── DIGITAL SERVICES ─────────────────────────────────────────────────────────
  {
    id: "ds-001",
    slug: "seo-starter-kit-2025",
    category: "services",
    subcategory: "seo",
    badge: "trending",
    price: 35,
    currency: "USD",
    rating: 4.8,
    reviews: 201,
    sales: 1120,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
    tags: ["seo", "marketing", "keywords"],
    translations: {
      en: {
        name: "SEO Starter Kit 2025",
        desc: "Complete SEO resource pack with keyword research databases, backlink templates, and audit checklists.",
        features: ["10,000+ keyword database", "Backlink outreach templates", "Technical SEO checklist", "Content brief templates", "Monthly tracking sheets"]
      },
      ar: {
        name: "مجموعة السيو الاستارتر 2025",
        desc: "حزمة موارد سيو كاملة مع قواعد بيانات الكلمات المفتاحية وقوالب الروابط الخلفية.",
        features: ["قاعدة بيانات 10,000+ كلمة مفتاحية", "قوالب التواصل للروابط الخلفية", "قائمة مراجعة السيو التقني", "قوالب ملخصات المحتوى", "جداول التتبع الشهري"]
      },
      fr: {
        name: "Kit Démarrage SEO 2025",
        desc: "Pack ressources SEO complet avec bases de données de mots-clés, templates de backlinks et checklists.",
        features: ["Base de données 10 000+ mots-clés", "Templates outreach backlinks", "Checklist SEO technique", "Templates de briefs contenu", "Tableaux de suivi mensuel"]
      },
      es: {
        name: "Kit de Inicio SEO 2025",
        desc: "Pack completo de recursos SEO con bases de datos de palabras clave, plantillas de backlinks y checklists.",
        features: ["Base de datos 10,000+ palabras clave", "Plantillas de outreach para backlinks", "Checklist de SEO técnico", "Plantillas de briefs de contenido", "Hojas de seguimiento mensual"]
      }
    }
  },
  {
    id: "ds-002",
    slug: "email-marketing-campaign-pack",
    category: "services",
    subcategory: "marketing",
    badge: "bestseller",
    price: 22,
    currency: "USD",
    rating: 4.9,
    reviews: 267,
    sales: 1890,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    tags: ["email", "marketing", "campaigns"],
    translations: {
      en: {
        name: "Email Marketing Campaign Pack",
        desc: "100+ high-converting email templates for welcome series, nurture campaigns, sales funnels, and re-engagement.",
        features: ["100+ email templates", "Welcome series (7 emails)", "Sales funnel sequences", "Re-engagement campaigns", "A/B testing guide"]
      },
      ar: {
        name: "حزمة حملات التسويق عبر البريد الإلكتروني",
        desc: "أكثر من 100 قالب بريد إلكتروني عالي التحويل لسلاسل الترحيب وحملات التغذية.",
        features: ["أكثر من 100 قالب بريد إلكتروني", "سلسلة الترحيب (7 رسائل)", "تسلسلات مسار المبيعات", "حملات إعادة التفاعل", "دليل اختبار A/B"]
      },
      fr: {
        name: "Pack Campagnes Email Marketing",
        desc: "100+ templates email haute conversion pour séries de bienvenue, campagnes nurture et entonnoirs de vente.",
        features: ["100+ templates email", "Série de bienvenue (7 emails)", "Séquences entonnoir de vente", "Campagnes de réengagement", "Guide A/B testing"]
      },
      es: {
        name: "Pack de Campañas de Email Marketing",
        desc: "100+ plantillas de email de alta conversión para series de bienvenida, campañas de nurturing y embudos de ventas.",
        features: ["100+ plantillas de email", "Serie de bienvenida (7 emails)", "Secuencias de embudo de ventas", "Campañas de reengagement", "Guía de A/B testing"]
      }
    }
  },

  // ── GAMING ───────────────────────────────────────────────────────────────────
  {
    id: "gm-001",
    slug: "ultimate-fps-strategy-guide",
    category: "gaming",
    subcategory: "guides",
    badge: "trending",
    price: 9,
    currency: "USD",
    rating: 4.7,
    reviews: 312,
    sales: 2300,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
    tags: ["gaming", "fps", "strategy"],
    translations: {
      en: {
        name: "Ultimate FPS Strategy Guide",
        desc: "Master-level guide covering aim training, game sense, positioning, economy management, and team communication.",
        features: ["Aim training program", "Advanced positioning guide", "Economy management", "Communication callouts", "Mental performance tips"]
      },
      ar: {
        name: "دليل الاستراتيجية الشامل للألعاب",
        desc: "دليل على مستوى الماسترز يغطي تدريب التصويب والفهم اللعبي والتموضع.",
        features: ["برنامج تدريب التصويب", "دليل التموضع المتقدم", "إدارة الاقتصاد", "نداءات التواصل", "نصائح الأداء الذهني"]
      },
      fr: {
        name: "Guide Stratégie FPS Ultime",
        desc: "Guide niveau master couvrant l'entraînement à la visée, la game sense, le positionnement et la communication.",
        features: ["Programme d'entraînement à la visée", "Guide positionnement avancé", "Gestion de l'économie", "Callouts de communication", "Conseils de performance mentale"]
      },
      es: {
        name: "Guía de Estrategia FPS Definitiva",
        desc: "Guía de nivel maestro sobre entrenamiento de puntería, game sense, posicionamiento y comunicación.",
        features: ["Programa de entrenamiento de puntería", "Guía de posicionamiento avanzado", "Gestión de economía", "Callouts de comunicación", "Consejos de rendimiento mental"]
      }
    }
  },
  {
    id: "gm-002",
    slug: "game-streaming-starter-pack",
    category: "gaming",
    subcategory: "assets",
    badge: "new",
    price: 16,
    currency: "USD",
    rating: 4.8,
    reviews: 143,
    sales: 870,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80",
    tags: ["streaming", "twitch", "overlay"],
    translations: {
      en: {
        name: "Game Streaming Starter Pack",
        desc: "Complete streaming package with animated overlays, alerts, panels, stream schedule templates, and brand kit.",
        features: ["Animated stream overlays", "Alert animations", "Stream panels set", "Schedule templates", "Discord server template"]
      },
      ar: {
        name: "حزمة البث المباشر للألعاب",
        desc: "حزمة بث كاملة مع تراكبات متحركة وتنبيهات ولوحات وقوالب جدول البث.",
        features: ["تراكبات البث المتحركة", "رسوم تنبيه متحركة", "مجموعة لوحات البث", "قوالب الجدول الزمني", "قالب سيرفر ديسكورد"]
      },
      fr: {
        name: "Pack Démarrage Stream Gaming",
        desc: "Package streaming complet avec overlays animés, alertes, panneaux et templates de planning.",
        features: ["Overlays de stream animés", "Animations d'alertes", "Set de panneaux stream", "Templates de planning", "Template serveur Discord"]
      },
      es: {
        name: "Pack de Inicio de Streaming Gaming",
        desc: "Paquete completo de streaming con overlays animados, alertas, paneles y plantillas de horario.",
        features: ["Overlays de stream animados", "Animaciones de alertas", "Set de paneles de stream", "Plantillas de horario", "Plantilla de servidor Discord"]
      }
    }
  },

  // ── AI RESOURCES ─────────────────────────────────────────────────────────────
  {
    id: "ai-001",
    slug: "chatgpt-mega-prompt-library",
    category: "ai",
    subcategory: "prompts",
    badge: "bestseller",
    price: 27,
    currency: "USD",
    rating: 4.9,
    reviews: 521,
    sales: 4100,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    tags: ["ai", "chatgpt", "prompts"],
    translations: {
      en: {
        name: "ChatGPT Mega Prompt Library",
        desc: "1,000+ battle-tested prompts for marketing, coding, writing, analysis, business strategy, and creative work.",
        features: ["1,000+ curated prompts", "Marketing category (200 prompts)", "Coding & development prompts", "Content writing prompts", "Business strategy prompts"]
      },
      ar: {
        name: "مكتبة برومبتات ChatGPT الضخمة",
        desc: "أكثر من 1000 برومبت مختبر للتسويق والبرمجة والكتابة والتحليل واستراتيجية الأعمال.",
        features: ["أكثر من 1,000 برومبت منسق", "قسم التسويق (200 برومبت)", "برومبتات البرمجة والتطوير", "برومبتات كتابة المحتوى", "برومبتات استراتيجية الأعمال"]
      },
      fr: {
        name: "Méga Bibliothèque Prompts ChatGPT",
        desc: "1 000+ prompts éprouvés pour marketing, codage, rédaction, analyse et stratégie business.",
        features: ["1 000+ prompts sélectionnés", "Catégorie marketing (200 prompts)", "Prompts coding & développement", "Prompts rédaction de contenu", "Prompts stratégie business"]
      },
      es: {
        name: "Mega Biblioteca de Prompts ChatGPT",
        desc: "1,000+ prompts probados para marketing, programación, escritura, análisis y estrategia de negocios.",
        features: ["1,000+ prompts seleccionados", "Categoría marketing (200 prompts)", "Prompts de programación y desarrollo", "Prompts de escritura de contenido", "Prompts de estrategia de negocios"]
      }
    }
  },
  {
    id: "ai-002",
    slug: "ai-automation-workflow-templates",
    category: "ai",
    subcategory: "workflows",
    badge: "trending",
    price: 33,
    currency: "USD",
    rating: 4.8,
    reviews: 178,
    sales: 980,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    tags: ["ai", "automation", "workflow"],
    translations: {
      en: {
        name: "AI Automation Workflow Templates",
        desc: "50 ready-to-use automation workflows for Make.com and Zapier covering content creation, lead gen, and CRM automation.",
        features: ["50 automation templates", "Make.com workflows", "Zapier integrations", "Content generation flows", "Lead capture automation"]
      },
      ar: {
        name: "قوالب سير عمل أتمتة الذكاء الاصطناعي",
        desc: "50 سير عمل أتمتة جاهزة لـ Make.com و Zapier تغطي إنشاء المحتوى وتوليد العملاء.",
        features: ["50 قالب أتمتة", "سير عمل Make.com", "تكاملات Zapier", "تدفقات إنشاء المحتوى", "أتمتة التقاط العملاء المحتملين"]
      },
      fr: {
        name: "Templates Workflows Automation IA",
        desc: "50 workflows d'automatisation prêts à l'emploi pour Make.com et Zapier.",
        features: ["50 templates d'automatisation", "Workflows Make.com", "Intégrations Zapier", "Flux de génération de contenu", "Automatisation capture leads"]
      },
      es: {
        name: "Plantillas de Flujos de Trabajo de Automatización IA",
        desc: "50 flujos de trabajo de automatización listos para usar en Make.com y Zapier.",
        features: ["50 plantillas de automatización", "Flujos de trabajo Make.com", "Integraciones Zapier", "Flujos de generación de contenido", "Automatización de captura de leads"]
      }
    }
  },
  {
    id: "ai-003",
    slug: "midjourney-prompt-masterclass",
    category: "ai",
    subcategory: "prompts",
    badge: "new",
    price: 21,
    currency: "USD",
    rating: 4.7,
    reviews: 134,
    sales: 760,
    image: "https://images.unsplash.com/photo-1681412332145-30b88e7f2b6e?w=600&q=80",
    tags: ["midjourney", "ai art", "prompts"],
    translations: {
      en: {
        name: "Midjourney Prompt Masterclass",
        desc: "500+ Midjourney v6 prompts with style guides, negative prompts, and parameter cheat sheets for stunning AI art.",
        features: ["500+ Midjourney prompts", "Style reference library", "Negative prompt guide", "Parameter cheat sheet", "Commercial usage tips"]
      },
      ar: {
        name: "ماستركلاس برومبتات Midjourney",
        desc: "أكثر من 500 برومبت لـ Midjourney v6 مع أدلة الأسلوب والمعامل.",
        features: ["أكثر من 500 برومبت Midjourney", "مكتبة مراجع الأسلوب", "دليل البرومبتات السلبية", "ورقة غش المعامل", "نصائح الاستخدام التجاري"]
      },
      fr: {
        name: "Masterclass Prompts Midjourney",
        desc: "500+ prompts Midjourney v6 avec guides de style, prompts négatifs et anti-sèches de paramètres.",
        features: ["500+ prompts Midjourney", "Bibliothèque de références de style", "Guide des prompts négatifs", "Anti-sèche des paramètres", "Conseils d'utilisation commerciale"]
      },
      es: {
        name: "Masterclass de Prompts Midjourney",
        desc: "500+ prompts de Midjourney v6 con guías de estilo, prompts negativos y hojas de trucos de parámetros.",
        features: ["500+ prompts Midjourney", "Biblioteca de referencias de estilo", "Guía de prompts negativos", "Hoja de trucos de parámetros", "Consejos de uso comercial"]
      }
    }
  }
];

const REVIEWS = [
  { id: 1, productId: "ai-001", author: "Sarah K.", country: "🇺🇸", rating: 5, date: "2025-05-12", text: "Absolutely worth every penny. These prompts have transformed how I create content. My productivity is up 3x." },
  { id: 2, productId: "sw-001", author: "Mohammed A.", country: "🇦🇪", rating: 5, date: "2025-05-08", text: "The Notion templates are exceptional. Saved me weeks of setup time. Highly recommended." },
  { id: 3, productId: "de-002", author: "Camille D.", country: "🇫🇷", rating: 5, date: "2025-04-30", text: "Ces templates sont magnifiques. J'ai redessiné tout mon feed Instagram en une heure. Impressionnant!" },
  { id: 4, productId: "eb-001", author: "Carlos M.", country: "🇲🇽", rating: 4, date: "2025-04-22", text: "El libro es muy completo. Implementé las estrategias de SEO y mis visitas crecieron 200% en 2 meses." },
  { id: 5, productId: "gm-001", author: "Alex R.", country: "🇬🇧", rating: 5, date: "2025-04-18", text: "Went from Silver to Diamond in 3 weeks using the aim training program. Life-changing guide." },
  { id: 6, productId: "ai-002", author: "Fatima Z.", country: "🇲🇦", rating: 5, date: "2025-05-01", text: "These Make.com workflows saved my agency so much time. Client onboarding is now fully automated." },
  { id: 7, productId: "ds-002", author: "Emma T.", country: "🇦🇺", rating: 5, date: "2025-04-15", text: "My email open rates went from 18% to 42% using these templates. The copy is just outstanding." },
  { id: 8, productId: "sw-002", author: "Karim B.", country: "🇩🇿", rating: 4, date: "2025-03-28", text: "Les scripts Python sont très bien documentés. J'ai automatisé mon workflow en quelques heures." }
];

const FEATURED_IDS = ["ai-001", "de-002", "sw-001", "eb-001", "ds-002", "gm-002"];
const TRENDING_IDS = ["ai-002", "sw-003", "de-001", "ds-001", "gm-001", "ai-003"];
const NEW_IDS = ["sw-002", "eb-002", "de-003", "gm-002", "ai-003"];

if (typeof module !== 'undefined') module.exports = { PRODUCTS, REVIEWS, FEATURED_IDS, TRENDING_IDS, NEW_IDS };
