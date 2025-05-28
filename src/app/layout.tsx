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
    "Student made wine",
  ],
  authors: [{ name: "Hilgard631", url: "https://hilgard631.org" }],
  creator: "Hilgard631",
  publisher: "Hilgard631",
  openGraph: {
    title: "Hilgard631 - Student made wines",
    description: "Discover and purchase premium Hilgard631 wines online.",
    url: "https://hilgard631.org",
    siteName: "Hilgard631",
    images: [
      {
        url: "https://hilgard631.org/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Hilgard631",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilgard631 - Wine",
    description: "Discover and purchase premium Hilgard631 wines online.",
    images: ["https://hilgard631.org/thumbnail.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
            <div className="flex justify-between pb-3">
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
              <div className="w-1/3 text-end ">
                <Link
                  className="text-primary hover:text-primary-light hover:underline"
                  href="https://linktr.ee/ucdavisvande"
                >
                  UC Davis V&E
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
