// Design tokens from Figma
export const colors = {
  green1: "#4F5E4A",
  green2: "#C4D99D",
  greenLines: "#62694C",
  light: "#F0EAE2",
  black: "#333333",
} as const;

// Navigation links
export const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Продукция", href: "#products" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
] as const;

// Contact info
export const contacts = {
  mobile: "+99 (455) 254-77-11",
  office: "(012) 565-05-50",
  email: "info@greenworld.az",
  russia: "+7 977 824 24 41",
  address: "Азербайджан, Баку",
} as const;

// Achievement stats
export const achievements = [
  { number: "14", label: "партнеров", title: "Технологии и безопасность" },
  { number: "9+", label: "лет", title: "Работа и опыт" },
  { number: "10", label: "гектар", title: "Общая площадь" },
  { number: "∞", label: "", title: "Любовь и преданность нашему делу" },
] as const;
