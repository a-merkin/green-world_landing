"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* Section label */}
        <SectionLabel text={t.about.sectionLabel} />

        {/* Layout: desktop=row, tablet=row(smaller), mobile=column */}
        <div className="mt-[51px] flex gap-5 max-lg:mt-[28px] max-md:mt-[20px] max-md:flex-col">
          {/* Left: Main photo — desktop + tablet only */}
          <div className="relative w-[39%] max-w-[692px] shrink-0 overflow-hidden aspect-[692/553] max-lg:w-[285px] max-lg:aspect-auto max-lg:h-[288px] max-md:hidden">
            <Image
              src="/images/about-main.jpg"
              alt="Green World greenhouse"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 0px, (max-width: 1024px) 285px, 40vw"
            />
          </div>

          {/* Right: Text content */}
          <div className="flex flex-1 min-w-0 flex-col">
            {/* Description — "GREEN WORLD" bold + rest */}
            <p className="font-[family-name:var(--font-roboto)] text-[clamp(1.4rem,1.875vw,2.25rem)] font-medium leading-none tracking-normal text-[#333] text-justify max-lg:text-[23px] max-md:text-[19px]">
              <span className="font-bold">GREEN WORLD </span>
              {t.about.text}
            </p>

            {/* Tinted greenhouse photo — visible on tablet between text and features */}
            <div className="relative hidden overflow-hidden max-lg:mt-[20px] max-lg:block max-lg:h-[288px] max-lg:w-full max-md:hidden">
              <Image
                src="/images/about-greenhouse.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-color" />
            </div>

            {/* Mobile-only: tinted greenhouse photo */}
            <div className="relative hidden overflow-hidden max-md:mt-[13px] max-md:block max-md:h-[245px] max-md:w-full">
              <Image
                src="/images/about-greenhouse.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-color" />
            </div>

            {/* Mobile-only: Main photo */}
            <div className="relative hidden overflow-hidden max-md:mt-[17px] max-md:block max-md:h-[321px] max-md:w-full">
              <Image
                src="/images/about-main.jpg"
                alt="Green World greenhouse"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Subtitle */}
            <p className="mt-[20px] font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.15vw,1.375rem)] font-medium leading-none text-[#333] max-lg:text-base max-md:mt-[18px] max-md:text-[19px]">
              {t.about.subtitle}
            </p>

            {/* Features list + small photo */}
            <div className="mt-[18px] flex gap-5 max-lg:mt-[14px] max-lg:flex-col max-md:mt-[10px]">
              {/* Features */}
              <ul className="flex-1 min-w-0 font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] text-justify max-lg:w-full max-lg:text-sm max-md:text-base">
                {t.about.features.map((feature) => (
                  <li key={feature} className="mb-[10px] last:mb-0 max-lg:mb-[5px]">
                    • {feature}
                  </li>
                ))}
              </ul>

              {/* Small greenhouse photo — desktop only */}
              <div className="relative aspect-[336/238] w-[30%] max-w-[336px] shrink-0 overflow-hidden max-lg:hidden">
                <Image
                  src="/images/about-greenhouse.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-color" />
              </div>
            </div>

            {/* CTA button */}
            <button className="mt-[20px] flex h-[45px] w-full max-w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-colors hover:bg-[#6C7B67] max-lg:max-w-[212px] max-lg:h-[30px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:mt-[30px] max-md:max-w-none max-md:h-[45px]">
              {t.about.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
