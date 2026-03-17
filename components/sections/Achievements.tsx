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
              className={`relative aspect-square w-[28%] max-w-[490px] shrink-0 max-lg:w-[24%] max-lg:max-w-[230px] max-lg:aspect-square max-md:w-[300px] max-md:max-w-full${i > 0 ? " -ml-[5%] max-lg:ml-0" : ""}`}
            >
              {/* Desktop/tablet: gradient ring (visible left, fades right) */}
              <div className="absolute inset-0 gradient-ring max-md:hidden" />
              {/* Mobile: solid border */}
              <div className={`absolute inset-0 rounded-full border hidden max-md:block ${i % 2 === 1 ? "border-[#4F5E4A]" : "border-[rgba(79,94,74,0.25)]"}`} />

              {/* Content */}
              <div className="relative flex h-full w-full flex-col items-center justify-center px-[12%]">
                {/* Title */}
                <p className="text-center font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.67vw,2rem)] font-normal leading-[0.93] tracking-[-0.05em] text-[#4F5E4A] max-lg:text-base max-lg:tracking-[-0.8px] max-md:text-[20px] max-md:tracking-[-1px]">
                  {item.title}
                </p>

                {/* Large number — fills the circle center */}
                <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(7rem,11.5vw,13.75rem)] font-normal leading-[1] tracking-[-0.04em] text-[#4F5E4A] max-lg:text-[96px] max-lg:tracking-[-3.84px] max-md:text-[120px] max-md:tracking-[-4.8px]">
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
          ))}
        </div>
      </div>
    </section>
  );
}
