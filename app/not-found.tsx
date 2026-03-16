"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center px-20 pt-[276px] pb-[155px] max-lg:px-5 max-lg:pt-[120px] max-lg:pb-[80px] max-md:px-[10px] max-md:pt-[100px] max-md:pb-[60px]">
        {/* 404 number */}
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(7.5rem,15.6vw,18.75rem)] font-normal leading-[1.01] tracking-[-0.04em] text-[#333] max-lg:text-[150px] max-md:text-[120px]">
          {t.notFound.title}
        </h1>

        {/* Heading */}
        <p className="mt-[8px] font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-none text-[#333] max-lg:text-[30px] max-md:text-[24px]">
          {t.notFound.heading}
        </p>

        {/* Description */}
        <p className="mt-[55px] max-w-[493px] text-center font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.15vw,1.375rem)] font-medium leading-[1.2] text-[#333] max-lg:mt-[35px] max-lg:max-w-[400px] max-lg:text-base max-md:mt-[25px] max-md:max-w-[280px] max-md:text-sm">
          {t.notFound.description}
        </p>

        {/* CTA button */}
        <Link
          href="/"
          className="mt-[17px] flex h-[45px] w-full max-w-[336px] items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90 max-lg:max-w-[280px] max-lg:h-[38px] max-lg:text-sm max-md:max-w-[250px] max-md:h-[45px]"
        >
          {t.notFound.cta}
        </Link>
      </main>
      <Footer />
    </>
  );
}
