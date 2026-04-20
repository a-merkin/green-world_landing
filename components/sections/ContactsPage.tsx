"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { contacts } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/useTranslation";

/* ─── All marker positions from Figma (x,y on 1404×698 map) ─── */
type MarkerDef = { x: number; y: number; country: string; regionIndex?: number };

const MAP_W = 1404;
const MAP_H = 698;
const MARKER_OFFSET_X = 0;
const MARKER_OFFSET_Y = 20;

const allMarkers: MarkerDef[] = [
  { x: 770, y: 217.79, country: "ukraine" },
  { x: 720, y: 214.79, country: "poland" },
  { x: 758, y: 187.79, country: "belarus" },
  { x: 830, y: 380.79, country: "uae" },
  { x: 831, y: 222.79, country: "russia", regionIndex: 0 },
  { x: 867, y: 189.79, country: "russia", regionIndex: 1 },
  { x: 824, y: 210.79, country: "russia", regionIndex: 2 },
  { x: 802, y: 205.79, country: "russia", regionIndex: 3 },
  { x: 807, y: 171.79, country: "russia", regionIndex: 4 },
  { x: 987, y: 190.79, country: "russia", regionIndex: 5 },
  { x: 853, y: 157.79, country: "russia", regionIndex: 6 },
  { x: 798, y: 230.79, country: "russia", regionIndex: 7 },
  { x: 802, y: 229.79, country: "russia", regionIndex: 8 },
  { x: 764, y: 150.79, country: "russia", regionIndex: 9 },
  { x: 794, y: 177.79, country: "russia", regionIndex: 10 },
  { x: 798, y: 106.79, country: "russia", regionIndex: 11 },
  { x: 820, y: 181.79, country: "russia", regionIndex: 12 },
  { x: 774, y: 165.79, country: "russia", regionIndex: 13 },
  { x: 966, y: 179.79, country: "russia", regionIndex: 14 },
  { x: 938, y: 175.79, country: "russia", regionIndex: 15 },
  { x: 871, y: 201.79, country: "russia", regionIndex: 16 },
  { x: 790, y: 192.79, country: "russia", regionIndex: 17 },
  { x: 827, y: 191.79, country: "russia", regionIndex: 18 },
  { x: 873, y: 159.79, country: "russia", regionIndex: 19 },
  { x: 809, y: 214.79, country: "russia", regionIndex: 20 },
  { x: 848, y: 189.79, country: "russia", regionIndex: 21 },
  { x: 836, y: 198.79, country: "russia", regionIndex: 22 },
  { x: 890, y: 162.79, country: "russia", regionIndex: 23 },
  { x: 774, y: 181.79, country: "russia", regionIndex: 24 },
  { x: 810, y: 229.79, country: "russia", regionIndex: 25 },
  { x: 811, y: 194.79, country: "russia", regionIndex: 26 },
  { x: 853, y: 181.79, country: "russia", regionIndex: 27 },
  { x: 792, y: 185.79, country: "russia", regionIndex: 28 },
  { x: 915, y: 173.79, country: "russia", regionIndex: 29 },
  { x: 855, y: 171.79, country: "russia", regionIndex: 30 },
  { x: 933, y: 142.79, country: "russia", regionIndex: 31 },
  { x: 883, y: 189.79, country: "russia", regionIndex: 32 },
  { x: 802, y: 165.79, country: "russia", regionIndex: 33 },
];

type CountryKey = "russia" | "poland" | "uae" | "belarus" | "ukraine";

