"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[1011px] overflow-hidden">
      {/* Blurred leaf shadow — decorative background */}
      <div className="pointer-events-none absolute -left-[50%] -top-[60%] h-[180%] w-[120%] rotate-[58.66deg] opacity-44 blur-[14px]">
        <Image
          src="/images/leaf-blur-bg.png"
          alt=""
          fill
          className="object-contain"
          sizes="120vw"
          priority
        />
      </div>

      {/* Main hero content — centered container */}
      {/* Font sizes adjusted from Figma originals (275/200/74px) for Georgia fallback.
          Restore to original values when LTC Metropolitan W00 is loaded. */}
      <div className="relative mx-auto max-w-[1774px] pt-[297px]">
        {/* "GREEN WORLD" — badge anchored to "L" */}
        {/* eslint-disable-next-line react/jsx-no-literals */}
        <h1 className="whitespace-nowrap font-[family-name:var(--font-display)] text-[248px] font-normal leading-[0.82] tracking-[-11px] uppercase text-[#4F5E4A]">{"Green wor"}<span className="relative">{"l"}<Image
              src="/images/high-quality-badge.png"
              alt=""
              width={320}
              height={165}
              className="pointer-events-none absolute bottom-[65%] left-1/2 -translate-x-1/2"
              priority
            /></span>{"d"}</h1>

        {/* "TOMATOES" — tomato anchored to "O" */}
        <div className="-mt-[6px] ml-[409px]">
          <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-[200px] font-normal leading-[0.82] tracking-[-8px] uppercase text-[#4F5E4A]">{"t"}<span className="relative">{"o"}<span className="pointer-events-none absolute left-1/2 top-1/2 flex h-[289px] w-[340px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <Image
                  src="/images/tomato-splash.svg"
                  alt=""
                  width={298}
                  height={164}
                  className="rotate-[29.39deg]"
                />
              </span><span className="absolute left-1/6 top-1/2 block h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/tomato-main.png"
                  alt="Tomato"
                  fill
                  className="object-cover"
                  sizes="290px"
                  priority
                />
              </span></span>{"matoes"}</p>
        </div>

        {/* Content block — subtitle, description, CTA */}
        <div className="-mt-[5px] ml-[719px] flex w-[401px] flex-col gap-5">
          {/* Figma: 74px — reduced for Georgia fallback to maintain 2-line layout */}
          <p className="font-[family-name:var(--font-display)] text-[54px] font-normal leading-[0.82] tracking-[-1.08px] text-[#4F5E4A] opacity-85">
            {t.hero.subtitle}
          </p>

          <p className="w-[336px] font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#4F5E4A] opacity-85">
            {t.hero.description}
          </p>

          <button className="flex h-[45px] w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
