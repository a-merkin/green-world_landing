import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex h-24 items-center justify-between px-20">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Green World"
          width={124}
          height={36}
          priority
        />
      </Link>

      <nav className="flex gap-15 font-[family-name:var(--font-inter)] text-base leading-none tracking-[-0.32px] text-[#4F5E4A]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-opacity hover:opacity-70"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button className="flex items-center gap-1.5 font-[family-name:var(--font-roboto)] text-base leading-none text-[#4F5E4A]">
        <span>Ru</span>
        <Image
          src="/images/chevron-down.svg"
          alt=""
          width={10}
          height={5}
        />
      </button>
    </header>
  );
}
