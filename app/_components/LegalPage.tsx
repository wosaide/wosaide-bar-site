import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "./SiteShell";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
  chinese,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
  chinese: ReactNode;
}) {
  return (
    <SiteShell>
      <main className="legal-main">
        <section className="legal-hero">
          <div className="wrap legal-hero-inner">
            <p className="kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="legal-intro">{intro}</p>
            <div className="legal-meta">
              <span>{updated}</span>
              <a href="#english">English</a>
              <a href="#chinese">中文</a>
            </div>
          </div>
        </section>
        <div className="wrap legal-layout">
          <aside className="legal-aside">
            <strong>WOS Aide Bar</strong>
            <p>Legal and product information for the macOS application.</p>
            <Link href="/support">Need help? →</Link>
          </aside>
          <article className="legal-copy" id="english">
            {children}
            <section id="chinese" className="translation">
              <p className="translation-label">简体中文</p>
              {chinese}
            </section>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <span className="legal-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
