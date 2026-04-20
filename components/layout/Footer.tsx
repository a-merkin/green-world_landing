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
      <p className={`mb-2 text-base leading-none text-[#C4D99D] max-lg:text-sm ${labelClass}`}>
        {label}
      </p>
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
        <a
          href={href}
          className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-lg font-medium leading-none text-[#C4D99D] whitespace-nowrap max-lg:text-sm"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const decorativeLines = t.footer.decorativeLines.filter(Boolean);

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

      {/* ===== DESKTOP + TABLET LAYOUT (unified) ===== */}
      <div className="relative flex h-[608px] mx-20 max-lg:h-[462px] max-lg:mx-5 max-md:hidden">
        {/* LEFT COLUMN */}
        <div className="flex w-[49.4%] max-lg:w-[40%] flex-col border-r border-[#62694C] pr-5">
          {/* Top: Logo + Nav */}
          <div className="flex items-start justify-between pt-[30px] max-lg:pt-[23px]">
            <Image
              src="/images/logo-light.png"
              alt="Green World"
              width={124}
              height={36}
              className="max-lg:h-auto max-lg:w-[90px] [filter:contrast(1.15)_brightness(1.08)_saturate(0.92)]"
            />
            <nav className="flex flex-col items-end gap-[11px] font-[family-name:var(--font-roboto)] text-base leading-none text-[#C4D99D] max-lg:text-sm">
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

          {/* Bottom: Decorative text */}
          <div className="mt-auto overflow-x-clip overflow-y-visible">
            <div className="relative border-b border-[#62694C] pb-[0.1em] pt-5 max-lg:pt-4 text-[clamp(2.25rem,4.8vw,5.75rem)] max-lg:text-[28px]">
              <Image
                src="/images/tomato-icon.png"
                alt=""
                width={76}
                height={79}
                className="absolute bottom-[39%] left-[1em] z-10 h-auto w-[0.72em]"
              />
              <p className="translate-y-[0.22em] whitespace-nowrap font-[family-name:var(--font-inter)] text-[1em] font-normal leading-none tracking-[-0.02em] uppercase text-[#F0EAE2] max-lg:tracking-[-0.72px]">
                {decorativeLines[0]}
              </p>
            </div>
            {decorativeLines.slice(1).map((line) => (
              <div key={line} className="border-b border-[#62694C]">
                <p className="translate-y-[0.12em] whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(2.25rem,4.8vw,5.75rem)] font-normal leading-none tracking-[-0.02em] uppercase text-[#F0EAE2] max-lg:text-[28px] max-lg:tracking-[-0.56px]">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — DESKTOP (> 1024px) */}
        <div className="flex w-[50.6%] flex-col pl-5 max-lg:hidden">
          {/* Location */}
          <div className="flex items-center gap-1.5 pt-[30px]">
            <Image src="/images/location-pin.svg" alt="" width={15} height={15} />
            <span className="font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D]">
              {t.footer.address}
            </span>
          </div>

          {/* CONTACT US + Leaf button */}
          <div className="mt-[clamp(80px,9.1vw,175px)] flex items-center justify-between">
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(2.75rem,4.8vw,5.75rem)] font-normal leading-none tracking-[-0.02em] uppercase text-[#C4D99D]">
              {t.footer.contactUs}
            </p>
            <Link
              href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
              className="relative overflow-visible flex size-[73px] items-center justify-center rounded-full bg-[#F0EAE2] transition-opacity hover:opacity-90"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[360px] pointer-events-none">
                <Image src="/images/leaf-decoration.svg" alt="" fill />
              </div>
              <Image
                src="/images/phone-icon.svg"
                alt={t.footer.callAlt}
                width={33}
                height={33}
                className="relative z-10 rotate-90"
              />
            </Link>
          </div>

          {/* Contact details grid */}
          <div className="mt-[40px] grid grid-cols-[auto_1fr] gap-x-[clamp(2rem,6.8vw,8.125rem)] gap-y-[27px]">
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
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={23} height={23} />
                </a>
              </div>
            </div>
            <ContactItem label={t.footer.labels.office} value={contacts.office} href={`tel:${contacts.office.replace(/[\s()-]/g, "")}`} />
            <ContactItem label={t.footer.labels.email} value={contacts.email} href={`mailto:${contacts.email}`} labelFont="roboto" />
            <ContactItem label={t.footer.labels.russia} value={contacts.russia} href={`tel:${contacts.russia.replace(/[\s()-]/g, "")}`} />
          </div>
        </div>

        {/* RIGHT COLUMN — TABLET (768–1024px) */}
        <div className="hidden w-[60%] pl-5 max-lg:grid max-md:hidden grid-cols-[1.2fr_1fr] gap-x-[clamp(1.5rem,5vw,5rem)]">
          {/* Row 1: Location — spans both columns */}
          <div className="col-span-2 flex items-center gap-1.5 pt-[23px]">
            <Image src="/images/location-pin.svg" alt="" width={13} height={13} />
            <span className="font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
              {t.footer.address}
            </span>
          </div>

          {/* Row 2: CONTACT US (col 1) + Leaf btn (col 2) */}
          <p className="mt-[80px] self-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[44px] font-normal leading-none tracking-[-0.88px] uppercase text-[#C4D99D]">
            {t.footer.contactUs}
          </p>
          <Link
            href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
            className="relative mt-[80px] self-center overflow-visible flex size-[42px] items-center justify-center rounded-full bg-[#F0EAE2] transition-opacity hover:opacity-90"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[256px] pointer-events-none">
              <Image src="/images/leaf-decoration.svg" alt="" fill />
            </div>
            <Image
              src="/images/phone-icon.svg"
              alt={t.footer.callAlt}
              width={18}
              height={18}
              className="relative z-10 rotate-90"
            />
          </Link>

          {/* Row 3: Mobile (col 1) + Office (col 2) */}
          <div className="mt-[30px]">
            <p className="mb-2 font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
              {t.footer.labels.mobile}
            </p>
            <div className="flex items-center gap-2">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
                <a
                  href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
                  className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-sm font-medium leading-none text-[#C4D99D] whitespace-nowrap"
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
                <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
              </a>
            </div>
          </div>
          <div className="mt-[30px]">
            <ContactItem label={t.footer.labels.office} value={contacts.office} href={`tel:${contacts.office.replace(/[\s()-]/g, "")}`} />
          </div>

          {/* Row 4: Email (col 1) + Russia (col 2) */}
          <div className="mt-[20px]">
            <ContactItem label={t.footer.labels.email} value={contacts.email} href={`mailto:${contacts.email}`} labelFont="roboto" />
          </div>
          <div className="mt-[20px]">
            <ContactItem label={t.footer.labels.russia} value={contacts.russia} href={`tel:${contacts.russia.replace(/[\s()-]/g, "")}`} />
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (< 768px) ===== */}
      <div className="relative hidden min-h-[644px] px-[10px] max-md:flex max-md:flex-col">
        {/* Two-column grid: Nav left, Logo+Location+Contacts right */}
        <div className="grid grid-cols-[1fr_auto] pt-[40px]">
          {/* Left column: Logo + Nav */}
          <div className="flex flex-col">
            <Image
              src="/images/logo-light.png"
              alt="Green World"
              width={69}
              height={20}
              className="[filter:contrast(1.15)_brightness(1.08)_saturate(0.92)]"
            />
            <nav className="mt-[38px] flex flex-col gap-[11px] font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
                  {t.header.nav[link.key]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right column: Location + Contacts */}
          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex items-center gap-1.5">
              <Image src="/images/location-pin.svg" alt="" width={13} height={13} />
              <span className="font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
                {t.footer.address}
              </span>
            </div>
            <div className="mt-[28px]">
              <div className="flex items-center justify-between mb-1">
                <p className="font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">{t.footer.labels.mobile}</p>
                <a href={`https://wa.me/${contacts.mobile.replace(/[\s()-+]/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                </a>
              </div>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
                <a href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`} className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-sm font-medium leading-none text-[#C4D99D] whitespace-nowrap">
                  {contacts.mobile}
                </a>
              </div>
            </div>
            <ContactItem label={t.footer.labels.office} value={contacts.office} href={`tel:${contacts.office.replace(/[\s()-]/g, "")}`} />
            <ContactItem label={t.footer.labels.russia} value={contacts.russia} href={`tel:${contacts.russia.replace(/[\s()-]/g, "")}`} />
            <ContactItem label={t.footer.labels.email} value={contacts.email} href={`mailto:${contacts.email}`} labelFont="roboto" />
          </div>
        </div>

        {/* CONTACT US */}
        <p className="mt-[21px] whitespace-nowrap text-center font-[family-name:var(--font-inter)] text-[15.2vw] font-normal leading-none tracking-[-1.14px] uppercase text-[#C4D99D]">
          {t.footer.contactUs}
        </p>

        {/* Leaf + Phone button */}
        <Link
          href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
          className="relative mx-auto mt-[17px] overflow-visible flex size-[63px] items-center justify-center rounded-full bg-[#F0EAE2] transition-opacity hover:opacity-90"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[241px] pointer-events-none">
            <Image src="/images/leaf-decoration.svg" alt="" fill />
          </div>
          <Image
            src="/images/phone-icon.svg"
            alt={t.footer.callAlt}
            width={27}
            height={27}
            className="relative z-10 rotate-90"
          />
        </Link>

        {/* Decorative text */}
        <div className="mt-auto pb-[4px]">
          <Image src="/images/tomato-icon.png" alt="" width={26} height={27} className="relative z-10 mb-[-8px] ml-[34px] w-[18px] h-auto" />
          {decorativeLines.map((line) => (
            <p key={line} className="whitespace-nowrap font-[family-name:var(--font-roboto)] text-[36px] font-normal leading-none tracking-[-0.72px] uppercase text-[#F0EAE2]" style={{ fontVariationSettings: "'wdth' 85" }}>
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="relative mx-20 flex items-center border-t border-[#62694C] py-5 max-lg:mx-5 max-md:mx-[10px] max-md:flex-wrap max-md:py-[18px]">
        <p className="font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm max-md:w-full">
          © Copyright GREENWORLD.
        </p>
        <p className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D] opacity-70 max-lg:text-sm max-md:static max-md:translate-x-0 max-md:mt-[6px] max-md:font-[family-name:var(--font-roboto)] max-md:tracking-normal">
          {t.footer.copyright}
        </p>
        <p className="ml-auto font-[family-name:var(--font-roboto)] text-base leading-none text-[#C4D99D] opacity-70 max-lg:text-sm max-md:mt-[6px]">
          2025
        </p>
      </div>
    </footer>
  );
}
