"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section className="relative h-[clamp(530px,52.7vw,1011px)] overflow-hidden max-lg:h-[530px] max-md:h-auto">
      {/* Blurred leaf shadow — decorative background */}
      <div className="pointer-events-none absolute -left-[75%] -top-[50%] z-[60] h-[180%] w-[100%] rotate-[58.66deg] opacity-44 blur-[14px] max-md:-left-[130%] max-md:-top-[30%] max-md:h-[100%] max-md:w-[180%] max-md:blur-[4px] max-md:opacity-43">
        <Image
          src="/images/leaf-blur-bg.png"
          alt=""
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      {/* Main hero content — fluid container */}
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col px-20 pt-[15.5vw] text-center max-lg:max-w-[768px] max-lg:px-5 max-lg:pt-[156px] max-md:max-w-none max-md:px-[10px] max-md:pt-[86px]">

        {/* High-quality badge — standalone on mobile (straight version), hidden on desktop */}
        <div className="pointer-events-none mx-auto mb-[10vw] hidden w-[38vw] max-md:block">
          <Image
            src="/images/high-quality-badge-straight.png"
            alt=""
            width={243}
            height={158}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        {/* "GREEN WORLD" — badge anchored to "L" on desktop */}
        {/* eslint-disable-next-line react/jsx-no-literals */}
        <h1 className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(7rem,13vw,15.5rem)] font-normal leading-[0.82] tracking-[-0.57vw] uppercase text-[#4F5E4A] max-lg:text-[113px] max-lg:tracking-[-4.52px] max-md:text-[14.4vw] max-md:tracking-[-0.57vw]">
          {"Green wor"}
          <span className="relative">
            {"l"}
            <span className="pointer-events-none absolute bottom-[70%] left-[13%] aspect-[320/165] w-[clamp(10.5rem,16.7vw,20rem)] -translate-x-1/2 max-lg:w-[140px] max-md:hidden">
              <Image
                src="/images/high-quality-badge.png"
                alt=""
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 140px, 320px"
                priority
              />
            </span>
          </span>
          {"d"}
        </h1>

        {/* "TOMATOES" — tomato anchored to "O" */}
        <div className="-mt-[0.3vw] max-lg:-mt-[2px] max-md:mt-0">
          <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(4.5rem,10.4vw,12.5rem)] font-normal leading-[0.82] tracking-[-0.42vw] uppercase text-[#4F5E4A] max-lg:text-[71px] max-lg:tracking-[-2.84px] max-md:text-[11.25vw] max-md:tracking-[-0.42vw]">
            {"t"}
            <span className="relative">
              {"o"}
              <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-[1.45em] w-[1.7em] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <Image
                  src="/images/tomato-splash.svg"
                  alt=""
                  width={298}
                  height={164}
                  className="h-auto w-[1.5em] -scale-x-100 rotate-[29.39deg] translate-x-[15%] translate-y-[20%]"
                />
              </span>
              <span className="absolute left-1/6 top-1/2 block h-[1.45em] w-[1.45em] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/images/tomato-main.png"
                  alt="Tomato"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, (max-width: 1024px) 56px, 290px"
                  priority
                />
              </span>
            </span>
            {"matoes"}
          </p>
        </div>

        {/* Content block — subtitle, description, CTA */}
        <div className="-mt-[0.3vw] mx-auto flex w-[clamp(12.5rem,22vw,25rem)] flex-col items-stretch gap-5 text-left max-lg:w-[212px] max-lg:gap-4 max-md:mt-[12vw] max-md:w-full max-md:items-center max-md:gap-0 max-md:text-center">
          <p className={`whitespace-pre-line font-[family-name:var(--font-display)] font-normal leading-[0.74] text-[#4F5E4A] opacity-85 ${locale === "ru" ? "w-max text-[64px] tracking-[-1.28px] max-lg:text-[48px] max-lg:tracking-[-0.96px] max-md:w-auto max-md:text-[32px] max-md:tracking-[-0.64px]" : "text-[clamp(2.2rem,3.85vw,4.625rem)] tracking-[-1.48px] max-lg:text-[36px] max-lg:tracking-[-0.72px] max-md:text-[32px] max-md:tracking-[-0.64px]"} max-md:max-w-[55vw]`}>
            {t.hero.subtitle}
          </p>

          <p className="w-full max-w-[336px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#4F5E4A] opacity-85 max-lg:max-w-none max-lg:text-sm max-lg:tracking-[-0.42px] max-md:mt-[40px] max-md:max-w-none max-md:text-[14px] max-md:leading-[1.3] max-md:tracking-[-0.42px]">
            {t.hero.description}
          </p>

          <button className="flex h-[45px] w-full max-w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-colors hover:bg-[#6C7B67] max-lg:h-[30px] max-lg:w-[212px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:mt-[28px] max-md:h-[45px] max-md:w-full max-md:max-w-none max-md:text-sm">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
