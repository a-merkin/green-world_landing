// Design tokens from Figma
export const colors = {
  green1: "#4F5E4A",
  green2: "#C4D99D",
  greenLines: "#62694C",
  light: "#F0EAE2",
  black: "#333333",
} as const;

// Navigation link hrefs (labels come from dictionaries)
export const navLinks = [
  { key: "about" as const, href: "/about" },
  { key: "products" as const, href: "#products" },
  { key: "gallery" as const, href: "/gallery" },
  { key: "contacts" as const, href: "#contacts" },
];

// Contact info (non-translatable)
export const contacts = {
  mobile: "+99 (455) 254-77-11",
  office: "(012) 565-05-50",
  email: "info@greenworld.az",
  russia: "+7 977 824 24 41",
} as const;
