"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

function SliderArrow({ direction }: { direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <button
      className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-[#C4D99D] bg-transparent transition-opacity hover:opacity-80 max-lg:h-[38px] max-lg:w-[38px] max-md:hidden"
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
    <section id="products" className="relative h-[clamp(455px,44.4vw,852px)] overflow-hidden bg-[#4F5E4A] max-lg:h-[455px] max-md:h-[624px]">
      {/* Window shadow overlay */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/products-shadow.png"
          alt=""
          fill
          className="object-cover opacity-56"
          sizes="100vw"
        />
      </div>

      {/* Content container */}
      <div className="relative mx-auto h-full w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* Section label */}
        <div className="relative z-10 pt-[48px] max-lg:pt-[28px]">
          <SectionLabel text={t.products.sectionLabel} light />
        </div>

        {/* Circular plate + tomato — percentage positioned */}
        <div className="absolute left-[20%] top-[9%] h-[81%] aspect-square max-lg:left-[12.24%] max-lg:top-[48px] max-lg:h-auto max-lg:w-[49%] max-lg:aspect-square max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[40px] max-md:w-[80%] max-md:max-w-[300px]">
          {/* Concentric rings plate */}
          <Image
            src="/images/products-plate.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 359px, 40vw"
          />
          {/* Tomato photo — rotated -30deg with shadow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="-rotate-[30deg] h-[44%] w-[77%] drop-shadow-[0px_16px_35px_rgba(0,0,0,0.21)] max-lg:h-[171px] max-lg:w-[295px] max-md:h-[148px] max-md:w-[255px]">
              <Image
                src="/images/products-tomato.png"
                alt="Cluster tomatoes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 255px, (max-width: 1024px) 295px, 30vw"
              />
            </div>
          </div>
        </div>

        {/* Text content — percentage positioned */}
        <div className="absolute left-[60%] top-[25%] w-[19%] min-w-[200px] max-lg:left-[60.29%] max-lg:top-[80px] max-lg:w-[30%] max-lg:min-w-[180px] max-md:static max-md:mx-auto max-md:w-full max-md:max-w-[300px] max-md:min-w-0 max-md:pt-[298px] max-md:text-center">
          {/* Product name */}
          <h3 className="whitespace-pre-line font-[family-name:var(--font-roboto)] text-[clamp(2.25rem,2.9vw,3.5rem)] font-black leading-[0.85] tracking-[-1.12px] text-[#C4D99D] max-lg:text-[36px] max-lg:tracking-[-0.72px]">
            {t.products.name}
          </h3>

          {/* Description */}
          <p className="mt-[27px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#C4D99D] max-lg:mt-[16px] max-lg:text-sm max-md:text-[15px]">
            {t.products.description}
          </p>
        </div>

        {/* Slider arrows */}
        <div className="absolute left-[4%] top-1/2 -translate-y-1/2 max-lg:left-[2.6%]">
          <SliderArrow direction="prev" />
        </div>
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 max-lg:right-[2.6%]">
          <SliderArrow direction="next" />
        </div>
      </div>
    </section>
  );
}
