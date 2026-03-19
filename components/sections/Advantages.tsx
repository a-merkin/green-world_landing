"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

const ICONS = [
  "/images/technology-icon.svg",
  "/images/organic-icon.svg",
  "/images/quality-control-icon.svg",
  "/images/flexible-range-icon.svg",
];

const HIGHLIGHT_INDEX = 2; // "Quality control" always expanded on mobile

export default function Advantages() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="advantages">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        <SectionLabel text={t.advantages.sectionLabel} />
      </div>

      {/* Words stack — full width, centered text */}
      <div className="mt-[28px] flex flex-col items-center gap-[28px] max-lg:gap-[12px] max-md:mt-[23px] max-md:gap-[12px]">
        {t.advantages.items.map((item, i) => {
          const isActive = activeIndex === i;
          const isHighlighted = i === HIGHLIGHT_INDEX;

          return (
            <div
              key={item.title}
              className="relative w-full max-md:cursor-default md:cursor-pointer"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(i)}
            >
              {/* Background band */}
              <div
                className="absolute inset-0 bg-[#4F5E4A] mix-blend-multiply transition-opacity duration-300 max-md:duration-300"
                style={{ opacity: isActive ? 0.15 : 0 }}
                data-highlight={isHighlighted ? "true" : undefined}
              />

              {/* Title */}
              <p
                className="relative pt-[16px] text-center font-[family-name:var(--font-roboto)] text-[clamp(4rem,6.67vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-[#4F5E4A] transition-opacity duration-300 max-lg:pt-[7px] max-lg:text-[64px] max-lg:tracking-[-1.28px] max-md:pt-[7px] max-md:text-[32px] max-md:tracking-[-0.64px] max-md:duration-300"
                style={{ opacity: isActive ? 1 : 0.55 }}
              >
                {item.title}
              </p>

              {/* Desktop/tablet: expandable description via hover */}
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out max-md:duration-300"
                style={{
                  gridTemplateRows: isActive ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div className="mx-auto flex w-full max-w-[563px] items-start gap-[20px] px-5 pb-[30px] pt-[20px] max-lg:max-w-[335px] max-lg:justify-end max-lg:gap-[10px] max-lg:pb-[20px] max-lg:pt-[12px] max-md:max-w-full max-md:flex-col max-md:items-center max-md:gap-[8px] max-md:pb-[20px] max-md:pt-[12px]">
                    <Image
                      src={ICONS[i]}
                      alt=""
                      width={61}
                      height={65}
                      className="shrink-0 max-lg:h-[43px] max-lg:w-[40px] max-md:h-[30px] max-md:w-[24px]"
                    />
                    <p className="max-w-[483px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#4F5E4A] max-lg:max-w-[285px] max-lg:text-sm max-md:max-w-full max-md:text-center max-md:text-[15px] max-md:leading-[0.95]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
