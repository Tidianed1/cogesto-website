// src/content/footer.ts
// Data for the NewFooter component - Cogesto Consulting

interface LinkItem {
  text: string;
  href: string;
  title?: string;
  target?: string;
}

interface SocialLinkItem extends LinkItem {
  svgPath: string;
  viewBox: string;
}

export const footerData = {
  tagline: "Excellence, Intégrité et Performance durable.",
  newsletterTitle: "Restez informé des tendances stratégiques et économiques en Afrique.",
  newsletterCtaText: "S'abonner à la newsletter",
  newsletterCtaHref: "/newsletter",
  discoverLinks: {
    title: "EXPERTISES",
    items: [
      { text: "Stratégie & Business Models", href: "/expertises/strategie", title: "Stratégie" },
      { text: "Excellence Opérationnelle", href: "/expertises/operations", title: "Opérations" },
      { text: "Finance d'Entreprise", href: "/expertises/corporate-finance", title: "Finance" },
      { text: "Organisation & Gouvernance", href: "/expertises/organisation", title: "Organisation" },
      { text: "Digital & Technologie", href: "/expertises/digital-technology", title: "Digital" },
    ],
  },
  resourcesLinks: {
    title: "INSIGHTS & RESSOURCES",
    items: [
      { text: "Actualités & Analyses", href: "/insights/analyses", title: "Actualités" },
      { text: "Études & Publications", href: "/publications", title: "Publications" },
      { text: "Événements & Formations", href: "/events/", title: "Événements" },
      { text: "Programme BLP", href: "/blp/presentation", title: "Programme BLP" },
    ],
  },
  aboutLinks: {
    title: "A PROPOS",
    items: [
      { text: "Notre histoire", href: "/about/our-story", title: "Histoire" },
      { text: "Nos équipes", href: "/about/our-people", title: "Équipes" },
      { text: "Nos bureaux (Dakar, Maroc, Canada)", href: "/about/our-locations", title: "Bureaux" },
      { text: "Carrières", href: "/careers/", title: "Carrières" },
      { text: "Contactez-nous", href: "/contact", title: "Contact" },
    ],
  },
  legalLinks: [
    { text: "Mentions Légales", href: "/mentions-legales" },
    { text: "Politique de Confidentialité", href: "/privacy-policy" },
    { text: "Politique RSE", href: "/rse-policy" },
  ],
  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/company/cogesto-consulting",
      svgPath: "M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z",
      viewBox: "0 0 24 24",
    },
    {
      text: "X",
      href: "#",
      svgPath: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
      viewBox: "0 0 1200 1227",
    }
  ],
};