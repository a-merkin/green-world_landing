"use client";

import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <section id="achievements">
      <div className="mx-auto max-w-[1760px]">
        {/* Section label */}
        <SectionLabel text={t.achievements.sectionLabel} />

        {/* Stat cards row — cards overlap by ~133px to fit 4×540px in 1760px */}
        <div className="mt-[51px] flex">
          {t.achievements.items.map((item, i) => (
            <div
              key={item.number}
              className={`relative h-[540px] w-[540px] shrink-0${i > 0 ? " -ml-[133px]" : ""}`}
            >
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(79,94,74,0.3)] to-[rgba(79,94,74,0)]" />
              {/* Inner fill to mask center, leaving 1px border */}
              <div className="absolute inset-px rounded-full bg-[#F0EAE2]" />

              {/* Content */}
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="flex h-[333px] w-[261px] flex-col items-center justify-between">
                  {/* Title */}
                  <p className="w-full text-center font-[family-name:var(--font-roboto)] text-[32px] font-normal leading-[0.93] tracking-[-1.6px] text-[#4F5E4A]">
                    {item.title}
                  </p>

                  {/* Number + label */}
                  <div className="relative flex h-[303px] w-[227px] flex-col items-center justify-end px-[74px] py-[31px]">
                    {/* Large number — positioned at top of this container */}
                    {/* Figma: 300px LTC Metropolitan — reduced for Georgia fallback */}
                    <p className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-display)] text-[270px] font-normal leading-[1.01] tracking-[-12px] text-[#4F5E4A]">
                      {item.number}
                    </p>

                    {/* Label */}
                    {item.label && (
                      <p className="font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#4F5E4A] opacity-85">
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
