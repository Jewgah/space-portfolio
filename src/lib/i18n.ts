import type { Metadata } from "next";
import type { SectionId } from "./journey";
import {
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
  type Job,
  type Project,
} from "./data";

/**
 * Locale-keyed content. English lives in data.ts (single source of truth for
 * structure, links, colors, tags); FR/HE overlay only the human text, so
 * adding a project or reordering jobs can never drift the translations'
 * non-text fields.
 */

export type Locale = "en" | "fr" | "he";
export const LOCALES: Locale[] = ["en", "fr", "he"];
export const LOCALE_PATH: Record<Locale, string> = {
  en: "/",
  fr: "/fr",
  he: "/he",
};

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

const UI_EN = {
  nav: {
    about: "About",
    work: "Work",
    projects: "Projects",
    contact: "Contact",
    resume: "Résumé",
    backToTop: "Back to top",
  },
  /** Section labels for the HUD rail + mobile dots. */
  sections: {
    hero: "Home",
    launch: "Launch",
    about: "About",
    experience: "Work",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  } as Record<SectionId, string>,
  goTo: "Go to",
  hero: { scrollTo: "Scroll To", explore: "Explore" },
  about: {
    kicker: "01 // About",
    /** [before-highlight, highlight] */
    h: ["Full stack, fewer ", "bottlenecks"] as [string, string],
  },
  experience: { kicker: "02 // Where I've worked" },
  skills: {
    kicker: "// Systems check",
    title: "Skill modules online",
    hint: "FLY THROUGH THE CALIBRATION CORRIDOR",
  },
  projects: {
    kicker: "03 // Some things I've built",
    title: "Projects in orbit",
    hint: "▸ CLICK A CARD TO INSPECT",
    archive: "Explore the archive ↗",
    targetLocked: "TARGET LOCKED",
  },
  contact: {
    kicker: "04 // What's next",
    /** [before-highlight, highlight, after] */
    h: ["Let's make something ", "together", "."] as [string, string, string],
    copy: "I'm currently open to new opportunities — full-time, contract, or just a good chat. Whether you have a project idea, a question, or you just want to say hi, my inbox is the best way to reach me.",
    cta: "Contact me →",
    note: "Opens my contact page — I reply within 24h",
  },
  modal: {
    brief: "▸ MISSION BRIEF",
    featured: "★ FEATURED PROJECT",
    visit: "Visit project",
    close: "Close",
  },
  loader: "Initializing Launch Sequence",
  mobile: { hint: "Move · drag to look", forward: "Move forward", back: "Move back" },
  /** Giant billboard labels + decals baked into the 3D scene. */
  scene: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    contact: "CONTACT",
    workLog: "WORK LOG",
    featured: "★ FEATURED",
  },
  seo: {
    aboutTitle: "About",
    experienceTitle: "Experience",
    projectsTitle: "Projects",
    skillsTitle: "Skills",
    educationTitle: "Education & Credentials",
    contactTitle: "Contact",
    basedIn: "Based in",
    builtWith: "Built with:",
    email: "Email:",
    location: "Location:",
    resumePdf: "Résumé (PDF)",
  },
};

export type UIStrings = typeof UI_EN;

