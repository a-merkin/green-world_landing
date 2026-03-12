import type { Dictionary } from "./types";
import en from "./en";
import ru from "./ru";

export type { Dictionary };
export type Locale = "en" | "ru";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "ru"];
export const dictionaries: Record<Locale, Dictionary> = { en, ru };
