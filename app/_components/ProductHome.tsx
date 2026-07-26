import Image from "next/image";
import Link from "next/link";
import { homeCopy, type SiteLocale } from "../_lib/site-copy";
import { ProductShowcase } from "./ProductShowcase";
import { SiteShell } from "./SiteShell";

export function ProductHome({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <SiteShell locale={locale}>
      <main>
        <section className="product-hero">
          <div className="wrap product-hero-grid">
            <div className="product-hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {copy.eyebrow}
            </p>
              <h1>{copy.hero}</h1>
              <p className="product-hero-lede">{copy.heroSecondary}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/support">
                {copy.support}
              </Link>
              <a
                className="button button-secondary"
                href="https://github.com/wosaide"
                rel="noreferrer"
                target="_blank"
              >
                {copy.developer}
              </a>
            </div>
            <div className="trust-line" aria-label="Product assurances">
              {copy.assurances.map((assurance) => (
                <span key={assurance}>{assurance}</span>
              ))}
            </div>
            </div>

            <div className="hero-product-stack" aria-label="Current WOS Aide Bar interface">
              <div className="hero-screen hero-screen-main">
                <div className="hero-screen-label">
                  <span>WOS Aide Bar 1.0</span>
                  <b>Live app capture</b>
                </div>
                <Image
                  alt="Current WOS Aide Bar menu-bar control center"
                  height={483}
                  priority
                  src={`${basePath}/screenshots/main-panel.png`}
                  width={900}
                />
              </div>
              <div className="hero-screen hero-screen-search">
                <Image
                  alt="Current WOS Aide Bar quick-search window"
                  height={162}
                  priority
                  src={`${basePath}/screenshots/manual-search.png`}
                  width={714}
                />
              </div>
              <Image
                alt=""
                className="hero-app-icon"
                height={112}
                priority
                src={`${basePath}/brand/app-icon.png`}
                width={112}
              />
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="wrap proof-grid">
            {copy.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <ProductShowcase
          basePath={basePath}
          intro={copy.showcaseIntro}
          items={copy.showcaseItems}
          kicker={copy.showcaseKicker}
          title={copy.showcaseTitle}
        />

        <section className="section wrap" id="features">
          <div className="section-heading">
            <div>
              <p className="kicker">{copy.featureKicker}</p>
              <h2>{copy.featureTitle}</h2>
            </div>
            <p>{copy.featureIntro}</p>
          </div>
          <div className="feature-grid product-feature-grid">
            {copy.features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="privacy-section">
          <div className="wrap privacy-grid">
            <div>
              <p className="kicker kicker-light">{copy.privacyKicker}</p>
              <h2>{copy.privacyTitle}</h2>
            </div>
            <div className="privacy-points">
              {copy.privacyItems.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section wrap" id="details">
          <div className="section-heading">
            <div>
              <p className="kicker">{copy.detailsKicker}</p>
              <h2>{copy.detailsTitle}</h2>
            </div>
          </div>
          <div className="detail-links">
            {[
              ["/privacy", copy.privacyPolicy, copy.detailsDescriptions[0]],
              ["/terms", copy.terms, copy.detailsDescriptions[1]],
              ["/support", copy.supportLabel, copy.detailsDescriptions[2]],
            ].map(([href, title, description]) => (
              <Link href={href} key={href}>
                <span>{title}</span>
                <small>{description}</small>
                <b>→</b>
              </Link>
            ))}
          </div>
        </section>

        <section className="cta wrap">
          <Image
            alt="WOS Aide Bar app icon"
            height={100}
            src={`${basePath}/brand/app-icon.png`}
            width={100}
          />
          <div>
            <p className="kicker">{copy.ctaKicker}</p>
            <h2>{copy.ctaTitle}</h2>
          </div>
          <Link className="button button-primary" href="/support">
            {copy.learnMore}
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
