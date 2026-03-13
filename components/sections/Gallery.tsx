"use client";

import Image from "next/image";
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
      <div className="mx-auto max-w-[1760px]">
        {/* Section label */}
        <SectionLabel text={t.gallery.sectionLabel} />

        {/* Photo slider with drag indicator */}
        <div className="relative mt-[30px]">
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
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.src} style={{ width: 870, height: 586 }}>
                <div className="relative h-full w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="870px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Drag indicator — centered overlay */}
          <div
            className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${isDragging ? "opacity-0" : "opacity-100"}`}
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#F0EAE2] bg-[#4F5E4A]/80 backdrop-blur-[6.75px]">
              <span className="font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2]">
                {t.gallery.dragHint}
              </span>
            </div>
          </div>
        </div>

        {/* CTA button — centered */}
        <button className="mx-auto mt-[30px] flex h-[45px] w-[336px] cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90">
          {t.gallery.cta}
        </button>
      </div>
    </section>
  );
}
