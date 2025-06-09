import type { Metadata } from "next";

import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Hilgard631 - Wine",
  description: "Purchase Hilgard631 Wines",
  keywords: [
    "Hilgard631",
    "wine",
    "buy wines",
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
    title: "Hilgard631 - Student crafted wines",
    description: "Discover and purchase premium Hilgard631 wines.",
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
      <GoogleAnalytics gaId="G-LJZKP1YDCW" />
      <body className={`antialiased`}>
        <div className="flex flex-col w-full mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
