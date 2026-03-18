"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements">
      <div className="mx-auto w-full max-w-[1920px] px-20 md:max-lg:px-5 md:max-lg:max-w-[768px] max-md:px-[10px]">
        {/* Section label */}
        <SectionLabel text={t.achievements.sectionLabel} />

        {/* Stat cards — flex with percentage sizing, overlap on desktop */}
        <div className="mt-[51px] flex justify-center md:max-lg:mt-[30px] md:max-lg:justify-between max-md:mt-[24px] max-md:flex-col max-md:items-center max-md:gap-[10px]">
          {t.achievements.items.map((item, i) => (
            <div
              key={item.number}
              className={[
                "relative aspect-square shrink-0",
                "w-[28%] max-w-[490px]",
                "md:max-lg:w-[24%] md:max-lg:max-w-[230px]",
                "max-md:w-[300px]",
                i > 0 ? "-ml-[5%] md:max-lg:ml-0" : "",
              ].join(" ")}
            >
              {/* Gradient ring — alternates direction on mobile */}
              <div className={`absolute inset-0 ${i % 2 === 0 ? "gradient-ring" : "gradient-ring max-md:hidden"}`} />
              {i % 2 === 1 && <div className="absolute inset-0 gradient-ring-reversed hidden max-md:block" />}

              {/* Content */}
              <div className="relative flex h-full w-full flex-col items-center justify-center px-[12%]">
                {/* Title */}
                <p className="text-center font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.67vw,2rem)] font-normal leading-[0.93] tracking-[-0.05em] text-[#4F5E4A] md:max-lg:text-base md:max-lg:tracking-[-0.8px] max-md:text-[20px] max-md:tracking-[-1px] max-md:leading-none">
                  {item.title}
                </p>

                {/* Large number — fills the circle center */}
                <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(7rem,11.5vw,13.75rem)] font-normal leading-[1.01] tracking-[-0.04em] text-[#4F5E4A] md:max-lg:text-[96px] md:max-lg:tracking-[-3.84px] max-md:text-[150px] max-md:tracking-[-6px]">
                  {item.number}
                </p>

                {/* Label */}
                {item.label && (
                  <p className="font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#4F5E4A] opacity-85 md:max-lg:text-sm max-md:text-sm max-md:leading-none">
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
