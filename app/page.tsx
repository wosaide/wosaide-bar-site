import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./_components/SiteShell";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <SiteShell>
      <main>
        <section
          aria-label="WOS Aide Bar — Search, without the syntax. A macOS-style journal search interface."
          className="visual-hero"
          role="img"
          style={{
            backgroundImage: `url("${basePath}/hero-product.png")`,
          }}
        />

        <section className="hero-context wrap">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Native macOS menu-bar utility
            </p>
            <p className="hero-context-copy">
              Turn a journal name, topic, author, DOI, or advanced query into a
              precise Web of Science search—right from your menu bar.
            </p>
            <p className="lede-cn">
              从菜单栏快速构建 Web of Science 检索式。剪贴板、历史记录与收藏只留在你的 Mac。
            </p>
          </div>
          <div className="hero-context-actions">
            <div className="hero-actions">
              <Link className="button button-primary" href="/support">
                Get support
              </Link>
              <a
                className="button button-secondary"
                href="https://github.com/wosaide"
                rel="noreferrer"
                target="_blank"
              >
                Developer profile ↗
              </a>
            </div>
            <div className="trust-line" aria-label="Product assurances">
              <span>No account</span>
              <span>No analytics</span>
              <span>No tracking</span>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="wrap proof-grid">
            <div>
              <strong>4</strong>
              <span>built-in journal indexes</span>
            </div>
            <div>
              <strong>3</strong>
              <span>interface languages</span>
            </div>
            <div>
              <strong>0</strong>
              <span>developer-operated servers</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>local search history</span>
            </div>
          </div>
        </section>

        <section className="section wrap" id="features">
          <div className="section-heading">
            <div>
              <p className="kicker">Built for research momentum</p>
              <h2>From copied title to search results in seconds.</h2>
            </div>
            <p>
              WOS Aide Bar handles the query structure while you stay focused
              on the literature.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-card-wide">
              <span className="feature-number">01</span>
              <h3>Clipboard to query</h3>
              <p>
                Open the panel or request a refresh, choose the right search
                field, and launch the generated URL in your default browser.
              </p>
              <div className="syntax-sample">
                <span>SO=</span>
                <code>(&quot;NATURE HUMAN BEHAVIOUR&quot;)</code>
              </div>
            </article>
            <article className="feature-card">
              <span className="feature-number">02</span>
              <h3>Journal-aware completion</h3>
              <p>
                Match against built-in SCIE, SSCI, AHCI, and ESCI catalogs, or
                import your own supported journal list.
              </p>
              <div className="chip-row">
                <span>SCIE</span><span>SSCI</span><span>AHCI</span><span>ESCI</span>
              </div>
            </article>
            <article className="feature-card">
              <span className="feature-number">03</span>
              <h3>Saved research patterns</h3>
              <p>
                Keep favorites and recent searches close without sending them
                to a cloud account.
              </p>
              <div className="mini-list">
                <span>★ Climate adaptation review</span>
                <span>↺ Author collaboration map</span>
              </div>
            </article>
            <article className="feature-card feature-card-dark">
              <span className="feature-number">04</span>
              <h3>Advanced when you need it</h3>
              <p>
                Use guided fields for everyday work or enter a free-form
                advanced query when precision matters.
              </p>
              <code>TS=(urban resilience) AND PY=(2022-2026)</code>
            </article>
          </div>
        </section>

        <section className="privacy-section">
          <div className="wrap privacy-grid">
            <div>
              <p className="kicker kicker-light">Designed for privacy</p>
              <h2>Your research trail stays yours.</h2>
            </div>
            <div className="privacy-points">
              <article>
                <span>01</span>
                <div>
                  <h3>User-initiated clipboard access</h3>
                  <p>
                    Clipboard text is read locally only when you open the panel
                    or explicitly refresh it.
                  </p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Local app storage</h3>
                  <p>
                    History, favorites, settings, and imported journal lists
                    remain in the app&apos;s sandbox container.
                  </p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>No profiling</h3>
                  <p>
                    The app contains no advertising, analytics, tracking, or
                    developer-operated crash-reporting SDK.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section wrap" id="details">
          <div className="section-heading">
            <div>
              <p className="kicker">Clear before you install</p>
              <h2>Product and legal details, in plain language.</h2>
            </div>
          </div>
          <div className="detail-links">
            <Link href="/privacy">
              <span>Privacy Policy</span>
              <small>App and website data practices</small>
              <b>→</b>
            </Link>
            <Link href="/terms">
              <span>Terms of Use</span>
              <small>License, external services, and purchases</small>
              <b>→</b>
            </Link>
            <Link href="/support">
              <span>Support</span>
              <small>Help, troubleshooting, and contact</small>
              <b>→</b>
            </Link>
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
            <p className="kicker">Made for macOS 13 and later</p>
            <h2>Keep the search close. Keep the data local.</h2>
          </div>
          <Link className="button button-primary" href="/support">
            Learn more
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
