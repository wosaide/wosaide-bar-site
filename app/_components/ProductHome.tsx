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
      workflowTitle: "From a research question to a reviewable WOS query.",
      workflowIntro:
        "WOS Aide Bar sits between your research intent and the Web of Science search page. It reduces manual syntax work without replacing Web of Science.",
      accessLabel: "Before you search",
      accessNote:
        "WOS Aide Bar does not provide a Web of Science account, subscription, or database access. Sign in with your own or institutional access before using the generated search.",
      privacyNote: "No account. No tracking SDK. No developer data server.",
      availability:
        "Requires macOS 13+ and your own Web of Science access",
    },
    "zh-Hans": {
      workflowKicker: "四个核心工作流",
      workflowTitle: "从研究问题，到可核验的 WOS Query。",
      workflowIntro:
        "WOS Aide Bar 位于你的研究意图与 Web of Science 检索页面之间，减少手动编写语法的工作，但不会替代 Web of Science。",
      accessLabel: "使用前提",
      accessNote:
        "WOS Aide Bar 不提供 Web of Science 账户、订阅或数据库访问权限。请先通过个人或机构权限登录 WOS，再使用 App 生成并打开检索。",
      privacyNote: "无需账户，无跟踪 SDK，无开发者数据服务器。",
      availability:
        "需要 macOS 13 及以上版本，以及你自己的 Web of Science 使用权限",
    },
    "zh-Hant": {
      workflowKicker: "四個核心工作流",
      workflowTitle: "從研究問題，到可核驗的 WOS Query。",
      workflowIntro:
        "WOS Aide Bar 位於你的研究意圖與 Web of Science 檢索頁面之間，減少手動編寫語法的工作，但不會取代 Web of Science。",
      accessLabel: "使用前提",
      accessNote:
        "WOS Aide Bar 不提供 Web of Science 帳戶、訂閱或資料庫存取權限。請先透過個人或機構權限登入 WOS，再使用 App 產生並開啟檢索。",
      privacyNote: "無需帳戶，無追蹤 SDK，無開發者資料伺服器。",
      availability:
        "需要 macOS 13 及以上版本，以及你自己的 Web of Science 使用權限",
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
              <p className="access-note">
                <strong>{pageCopy.accessLabel}</strong>
                {pageCopy.accessNote}
              </p>
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
