import Link from "next/link";
import { homeCopy, type SiteLocale } from "../_lib/site-copy";
import { CinematicHero } from "./CinematicHero";
import { SiteShell } from "./SiteShell";

export function ProductHome({
  locale,
  skipIntro = false,
}: {
  locale: SiteLocale;
  skipIntro?: boolean;
}) {
  const copy = homeCopy[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const pageCopy = {
    en: {
      badge: "A native macOS research companion",
      headline: "Build WOS searches with less friction.",
      subline: "Turn research intent into a query you can review, refine, and open in Web of Science.",
      button: "Explore WOS Aide",
      storeLabel: "Download on the Mac App Store",
      storeAvailability: "Available in Hong Kong, Taiwan, the US, UK, Japan, Singapore, Europe, and most international storefronts. Not currently available in mainland China.",
      workflows: "Four focused workflows",
      privacy: "Local by default",
      privacyItems: ["No account", "No tracking SDK", "Your history stays on Mac"],
      cta: "Designed for researchers who already use Web of Science.",
      ctaButton: "Product guide",
    },
    "zh-Hans": {
      badge: "原生 macOS 科研助手",
      headline: "更轻松地构建 WOS 检索式",
      subline: "把研究问题转化为可核验、可修改，并能直接打开的 Web of Science 检索式。",
      button: "了解 WOS Aide",
      storeLabel: "在 Mac App Store 下载",
      storeAvailability: "香港、台湾、美国、英国、日本、新加坡及欧洲等多数地区可下载；中国大陆 App Store 暂未上架。",
      workflows: "四个专注的工作流",
      privacy: "默认本地优先",
      privacyItems: ["无需账户", "无跟踪 SDK", "历史记录保存在 Mac"],
      cta: "为已经使用 Web of Science 的研究者而设计。",
      ctaButton: "查看产品指南",
    },
    "zh-Hant": {
      badge: "原生 macOS 研究助手",
      headline: "更輕鬆地建立 WOS 檢索式",
      subline: "把研究問題轉化為可核驗、可修改，並能直接開啟的 Web of Science 檢索式。",
      button: "了解 WOS Aide",
      storeLabel: "在 Mac App Store 下載",
      storeAvailability: "香港、台灣、美國、英國、日本、新加坡及歐洲等多數地區可下載；中國大陸 App Store 暫未上架。",
      workflows: "四個專注的工作流程",
      privacy: "預設本機優先",
      privacyItems: ["無需帳戶", "無追蹤 SDK", "歷史記錄保存在 Mac"],
      cta: "為已經使用 Web of Science 的研究者而設計。",
      ctaButton: "查看產品指南",
    },
  }[locale];

  return (
    <SiteShell locale={locale}>
      <main lang={locale}>
        <CinematicHero
          badge={pageCopy.badge}
          basePath={basePath}
          bird={`${basePath}/brand/bird-logo-animated-concept.svg`}
          button={pageCopy.button}
          controls={copy.demoControls}
          headline={pageCopy.headline}
          items={copy.demoItems}
          productName="WOS Aide Bar"
          storeLabel={pageCopy.storeLabel}
          storeAvailability={pageCopy.storeAvailability}
          storeUrl={"https://apps.apple.com/app/wos-aide-bar/id6795536028?mt=12"}
          subline={pageCopy.subline}
          skipIntro={skipIntro}
        />

        <section className="compact-workflows wrap" id="features">
          <p className="compact-label">{pageCopy.workflows}</p>
          <div className="compact-workflow-grid">
            {copy.demoItems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.badge}</p>
                <h2>{item.title}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="compact-privacy">
          <div className="wrap compact-privacy-row">
            <p>{pageCopy.privacy}</p>
            {pageCopy.privacyItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="compact-cta wrap">
          <h2>{pageCopy.cta}</h2>
          <Link href="/support">{pageCopy.ctaButton} <span>→</span></Link>
        </section>
      </main>
    </SiteShell>
  );
}
