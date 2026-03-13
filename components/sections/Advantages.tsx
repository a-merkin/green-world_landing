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
      <div className="mx-auto max-w-[1760px]">
        <SectionLabel text={t.advantages.sectionLabel} />
      </div>

      {/* Words stack — full width, centered text */}
      <div className="mt-[28px] flex flex-col items-center gap-[28px]">
        {t.advantages.words.map((word, i) => {
          const isHighlighted = i === highlightIndex;

          if (isHighlighted) {
            return (
              <div key={word} className="relative w-full">
                {/* Background band */}
                <div className="absolute inset-0 bg-[#4F5E4A] opacity-15 mix-blend-multiply" />

                {/* Title */}
                <p className="pt-[16px] text-center font-[family-name:var(--font-roboto)] text-[128px] font-black uppercase leading-[0.85] tracking-[-2.56px] text-[#4F5E4A]">
                  {word}
                </p>

                {/* Icon + description */}
                <div className="mx-auto flex w-[563px] items-start gap-[20px] pb-[30px] pt-[20px]">
                  <Image
                    src="/images/quality-control-icon.svg"
                    alt=""
                    width={61}
                    height={65}
                    className="shrink-0"
                  />
                  <p className="w-[483px] font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#4F5E4A]">
                    {t.advantages.qualityDescription}
                  </p>
                </div>
              </div>
            );
          }

          return (
            <p
              key={word}
              className="text-center font-[family-name:var(--font-roboto)] text-[128px] font-black uppercase leading-[0.85] tracking-[-2.56px] text-[#4F5E4A] opacity-55"
            >
              {word}
            </p>
          );
        })}
      </div>
    </section>
  );
}
