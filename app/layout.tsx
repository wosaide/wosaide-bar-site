import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://wosaide.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialImage = `${siteOrigin}${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(`${siteOrigin}${basePath}/`),
  title: {
    default: "WOS Aide Bar — Make WOS search construction simple",
    template: "%s · WOS Aide Bar",
  },
  description:
    "A macOS companion for researchers with Web of Science access: match journal initials, build WOS queries, and organize reusable searches.",
  applicationName: "WOS Aide Bar",
  authors: [{ name: "IIDEV" }],
  icons: {
    icon: `${basePath}/brand/app-icon.png`,
    apple: `${basePath}/brand/app-icon.png`,
  },
  openGraph: {
    type: "website",
    title: "WOS Aide Bar — Make WOS search construction simple",
    description:
      "For researchers with Web of Science access: match journal initials, build WOS queries, and organize reusable searches.",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: "WOS Aide Bar makes Web of Science search construction simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WOS Aide Bar — Make WOS search construction simple",
    description:
      "A macOS companion for researchers with Web of Science access.",
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
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
