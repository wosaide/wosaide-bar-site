import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the WOS Aide Bar macOS application and website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Terms"
      title="Terms of Use"
      intro="These supplemental terms explain WOS Aide Bar’s role as an independent research utility, how optional support purchases work, and the responsibilities that remain with you."
      updated="Effective July 24, 2026"
      chinese={
        <>
          <h2>使用条款</h2>
          <p>
            从 Apple App Store 获取 WOS Aide Bar，即表示你同意 Apple
            标准最终用户许可协议。本条款作为补充；如有冲突，以适用的 Apple
            标准许可协议及不可排除的法律权利为准。
          </p>
          <h3>产品用途与第三方服务</h3>
          <p>
            本 App 用于在设备上构建并打开 Web of Science
            检索网址。它不提供 Web of Science 账户、订阅或内容访问，也不隶属于
            Clarivate。你需要自行确保检索内容合法、拥有所需访问权限，并核对检索结果。
          </p>
          <h3>自愿支持购买</h3>
          <p>
            支持项目是可重复购买、完全自愿的一次性 App 内购买，不解锁功能、不是订阅，也不是慈善捐赠。价格会在确认前由
            Apple 显示；付款、税费、退款和购买记录受 Apple 的规则管理。
          </p>
          <h3>保证与责任</h3>
          <p>
            在法律允许的最大范围内，App 与网站按“现状”和“可用”状态提供。查询生成、期刊目录和外部服务可能发生错误或变化。任何责任限制均不影响你依法不能被排除的消费者权利。
          </p>
          <h3>联系</h3>
          <p>
            获取支持或报告问题，请访问
            <a href="https://github.com/wosaide"> WOS Aide 开发者主页</a>。
          </p>
        </>
      }
    >
      <LegalSection number="01" title="Agreement and Apple’s license terms">
        <p>
          By downloading or using WOS Aide Bar, you agree to these Terms and
          Apple&apos;s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Standard Licensed Application End User License Agreement
          </a>
          . These Terms supplement that agreement. If they conflict, the Apple
          Standard EULA and any non-waivable law control.
        </p>
      </LegalSection>
      <LegalSection number="02" title="What the App does">
        <p>
          WOS Aide Bar is a productivity utility that constructs search URLs on
          your device and asks macOS to open them in your default browser. It
          does not provide a Web of Science account, subscription, database, or
          guarantee of access. Features and supported query formats may change
          as the App evolves.
        </p>
      </LegalSection>
      <LegalSection number="03" title="Your responsibilities">
        <p>You agree to:</p>
        <ul>
          <li>Use the App lawfully and in accordance with applicable rights.</li>
          <li>
            Review generated queries and results before relying on them for
            research, publication, or professional decisions.
          </li>
          <li>
            Maintain any third-party account or institutional access required
            to use external services.
          </li>
          <li>
            Avoid interfering with the App, the Site, or third-party systems,
            except where applicable law expressly permits security research or
            interoperability work.
          </li>
        </ul>
      </LegalSection>
      <LegalSection number="04" title="Optional one-time support purchases">
        <p>
          The App may offer repeatable, optional one-time in-app purchases that
          let you support continued development. These purchases do not unlock
          features, content, credits, or services; all core App features remain
          available without them. They are not subscriptions and are not
          charitable donations.
        </p>
        <p>
          Apple displays the price before confirmation and processes payment,
          taxes, transaction records, and any refund request under its rules.
          Purchase availability and localized pricing can vary by storefront.
        </p>
      </LegalSection>
      <LegalSection number="05" title="Third-party services and names">
        <p>
          Web of Science and Clarivate are third-party names and services. WOS
          Aide Bar and IIDEV are not affiliated with, sponsored by, or endorsed
          by Clarivate. External services may change, become unavailable, or
          apply separate terms, privacy policies, access controls, and fees.
          You use those services at your own discretion.
        </p>
      </LegalSection>
      <LegalSection number="06" title="Intellectual property">
        <p>
          The App, Site, design, and original materials are protected by
          applicable intellectual-property laws. Third-party names, marks, and
          content belong to their respective owners. Nothing in these Terms
          grants rights beyond the license provided under Apple&apos;s Standard
          EULA or applicable open-source notices.
        </p>
      </LegalSection>
      <LegalSection number="07" title="Disclaimers">
        <p>
          To the maximum extent permitted by law, the App and Site are provided
          “as is” and “as available.” We do not promise that generated queries,
          journal catalogs, search results, or external services will always be
          complete, current, accurate, available, or fit for a particular
          research purpose. The App is a query-construction aid, not legal,
          medical, financial, or research-integrity advice.
        </p>
      </LegalSection>
      <LegalSection number="08" title="Limitation, termination, and changes">
        <p>
          Liability is limited only to the extent permitted by applicable law,
          and nothing here excludes rights or remedies that cannot legally be
          excluded. Your license may end if you materially violate applicable
          license terms. You may stop using the App at any time. We may update
          these Terms for future App versions or Site changes; the effective
          date above identifies the current version.
        </p>
      </LegalSection>
      <LegalSection number="09" title="Support and contact">
        <p>
          For support questions or to report a product issue, visit the{" "}
          <a href="https://github.com/wosaide">WOS Aide developer profile</a> or
          the <a href="/support">Support page</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
