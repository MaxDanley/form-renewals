import type { Metadata } from "next";
import { Lexend_Deca, Newsreader } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/** Web stand-in for News 701 BT Italic until the licensed font file is added. */
const newsreader = Newsreader({
  variable: "--font-news701",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "[FORM] renewal | Peptide Skincare",
    template: "%s | [FORM] renewal",
  },
  description:
    "[FORM] renewal — peptide skincare and scalp care. Copper Growth Shampoo, Capsule Cream, and Lift Cream.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "[FORM] renewal",
    description: "Peptide skincare by [FORM] renewal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} ${newsreader.variable} antialiased`}
      >
        <SmoothScroll>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
