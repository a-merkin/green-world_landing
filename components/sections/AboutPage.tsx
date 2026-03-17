"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

/* ────────────────────────────────────────────────────────────
   Product card — dark rounded card with plate, tomato image
   and label at bottom
   ──────────────────────────────────────────────────────────── */
function ProductCard({
  name,
  plateImg,
  tomatoImg,
  tomatoW,
  tomatoH,
  rotation,
}: {
  name: string;
  plateImg: string;
  tomatoImg: string;
  tomatoW: number;
  tomatoH: number;
  rotation: number;
}) {
  return (
    <div className="relative flex h-[438px] flex-1 min-w-0 flex-col items-center overflow-hidden rounded-[24px] max-lg:h-[184px] max-md:h-[315px] max-md:w-full max-md:flex-none">
      {/* Dark green background with mix-blend-multiply */}
      <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-multiply rounded-[24px]" />

      {/* Concentric circles plate + tomato centered on it */}
      <div className="relative mt-[24px] aspect-square w-[81.6%] max-lg:mt-[8px]">
        <Image src={plateImg} alt="" fill sizes="(max-width: 768px) 266px, (max-width: 1024px) 148px, 342px" />
        {/* Tomato photo — centered on the plate */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: tomatoW,
              height: tomatoH,
              transform: `rotate(${rotation}deg)`,
              filter:
                "drop-shadow(0px 16px 35px rgba(0,0,0,0.21)) drop-shadow(0px 64px 64px rgba(0,0,0,0.18))",
            }}
          >
            <Image src={tomatoImg} alt={name} fill className="object-cover" sizes="(max-width: 768px) 213px, (max-width: 1024px) 119px, 273px" />
          </div>
        </div>
      </div>

      {/* Label at bottom */}
      <p className="relative mt-auto mb-[21px] whitespace-nowrap font-[family-name:var(--font-roboto)] text-[clamp(0.9375rem,1.67vw,2rem)] font-black leading-[0.85] tracking-[-0.64px] text-[#C4D99D] text-center max-lg:text-[15px] max-lg:mb-[8px] max-md:text-[24px] max-md:mb-[14px]">
        {name}
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Greenhouse details text with bold company names
   ──────────────────────────────────────────────────────────── */
function GreenhouseDetails({ text }: { text: string }) {
  const paragraphs = text.split("\n");

  return (
    <div className="font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] text-justify max-lg:text-sm max-md:text-base">
      {paragraphs.map((p, i) => (
        <p key={i} className={i < paragraphs.length - 1 ? "mb-0" : ""}>
          {p.split(/(RICHEL|STOLZE|PRIVA)/).map((part, j) =>
            ["RICHEL", "STOLZE", "PRIVA"].includes(part) ? (
              <span key={j} className="font-semibold">
                {part}
              </span>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Main About Page content
   ──────────────────────────────────────────────────────────── */
export default function AboutPageContent() {
  const { t } = useTranslation();
  const ap = t.aboutPage;

  const productCards = [
    {
      plateImg: "/images/about-page/card-plate-cluster.svg",
      tomatoImg: "/images/about-page/card-cluster.png",
      tomatoW: 273,
      tomatoH: 158,
      rotation: -30,
    },
    {
      plateImg: "/images/about-page/card-plate-pink.svg",
      tomatoImg: "/images/about-page/card-pink.png",
      tomatoW: 170,
      tomatoH: 182,
      rotation: 0,
    },
    {
      plateImg: "/images/about-page/card-plate-plum.svg",
      tomatoImg: "/images/about-page/card-plum.png",
      tomatoW: 230,
      tomatoH: 176,
      rotation: 0,
    },
    {
      plateImg: "/images/about-page/card-plate-cherry.svg",
      tomatoImg: "/images/about-page/card-cherry.png",
      tomatoW: 202,
      tomatoH: 137,
      rotation: 0,
    },
  ];

  return (
    <div className="pt-[157px] pb-[160px] max-lg:pt-[93px] max-lg:pb-[80px] max-md:pt-[52px] max-md:pb-[60px]">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* ══════════════════════════════════════════════════
           HERO: Title + two photos
           ══════════════════════════════════════════════════ */}
        <h1 className="whitespace-pre font-[family-name:var(--font-cormorant-infant)] text-[clamp(6rem,7.8vw,9.375rem)] font-medium leading-none tracking-[-10.5px] uppercase text-[#333] max-lg:text-[96px] max-lg:tracking-[-6.72px] max-md:text-[65px] max-md:tracking-[-4.55px]">
          {ap.title}
        </h1>

        {/* Two photos row */}
        <div className="mt-[13px] flex gap-[20px] max-md:flex-col">
          {/* Left photo */}
          <div className="relative w-[39%] max-w-[692px] shrink-0 aspect-[692/610] overflow-hidden max-lg:w-[39%] max-lg:aspect-[285/252] max-md:w-full max-md:aspect-[300/264] max-md:max-w-none">
            <Image
              src="/images/about-page/hero-left.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 39vw, 692px"
            />
          </div>
          {/* Right photo — fills remaining space */}
          <div className="relative flex-1 min-w-0 aspect-[1048/610] overflow-hidden max-lg:aspect-[433/252] max-md:aspect-[300/174]">
            <Image
              src="/images/about-page/hero-right.jpg"
              alt="Our greenhouse"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 1048px"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           MISSION section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[37px] max-lg:mt-[25px] max-md:mt-[18px]">
          {/* Row: Label on the left, heading text on the right */}
          <div className="flex gap-[20px] max-md:flex-col max-md:gap-[8px]">
            {/* Left column — label */}
            <div className="w-[39%] max-w-[692px] shrink-0 max-md:w-full max-md:max-w-none">
              <SectionLabel text={ap.mission.label} />
            </div>
            {/* Right column — heading text */}
            <p className="flex-1 min-w-0 font-[family-name:var(--font-roboto)] text-[clamp(1.4rem,1.98vw,2.375rem)] font-medium leading-none text-[#333] text-justify max-lg:text-[23px] max-md:text-[19px]">
              {ap.mission.heading}
            </p>
          </div>
          {/* Full-width continuation text */}
          <p className="font-[family-name:var(--font-roboto)] text-[clamp(1.4rem,1.98vw,2.375rem)] font-medium leading-none text-[#333] text-justify max-lg:text-[23px] max-md:text-[19px]">
            {ap.mission.text}
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
           GREENHOUSE section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[120px] max-lg:mt-[80px] max-md:mt-[50px]">
          {/* Row: Label on the left, heading + details on the right */}
          <div className="flex gap-[20px] max-md:flex-col max-md:gap-[8px]">
            {/* Left column — label */}
            <div className="w-[39%] max-w-[692px] shrink-0 max-md:w-full max-md:max-w-none">
              <SectionLabel text={ap.greenhouse.label} />
            </div>
            {/* Right column — heading + details */}
            <div className="flex-1 min-w-0">
              <p className="max-w-[692px] font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,1.67vw,2rem)] font-medium leading-none text-[#333] text-justify max-lg:text-[20px] max-md:text-[19px] max-md:max-w-none">
                {ap.greenhouse.heading.split(/(RICHEL|STOLZE)/).map((part, j) =>
                  ["RICHEL", "STOLZE"].includes(part) ? (
                    <span key={j} className="font-bold">{part}</span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
              <div className="mt-[19px] max-w-[692px] max-md:max-w-none">
                <GreenhouseDetails text={ap.greenhouse.details} />
              </div>
            </div>
          </div>

          {/* Photos row */}
          <div className="mt-[17px] flex gap-[20px] max-md:flex-col">
            {/* Left smaller photo */}
            <div className="relative w-[29%] max-w-[514px] shrink-0 aspect-[514/424] overflow-hidden max-lg:w-[39%] max-lg:aspect-[285/186] max-md:w-full max-md:aspect-[300/184] max-md:max-w-none">
              <Image
                src="/images/about-page/greenhouse-left.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 39vw, 514px"
              />
            </div>
            {/* Right larger photo */}
            <div className="relative flex-1 min-w-0 aspect-[1048/599] overflow-hidden max-lg:aspect-[433/283] max-md:aspect-[300/184]">
              <Image
                src="/images/about-page/greenhouse-right.jpg"
                alt="Greenhouse interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 1048px"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           PRODUCTS section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[121px] max-lg:mt-[80px] max-md:mt-[50px]">
          {/* Row: Label on the left, heading + description on the right */}
          <div className="flex gap-[20px] max-md:flex-col max-md:gap-[8px]">
            {/* Left column — label */}
            <div className="w-[39%] max-w-[692px] shrink-0 max-md:w-full max-md:max-w-none">
              <SectionLabel text={ap.products.label} />
            </div>
            {/* Right column — heading + description */}
            <div className="flex-1 min-w-0">
              <p className="font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,1.67vw,2rem)] font-medium leading-none text-[#333] text-justify max-lg:text-[20px] max-md:text-[19px]">
                {ap.products.heading}
              </p>
              <p className="mt-[19px] max-w-[692px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] text-justify max-lg:text-sm max-lg:max-w-none max-md:text-base max-md:max-w-none">
                {ap.products.text}
              </p>
            </div>
          </div>

          {/* Product cards grid — 4 columns, stacked on mobile */}
          <div className="mt-[17px] flex gap-[clamp(0.75rem,1.46vw,1.75rem)] max-lg:gap-[10px] max-md:flex-col max-md:gap-[16px]">
            {ap.products.cards.map((card, i) => (
              <ProductCard
                key={card.name}
                name={card.name}
                plateImg={productCards[i].plateImg}
                tomatoImg={productCards[i].tomatoImg}
                tomatoW={productCards[i].tomatoW}
                tomatoH={productCards[i].tomatoH}
                rotation={productCards[i].rotation}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           EXPERTS section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[132px] max-lg:mt-[80px] max-md:mt-[50px]">
          {/* Row: Label on the left, heading + description on the right */}
          <div className="flex gap-[20px] max-md:flex-col max-md:gap-[8px]">
            {/* Left column — label */}
            <div className="w-[39%] max-w-[692px] shrink-0 max-md:w-full max-md:max-w-none">
              <SectionLabel text={ap.experts.label} />
            </div>
            {/* Right column — heading + description */}
            <div className="flex-1 min-w-0">
              <p className="font-[family-name:var(--font-roboto)] text-[clamp(1.25rem,1.67vw,2rem)] font-medium leading-none text-[#333] max-lg:text-[20px] max-md:text-[19px]">
                {ap.experts.heading}
              </p>
              <p className="mt-[19px] max-w-[692px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#333] text-justify max-lg:text-sm max-lg:max-w-none max-md:text-base max-md:max-w-none">
                {ap.experts.text}
              </p>
            </div>
          </div>

          {/* Photos row */}
          <div className="mt-[17px] flex gap-[20px] max-md:flex-col">
            {/* Left photo */}
            <div className="relative w-[39%] max-w-[692px] shrink-0 aspect-[692/579] overflow-hidden max-lg:w-[39%] max-lg:aspect-[285/248] max-md:w-full max-md:aspect-[300/234] max-md:max-w-none">
              <Image
                src="/images/about-page/experts-left.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 39vw, 692px"
              />
            </div>
            {/* Right photo */}
            <div className="relative flex-1 min-w-0 aspect-[1048/579] overflow-hidden max-lg:aspect-[433/248] max-md:aspect-[300/154]">
              <Image
                src="/images/about-page/experts-right.jpg"
                alt="Greenhouse team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 1048px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
