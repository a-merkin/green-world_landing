import type { Dictionary } from "./types";

const en: Dictionary = {
  header: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      gallery: "Gallery",
      contacts: "Contacts",
    },
    localeSwitcherLabel: "En",
  },
  hero: {
    subtitle: "Organic & Tasty",
    description:
      "Our team knows how to grow really high quality vegetables and carefully deliver them to our client",
    cta: "Order now",
  },
  about: {
    sectionLabel: "Prime location",
    text: "is a modern greenhouse complex located in the settlement of Zira on the Absheron Peninsula. We specialize in growing premium-quality tomatoes. Zira has long been known for its favorable climate and fertile soils, making it one of the most distinguished agricultural zones in the region.",
    subtitle: "What Makes Our Tomatoes Unique?",
    features: [
      "The clean Caspian breeze and strong Baku sunlight",
      "Water sourced from underground wells and purified through reverse osmosis",
      "A state-of-the-art greenhouse built under the supervision of French and Dutch engineers",
      "No GMO; only certified, environmentally friendly fertilizers",
      "Natural pollination by bees without hormonal stimulants",
      "Biological plant protection methods safe for human health",
    ],
    cta: "More",
  },
  achievements: {
    sectionLabel: "Achievements",
    items: [
      { number: "14", label: "partners", title: "Technology & Safety" },
      { number: "9+", label: "years", title: "Work & Experience" },
      { number: "10", label: "hectares", title: "Total area" },
      { number: "∞", label: "", title: "Love and dedication to our cause" },
    ],
  },
  products: {
    sectionLabel: "Products",
    slides: [
      {
        name: "Cluster\ntomatoes",
        description:
          "The fruits are medium to large in size, usually weighing from 80 to 150 g, growing in groups on a single branch. They have a sweet flavor with a slight acidity and a more intense aroma than regular tomatoes. These tomatoes are perfect for fresh salads, sandwiches, pasta and sauces, as well as canning. The fruits ripen gradually and are harvested in whole clusters. They are easy to store and transport, yielding a large number of fruits per plant.",
      },
      {
        name: "Premium pink\ntomatoes",
        description:
          "A group of tomato varieties and hybrids characterized by fruits with a deep pink or light crimson hue. Fruits are usually large or medium-sized, weighing from 150 to 500 grams (less often larger), characterized by fleshiness, sweet taste, juicy flesh, thin tender skin and excellent flavor. Thanks to their attractive appearance, wonderful flavor and high consumer qualities, pink tomatoes have gained high popularity in the market.",
      },
      {
        name: "Cherry and\nmini tomatoes",
        description:
          "A group of small-fruited tomato varieties characterized by small fruits of round or slightly elongated shape with a diameter of about 1.5-3 cm and a weight of 10 to 30 grams. Cherries are prized for their sweet flavor, juiciness and decorative appearance. They are commonly used fresh in salads, appetizers and food presentation. They are often grown both in open and protected soil and are characterized by high yields, good transportability and long shelf life.",
      },
    ],
    prev: "Previous",
    next: "Next",
  },
  advantages: {
    sectionLabel: "Advantages",
    items: [
      {
        title: "Technology",
        description:
          "We have fully automated our production processes, incorporating advanced technologies from our partners at every stage of the production process. Climate control, automated irrigation and quality monitoring systems ensure maximum efficiency and consistent results.",
      },
      {
        title: "Organic",
        description:
          "We produce healthy, non-GMO products in an environmentally responsible manner. We use sustainable irrigation systems, organic fertilizers in our greenhouse and carefully manage our resources to minimize environmental impact and preserve the natural balance.",
      },
      {
        title: "Quality control",
        description:
          "This is the foundation of our work. We strictly control every stage of production, from planting seeds to packaging products. All products undergo thorough testing for compliance with international standards, guaranteeing the high quality, freshness, and safety of our tomatoes.",
      },
      {
        title: "Flexible range",
        description:
          "The professionalism of our agronomists allows us to grow any type of tomato to meet customer requests. Thanks to our in-depth expertise and state-of-the-art technology, we customize production to your unique requirements, offering products that meet your exact expectations.",
      },
    ],
  },
  gallery: {
    sectionLabel: "Gallery",
    dragHint: "Drag",
    cta: "More photos",
  },
  galleryPage: {
    title: "gallery",
    prev: "Previous photo",
    next: "Next photo",
  },
  partners: {
    sectionLabel: "Partners",
    description:
      "Our project was implemented in collaboration with {growGroup}, a national leader in high-tech greenhouse construction and management. The company is the official distributor of {richel} and {stolze} in Azerbaijan.",
    growGroup: "Grow Group Azerbaijan",
    richel: "RICHEL",
    stolze: "STOLZE",
  },
  aboutPage: {
    title: "about us",
    mission: {
      label: "Mission",
      heading: "In recent years, the state has taken effective measures to develop the non-oil sector of the economy, in particular,",
      text: "favorable conditions have been created for agriculture. We want to contribute to the food security of our country. Moreover, the aim of our activity is to grow high quality, ecologically clean products that satisfy the most demanding customers both in our country and abroad.",
    },
    greenhouse: {
      label: "Greenhouse",
      heading: "For the construction of our greenhouse were chosen two leading European companies in this industry: french «RICHEL» and dutch «STOLZE».",
      details: "«RICHEL», a company with 60 years of experience, offered us one of its latest models of construction for greenhouses Richel 12.8, with a height of up to 11 meters 'in the ridge' and a distance of 12.8 meters between the spans. This is the best compromise between volume and performance in both cold, hot and arid regions. The rest of the equipment was supplied by «STOLZE», which for over 50 years has been providing the best engineering solutions for designing greenhouse equipment, taking into account the individual characteristics of each order.\nAll irrigation, heating and ventilation processes are carried out automatically by the computerized system «PRIVA», the agronomists only have to choose an effective strategy, which the program will strictly follow. This gives us the opportunity to create ideal growing conditions for our plants throughout the day and maximize yields.",
      richel: "RICHEL",
      stolze: "STOLZE",
      priva: "PRIVA",
    },
    products: {
      label: "Products",
      heading: "Currently, we grow several types of tomatoes.",
      text: "These are tomatoes on the branch, pink tomatoes, plum tomatoes and everyone's favorite «cherry». All these varieties are very well established in the market and have come to the buyers' liking. Despite the fact that at the moment the basis of our export products are tomatoes on the branch, in the future, as the area of greenhouse farm will be increased, we will be able to provide other varieties of tomatoes in export volumes, referring to the wishes of our customers.",
      cards: [
        { name: "Tomatoes on a branch" },
        { name: "Pink tomatoes" },
        { name: "Plum tomatoes" },
        { name: "«Cherry» tomatoes" },
      ],
    },
    experts: {
      label: "Experts",
      heading: "Our plants are under close supervision.",
      text: "Our agronomists have many years of experience and undergo annual internships in Holland, Spain and other European countries. At the same time, several times a year we invite leading Dutch specialists for monitoring and consulting support. All these measures are aimed at satisfying the wishes of our most demanding customers.",
    },
  },
  contactsPage: {
    title: "Export countries",
    address: "Azerbaijan, AZ0100, Baku, Zira Vegetable-Dairy farm",
    countries: {
      russia: "Russia",
      poland: "Poland",
      uae: "UAE",
      belarus: "Belarus",
      ukraine: "Ukraine",
    },
    russiaRegions: [
      "Astrakhan region",
      "Bashkortostan Republic",
      "Volgograd region",
      "Voronezh region",
      "Ivanovo region",
      "Kemerovo region",
      "Kirov region",
      "Krasnodar Region",
      "Kuban district",
      "Leningrad region",
      "Moscow region",
      "Murmansk region",
      "Nizhny Novgorod region",
      "Novgorod region",
      "Novosibirsk region",
      "Omsk region",
      "Orenburg region",
      "Orel region",
      "Penza region",
      "Perm region",
      "Rostov region",
      "Samara region",
      "Saratov region",
      "Sverdlovsk region",
      "Smolensk region",
      "Stavropol region",
      "Tambov region",
      "Tatarstan Republic",
      "Tula region",
      "Tyumen Region",
      "Udmurt Republic",
      "KMAD - Yugra",
      "Chelyabinsk region",
      "Yaroslavl region",
    ],
    form: {
      forCustomers: "For customers",
      forSuppliers: "For suppliers",
      description: "If you have any questions, suggestions or to place an order, please fill out the form. We will be happy to cooperate.",
      recipientLabel: "Email for inquiries",
      companyName: "company name",
      email: "email",
      message: "message",
      agree: "I agree to the terms of the",
      privacyPolicy: "privacy policy",
      send: "Send",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully!",
      spamBlockedMessage: "Your request was blocked by anti-spam protection. Remove suspicious links or promotional text and try again.",
      errorMessage: "Something went wrong. Please try again.",
    },
    baku: "Baku",
    zire: "Zire",
  },
  notFound: {
    title: "404",
    heading: "Page is not found",
    description: "It looks like this page doesn\u2019t exist. You can use the site menu or go to the main page:",
    cta: "Main page",
  },
  footer: {
    decorativeLines: ["Organic & Tasty"],
    contactUs: "Contact us",
    callAlt: "Call us",
    labels: {
      mobile: "Mobile",
      office: "Office",
      email: "Email",
      russia: "Russian representative",
    },
    address: "Azerbaijan, Baku",
    copyright: "All rights reserved.",
  },
};

export default en;
