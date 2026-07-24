import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: {
      default: "WOS Aide Bar — Search, without the syntax",
      template: "%s · WOS Aide Bar",
    },
    description:
      "A private, native macOS menu-bar utility for building Web of Science search URLs.",
    applicationName: "WOS Aide Bar",
    authors: [{ name: "IIDEV" }],
    icons: {
      icon: "/brand/app-icon.png",
      apple: "/brand/app-icon.png",
    },
    openGraph: {
      type: "website",
      title: "WOS Aide Bar — Search, without the syntax",
      description:
        "Turn journal names and research ideas into precise Web of Science searches from your Mac menu bar.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "WOS Aide Bar product preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "WOS Aide Bar — Search, without the syntax",
      description:
        "A private, native macOS menu-bar utility for Web of Science search URLs.",
      images: [`${origin}/og.png`],
    },
  };
}

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