const UI_FR: UIStrings = {
  nav: {
    about: "À propos",
    work: "Parcours",
    projects: "Projets",
    contact: "Contact",
    resume: "CV",
    backToTop: "Revenir en haut",
  },
  sections: {
    hero: "Accueil",
    launch: "Décollage",
    about: "À propos",
    experience: "Parcours",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },
  goTo: "Aller à",
  hero: { scrollTo: "Scrollez", explore: "Explorez" },
  about: {
    kicker: "01 // À propos",
    h: ["Full stack, moins de ", "blocages"],
  },
  experience: { kicker: "02 // Mon parcours" },
  skills: {
    kicker: "// Vérification des systèmes",
    title: "Modules de compétences en ligne",
    hint: "TRAVERSEZ LE COULOIR DE CALIBRATION",
  },
  projects: {
    kicker: "03 // Ce que j'ai construit",
    title: "Projets en orbite",
    hint: "▸ CLIQUEZ SUR UNE CARTE POUR INSPECTER",
    archive: "Explorer les archives ↗",
    targetLocked: "CIBLE VERROUILLÉE",
  },
  contact: {
    kicker: "04 // La suite",
    h: ["Construisons quelque chose ", "ensemble", "."],
    copy: "Je suis actuellement ouvert à de nouvelles opportunités — temps plein, freelance, ou simplement une bonne discussion. Une idée de projet, une question, ou juste envie de dire bonjour : ma boîte mail est le meilleur moyen de me joindre.",
    cta: "Me contacter →",
    note: "Ouvre ma page contact — je réponds sous 24h",
  },
  modal: {
    brief: "▸ BRIEFING DE MISSION",
    featured: "★ PROJET PHARE",
    visit: "Voir le projet",
    close: "Fermer",
  },
  loader: "Initialisation de la séquence de lancement",
  mobile: { hint: "Avancer · glisser pour regarder", forward: "Avancer", back: "Reculer" },
  scene: {
    about: "À PROPOS",
    projects: "PROJETS",
    contact: "CONTACT",
    workLog: "JOURNAL DE BORD",
    featured: "★ À LA UNE",
  },
  seo: {
    aboutTitle: "À propos",
    experienceTitle: "Expérience",
    projectsTitle: "Projets",
    skillsTitle: "Compétences",
    educationTitle: "Formation & Diplômes",
    contactTitle: "Contact",
    basedIn: "Basé en",
    builtWith: "Construit avec :",
    email: "Email :",
    location: "Localisation :",
    resumePdf: "CV (PDF)",
  },
};

const UI_HE: UIStrings = {
  nav: {
    about: "עליי",
    work: "ניסיון",
    projects: "פרויקטים",
    contact: "צור קשר",
    resume: "קו״ח",
    backToTop: "חזרה למעלה",
  },
  sections: {
    hero: "בית",
    launch: "המראה",
    about: "עליי",
    experience: "ניסיון",
    skills: "כישורים",
    projects: "פרויקטים",
    contact: "צור קשר",
  },
  goTo: "מעבר אל",
  hero: { scrollTo: "גללו", explore: "וגלו" },
  about: {
    kicker: "01 // עליי",
    h: ["פול סטאק, פחות ", "צווארי בקבוק"],
  },
  experience: { kicker: "02 // איפה עבדתי" },
  skills: {
    kicker: "// בדיקת מערכות",
    title: "מודולי כישורים באוויר",
    hint: "טוסו דרך מסדרון הכיול",
  },
  projects: {
    kicker: "03 // דברים שבניתי",
    title: "פרויקטים במסלול",
    hint: "▸ לחצו על כרטיס לבדיקה",
    archive: "לארכיון המלא ↗",
    targetLocked: "מטרה ננעלה",
  },
  contact: {
    kicker: "04 // מה הלאה",
    h: ["בואו נבנה משהו ", "ביחד", "."],
    copy: "אני פתוח כרגע להזדמנויות חדשות — משרה מלאה, פרויקט, או סתם שיחה טובה. יש לכם רעיון, שאלה, או סתם בא לכם להגיד שלום? המייל הוא הדרך הכי טובה להשיג אותי.",
    cta: "דברו איתי ←",
    note: "נפתח עמוד יצירת הקשר שלי — אני עונה תוך 24 שעות",
  },
  modal: {
    brief: "▸ תדריך משימה",
    featured: "★ פרויקט מוביל",
    visit: "לצפייה בפרויקט",
    close: "סגירה",
  },
  loader: "מאתחל רצף שיגור",
  mobile: { hint: "תנועה · גררו להסתכל", forward: "קדימה", back: "אחורה" },
  scene: {
    about: "עליי",
    projects: "פרויקטים",
    contact: "צור קשר",
    workLog: "יומן עבודה",
    featured: "★ מומלץ",
  },
  seo: {
    aboutTitle: "עליי",
    experienceTitle: "ניסיון",
    projectsTitle: "פרויקטים",
    skillsTitle: "כישורים",
    educationTitle: "השכלה והסמכות",
    contactTitle: "יצירת קשר",
    basedIn: "מבוסס ב",
    builtWith: "נבנה עם:",
    email: "אימייל:",
    location: "מיקום:",
    resumePdf: "קורות חיים (PDF)",
  },
};