export default function ContactsPageContent() {
  const { t } = useTranslation();
  const ct = t.contactsPage;

  const [russiaOpen, setRussiaOpen] = useState(true);
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);
  const [pinnedMarker, setPinnedMarker] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"customers" | "suppliers">("customers");
  const [formState, setFormState] = useState({ companyName: "", email: "", message: "", website: "" });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "spam" | "error">("idle");

  const getSelectedLocation = useCallback(() => {
    if (pinnedMarker === null) return undefined;
    const marker = allMarkers[pinnedMarker];
    if (!marker) return undefined;
    if (marker.country === "russia" && marker.regionIndex !== undefined) {
      return `Russia — ${ct.russiaRegions[marker.regionIndex]}`;
    }
    const countryKey = marker.country as CountryKey;
    return ct.countries[countryKey] ?? marker.country;
  }, [pinnedMarker, ct]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!agreed) return;
      setStatus("sending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formState, formType: activeTab, location: getSelectedLocation() }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error();
        if (data.category === "spam") {
          setStatus("spam");
        } else {
          setStatus("success");
          setFormState({ companyName: "", email: "", message: "", website: "" });
          setAgreed(false);
        }
        setTimeout(() => setStatus("idle"), 4000);
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    },
    [formState, activeTab, agreed, getSelectedLocation],
  );

  const otherCountries: { key: CountryKey; markerIdx: number }[] = [
    { key: "poland", markerIdx: 1 },
    { key: "uae", markerIdx: 3 },
    { key: "belarus", markerIdx: 2 },
    { key: "ukraine", markerIdx: 0 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative">
        {/* ─── Title ─── */}
        <h1 className="mx-auto mt-[161px] w-full max-w-[1920px] px-20 font-[family-name:var(--font-cormorant-infant)] text-[clamp(5rem,6.77vw,8.125rem)] font-medium uppercase leading-[0.85] tracking-[-0.07em] text-[#333] opacity-70 max-lg:px-5 max-lg:mt-[102px] max-lg:text-[83px] max-lg:tracking-[-4.15px] max-md:px-[10px] max-md:mt-[57px] max-md:text-[35px] max-md:tracking-[-2.45px] text-center">
          {ct.title}
        </h1>

        {/* ─── Map + Countries List Section ─── */}
        <div className="relative mx-auto mt-[40px] flex w-full max-w-[1920px] items-start max-lg:mt-[20px] max-lg:px-5 max-md:flex-col max-md:px-[10px]">
          {/* Countries sidebar */}
          <div className="relative z-10 ml-20 w-[336px] shrink-0 overflow-hidden rounded-[10px] bg-[#4F5E4A] max-lg:ml-0 max-lg:w-[211px] max-md:w-full">
            {/* Russia (expandable) */}
            <div className="px-5 pt-[15px] max-lg:px-3 max-lg:pt-[12px]">
              <button
                className="flex w-full cursor-pointer items-center justify-between"
                onClick={() => setRussiaOpen(!russiaOpen)}
              >
                <span className="font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-none text-[#C4D99D] max-lg:text-[24px] max-md:text-[22px]">
                  {ct.countries.russia}
                </span>
                <span className="flex items-center justify-center p-3 -mr-3">
                  <Image
                    src="/images/contacts/chevron-up-active.svg"
                    alt=""
                    width={20}
                    height={10}
                    className={`pointer-events-none transition-transform max-lg:w-[16px] ${russiaOpen ? "" : "rotate-180"}`}
                  />
                </span>
              </button>

              {/* Region list */}
              {russiaOpen && (
                <div className="mt-[8px] max-h-[299px] regions-scrollbar max-lg:max-h-[198px] max-md:max-h-[234px]">
                  {ct.russiaRegions.map((region, i) => {
                    const idx = 4 + i;
                    const isActive = hoveredMarker === idx || pinnedMarker === idx;
                    return (
                      <div
                        key={region}
                        className={`flex h-[23px] cursor-pointer items-center px-[14px] font-[family-name:var(--font-roboto)] text-base leading-none transition-colors hover:text-[#C4D99D] max-lg:px-[12px] max-lg:text-sm max-lg:h-[18px] ${
                          isActive ? "text-[#C4D99D]" : "text-[#F0EAE2]"
                        } ${i % 2 === 0 ? "bg-[#F0EAE2]/15" : ""}`}
                        onMouseEnter={() => setHoveredMarker(idx)}
                        onMouseLeave={() => setHoveredMarker(null)}
                        onClick={() => setPinnedMarker(pinnedMarker === idx ? null : idx)}
                      >
                        {region}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other countries */}
            <div className="mt-[14px] flex flex-col gap-[14px] px-5 pb-[14px] max-lg:mt-[10px] max-lg:gap-[10px] max-lg:px-3 max-lg:pb-[12px] max-md:gap-[12px]">
              {otherCountries.map(({ key, markerIdx }) => {
                const isActive = hoveredMarker === markerIdx || pinnedMarker === markerIdx;
                return (
                  <div key={key} className="flex flex-col gap-[14px] max-lg:gap-[10px] max-md:gap-[12px]">
                    <div className="h-px w-full bg-[#F0EAE2] opacity-30" />
                    <button
                      className={`cursor-pointer text-left font-[family-name:var(--font-roboto)] text-[clamp(1.5rem,2.5vw,3rem)] font-medium leading-none transition-colors hover:text-[#C4D99D] max-lg:text-[24px] max-md:text-[22px] ${
                        isActive ? "text-[#C4D99D]" : "text-[#F0EAE2]"
                      }`}
                      onMouseEnter={() => setHoveredMarker(markerIdx)}
                      onMouseLeave={() => setHoveredMarker(null)}
                      onClick={() => setPinnedMarker(pinnedMarker === markerIdx ? null : markerIdx)}
                    >
                      {ct.countries[key]}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* World map — hidden on mobile */}
          <div className="relative -ml-10 flex-1 min-w-0 max-lg:ml-0 max-md:hidden">
            <Image
              src="/images/contacts/world-map.svg"
              alt="Export countries map"
              width={1402}
              height={698}
              className="h-auto w-full"
              priority
            />

            {/* Markers */}
            {allMarkers.map((m, i) => {
              const isVisible = hoveredMarker === i || pinnedMarker === i;
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-opacity duration-300"
                  style={{
                    left: `${((m.x + MARKER_OFFSET_X) / MAP_W) * 100}%`,
                    top: `${((m.y + MARKER_OFFSET_Y) / MAP_H) * 100}%`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  onMouseEnter={() => setHoveredMarker(i)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={() => setPinnedMarker(pinnedMarker === i ? null : i)}
                >
                  <Image src="/images/contacts/map-pin.svg" alt="" width={19} height={27} />
                </div>
              );
            })}

            {/* Invisible hitboxes */}
            {allMarkers.map((m, i) => (
              <div
                key={`hit-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${((m.x + MARKER_OFFSET_X) / MAP_W) * 100}%`,
                  top: `${((m.y + MARKER_OFFSET_Y) / MAP_H) * 100}%`,
                  width: 30,
                  height: 30,
                }}
                onMouseEnter={() => setHoveredMarker(i)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => setPinnedMarker(pinnedMarker === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* ─── Address ─── */}
        <p className="mx-auto mt-[50px] w-full max-w-[1920px] px-20 text-center font-[family-name:var(--font-roboto)] text-[clamp(1rem,1.15vw,1.375rem)] font-medium leading-none text-[#4F5E4A] max-lg:px-5 max-lg:mt-[30px] max-lg:text-base max-lg:tracking-[-0.48px] max-md:px-[10px] max-md:mt-[20px] max-md:text-base">
          {ct.address}
        </p>

        {/* ─── Baku map + Contact form ─── */}
        <div className="relative mx-auto mt-[24px] min-h-[581px] max-w-[1920px] pb-[40px] max-lg:min-h-0 max-lg:mt-[16px] max-md:mt-[16px] max-md:pb-[20px]">
          {/* Baku map (decorative, desktop only) */}
          <div className="absolute -left-[26px] top-0 h-[581px] w-[595px] max-lg:hidden">
            <Image src="/images/contacts/baku-map.png" alt="Baku map" fill className="object-cover opacity-28" />
            <div className="absolute left-[182px] top-[284px]">
              <Image src="/images/contacts/marker-baku.svg" alt="" width={30} height={30} />
              <p className="mt-1 font-[family-name:var(--font-roboto)] text-xl font-medium leading-none tracking-[-0.6px] text-[#333] opacity-60">
                {ct.baku}
              </p>
            </div>
            <div className="absolute left-[367px] top-[314px]">
              <Image src="/images/contacts/marker-zire.svg" alt="" width={26} height={26} />
              <p className="mt-1 font-[family-name:var(--font-roboto)] text-xl font-medium leading-none tracking-[-0.6px] text-[#333] opacity-60">
                {ct.zire}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="relative mx-auto w-[732px] max-lg:w-[556px] max-md:w-full max-md:px-[10px]">
            {/* Tabs */}
            <div className="flex">
              <button
                className={`flex h-[70px] flex-1 cursor-pointer items-center justify-center rounded-tl-[20px] font-[family-name:var(--font-roboto)] text-[clamp(1.125rem,1.67vw,2rem)] font-medium leading-none transition-colors max-lg:text-[24px] max-lg:h-[57px] max-md:text-[18px] max-md:h-[57px] ${
                  activeTab === "customers"
                    ? "bg-[#4F5E4A] mix-blend-multiply text-[#F0EAE2]"
                    : "bg-[#4F5E4A]/10 text-[#4F5E4A] opacity-85"
                }`}
                onClick={() => setActiveTab("customers")}
              >
                {ct.form.forCustomers}
              </button>
              <button
                className={`flex h-[70px] flex-1 cursor-pointer items-center justify-center rounded-tr-[20px] font-[family-name:var(--font-roboto)] text-[clamp(1.125rem,1.67vw,2rem)] font-medium leading-none transition-colors max-lg:text-[24px] max-lg:h-[57px] max-md:text-[18px] max-md:h-[57px] ${
                  activeTab === "suppliers"
                    ? "bg-[#4F5E4A] mix-blend-multiply text-[#F0EAE2]"
                    : "bg-[#4F5E4A]/10 text-[#4F5E4A] opacity-85"
                }`}
                onClick={() => setActiveTab("suppliers")}
              >
                {ct.form.forSuppliers}
              </button>
            </div>

            {/* Form body */}
            <form
              onSubmit={handleSubmit}
              className="rounded-b-[20px] bg-[#4F5E4A] mix-blend-multiply px-[20px] pb-[30px] pt-[39px] max-lg:pt-[24px] max-lg:pb-[20px] max-md:px-[10px]"
            >
              <p className="font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-[1.3] tracking-[-0.6px] text-[#F0EAE2] max-lg:text-base max-lg:tracking-[-0.48px] max-md:text-sm max-md:tracking-[-0.42px]">
                {ct.form.description}
              </p>
              <p className="mt-[12px] font-[family-name:var(--font-roboto)] text-sm leading-[1.3] text-[#C4D99D] max-md:text-[13px]">
                {ct.form.recipientLabel}:{" "}
                <a href={`mailto:${contacts.email}`} className="border-b border-[#C4D99D]/60 transition-opacity hover:opacity-80">
                  {contacts.email}
                </a>
              </p>

              {/* Fields */}
              <div className="mt-[30px] flex flex-col gap-0 max-lg:mt-[20px]">
                <div>
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm">
                    {ct.form.companyName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.companyName}
                    onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                    className="mt-[9px] w-full border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D] max-lg:text-sm"
                  />
                </div>

                <div className="mt-[15px]">
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm">
                    {ct.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="mt-[9px] w-full border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D] max-lg:text-sm"
                  />
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  />
                </div>

                <div className="mt-[15px]">
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm">
                    {ct.form.message}
                  </label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="mt-[9px] w-full resize-none border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D] max-lg:text-sm"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-[20px] flex items-center gap-[8px]">
                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`flex size-[18px] shrink-0 cursor-pointer items-center justify-center border border-[#F0EAE2] opacity-70 max-lg:size-[16px] ${
                    agreed ? "bg-[#F0EAE2]" : "bg-transparent"
                  }`}
                >
                  {agreed && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#4F5E4A" strokeWidth="2" />
                    </svg>
                  )}
                </button>
                <p className="font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70 max-lg:text-sm">
                  {ct.form.agree}{" "}
                  <Link href="/privacy" className="cursor-pointer border-b border-[#F0EAE2]/70 transition-opacity hover:opacity-100">
                    {ct.form.privacyPolicy}
                  </Link>
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!agreed || status === "sending"}
                className="mt-[30px] flex h-[45px] w-full cursor-pointer items-center justify-center bg-[#F0EAE2] font-[family-name:var(--font-roboto)] text-[clamp(0.875rem,1.04vw,1.25rem)] font-medium leading-none tracking-[-0.6px] text-[#4F5E4A] transition-colors hover:bg-[#C4D99D] disabled:cursor-not-allowed disabled:opacity-50 max-lg:h-[30px] max-lg:text-sm max-lg:tracking-[-0.42px] max-md:h-[45px]"
              >
                {status === "sending" ? ct.form.sending : ct.form.send}
              </button>

              {status === "success" && (
                <p className="mt-3 text-center font-[family-name:var(--font-roboto)] text-sm text-[#C4D99D]">
                  {ct.form.successMessage}
                </p>
              )}
              {status === "spam" && (
                <p className="mt-3 text-center font-[family-name:var(--font-roboto)] text-sm text-amber-200">
                  {ct.form.spamBlockedMessage}
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center font-[family-name:var(--font-roboto)] text-sm text-red-300">
                  {ct.form.errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
