"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const photos = [
  { src: "/images/gallery-1.png", alt: "Tomatoes in crates" },
  { src: "/images/gallery-2.png", alt: "Greenhouse interior" },
  { src: "/images/gallery-3.png", alt: "Greenhouse plants" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="gallery">
      {/* Section label — inside padded container */}
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:max-w-[768px] max-lg:px-5 max-md:max-w-none max-md:px-[10px]">
        <SectionLabel text={t.gallery.sectionLabel} />
      </div>

      {/* Photo slider — left-padded, bleeds to right viewport edge */}
      <div
        className="gallery-slider relative mt-[30px] max-lg:mt-[20px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides
          centeredSlidesBounds
          slideToClickedSlide
          grabCursor
          style={{ overflow: "hidden" }}
          className="gallery-swiper"
        >
          {photos.map((photo) => (
            <SwiperSlide
              key={photo.src}
              className="!h-[clamp(15rem,30.5vw,36.625rem)] !w-[clamp(22rem,45.3vw,54.375rem)] max-lg:!h-[241px] max-lg:!w-[359px] max-md:!h-[60vw] max-md:!w-[90vw]"
            >
              <div className="relative h-full w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="pointer-events-none select-none object-cover"
                  draggable={false}
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 359px, 45vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Drag indicator — between 1st and 2nd slide, hidden on mobile */}
        <div
          className={`pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 max-md:hidden ${isHovered ? "opacity-0" : "opacity-100"}`}
          style={{
            left: "calc(var(--gallery-pad) + var(--gallery-slide) + 10px)",
          }}
        >
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#F0EAE2] bg-[#4F5E4A]/80 backdrop-blur-[6.75px] max-lg:h-[70px] max-lg:w-[70px]">
            <span className="font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] max-lg:text-[14px]">
              {t.gallery.dragHint}
            </span>
          </div>
        </div>
      </div>

      {/* CTA button — inside padded container */}
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:max-w-[768px] max-lg:px-5 max-md:max-w-none max-md:px-[10px]">
        <Link
          href="/gallery"
          className="mx-auto mt-[30px] flex h-[45px] w-full max-w-[336px] items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-colors hover:bg-[#6C7B67] max-lg:h-[30px] max-lg:max-w-[212px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:mx-0 max-md:h-[45px] max-md:max-w-none"
        >
          {t.gallery.cta}
        </Link>
      </div>
    </section>
  );
}
