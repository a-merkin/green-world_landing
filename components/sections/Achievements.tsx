"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* Section label */}
        <SectionLabel text={t.achievements.sectionLabel} />

        {/* Stat cards — flex with percentage sizing, overlap on desktop */}
        <div className="mt-[51px] flex justify-center max-lg:mt-[30px] max-lg:justify-between max-md:flex-col max-md:items-center max-md:gap-[10px]">
          {t.achievements.items.map((item, i) => (
            <div
              key={item.number}
              className={`relative aspect-square w-[30.7%] max-w-[540px] shrink-0 max-lg:w-[24%] max-lg:max-w-[230px] max-lg:aspect-square max-md:w-[300px] max-md:max-w-full${i > 0 ? " -ml-[7.5%] max-lg:ml-0" : ""}`}
            >
              {/* Gradient border ring — on mobile, odd items get visible border */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(79,94,74,0.3)] to-[rgba(79,94,74,0)] max-md:bg-none max-md:border ${i % 2 === 1 ? "max-md:border-[#4F5E4A]" : "max-md:border-transparent"}`} />
              {/* Inner fill to mask center, leaving 1px border */}
              <div className="absolute inset-px rounded-full bg-[#F0EAE2]" />

              {/* Content */}
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="flex h-[62%] w-[48%] flex-col items-center justify-between max-lg:h-[67%] max-lg:w-[57%] max-md:h-[171px] max-md:w-[163px]">
                  {/* Title */}
                  <p className="w-full text-center font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.67vw,2rem)] font-normal leading-[0.93] tracking-[-0.08em] text-[#4F5E4A] max-lg:text-base max-lg:tracking-[-0.8px] max-md:text-[20px] max-md:tracking-[-1px]">
                    {item.title}
                  </p>

                  {/* Number + label */}
                  <div className="relative flex h-[56%] w-[42%] flex-col items-center justify-end py-[6%] max-lg:h-[84%] max-lg:w-[74%] max-lg:py-[7%] max-md:h-[151px] max-md:w-[114px] max-md:py-[12px]">
                    {/* Large number */}
                    <p className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(8rem,14vw,16.875rem)] font-normal leading-[1.01] tracking-[-0.04em] text-[#4F5E4A] max-lg:text-[128px] max-lg:tracking-[-5.12px] max-md:text-[150px] max-md:tracking-[-6px]">
                      {item.number}
                    </p>

                    {/* Label */}
                    {item.label && (
                      <p className="font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#4F5E4A] opacity-85 max-lg:text-sm">
                        {item.label}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
