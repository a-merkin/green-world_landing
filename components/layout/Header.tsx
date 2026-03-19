"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${hash}`);
    }
  };

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
    <header className="header-fixed fixed top-0 left-0 right-0 z-50 flex items-start justify-between bg-[#F0EAE2] px-20 pt-[28px] pb-[12px] max-lg:px-5 max-lg:pt-[20px] max-lg:pb-[10px] max-md:px-[10px] max-md:pt-[14px] max-md:pb-[8px]">
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
        {navLinks.map((link) =>
          link.href.startsWith("#") ? (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash(link.href);
              }}
            >
              {t.header.nav[link.key]}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link relative"
            >
              {t.header.nav[link.key]}
            </Link>
          )
        )}
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

      {/* Mobile menu overlay — rendered via portal to escape header's stacking context */}
      {isMenuOpen && createPortal(
        <div className="mobile-menu-overlay fixed inset-0 z-[100] flex flex-col bg-[#4F5E4A]">
          {/* Top bar with kraft background */}
          <div className="header-fixed relative flex shrink-0 items-start justify-between bg-[#F0EAE2] px-[10px] pt-[14px] pb-[14px]">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Green World"
                width={69}
                height={20}
                priority
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer"
              aria-label="Close menu"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M1 1L16 16M16 1L1 16" stroke="#4F5E4A" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-[28px] px-[33px] pt-[28px] font-[family-name:var(--font-roboto)] text-[24px] font-normal leading-none text-[#F0EAE2]">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    scrollToHash(link.href);
                  }}
                >
                  {t.header.nav[link.key]}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="transition-opacity hover:opacity-70"
                >
                  {t.header.nav[link.key]}
                </Link>
              )
            )}

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex cursor-pointer items-center gap-1.5 text-[24px] leading-none text-[#F0EAE2]"
              >
                <span>{localeLabels[locale]}</span>
                <Image
                  src="/images/chevron-down.svg"
                  alt=""
                  width={10}
                  height={5}
                  className={`brightness-0 invert transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangOpen && (
                <div className="flex flex-col gap-[10px] pt-[10px] text-[24px] leading-none text-[#F0EAE2]">
                  {locales
                    .filter((l) => l !== locale)
                    .map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLocale(l);
                          setIsLangOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="cursor-pointer text-left transition-opacity hover:opacity-70"
                      >
                        {localeLabels[l]}
                      </button>
                    ))}
                </div>
              )}
            </div>
          </nav>
        </div>,
        document.body
      )}
    </header>
  );
}
