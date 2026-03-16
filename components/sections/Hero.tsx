"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[clamp(530px,52.7vw,1011px)] overflow-hidden max-lg:h-[530px] max-md:h-[560px]">
      {/* Blurred leaf shadow — decorative background */}
      <div className="pointer-events-none absolute -left-[50%] -top-[60%] h-[180%] w-[120%] rotate-[58.66deg] opacity-44 blur-[14px] max-md:blur-[4px] max-md:opacity-43 max-md:-left-[130%] max-md:-top-[30%] max-md:h-[100%] max-md:w-[180%]">
        <Image
          src="/images/leaf-blur-bg.png"
          alt=""
          fill
          className="object-contain"
          sizes="120vw"
          priority
        />
      </div>

      {/* Main hero content — fluid container */}
      <div className="relative mx-auto w-full max-w-[1920px] px-20 pt-[15.5vw] max-lg:px-5 max-lg:max-w-[768px] max-lg:pt-[156px] max-md:px-[10px] max-md:max-w-[340px] max-md:pt-[86px]">
        {/* "GREEN WORLD" — badge anchored to "L" */}
        {/* eslint-disable-next-line react/jsx-no-literals */}
        <h1 className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(7rem,13vw,15.5rem)] font-normal leading-[0.82] tracking-[-0.57vw] uppercase text-[#4F5E4A] max-lg:text-[113px] max-lg:tracking-[-4.52px] max-md:text-[14.4vw] max-md:tracking-[-1.84px] max-md:text-center">{"Green wor"}<span className="relative">{"l"}<Image
              src="/images/high-quality-badge.png"
              alt=""
              width={320}
              height={165}
              className="pointer-events-none absolute bottom-[65%] left-1/2 -translate-x-1/2 w-[clamp(5.9rem,16.7vw,20rem)] h-auto max-lg:w-[94px] max-md:w-[121px] max-md:bottom-[120%] max-md:left-[200%]"
              priority
            /></span>{"d"}</h1>

        {/* "TOMATOES" — tomato anchored to "O" */}
        <div className="-mt-[0.3vw] ml-[23%] max-lg:ml-[23%] max-lg:-mt-[2px] max-md:ml-0 max-md:text-center max-md:-mt-[1px]">
          <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(4.5rem,10.4vw,12.5rem)] font-normal leading-[0.82] tracking-[-0.42vw] uppercase text-[#4F5E4A] max-lg:text-[71px] max-lg:tracking-[-2.84px] max-md:text-[11.25vw] max-md:tracking-[-1.44px]">{"t"}<span className="relative">{"o"}<span className="pointer-events-none absolute left-1/2 top-1/2 flex h-[1.45em] w-[1.7em] -translate-x-1/2 -translate-y-1/2 items-center justify-center max-lg:h-[106px] max-lg:w-[150px] max-md:hidden">
                <Image
                  src="/images/tomato-splash.svg"
                  alt=""
                  width={298}
                  height={164}
                  className="rotate-[29.39deg] w-[1.5em] h-auto max-lg:w-[102px]"
                />
              </span><span className="absolute left-1/6 top-1/2 block h-[1.45em] w-[1.45em] -translate-x-1/2 -translate-y-1/2 max-lg:h-[56px] max-lg:w-[56px] max-md:hidden">
                <Image
                  src="/images/tomato-main.png"
                  alt="Tomato"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 27px, (max-width: 1024px) 56px, 290px"
                  priority
                />
              </span></span>{"matoes"}</p>
        </div>

        {/* Content block — subtitle, description, CTA */}
        <div className="-mt-[0.3vw] ml-[40%] flex w-[clamp(12.5rem,22vw,25rem)] flex-col gap-5 max-lg:ml-[calc(40%+7.8px)] max-lg:w-[212px] max-lg:gap-4 max-md:ml-0 max-md:w-full max-md:items-center max-md:text-center max-md:gap-4 max-md:mt-[40px]">
          <p className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,2.8vw,3.375rem)] font-normal leading-[0.82] tracking-[-1.08px] text-[#4F5E4A] opacity-85 max-lg:text-[36px] max-lg:leading-[0.74] max-lg:tracking-[-0.72px] max-md:text-[32px] max-md:tracking-[-0.64px] max-md:w-[176px]">
            {t.hero.subtitle}
          </p>

          <p className="w-full max-w-[336px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#4F5E4A] opacity-85 max-lg:max-w-none max-lg:text-sm max-lg:tracking-[-0.42px] max-md:w-full max-md:text-center max-md:text-sm">
            {t.hero.description}
          </p>

          <button className="flex h-[45px] w-full max-w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90 max-lg:w-[212px] max-lg:h-[30px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:w-full max-md:max-w-none max-md:h-[45px] max-md:text-sm">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
