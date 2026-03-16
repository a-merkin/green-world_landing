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
        className="pointer-events-none absolute right-20 top-[101px] max-w-[20vw] h-auto max-lg:right-[calc(50%-128px)] max-lg:top-[60px] max-lg:max-w-[256px] max-md:left-[39px] max-md:right-auto max-md:top-[294px] max-md:max-w-[241px]"
      />

      {/* Contact button — centered on leaf decoration */}
      <Link
        href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`}
        className="absolute right-[clamp(100px,11.7vw,224px)] top-[clamp(170px,12.8vw,245px)] z-10 flex size-[73px] items-center justify-center rounded-full bg-[#F0EAE2] transition-opacity hover:opacity-90 max-lg:right-auto max-lg:left-[78%] max-lg:top-[167px] max-lg:size-[42px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[383px] max-md:size-[63px]"
      >
        <Image
          src="/images/phone-icon.svg"
          alt={t.footer.callAlt}
          width={33}
          height={33}
          className="rotate-90 max-lg:w-[18px] max-lg:h-[18px] max-md:w-[27px] max-md:h-[27px]"
        />
      </Link>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="relative flex h-[608px] mx-20 max-lg:hidden">
        {/* LEFT COLUMN */}
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

          {/* Bottom: Decorative text */}
          <div className="mt-auto overflow-hidden border-t border-[#62694C] pt-5">
            <Image
              src="/images/tomato-icon.png"
              alt=""
              width={76}
              height={79}
              className="relative z-10 ml-[70px] mb-[-29px]"
            />
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(3rem,4.8vw,5.75rem)] font-normal leading-none tracking-[-0.02em] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[0]}
            </p>
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(3rem,4.8vw,5.75rem)] font-normal leading-none tracking-[-0.02em] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[1]}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex w-[50.6%] flex-col pl-5">
          {/* Location */}
          <div className="flex items-center gap-1.5 pt-[30px]">
            <Image src="/images/location-pin.svg" alt="" width={15} height={15} />
            <span className="font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D]">
              {t.footer.address}
            </span>
          </div>

          {/* CONTACT US */}
          <p className="mt-[clamp(80px,9.1vw,175px)] whitespace-nowrap font-[family-name:var(--font-inter)] text-[clamp(3rem,4.8vw,5.75rem)] font-normal leading-none tracking-[-0.02em] uppercase text-[#C4D99D]">
            {t.footer.contactUs}
          </p>

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
      </div>

      {/* ===== TABLET LAYOUT (768px) ===== */}
      <div className="relative hidden h-[462px] mx-5 max-lg:flex max-lg:flex-row max-md:hidden">
        {/* Left column */}
        <div className="flex w-[40%] flex-col border-r border-[#62694C] pr-5">
          <div className="flex items-start justify-between pt-[23px]">
            <Image src="/images/logo-light.png" alt="Green World" width={90} height={26} />
            <nav className="flex flex-col items-end gap-[11px] font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
                  {t.header.nav[link.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto overflow-hidden border-t border-[#62694C] pt-4">
            <Image src="/images/tomato-icon.png" alt="" width={26} height={27} className="relative z-10 ml-[21px] mb-[-10px]" />
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-normal leading-none tracking-[-0.72px] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[0]}
            </p>
            <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-normal leading-none tracking-[-0.72px] uppercase text-[#F0EAE2]">
              {t.footer.decorativeLines[1]}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="flex w-[60%] flex-col pl-5">
          <div className="flex items-center gap-1.5 pt-[23px]">
            <Image src="/images/location-pin.svg" alt="" width={13} height={13} />
            <span className="font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
              {t.footer.address}
            </span>
          </div>

          <p className="mt-[80px] whitespace-nowrap font-[family-name:var(--font-inter)] text-[44px] font-normal leading-none tracking-[-0.88px] uppercase text-[#C4D99D]">
            {t.footer.contactUs}
          </p>

          <div className="mt-[30px] grid grid-cols-2 gap-x-[clamp(1.5rem,5vw,5rem)] gap-y-[20px]">
            <div>
              <p className="mb-2 font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">{t.footer.labels.mobile}</p>
              <div className="flex items-center gap-2">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[#C4D99D] opacity-25" />
                  <a href={`tel:${contacts.mobile.replace(/[\s()-]/g, "")}`} className="relative block px-1.5 py-1 font-[family-name:var(--font-roboto)] text-sm font-medium leading-none text-[#C4D99D] whitespace-nowrap">
                    {contacts.mobile}
                  </a>
                </div>
                <a href={`https://wa.me/${contacts.mobile.replace(/[\s()-+]/g, "")}`} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
                  <Image src="/images/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                </a>
              </div>
            </div>
            <ContactItem label={t.footer.labels.office} value={contacts.office} href={`tel:${contacts.office.replace(/[\s()-]/g, "")}`} />
            <ContactItem label={t.footer.labels.email} value={contacts.email} href={`mailto:${contacts.email}`} labelFont="roboto" />
            <ContactItem label={t.footer.labels.russia} value={contacts.russia} href={`tel:${contacts.russia.replace(/[\s()-]/g, "")}`} />
          </div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (< 768px) ===== */}
      <div className="relative hidden min-h-[644px] px-[10px] max-md:block">
        {/* Logo */}
        <div className="pt-[40px]">
          <Image src="/images/logo-light.png" alt="Green World" width={69} height={20} />
        </div>

        {/* Location */}
        <div className="absolute right-[10px] top-[40px] flex items-center gap-1.5">
          <Image src="/images/location-pin.svg" alt="" width={13} height={13} />
          <span className="font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
            {t.footer.address}
          </span>
        </div>

        {/* Nav */}
        <nav className="mt-[44px] flex flex-col gap-[11px] font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
              {t.header.nav[link.key]}
            </Link>
          ))}
        </nav>

        {/* Contact details — stacked */}
        <div className="absolute right-[10px] top-[92px] flex flex-col gap-[20px]">
          <div>
            <div className="flex items-center gap-2 mb-1">
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

        {/* CONTACT US */}
        <p className="mt-[100px] whitespace-nowrap text-center font-[family-name:var(--font-inter)] text-[clamp(2.5rem,15vw,3.5625rem)] font-normal leading-none tracking-[-1.5px] uppercase text-[#C4D99D]">
          {t.footer.contactUs}
        </p>

        {/* Decorative text */}
        <div className="absolute bottom-[74px] left-[10px]">
          <Image src="/images/tomato-icon.png" alt="" width={26} height={27} className="relative z-10 ml-[23px] mb-[-10px]" />
          <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-normal leading-none tracking-[-0.72px] uppercase text-[#F0EAE2]">
            {t.footer.decorativeLines[0]}
          </p>
          <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[36px] font-normal leading-none tracking-[-0.72px] uppercase text-[#F0EAE2]">
            {t.footer.decorativeLines[1]}
          </p>
        </div>
      </div>

      {/* ===== COPYRIGHT BAR ===== */}
      <div className="relative mx-20 flex items-center border-t border-[#62694C] py-5 max-lg:mx-5 max-md:mx-[10px]">
        <p className="font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm">
          © Copyright GREENWORLD.
        </p>
        <p className="absolute left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#C4D99D] opacity-70 max-lg:text-sm max-md:hidden">
          {t.footer.copyright}
        </p>
        <p className="hidden max-md:block font-[family-name:var(--font-roboto)] text-sm leading-none text-[#C4D99D] opacity-70">
          {t.footer.copyright}
        </p>
        <p className="ml-auto font-[family-name:var(--font-roboto)] text-base leading-none text-[#C4D99D] opacity-70 max-lg:text-sm">
          2025
        </p>
      </div>
    </footer>
  );
}