/* ------------------------------------------------------------------ */
/* Content text overlays                                               */
/* ------------------------------------------------------------------ */

type ProfileText = {
  role: string;
  status: string;
  bio: string;
  location: string;
  about: (typeof PROFILE)["about"];
};

type JobText = Pick<Job, "title" | "range" | "location" | "blurb" | "points">;
type ProjectText = Pick<Project, "meta" | "tagline" | "description" | "linkLabel">;

type LocalePack = {
  profile: ProfileText;
  /** Same order as EXPERIENCE. */
  jobs: JobText[];
  /** Same order as SKILLS; items (tech names) stay English. */
  skillNames: string[];
  projects: Record<string, ProjectText>;
  ui: UIStrings;
};

const FR: LocalePack = {
  profile: {
    role: "Ingénieur Full Stack",
    status: "Ingénieur Full Stack · je livre des produits IA depuis Israël",
    bio: "Ingénieur full stack avec plus de 5 ans d'expérience dans les produits IA et les systèmes en production, en fintech et SaaS — plus de 20 applications livrées du concept à la production, d'une infrastructure de paiement couvrant 20+ marchés africains à des plateformes IA pour l'hôtellerie, la construction et la vente. Je travaille avec un workflow intensif augmenté par l'IA : plusieurs projets en parallèle, avec des agents IA comme extension de l'équipe.",
    location: "Israël",
    about: {
      lead: "Je travaille sur toute la stack pour réduire les dépendances et avancer plus vite — conception d'API, développement frontend et mobile — pour que les produits sortent sans goulots d'étranglement.",
      p2: "Chez JD Solutions, je gère les projets clients de bout en bout, de l'architecture au déploiement ; avec mon studio Hakolkal, j'ai livré plus de 20 plateformes web et mobiles sur mesure — fintech, SaaS, marketplace, ONG — en intégrant IA conversationnelle, recherche sémantique et automatisation dans des produits réels.",
      p3: "Je construis des systèmes simples, rapides et maintenables — pensés pour l'usage réel, pas seulement pour la propreté du code. Licence en mathématiques et informatique, vétéran de l'unité Cyber de Tsahal, trilingue.",
      credentials: [
        "Licence Mathématiques & Informatique — Université d'Ariel",
        "Génie aérospatial — Technion, Haïfa",
        "Vétéran du département Cyber de Tsahal",
        "Trilingue — Anglais · Français · Hébreu",
      ],
    },
  },
  jobs: [
    {
      title: "Ingénieur Full Stack",
      range: "2024 — aujourd'hui",
      location: "À distance · Israël",
      blurb:
        "Projets clients gérés de bout en bout — de l'architecture au déploiement — sur une stack augmentée par l'IA qui fait tourner plusieurs produits en parallèle.",
      points: [
        "Gestion des projets clients de bout en bout, de l'architecture au déploiement, en traduisant des besoins complexes en fonctionnalités scalables",
        "Développement d'outils internes et de fonctionnalités CRM propulsés par l'IA avec Node.js, TypeScript, React et PHP",
        "Automatisation de workflows métier et intégration d'API LLM dans les systèmes de gestion client",
        "Plusieurs projets menés en parallèle avec des agents IA qui démultiplient la capacité d'ingénierie",
      ],
    },
    {
      title: "Fondateur & Ingénieur Full Stack",
      range: "2021 — aujourd'hui",
      location: "Freelance · en parallèle de postes à temps plein",
      blurb:
        "Mon studio — plus de 20 plateformes web et mobiles sur mesure livrées : fintech, SaaS, marketplace, ONG.",
      points: [
        "Plus de 20 plateformes web et mobiles sur mesure livrées à des clients — fintech, SaaS, marketplace, ONG",
        "Agents IA conversationnels, recherche sémantique, vérification d'identité et automatisation de processus intégrés aux produits clients",
        "Développement d'Adencer — plateforme de marketing d'influence avec gestion de campagnes, découverte de créateurs et paiements Stripe",
        "Création de Destins de Femmes — site d'ONG récompensé par le Prix Edgar Faure 2024",
        "Cycle complet en autonomie : cadrage, architecture, développement, déploiement et relation client",
      ],
    },
    {
      title: "Développeur Full Stack",
      range: "2022 — 2024",
      location: "À distance",
      blurb:
        "Infrastructure de paiement du plus grand gateway d'Afrique — 20+ pays, PCI DSS niveau 1.",
      points: [
        "Développement et maintenance de l'infrastructure de paiement du plus grand gateway d'Afrique (20+ pays, PCI DSS niveau 1)",
        "Flux de transactions multi-devises intégrant Visa, Mastercard, Amex et le mobile money",
        "API REST sécurisées et journalisation d'audit pour des paiements conformes PCI",
        "Refonte du code legacy pour améliorer fiabilité et scalabilité",
      ],
    },
  ],
  skillNames: [
    "Frontend",
    "Backend",
    "IA & Automatisation",
    "Cloud & Infra",
    "Paiements & Data",
    "Langages",
  ],
  projects: {
    fashnable: {
      meta: "2025 · Fondateur · SaaS IA",
      tagline: "Photo de vêtement à plat → vidéo d'un mannequin IA qui le porte",
      description:
        "SaaS d'essayage virtuel par IA : transforme une photo de vêtement à plat en vidéo réaliste d'un mannequin IA qui le porte — genre, âge, morphologie, origine et arrière-plan au choix. Un produit complet : accès sur invitation, registre de crédits, génération asynchrone via Cloud Tasks et facturation Lemon Squeezy.",
      linkLabel: "Voir Fashnable",
    },
    fixhos: {
      meta: "2025 · Co-fondateur · IA",
      tagline: "Ticketing IA pour l'hôtellerie",
      description:
        "Triage automatique des demandes clients depuis WhatsApp, l'email et les plateformes de réservation (Airbnb, Booking.com), avec classification IA, escalade par SLA, routage d'appels vocaux et une marketplace de techniciens vérifiés.",
      linkLabel: "Voir Fixhos",
    },
    kaplapp: {
      meta: "2024 · Co-fondateur · Plateforme",
      tagline: "Plateforme IA de gestion de chantier",
      description:
        "Analyses IA des budgets et plannings de projets, diagrammes de Gantt interactifs et visualisations financières pour les équipes de construction.",
      linkLabel: "Voir Kaplapp",
    },
    finterest: {
      meta: "2024 · IA · Ventes",
      tagline: "Plateforme IA de prospection et d'outreach",
      description:
        "Séquences d'outreach générées par IA, scoring de qualification des leads, synchronisation CRM et analytics de campagne en temps réel pour les équipes commerciales.",
      linkLabel: "Voir Finterest",
    },
    infinify: {
      meta: "2024 · Co-fondateur · IA",
      tagline: "De la stratégie à la production en 6 semaines",
      description:
        "Studio de conseil en IA qui amène ses clients de la stratégie à la production en six semaines — analyses prédictives, automatisation de workflows et assistants IA conversationnels, livrés de bout en bout.",
      linkLabel: "Voir Infinify",
    },
    shippost: {
      meta: "2026 · Open source · IA",
      tagline: "Activité git → brouillons LinkedIn classés",
      description:
        "Outil local-first qui exploite l'activité git et rédige des posts LinkedIn classés via un moteur Claude Code multi-passes, avec une app de relecture Next.js.",
      linkLabel: "Voir sur GitHub",
    },
    "claude-code-skills": {
      meta: "2026 · Open source · IA",
      tagline: "Workflows de dev multi-agents pour livrer en sécurité",
      description:
        "Des skills Claude Code éprouvées : une revue de code multi-agents qui déploie des relecteurs spécialisés et vérifie leurs conclusions de façon adversariale, un relecteur de plan avant implémentation et un générateur d'équipes d'agents adapté à la stack.",
      linkLabel: "Voir sur GitHub",
    },
  },
  ui: UI_FR,
};

