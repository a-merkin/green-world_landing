export interface Dictionary {
  header: {
    nav: {
      home: string;
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
    slides: { name: string; description: string }[];
    prev: string;
    next: string;
  };
  advantages: {
    sectionLabel: string;
    items: { title: string; description: string }[];
  };
  gallery: {
    sectionLabel: string;
    dragHint: string;
    cta: string;
  };
  galleryPage: {
    title: string;
    prev: string;
    next: string;
  };
  partners: {
    sectionLabel: string;
    description: string;
    growGroup: string;
    richel: string;
    stolze: string;
  };
  aboutPage: {
    title: string;
    mission: {
      label: string;
      heading: string;
      text: string;
    };
    greenhouse: {
      label: string;
      heading: string;
      details: string;
      richel: string;
      stolze: string;
      priva: string;
    };
    products: {
      label: string;
      heading: string;
      text: string;
      cards: { name: string }[];
    };
    experts: {
      label: string;
      heading: string;
      text: string;
    };
  };
  contactsPage: {
    title: string;
    address: string;
    countries: {
      russia: string;
      poland: string;
      uae: string;
      belarus: string;
      ukraine: string;
    };
    russiaRegions: string[];
    form: {
      forCustomers: string;
      forSuppliers: string;
      description: string;
      recipientLabel: string;
      companyName: string;
      email: string;
      message: string;
      agree: string;
      privacyPolicy: string;
      send: string;
      sending: string;
      successMessage: string;
      spamBlockedMessage: string;
      errorMessage: string;
    };
    baku: string;
    zire: string;
  };
  notFound: {
    title: string;
    heading: string;
    description: string;
    cta: string;
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
