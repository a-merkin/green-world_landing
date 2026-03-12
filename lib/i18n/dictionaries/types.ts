export interface Dictionary {
  header: {
    nav: {
      about: string;
      products: string;
      gallery: string;
      contacts: string;
    };
    localeSwitcherLabel: string;
  };
  hero: {
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    sectionLabel: string;
    text: string;
    subtitle: string;
    features: string[];
    cta: string;
  };
  achievements: {
    sectionLabel: string;
    items: { number: string; label: string; title: string }[];
  };
  products: {
    sectionLabel: string;
    name: string;
    description: string;
    prev: string;
    next: string;
  };
  advantages: {
    sectionLabel: string;
    words: string[];
    qualityDescription: string;
  };
  gallery: {
    sectionLabel: string;
    dragHint: string;
    cta: string;
  };
  partners: {
    sectionLabel: string;
    description: string;
    growGroup: string;
    richel: string;
    stolze: string;
  };
  footer: {
    decorativeLines: string[];
    contactUs: string;
    callAlt: string;
    labels: {
      mobile: string;
      office: string;
      email: string;
      russia: string;
    };
    address: string;
    copyright: string;
  };
}
