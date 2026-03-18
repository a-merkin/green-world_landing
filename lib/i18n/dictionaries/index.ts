import type { Dictionary } from "./types";
import en from "./en";
import ru from "./ru";
import az from "./az";

export type { Dictionary };
export type Locale = "en" | "ru" | "az";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "ru", "az"];
export const dictionaries: Record<Locale, Dictionary> = { en, ru, az };
