"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/useTranslation";

/* ─── All marker positions from Figma (x,y on 1404×698 map) ─── */
type MarkerDef = { x: number; y: number; country: string; regionIndex?: number };

const MAP_W = 1404;
const MAP_H = 698;

const allMarkers: MarkerDef[] = [
  // Countries
  { x: 770, y: 217.79, country: "ukraine" },
  { x: 720, y: 194.79, country: "poland" },
  { x: 758, y: 187.79, country: "belarus" },
  { x: 830, y: 380.79, country: "uae" },
  // Russian regions (regionIndex maps to russiaRegions array)
  { x: 831, y: 222.79, country: "russia", regionIndex: 0 },   // Astrakhan
  { x: 867, y: 189.79, country: "russia", regionIndex: 1 },   // Bashkortostan
  { x: 824, y: 210.79, country: "russia", regionIndex: 2 },   // Volgograd
  { x: 802, y: 205.79, country: "russia", regionIndex: 3 },   // Voronezh
  { x: 807, y: 171.79, country: "russia", regionIndex: 4 },   // Ivanovo
  { x: 987, y: 190.79, country: "russia", regionIndex: 5 },   // Kemerovo
  { x: 853, y: 157.79, country: "russia", regionIndex: 6 },   // Kirov
  { x: 798, y: 230.79, country: "russia", regionIndex: 7 },   // Krasnodar
  { x: 802, y: 229.79, country: "russia", regionIndex: 8 },   // Kuban
  { x: 764, y: 150.79, country: "russia", regionIndex: 9 },   // Leningrad
  { x: 794, y: 177.79, country: "russia", regionIndex: 10 },  // Moscow
  { x: 798, y: 106.79, country: "russia", regionIndex: 11 },  // Murmansk
  { x: 820, y: 181.79, country: "russia", regionIndex: 12 },  // Nizhny Novgorod
  { x: 774, y: 165.79, country: "russia", regionIndex: 13 },  // Novgorod
  { x: 966, y: 179.79, country: "russia", regionIndex: 14 },  // Novosibirsk
  { x: 938, y: 175.79, country: "russia", regionIndex: 15 },  // Omsk
  { x: 871, y: 201.79, country: "russia", regionIndex: 16 },  // Orenburg
  { x: 790, y: 192.79, country: "russia", regionIndex: 17 },  // Orel
  { x: 827, y: 191.79, country: "russia", regionIndex: 18 },  // Penza
  { x: 873, y: 159.79, country: "russia", regionIndex: 19 },  // Perm
  { x: 809, y: 214.79, country: "russia", regionIndex: 20 },  // Rostov
  { x: 848, y: 189.79, country: "russia", regionIndex: 21 },  // Samara
  { x: 836, y: 198.79, country: "russia", regionIndex: 22 },  // Saratov
  { x: 890, y: 162.79, country: "russia", regionIndex: 23 },  // Sverdlovsk
  { x: 774, y: 181.79, country: "russia", regionIndex: 24 },  // Smolensk
  { x: 810, y: 229.79, country: "russia", regionIndex: 25 },  // Stavropol
  { x: 811, y: 194.79, country: "russia", regionIndex: 26 },  // Tambov
  { x: 853, y: 181.79, country: "russia", regionIndex: 27 },  // Tatarstan
  { x: 792, y: 185.79, country: "russia", regionIndex: 28 },  // Tula
  { x: 915, y: 173.79, country: "russia", regionIndex: 29 },  // Tyumen
  { x: 855, y: 171.79, country: "russia", regionIndex: 30 },  // Udmurt
  { x: 933, y: 142.79, country: "russia", regionIndex: 31 },  // KMAD-Yugra
  { x: 883, y: 189.79, country: "russia", regionIndex: 32 },  // Chelyabinsk
  { x: 802, y: 165.79, country: "russia", regionIndex: 33 },  // Yaroslavl
];

/* ─── Country keys for sidebar ─── */
type CountryKey = "russia" | "poland" | "uae" | "belarus" | "ukraine";

