import type { Metadata } from "next";
import { LegalPage, LegalSection } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the WOS Aide Bar macOS app and product website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      intro="WOS Aide Bar has no developer account system, advertising, tracking, or developer-operated analytics. Most data stays on your Mac. Optional features contact clearly identified third-party services only when you choose to use them."
      updated="Effective July 26, 2026"
      chinese={
        <>
          <h2>隐私政策摘要</h2>
          <p>
            WOS Aide Bar 不要求开发者账户，不含广告、追踪、开发者分析或开发者运营的崩溃报告服务。剪贴板文字、检索历史、收藏、设置以及导入或下载后的期刊列表主要保存在你的 Mac 上，不会发送给 IIDEV。
          </p>
          <h3>AI 助手</h3>
          <p>
            AI 助手为可选功能。远程请求发送前，App 会显示服务商、端点和将发送的数据，并要求你明确允许。允许后，输入的研究问题、为完成请求所需的上下文及随机安装安全标识符（仅 OpenAI）会直接发送至你选择的 OpenAI、OpenRouter 或自定义兼容服务；IIDEV 不会接收这些内容。你可以在设置中撤回许可。API 密钥保存在 macOS 钥匙串中，可能在卸载 App 后仍由系统保留，直至你主动删除。
          </p>
          <h3>Crossref 与期刊 CSV</h3>
          <p>
            Crossref DOI 查询默认关闭。启用并主动选择后，参考文献文字会直接发送给 Crossref；返回结果可在本机缓存最多 30 天，最多 100 次已完成查询及原始文献会保存在本机，直至你删除。UTD24 与 FT50 列表仅在你点击下载时从 GitHub 获取；GitHub 或其 CDN 会像处理普通网络请求一样看到 IP、时间及请求信息。你自行导入的 Web of Science CSV 只在本机解析，不会上传。
          </p>
          <h3>购买、网站与联系</h3>
          <p>
            自愿支持购买由 Apple 与 StoreKit 处理；IIDEV 不接收付款卡信息。产品网站不用广告 Cookie 或行为分析，但托管商可能处理常规安全与传输日志。如有隐私问题，请联系
            <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>。
          </p>
        </>
      }
    >
      <LegalSection number="01" title="Scope and controller">
        <p>
          This policy applies to the WOS Aide Bar macOS application (the
          “App”) and this product website (the “Site”), provided by IIDEV
          (“we,” “us,” or “our”). The App does not require an IIDEV account,
          and IIDEV does not operate a user-content server for the App.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Data kept on your Mac">
        <p>The App locally processes information needed for features you use:</p>
        <ul>
          <li>
            Clipboard text, read when you open the menu-bar panel or explicitly
            refresh it.
          </li>
          <li>
            Search history, favorites, preferences, AI results, DOI query
            history, and imported or downloaded journal lists.
          </li>
          <li>
            Search terms used to construct a Web of Science URL on your device.
          </li>
        </ul>
        <p>
          These items are not sent to IIDEV. The App contains no advertising
          SDK, tracking technology, developer-operated analytics, or
          developer-operated crash reporting. You can remove individual
          records or clear the relevant history in Settings.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Optional AI Assistant">
        <p>
          AI Assistant is optional. Before the first request to each remote
          provider and endpoint, the App identifies the provider, endpoint,
          data being sent, and available provider privacy policy, then asks for
          your explicit permission. No remote AI request is made if you cancel.
          You can revoke saved permissions in AI Assistant settings.
        </p>
        <p>
          If you allow and generate, the research question and request context
          needed for the three-stage query-generation process are sent directly
          from your Mac to the selected OpenAI, OpenRouter, or custom
          OpenAI-compatible endpoint. Direct OpenAI requests also contain a
          random App-generated installation safety identifier. It is not your
          Apple ID, email address, hardware serial number, or advertising ID.
          IIDEV does not receive these requests or responses.
        </p>
        <p>
          Requests use the selected provider&apos;s API and are subject to that
          provider&apos;s terms, privacy practices, account association, and
          retention rules. The App asks supported OpenAI APIs not to store a
          response where the API permits, but cannot override provider security,
          abuse-prevention, legal, or account records. A custom endpoint is
          controlled by whoever operates it; review its policy before allowing
          a request. Local endpoints do not require remote-data permission.
        </p>
        <p>
          Provider policies:{" "}
          <a href="https://openai.com/policies/privacy-policy/">
            OpenAI privacy policy
          </a>
          {" · "}
          <a href="https://openrouter.ai/privacy">OpenRouter privacy policy</a>
        </p>
        <p>
          API credentials are stored in macOS Keychain, not in App preferences
          or IIDEV systems. Keychain items may survive App deletion or migration
          according to macOS and iCloud Keychain behavior. Remove a credential
          in AI Assistant settings before uninstalling if you want it deleted.
        </p>
      </LegalSection>

      <LegalSection number="04" title="Optional Crossref DOI lookup">
        <p>
          Crossref DOI lookup is off by default. If you enable it and explicitly
          choose the Crossref action, each non-empty reference line is sent
          directly to the Crossref REST API. Crossref receives the ordinary
          request data needed to provide the service, including the reference
          text and network metadata, under its own privacy practices.
        </p>
        <p>
          Returned metadata may be cached on your Mac for up to 30 days using a
          hash key. Up to 100 completed DOI queries—including original
          references, candidates, and results—are stored locally until you
          remove them or clear DOI history in Settings.
        </p>
        <p>
          See the{" "}
          <a href="https://www.crossref.org/operations-and-sustainability/privacy/">
            Crossref privacy policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="05" title="Journal-list downloads and imports">
        <p>
          The App does not bundle a commercial journal database. You may import
          your own CSV files, which are parsed and stored locally. Optional
          UTD24 and FT50 title lists are downloaded from the public{" "}
          <a href="https://github.com/wosaide/wosaide-journal-lists">
            WOS Aide journal-list repository
          </a>{" "}
          only when you press Download or Refresh. GitHub and its content
          delivery providers may process IP address, timestamp, requested path,
          and device or network information needed to deliver the file.
        </p>
        <p>
          See the{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub General Privacy Statement
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="06" title="Web of Science and browser activity">
        <p>
          When you start a search, the App asks macOS to open the generated Web
          of Science URL in your default browser. Browser activity,
          authentication, institutional proxy access, and use of Web of Science
          are handled by those services under their own terms and policies. WOS
          Aide Bar is independent and is not affiliated with or endorsed by
          Clarivate.
        </p>
        <p>
          See the{" "}
          <a href="https://clarivate.com/privacy-center/notices-policies/privacy-policy/">
            Clarivate corporate privacy notice
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number="07" title="App Store and optional purchases">
        <p>
          Optional support purchases are processed by Apple through the App
          Store and StoreKit. Apple may process account, transaction, device,
          and payment information under Apple&apos;s policies. The App receives
          product and signed transaction status needed to finish a purchase,
          but IIDEV does not receive or store your payment card or bank details
          and operates no purchase server.
        </p>
        <p>
          See the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Retention and deletion choices">
        <p>
          Device-local data remains until you delete it in the App, remove the
          App, or macOS removes it. Backup copies follow your Apple or backup
          provider settings. AI credentials in Keychain are handled separately
          as described above. Revoking AI permission prevents future remote AI
          requests until you allow them again; it does not retrieve or delete
          data already processed by a third-party provider. Contact that
          provider for its account or data-rights procedures.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Site data">
        <p>
          The Site does not use advertising cookies, behavioral analytics,
          account registration, or contact forms. Hosting and network providers
          may process ordinary technical logs—such as IP address, timestamp,
          request path, device, and browser information—to deliver the Site,
          prevent abuse, and maintain reliability. We do not use those logs to
          build advertising profiles.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Children, changes, and contact">
        <p>
          The App is a general research-productivity tool and is not directed
          to children. We may update this policy when the App, Site, or legal
          requirements change; the effective date identifies the current
          version. For privacy or data-handling questions, email{" "}
          <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
