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
      intro="These terms supplement Apple’s Standard EULA and explain WOS Aide Bar’s independent role, optional external features, journal-list sources, and voluntary support purchases."
      updated="Effective July 27, 2026"
      chinese={
        <>
          <h2>使用条款摘要</h2>
          <p>
            从 Apple App Store 获取或使用 WOS Aide Bar，即表示你同意 Apple 标准最终用户许可协议及本补充条款；如有冲突，以 Apple 标准协议和不可排除的法律权利为准。
          </p>
          <h3>用途与外部服务</h3>
          <p>
            本 App 是独立的科研效率工具，不隶属于 Clarivate、Crossref、OpenAI、OpenRouter、Financial Times 或 UT Dallas。Web of Science、AI、Crossref、GitHub 及自定义端点各自适用其条款、隐私政策、访问限制与费用。你应在依赖检索式、AI 输出、DOI 匹配或期刊名单前自行核验。
          </p>
          <h3>期刊名单与内容权利</h3>
          <p>
            App 不内置商业期刊数据库。SCIE、SSCI、AHCI、ESCI 与 AJG 2024 仅支持用户自行导入；你须确保有权取得和使用所选 CSV。可选 UTD24 与 FT50 名称清单可按需从项目 GitHub 下载，仅用于名称识别和互操作。相关名称、商标及第三方资料归各权利人所有。
          </p>
          <h3>自愿支持购买</h3>
          <p>
            支持项目为可重复购买、完全自愿的一次性 App 内购买，不解锁功能、不是订阅或慈善捐赠。价格、付款、税费和退款由 Apple 管理。
          </p>
        </>
      }
    >
      <LegalSection number="01" title="Agreement and Apple’s EULA">
        <p>
          By downloading, installing, or using WOS Aide Bar, you agree to these
          Terms and Apple&apos;s{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Standard Licensed Application End User License Agreement
          </a>
          . These Terms supplement that agreement. If they conflict, the Apple
          Standard EULA and any non-waivable law control.
        </p>
      </LegalSection>

      <LegalSection number="02" title="What the App provides">
        <p>
          WOS Aide Bar is a research-productivity utility that constructs
          search URLs on your device, opens them in your browser, manages local
          journal-title suggestions, and offers optional AI query generation
          and Crossref DOI matching. It does not provide a Web of Science
          account, subscription, database, publication assessment, or guarantee
          of access or results.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Your responsibilities">
        <ul>
          <li>Use the App and external services lawfully.</li>
          <li>
            Review generated queries, AI output, DOI matches, and journal-list
            suggestions before relying on them.
          </li>
          <li>
            Maintain required third-party accounts, credentials, subscriptions,
            permissions, and institutional access.
          </li>
          <li>
            Import only CSV files that you have the right to possess and use.
          </li>
          <li>
            Protect API keys and verify the operator and privacy practices of
            any custom AI endpoint you configure.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number="04" title="AI and Crossref features">
        <p>
          AI Assistant and Crossref DOI lookup are optional third-party
          integrations. AI output may be incomplete, inaccurate, biased, or
          unsuitable. DOI matching may return the wrong work or no work. You
          remain responsible for checking syntax, sources, citations, licenses,
          and research decisions.
        </p>
        <p>
          Remote AI providers and custom endpoint operators may impose separate
          terms, privacy practices, account rules, usage limits, and fees.
          Crossref applies its own service terms and policies. IIDEV does not
          control those services and cannot guarantee their availability,
          confidentiality, retention, or output.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Journal-list sources and rights">
        <p>
          No commercial Web of Science journal database is bundled with the
          App. SCIE, SSCI, AHCI, ESCI, and AJG 2024 CSV files are user-supplied
          and processed locally; you are responsible for obtaining and using
          them lawfully. Optional UTD24 and FT50 journal-title lists may be
          downloaded from the project&apos;s public GitHub repository for
          identification and interoperability.
        </p>
        <p>
          Third-party list names, journal names, marks, and source materials
          remain the property of their respective owners. Availability through
          the App does not transfer ownership, endorsement, ranking authority,
          database rights, or permission to republish a source dataset. Source
          organizations may revise their lists at any time.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Third-party services and independence">
        <p>
          WOS Aide Bar and IIDEV are independent and are not affiliated with,
          sponsored by, or endorsed by Clarivate, Web of Science, Crossref,
          OpenAI, OpenRouter, GitHub, Financial Times, or the University of
          Texas at Dallas. Their services, accounts, subscriptions, content,
          APIs, marks, and access are governed by their own terms.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Optional support purchases">
        <p>
          The App may offer repeatable, voluntary one-time in-app purchases to
          support continued development. They do not unlock features, content,
          credits, or services; they are not subscriptions or charitable
          donations. Apple displays the price before confirmation and handles
          payment, taxes, records, and refund requests under its rules.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Intellectual property">
        <p>
          The App, Site, design, and original materials are protected by
          applicable intellectual-property laws. Third-party names, marks,
          software, and content belong to their respective owners. Nothing in
          these Terms grants rights beyond Apple&apos;s Standard EULA,
          applicable open-source notices, or rights that law gives you.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Disclaimers and limitation">
        <p>
          To the maximum extent permitted by law, the App and Site are provided
          “as is” and “as available.” We do not promise that queries, AI output,
          DOI matches, journal lists, or external services will be complete,
          current, accurate, secure, uninterrupted, or fit for a particular
          purpose. The App is not legal, medical, financial, bibliometric, or
          research-integrity advice.
        </p>
        <p>
          Liability is limited only to the extent permitted by applicable law.
          Nothing here excludes consumer rights or remedies that cannot legally
          be excluded.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Termination, changes, and contact">
        <p>
          Your license may end if you materially violate applicable license
          terms. You may stop using the App at any time. We may update these
          Terms for future App versions, service changes, or legal requirements;
          the effective date identifies the current version. For support or
          legal questions, email{" "}
          <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a> or
          visit the <a href="/support">Support page</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
