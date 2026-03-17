"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";

const SLIDE_DATA = [
  {
    image: "/images/products-tomato.png",
    imageW: 440,
    imageH: 432,
    rotation: -30,
  },
  {
    image: "/images/products-pink.png",
    imageW: 440,
    imageH: 432,
    rotation: 0,
  },
  {
    image: "/images/products-plum.png",
    imageW: 565,
    imageH: 433,
    rotation: 0,
  },
  {
    image: "/images/products-cherry.png",
    imageW: 476,
    imageH: 324,
    rotation: 0,
  },
];

function SliderArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isNext = direction === "next";
  return (
    <button
      className="flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full border border-[#C4D99D] bg-transparent transition-colors hover:bg-[#C4D99D]/20 max-lg:h-[38px] max-lg:w-[38px] max-md:hidden"
      aria-label={direction}
      onClick={onClick}
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
  const slides = t.products.slides;
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const slide = slides[current];
  const data = SLIDE_DATA[current];

  return (
    <section
      id="products"
      className="relative h-[clamp(455px,44.4vw,852px)] overflow-hidden bg-[#4F5E4A] max-lg:h-[455px] max-md:h-[624px]"
    >
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

        {/* Circular plate + tomato */}
        <div className="absolute left-[20%] top-[9%] h-[81%] aspect-square max-lg:left-[12.24%] max-lg:top-[48px] max-lg:h-auto max-lg:w-[49%] max-lg:aspect-square max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[40px] max-md:w-[80%] max-md:max-w-[300px]">
          {/* Concentric rings plate */}
          <Image
            src="/images/products-plate.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 359px, 40vw"
          />
          {/* Tomato photo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="relative h-[63%] w-[63%] max-lg:h-[200px] max-lg:w-[200px] max-md:h-[170px] max-md:w-[170px]"
              style={{
                transform: data.rotation ? `rotate(${data.rotation}deg)` : undefined,
                filter:
                  "drop-shadow(0px 16px 35px rgba(0,0,0,0.21)) drop-shadow(0px 64px 64px rgba(0,0,0,0.18))",
              }}
            >
              <Image
                src={data.image}
                alt={slide.name.replace("\n", " ")}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 170px, (max-width: 1024px) 200px, 30vw"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="absolute left-[60%] top-[25%] w-[19%] min-w-[200px] max-lg:left-[60.29%] max-lg:top-[80px] max-lg:w-[30%] max-lg:min-w-[180px] max-md:static max-md:mx-auto max-md:w-full max-md:max-w-[300px] max-md:min-w-0 max-md:pt-[298px] max-md:text-center">
          {/* Product name */}
          <h3 className="whitespace-pre-line font-[family-name:var(--font-roboto)] text-[clamp(2.25rem,2.9vw,3.5rem)] font-black leading-[0.85] tracking-[-1.12px] text-[#C4D99D] max-lg:text-[36px] max-lg:tracking-[-0.72px]">
            {slide.name}
          </h3>

          {/* Description */}
          <p className="mt-[27px] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.09vw,1.3125rem)] font-normal leading-[1.15] text-[#C4D99D] max-lg:mt-[16px] max-lg:text-sm max-md:text-[15px]">
            {slide.description}
          </p>
        </div>

        {/* Slider arrows */}
        <div className="absolute left-[4%] top-1/2 -translate-y-1/2 max-lg:left-[2.6%]">
          <SliderArrow direction="prev" onClick={goPrev} />
        </div>
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 max-lg:right-[2.6%]">
          <SliderArrow direction="next" onClick={goNext} />
        </div>

        {/* Mobile swipe dots */}
        <div className="absolute bottom-[20px] left-1/2 hidden -translate-x-1/2 gap-2 max-md:flex">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-[6px] w-[6px] rounded-full transition-colors ${
                i === current ? "bg-[#C4D99D]" : "bg-[#C4D99D]/40"
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
