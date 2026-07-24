import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
          <nav aria-label="Primary navigation">
            <Link href="/#features">Features</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/support">Support</Link>
          </nav>
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
              A native macOS research utility by IIDEV.
              <br />
              Not affiliated with Clarivate or Web of Science.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>Product</strong>
              <Link href="/#features">Features</Link>
              <Link href="/support">Support</Link>
            </div>
            <div>
              <strong>Legal</strong>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
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
