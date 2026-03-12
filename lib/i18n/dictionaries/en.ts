import type { Dictionary } from "./types";

const en: Dictionary = {
  header: {
    nav: {
      about: "About",
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
    name: "Cluster\ntomatoes",
    description:
      "The fruits are medium to large in size, usually weighing from 80 to 150 g, growing in groups on a single branch. They have a sweet flavor with a slight acidity and a more intense aroma than regular tomatoes. These tomatoes are perfect for fresh salads, sandwiches, pasta and sauces, as well as canning. The fruits ripen gradually and are harvested in whole clusters. They are easy to store and transport, yielding a large number of fruits per plant.",
    prev: "Previous",
    next: "Next",
  },
  advantages: {
    sectionLabel: "Advantages",
    words: ["Technology", "Organic", "Quality control", "Flexible range"],
    qualityDescription:
      "This is the foundation of our work. We strictly control every stage of production, from planting seeds to packaging products. All products undergo thorough testing for compliance with international standards, guaranteeing the high quality, freshness, and safety of our tomatoes.",
  },
  gallery: {
    sectionLabel: "Gallery",
    dragHint: "Drag",
    cta: "More photos",
  },
  partners: {
    sectionLabel: "Partners",
    description:
      "Our project was implemented in close collaboration with {growGroup} — a leader in creating high-tech greenhouses and the operator of the complex. The company is the official distributor of {richel} and {stolze} in Azerbaijan.",
    growGroup: "Grow Group Azerbaijan",
    richel: "RICHEL",
    stolze: "STOLZE",
  },
  footer: {
    decorativeLines: ["Fresh Juicy", "Bright & Tasty"],
    contactUs: "Contact us",
    callAlt: "Call us",
    labels: {
      mobile: "Mobile",
      office: "Main office",
      email: "Email",
      russia: "Branch in Russia",
    },
    address: "Azerbaijan, Baku",
    copyright: "All rights reserved.",
  },
};

export default en;
