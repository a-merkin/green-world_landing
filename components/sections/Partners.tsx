"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

const partners = [
  // Row 1
  [
    { src: "/images/partner-grow-group.png", alt: "Grow Group Azerbaijan" },
    { src: "/images/partner-richel.png", alt: "Richel Group" },
    { src: "/images/partner-stolze.png", alt: "Stolze" },
    { src: "/images/partner-growa.png", alt: "Growa" },
    { src: "/images/partner-priva.png", alt: "Priva" },
    { src: "/images/partner-bogaerts.png", alt: "Bogaerts" },
    { src: "/images/partner-meteor.png", alt: "Meteor Systems" },
  ],
  // Row 2
  [
    { src: "/images/partner-dutch-plantin.png", alt: "Dutch Plantin" },
    { src: "/images/partner-plastika-kritis.png", alt: "Plastika Kritis" },
    { src: "/images/partner-grodan.png", alt: "Grodan" },
    { src: "/images/partner-paskal.png", alt: "Paskal" },
    { src: "/images/partner-bato.png", alt: "Bato" },
    { src: "/images/partner-step-systems.png", alt: "Step Systems" },
    { src: "/images/partner-lumiforte.png", alt: "Lumiforte" },
  ],
];

const allPartners = partners.flat();

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* Section label */}
        <SectionLabel text={t.partners.sectionLabel} />

        {/* Desktop: 2 rows of 7 — flex-wrap for fluid sizing */}
        <div className="mt-[30px] flex flex-col gap-[25px] max-lg:hidden">
          {partners.map((row, i) => (
            <div key={i} className="flex gap-[clamp(0.5rem,1.3vw,1.5625rem)] flex-wrap">
              {row.map((partner) => (
                <div key={partner.alt} className="relative flex-1 min-w-[120px] max-w-[230px] aspect-[230/141] rounded-[10px] bg-[#4F5E4A]/10">
                  <div className="absolute inset-[17%_20%]">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain"
                      sizes="14vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Tablet/Mobile: horizontal scrollable row */}
        <div className="mt-[20px] hidden overflow-x-auto max-lg:flex max-lg:gap-[14px] max-md:gap-[6px]">
          {allPartners.map((partner) => (
            <div
              key={partner.alt}
              className="relative shrink-0 rounded-[10px] bg-[#4F5E4A]/10 h-[91px] w-[150px] max-md:h-[80px] max-md:w-[130px]"
            >
              <div className="absolute inset-[17%_20%]">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 78px, 90px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="ml-auto mt-[20px] w-full max-w-[870px] text-justify font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] max-lg:ml-0 max-lg:max-w-none max-lg:text-sm max-md:text-base">
          {t.partners.description
            .split(/(\{growGroup\}|\{richel\}|\{stolze\})/)
            .map((part, i) => {
              if (part === "{growGroup}")
                return (
                  <span key={i} className="font-semibold">
                    {t.partners.growGroup}
                  </span>
                );
              if (part === "{richel}")
                return (
                  <span key={i} className="font-semibold">
                    {t.partners.richel}
                  </span>
                );
              if (part === "{stolze}")
                return (
                  <span key={i} className="font-semibold">
                    {t.partners.stolze}
                  </span>
                );
              return part;
            })}
        </p>
      </div>
    </section>
  );
}