const HE: LocalePack = {
  profile: {
    role: "מהנדס פול סטאק",
    status: "מהנדס פול סטאק · בונה מוצרי AI מישראל",
    bio: "מהנדס פול סטאק עם ניסיון של יותר מ-5 שנים בבניית מוצרי AI ומערכות פרודקשן בפינטק ו-SaaS — יותר מ-20 אפליקציות מהרעיון ועד פרודקשן, מתשתיות תשלומים ב-20+ שווקים באפריקה ועד פלטפורמות AI לתחומי האירוח, הבנייה והמכירות. אני עובד בשיטת עבודה אינטנסיבית מבוססת AI: כמה פרויקטים במקביל, עם סוכני AI כהרחבה של הצוות.",
    location: "ישראל",
    about: {
      lead: "אני עובד על כל שכבות המערכת כדי לצמצם תלות ולהתקדם מהר — תכנון API, פיתוח פרונטאנד ומובייל — כך שמוצרים יוצאים לאוויר בלי צווארי בקבוק.",
      p2: "ב-JD Solutions אני מוביל פרויקטים של לקוחות מקצה לקצה, מארכיטקטורה ועד דיפלוי; דרך הסטודיו שלי, Hakolkal, שחררתי יותר מ-20 פלטפורמות web ומובייל בהתאמה אישית בפינטק, SaaS, מרקטפלייס ועמותות — עם AI שיחתי, חיפוש סמנטי ואוטומציה בתוך מוצרים אמיתיים.",
      p3: "אני בונה מערכות פשוטות, מהירות וברות-תחזוקה — מתוכננות לשימוש אמיתי, לא רק לקוד נקי. תואר ראשון במתמטיקה ומדעי המחשב, יוצא מערך הסייבר בצה\"ל, דובר שלוש שפות.",
      credentials: [
        "תואר ראשון במתמטיקה ומדעי המחשב — אוניברסיטת אריאל",
        "הנדסת אווירונאוטיקה וחלל — הטכניון, חיפה",
        "יוצא מערך הסייבר בצה\"ל",
        "שלוש שפות — אנגלית · צרפתית · עברית",
      ],
    },
  },
  jobs: [
    {
      title: "מהנדס פול סטאק",
      range: "2024 — היום",
      location: "מרחוק · ישראל",
      blurb:
        "הובלת פרויקטים של לקוחות מקצה לקצה — מארכיטקטורה ועד דיפלוי — על סטאק מבוסס AI שמריץ כמה מוצרים במקביל.",
      points: [
        "הובלת פרויקטים של לקוחות מקצה לקצה, מארכיטקטורה ועד דיפלוי, תוך תרגום דרישות מורכבות לפיצ'רים סקיילביליים",
        "פיתוח כלים פנימיים ופיצ'רים ל-CRM מבוססי AI עם Node.js, TypeScript, React ו-PHP",
        "אוטומציה של תהליכים עסקיים ואינטגרציה של API-י LLM במערכות ניהול לקוחות",
        "ניהול כמה פרויקטים במקביל עם סוכני AI שמרחיבים את יכולת הפיתוח",
      ],
    },
    {
      title: "מייסד ומהנדס פול סטאק",
      range: "2021 — היום",
      location: "פרילנס · במקביל למשרות מלאות",
      blurb:
        "הסטודיו שלי — יותר מ-20 פלטפורמות web ומובייל בהתאמה אישית: פינטק, SaaS, מרקטפלייס ועמותות.",
      points: [
        "שחרור של יותר מ-20 פלטפורמות web ומובייל בהתאמה אישית ללקוחות בפינטק, SaaS, מרקטפלייס ועמותות",
        "בניית סוכני AI שיחתיים, חיפוש סמנטי, אימות זהות ואוטומציה של תהליכים בתוך מוצרי לקוחות",
        "פיתוח Adencer — פלטפורמת שיווק משפיענים עם ניהול קמפיינים, גילוי יוצרים ותשלומי Stripe",
        "בניית Destins de Femmes — אתר עמותה שזכה בפרס Edgar Faure 2024",
        "אחריות על כל מחזור החיים: אפיון, ארכיטקטורה, פיתוח, דיפלוי וקשרי לקוחות",
      ],
    },
    {
      title: "מפתח פול סטאק",
      range: "2022 — 2024",
      location: "מרחוק",
      blurb:
        "תשתיות תשלומים לשער התשלומים הגדול באפריקה — 20+ מדינות, PCI DSS רמה 1.",
      points: [
        "בנייה ותחזוקה של תשתיות תשלומים לשער התשלומים הגדול באפריקה (20+ מדינות, PCI DSS רמה 1)",
        "פיתוח זרימות עסקאות רב-מטבעיות עם Visa, Mastercard, Amex ותשלומי מובייל",
        "מימוש API-ים מאובטחים ולוגי ביקורת לסליקה תואמת PCI",
        "ריפקטור לקוד legacy לשיפור אמינות וסקיילביליות",
      ],
    },
  ],
  skillNames: [
    "פרונטאנד",
    "בקאנד",
    "AI ואוטומציה",
    "ענן ותשתיות",
    "תשלומים ודאטה",
    "שפות",
  ],
  projects: {
    fashnable: {
      meta: "2025 · מייסד · SaaS AI",
      tagline: "תמונת בגד שטוחה → וידאו של דוגמן AI לובש אותו",
      description:
        "SaaS למדידה וירטואלית מבוססת AI: הופך תמונה שטוחה של בגד לווידאו ריאליסטי של דוגמן AI שלובש אותו — עם בחירת מגדר, גיל, מבנה גוף, מוצא ורקע. מוצר מלא: גישה בהזמנה בלבד, מערכת קרדיטים, יצירה אסינכרונית עם Cloud Tasks וחיוב דרך Lemon Squeezy.",
      linkLabel: "לביקור ב-Fashnable",
    },
    fixhos: {
      meta: "2025 · מייסד-שותף · AI",
      tagline: "מערכת קריאות שירות AI לתחום האירוח",
      description:
        "טריאז' אוטומטי של פניות אורחים מ-WhatsApp, מייל ופלטפורמות הזמנה (Airbnb, Booking.com) עם סיווג AI, אסקלציה לפי SLA, ניתוב שיחות קוליות ומרקטפלייס של טכנאים מאומתים.",
      linkLabel: "לביקור ב-Fixhos",
    },
    kaplapp: {
      meta: "2024 · מייסד-שותף · פלטפורמה",
      tagline: "פלטפורמת AI לניהול בנייה",
      description:
        "תובנות AI על תקציבי פרויקטים ולוחות זמנים, תרשימי גאנט אינטראקטיביים וויזואליזציות פיננסיות לצוותי בנייה.",
      linkLabel: "לביקור ב-Kaplapp",
    },
    finterest: {
      meta: "2024 · AI · מכירות",
      tagline: "פלטפורמת AI לפרוספקטינג ופנייה ללקוחות",
      description:
        "רצפי פנייה שנוצרים ב-AI, ניקוד והסמכת לידים, סנכרון CRM ואנליטיקת קמפיינים בזמן אמת לצוותי מכירות.",
      linkLabel: "לביקור ב-Finterest",
    },
    infinify: {
      meta: "2024 · מייסד-שותף · AI",
      tagline: "מאסטרטגיה לפרודקשן ב-6 שבועות",
      description:
        "סטודיו לייעוץ AI שמוביל לקוחות מאסטרטגיה לפרודקשן בשישה שבועות — אנליטיקה חיזויית, אוטומציה של תהליכים ועוזרי AI שיחתיים, מקצה לקצה.",
      linkLabel: "לביקור ב-Infinify",
    },
    shippost: {
      meta: "2026 · קוד פתוח · AI",
      tagline: "פעילות git → טיוטות LinkedIn מדורגות",
      description:
        "כלי local-first שסורק פעילות git ומנסח פוסטים מדורגים ללינקדאין במנוע Claude Code רב-שלבי, עם אפליקציית ביקורת ב-Next.js.",
      linkLabel: "צפייה ב-GitHub",
    },
    "claude-code-skills": {
      meta: "2026 · קוד פתוח · AI",
      tagline: "תהליכי פיתוח מרובי-סוכנים לשחרור בטוח",
      description:
        "סקילים מנוסים ל-Claude Code: ‏code review מרובה סוכנים שמפזר בודקים מתמחים ומאמת ממצאים בגישה אדברסרית, בודק תוכנית לפני מימוש, ומחולל צוותי סוכנים מותאם לסטאק.",
      linkLabel: "צפייה ב-GitHub",
    },
  },
  ui: UI_HE,
};

