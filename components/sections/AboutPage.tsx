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
    <div className="relative flex h-[438px] flex-1 flex-col items-center overflow-hidden rounded-[24px]">
      {/* Dark green background with mix-blend-multiply */}
      <div className="absolute inset-0 bg-[#4F5E4A] mix-blend-multiply rounded-[24px]" />

      {/* Concentric circles plate — fills ~82% of card width, centered */}
      <div className="relative mt-[24px] aspect-square w-[81.6%]">
        <Image src={plateImg} alt="" fill sizes="342px" />
      </div>

      {/* Tomato photo — centered over the plate with rotation and shadow */}
      <div className="absolute inset-0 flex items-center justify-center pb-[48px]">
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
          <Image src={tomatoImg} alt={name} fill className="object-cover" sizes="273px" />
        </div>
      </div>

      {/* Label at bottom */}
      <p className="relative mt-auto mb-[21px] whitespace-nowrap font-[family-name:var(--font-roboto)] text-[32px] font-black leading-[0.85] tracking-[-0.64px] text-[#C4D99D] text-center">
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
    <div className="font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#333] text-justify">
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
    <div className="pt-[157px] pb-[160px]">
      <div className="mx-auto max-w-[1760px]">
        {/* ══════════════════════════════════════════════════
           HERO: Title + two photos
           ══════════════════════════════════════════════════ */}
        <h1 className="whitespace-pre font-[family-name:var(--font-cormorant-infant)] text-[150px] font-medium leading-none tracking-[-10.5px] uppercase text-[#333]">
          {ap.title}
        </h1>

        {/* Two photos row */}
        <div className="mt-[13px] flex gap-[20px]">
          {/* Left photo — 692px */}
          <div className="relative h-[610px] w-[692px] shrink-0 overflow-hidden">
            <Image
              src="/images/about-page/hero-left.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="692px"
            />
          </div>
          {/* Right photo — fills remaining space */}
          <div className="relative h-[610px] flex-1 overflow-hidden">
            <Image
              src="/images/about-page/hero-right.jpg"
              alt="Our greenhouse"
              fill
              className="object-cover"
              sizes="1048px"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           MISSION section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[37px]">
          {/* Row: Label on the left, heading text on the right */}
          <div className="flex gap-[20px]">
            {/* Left column — label aligned to 692px width */}
            <div className="w-[692px] shrink-0">
              <SectionLabel text={ap.mission.label} />
            </div>
            {/* Right column — heading text */}
            <p className="flex-1 font-[family-name:var(--font-roboto)] text-[38px] font-medium leading-none text-[#333] text-justify">
              {ap.mission.heading}
            </p>
          </div>
          {/* Full-width continuation text — continues directly after heading row */}
          <p className="font-[family-name:var(--font-roboto)] text-[38px] font-medium leading-none text-[#333] text-justify">
            {ap.mission.text}
          </p>
        </div>

        {/* ══════════════════════════════════════════════════
           GREENHOUSE section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[120px]">
          {/* Row: Label on the left, heading + details on the right */}
          <div className="flex gap-[20px]">
            {/* Left column — label */}
            <div className="w-[692px] shrink-0">
              <SectionLabel text={ap.greenhouse.label} />
            </div>
            {/* Right column — heading + details (692px within 1048px column) */}
            <div className="flex-1">
              <p className="w-[692px] font-[family-name:var(--font-roboto)] text-[32px] font-medium leading-none text-[#333] text-justify">
                {ap.greenhouse.heading.split(/(RICHEL|STOLZE)/).map((part, j) =>
                  ["RICHEL", "STOLZE"].includes(part) ? (
                    <span key={j} className="font-bold">{part}</span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </p>
              <div className="mt-[19px] w-[692px]">
                <GreenhouseDetails text={ap.greenhouse.details} />
              </div>
            </div>
          </div>

          {/* Photos row — gap 17px from text block to photos per Figma */}
          <div className="mt-[17px] flex gap-[20px]">
            {/* Left smaller photo */}
            <div className="relative h-[424px] w-[514px] shrink-0 overflow-hidden">
              <Image
                src="/images/about-page/greenhouse-left.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="514px"
              />
            </div>
            {/* Right larger photo */}
            <div className="relative h-[599px] flex-1 overflow-hidden">
              <Image
                src="/images/about-page/greenhouse-right.jpg"
                alt="Greenhouse interior"
                fill
                className="object-cover"
                sizes="1048px"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           PRODUCTS section
           ══════════════════════════════════════════════════ */}
        <div className="mt-[121px]">
          {/* Row: Label on the left, heading + description on the right */}
          <div className="flex gap-[20px]">
            {/* Left column — label */}
            <div className="w-[692px] shrink-0">
              <SectionLabel text={ap.products.label} />
            </div>
            {/* Right column — heading + description */}
            <div className="flex-1">
              <p className="font-[family-name:var(--font-roboto)] text-[32px] font-medium leading-none text-[#333] text-justify">
                {ap.products.heading}
              </p>
              <p className="mt-[19px] w-[692px] font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#333] text-justify">
                {ap.products.text}
              </p>
            </div>
          </div>

          {/* Product cards grid — 4 columns, gap 17px from text to cards */}
          <div className="mt-[17px] flex gap-[28px]">
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
        <div className="mt-[132px]">
          {/* Row: Label on the left, heading + description on the right */}
          <div className="flex gap-[20px]">
            {/* Left column — label */}
            <div className="w-[692px] shrink-0">
              <SectionLabel text={ap.experts.label} />
            </div>
            {/* Right column — heading + description */}
            <div className="flex-1">
              <p className="font-[family-name:var(--font-roboto)] text-[32px] font-medium leading-none text-[#333]">
                {ap.experts.heading}
              </p>
              <p className="mt-[19px] w-[692px] font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#333] text-justify">
                {ap.experts.text}
              </p>
            </div>
          </div>

          {/* Photos row — gap 17px from text block to photos per Figma */}
          <div className="mt-[17px] flex gap-[20px]">
            {/* Left photo */}
            <div className="relative h-[579px] w-[692px] shrink-0 overflow-hidden">
              <Image
                src="/images/about-page/experts-left.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="692px"
              />
            </div>
            {/* Right photo */}
            <div className="relative h-[579px] flex-1 overflow-hidden">
              <Image
                src="/images/about-page/experts-right.jpg"
                alt="Greenhouse team"
                fill
                className="object-cover"
                sizes="1048px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
