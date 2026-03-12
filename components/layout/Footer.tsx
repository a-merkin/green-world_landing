"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks, contacts } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

function ContactItem({
  label,
  value,
  href,
  labelFont = "inter",
}: {
  label: string;
  value: string;
  href: string;
  labelFont?: "inter" | "roboto";
}) {
  const labelClass =
    labelFont === "roboto"
      ? "font-[family-name:var(--font-roboto)]"
      : "font-[family-name:var(--font-inter)] tracking-[-0.32px]";

  return (
    <div>
      <p className={`mb-2 text-base leading-none text-[#C4D99D] ${labelClass}`}>
        {label}
      </p>
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
        <a
          href={href}
          className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-lg font-medium leading-none text-[#C4D99D] whitespace-nowrap"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contacts"
      className="relative z-50 w-full overflow-hidden bg-[#4F5E4A]"
    >
      {/* Shadow overlay */}
      <Image
        src="/images/shadow-overlay.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-56 mix-blend-soft-light"
        sizes="100vw"
      />

      {/* Decorative leaf — truly decorative, absolute is fine */}
      <Image
        src="/images/leaf-decoration.svg"
        alt=""
        width={360}
        height={360}
        className="pointer-events-none absolute right-20 top-[101px]"
      />

      <div className="relative flex h-[608px] mx-20">
        {/* ===== LEFT COLUMN ===== */}
        <div className="flex w-[49.4%] flex-col border-r border-[#62694C] pr-5">
          {/* Top: Logo + Nav */}
          <div className="flex items-start justify-between pt-[30px]">
            <Image
              src="/images/logo-light.png"
              alt="Green World"
              width={124}
              height={36}
            />
            <nav className="flex flex-col items-end gap-[11px] font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D]">
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
          </div>

          {/* Bottom: Decorative text — overflows intentionally */}
          <div className="mt-auto overflow-visible border-t border-[#62694C] pt-5">
            <Image
              src="/images/tomato-icon.png"
              alt=""
              width={76}
              height={79}
              className="ml-[76px] mb-1"
            />
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[92px] font-normal leading-none tracking-[-6.44px] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[0]}
            </p>
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[92px] font-normal leading-none tracking-[-6.44px] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[1]}
            </p>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="flex w-[50.6%] flex-col pl-5">
          {/* Location */}
          <div className="flex items-center gap-1.5 pt-[30px]">
            <Image
              src="/images/location-pin.svg"
              alt=""
              width={15}
              height={15}
            />
            <span className="font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D]">
              {t.footer.address}
            </span>
          </div>

          {/* CONTACT US + button */}
          <div className="mt-[175px] flex items-center gap-6">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[92px] font-normal leading-none tracking-[-6.44px] uppercase text-[#C4D99D]">
              {t.footer.contactUs}
            </p>
            <Link
              href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
              className="flex size-[73px] shrink-0 items-center justify-center rounded-full bg-[#F0EAE2] transition-opacity hover:opacity-90"
            >
              <Image
                src="/images/phone-icon.svg"
                alt={t.footer.callAlt}
                width={33}
                height={33}
                className="rotate-90"
              />
            </Link>
          </div>

          {/* Contact details grid */}
          <div className="mt-[40px] grid grid-cols-[auto_1fr] gap-x-[130px] gap-y-[50px]">
            {/* Mobile */}
            <div>
              <p className="mb-2 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D]">
                {t.footer.labels.mobile}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
                  <a
                    href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
                    className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-lg font-medium leading-none text-[#C4D99D] whitespace-nowrap"
                  >
                    {contacts.mobile}
                  </a>
                </div>
                <a
                  href={`https://wa.me/${contacts.mobile.replace(/[\s()-+]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <Image
                    src="/images/whatsapp.svg"
                    alt="WhatsApp"
                    width={23}
                    height={23}
                  />
                </a>
              </div>
            </div>

            {/* Main office */}
            <ContactItem
              label={t.footer.labels.office}
              value={contacts.office}
              href={`tel:${contacts.office.replace(/[\s()-]/g, "")}`}
            />

            {/* Email */}
            <ContactItem
              label={t.footer.labels.email}
              value={contacts.email}
              href={`mailto:${contacts.email}`}
              labelFont="roboto"
            />

            {/* Branch in Russia */}
            <ContactItem
              label={t.footer.labels.russia}
              value={contacts.russia}
              href={`tel:${contacts.russia.replace(/[\s()-]/g, "")}`}
            />
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="relative mx-20 flex items-center border-t border-[#62694C] py-5">
        <p className="font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70">
          © Copyright GREENWORLD.
        </p>
        <p className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D] opacity-70">
          {t.footer.copyright}
        </p>
        <p className="ml-auto font-[family-name:var(--font-roboto)] text-base leading-none text-[#C4D99D] opacity-70">
          2025
        </p>
      </div>
    </footer>
  );
}
