import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";

import Image from "next/image";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hilgard631 - Wine",
  description: "Purchase Hilgard631 Wines",
  keywords: [
    "Hilgard631",
    "wine",
    "buy wine online",
    "premium wine",
    "Hilgard wines",
    "vineyard",
    "red wine",
    "white wine",
  ],
  authors: [{ name: "Hilgard631", url: "https://hilgard631.com" }],
  creator: "Hilgard631",
  publisher: "Hilgard631",
  openGraph: {
    title: "Hilgard631 - Wine",
    description: "Discover and purchase premium Hilgard631 wines online.",
    url: "https://hilgard631.com",
    siteName: "Hilgard631",
    images: [
      {
        url: "https://hilgard631.com/public/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Hilgard631 Wine Bottles",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilgard631 - Wine",
    description: "Discover and purchase premium Hilgard631 wines online.",
    images: ["https://hilgard631.com/public/thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://hilgard631.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-LJZKP1YDCW" />
      <body className={`antialiased`}>
        <div className="flex flex-col w-full mx-auto">{children}</div>
        <footer className="mb-8 mt-16">
          <div className="main-container border-b-1 border-hilgard ">
            <div className="flex justify-between pb-4">
              <div className="w-1/3">
                <p>© Copyright 2025 All Rights Reserved</p>
              </div>
              <div className="w-1/3 text-center">
                <Image
                  width={28}
                  height={29}
                  className="inline-block"
                  alt={"Pencil image of a grape leaf colored"}
                  src="./grapeleaf-footer.svg"
                />
              </div>
              <div className="w-1/3 text-end">
                <Link href="https://linktr.ee/ucdavisvande">
                  UC Davis V&E link tree
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
