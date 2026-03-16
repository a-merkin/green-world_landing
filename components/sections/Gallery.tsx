"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";
import SectionLabel from "@/components/ui/SectionLabel";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const photos = [
  { src: "/images/gallery-1.png", alt: "Tomatoes in crates" },
  { src: "/images/gallery-2.png", alt: "Greenhouse interior" },
  { src: "/images/gallery-3.png", alt: "Greenhouse plants" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [isDragging, setIsDragging] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="gallery">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* Section label */}
        <SectionLabel text={t.gallery.sectionLabel} />

        {/* Photo slider with drag indicator */}
        <div className="relative mt-[30px] max-lg:mt-[20px]">
          <Swiper
            modules={[FreeMode, Mousewheel]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSliderMove={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTransitionEnd={() => setIsDragging(false)}
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={{ enabled: true, sticky: false }}
            grabCursor
            style={{ overflow: "hidden" }}
            className="gallery-swiper"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.src} className="!w-[clamp(22rem,45.3vw,54.375rem)] !h-[clamp(15rem,30.5vw,36.625rem)] max-lg:!w-[359px] max-lg:!h-[241px] max-md:!w-[90vw] max-md:!h-[60vw]">
                <div className="relative h-full w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 359px, 45vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Drag indicator — centered overlay, hidden on mobile */}
          <div
            className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 max-md:hidden ${isDragging ? "opacity-0" : "opacity-100"}`}
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#F0EAE2] bg-[#4F5E4A]/80 backdrop-blur-[6.75px]">
              <span className="font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2]">
                {t.gallery.dragHint}
              </span>
            </div>
          </div>
        </div>

        {/* CTA button — centered, links to gallery page */}
        <Link
          href="/gallery"
          className="mx-auto mt-[30px] flex h-[45px] w-full max-w-[336px] items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90 max-lg:max-w-[212px] max-lg:h-[30px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:max-w-none max-md:h-[45px] max-md:mx-0"
        >
          {t.gallery.cta}
        </Link>
      </div>
    </section>
  );
}
