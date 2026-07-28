import Image from "next/image";
import Link from "next/link";
import { homeCopy, type SiteLocale } from "../_lib/site-copy";
import { FeatureDemoCarousel } from "./FeatureDemoCarousel";
import { SiteShell } from "./SiteShell";

export function ProductHome({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pageCopy = {
    en: {
      workflowKicker: "Four essential workflows",
      workflowTitle: "From a rough clue to a reviewable search.",
      workflowIntro:
        "Each workflow below is captured from the current app. Choose a demo in the player, or scan the four capabilities at a glance.",
      privacyNote: "No account. No tracking SDK. No developer data server.",
      availability: "Native for macOS 13 and later",
    },
    "zh-Hans": {
      workflowKicker: "四个核心工作流",
      workflowTitle: "从一个线索，到可核验的检索式。",
      workflowIntro:
        "所有画面均来自当前 App。可在上方播放器切换演示，也可以在这里快速浏览四项能力。",
      privacyNote: "无需账户，无跟踪 SDK，无开发者数据服务器。",
      availability: "原生支持 macOS 13 及以上版本",
    },
    "zh-Hant": {
      workflowKicker: "四個核心工作流",
      workflowTitle: "從一個線索，到可核驗的檢索式。",
      workflowIntro:
        "所有畫面均來自目前 App。可在上方播放器切換示範，也可以在這裡快速瀏覽四項能力。",
      privacyNote: "無需帳戶，無追蹤 SDK，無開發者資料伺服器。",
      availability: "原生支援 macOS 13 及以上版本",
    },
  }[locale];

  return (
    <SiteShell locale={locale}>
      <main lang={locale}>
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
                <Link
                  className="button button-secondary"
                  href="#features"
                >
                  {copy.developer}
                </Link>
              </div>
              <div className="trust-line" aria-label="Product assurances">
                {copy.assurances.map((assurance) => (
                  <span key={assurance}>{assurance}</span>
                ))}
              </div>
            </div>

            <div
              className="hero-product-stack"
              aria-label={copy.demoControls.carouselLabel}
            >
              <FeatureDemoCarousel
                basePath={basePath}
                controls={copy.demoControls}
                items={copy.demoItems}
              />
            </div>
          </div>
        </section>

        <section className="workflow-section wrap" id="features">
          <div className="section-heading">
            <div>
              <p className="kicker">{pageCopy.workflowKicker}</p>
              <h2>{pageCopy.workflowTitle}</h2>
            </div>
            <p>{pageCopy.workflowIntro}</p>
          </div>
          <div className="workflow-list">
            {copy.demoItems.map((item, index) => (
              <article key={item.title}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p>{item.badge}</p>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="privacy-section">
          <div className="wrap privacy-grid">
            <div>
              <p className="kicker kicker-light">{copy.privacyKicker}</p>
              <h2>{copy.privacyTitle}</h2>
              <p className="privacy-note">{pageCopy.privacyNote}</p>
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
            <p>{pageCopy.availability}</p>
          </div>
          <Link className="button button-primary" href="/support">
            {copy.learnMore}
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
