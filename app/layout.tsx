import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import LocaleProvider from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Green World — Fresh Tomatoes from Azerbaijan",
  description:
    "Modern greenhouse farm on the Absheron Peninsula. Premium GMO-free tomatoes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
