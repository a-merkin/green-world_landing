"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Header() {
  const { t, locale, setLocale } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLocale = () => setLocale(locale === "en" ? "ru" : "en");

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex h-24 items-center justify-between px-20 max-lg:h-[76px] max-lg:px-5 max-md:h-[48px] max-md:px-[10px]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Green World"
          width={124}
          height={36}
          priority
          className="max-lg:w-[90px] max-lg:h-auto max-md:w-[69px]"
        />
      </Link>

      {/* Desktop / Tablet nav */}
      <nav className="flex gap-15 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#4F5E4A] max-lg:gap-[30px] max-lg:font-[family-name:var(--font-roboto)] max-lg:text-sm max-lg:tracking-normal max-md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-opacity hover:opacity-70"
          >
            {t.header.nav[link.key]}
          </Link>
        ))}
      </nav>

      {/* Desktop / Tablet language switcher */}
      <button
        onClick={toggleLocale}
        className="flex items-center gap-1.5 font-[family-name:var(--font-roboto)] text-base leading-none text-[#4F5E4A] cursor-pointer max-lg:text-sm max-md:hidden"
      >
        <span>{t.header.localeSwitcherLabel}</span>
        <Image
          src="/images/chevron-down.svg"
          alt=""
          width={10}
          height={5}
        />
      </button>

      {/* Mobile burger button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="hidden max-md:flex flex-col gap-[3.5px] cursor-pointer"
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
          <button
            onClick={() => {
              toggleLocale();
              setIsMenuOpen(false);
            }}
            className="cursor-pointer font-[family-name:var(--font-roboto)] text-lg text-[#4F5E4A]"
          >
            {t.header.localeSwitcherLabel}
          </button>
        </div>
      )}
    </header>
  );
}
