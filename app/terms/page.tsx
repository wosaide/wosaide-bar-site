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
        <p>本 App 是独立科研效率工具。Web of Science 查询以确定性方式构建，不由 LLM 生成。辅助功能权限仅用于你主动触发的选中文字翻译；屏幕录制权限仅在你主动发起截图识别/翻译、通用截图、Math Capture 或桌面涂鸦普通 PNG 导出时使用。文本/文献/翻译截图只在本机 OCR，不上传；通用截图历史与桌面涂鸦标注保存在本机，透明标注 PNG 不捕获桌面。Math Capture 可使用本机/loopback 或远程视觉模型，只有远程端点会在取得独立用途/端点许可后收到你框选的公式图片。翻译原文与可选文献整理 OCR 文本也仅通过各自许可流程发送。</p>
        <h3>外部服务与结果核验</h3>
        <p>AI 服务商、Crossref、Web of Science、Scopus/Elsevier、ScienceDirect、PubMed/NLM、EI/Engineering Village、CNKI、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、自定义端点及期刊名单来源均适用各自条款、隐私政策、访问限制与费用。翻译、OCR 文献整理、DOI 匹配、机构全文链接、期刊等级和期刊列表建议可能不完整、过时或不准确，你应自行核验检索语法、引文、访问权限、许可和科研决策。</p>
        <h3>支持购买</h3>
        <p>App Store 内的支持项目是可重复购买、完全自愿的一次性内购，不解锁功能、不是订阅或慈善捐赠；其付款、税费与退款由 Apple 管理。Support 也可显示内置的微信支付/支付宝静态二维码；打开页面不会连接支付方，扫码与付款发生在外部支付 App 中并受所选支付方条款约束，同样不会解锁任何功能。</p>
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
        <p>本 App 是獨立科研效率工具。Web of Science 查詢以確定性方式建立，不由 LLM 產生。輔助功能權限僅用於你主動觸發的選取文字翻譯；螢幕錄製權限僅在你主動發起截圖辨識／翻譯、通用截圖、Math Capture 或桌面塗鴉普通 PNG 匯出時使用。文字／文獻／翻譯截圖只在本機 OCR，不上傳；通用截圖歷史與桌面塗鴉標註保存在本機，透明標註 PNG 不擷取桌面。Math Capture 可使用本機/loopback 或遠端視覺模型，只有遠端端點會在取得獨立用途／端點許可後收到你框選的公式圖片。翻譯原文與可選文獻整理 OCR 文字也僅透過各自許可流程傳送。</p>
        <h3>外部服務與結果核驗</h3>
        <p>AI 服務商、Crossref、Web of Science、Scopus/Elsevier、ScienceDirect、PubMed/NLM、EI/Engineering Village、CNKI、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、自訂端點及期刊清單來源均適用各自條款、隱私政策、存取限制與費用。翻譯、OCR 文獻整理、DOI 配對、機構全文連結、期刊等級和期刊清單建議可能不完整、過時或不準確，你應自行核驗檢索語法、引文、存取權限、授權和科研決策。</p>
        <h3>支持購買</h3>
        <p>App Store 內的支持項目是可重複購買、完全自願的一次性內購，不解鎖功能、不是訂閱或慈善捐贈；其付款、稅費與退款由 Apple 管理。Support 也可顯示內建的微信支付／支付寶靜態 QR Code；開啟頁面不會連線支付方，掃碼與付款發生在外部支付 App 中並受所選支付方條款約束，同樣不會解鎖任何功能。</p>
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
        <p>本 App は独立した研究支援ツールです。Web of Science 検索式は決定論的に構築され、LLM では生成されません。アクセシビリティ権限は明示的な選択翻訳にのみ使用し、画面収録権限は明示的なスクリーンショット認識/翻訳、一般スクリーンショット、Math Capture、またはデスクトップ注釈の通常 PNG 書き出しでのみ使用します。文字/文献/翻訳画像はローカル OCR されアップロードされません。一般スクリーンショット履歴とデスクトップ注釈はローカル保存され、透明注釈 PNG はデスクトップを取得しません。Math Capture はローカル/loopback またはリモート視覚モデルを使用でき、リモート端点だけが用途/端点別の独立同意後に選択した数式画像を受信します。翻訳元や任意の文献整理 OCR テキストも各同意フローを経た場合のみ送信されます。</p>
        <h3>外部サービスと確認責任</h3>
        <p>AI プロバイダー、Crossref、Web of Science、Scopus/Elsevier、ScienceDirect、PubMed/NLM、EI/Engineering Village、CNKI、EasyScholar、Third Iron/BrowZine/LibKey、GitHub、カスタムエンドポイント、ジャーナルリストには各サービスの規約・プライバシー・制限・料金が適用されます。翻訳、OCR 整理、DOI 一致、全文リンク、ジャーナル評価、リスト候補は不完全・古い・誤っている場合があり、検索構文、引用、アクセス権、ライセンス、研究判断の確認は利用者の責任です。</p>
        <h3>任意のサポート購入</h3>
        <p>App Store のサポート購入は繰り返し購入可能な任意の一回購入で、機能を解除せず、サブスクリプションや寄付ではありません。支払い、税、返金は Apple が処理します。Support には WeChat Pay / Alipay の静的 QR が表示される場合もあり、表示だけでは決済事業者へ接続しません。読み取りと支払いは外部の決済 App で行われ各事業者の規約が適用され、こちらも App 機能を解除しません。</p>
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
        <p>이 앱은 독립적인 연구 생산성 도구입니다. Web of Science 검색식은 결정론적으로 구성되며 LLM으로 생성하지 않습니다. 손쉬운 사용 권한은 사용자가 시작한 선택 번역에만 사용하고, 화면 기록 권한은 사용자가 시작한 스크린샷 인식/번역, 일반 스크린샷, Math Capture 또는 데스크톱 주석의 일반 PNG 내보내기에만 사용합니다. 텍스트/참고문헌/번역 이미지는 로컬 OCR 처리되며 업로드되지 않습니다. 일반 스크린샷 기록과 데스크톱 주석은 로컬에 저장되고 투명 주석 PNG는 데스크톱을 캡처하지 않습니다. Math Capture는 로컬/loopback 또는 원격 비전 모델을 사용할 수 있으며 원격 엔드포인트만 목적/엔드포인트별 별도 동의 후 선택한 수식 이미지를 받을 수 있습니다. 번역 원문과 선택적 참고문헌 정리 OCR 텍스트도 각 동의 흐름을 거친 경우에만 전송됩니다.</p>
        <h3>외부 서비스와 결과 확인</h3>
        <p>AI 제공업체, Crossref, Web of Science, Scopus/Elsevier, ScienceDirect, PubMed/NLM, EI/Engineering Village, CNKI, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, 사용자 지정 엔드포인트 및 저널 목록에는 각 서비스의 약관, 개인정보 처리, 제한 및 요금이 적용됩니다. 번역, OCR 정리, DOI 일치, 기관 원문 링크, 저널 등급 및 목록 제안은 불완전하거나 오래되었거나 잘못될 수 있으며 검색 구문, 인용, 접근 권한, 라이선스 및 연구 결정은 사용자가 검토해야 합니다.</p>
        <h3>선택적 후원 구매</h3>
        <p>App Store 후원 구매는 반복 가능한 자발적 일회성 인앱 구매이며 기능을 잠금 해제하지 않고 구독이나 기부가 아닙니다. 결제, 세금 및 환불은 Apple이 처리합니다. Support에는 WeChat Pay/Alipay 정적 QR이 표시될 수도 있으며 표시만으로 결제 제공업체에 연결하지 않습니다. 스캔과 결제는 외부 결제 앱에서 이루어지고 해당 제공업체의 약관이 적용되며, 이 방식도 앱 기능을 잠금 해제하지 않습니다.</p>
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
        <p>La app es una utilidad independiente de productividad de investigación. Las consultas de Web of Science se construyen de forma determinista y no se generan con un LLM. Accesibilidad se usa solo para traducción de selección iniciada por el usuario; Grabación de pantalla solo para reconocimiento/traducción de capturas, capturas generales, Math Capture o exportación PNG normal de Anotación de escritorio iniciados por el usuario. Las imágenes de texto/referencias/traducción se procesan con OCR local y no se cargan. El historial general y las anotaciones de escritorio permanecen locales, y el PNG transparente de anotaciones no captura el escritorio. Math Capture puede usar modelos locales/loopback o remotos; solo un endpoint remoto puede recibir la fórmula seleccionada tras consentimiento independiente por finalidad y endpoint. El texto de traducción y el OCR de formato opcional de referencias también se envían únicamente mediante sus flujos de consentimiento.</p>
        <h3>Servicios externos y verificación</h3>
        <p>Proveedores de IA, Crossref, Web of Science, Scopus/Elsevier, ScienceDirect, PubMed/NLM, EI/Engineering Village, CNKI, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personalizados y fuentes de listas se rigen por sus propios términos, privacidad, límites y tarifas. Traducciones, organización OCR, coincidencias DOI, enlaces de texto completo, clasificaciones y sugerencias pueden ser incompletos, desactualizados o incorrectos. Usted debe revisar sintaxis, citas, derechos de acceso, licencias y decisiones de investigación.</p>
        <h3>Compras de apoyo</h3>
        <p>Las compras de apoyo dentro del App Store son compras únicas, voluntarias y repetibles que no desbloquean funciones, no son suscripciones ni donaciones; Apple gestiona pago, impuestos y reembolsos. Support también puede mostrar QR estáticos incluidos de WeChat Pay o Alipay; mostrarlos no contacta con el proveedor. El escaneo y pago ocurren en una app de pago externa bajo los términos del proveedor elegido y tampoco desbloquean funciones.</p>
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
        <p>O app é um utilitário independente de produtividade em pesquisa. Consultas do Web of Science são construídas de forma determinística e não são geradas por LLM. Acessibilidade é usada apenas para tradução de seleção iniciada pelo usuário; Gravação da Tela apenas para reconhecimento/tradução de capturas, captura geral, Math Capture ou exportação PNG normal da Anotação da área de trabalho iniciados pelo usuário. Imagens de texto/referência/tradução são processadas por OCR local e não são enviadas. O histórico geral e as anotações da área de trabalho permanecem locais, e o PNG transparente de anotações não captura a área de trabalho. Math Capture pode usar modelos locais/loopback ou remotos; apenas um endpoint remoto pode receber a fórmula selecionada após consentimento separado por finalidade e endpoint. Texto de tradução e OCR da formatação opcional de referências também só são enviados pelos respectivos fluxos de consentimento.</p>
        <h3>Serviços externos e verificação</h3>
        <p>Provedores de IA, Crossref, Web of Science, Scopus/Elsevier, ScienceDirect, PubMed/NLM, EI/Engineering Village, CNKI, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personalizados e fontes de listas seguem seus próprios termos, privacidade, limites e tarifas. Traduções, organização OCR, correspondências DOI, links de texto completo, classificações e sugestões podem ser incompletos, desatualizados ou incorretos. Você deve revisar sintaxe, citações, direitos de acesso, licenças e decisões de pesquisa.</p>
        <h3>Compras de apoio</h3>
        <p>As compras de apoio dentro da App Store são compras únicas, voluntárias e repetíveis que não desbloqueiam recursos, não são assinaturas nem doações; a Apple gerencia pagamento, impostos e reembolsos. O Support também pode exibir QR estáticos incluídos de WeChat Pay ou Alipay; exibi-los não contata o provedor. Leitura e pagamento ocorrem em um app de pagamento externo segundo os termos do provedor escolhido e também não desbloqueiam recursos.</p>
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
        <p>L’app est un utilitaire indépendant de productivité pour la recherche. Les requêtes Web of Science sont construites de manière déterministe et ne sont pas générées par un LLM. Accessibilité n’est utilisée que pour la traduction de sélection lancée par l’utilisateur ; Enregistrement de l’écran uniquement pour reconnaissance/traduction de captures, capture générale, Math Capture ou export PNG normal de l’annotation du bureau lancés par l’utilisateur. Les images texte/références/traduction sont traitées localement par OCR et ne sont pas téléversées. L’historique général et les annotations du bureau restent locaux, et le PNG transparent d’annotations ne capture pas le bureau. Math Capture peut utiliser des modèles locaux/loopback ou distants ; seul un endpoint distant peut recevoir la formule sélectionnée après consentement séparé par finalité et endpoint. Le texte de traduction et l’OCR du formatage facultatif des références ne sont aussi envoyés qu’au travers de leurs flux de consentement.</p>
        <h3>Services externes et vérification</h3>
        <p>Les fournisseurs d’IA, Crossref, Web of Science, Scopus/Elsevier, ScienceDirect, PubMed/NLM, EI/Engineering Village, CNKI, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, endpoints personnalisés et sources de listes appliquent leurs propres conditions, confidentialité, limites et frais. Traductions, organisation OCR, correspondances DOI, liens de texte intégral, classements et suggestions peuvent être incomplets, obsolètes ou incorrects. Vous devez vérifier syntaxe, citations, droits d’accès, licences et décisions de recherche.</p>
        <h3>Achats de soutien</h3>
        <p>Les achats de soutien dans l’App Store sont des achats ponctuels, volontaires et répétables qui ne débloquent aucune fonction, ne sont ni abonnements ni dons ; Apple gère paiement, taxes et remboursements. Support peut aussi afficher des QR statiques intégrés WeChat Pay ou Alipay ; leur affichage ne contacte pas le fournisseur. Le scan et le paiement ont lieu dans une app de paiement externe selon les conditions du fournisseur choisi et ne débloquent pas davantage de fonction.</p>
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
        <p>Die App ist ein unabhängiges Forschungsproduktivitätswerkzeug. Web-of-Science-Abfragen werden deterministisch erstellt und nicht von einem LLM erzeugt. Bedienungshilfen werden nur für vom Benutzer gestartete Auswahlübersetzung verwendet; Bildschirmaufnahme nur für gestartete Screenshot-Erkennung/-Übersetzung, allgemeine Screenshots, Math Capture oder den normalen PNG-Export der Desktop-Markierung. Text-/Literatur-/Übersetzungsbilder werden lokal per OCR verarbeitet und nicht hochgeladen. Allgemeiner Screenshot-Verlauf und Desktop-Annotationen bleiben lokal; der transparente Nur-Annotations-PNG-Export erfasst den Desktop nicht. Math Capture kann lokale/Loopback- oder entfernte Vision-Modelle nutzen; nur ein entfernter Endpunkt kann das ausgewählte Formelbild nach separater zweck- und endpunktbezogener Einwilligung erhalten. Übersetzungstext und OCR-Text der optionalen Literaturformatierung werden ebenfalls nur über ihre jeweiligen Einwilligungsabläufe gesendet.</p>
        <h3>Externe Dienste und Prüfung</h3>
        <p>KI-Anbieter, Crossref, Web of Science, Scopus/Elsevier, ScienceDirect, PubMed/NLM, EI/Engineering Village, CNKI, EasyScholar, Third Iron/BrowZine/LibKey, GitHub, benutzerdefinierte Endpunkte und Listenquellen unterliegen ihren eigenen Bedingungen, Datenschutzregeln, Limits und Gebühren. Übersetzungen, OCR-Aufbereitung, DOI-Treffer, Volltextlinks, Zeitschriftenbewertungen und Listenvorschläge können unvollständig, veraltet oder falsch sein. Suchsyntax, Zitate, Zugriffsrechte, Lizenzen und Forschungsentscheidungen müssen Sie selbst prüfen.</p>
        <h3>Freiwillige Unterstützungskäufe</h3>
        <p>Support-Käufe im App Store sind wiederholbare, freiwillige Einmalkäufe, schalten keine Funktionen frei und sind weder Abonnements noch Spenden; Apple verwaltet Zahlung, Steuern und Rückerstattungen. Support kann außerdem gebündelte statische QR-Codes für WeChat Pay oder Alipay anzeigen; deren Anzeige kontaktiert den Zahlungsanbieter nicht. Scan und Zahlung erfolgen in einer externen Zahlungs-App nach den Bedingungen des gewählten Anbieters und schalten ebenfalls keine Funktionen frei.</p>
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
      updated="Effective September 14, 2026"
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
          journal-title matching across supported database sources, and offers
          optional selection/manual/screenshot translation, screenshot text and
          reference recognition, Math Capture, a local general Screenshot Editor,
          native PaperKit/PencilKit Desktop Markup, Crossref DOI matching,
          institutional full-text lookup, and EasyScholar journal-rank lookup.
          It does not provide a Web of Science account, subscription, database,
          translation service, publication assessment, or guarantee of access or
          results. The App constructs Web of Science queries deterministically
          and does not use an LLM to generate them.
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
            Grant Screen Recording permission only when you understand that
            user-initiated capture workflows can read the screen region, window,
            or display you choose. Text/reference/translation screenshots are
            processed with local Vision OCR and are not uploaded. General
            screenshots remain local unless you export/copy them. Desktop Markup
            captures the current display only for its explicit normal PNG export;
            its transparent PNG export contains annotations only. Math Capture
            may send only the selected formula image to a remote model after its
            separate purpose/endpoint consent.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        number="04"
        title="Local capture/markup, AI-assisted workflows, Crossref, Library Access, and EasyScholar"
      >
        <p>
          Translation, screenshot OCR/reference organization, Math Capture,
          general screenshots, Desktop Markup, Crossref lookup, Library Access,
          and EasyScholar journal-rank lookup are optional features. Translation,
          OCR/reference, formula-recognition, or annotation output may be incomplete,
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
          source text only through its consent flow. Screenshot images used for
          reference recognition and screenshot translation are captured and
          OCR-processed locally and are not uploaded. If you enable
          optional screenshot-reference LLM formatting, only locally recognized
          OCR text can be sent to the separately selected formatting model; this
          formatter is an explicit setting and uses a separate consent scope for
          the reference-formatting purpose and endpoint. Declining that consent
          keeps parsing local and sends no OCR text. Math Capture is different:
          when you explicitly select a formula, a loopback vision model processes
          it on the same Mac, while a remote vision endpoint can receive only
          that selected formula image and only after a separate formula-recognition
          purpose/endpoint consent. Declining sends no formula image.
          EasyScholar access requires a user-provided API key. Library Access
          depends on a participating institution and Third Iron services. IIDEV
          does not operate or control those services and cannot guarantee their
          availability, confidentiality, retention, ranking methodology, links,
          or output.
        </p>
      </LegalSection>

      <LegalSection number="05" title="Journal-list sources">
        <p>
          The App supports repository-backed Web of Science SCIE/SSCI/AHCI/ESCI,
          Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心 2023 /
          CSSCI 2025–2026 / CSSCI-扩展版 2025–2026, AJG 2024, UTD24, and FT50
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
          operators, Scopus/Elsevier, ScienceDirect, PubMed/NLM,
          EI/Engineering Village, CNKI, and journal-list sources govern their own services,
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
          payment, taxes, records, and refund requests for the App Store purchase.
          Support may also display bundled static WeChat Pay or Alipay QR images.
          Merely showing those images does not contact a payment provider. If you
          scan one, payment occurs outside WOS Aide Bar in the external payment app
          under that provider&apos;s terms. External QR support is likewise voluntary
          and does not unlock App features, content, services, subscriptions, or
          digital goods.
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
