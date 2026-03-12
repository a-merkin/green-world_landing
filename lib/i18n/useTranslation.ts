"use client";

import { useContext } from "react";
import { LocaleContext } from "./LocaleProvider";

export function useTranslation() {
  return useContext(LocaleContext);
}
