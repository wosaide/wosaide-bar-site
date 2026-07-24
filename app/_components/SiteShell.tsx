import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SiteLocale } from "../_lib/site-copy";

const shellCopy = {
  en: {
    features: "Features",
    privacy: "Privacy",
    terms: "Terms",
    support: "Support",
    product: "Product",
    legal: "Legal",
    description: "A native macOS research utility by IIDEV.",
    disclaimer: "Not affiliated with Clarivate or Web of Science.",
  },
  "zh-Hans": {
    features: "功能",
    privacy: "隐私",
    terms: "条款",
    support: "支持",
    product: "产品",
    legal: "法律",
    description: "IIDEV 开发的原生 macOS 科研工具。",
    disclaimer: "与 Clarivate 或 Web of Science 无隶属关系。",
  },
  "zh-Hant": {
    features: "功能",
    privacy: "隱私",
    terms: "條款",
    support: "支援",
    product: "產品",
    legal: "法律",
    description: "IIDEV 開發的原生 macOS 科研工具。",
    disclaimer: "與 Clarivate 或 Web of Science 無隸屬關係。",
  },
};

export function SiteShell({
  children,
  locale = "en",
}: {
  children: ReactNode;
  locale?: SiteLocale;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const copy = shellCopy[locale];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="wrap nav-row">
          <Link className="site-brand" href="/" aria-label="WOS Aide Bar home">
            <Image
              alt=""
              height={34}
              priority
              src={`${basePath}/brand/app-icon.png`}
              width={34}
            />
            <span>WOS Aide Bar</span>
          </Link>
          <div className="nav-actions">
            <nav aria-label="Primary navigation">
              <Link href="/#features">{copy.features}</Link>
              <Link href="/privacy">{copy.privacy}</Link>
              <Link href="/terms">{copy.terms}</Link>
              <Link href="/support">{copy.support}</Link>
            </nav>
            <div className="language-switch" aria-label="Language">
              <Link
                aria-current={locale === "en" ? "page" : undefined}
                href="/en"
                hrefLang="en"
              >
                EN
              </Link>
              <Link
                aria-current={locale === "zh-Hans" ? "page" : undefined}
                href="/zh-hans"
                hrefLang="zh-Hans"
              >
                简
              </Link>
              <Link
                aria-current={locale === "zh-Hant" ? "page" : undefined}
                href="/zh-hant"
                hrefLang="zh-Hant"
              >
                繁
              </Link>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Link className="site-brand site-brand-footer" href="/">
              <Image
                alt=""
                height={32}
                src={`${basePath}/brand/bird-logo.png`}
                width={32}
              />
              <span>WOS Aide Bar</span>
            </Link>
            <p>
              {copy.description}
              <br />
              {copy.disclaimer}
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>{copy.product}</strong>
              <Link href="/#features">{copy.features}</Link>
              <Link href="/support">{copy.support}</Link>
            </div>
            <div>
              <strong>{copy.legal}</strong>
              <Link href="/privacy">{copy.privacy}</Link>
              <Link href="/terms">{copy.terms}</Link>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                rel="noreferrer"
                target="_blank"
              >
                Apple Standard EULA ↗
              </a>
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 IIDEV. All rights reserved.</span>
          <span>Built with care for researchers.</span>
        </div>
      </footer>
    </div>
  );
}
