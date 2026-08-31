import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  type LegalTranslation,
} from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the WOS Aide Bar macOS application and website.",
};

const termsTranslations: LegalTranslation[] = [
  {
    id: "zh-hans",
    label: "简体中文",
    lang: "zh-Hans",
    content: (
      <>
        <h2>使用条款摘要</h2>
        <p>从 Apple App Store 获取、安装或使用 WOS Aide Bar，即表示你同意 Apple 标准最终用户许可协议及本补充条款；如有冲突，以 Apple 标准协议和不可排除的法律权利为准。</p>
        <h3>功能、AI 与权限</h3>
        <p>本 App 是独立科研效率工具。Web of Science 查询以确定性方式构建，不由 LLM 生成。辅助功能权限仅用于你主动触发的选中文本翻译；屏幕录制权限仅用于你主动框选的截图识别文献或截图翻译。截图图片只在本机 OCR，不保存或上传。翻译原文仅通过翻译许可流程发送；若你主动开启截图文献 LLM 整理，只会发送本地 OCR 文本，不发送截图图片。</p>
        <h3>外部服务与结果核验</h3>
        <p>AI 服务商、Crossref、Web of Science、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、自定义端点及期刊名单来源均适用各自条款、隐私政策、访问限制与费用。翻译、OCR 文献整理、DOI 匹配、机构全文链接、期刊等级和期刊列表建议可能不完整、过时或不准确，你应自行核验检索语法、引文、访问权限、许可和科研决策。</p>
        <h3>支持购买</h3>
        <p>支持项目为可重复购买、完全自愿的一次性 App 内购买，不解锁功能、不是订阅或慈善捐赠；付款、税费和退款由 Apple 管理。</p>
      </>
    ),
  },
  {
    id: "zh-hant",
    label: "繁體中文",
    lang: "zh-Hant",
    content: (
      <>
        <h2>使用條款摘要</h2>
        <p>從 Apple App Store 取得、安裝或使用 WOS Aide Bar，即表示你同意 Apple 標準終端使用者授權協議及本補充條款；如有衝突，以 Apple 標準協議和不可排除的法律權利為準。</p>
        <h3>功能、AI 與權限</h3>
        <p>本 App 是獨立科研效率工具。Web of Science 查詢以確定性方式建立，不由 LLM 產生。輔助功能權限僅用於你主動觸發的選取文字翻譯；螢幕錄製權限僅用於你主動框選的截圖辨識文獻或截圖翻譯。截圖圖片只在本機 OCR，不儲存或上傳。翻譯原文僅透過翻譯許可流程傳送；若你主動開啟截圖文獻 LLM 整理，只會傳送本機 OCR 文字，不傳送截圖圖片。</p>
        <h3>外部服務與結果核驗</h3>
        <p>AI 服務商、Crossref、Web of Science、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、自訂端點及期刊清單來源均適用各自條款、隱私政策、存取限制與費用。翻譯、OCR 文獻整理、DOI 配對、機構全文連結、期刊等級和期刊清單建議可能不完整、過時或不準確，你應自行核驗檢索語法、引文、存取權限、授權和科研決策。</p>
        <h3>支持購買</h3>
        <p>支持項目為可重複購買、完全自願的一次性 App 內購買，不解鎖功能、不是訂閱或慈善捐贈；付款、稅費和退款由 Apple 管理。</p>
      </>
    ),
  },
  {
    id: "japanese",
    label: "日本語",
    lang: "ja",
    content: (
      <>
        <h2>利用規約の概要</h2>
        <p>Apple App Store から WOS Aide Bar を取得、インストール、使用することで、Apple の標準 EULA と本補足規約に同意したものとします。矛盾する場合は Apple 標準 EULA と排除できない法的権利が優先します。</p>
        <h3>機能、AI、権限</h3>
        <p>本 App は独立した研究支援ツールです。Web of Science 検索式は決定論的に構築され、LLM では生成されません。アクセシビリティ権限は明示的な選択翻訳に、画面収録権限は明示的なスクリーンショット文献認識／翻訳にのみ使用します。画像は Mac 上で OCR され、保存もアップロードもされません。翻訳元テキストは翻訳の同意フローを経た場合のみ送信され、任意の LLM 文献整理を有効にした場合もローカル OCR テキストだけが送信されます。</p>
        <h3>外部サービスと確認責任</h3>
        <p>AI プロバイダー、Crossref、Web of Science、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、カスタムエンドポイント、ジャーナルリストには各サービスの規約・プライバシー・制限・料金が適用されます。翻訳、OCR 整理、DOI 一致、全文リンク、ジャーナル評価、リスト候補は不完全・古い・誤っている場合があり、検索構文、引用、アクセス権、ライセンス、研究判断の確認は利用者の責任です。</p>
        <h3>任意のサポート購入</h3>
        <p>サポート購入は繰り返し購入可能な任意の一回購入で、機能を解除せず、サブスクリプションや寄付ではありません。支払い、税、返金は Apple が処理します。</p>
      </>
    ),
  },
  {
    id: "korean",
    label: "한국어",
    lang: "ko",
    content: (
      <>
        <h2>이용 약관 요약</h2>
        <p>Apple App Store에서 WOS Aide Bar를 다운로드, 설치 또는 사용하면 Apple 표준 EULA와 본 보충 약관에 동의하는 것으로 간주됩니다. 충돌 시 Apple 표준 EULA와 배제할 수 없는 법적 권리가 우선합니다.</p>
        <h3>기능, AI 및 권한</h3>
        <p>이 앱은 독립적인 연구 생산성 도구입니다. Web of Science 검색식은 결정론적으로 구성되며 LLM으로 생성하지 않습니다. 손쉬운 사용 권한은 사용자가 시작한 선택 번역에, 화면 기록 권한은 사용자가 시작한 스크린샷 참고문헌 인식/번역에만 사용됩니다. 스크린샷 이미지는 로컬에서 OCR 처리되고 저장하거나 업로드하지 않습니다. 번역 원문은 번역 동의 흐름을 거친 경우에만 전송되며 선택적 LLM 참고문헌 정리를 켠 경우에도 로컬 OCR 텍스트만 전송됩니다.</p>
        <h3>외부 서비스와 결과 확인</h3>
        <p>AI 제공업체, Crossref, Web of Science, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, 사용자 지정 엔드포인트 및 저널 목록에는 각 서비스의 약관, 개인정보 처리, 제한 및 요금이 적용됩니다. 번역, OCR 정리, DOI 일치, 기관 원문 링크, 저널 등급 및 목록 제안은 불완전하거나 오래되었거나 잘못될 수 있으며 검색 구문, 인용, 접근 권한, 라이선스 및 연구 결정은 사용자가 검토해야 합니다.</p>
        <h3>선택적 후원 구매</h3>
        <p>후원 구매는 반복 구매 가능한 자발적 일회성 인앱 구매이며 기능을 잠금 해제하지 않고 구독이나 기부가 아닙니다. 결제, 세금 및 환불은 Apple이 처리합니다.</p>
      </>
    ),
  },
  {
    id: "spanish",
    label: "Español",
    lang: "es",
    content: (
      <>
        <h2>Resumen de los Términos de uso</h2>
        <p>Al descargar, instalar o usar WOS Aide Bar desde Apple App Store, acepta el EULA estándar de Apple y estos términos complementarios. En caso de conflicto prevalecen el EULA estándar de Apple y los derechos legales irrenunciables.</p>
        <h3>Funciones, IA y permisos</h3>
        <p>La app es una utilidad de productividad de investigación independiente. Las consultas de Web of Science se construyen de forma determinista y no se generan con un LLM. Accesibilidad se usa solo para traducción de selección iniciada por el usuario; Grabación de pantalla solo para reconocimiento/traducción de capturas iniciados por el usuario. La imagen se procesa por OCR localmente y no se guarda ni se carga. El texto de traducción solo se envía mediante su flujo de consentimiento; si activa el formato LLM opcional de referencias, solo se envía texto OCR local.</p>
        <h3>Servicios externos y verificación</h3>
        <p>Proveedores de IA, Crossref, Web of Science, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personalizados y fuentes de listas se rigen por sus propios términos, privacidad, límites y tarifas. Traducciones, organización OCR, coincidencias DOI, enlaces de texto completo, clasificaciones y sugerencias pueden ser incompletos, desactualizados o incorrectos. Usted debe revisar sintaxis, citas, derechos de acceso, licencias y decisiones de investigación.</p>
        <h3>Compras de apoyo</h3>
        <p>Las compras de apoyo son compras únicas, voluntarias y repetibles que no desbloquean funciones, no son suscripciones ni donaciones. Apple gestiona pago, impuestos y reembolsos.</p>
      </>
    ),
  },
  {
    id: "portuguese-brazil",
    label: "Português (Brasil)",
    lang: "pt-BR",
    content: (
      <>
        <h2>Resumo dos Termos de Uso</h2>
        <p>Ao baixar, instalar ou usar o WOS Aide Bar pela Apple App Store, você concorda com o EULA Padrão da Apple e estes termos complementares. Em caso de conflito, prevalecem o EULA Padrão da Apple e direitos legais irrenunciáveis.</p>
        <h3>Recursos, IA e permissões</h3>
        <p>O app é um utilitário independente de produtividade em pesquisa. Consultas do Web of Science são construídas de forma determinística e não são geradas por LLM. Acessibilidade é usada somente para tradução de seleção iniciada pelo usuário; Gravação da Tela somente para reconhecimento/tradução de capturas iniciados pelo usuário. A imagem é processada por OCR localmente e não é salva nem enviada. Texto de tradução só é enviado pelo fluxo de consentimento; se a formatação LLM opcional de referências estiver ativa, somente texto OCR local é enviado.</p>
        <h3>Serviços externos e verificação</h3>
        <p>Provedores de IA, Crossref, Web of Science, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personalizados e fontes de listas seguem seus próprios termos, privacidade, limites e tarifas. Traduções, organização OCR, correspondências DOI, links de texto completo, classificações e sugestões podem ser incompletos, desatualizados ou incorretos. Você deve revisar sintaxe, citações, direitos de acesso, licenças e decisões de pesquisa.</p>
        <h3>Compras de apoio</h3>
        <p>Compras de apoio são compras únicas, voluntárias e repetíveis que não desbloqueiam recursos, não são assinaturas nem doações. A Apple gerencia pagamento, impostos e reembolsos.</p>
      </>
    ),
  },
  {
    id: "french",
    label: "Français",
    lang: "fr",
    content: (
      <>
        <h2>Résumé des Conditions d’utilisation</h2>
        <p>En téléchargeant, installant ou utilisant WOS Aide Bar depuis l’Apple App Store, vous acceptez le CLUF standard d’Apple et les présentes conditions complémentaires. En cas de conflit, le CLUF standard d’Apple et les droits légaux non renonçables prévalent.</p>
        <h3>Fonctions, IA et autorisations</h3>
        <p>L’app est un utilitaire indépendant de productivité pour la recherche. Les requêtes Web of Science sont construites de manière déterministe et ne sont pas générées par un LLM. Accessibilité n’est utilisée que pour la traduction de sélection lancée par l’utilisateur ; Enregistrement de l’écran uniquement pour la reconnaissance/traduction de captures lancée par l’utilisateur. L’image est traitée localement par OCR et n’est ni enregistrée ni téléversée. Le texte de traduction n’est envoyé qu’au travers de son flux de consentement ; si le formatage LLM facultatif des références est activé, seul le texte OCR local est envoyé.</p>
        <h3>Services externes et vérification</h3>
        <p>Les fournisseurs d’IA, Crossref, Web of Science, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personnalisés et sources de listes appliquent leurs propres conditions, confidentialité, limites et frais. Traductions, organisation OCR, correspondances DOI, liens de texte intégral, classements et suggestions peuvent être incomplets, obsolètes ou incorrects. Vous devez vérifier syntaxe, citations, droits d’accès, licences et décisions de recherche.</p>
        <h3>Achats de soutien</h3>
        <p>Les achats de soutien sont des achats ponctuels, volontaires et répétables qui ne débloquent aucune fonction, ne sont ni abonnements ni dons. Apple gère le paiement, les taxes et les remboursements.</p>
      </>
    ),
  },
  {
    id: "german",
    label: "Deutsch",
    lang: "de",
    content: (
      <>
        <h2>Zusammenfassung der Nutzungsbedingungen</h2>
        <p>Durch Download, Installation oder Nutzung von WOS Aide Bar aus dem Apple App Store stimmen Sie Apples Standard-EULA und diesen ergänzenden Bedingungen zu. Bei Widersprüchen haben Apples Standard-EULA und nicht abdingbare gesetzliche Rechte Vorrang.</p>
        <h3>Funktionen, KI und Berechtigungen</h3>
        <p>Die App ist ein unabhängiges Forschungsproduktivitätswerkzeug. Web-of-Science-Abfragen werden deterministisch erstellt und nicht von einem LLM erzeugt. Bedienungshilfen werden nur für vom Benutzer gestartete Auswahlübersetzung verwendet; Bildschirmaufnahme nur für vom Benutzer gestartete Screenshot-Erkennung/-Übersetzung. Das Bild wird lokal per OCR verarbeitet und weder gespeichert noch hochgeladen. Übersetzungstext wird nur über den Einwilligungsablauf gesendet; bei aktivierter optionaler LLM-Literaturformatierung wird nur lokaler OCR-Text gesendet.</p>
        <h3>Externe Dienste und Prüfung</h3>
        <p>KI-Anbieter, Crossref, Web of Science, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, benutzerdefinierte Endpunkte und Listenquellen unterliegen ihren eigenen Bedingungen, Datenschutzregeln, Limits und Gebühren. Übersetzungen, OCR-Aufbereitung, DOI-Treffer, Volltextlinks, Zeitschriftenbewertungen und Listenvorschläge können unvollständig, veraltet oder falsch sein. Suchsyntax, Zitate, Zugriffsrechte, Lizenzen und Forschungsentscheidungen müssen Sie selbst prüfen.</p>
        <h3>Freiwillige Unterstützungskäufe</h3>
        <p>Unterstützungskäufe sind wiederholbare, freiwillige Einmalkäufe, schalten keine Funktionen frei und sind weder Abonnements noch Spenden. Apple verwaltet Zahlung, Steuern und Rückerstattungen.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Terms"
      title="Terms of Use"
      intro="These terms supplement Apple’s Standard EULA and explain WOS Aide Bar’s independent role, optional external features, journal-list sources, and voluntary support purchases."
      updated="Effective September 1, 2026"
      translations={termsTranslations}
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
          journal-title suggestions, and offers optional selection/manual and
          screenshot translation, screenshot reference recognition, Crossref
          DOI matching, institutional full-text lookup, and EasyScholar
          journal-rank lookup. It does not provide a Web of
          Science account, subscription, database, translation service,
          publication assessment, or guarantee of access or results. The App
          constructs Web of Science queries deterministically and does not use
          an LLM to generate them.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Your responsibilities">
        <ul>
          <li>Use the App and external services lawfully.</li>
          <li>
            Review search expressions, translation output, DOI matches,
            institutional full-text links, EasyScholar ranking results, and
            journal-list suggestions before relying on them.
          </li>
          <li>
            Maintain required third-party accounts, credentials, subscriptions,
            permissions, and institutional access.
          </li>
          <li>
            Protect API keys and verify the operator, terms, and privacy
            practices of any translation AI endpoint, EasyScholar service, or
            institutional-access service you use.
          </li>
          <li>
            Enable selection translation and grant macOS Accessibility
            permission only when you understand that the configured shortcut
            may read the text you currently select in another application.
          </li>
          <li>
            Grant Screen Recording permission only when you understand that the
            screenshot workflows capture the screen rectangle you explicitly
            select for local OCR. The screenshot image is not uploaded.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        number="04"
        title="Translation, screenshot OCR, Crossref, Library Access, and EasyScholar"
      >
        <p>
          Translation, screenshot OCR/reference organization, Crossref lookup,
          Library Access, and EasyScholar journal-rank lookup are optional
          features. Translation or OCR/reference output may be incomplete,
          inaccurate, biased, or unsuitable. DOI matching or an institutional
          full-text lookup may return the wrong work, a temporary link, or no
          result. CAS, JCR, and other journal-rank information may be unavailable,
          delayed, incomplete, or outdated. You remain responsible for checking
          search syntax, translations, OCR/reference boundaries, sources,
          citations, licenses, journal information, access rights, and research
          decisions.
        </p>
        <p>
          Remote translation providers, custom endpoint operators, Crossref,
          Third Iron/BrowZine/LibKey, and EasyScholar may impose separate
          terms, privacy practices, account or API-key rules, usage limits, and
          fees. Translation uses the provider and model you choose and sends
          source text only through its consent flow. Screenshot images are
          captured and OCR-processed locally and are not uploaded. If you enable
          optional screenshot-reference LLM formatting, only locally recognized
          OCR text is sent to the separately selected formatting model; this
          formatter is an explicit setting and does not present the separate
          translation-consent sheet.
          EasyScholar access requires a user-provided API key. Library Access
          depends on a participating institution and Third Iron services. IIDEV
          does not operate or control those services and cannot guarantee their
          availability, confidentiality, retention, ranking methodology, links,
          or output.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Journal-list sources">
        <p>
          The App supports SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24, and FT50
          sources. The App may check the public GitHub commit/version status when
          catalog settings are opened without sending research content. Actual
          list CSV files are downloaded from the project&apos;s public GitHub
          repository only after an explicit Download, Update, or Refresh action. You may
          also import compatible CSV files; imported files are processed
          locally.
        </p>
        <p>
          Third-party list names, journal names, and marks remain the property
          of their respective owners. Availability through the App does not
          imply affiliation or endorsement. Source organizations may revise
          their lists at any time.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Third-party services and independence">
        <p>
          WOS Aide Bar and IIDEV are independent and are not affiliated with,
          sponsored by, or endorsed by any external service provider or data
          source. Translation AI providers, Web of Science, Crossref,
          EasyScholar, Third Iron/BrowZine/LibKey, GitHub, custom endpoint
          operators, and journal-list sources govern their own services,
          accounts, subscriptions, content, APIs, marks, methodologies, and
          access under their respective terms.
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
          “as is” and “as available.” We do not promise that search expressions,
          translation output, DOI matches, institutional full-text links,
          journal-rank results, journal lists, or external services will be
          complete, current, accurate, secure, uninterrupted, or fit for a
          particular purpose. The App is not
          legal, medical, financial, translation, bibliometric, publication,
          or research-integrity advice.
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
