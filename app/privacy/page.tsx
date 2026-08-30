import type { Metadata } from "next";
import {
  LegalPage,
  LegalSection,
  type LegalTranslation,
} from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the WOS Aide Bar macOS app and product website, with summaries in all nine app languages.",
};

const translations: LegalTranslation[] = [
  {
    id: "zh-hans",
    label: "简体中文",
    lang: "zh-Hans",
    content: (
      <>
        <h2>隐私政策摘要</h2>
        <p>
          WOS Aide Bar 无需 IIDEV 账户，不含广告、跟踪、开发者分析或开发者运营的崩溃报告 SDK。查询历史、设置、翻译历史、Crossref DOI/BibTeX 与 EasyScholar 历史、已配置机构、Library Access DOI 输入与全文结果、本地使用统计以及导入或下载的期刊列表主要保存在 App 沙盒中，不会发送给 IIDEV。剪贴板只在打开菜单栏面板、主动刷新或使用相应快捷键时读取；选中文字只在按下翻译快捷键时读取，也可以在 App 内手动输入翻译原文。
        </p>
        <h3>翻译与 AI 服务商</h3>
        <p>
          AI 仅用于可选翻译及服务商配置，不用于生成 Web of Science 检索式。打开服务商设置、切换服务商或保存凭据不会自动刷新模型；只有你主动“刷新模型”或“测试连接”时才联系端点，而且不会发送翻译原文。首次向非回环端点发送翻译原文前会显示服务商、端点及隐私信息并征得许可。localhost、127.0.0.1 与 ::1 视为本机回环；LAN/mDNS 主机视为远程并要求 HTTPS 与许可。直接 OpenAI 翻译请求还会包含随机安装安全标识符。API 密钥保存在 macOS 钥匙串。成功翻译最多保存 100 条本机历史。
        </p>
        <h3>Crossref、机构全文、EasyScholar 与本地统计</h3>
        <p>
          Crossref DOI 查询默认关闭，仅在主动使用时发送参考文献；元数据最多缓存 30 天，DOI 查询历史与 BibTeX 历史均默认 50 条、可设为 10–500，BibTeX 只在主动请求时获取。Library Access 默认关闭；启用后打开“添加机构”时可能刷新 Third Iron/BrowZine 支持机构目录，全文查询会发送 Library ID 与 DOI；已配置机构和最多 50 条近期 DOI 输入快照保存在本机，结果历史默认 100 条、可设为 1–10,000。EasyScholar 只在 CAS/JCR 查询或主动测试凭据时发送期刊名与用户 API Key，结果最多缓存 24 小时、历史最多 100 条。本地洞察仅保存 WOS 查询、已接受的期刊补全、DOI 查询/解析数量、日期和 WOS 字段等聚合统计；每日统计最多保留 400 天。IIDEV 不接收这些数据。
        </p>
        <h3>期刊列表、iCloud 与 Apple 服务</h3>
        <p>
          App 默认包含小型 UTD24 期刊名称列表。SCIE、SSCI、AHCI、ESCI、AJG 2024、UTD24 与 FT50 都可在你主动点击下载或刷新时从项目公开 GitHub 仓库获取，也可导入兼容 CSV；用户选择的 CSV 仅在本机处理，不会上传。iCloud Drive 备份默认关闭；启用后可备份选定本机数据，翻译原文/译文可能包含其中，但服务商元数据会移除；AI 服务商配置、API 密钥、钥匙串凭据、安全标识符、远程许可与网络缓存不会进入备份。App 启动时可能进行不含用户内容的 App Store 更新检查；StoreKit 可能为 Support/Local Insights 获取商品与商店信息并处理自愿支持购买。IIDEV 不接收付款卡信息。网站不使用广告 Cookie 或行为分析。联系：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。
        </p>
      </>
    ),
  },
  {
    id: "zh-hant",
    label: "繁體中文",
    lang: "zh-Hant",
    content: (
      <>
        <h2>隱私權政策摘要</h2>
        <p>
          WOS Aide Bar 無需 IIDEV 帳戶，不包含廣告、追蹤、開發者分析或由開發者營運的當機回報 SDK。搜尋記錄、設定、翻譯記錄、Crossref DOI/BibTeX 與 EasyScholar 記錄、已設定機構、Library Access DOI 輸入與全文結果、本機使用統計，以及匯入或下載的期刊清單主要儲存在 App 沙盒，不會傳送給 IIDEV。剪貼簿只在開啟選單列面板、主動重新整理或使用相應快速鍵時讀取；選取文字只在按下翻譯快速鍵時讀取，也可在 App 內手動輸入翻譯原文。
        </p>
        <h3>翻譯與 AI 服務商</h3>
        <p>
          AI 僅用於選用翻譯及服務商設定，不用於產生 Web of Science 檢索式。開啟服務商設定、切換服務商或儲存憑證不會自動探索模型；只有你主動「重新整理模型」或「測試連線」時才連線端點，而且不會傳送翻譯原文。首次向非迴路端點傳送翻譯原文前會顯示服務商、端點及隱私資訊並取得許可。localhost、127.0.0.1 與 ::1 視為本機迴路；LAN/mDNS 主機視為遠端並要求 HTTPS 與許可。直接 OpenAI 翻譯請求還會包含隨機安裝安全識別碼。API 金鑰儲存在 macOS 鑰匙圈。成功翻譯最多儲存 100 筆本機記錄。
        </p>
        <h3>Crossref、機構全文、EasyScholar 與本機統計</h3>
        <p>
          Crossref DOI 查詢預設關閉，只在主動使用時傳送參考文獻；中繼資料最多快取 30 天，DOI 查詢記錄與 BibTeX 記錄均預設 50 筆、可設為 10–500，BibTeX 只在主動要求時取得。Library Access 預設關閉；啟用後開啟「新增機構」時可能重新整理 Third Iron/BrowZine 支援機構目錄，全文查詢會傳送 Library ID 與 DOI；已設定機構與最多 50 筆近期 DOI 輸入快照儲存在本機，結果記錄預設 100 筆、可設為 1–10,000。EasyScholar 只在 CAS/JCR 查詢或主動測試憑證時傳送期刊名稱與使用者 API Key，結果最多快取 24 小時、記錄最多 100 筆。本機洞察僅儲存 WOS 查詢、已接受的期刊補全、DOI 查詢/解析數量、日期和 WOS 欄位等彙總統計；每日統計最多保留 400 天。IIDEV 不接收這些資料。
        </p>
        <h3>期刊清單、iCloud 與 Apple 服務</h3>
        <p>
          App 預設包含小型 UTD24 期刊名稱清單。SCIE、SSCI、AHCI、ESCI、AJG 2024、UTD24 與 FT50 都可在你主動按下下載或重新整理時從專案公開 GitHub 儲存庫取得，也可匯入相容 CSV；使用者選取的 CSV 僅在本機處理，不會上傳。iCloud Drive 備份預設關閉；啟用後可備份選定本機資料，翻譯原文/譯文可能包含其中，但服務商中繼資料會移除；AI 服務商設定、API 金鑰、鑰匙圈憑證、安全識別碼、遠端許可與網路快取不會進入備份。App 啟動時可能進行不含使用者內容的 App Store 更新檢查；StoreKit 可能為 Support/Local Insights 取得商品與商店資訊並處理自願支持購買。IIDEV 不接收付款卡資料。網站不使用廣告 Cookie 或行為分析。聯絡：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。
        </p>
      </>
    ),
  },
  {
    id: "japanese",
    label: "日本語",
    lang: "ja",
    content: (
      <>
        <h2>プライバシーポリシーの概要</h2>
        <p>
          WOS Aide Bar は IIDEV アカウントを必要とせず、広告、トラッキング、開発者分析、開発者運営のクラッシュ報告 SDK を含みません。検索履歴、設定、翻訳履歴、Crossref DOI/BibTeX・EasyScholar 履歴、設定した機関、Library Access の DOI 入力と全文結果、ローカル統計、ジャーナルリストは主に App サンドボックスに保存され、IIDEV へ送信されません。クリップボードはメニューバーパネルを開く、明示的に更新する、または対応ショートカットを使った場合だけ読み取り、選択範囲は翻訳ショートカット時だけ読み取ります。翻訳元を手入力することもできます。
        </p>
        <h3>翻訳と AI プロバイダー</h3>
        <p>
          AI は任意の翻訳とプロバイダー設定にのみ使用され、Web of Science 検索式の生成には使用されません。設定を開く、プロバイダーを切り替える、認証情報を保存するだけではモデル取得を行いません。モデル更新・接続テストを明示的に実行した場合のみエンドポイントへ接続し、翻訳元テキストは送りません。非ループバックへ翻訳元を初めて送る前に送信先とプライバシー情報を表示して許可を求めます。localhost、127.0.0.1、::1 はローカル、LAN/mDNS は HTTPS と同意が必要なリモートとして扱います。OpenAI への直接翻訳にはランダムなインストール安全識別子も含まれます。API キーは macOS キーチェーンに保存され、翻訳履歴は最大 100 件です。
        </p>
        <h3>Crossref、機関全文、EasyScholar、統計</h3>
        <p>
          Crossref は初期設定で無効で、明示的に使った場合のみ参考文献を送信します。メタデータは最大 30 日キャッシュされ、DOI 検索履歴と BibTeX 履歴はいずれも既定 50 件・10～500 件で、BibTeX は要求時だけ取得します。Library Access も初期設定で無効です。有効化後に「機関を追加」を開くと Third Iron/BrowZine の一覧を更新する場合があり、全文検索では Library ID と DOI を送信します。設定した機関と直近最大 50 件の DOI 入力スナップショットはローカル保存され、結果履歴は既定 100 件・1～10,000 件です。EasyScholar は CAS/JCR 検索または認証情報テスト時だけジャーナル名とユーザー API キーを送信し、結果は最大 24 時間キャッシュ、履歴は最大 100 件です。Local Insights は WOS 検索、採用したジャーナル候補、DOI 検索/解決数、日付、WOS フィールドなどの集計値だけを保持し、日別データは最大 400 日です。IIDEV はこれらを受信しません。
        </p>
        <h3>ジャーナルリスト、iCloud、Apple</h3>
        <p>
          App には小規模な UTD24 ジャーナル名リストが既定で含まれます。SCIE、SSCI、AHCI、ESCI、AJG 2024、UTD24、FT50 は、ダウンロードまたは更新を明示的に実行した場合にプロジェクトの公開 GitHub リポジトリから取得でき、互換 CSV を読み込むこともできます。ユーザーが選択した CSV は Mac 上でのみ処理され、アップロードされません。iCloud Drive バックアップは既定で無効です。翻訳の原文/訳文はバックアップ対象になり得ますが、プロバイダーメタデータは除去され、AI 設定、API キー、キーチェーン認証情報、安全識別子、リモート同意、ネットワークキャッシュは除外されます。起動時にはユーザー内容を含まない App Store 更新確認を行う場合があり、StoreKit は Support/Local Insights の商品情報取得と任意購入を Apple 経由で処理します。IIDEV はカード情報を受信しません。サイトは広告 Cookie や行動分析を使いません。連絡先：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。
        </p>
      </>
    ),
  },
  {
    id: "korean",
    label: "한국어",
    lang: "ko",
    content: (
      <>
        <h2>개인정보 보호정책 요약</h2>
        <p>
          WOS Aide Bar는 IIDEV 계정을 요구하지 않으며 광고, 추적, 개발자 분석 또는 개발자 운영 충돌 보고 SDK를 포함하지 않습니다. 검색 기록, 설정, 번역 기록, Crossref DOI/BibTeX 및 EasyScholar 기록, 구성한 기관, Library Access DOI 입력과 원문 조회 결과, 로컬 통계와 저널 목록은 주로 앱 샌드박스에 저장되며 IIDEV로 전송되지 않습니다. 클립보드는 메뉴 막대 패널을 열거나 명시적으로 새로 고치거나 해당 단축키를 사용할 때만 읽고, 선택 텍스트는 번역 단축키를 누를 때만 읽습니다. 번역 원문을 앱에서 직접 입력할 수도 있습니다.
        </p>
        <h3>번역 및 AI 제공업체</h3>
        <p>
          AI는 선택적 번역과 제공업체 설정에만 사용되며 Web of Science 검색식 생성에는 사용되지 않습니다. 설정 열기, 제공업체 전환, 자격 증명 저장만으로 모델을 자동 조회하지 않습니다. 모델 새로 고침이나 연결 테스트를 명시적으로 실행할 때만 엔드포인트에 연결하며 번역 원문은 보내지 않습니다. 비루프백 엔드포인트로 원문을 처음 보내기 전에 대상과 개인정보 정보를 표시하고 동의를 요청합니다. localhost, 127.0.0.1, ::1은 로컬 루프백, LAN/mDNS는 HTTPS와 동의가 필요한 원격으로 처리합니다. OpenAI 직접 번역 요청에는 무작위 설치 안전 식별자도 포함됩니다. API 키는 macOS 키체인에 저장되고 번역 기록은 최대 100개입니다.
        </p>
        <h3>Crossref, 기관 원문, EasyScholar, 통계</h3>
        <p>
          Crossref는 기본적으로 꺼져 있고 명시적으로 사용할 때만 참고문헌을 전송합니다. 메타데이터는 최대 30일 캐시되며 DOI 조회 기록과 BibTeX 기록은 모두 기본 50개, 10~500개로 설정할 수 있고 BibTeX는 요청 시에만 가져옵니다. Library Access도 기본적으로 꺼져 있습니다. 활성화한 뒤 기관 추가를 열면 Third Iron/BrowZine 목록을 갱신할 수 있고 원문 조회에는 Library ID와 DOI를 보냅니다. 구성한 기관과 최근 DOI 입력 스냅샷 최대 50개가 로컬에 저장되며 결과 기록은 기본 100개, 1~10,000개입니다. EasyScholar는 CAS/JCR 조회 또는 자격 증명 테스트 때만 저널명과 사용자 API 키를 전송하며 결과는 최대 24시간 캐시되고 기록은 최대 100개입니다. Local Insights는 WOS 검색, 선택한 저널 제안, DOI 조회/해결 수, 날짜, WOS 필드 등 집계 정보만 저장하며 일별 데이터는 최대 400일입니다. IIDEV는 이를 받지 않습니다.
        </p>
        <h3>저널 목록, iCloud, Apple</h3>
        <p>
          앱에는 소규모 UTD24 저널명 목록이 기본 포함됩니다. SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24, FT50은 사용자가 다운로드 또는 새로 고침을 명시적으로 실행할 때 프로젝트의 공개 GitHub 저장소에서 받을 수 있으며, 호환 CSV를 직접 가져올 수도 있습니다. 사용자가 선택한 CSV는 Mac에서만 처리되고 업로드되지 않습니다. iCloud Drive 백업은 기본적으로 꺼져 있습니다. 번역 원문/번역문은 백업될 수 있지만 제공업체 메타데이터는 제거되고, AI 설정, API 키, 키체인 자격 증명, 안전 식별자, 원격 동의, 네트워크 캐시는 제외됩니다. 시작 시 사용자 콘텐츠가 없는 App Store 업데이트 확인을 할 수 있으며 StoreKit은 Support/Local Insights 상품 정보와 선택적 후원 구매를 Apple을 통해 처리합니다. IIDEV는 카드 정보를 받지 않습니다. 사이트는 광고 쿠키나 행동 분석을 사용하지 않습니다. 문의: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "spanish",
    label: "Español",
    lang: "es",
    content: (
      <>
        <h2>Resumen de la política de privacidad</h2>
        <p>
          WOS Aide Bar no requiere una cuenta de IIDEV y no incluye publicidad, seguimiento, analítica del desarrollador ni SDK de informes de fallos operado por el desarrollador. El historial de búsquedas, ajustes, traducciones, Crossref DOI/BibTeX, EasyScholar, instituciones, entradas DOI y resultados de Library Access, estadísticas locales y listas de revistas permanecen principalmente en el sandbox de la app y no se envían a IIDEV. El portapapeles se lee solo al abrir el panel, actualizarlo expresamente o usar el atajo correspondiente; el texto seleccionado se lee solo con el atajo de traducción. También puedes introducir texto fuente manualmente.
        </p>
        <h3>Traducción y proveedores de IA</h3>
        <p>
          La IA se usa solo para traducción opcional y configuración de proveedores, no para generar consultas de Web of Science. Abrir ajustes, cambiar de proveedor o guardar credenciales no actualiza modelos automáticamente. Solo Actualizar modelos o Probar conexión contactan el endpoint y no envían texto fuente. Antes de enviar texto por primera vez a un endpoint que no sea loopback, la app muestra el destino y solicita permiso. localhost, 127.0.0.1 y ::1 son loopback local; LAN/mDNS se tratan como remotos y requieren HTTPS y consentimiento. Las traducciones directas a OpenAI incluyen un identificador de seguridad de instalación aleatorio. Las claves API se guardan en el Llavero de macOS y el historial de traducción admite hasta 100 elementos.
        </p>
        <h3>Crossref, texto completo, EasyScholar y estadísticas</h3>
        <p>
          Crossref está desactivado por defecto y solo envía referencias al usarlo expresamente. Los metadatos pueden almacenarse 30 días; tanto el historial DOI como el historial BibTeX tienen un límite predeterminado de 50, configurable entre 10 y 500, y BibTeX solo se obtiene bajo petición. Library Access también está desactivado; después de activarlo, Añadir institución puede actualizar el directorio de Third Iron/BrowZine y una consulta envía Library ID y DOI. Las instituciones configuradas y hasta 50 instantáneas recientes de entrada DOI se guardan localmente; el historial de resultados es 100 por defecto, configurable de 1 a 10.000. EasyScholar solo se conecta para CAS/JCR o prueba de credenciales, con nombre de revista y clave API; caché de 24 horas e historial máximo de 100. Local Insights guarda solo estadísticas agregadas de WOS, revistas aceptadas, DOI, fechas y campos WOS; la actividad diaria se conserva hasta 400 días. IIDEV no recibe estos datos.
        </p>
        <h3>Listas, iCloud y Apple</h3>
        <p>
          La app incluye una pequeña lista UTD24 por defecto. SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24 y FT50 pueden descargarse del repositorio público de GitHub del proyecto únicamente cuando eliges Descargar o Actualizar; también puedes importar CSV compatibles. Los CSV seleccionados por el usuario se procesan solo en el Mac y no se cargan. iCloud Drive está desactivado por defecto. El texto original/traducido puede formar parte del backup, pero se elimina metadata del proveedor; quedan excluidos configuración de IA, claves API, Llavero, identificador de seguridad, consentimientos remotos y cachés de red. Al iniciar puede hacerse una comprobación de App Store sin contenido del usuario; StoreKit obtiene información de productos para Support/Local Insights y procesa compras voluntarias mediante Apple. IIDEV no recibe datos de tarjetas. El sitio no usa cookies publicitarias ni analítica de comportamiento. Contacto: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "portuguese-brazil",
    label: "Português (Brasil)",
    lang: "pt-BR",
    content: (
      <>
        <h2>Resumo da Política de Privacidade</h2>
        <p>
          O WOS Aide Bar não exige conta da IIDEV e não inclui publicidade, rastreamento, análise do desenvolvedor nem SDK de relatório de falhas operado pelo desenvolvedor. Histórico de pesquisas, ajustes, traduções, Crossref DOI/BibTeX, EasyScholar, instituições, entradas DOI e resultados do Library Access, estatísticas locais e listas de periódicos ficam principalmente no sandbox do app e não são enviados à IIDEV. A área de transferência é lida somente ao abrir o painel, atualizar explicitamente ou usar o atalho correspondente; o texto selecionado é lido somente com o atalho de tradução. Também é possível inserir o texto de origem manualmente.
        </p>
        <h3>Tradução e provedores de IA</h3>
        <p>
          A IA é usada somente para tradução opcional e configuração de provedores, não para gerar consultas do Web of Science. Abrir ajustes, trocar de provedor ou salvar credenciais não atualiza modelos automaticamente. Apenas Atualizar modelos ou Testar conexão contatam o endpoint, sem enviar texto de origem. Antes do primeiro envio a um endpoint não loopback, o app mostra o destino e pede permissão. localhost, 127.0.0.1 e ::1 são loopback local; LAN/mDNS são remotos e exigem HTTPS e consentimento. Traduções diretas à OpenAI incluem um identificador aleatório de segurança da instalação. Chaves de API ficam nas Chaves do macOS e o histórico de tradução comporta até 100 itens.
        </p>
        <h3>Crossref, texto completo, EasyScholar e estatísticas</h3>
        <p>
          Crossref fica desativado por padrão e só envia referências quando usado explicitamente. Metadados podem ficar em cache por 30 dias; tanto o histórico DOI quanto o histórico BibTeX têm limite padrão de 50, configurável de 10 a 500, e BibTeX só é obtido sob solicitação. Library Access também fica desativado; depois de ativado, Adicionar instituição pode atualizar o diretório Third Iron/BrowZine e uma consulta envia Library ID e DOI. Instituições configuradas e até 50 instantâneos recentes de entrada DOI ficam salvos localmente; o histórico de resultados é 100 por padrão, configurável de 1 a 10.000. EasyScholar só se conecta para CAS/JCR ou teste de credenciais, com nome do periódico e chave API; cache de 24 horas e histórico máximo de 100. Local Insights guarda apenas estatísticas agregadas de WOS, sugestões aceitas, DOI, datas e campos WOS; atividade diária por até 400 dias. A IIDEV não recebe esses dados.
        </p>
        <h3>Listas, iCloud e Apple</h3>
        <p>
          O app inclui uma pequena lista UTD24 por padrão. SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24 e FT50 podem ser baixados do repositório público do projeto no GitHub somente quando você escolhe Baixar ou Atualizar; também é possível importar CSV compatíveis. CSV selecionados pelo usuário são processados apenas no Mac e não são enviados. iCloud Drive fica desativado por padrão. Texto original/traduzido pode fazer parte do backup, mas metadata do provedor é removida; configuração de IA, chaves API, Chaves, identificador de segurança, consentimentos remotos e caches de rede são excluídos. Na inicialização pode ocorrer uma verificação da App Store sem conteúdo do usuário; StoreKit obtém informações de produtos para Support/Local Insights e processa compras voluntárias pela Apple. A IIDEV não recebe dados de cartão. O site não usa cookies de publicidade nem análise comportamental. Contato: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "french",
    label: "Français",
    lang: "fr",
    content: (
      <>
        <h2>Résumé de la politique de confidentialité</h2>
        <p>
          WOS Aide Bar ne nécessite aucun compte IIDEV et ne contient ni publicité, ni suivi, ni analyse du développeur, ni SDK de rapport de plantage exploité par le développeur. Historique de recherche, réglages, traductions, Crossref DOI/BibTeX, EasyScholar, établissements, saisies DOI et résultats Library Access, statistiques locales et listes de revues restent principalement dans le bac à sable de l’app et ne sont pas envoyés à IIDEV. Le presse-papiers n’est lu qu’à l’ouverture du panneau, lors d’une actualisation explicite ou via le raccourci correspondant ; la sélection n’est lue qu’avec le raccourci de traduction. Le texte source peut aussi être saisi manuellement.
        </p>
        <h3>Traduction et fournisseurs d’IA</h3>
        <p>
          L’IA sert uniquement à la traduction facultative et à la configuration des fournisseurs, pas à générer des requêtes Web of Science. Ouvrir les réglages, changer de fournisseur ou enregistrer des identifiants ne déclenche pas de découverte automatique des modèles. Seules les actions Actualiser les modèles ou Tester la connexion contactent le point de terminaison, sans envoyer le texte source. Avant le premier envoi vers un endpoint non loopback, l’app affiche la destination et demande l’autorisation. localhost, 127.0.0.1 et ::1 sont locaux ; LAN/mDNS sont distants et nécessitent HTTPS et consentement. Les traductions directes OpenAI incluent un identifiant aléatoire de sécurité d’installation. Les clés API restent dans le Trousseau macOS et l’historique de traduction contient jusqu’à 100 éléments.
        </p>
        <h3>Crossref, texte intégral, EasyScholar et statistiques</h3>
        <p>
          Crossref est désactivé par défaut et n’envoie des références que lors d’une utilisation explicite. Les métadonnées peuvent être mises en cache 30 jours ; l’historique DOI et l’historique BibTeX ont chacun une limite par défaut de 50, configurable de 10 à 500, et BibTeX n’est obtenu que sur demande. Library Access est aussi désactivé ; après activation, Ajouter un établissement peut actualiser l’annuaire Third Iron/BrowZine et une recherche envoie Library ID et DOI. Les établissements configurés et jusqu’à 50 instantanés récents de saisie DOI sont stockés localement ; l’historique des résultats est de 100 par défaut, configurable de 1 à 10 000. EasyScholar se connecte seulement pour CAS/JCR ou un test d’identifiants, avec nom de revue et clé API ; cache 24 heures et historique maximum 100. Local Insights conserve uniquement des agrégats WOS, suggestions acceptées, DOI, dates et champs WOS ; données quotidiennes jusqu’à 400 jours. IIDEV ne reçoit pas ces données.
        </p>
        <h3>Listes, iCloud et Apple</h3>
        <p>
          L’app inclut une petite liste UTD24 par défaut. SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24 et FT50 peuvent être téléchargés depuis le dépôt GitHub public du projet uniquement lorsque vous choisissez Télécharger ou Actualiser ; vous pouvez aussi importer des CSV compatibles. Les CSV sélectionnés par l’utilisateur sont traités uniquement sur le Mac et ne sont pas téléversés. iCloud Drive est désactivé par défaut. Le texte source/traduit peut être sauvegardé, mais la metadata du fournisseur est supprimée ; configuration IA, clés API, Trousseau, identifiant de sécurité, consentements distants et caches réseau sont exclus. Au lancement, une vérification App Store sans contenu utilisateur peut avoir lieu ; StoreKit charge les informations produit pour Support/Local Insights et traite les achats volontaires via Apple. IIDEV ne reçoit pas les données de carte. Le site n’utilise ni cookies publicitaires ni analyse comportementale. Contact : <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "german",
    label: "Deutsch",
    lang: "de",
    content: (
      <>
        <h2>Zusammenfassung der Datenschutzerklärung</h2>
        <p>
          WOS Aide Bar benötigt kein IIDEV-Konto und enthält keine Werbung, kein Tracking, keine Entwickleranalyse und kein vom Entwickler betriebenes Crash-Reporting-SDK. Suchverlauf, Einstellungen, Übersetzungen, Crossref DOI/BibTeX, EasyScholar, Einrichtungen, Library-Access-DOI-Eingaben und Ergebnisse, lokale Statistiken und Zeitschriftenlisten verbleiben hauptsächlich in der App-Sandbox und werden nicht an IIDEV gesendet. Die Zwischenablage wird nur beim Öffnen des Fensters, ausdrücklichen Aktualisieren oder über den passenden Kurzbefehl gelesen; Auswahltext nur über den Übersetzungskurzbefehl. Ausgangstext kann auch manuell eingegeben werden.
        </p>
        <h3>Übersetzung und KI-Anbieter</h3>
        <p>
          KI wird nur für optionale Übersetzung und Anbieter-Konfiguration verwendet, nicht zum Erzeugen von Web-of-Science-Abfragen. Einstellungen öffnen, Anbieter wechseln oder Zugangsdaten speichern löst keine automatische Modellsuche aus. Nur Modelle aktualisieren oder Verbindung testen kontaktiert den Endpunkt, ohne Ausgangstext zu senden. Vor dem ersten Versand an einen Nicht-Loopback-Endpunkt zeigt die App das Ziel und bittet um Erlaubnis. localhost, 127.0.0.1 und ::1 sind lokal; LAN/mDNS gelten als remote und benötigen HTTPS und Einwilligung. Direkte OpenAI-Übersetzungen enthalten zusätzlich eine zufällige Installations-Sicherheitskennung. API-Schlüssel liegen im macOS-Schlüsselbund; Übersetzungsverlauf maximal 100 Einträge.
        </p>
        <h3>Crossref, Volltext, EasyScholar und Statistiken</h3>
        <p>
          Crossref ist standardmäßig deaktiviert und sendet Literaturangaben nur bei ausdrücklicher Nutzung. Metadaten können bis zu 30 Tage zwischengespeichert werden; DOI- und BibTeX-Verlauf haben jeweils standardmäßig 50 Einträge und sind auf 10–500 einstellbar, BibTeX wird nur auf Anforderung geladen. Library Access ist ebenfalls deaktiviert; nach der Aktivierung kann Einrichtung hinzufügen das Third-Iron/BrowZine-Verzeichnis aktualisieren, eine Volltextabfrage sendet Library ID und DOI. Konfigurierte Einrichtungen und bis zu 50 aktuelle DOI-Eingabe-Snapshots werden lokal gespeichert; der Ergebnisverlauf hat standardmäßig 100 Einträge und ist auf 1–10.000 einstellbar. EasyScholar verbindet sich nur für CAS/JCR oder Zugangsdaten-Test mit Zeitschriftentitel und API-Schlüssel; Cache 24 Stunden, Verlauf maximal 100. Local Insights speichert nur WOS-, angenommene Zeitschriften-, DOI-, Datums- und WOS-Feld-Aggregate; Tagesdaten bis 400 Tage. IIDEV erhält diese Daten nicht.
        </p>
        <h3>Listen, iCloud und Apple</h3>
        <p>
          Die App enthält standardmäßig eine kleine UTD24-Liste. SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24 und FT50 können nur nach einer ausdrücklichen Aktion „Laden“ oder „Aktualisieren“ aus dem öffentlichen GitHub-Repository des Projekts geladen werden; kompatible CSV-Dateien können ebenfalls importiert werden. Vom Benutzer ausgewählte CSV-Dateien werden nur auf dem Mac verarbeitet und nicht hochgeladen. iCloud Drive ist standardmäßig deaktiviert. Ausgangs-/Übersetzungstext kann gesichert werden, Anbieter-Metadaten werden entfernt; KI-Konfiguration, API-Schlüssel, Schlüsselbund, Sicherheitskennung, Remote-Einwilligungen und Netzwerk-Caches sind ausgeschlossen. Beim Start kann eine App-Store-Prüfung ohne Benutzerinhalte erfolgen; StoreKit lädt Produktdaten für Support/Local Insights und verarbeitet freiwillige Käufe über Apple. IIDEV erhält keine Kartendaten. Die Website nutzt keine Werbe-Cookies oder Verhaltensanalyse. Kontakt: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      intro="WOS Aide Bar has no IIDEV account system, advertising, tracking, or developer-operated analytics. App data stays primarily on your Mac; user content leaves the Mac only for the external feature you explicitly use."
      updated="Effective August 31, 2026"
      translations={translations}
    >
      <LegalSection number="01" title="Scope and developer collection">
        <p>
          This policy applies to the WOS Aide Bar macOS application and this
          product website, provided by IIDEV. The App requires no IIDEV account
          and contains no advertising, tracking, developer-operated analytics,
          or developer-operated crash-reporting SDK. IIDEV does not operate an
          App user-content server and does not receive clipboard text, searches,
          imported files, translation text, DOI queries, institutional full-text
          queries, or translation results.
        </p>
      </LegalSection>

      <LegalSection number="02" title="Data kept on your Mac">
        <p>
          Search history, settings, translation history, Crossref DOI/BibTeX
          and EasyScholar history, configured institutions, Library Access DOI
          input and full-text result history, local usage statistics, and
          imported or downloaded journal lists are stored in the App sandbox.
          Clipboard text is read only when you open the menu-bar panel,
          explicitly refresh it, or use the clipboard-search shortcut.
        </p>
        <p>
          Selection translation reads the current selection only when you press
          its shortcut. The App does not continuously monitor clicks or other
          apps. If Accessibility cannot expose the visible selection, the same
          explicit shortcut may perform one Copy command and immediately restore
          the prior pasteboard contents. Translation source text can also be
          entered manually inside the App.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Local Insights">
        <p>
          Local Insights is calculated and stored only on the Mac. It records
          aggregate counts and dates for WOS searches, accepted journal
          suggestions, completed DOI lookups and DOI resolution counts, plus
          WOS field counts. It does not store raw queries, reference text,
          journal input, or clipboard text. Daily activity is retained for up
          to 400 days; lifetime totals remain until you clear statistics.
        </p>
        <p>
          When an older version-1 statistics file is first read, current WOS,
          journal, and DOI aggregates are preserved while retired AI/model/token
          aggregates are discarded and the file is rewritten in the current
          format. IIDEV does not receive Local Insights data.
        </p>
      </LegalSection>

      <LegalSection
        number="04"
        title="Optional AI translation and model providers"
      >
        <p>
          AI provider configuration is used only for optional translation; the
          App does not use an LLM to generate Web of Science queries. Opening
          provider settings, switching providers, or saving a credential does
          not automatically refresh models. Model discovery contacts the
          configured endpoint only when you explicitly choose Refresh Models.
          Test Connection also runs only on explicit action and sends a
          synthetic structured-output probe. These setup actions may send
          credentials and ordinary request metadata, but no translation source
          text.
        </p>
        <p>
          Before the first translation request to a non-loopback provider and
          endpoint, the App identifies the provider, endpoint, data being sent,
          and available privacy policy, then requires permission. Cancelling
          sends no source text. After approval, selected or manually entered
          source text is sent directly to the configured provider or custom
          endpoint. Direct OpenAI requests also include a random App-generated
          installation safety identifier; it is not an Apple ID, email address,
          hardware serial number, or advertising identifier.
        </p>
        <p>
          Loopback endpoints (<code>localhost</code>, <code>127.0.0.1</code>,
          and <code>::1</code>) stay on this Mac and do not require remote
          data-sharing permission. LAN and mDNS hosts are treated as remote and
          require HTTPS and consent. API credentials are stored in macOS
          Keychain. Provider processing is governed by that provider or custom
          endpoint operator.
        </p>
        <p>
          Provider policies:{" "}
          <a href="https://openai.com/policies/privacy-policy/">OpenAI</a>
          {" · "}<a href="https://openrouter.ai/privacy">OpenRouter</a>
          {" · "}<a href="https://www.anthropic.com/legal/privacy">Anthropic</a>
          {" · "}<a href="https://policies.google.com/privacy">Google</a>
          {" · "}<a href="https://privacy.microsoft.com/privacystatement">Microsoft</a>
          {" · "}<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html">DeepSeek</a>
          {" · "}<a href="https://docs.siliconflow.cn/en/legals/privacy-policy">SiliconFlow</a>
          {" · "}<a href="https://groq.com/privacy-policy">Groq</a>
          {" · "}<a href="https://legal.mistral.ai/terms/privacy-policy">Mistral AI</a>
        </p>
      </LegalSection>

      <LegalSection number="05" title="Translation history">
        <p>
          Successful translations are stored locally for reuse, up to 100
          entries. Entries can contain source and translated text, language
          direction, historical provider/model labels, and dates. An exact
          matching history entry can be reused without sending the source text
          again. You can remove entries or clear translation history.
        </p>
      </LegalSection>

      <LegalSection number="06" title="Optional Crossref DOI lookup">
        <p>
          Crossref lookup is off by default. After you enable and explicitly
          choose it, reference lines are sent directly to the Crossref REST API.
          Returned metadata may be cached locally for up to 30 days. Completed
          queries, original references, and results remain local until deleted.
          The history limit defaults to 50 and is configurable from 10 to 500.
        </p>
        <p>
          BibTeX is fetched only when you request it and is stored locally;
          BibTeX history also defaults to 50 and is configurable from 10 to 500.
          Citation formatting may download public CSL styles, locale files, and
          citeproc-js assets; those asset requests contain no reference text or
          DOI.
        </p>
        <p>
          See the{" "}
          <a href="https://www.crossref.org/operations-and-sustainability/privacy/">
            Crossref privacy policy
          </a>.
        </p>
      </LegalSection>

      <LegalSection number="07" title="Optional institutional full-text lookup">
        <p>
          Library Access uses Third Iron services associated with BrowZine and
          LibKey and is off by default. Its Quick Search launcher stays hidden
          until you enable it. After Library Access is enabled, opening Add
          Institution may refresh the supported institution directory when the
          local copy is missing or older than 30 days. A full-text lookup sends
          the selected Library ID and DOI directly to Third Iron over HTTPS to
          obtain a temporary token and resolve an institution-authorized access
          link. Ordinary network metadata such as IP address may also be
          processed under Third Iron&apos;s policy.
        </p>
        <p>
          Configured institutions and up to 50 recent DOI input snapshots are
          stored locally. Full-text result history defaults to 100 entries and
          can be configured from 1 to 10,000. IIDEV does not receive these
          requests or results. See the{" "}
          <a href="https://support.thirdiron.com/support/solutions/articles/72000639010-third-iron-application-privacy-policy">
            Third Iron Application Privacy Policy
          </a>.
        </p>
      </LegalSection>

      <LegalSection number="08" title="Optional EasyScholar journal-rank lookup">
        <p>
          EasyScholar is contacted only after you press the CAS/JCR lookup
          action or explicitly test a saved credential. The selected journal
          title and user-provided API key are sent directly to EasyScholar over
          HTTPS. The key is stored in macOS Keychain and is not written to query
          history or cache files. Returned rank fields are cached locally for up
          to 24 hours; successful results are kept in local history with at most
          100 entries until you remove or clear them.
        </p>
        <p>
          See the <a href="https://www.easyscholar.cc/">EasyScholar website</a>.
        </p>
      </LegalSection>

      <LegalSection number="09" title="Journal lists">
        <p>
          The App includes a small default UTD24 journal-title list. SCIE, SSCI,
          AHCI, ESCI, AJG 2024, UTD24, and FT50 lists may be downloaded from the public
          <a href="https://github.com/wosaide/wosaide-journal-lists">
            wosaide-journal-lists repository
          </a>{" "}
          only when you explicitly choose Download or Refresh. You may also
          import compatible CSV files. User-selected CSV files are processed
          locally and are not uploaded. GitHub and its CDN may process ordinary delivery
          metadata such as IP address, timestamp, and request path for an
          explicit download or refresh.
        </p>
        <p>
          See the{" "}
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
            GitHub General Privacy Statement
          </a>.
        </p>
      </LegalSection>

      <LegalSection number="10" title="Optional iCloud Drive backup">
        <p>
          iCloud Drive backup is off by default. If enabled, selected local App
          data can be packaged into WOS Aide Bar backup files in your iCloud
          Drive, including settings, search history, journal data, Crossref and
          Library Access history, translation history, and Local Insights.
          Translation source and translated text remain part of translation
          history, but provider/profile metadata is removed from the backup copy.
        </p>
        <p>
          AI provider configuration, selected provider/model identifiers, API
          keys, Keychain and EasyScholar credentials, the OpenAI safety
          identifier, saved remote-data-sharing consent, and network caches are
          excluded. iCloud Drive is operated by Apple under your Apple/iCloud
          settings and Apple&apos;s terms.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Browser, App Store, and StoreKit">
        <p>
          Starting a WOS search asks macOS to open a generated Web of Science URL
          in your default browser. Browser activity, authentication,
          institutional proxy access, and Web of Science usage are governed by
          those services. Opening a resolved institutional full-text link
          similarly hands the returned URL to the default browser.
        </p>
        <p>
          At launch, the App may query Apple&apos;s public App Store lookup
          service to check published version metadata. It sends no search,
          clipboard, translation, API credential, or stored-history content.
          When Support or Local Insights needs current product names, prices, or
          storefront currency, StoreKit may load that metadata from Apple.
          Voluntary support purchases are also processed by Apple. IIDEV receives
          no payment-card or bank details and operates no purchase server.
        </p>
        <p>
          See the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection number="12" title="Retention, Site data, and contact">
        <p>
          Device-local data remains until you delete it, an applicable retention
          limit removes it, you remove the App, or macOS removes it. API
          credentials are stored separately in macOS Keychain and may survive
          App deletion or device migration under macOS/iCloud Keychain behavior;
          remove credentials in Translation → Configuration or EasyScholar
          settings if you want them deleted before uninstalling. Revoking
          translation-provider permission prevents future remote requests but
          cannot delete data already processed by a provider. Data already
          processed by Third Iron or another external service is governed by
          that service&apos;s retention and deletion practices.
        </p>
        <p>
          The Site uses no advertising cookies, behavioral analytics, account
          registration, or contact forms. Hosting and network providers may
          process ordinary delivery and security logs such as IP address,
          timestamp, request path, device, and browser information. For privacy
          questions, email{" "}
          <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
