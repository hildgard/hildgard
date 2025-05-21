import type { Metadata } from "next";

import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hilgard631 - Wine",
  description: "Purchase Hilgard631 Wines",
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
      </body>
    </html>
  );
}
