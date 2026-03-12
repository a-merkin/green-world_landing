"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

function SliderArrow({ direction }: { direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <button
      className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-[#C4D99D] bg-transparent transition-opacity hover:opacity-80"
      aria-label={direction}
    >
      <svg
        width="12"
        height="22"
        viewBox="0 0 12 22"
        fill="none"
        className={isNext ? "" : "rotate-180"}
      >
        <path
          d="M1 1L11 11L1 21"
          stroke="#C4D99D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Products() {
  const { t } = useTranslation();

  return (
    <section id="products" className="relative h-[852px] overflow-hidden bg-[#4F5E4A]">
      {/* Window shadow overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/products-shadow.png"
          alt=""
          fill
          className="object-cover opacity-56"
          sizes="1920px"
        />
      </div>

      {/* Content container */}
      <div className="relative mx-auto h-full max-w-[1760px]">
        {/* Section label */}
        <div className="relative z-10 pt-[48px]">
          <SectionLabel text={t.products.sectionLabel} light />
        </div>

        {/* Circular plate + tomato */}
        <div className="absolute left-[356px] top-[80px] h-[692px] w-[692px]">
          {/* Concentric rings plate */}
          <Image
            src="/images/products-plate.svg"
            alt=""
            fill
            sizes="692px"
          />
          {/* Tomato photo — rotated -30deg with shadow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="-rotate-[30deg] h-[307px] w-[532px] drop-shadow-[0px_16px_35px_rgba(0,0,0,0.21)]">
              <Image
                src="/images/products-tomato.png"
                alt="Cluster tomatoes"
                fill
                className="object-cover"
                sizes="532px"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="absolute left-[1068px] top-[218px] w-[336px]">
          {/* Product name */}
          <h3 className="whitespace-pre-line font-[family-name:var(--font-roboto)] text-[56px] font-black leading-[0.85] tracking-[-1.12px] text-[#C4D99D]">
            {t.products.name}
          </h3>

          {/* Description */}
          <p className="mt-[27px] font-[family-name:var(--font-roboto)] text-[21px] font-normal leading-[1.15] text-[#C4D99D]">
            {t.products.description}
          </p>
        </div>

        {/* Slider arrows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <SliderArrow direction="prev" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <SliderArrow direction="next" />
        </div>
      </div>
    </section>
  );
}
