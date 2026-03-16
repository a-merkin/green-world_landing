"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useTranslation } from "@/lib/i18n/useTranslation";

/* ────────────────────────────────────────────────────────────
   Gallery photos — all 10 images for the gallery page slider
   ──────────────────────────────────────────────────────────── */
const photos = [
  { src: "/images/gallery/photo-1.jpg", alt: "Fresh tomatoes" },
  { src: "/images/gallery/photo-2.jpg", alt: "Greenhouse exterior" },
  { src: "/images/gallery/photo-3.jpg", alt: "Growing tomatoes" },
  { src: "/images/gallery/photo-4.jpg", alt: "Greenhouse interior" },
  { src: "/images/gallery/photo-5.jpg", alt: "Tomato plants" },
  { src: "/images/gallery/photo-6.jpg", alt: "Greenhouse rows" },
  { src: "/images/gallery/photo-7.jpg", alt: "Harvest process" },
  { src: "/images/gallery/photo-8.jpg", alt: "Packing facility" },
  { src: "/images/gallery/photo-9.jpg", alt: "Tomato boxes" },
  { src: "/images/gallery/photo-10.jpg", alt: "Distribution" },
];

/* ────────────────────────────────────────────────────────────
   Navigation arrow button
   ──────────────────────────────────────────────────────────── */
function GalleryArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      className="flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#4F5E4A] transition-opacity hover:opacity-80"
      aria-label={label}
    >
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        className={isNext ? "" : "rotate-180"}
      >
        <path
          d="M1 1L9 9L1 17"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Gallery Page content
   ──────────────────────────────────────────────────────────── */
export default function GalleryPageContent() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + photos.length) % photos.length);
  }, []);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  return (
    <div className="pt-[157px] pb-[160px]">
      <div className="mx-auto max-w-[1760px]">
        {/* ══════════════════════════════════════════════════
           Title
           ══════════════════════════════════════════════════ */}
        <h1 className="font-[family-name:var(--font-cormorant-infant)] text-[150px] font-medium leading-none tracking-[-10.5px] uppercase text-[#333]">
          {t.galleryPage.title}
        </h1>

        {/* ══════════════════════════════════════════════════
           Main image — 1760x840
           ══════════════════════════════════════════════════ */}
        <div className="relative mt-[13px] h-[840px] w-full overflow-hidden">
          <Image
            key={photos[activeIndex].src}
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            fill
            className="object-cover"
            sizes="1760px"
            priority
          />
        </div>

        {/* ══════════════════════════════════════════════════
           Thumbnail strip with navigation arrows
           ══════════════════════════════════════════════════ */}
        <div className="mt-[20px] flex items-center gap-[14px]">
          {/* Left arrow */}
          <GalleryArrow
            direction="prev"
            onClick={goPrev}
            label={t.galleryPage.prev}
          />

          {/* Thumbnails — centered row */}
          <div className="flex flex-1 items-center justify-center gap-[14px]">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                onClick={() => setActiveIndex(index)}
                className={`relative h-[80px] w-[132px] shrink-0 cursor-pointer overflow-hidden transition-all ${
                  index === activeIndex
                    ? "border-[6px] border-[#4F5E4A]"
                    : "grayscale"
                }`}
                aria-label={`Photo ${index + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="132px"
                />
              </button>
            ))}
          </div>

          {/* Right arrow */}
          <GalleryArrow
            direction="next"
            onClick={goNext}
            label={t.galleryPage.next}
          />
        </div>
      </div>
    </div>
  );
}