export default function ContactsPageContent() {
  const { t } = useTranslation();
  const ct = t.contactsPage;

  const [russiaOpen, setRussiaOpen] = useState(true);
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);
  const [pinnedMarker, setPinnedMarker] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"customers" | "suppliers">("customers");
  const [formState, setFormState] = useState({ companyName: "", email: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!agreed) return;
      setStatus("sending");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formState,
            formType: activeTab,
          }),
        });
        if (!res.ok) throw new Error();
        setStatus("success");
        setFormState({ companyName: "", email: "", message: "" });
        setAgreed(false);
        setTimeout(() => setStatus("idle"), 4000);
      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    },
    [formState, activeTab, agreed],
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* ─── Kraft paper backgrounds ─── */}
      <Image
        src="/images/backgrounds/kraft-paper.jpg"
        alt=""
        fill
        className="pointer-events-none object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 top-1/2">
        <Image
          src="/images/backgrounds/kraft-paper.jpg"
          alt=""
          fill
          className="pointer-events-none -scale-y-100 object-cover"
        />
      </div>

      <div className="relative">
        {/* ─── Title ─── */}
        <h1 className="mx-auto mt-[161px] max-w-[1760px] px-20 font-[family-name:var(--font-cormorant-infant)] text-[130px] font-medium uppercase leading-none tracking-[-9.1px] text-[#333] opacity-70">
          {ct.title}
        </h1>

        {/* ─── Map + Countries List Section ─── */}
        <div className="relative mx-auto mt-[40px] flex max-w-[1760px] items-start gap-0 px-0">
          {/* Countries sidebar */}
          <div className="ml-20 w-[336px] shrink-0 overflow-hidden rounded-[10px] bg-[#4F5E4A]">
            {/* Russia (expandable) */}
            <div className="px-5 pt-[15px]">
              <button
                className="flex w-full cursor-pointer items-center justify-between"
                onClick={() => setRussiaOpen(!russiaOpen)}
              >
                <span className="font-[family-name:var(--font-roboto)] text-[48px] font-medium leading-none text-[#C4D99D]">
                  {ct.countries.russia}
                </span>
                <Image
                  src={"/images/contacts/chevron-up-active.svg"}
                  alt=""
                  width={20}
                  height={10}
                  className={`transition-transform ${russiaOpen ? "" : "rotate-180"}`}
                />
              </button>

              {/* Scrollbar + region list */}
              {russiaOpen && (
                <div className="mt-[8px] flex gap-[3px]">
                  {/* Scrollbar track */}
                  <div className="relative w-[3px] shrink-0">
                    <div className="absolute inset-0 bg-[#F0EAE2] opacity-40" />
                    <div className="absolute left-0 top-0 h-[42%] w-full bg-[#F0EAE2]" />
                  </div>

                  {/* Regions list */}
                  <div className="max-h-[299px] flex-1 overflow-y-auto pr-1 scrollbar-hide">
                    {ct.russiaRegions.map((region, i) => {
                      const idx = 4 + i;
                      const isActive = hoveredMarker === idx || pinnedMarker === idx;
                      return (
                        <div
                          key={region}
                          className={`flex h-[23px] cursor-pointer items-center px-[14px] font-[family-name:var(--font-roboto)] text-base leading-none transition-colors hover:text-[#C4D99D] ${
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
                </div>
              )}
            </div>

            {/* Other countries */}
            <div className="mt-[14px] flex flex-col gap-[14px] px-5 pb-[14px]">
              <div className="h-px w-full bg-[#F0EAE2] opacity-30" />
              {([
                { key: "poland" as const, markerIdx: 1 },
                { key: "uae" as const, markerIdx: 3 },
                { key: "belarus" as const, markerIdx: 2 },
                { key: "ukraine" as const, markerIdx: 0 },
              ]).map(({ key, markerIdx }) => {
                const isActive = hoveredMarker === markerIdx || pinnedMarker === markerIdx;
                return (
                <div key={key}>
                  <button
                    className={`cursor-pointer font-[family-name:var(--font-roboto)] text-[48px] font-medium leading-none transition-colors hover:text-[#C4D99D] ${
                      isActive ? "text-[#C4D99D]" : "text-[#F0EAE2]"
                    }`}
                    onMouseEnter={() => setHoveredMarker(markerIdx)}
                    onMouseLeave={() => setHoveredMarker(null)}
                    onClick={() => setPinnedMarker(pinnedMarker === markerIdx ? null : markerIdx)}
                  >
                    {ct.countries[key]}
                  </button>
                  <div className="mt-[14px] h-px w-full bg-[#F0EAE2] opacity-30" />
                </div>
                );
              })}
            </div>
          </div>

          {/* World map */}
          <div className="relative -ml-10 flex-1">
            <Image
              src="/images/contacts/world-map.svg"
              alt="Export countries map"
              width={1402}
              height={698}
              className="h-auto w-full"
              priority
            />

            {/* All markers — each is individually addressable */}
            {allMarkers.map((m, i) => {
              const isVisible = hoveredMarker === i || pinnedMarker === i;
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full cursor-pointer transition-opacity duration-300"
                  style={{
                    left: `${(m.x / MAP_W) * 100}%`,
                    top: `${(m.y / MAP_H) * 100}%`,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  onMouseEnter={() => setHoveredMarker(i)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={() => setPinnedMarker(pinnedMarker === i ? null : i)}
                >
                  <Image
                    src="/images/contacts/map-pin.svg"
                    alt=""
                    width={19}
                    height={27}
                  />
                </div>
              );
            })}

            {/* Invisible hitboxes for each marker (always present for hover/click) */}
            {allMarkers.map((m, i) => (
              <div
                key={`hit-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${(m.x / MAP_W) * 100}%`,
                  top: `${(m.y / MAP_H) * 100}%`,
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
        <p className="mx-auto mt-[50px] max-w-[1760px] text-center font-[family-name:var(--font-roboto)] text-[22px] font-medium leading-none text-[#4F5E4A]">
          {ct.address}
        </p>

        {/* ─── Baku map + Contact form ─── */}
        <div className="relative mx-auto mt-[24px] min-h-[581px] max-w-[1920px] pb-[40px]">
          {/* Baku map (absolute, left edge) */}
          <div className="absolute -left-[26px] top-0 h-[581px] w-[595px]">
            <Image
              src="/images/contacts/baku-map.png"
              alt="Baku map"
              fill
              className="object-cover opacity-28"
            />
            {/* Map labels */}
            <div className="absolute left-[182px] top-[284px]">
              <Image
                src="/images/contacts/marker-baku.svg"
                alt=""
                width={30}
                height={30}
              />
              <p className="mt-1 font-[family-name:var(--font-roboto)] text-xl font-medium leading-none tracking-[-0.6px] text-[#333] opacity-60">
                {ct.baku}
              </p>
            </div>
            <div className="absolute left-[367px] top-[314px]">
              <Image
                src="/images/contacts/marker-zire.svg"
                alt=""
                width={26}
                height={26}
              />
              <p className="mt-1 font-[family-name:var(--font-roboto)] text-xl font-medium leading-none tracking-[-0.6px] text-[#333] opacity-60">
                {ct.zire}
              </p>
            </div>
          </div>

          {/* Contact form (centered) */}
          <div className="relative mx-auto w-[732px]">
            {/* Tabs */}
            <div className="flex">
              <button
                className={`flex h-[70px] flex-1 cursor-pointer items-center justify-center rounded-tl-[20px] font-[family-name:var(--font-roboto)] text-[32px] font-medium leading-none transition-colors ${
                  activeTab === "customers"
                    ? "bg-[#4F5E4A] text-[#F0EAE2]"
                    : "bg-[#4F5E4A]/10 text-[#4F5E4A] opacity-85"
                }`}
                onClick={() => setActiveTab("customers")}
              >
                {ct.form.forCustomers}
              </button>
              <button
                className={`flex h-[70px] flex-1 cursor-pointer items-center justify-center rounded-tr-[20px] font-[family-name:var(--font-roboto)] text-[32px] font-medium leading-none transition-colors ${
                  activeTab === "suppliers"
                    ? "bg-[#4F5E4A] text-[#F0EAE2]"
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
              className="rounded-b-[20px] bg-[#4F5E4A] px-[20px] pb-[30px] pt-[39px]"
            >
              <p className="font-[family-name:var(--font-roboto)] text-xl font-medium leading-[1.3] tracking-[-0.6px] text-[#F0EAE2]">
                {ct.form.description}
              </p>

              {/* Fields */}
              <div className="mt-[30px] flex flex-col gap-0">
                <div>
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70">
                    {ct.form.companyName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.companyName}
                    onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                    className="mt-[9px] w-full border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D]"
                  />
                </div>

                <div className="mt-[15px]">
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70">
                    {ct.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="mt-[9px] w-full border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D]"
                  />
                </div>

                <div className="mt-[15px]">
                  <label className="block font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70">
                    {ct.form.message}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="mt-[9px] w-full border-b border-[#F0EAE2]/40 bg-transparent pb-[12px] font-[family-name:var(--font-roboto)] text-base text-[#F0EAE2] outline-none transition-colors focus:border-[#C4D99D]"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="mt-[20px] flex items-center gap-[8px]">
                <button
                  type="button"
                  onClick={() => setAgreed(!agreed)}
                  className={`flex size-[18px] shrink-0 cursor-pointer items-center justify-center border border-[#F0EAE2] opacity-70 ${
                    agreed ? "bg-[#F0EAE2]" : "bg-transparent"
                  }`}
                >
                  {agreed && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#4F5E4A" strokeWidth="2" />
                    </svg>
                  )}
                </button>
                <p className="font-[family-name:var(--font-roboto)] text-base leading-none text-[#F0EAE2] opacity-70">
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
                className="mt-[30px] flex h-[45px] w-full cursor-pointer items-center justify-center bg-[#F0EAE2] font-[family-name:var(--font-roboto)] text-xl font-medium leading-none tracking-[-0.6px] text-[#4F5E4A] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "sending" ? ct.form.sending : ct.form.send}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="mt-3 text-center font-[family-name:var(--font-roboto)] text-sm text-[#C4D99D]">
                  {ct.form.successMessage}
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

      {/* Hide scrollbar in region list */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
