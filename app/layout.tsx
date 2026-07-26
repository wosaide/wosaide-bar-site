import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./academic.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://wosaide.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${siteOrigin}${basePath}/og-academic.png`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}${basePath}/`),
  title: {
    default: "WOS Aide Bar — Search, without the syntax",
    template: "%s · WOS Aide Bar",
  },
  description:
    "A private, native macOS menu-bar utility for building Web of Science search URLs.",
  applicationName: "WOS Aide Bar",
  authors: [{ name: "IIDEV" }],
  icons: {
    icon: `${basePath}/brand/app-icon.png`,
    apple: `${basePath}/brand/app-icon.png`,
  },
  openGraph: {
    type: "website",
    title: "WOS Aide Bar — Search, without the syntax",
    description:
      "Turn journal names and research ideas into precise Web of Science searches from your Mac menu bar.",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: "WOS Aide Bar academic product preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOS Aide Bar — Search, without the syntax",
    description:
      "A private, native macOS menu-bar utility for Web of Science search URLs.",
    images: [socialImage],
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
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
