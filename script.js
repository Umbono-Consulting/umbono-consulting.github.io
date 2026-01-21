/* ===============================
   SETTINGS (UPDATE THESE)
================================ */
const TO_EMAIL = "your-email@domain.com";
// Use international format, no spaces. Example: "+2250700000000"
const WHATSAPP_NUMBER = "+2250000000000";

/* ===============================
   NAV + FOOTER
================================ */
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navList?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navList.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ===============================
   I18N (EN / FR)
================================ */
let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    brand_tag: "Management Solutions",

    nav_services: "Services",
    nav_work: "Work",
    nav_about: "About",
    nav_contact: "Contact",

    hero_pill: "Data • Performance • Decision Systems",
    hero_title: "Data clarity for confident decisions.",
    hero_lead: "Umbono Consulting designs practical management solutions: Power BI dashboards, KPI frameworks, data pipelines, and performance tracking systems tailored for your team.",
    cta_book: "Book a call",
    cta_services: "See services",

    trust_1: "Dashboards delivered",
    trust_2: "Typical delivery",
    trust_3_num: "Bilingual",
    trust_3_label: "EN / FR (optional)",

    card_title: "What you get",
    card_li_1: "Executive KPI scorecards & drill-down views",
    card_li_2: "Automated reporting (Excel / SQL / Python)",
    card_li_3: "Data quality checks & monitoring",
    card_li_4: "Training + handover documentation",
    card_btn_1: "View examples",
    card_btn_2: "Request a quote →",

    services_title: "Services",
    services_subtitle: "Flexible packages: quick wins or full end-to-end delivery.",

    svc1_title: "Power BI Dashboards",
    svc1_desc: "Executive dashboards, operational monitoring, and KPI scorecards with clear storytelling.",
    svc1_li1: "DAX measures & semantic model",
    svc1_li2: "Drill-through and tooltips",
    svc1_li3: "Performance optimization",

    svc2_title: "Data & Automation",
    svc2_desc: "Build reliable pipelines and automate repetitive reporting tasks.",
    svc2_li1: "SQL (Starburst/Trino, PostgreSQL, SQL Server)",
    svc2_li2: "Python ETL (pandas)",
    svc2_li3: "Scheduled refresh & alerts",

    svc3_title: "Performance Management",
    svc3_desc: "Define KPI frameworks and governance so teams can act on insights, not just view charts.",
    svc3_li1: "KPI definitions & targets",
    svc3_li2: "Scorecards & routines",
    svc3_li3: "Training & documentation",

    banner_title: "Need a fast audit?",
    banner_desc: "We review your current reporting, data model, and KPIs — then propose a concrete improvement plan.",
    banner_btn: "Request an audit",

    work_title: "Selected work",
    work_subtitle: "Examples of problems we typically solve (replace with real case studies).",

    case1_title: "Telco KPI Command Center",
    case1_desc: "Unified churn, revenue-at-risk, and quality signals into a single executive view.",

    case2_title: "Operations Reporting Automation",
    case2_desc: "Automated Excel-to-dashboard pipeline with data checks and weekly refresh schedule.",

    case3_title: "Customer Segmentation & Scoring",
    case3_desc: "Built segmentation and scoring logic for targeting, retention, and performance tracking.",

    case4_title: "Executive Scorecard System",
    case4_desc: "Designed KPI definitions, target setting, and scorecard cadence for leadership reviews.",

    tag_analytics: "Analytics",
    tag_modeling: "Modeling",
    tag_dashboards: "Dashboards",
    tag_kpi: "KPI Framework",
    tag_pmo: "PMO",
    tag_enablement: "Enablement",

    about_title: "About Umbono Consulting",
    about_subtitle: "Management solutions built around clarity, action, and measurable outcomes.",

    about_how_title: "How we work",
    about_how_b1: "Understand",
    about_how_1: "your decision needs and data reality",
    about_how_b2: "Design",
    about_how_2: "KPI logic + dashboard structure",
    about_how_b3: "Build",
    about_how_3: "pipelines + visuals with performance in mind",
    about_how_b4: "Enable",
    about_how_4: "your team with training & documentation",

    about_ind_title: "Industries",
    about_ind_1: "Telecom & connectivity",
    about_ind_2: "Energy & utilities",
    about_ind_3: "Logistics & supply chain",
    about_ind_4: "SMEs and growing operations teams",

    contact_title: "Contact",
    contact_subtitle: "Tell us what you’re trying to achieve. We’ll reply with next steps.",

    form_name: "Name",
    form_email: "Email",
    form_need: "What do you need?",
    form_message: "Message",
    form_send: "Send message",
    form_whatsapp: "WhatsApp",

    ph_name: "Your name",
    ph_email: "you@company.com",
    ph_message: "A short summary of your project...",

    topic_select: "Select one",
    topic_1: "Power BI dashboard",
    topic_2: "Data pipeline / automation",
    topic_3: "KPI framework / scorecard",
    topic_4: "Audit / improvement plan",
    topic_5: "Other",

    form_note: "This form opens your email client (no data is stored on the site). If you want a real “submit-to-inbox” form, we can connect it to Formspree or a Google Sheet.",

    details_title: "Business details",
    details_location: "Abidjan • Remote available",
    details_days: "Monday–Friday",
    details_email_label: "Email:",
    details_phone_label: "Phone/WhatsApp:",
    details_note: "Replace the email and phone above with your real contact info.",

    footer_top: "Back to top ↑",
    footer_right: "Umbono Consulting"
  },

  fr: {
    brand_tag: "Management Solutions",

    nav_services: "Services",
    nav_work: "Réalisations",
    nav_about: "À propos",
    nav_contact: "Contact",

    hero_pill: "Données • Performance • Pilotage",
    hero_title: "La clarté de vos données pour décider vite et juste.",
    hero_lead: "Umbono Consulting conçoit des solutions de pilotage pratiques : tableaux de bord Power BI, cadres KPI, pipelines de données et systèmes de suivi de performance adaptés à vos équipes.",
    cta_book: "Planifier un échange",
    cta_services: "Voir les services",

    trust_1: "Tableaux de bord livrés",
    trust_2: "Délai moyen",
    trust_3_num: "Bilingue",
    trust_3_label: "FR / EN (optionnel)",

    card_title: "Vous obtenez",
    card_li_1: "Scorecards KPI exécutives + analyses détaillées",
    card_li_2: "Reporting automatisé (Excel / SQL / Python)",
    card_li_3: "Contrôles qualité des données + monitoring",
    card_li_4: "Formation + documentation de passation",
    card_btn_1: "Voir des exemples",
    card_btn_2: "Demander un devis →",

    services_title: "Services",
    services_subtitle: "Des offres flexibles : gains rapides ou accompagnement de bout en bout.",

    svc1_title: "Tableaux de bord Power BI",
    svc1_desc: "Tableaux de bord exécutifs, suivi opérationnel et scorecards KPI avec une narration claire.",
    svc1_li1: "Mesures DAX & modèle sémantique",
    svc1_li2: "Drill-through & infobulles",
    svc1_li3: "Optimisation des performances",

    svc2_title: "Données & Automatisation",
    svc2_desc: "Pipelines fiables et automatisation des tâches de reporting répétitives.",
    svc2_li1: "SQL (Starburst/Trino, PostgreSQL, SQL Server)",
    svc2_li2: "ETL Python (pandas)",
    svc2_li3: "Rafraîchissement planifié & alertes",

    svc3_title: "Pilotage de la performance",
    svc3_desc: "Cadres KPI et gouvernance pour que les équipes agissent, pas seulement regardent des graphiques.",
    svc3_li1: "Définition KPI & cibles",
    svc3_li2: "Scorecards & routines de pilotage",
    svc3_li3: "Formation & documentation",

    banner_title: "Besoin d’un audit rapide ?",
    banner_desc: "Nous analysons vos reportings, votre modèle de données et vos KPI — puis proposons un plan d’amélioration concret.",
    banner_btn: "Demander un audit",

    work_title: "Réalisations",
    work_subtitle: "Exemples de problématiques que nous adressons (à remplacer par vos cas clients).",

    case1_title: "Centre de pilotage KPI (Télécom)",
    case1_desc: "Regroupement du churn, du revenu en risque et des signaux qualité dans une vue exécutive unique.",

    case2_title: "Automatisation du reporting opérations",
    case2_desc: "Pipeline Excel → dashboard automatisé avec contrôles qualité et calendrier de rafraîchissement.",

    case3_title: "Segmentation & scoring client",
    case3_desc: "Mise en place de la segmentation et du scoring pour le ciblage, la rétention et le suivi de performance.",

    case4_title: "Système de scorecard exécutive",
    case4_desc: "Définition KPI, fixation des cibles et cadence de revue pour la direction.",

    tag_analytics: "Analytique",
    tag_modeling: "Modélisation",
    tag_dashboards: "Tableaux de bord",
    tag_kpi: "Cadre KPI",
    tag_pmo: "PMO",
    tag_enablement: "Adoption",

    about_title: "À propos d’Umbono Consulting",
    about_subtitle: "Des solutions de management orientées clarté, action et résultats mesurables.",

    about_how_title: "Notre méthode",
    about_how_b1: "Comprendre",
    about_how_1: "vos besoins décisionnels et la réalité des données",
    about_how_b2: "Concevoir",
    about_how_2: "la logique KPI + la structure du dashboard",
    about_how_b3: "Construire",
    about_how_3: "les pipelines + les visuels, avec performance",
    about_how_b4: "Former",
    about_how_4: "vos équipes (formation & documentation)",

    about_ind_title: "Secteurs",
    about_ind_1: "Télécom & connectivité",
    about_ind_2: "Énergie & utilities",
    about_ind_3: "Logistique & supply chain",
    about_ind_4: "PME et équipes opérationnelles en croissance",

    contact_title: "Contact",
    contact_subtitle: "Expliquez nous votre besoin. Nous vous proposerons les prochaines étapes.",

    form_name: "Nom",
    form_email: "Email",
    form_need: "De quoi avez-vous besoin ?",
    form_message: "Message",
    form_send: "Envoyer",
    form_whatsapp: "WhatsApp",

    ph_name: "Votre nom",
    ph_email: "vous@entreprise.com",
    ph_message: "Un court résumé de votre projet...",

    topic_select: "Choisir une option",
    topic_1: "Tableau de bord Power BI",
    topic_2: "Pipeline données / automatisation",
    topic_3: "Cadre KPI / scorecard",
    topic_4: "Audit / plan d’amélioration",
    topic_5: "Autre",

    form_note: "Ce formulaire ouvre votre client email (aucune donnée n’est stockée sur le site). Si vous voulez un vrai formulaire “envoyé à la boîte mail”, nous pouvons le connecter à Formspree ou Google Sheets.",

    details_title: "Informations",
    details_location: "Abidjan • Télétravail possible",
    details_days: "Lundi–Vendredi",
    details_email_label: "Email :",
    details_phone_label: "Téléphone/WhatsApp :",
    details_note: "Remplacez l’email et le numéro ci-dessus par vos informations réelles.",

    footer_top: "Haut de page ↑",
    footer_right: "Umbono Consulting"
  }
};

