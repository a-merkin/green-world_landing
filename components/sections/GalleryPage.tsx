"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
      className="flex h-[52px] w-[52px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#4F5E4A] transition-colors hover:bg-[#6C7B67] max-lg:hidden"
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
  const [showAll, setShowAll] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + photos.length) % photos.length);
  }, []);

  // Auto-scroll thumbnails to keep active item visible
  useEffect(() => {
    const activeThumb = thumbRefs.current[activeIndex];
    if (!activeThumb) return;

    activeThumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeIndex]);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Mobile: show first 9 photos, or all if expanded
  const mobilePhotos = showAll ? photos : photos.slice(0, 9);

  return (
    <div className="pt-[157px] pb-[160px] max-lg:pt-[93px] max-lg:pb-[80px] max-md:pt-[52px] max-md:pb-[60px]">
      <div className="mx-auto w-full max-w-[1920px] px-20 max-lg:px-5 max-lg:max-w-[768px] max-md:px-[10px] max-md:max-w-none">
        {/* ══════════════════════════════════════════════════
           Title
           ══════════════════════════════════════════════════ */}
        <h1 className="font-[family-name:var(--font-cormorant-infant)] text-[clamp(6rem,7.8vw,9.375rem)] font-medium leading-none tracking-[-10.5px] uppercase text-[#333] max-lg:text-[96px] max-lg:tracking-[-6.72px] max-md:text-[65px] max-md:tracking-[-4.55px]">
          {t.galleryPage.title}
        </h1>

        {/* ══════════════════════════════════════════════════
           Desktop + Tablet: Main image + thumbnails
           ══════════════════════════════════════════════════ */}
        <div className="max-md:hidden">
          {/* Main image — fluid aspect ratio */}
          <div className="relative mt-[13px] w-full aspect-[1760/840] overflow-hidden max-lg:aspect-[728/431]">
            <Image
              key={photos[activeIndex].src}
              src={photos[activeIndex].src}
              alt={photos[activeIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 728px, 100vw"
              priority
            />
          </div>

          {/* Thumbnail strip with navigation arrows */}
          <div className="mt-[20px] flex w-full items-center gap-[14px] max-lg:gap-[12px]">
            {/* Left arrow — hidden on tablet */}
            <GalleryArrow
              direction="prev"
              onClick={goPrev}
              label={t.galleryPage.prev}
            />

            {/* Thumbnails — centered */}
            <div ref={thumbsRef} className="flex flex-1 min-w-0 items-center gap-[14px] overflow-x-auto scroll-smooth scrollbar-hide max-lg:gap-[12px]">
              {photos.map((photo, index) => (
                <button
                  ref={(el) => { thumbRefs.current[index] = el; }}
                  key={photo.src}
                  onClick={() => setActiveIndex(index)}
                  className={`relative shrink-0 cursor-pointer overflow-hidden transition-all h-[80px] w-[132px] max-lg:h-[86px] max-lg:w-[136px] ${
                    index === activeIndex
                      ? "border-[6px] border-[#4F5E4A] max-lg:border-0"
                      : "grayscale max-lg:mix-blend-luminosity"
                  }`}
                  aria-label={`Photo ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="136px"
                  />
                </button>
              ))}
            </div>

            {/* Right arrow — hidden on tablet */}
            <GalleryArrow
              direction="next"
              onClick={goNext}
              label={t.galleryPage.next}
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
           Mobile: Stacked photo grid
           ══════════════════════════════════════════════════ */}
        <div className="hidden max-md:flex max-md:flex-col max-md:gap-[12px] max-md:mt-[13px]">
          {mobilePhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative w-full aspect-[300/200] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Load more button */}
          {!showAll && photos.length > 9 && (
            <button
              onClick={() => setShowAll(true)}
              className="flex h-[45px] w-full cursor-pointer items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[22px] font-medium leading-none text-[#F0EAE2]"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
