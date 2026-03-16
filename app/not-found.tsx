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
      <main className="flex flex-col items-center px-5 pt-[276px] pb-[155px]">
        {/* 404 number */}
        <h1 className="font-[family-name:var(--font-display)] text-[300px] font-normal leading-[1.01] tracking-[-12px] text-[#333]">
          {t.notFound.title}
        </h1>

        {/* Heading */}
        <p className="mt-[8px] font-[family-name:var(--font-roboto)] text-[48px] font-medium leading-none text-[#333]">
          {t.notFound.heading}
        </p>

        {/* Description */}
        <p className="mt-[55px] max-w-[493px] text-center font-[family-name:var(--font-roboto)] text-[22px] font-medium leading-[1.2] text-[#333]">
          {t.notFound.description}
        </p>

        {/* CTA button */}
        <Link
          href="/"
          className="mt-[17px] flex h-[45px] w-[336px] items-center justify-center bg-[#4F5E4A] font-[family-name:var(--font-roboto)] text-[20px] font-medium leading-none tracking-[-0.6px] text-[#F0EAE2] transition-opacity hover:opacity-90"
        >
          {t.notFound.cta}
        </Link>
      </main>
      <Footer />
    </>
  );
}
