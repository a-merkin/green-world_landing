"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { locales, type Locale } from "@/lib/i18n/dictionaries";

const localeLabels: Record<Locale, string> = { en: "En", ru: "Ru", az: "Az" };

export default function Header() {
  const { t, locale, setLocale } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    if (!isLangOpen) return;
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isLangOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-start justify-between px-20 pt-[28px] max-lg:px-5 max-lg:pt-[20px] max-md:px-[10px] max-md:pt-[12px]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Green World"
          width={124}
          height={36}
          priority
          className="max-lg:h-auto max-lg:w-[90px] max-md:w-[69px]"
        />
      </Link>

      {/* Desktop / Tablet nav */}
      <nav className="flex gap-[60px] font-[family-name:var(--font-roboto)] text-base leading-none text-[#4F5E4A] max-lg:gap-[30px] max-lg:text-sm max-md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link relative"
          >
            {t.header.nav[link.key]}
          </Link>
        ))}
      </nav>

      {/* Desktop / Tablet language dropdown */}
      <div ref={langRef} className="relative max-md:hidden">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="flex cursor-pointer items-center gap-1.5 font-[family-name:var(--font-roboto)] text-base leading-none text-[#4F5E4A] max-lg:text-sm"
        >
          <span>{localeLabels[locale]}</span>
          <Image
            src="/images/chevron-down.svg"
            alt=""
            width={10}
            height={5}
            className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isLangOpen && (
          <div className="absolute right-0 top-full flex flex-col gap-[10px] pt-[10px] font-[family-name:var(--font-roboto)] text-base leading-none text-[#4F5E4A] max-lg:text-sm">
            {locales
              .filter((l) => l !== locale)
              .map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setIsLangOpen(false);
                  }}
                  className="cursor-pointer text-left transition-opacity hover:opacity-70"
                >
                  {localeLabels[l]}
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Mobile burger button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="hidden cursor-pointer flex-col gap-[3.5px] max-md:flex"
        aria-label="Open menu"
      >
        <span className="block h-[3px] w-[22px] bg-[#4F5E4A]" />
        <span className="block h-[3px] w-[22px] bg-[#4F5E4A]" />
        <span className="block h-[3px] w-[22px] bg-[#4F5E4A]" />
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#F0EAE2]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 cursor-pointer text-2xl text-[#4F5E4A]"
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col items-center gap-6 font-[family-name:var(--font-roboto)] text-xl text-[#4F5E4A]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="transition-opacity hover:opacity-70"
              >
                {t.header.nav[link.key]}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 font-[family-name:var(--font-roboto)] text-lg text-[#4F5E4A]">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLocale(l);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer transition-opacity hover:opacity-70 ${l === locale ? "font-medium" : "opacity-50"}`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
