"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="mx-auto max-w-[1760px]">
        {/* Section label */}
        <SectionLabel text={t.about.sectionLabel} />

        {/* Two-column layout */}
        <div className="mt-[51px] flex gap-5">
          {/* Left: Main photo */}
          <div className="relative h-[553px] w-[692px] shrink-0 overflow-hidden">
            <Image
              src="/images/about-main.jpg"
              alt="Green World greenhouse"
              fill
              className="object-cover"
              sizes="692px"
            />
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col">
            {/* Description — "GREEN WORLD" bold + rest */}
            <p className="font-[family-name:var(--font-roboto)] text-[36px] font-medium leading-none tracking-normal text-[#333] text-justify">
              <span className="font-bold">GREEN WORLD </span>
              {t.about.text}
            </p>

            {/* Subtitle */}
            <p className="mt-[20px] font-[family-name:var(--font-roboto)] text-[22px] font-medium leading-none text-[#333]">
              {t.about.subtitle}
            </p>

            {/* Features list + small photo */}
            <div className="mt-[18px] flex gap-5">
              {/* Features */}
              <ul className="w-[692px] shrink-0 font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#333] text-justify">
                {t.about.features.map((feature) => (
                  <li key={feature} className="mb-[10px] last:mb-0">
                    • {feature}
                  </li>
                ))}
              </ul>

              {/* Small greenhouse photo with green tint */}
              <div className="relative h-[238px] w-[336px] shrink-0 overflow-hidden">
                <Image
                  src="/images/about-greenhouse.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="336px"
                />
                <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-color" />
              </div>
            </div>

            {/* CTA button */}
            <button className="mt-[20px] flex h-[45px] w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90">
              {t.about.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
