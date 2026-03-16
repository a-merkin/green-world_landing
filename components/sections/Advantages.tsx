"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Advantages() {
  const { t } = useTranslation();

  // "Quality control" is the highlighted word (index 2) with description
  const highlightIndex = 2;

  return (
    <section id="advantages">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        <SectionLabel text={t.advantages.sectionLabel} />
      </div>

      {/* Words stack — full width, centered text */}
      <div className="mt-[28px] flex flex-col items-center gap-[28px] max-lg:gap-[12px] max-md:gap-[12px]">
        {t.advantages.words.map((word, i) => {
          const isHighlighted = i === highlightIndex;

          if (isHighlighted) {
            return (
              <div key={word} className="relative w-full">
                {/* Background band */}
                <div className="absolute inset-0 bg-[#4F5E4A] opacity-15 mix-blend-multiply" />

                {/* Title */}
                <p className="pt-[16px] text-center font-[family-name:var(--font-roboto)] text-[clamp(4rem,6.67vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-[#4F5E4A] max-lg:text-[64px] max-lg:tracking-[-1.28px] max-lg:pt-[7px] max-md:text-[32px] max-md:tracking-[-0.64px] max-md:pt-[7px]">
                  {word}
                </p>

                {/* Icon + description */}
                <div className="mx-auto flex w-full max-w-[563px] items-start gap-[20px] px-5 pb-[30px] pt-[20px] max-lg:max-w-[335px] max-lg:justify-end max-lg:gap-[10px] max-lg:pb-[20px] max-lg:pt-[12px] max-md:max-w-full max-md:flex-col max-md:items-center max-md:gap-[8px]">
                  <Image
                    src="/images/quality-control-icon.svg"
                    alt=""
                    width={61}
                    height={65}
                    className="shrink-0 max-lg:w-[40px] max-lg:h-[43px] max-md:w-[24px] max-md:h-[30px]"
                  />
                  <p className="max-w-[483px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#4F5E4A] max-lg:max-w-[285px] max-lg:text-sm max-md:max-w-full max-md:text-[15px] max-md:leading-[0.95] max-md:text-center">
                    {t.advantages.qualityDescription}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <p
              key={word}
              className="text-center font-[family-name:var(--font-roboto)] text-[clamp(4rem,6.67vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em] text-[#4F5E4A] opacity-55 max-lg:text-[64px] max-lg:tracking-[-1.28px] max-md:text-[32px] max-md:tracking-[-0.64px]"
            >
              {word}
            </p>
          );
        })}
      </div>
    </section>
  );
}