function applyI18n(lang){
  currentLang = lang;
  localStorage.setItem("lang", lang);

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang]?.[key];
    if (value !== undefined) el.textContent = value;
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translations[lang]?.[key];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  // Toggle button state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update WhatsApp link text (prefill)
  updateWhatsAppLink();
}

/* ===============================
   CONTACT (MAILTO)
================================ */
function handleContactSubmit(event){
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const topic = form.topic.value.trim();
  const message = form.message.value.trim();

  const subject =
    currentLang === "fr"
      ? `Demande Umbono Consulting : ${topic}`
      : `Umbono Consulting Inquiry: ${topic}`;

  const body =
    currentLang === "fr"
      ? `Nom: ${name}\nEmail: ${email}\nSujet: ${topic}\n\nMessage:\n${message}`
      : `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`;

  window.location.href =
    `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return false;
}

/* ===============================
   WHATSAPP LINK (LANG-AWARE)
================================ */
function updateWhatsAppLink(){
  const whatsappLink = document.getElementById("whatsappLink");
  if (!whatsappLink) return;

  const txt =
    currentLang === "fr"
      ? "Bonjour Umbono Consulting — je souhaite échanger sur un projet de tableau de bord / analytics."
      : "Hello Umbono Consulting — I’d like to discuss a dashboard / analytics project.";

  const number = WHATSAPP_NUMBER.replace(/\+/g, "");
  whatsappLink.href = `https://wa.me/${number}?text=${encodeURIComponent(txt)}`;
}

/* Init language + WhatsApp */
applyI18n(currentLang);

/* Handle language switch */
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyI18n(btn.dataset.lang));
});
