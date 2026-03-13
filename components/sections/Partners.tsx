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

function PartnerCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[141px] w-[230px] shrink-0 rounded-[10px] bg-[#4F5E4A]/10">
      <div className="absolute inset-[17%_20%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="140px"
        />
      </div>
    </div>
  );
}

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section id="partners">
      <div className="mx-auto max-w-[1760px]">
        {/* Section label */}
        <SectionLabel text={t.partners.sectionLabel} />

        {/* Partner logo grid — 2 rows of 7 */}
        <div className="mt-[30px] flex flex-col gap-[25px]">
          {partners.map((row, i) => (
            <div key={i} className="flex gap-[25px]">
              {row.map((partner) => (
                <PartnerCard
                  key={partner.alt}
                  src={partner.src}
                  alt={partner.alt}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
