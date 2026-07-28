import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "./SiteShell";

export type LegalTranslation = {
  id: string;
  label: string;
  lang: string;
  content: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
  chinese,
  translations,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
  chinese?: ReactNode;
  translations?: LegalTranslation[];
}) {
  const localizedSections =
    translations ??
    (chinese
      ? [
          {
            id: "chinese",
            label: "简体中文",
            lang: "zh-Hans",
            content: chinese,
          },
        ]
      : []);

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
              {localizedSections.map((translation) => (
                <a href={`#${translation.id}`} key={translation.id}>
                  {translation.label}
                </a>
              ))}
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
            {localizedSections.map((translation) => (
              <section
                id={translation.id}
                className="translation"
                lang={translation.lang}
                key={translation.id}
              >
                <p className="translation-label">{translation.label}</p>
                {translation.content}
              </section>
            ))}
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