/* ------------------------------------------------------------------ */
/* Merge + access                                                      */
/* ------------------------------------------------------------------ */

function localize(pack: LocalePack) {
  return {
    profile: { ...PROFILE, ...pack.profile },
    experience: EXPERIENCE.map((job, i) => ({ ...job, ...pack.jobs[i] })),
    skills: SKILLS.map((skill, i) => ({
      ...skill,
      name: pack.skillNames[i] ?? skill.name,
    })),
    projects: PROJECTS.map((p) => ({ ...p, ...pack.projects[p.id] })),
    ui: pack.ui,
  };
}

export type Content = ReturnType<typeof localize>;

const CONTENT: Record<Locale, Content> = {
  en: {
    profile: PROFILE,
    experience: EXPERIENCE,
    skills: SKILLS,
    projects: PROJECTS,
    ui: UI_EN,
  },
  fr: localize(FR),
  he: localize(HE),
};

export function getContent(locale: Locale): Content {
  return CONTENT[locale] ?? CONTENT.en;
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export const META = {
  en: {
    title:
      "Jordan Perez — Full Stack Engineer | React, Next.js, TypeScript & AI",
    description:
      "Jordan Perez is a Full Stack Engineer (Israel) with 5+ years building AI products and production systems across fintech and SaaS — 20+ apps shipped from concept to production, from payment infrastructure across 20+ African markets to AI platforms for hospitality, construction, and sales. React, Next.js, TypeScript, Node.js, and LLM integration (OpenAI, Claude).",
    ogLocale: "en_US",
  },
  fr: {
    title:
      "Jordan Perez — Ingénieur Full Stack | React, Next.js, TypeScript & IA",
    description:
      "Jordan Perez est un ingénieur full stack (Israël) avec plus de 5 ans d'expérience dans les produits IA et les systèmes en production, en fintech et SaaS — plus de 20 applications livrées du concept à la production, d'une infrastructure de paiement sur 20+ marchés africains à des plateformes IA pour l'hôtellerie, la construction et la vente. React, Next.js, TypeScript, Node.js et intégration LLM (OpenAI, Claude).",
    ogLocale: "fr_FR",
  },
  he: {
    title:
      "ג'ורדן פרז — מהנדס פול סטאק | React, Next.js, TypeScript ו-AI",
    description:
      "ג'ורדן פרז הוא מהנדס פול סטאק (ישראל) עם יותר מ-5 שנות ניסיון בבניית מוצרי AI ומערכות פרודקשן בפינטק ו-SaaS — יותר מ-20 אפליקציות מהרעיון ועד פרודקשן, מתשתיות תשלומים ב-20+ שווקים באפריקה ועד פלטפורמות AI לאירוח, בנייה ומכירות. React, Next.js, TypeScript, Node.js ואינטגרציית LLM (OpenAI, Claude).",
    ogLocale: "he_IL",
  },
} satisfies Record<Locale, { title: string; description: string; ogLocale: string }>;

const HREFLANG = {
  en: "/",
  fr: "/fr",
  he: "/he",
  "x-default": "/",
};

export function localeMetadata(locale: Locale): Metadata {
  const m = META[locale];
  const path = LOCALE_PATH[locale];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: path, languages: HREFLANG },
    // Next merges metadata shallowly per top-level key — a page-level
    // openGraph/twitter REPLACES the layout's (including the file-based
    // og/twitter images), so restate the full objects here or og:type,
    // site_name, twitter:card and both images silently disappear.
    openGraph: {
      type: "profile",
      firstName: PROFILE.firstName,
      lastName: "Perez",
      username: "jordanperez",
      siteName: "Jordan Perez — Space Portfolio",
      title: m.title,
      description: m.description,
      url: path,
      locale: m.ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => META[l].ogLocale
      ),
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/twitter-image"],
    },
  };
}
