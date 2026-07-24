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
      intro="WOS Aide Bar is designed to work without a developer account, analytics profile, or developer-operated server. This policy explains the limited data handling that does occur."
      updated="Effective July 24, 2026"
      chinese={
        <>
          <h2>隐私政策</h2>
          <p>
            WOS Aide Bar 不要求开发者账户，也不包含广告、分析、追踪或由开发者运营的崩溃报告服务。App
            不收集、传输、出售或分享个人数据。
          </p>
          <h3>App 内的数据处理</h3>
          <p>
            剪贴板文字仅在你打开菜单栏面板或主动刷新时于本机读取。查询记录、收藏、设置和导入的期刊列表保存在
            App 的沙盒容器中，不会上传到 IIDEV。你可以在 App
            内清除相关记录；卸载 App 会移除其沙盒数据，但 macOS 或备份系统保留的副本由 Apple
            的相关设置控制。
          </p>
          <h3>购买与外部服务</h3>
          <p>
            自愿支持购买由 Apple App Store 与 StoreKit
            处理。IIDEV 不接收或保存付款卡信息。开始检索时，App
            会在默认浏览器中打开生成的 Web of Science
            链接；此后的浏览及登录行为受浏览器和第三方服务条款约束。
          </p>
          <h3>产品网站</h3>
          <p>
            本网站不使用广告 Cookie、行为分析或联系表单。托管与网络服务商可能为安全、可靠性和内容传输处理常规技术日志，例如
            IP 地址、时间戳、设备或浏览器信息。IIDEV 不使用这些信息建立广告资料。
          </p>
          <h3>联系与变更</h3>
          <p>
            由于 App 没有账户或远程用户数据库，IIDEV
            通常没有可供访问、更正或删除的个人资料。如有隐私问题，请通过
            <a href="https://github.com/wosaide"> WOS Aide 开发者主页</a>
            联系我们。政策如有重大变化，将更新本页日期和内容。
          </p>
        </>
      }
    >
      <LegalSection number="01" title="Who this policy covers">
        <p>
          This policy applies to the WOS Aide Bar macOS application (the
          “App”) and this product website (the “Site”), provided by IIDEV
          (“we,” “us,” or “our”).
        </p>
      </LegalSection>
      <LegalSection number="02" title="Data the App does not collect">
        <p>
          The App does not collect, transmit, sell, rent, or share personal
          data with IIDEV. It includes no advertising SDK, analytics SDK,
          tracking technology, developer-operated telemetry, or
          developer-operated crash-reporting service. The App does not require
          an account.
        </p>
      </LegalSection>
      <LegalSection number="03" title="Data processed on your Mac">
        <p>
          The App processes the following information locally, only to provide
          features you request:
        </p>
        <ul>
          <li>
            Clipboard text, read when you open the menu-bar panel or explicitly
            request a refresh.
          </li>
          <li>
            Search history, favorites, preferences, and imported journal lists,
            stored in the App&apos;s sandbox container.
          </li>
          <li>
            Search terms used to construct a Web of Science URL on your device.
          </li>
        </ul>
        <p>
          This information is not sent to IIDEV. You can clear history and
          favorites in the App. Removing the App removes its sandbox data,
          subject to copies retained by macOS or your backup service under your
          own settings.
        </p>
      </LegalSection>
      <LegalSection number="04" title="App Store and optional purchases">
        <p>
          Optional one-time support purchases are processed by Apple through
          the App Store and StoreKit. Apple may process App Store account,
          transaction, device, and payment information under Apple&apos;s own
          terms and privacy policy. The App receives signed product and
          transaction status needed to complete the purchase, but IIDEV does
          not receive or store your payment card or bank details and operates
          no purchase server.
        </p>
      </LegalSection>
      <LegalSection number="05" title="External services">
        <p>
          When you start a search, the App asks macOS to open the generated Web
          of Science URL in your default browser. Your browser, network
          provider, Apple, and Web of Science or Clarivate may then process
          information under their own policies. WOS Aide Bar is independent
          and is not affiliated with or endorsed by Clarivate.
        </p>
      </LegalSection>
      <LegalSection number="06" title="Site data">
        <p>
          The Site does not use advertising cookies, behavioral analytics,
          account registration, or contact forms. Hosting and network providers
          may automatically process ordinary technical logs—such as IP address,
          timestamp, request path, device, and browser information—to deliver
          the Site, prevent abuse, and maintain reliability. We do not use
          these logs to build advertising profiles.
        </p>
      </LegalSection>
      <LegalSection number="07" title="Children, retention, and your choices">
        <p>
          The App is a general productivity tool and is not directed to
          children. Because IIDEV does not maintain an App account or remote
          user database, we generally have no App personal data to access,
          correct, export, or delete. Device-local information remains until
          you clear it, uninstall the App, or your operating system removes it.
        </p>
      </LegalSection>
      <LegalSection number="08" title="Changes and contact">
        <p>
          We may update this policy when the App, Site, or legal requirements
          change. Material changes will be reflected by the effective date
          above. For privacy or data-handling questions, contact the developer
          through the{" "}
          <a href="https://github.com/wosaide">WOS Aide developer profile</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
