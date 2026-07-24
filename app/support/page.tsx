import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../_components/SiteShell";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Product help, troubleshooting, purchase information, and contact options for WOS Aide Bar.",
};

const faqs = [
  {
    q: "Why does the App say the clipboard is empty?",
    a: "Copy a journal title or search phrase, then open the menu-bar panel or choose refresh. The App reads clipboard text only after one of those actions.",
  },
  {
    q: "Why does a Web of Science search not open?",
    a: "Confirm that a default browser is configured and that your network can reach Web of Science. Institutional sign-in and database access are managed by your browser, institution, and Clarivate.",
  },
  {
    q: "Where are my favorites and history stored?",
    a: "They stay in WOS Aide Bar’s sandbox container on your Mac. You can remove individual entries or clear them in the App.",
  },
  {
    q: "What does a support purchase unlock?",
    a: "Nothing—and that is intentional. Support purchases are optional, repeatable one-time tips. Every core feature remains available without a purchase.",
  },
  {
    q: "How do I request a refund?",
    a: "Apple processes payments and refunds. Use Apple’s Report a Problem service or contact Apple Support with the Apple Account used for the purchase.",
  },
  {
    q: "Can I replace a built-in journal catalog?",
    a: "Yes. In Settings, open Journal Lists to import a compatible current Web of Science CSV or restore the built-in catalog.",
  },
];

export default function SupportPage() {
  return (
    <SiteShell>
      <main className="support-main">
        <section className="support-hero">
          <div className="wrap">
            <p className="kicker">Product support</p>
            <h1>How can we help?</h1>
            <p>
              Practical answers for search, local data, journal lists, and
              optional App Store purchases.
            </p>
          </div>
        </section>

        <section className="wrap support-grid">
          <article className="support-card support-card-primary">
            <span>Start here</span>
            <h2>Quick checks</h2>
            <ol>
              <li>Confirm you are running macOS 13 or later.</li>
              <li>Quit and reopen WOS Aide Bar from Applications.</li>
              <li>
                Copy fresh text, open the menu-bar panel, and try a basic Topic
                search.
              </li>
              <li>
                If launch at login is blocked, review System Settings → General
                → Login Items.
              </li>
            </ol>
          </article>
          <article className="support-card">
            <span>Contact</span>
            <h2>Reach the developer</h2>
            <p>
              Include your macOS version, App version, what you expected, and
              what happened. Do not include passwords, institutional
              credentials, or sensitive clipboard contents.
            </p>
            <a
              className="button button-dark"
              href="https://github.com/wosaide"
              rel="noreferrer"
              target="_blank"
            >
              Developer profile ↗
            </a>
          </article>
        </section>

        <section className="section wrap faq-section">
          <div className="section-heading">
            <div>
              <p className="kicker">Frequently asked</p>
              <h2>Answers without the runaround.</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.q}
                  <b>+</b>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="wrap support-notice">
          <div>
            <p className="kicker">App Store purchases</p>
            <h2>Payments stay with Apple.</h2>
          </div>
          <p>
            WOS Aide Bar does not receive payment card details. For billing,
            refunds, or purchase-history questions, use{" "}
            <a href="https://reportaproblem.apple.com/">
              Apple&apos;s Report a Problem
            </a>{" "}
            service. For our data practices, read the{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section className="support-cn wrap">
          <p className="kicker">中文支持摘要</p>
          <h2>常见问题与联系</h2>
          <p>
            请先确认系统为 macOS 13 或更高版本，并重新启动 App。剪贴板只会在你打开面板或主动刷新时读取。历史、收藏与导入的期刊列表仅保存在本机。自愿支持购买由
            Apple 处理，不解锁任何功能，也不是订阅。
          </p>
          <p>
            报告问题时，请提供 macOS 与 App
            版本、预期结果和实际现象；请勿发送密码、机构登录信息或敏感剪贴板内容。
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
