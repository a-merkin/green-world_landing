import type { Dictionary } from "./types";

const en: Dictionary = {
  header: {
    nav: {
      about: "About Us",
      products: "Products",
      gallery: "Gallery",
      contacts: "Contacts",
    },
    localeSwitcherLabel: "En",
  },
  hero: {
    subtitle: "Juicy Fresh Organic & Tasty",
    description:
      "We know how to grow truly high-quality vegetables and carefully deliver them to our customers",
    cta: "Order now",
  },
  about: {
    sectionLabel: "Paradise place",
    text: "is a modern greenhouse complex located on the Absheron Peninsula, in the settlement of Zira. We specialize in growing premium-quality tomatoes. Zira has long been renowned for its natural conditions, making it an ideal zone for vegetable farming — for many decades, a large vegetable and dairy state farm operated here, supplying produce to the entire region.",
    subtitle: "What makes our products unique?",
    features: [
      "Fresh ionized Caspian air and bright Baku sunshine;",
      "Water from underground sources, additionally purified by reverse osmosis;",
      "Greenhouse built to modern European standards under the supervision of French and Dutch engineers;",
      "No GMO and use of only certified, eco-friendly fertilizers;",
      "Natural pollination by bees without the use of hormonal preparations;",
      "Biological plant protection products, safe for humans",
    ],
    cta: "Learn more",
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
        name: "Pink\ntomatoes",
        description:
          "A group of tomato varieties and hybrids characterized by fruits with a deep pink or light crimson hue. Fruits are usually large or medium-sized, weighing from 150 to 500 grams (less often larger), characterized by fleshiness, sweet taste, juicy flesh, thin tender skin and excellent flavor. Thanks to their attractive appearance, wonderful flavor and high consumer qualities, pink tomatoes have gained high popularity in the market.",
      },
      {
        name: "Plum\ntomatoes",
        description:
          "A group of tomato varieties and hybrids with an elongated oval shape. The fruits are usually medium or small in size (50-120 g), characterized by a dense structure, thick skin and relatively low water content of the flesh. These qualities make them ideal for canning, salting, drying, drying and processing into sauces and pastes. Plum-shaped tomatoes tolerate transportation and storage well and are popular in home cooking, industrial processing and fresh vegetable trade.",
      },
      {
        name: "\u00ABCherry\u00BB\ntomatoes",
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
    title: "about  us",
    mission: {
      label: "Mission",
      heading: "We aim to contribute to the country's food security while supplying both local and international markets with clean,",
      text: "high-quality tomatoes. Our goal is to consistently produce premium sort of vegetables that meets global standards and customer expectations.",
    },
    greenhouse: {
      label: "Greenhouse",
      heading: "Our facility was built by two leading European companies — RICHEL (France) and STOLZE (Netherlands).",
      details: "RICHEL provided a modern, high-volume greenhouse structure designed to perform efficiently in both hot and dry climates.\nSTOLZE supplied the engineering systems, including heating, ventilation and irrigation.\nAll processes are fully automated through the PRIVA climate control system, ensuring ideal growing conditions and maximum yield 24/7.",
      richel: "RICHEL",
      stolze: "STOLZE",
      priva: "PRIVA",
    },
    products: {
      label: "Products",
      heading: "We grow several categories of tomatoes:",
      text: "these are cluster tomatoes, premium pink tomatoes, plum tomatoes and mini tomatoes (cherry). All varieties enjoy strong demand in local and export markets. With planned expansion, we intend to broaden our assortment and export volumes based on partner needs.",
      cards: [
        { name: "Cluster tomatoes" },
        { name: "Pink tomatoes" },
        { name: "Plum tomatoes" },
        { name: "\u00ABCherry\u00BB tomatoes" },
      ],
    },
    experts: {
      label: "Experts",
      heading: "Professional approach",
      text: "Our agronomists have many years of experience and regularly undergo training in the Netherlands, Spain and other European countries. International experts visit the facility several times a year to provide monitoring, evaluation and technical consulting.",
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
      companyName: "company name",
      email: "email",
      message: "message",
      agree: "I agree to the terms of the",
      privacyPolicy: "privacy policy",
      send: "Send",
      sending: "Sending...",
      successMessage: "Your message has been sent successfully!",
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
    decorativeLines: ["Fresh Juicy", "Organic & Tasty"],
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
