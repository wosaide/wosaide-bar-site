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
          WOS Aide Bar 无需 IIDEV 账户，不含广告、跟踪、开发者分析或开发者运营的崩溃报告 SDK。查询历史、设置、翻译历史、Crossref DOI/BibTeX 与 EasyScholar 历史、已配置机构、Library Access DOI 输入与全文结果以及导入或下载的期刊列表主要保存在 App 沙盒中，不会发送给 IIDEV。剪贴板只在打开菜单栏面板、主动刷新或使用相应快捷键时读取；选中文字只在按下翻译快捷键时读取，也可以在 App 内手动输入翻译原文。
        </p>
        <h3>翻译与 AI 服务商</h3>
        <p>
          AI 服务商配置可用于可选翻译、可选截图文献 LLM 整理和 Math Capture，但不用于生成 Web of Science 检索式；三个任务可分别选择模型。打开服务商设置、切换服务商或保存凭据不会自动刷新模型，只有主动“刷新模型”或“测试连接”时才联系端点，且不会发送翻译原文、截图 OCR／参考文献文本或 Math Capture 图片。文献识别和截图翻译需要 macOS 屏幕录制权限，所选图片仅在本机捕获并 OCR，不保存或上传；截图翻译只把识别文本送入翻译许可流程。若主动开启文献 LLM 整理，只会把本地 OCR 文本发送给所选模型，文献截图图片不会上传，并会按“文献整理”用途与端点单独征得许可。Math Capture 用于把用户主动框选的数学公式识别为 LaTeX；loopback 模型在本机处理，非本机端点只有在“公式识别”用途与端点的独立许可通过后才会收到该公式图片，拒绝许可不会发送图片。API 密钥保存在 macOS 钥匙串。
        </p>
        <h3>本机截图与桌面涂鸦</h3>
        <p>
          通用截图工具仅在你主动发起时捕获区域、窗口或屏幕，最近历史最多在本机保留 7 天、50 张/500 MB。桌面涂鸦使用 Apple PaperKit/PencilKit 在本机处理画笔、文本、选择、套索与橡皮擦；普通 PNG 导出只在你主动操作时捕获当前屏幕，透明 PNG 导出只包含标注，不捕获桌面。自动淡出会在本机淡出并真正移除过期标注 generation。这些本机截图与标注不会由 WOS Aide Bar 上传。
        </p>
        <h3>Crossref、机构全文、EasyScholar 与本地统计</h3>
        <p>
          Crossref 仅在你从独立面板、截图识别文献流程或对话窗口中可见的 Crossref 动作主动发起查询时发送参考文献或 DOI；隐藏对话中的 Crossref 图标／Tab 动作不会停用独立面板。元数据最多缓存 30 天，DOI 与 BibTeX 历史均默认 50 条、可设为 10–500。Library Access 默认关闭；全新安装会在本机预先配置 PolyU 与 Monash，这一本地默认配置不会连接 Third Iron。启用后仅在需要刷新机构目录或主动全文查询时连接 Third Iron/BrowZine，并发送 Library ID 与 DOI。EasyScholar 只在 CAS/JCR 查询或主动测试凭据时发送期刊名与用户 API Key。IIDEV 不接收这些数据。
        </p>
        <h3>期刊列表与 Apple 服务</h3>
        <p>
          App 默认包含小型 UTD24 期刊名称列表。仓库目录包括 Web of Science SCIE/SSCI/AHCI/ESCI、Scopus、ScienceDirect、PubMed/NLM、EI Compendex、CNKI 北大核心/CSSCI/CSSCI-扩展版、AJG 2024、UTD24 与 FT50；仅在你主动点击下载、更新或刷新时从项目公开 GitHub 仓库获取，也可导入兼容 CSV。用户选择的 CSV 仅在本机处理，不会上传。App 启动时可能进行不含用户内容的 App Store 更新检查；StoreKit 可能为“支持”获取商品与商店信息并处理自愿支持购买。IIDEV 不接收付款卡信息。网站不使用广告 Cookie 或行为分析。联系：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。 “支持”页还可显示内置的微信支付/支付宝静态二维码。仅显示二维码不会连接支付服务；只有你在外部支付 App 中扫码后，所选支付方才按其自身条款处理付款。该外部支持不会解锁任何 App 功能。
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
          WOS Aide Bar 無需 IIDEV 帳戶，不包含廣告、追蹤、開發者分析或由開發者營運的當機回報 SDK。搜尋記錄、設定、翻譯記錄、Crossref DOI/BibTeX 與 EasyScholar 記錄、已設定機構、Library Access DOI 輸入與全文結果，以及匯入或下載的期刊清單主要儲存在 App 沙盒，不會傳送給 IIDEV。剪貼簿只在開啟選單列面板、主動重新整理或使用相應快速鍵時讀取；選取文字只在按下翻譯快速鍵時讀取，也可在 App 內手動輸入翻譯原文。
        </p>
        <h3>翻譯與 AI 服務商</h3>
        <p>
          AI 服務商設定可用於可選翻譯、可選截圖文獻 LLM 整理和 Math Capture，但不用於產生 Web of Science 檢索式；三個任務可分別選擇模型。開啟服務商設定、切換服務商或儲存憑證不會自動探索模型，只有主動「重新整理模型」或「測試連線」時才連線端點，且不會傳送翻譯原文、截圖 OCR／參考文獻文字或 Math Capture 圖片。文獻辨識和截圖翻譯需要 macOS 螢幕錄製權限，所選圖片僅在本機擷取並 OCR，不儲存或上傳；截圖翻譯只把辨識文字送入翻譯許可流程。若主動開啟文獻 LLM 整理，只會把本機 OCR 文字傳送給所選模型，文獻截圖圖片不會上傳，並會按「文獻整理」用途與端點另外取得許可。Math Capture 用於把使用者主動框選的數學公式辨識為 LaTeX；loopback 模型在本機處理，非本機端點只有在「公式辨識」用途與端點的獨立許可通過後才會收到該公式圖片，拒絕許可不會傳送圖片。API 金鑰儲存在 macOS 鑰匙圈。
        </p>
        <h3>本機截圖與桌面塗鴉</h3>
        <p>
          通用截圖工具僅在你主動發起時擷取區域、視窗或螢幕，最近歷史最多在本機保留 7 天、50 張／500 MB。桌面塗鴉使用 Apple PaperKit/PencilKit 在本機處理畫筆、文字、選取、套索與橡皮擦；普通 PNG 匯出只在你主動操作時擷取目前螢幕，透明 PNG 匯出只包含標註，不擷取桌面。自動淡出會在本機淡出並真正移除過期標註 generation。這些本機截圖與標註不會由 WOS Aide Bar 上傳。
        </p>
        <h3>Crossref、機構全文、EasyScholar 與本機統計</h3>
        <p>
          Crossref 僅在你從獨立面板、截圖辨識文獻流程或對話視窗中可見的 Crossref 動作主動發起查詢時傳送參考文獻或 DOI；隱藏對話中的 Crossref 圖示／Tab 動作不會停用獨立面板。中繼資料最多快取 30 天，DOI 與 BibTeX 記錄均預設 50 筆、可設為 10–500。Library Access 預設關閉；全新安裝會在本機預先設定 PolyU 與 Monash，這一本機預設設定不會連線 Third Iron。啟用後僅在需要重新整理機構目錄或主動全文查詢時連線 Third Iron/BrowZine，並傳送 Library ID 與 DOI。EasyScholar 只在 CAS/JCR 查詢或主動測試憑證時傳送期刊名稱與使用者 API Key。IIDEV 不接收這些資料。
        </p>
        <h3>期刊清單與 Apple 服務</h3>
        <p>
          App 預設包含小型 UTD24 期刊名稱清單。儲存庫目錄包括 Web of Science SCIE/SSCI/AHCI/ESCI、Scopus、ScienceDirect、PubMed/NLM、EI Compendex、CNKI 北大核心/CSSCI/CSSCI-扩展版、AJG 2024、UTD24 與 FT50；僅在你主動按下下載、更新或重新整理時從專案公開 GitHub 儲存庫取得，也可匯入相容 CSV。使用者選取的 CSV 僅在本機處理，不會上傳。App 啟動時可能進行不含使用者內容的 App Store 更新檢查；StoreKit 可能為「支援」取得商品與商店資訊並處理自願支持購買。IIDEV 不接收付款卡資料。網站不使用廣告 Cookie 或行為分析。聯絡：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。 「支援」頁也可顯示內建的微信支付／支付寶靜態 QR Code。僅顯示 QR Code 不會連線支付服務；只有你在外部支付 App 中掃碼後，所選支付方才依其自身條款處理付款。該外部支持不會解鎖任何 App 功能。
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
          WOS Aide Bar は IIDEV アカウントを必要とせず、広告、トラッキング、開発者分析、開発者運営のクラッシュ報告 SDK を含みません。検索履歴、設定、翻訳履歴、Crossref DOI/BibTeX・EasyScholar 履歴、設定した機関、Library Access の DOI 入力と全文結果、ジャーナルリストは主に App サンドボックスに保存され、IIDEV へ送信されません。クリップボードはメニューバーパネルを開く、明示的に更新する、または対応ショートカットを使った場合だけ読み取り、選択範囲は翻訳ショートカット時だけ読み取ります。翻訳元を手入力することもできます。
        </p>
        <h3>翻訳と AI プロバイダー</h3>
        <p>
          AI プロバイダーは任意の翻訳、スクリーンショットからローカル認識した参考文献テキストの任意 LLM 整理、Math Capture に使用でき、Web of Science 検索式の生成には使用されません。各タスクは別々にモデルを選択します。モデル更新・接続テストを明示的に実行した場合のみエンドポイントへ接続し、翻訳元、スクリーンショット OCR テキスト、Math Capture 画像は送りません。文献認識とスクリーンショット翻訳では macOS の画面収録権限を使い、画像をローカルで取得・OCR 処理し、保存もアップロードもしません。Math Capture はユーザーが選択した数式を LaTeX に変換します。loopback モデルは Mac 内で処理し、リモートエンドポイントには「数式認識」用途・エンドポイント別の独立した同意後にのみ選択した数式画像を送信します。同意を拒否すると画像は送信されません。API キーは macOS キーチェーンに保存されます。
        </p>
        <h3>ローカルのスクリーンショットとデスクトップ注釈</h3>
        <p>
          一般スクリーンショットは明示的な操作時だけ領域・ウインドウ・画面を取得し、最近の履歴は最大 7 日・50 件/500 MB を Mac 上に保存します。デスクトップ注釈は Apple PaperKit/PencilKit でペン、テキスト、選択、投げ縄、消しゴムをローカル処理します。通常 PNG は明示的な書き出し時だけ現在の画面を取得し、透明 PNG は注釈だけを出力します。自動フェードは期限切れの generation をローカルでフェード後に実際に解放します。これらを WOS Aide Bar がアップロードすることはありません。
        </p>
        <h3>Crossref、機関全文、EasyScholar、統計</h3>
        <p>
          Crossref は専用パネル、スクリーンショット文献認識、またはダイアログに表示された Crossref アクションから明示的に検索した場合にのみ参考文献や DOI を送信します。ダイアログのアイコン／Tab アクションを隠しても専用パネルは無効になりません。メタデータは最大 30 日キャッシュされ、DOI と BibTeX の履歴は既定 50 件・10～500 件です。Library Access は初期設定で無効ですが、新規インストールでは PolyU と Monash がローカルに事前設定され、この設定だけでは Third Iron に接続しません。有効化後、機関一覧更新が必要な場合または明示的な全文検索時に Third Iron/BrowZine へ Library ID と DOI を送信します。EasyScholar は CAS/JCR または認証情報テスト時のみ接続します。IIDEV はこれらを受信しません。
        </p>
        <h3>ジャーナルリストと Apple</h3>
        <p>
          App には小規模な UTD24 リストが既定で含まれます。リポジトリの対象は Web of Science SCIE/SSCI/AHCI/ESCI、Scopus、ScienceDirect、PubMed/NLM、EI Compendex、CNKI 北大核心/CSSCI/CSSCI-扩展版、AJG 2024、UTD24、FT50 で、明示的にダウンロード、更新、再取得した場合にのみ公開 GitHub リポジトリから取得します。互換 CSV も読み込め、ユーザー選択ファイルは Mac 上でのみ処理されます。起動時にはユーザー内容を含まない App Store 更新確認を行う場合があり、StoreKit は Support の商品情報と任意購入を Apple 経由で処理します。IIDEV はカード情報を受信しません。サイトは広告 Cookie や行動分析を使いません。連絡先：<a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>。 Support には同梱された WeChat Pay / Alipay の静的 QR が表示される場合もあります。QR を表示するだけでは決済事業者へ接続せず、外部の決済 App で読み取った場合にのみ、その事業者の規約に従って支払いが処理されます。この外部サポートで App 機能が解除されることはありません。
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
          WOS Aide Bar는 IIDEV 계정을 요구하지 않으며 광고, 추적, 개발자 분석 또는 개발자 운영 충돌 보고 SDK를 포함하지 않습니다. 검색 기록, 설정, 번역 기록, Crossref DOI/BibTeX 및 EasyScholar 기록, 구성한 기관, Library Access DOI 입력과 원문 조회 결과, 저널 목록은 주로 앱 샌드박스에 저장되며 IIDEV로 전송되지 않습니다. 클립보드는 메뉴 막대 패널을 열거나 명시적으로 새로 고치거나 해당 단축키를 사용할 때만 읽고, 선택 텍스트는 번역 단축키를 누를 때만 읽습니다. 번역 원문을 앱에서 직접 입력할 수도 있습니다.
        </p>
        <h3>번역 및 AI 제공업체</h3>
        <p>
          AI 제공업체는 선택적 번역, 스크린샷에서 로컬로 인식한 참고문헌 텍스트의 선택적 LLM 정리 및 Math Capture에 사용할 수 있으며 Web of Science 검색식 생성에는 사용되지 않습니다. 각 작업은 모델을 독립적으로 선택합니다. 모델 새로 고침이나 연결 테스트를 명시적으로 실행할 때만 엔드포인트에 연결하며 번역 원문, 스크린샷 OCR 텍스트 또는 Math Capture 이미지는 보내지 않습니다. 참고문헌 인식과 스크린샷 번역은 macOS 화면 기록 권한을 사용하며 이미지를 로컬에서 캡처·OCR 처리하고 저장하거나 업로드하지 않습니다. Math Capture는 사용자가 선택한 수식을 LaTeX로 변환합니다. loopback 모델은 Mac에서 처리하고 원격 엔드포인트에는 “수식 인식” 목적/엔드포인트별 별도 동의 후에만 선택한 수식 이미지를 보냅니다. 동의를 거부하면 이미지를 보내지 않습니다. API 키는 macOS 키체인에 저장됩니다.
        </p>
        <h3>로컬 스크린샷 및 데스크톱 주석</h3>
        <p>
          일반 스크린샷은 사용자가 명시적으로 시작할 때만 영역/창/화면을 캡처하며 최근 기록은 Mac에 최대 7일, 50개/500 MB까지 보관합니다. 데스크톱 주석은 Apple PaperKit/PencilKit으로 펜, 텍스트, 선택, 올가미, 지우개를 로컬 처리합니다. 일반 PNG는 명시적 내보내기 때만 현재 화면을 캡처하고 투명 PNG는 주석만 내보냅니다. 자동 페이드는 만료된 generation을 로컬에서 fade 후 실제로 해제합니다. WOS Aide Bar는 이러한 로컬 이미지와 주석을 업로드하지 않습니다.
        </p>
        <h3>Crossref, 기관 원문, EasyScholar, 통계</h3>
        <p>
          Crossref는 전용 패널, 스크린샷 참고문헌 인식 또는 대화 창에 보이는 Crossref 작업에서 명시적으로 조회할 때만 참고문헌이나 DOI를 전송합니다. 대화 창의 아이콘/Tab 작업을 숨겨도 전용 패널은 비활성화되지 않습니다. 메타데이터는 최대 30일 캐시되며 DOI와 BibTeX 기록은 기본 50개, 10~500개로 설정할 수 있습니다. Library Access는 기본적으로 꺼져 있지만 새 설치에는 PolyU와 Monash가 로컬에 미리 구성되며 이 설정만으로 Third Iron에 연결하지 않습니다. 활성화 후 기관 목록 갱신이 필요하거나 명시적으로 원문을 조회할 때 Third Iron/BrowZine에 Library ID와 DOI를 보냅니다. EasyScholar는 CAS/JCR 또는 자격 증명 테스트 시에만 연결합니다. IIDEV는 이를 받지 않습니다.
        </p>
        <h3>저널 목록 및 Apple</h3>
        <p>
          앱에는 소규모 기본 UTD24 목록이 있습니다. 저장소 목록에는 Web of Science SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24 및 FT50이 포함되며 사용자가 다운로드, 업데이트 또는 새로 고침을 명시적으로 실행할 때만 공개 GitHub 저장소에서 가져옵니다. 호환 CSV도 가져올 수 있고 선택한 파일은 Mac에서만 처리됩니다. 시작 시 사용자 콘텐츠가 없는 App Store 업데이트 확인을 할 수 있으며 StoreKit은 Support 상품 정보와 선택적 후원 구매를 Apple을 통해 처리합니다. IIDEV는 카드 정보를 받지 않습니다. 사이트는 광고 쿠키나 행동 분석을 사용하지 않습니다. 문의: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>. Support에는 번들된 WeChat Pay/Alipay 정적 QR이 표시될 수도 있습니다. QR을 표시하는 것만으로 결제 제공업체에 연결하지 않으며, 외부 결제 앱에서 스캔한 경우에만 해당 제공업체의 약관에 따라 결제가 처리됩니다. 이 외부 후원은 앱 기능을 잠금 해제하지 않습니다.
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
          WOS Aide Bar no requiere una cuenta de IIDEV y no incluye publicidad, seguimiento, analítica del desarrollador ni SDK de informes de fallos operado por el desarrollador. El historial de búsquedas, ajustes, traducciones, Crossref DOI/BibTeX, EasyScholar, instituciones, entradas DOI y resultados de Library Access, y las listas de revistas permanecen principalmente en el sandbox de la app y no se envían a IIDEV. El portapapeles se lee solo al abrir el panel, actualizarlo expresamente o usar el atajo correspondiente; el texto seleccionado se lee solo con el atajo de traducción. También puedes introducir texto fuente manualmente.
        </p>
        <h3>Traducción y proveedores de IA</h3>
        <p>
          Los proveedores de IA pueden usarse para traducción opcional, formato LLM opcional de referencias reconocidas localmente desde capturas y Math Capture; no se usan para generar consultas de Web of Science. Cada tarea puede elegir su modelo. Actualizar modelos o Probar conexión solo contactan el endpoint cuando se solicita y no envían texto de traducción, OCR de capturas ni imágenes de Math Capture. Las capturas de referencias y traducción se procesan con OCR localmente y no se guardan ni se cargan. Math Capture convierte una fórmula seleccionada a LaTeX: un modelo loopback la procesa en el Mac y un endpoint remoto recibe solo la imagen de fórmula seleccionada, únicamente después de un consentimiento independiente para la finalidad y endpoint de reconocimiento de fórmulas. Si se rechaza, no se envía la imagen. Las claves API se guardan en el Llavero de macOS.
        </p>
        <h3>Capturas y anotación de escritorio locales</h3>
        <p>
          La captura general solo lee una región, ventana o pantalla cuando la inicias; el historial reciente permanece en el Mac hasta 7 días, 50 elementos/500 MB. Anotación de escritorio usa Apple PaperKit/PencilKit localmente para lápiz, texto, selección, lazo y borrador. El PNG normal captura la pantalla actual solo al exportar; el PNG transparente contiene solo anotaciones. Auto Fade desvanece y elimina realmente la generación caducada en el Mac. WOS Aide Bar no carga estas imágenes ni anotaciones locales.
        </p>
        <h3>Crossref, texto completo, EasyScholar y estadísticas</h3>
        <p>
          Crossref solo envía referencias o DOI cuando inicia expresamente una consulta desde el panel dedicado, el flujo de referencias por captura o una acción Crossref visible en la ventana de diálogo. Ocultar el icono/acción Tab del diálogo no desactiva el panel dedicado. Los metadatos pueden almacenarse 30 días y los historiales DOI y BibTeX tienen 50 entradas por defecto, configurables entre 10 y 500. Library Access está desactivado por defecto; una instalación nueva preconfigura localmente PolyU y Monash sin contactar Third Iron. Tras activarlo, Third Iron/BrowZine recibe Library ID y DOI solo al actualizar el directorio cuando sea necesario o al consultar expresamente el texto completo. EasyScholar solo se conecta para CAS/JCR o prueba de credenciales. IIDEV no recibe estos datos.
        </p>
        <h3>Listas y Apple</h3>
        <p>
          La app incluye una pequeña lista UTD24 por defecto. El repositorio cubre Web of Science SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24 y FT50, y solo descarga los CSV cuando eliges Descargar, Actualizar o Refrescar. También puedes importar CSV compatibles; los archivos seleccionados se procesan solo en el Mac. Al iniciar puede hacerse una comprobación de App Store sin contenido del usuario; StoreKit obtiene información de productos para Support y procesa compras voluntarias mediante Apple. IIDEV no recibe datos de tarjetas. El sitio no usa cookies publicitarias ni analítica de comportamiento. Contacto: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>. Support también puede mostrar códigos QR estáticos incluidos para WeChat Pay o Alipay. Mostrar el QR no contacta con el proveedor; solo al escanearlo en una app de pago externa el proveedor elegido procesa el pago según sus propios términos. Este apoyo externo no desbloquea funciones.
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
          O WOS Aide Bar não exige conta da IIDEV e não inclui publicidade, rastreamento, análise do desenvolvedor nem SDK de relatório de falhas operado pelo desenvolvedor. Histórico de pesquisas, ajustes, traduções, Crossref DOI/BibTeX, EasyScholar, instituições, entradas DOI e resultados do Library Access e listas de periódicos ficam principalmente no sandbox do app e não são enviados à IIDEV. A área de transferência é lida somente ao abrir o painel, atualizar explicitamente ou usar o atalho correspondente; o texto selecionado é lido somente com o atalho de tradução. Também é possível inserir o texto de origem manualmente.
        </p>
        <h3>Tradução e provedores de IA</h3>
        <p>
          Provedores de IA podem ser usados para tradução opcional, formatação LLM opcional de referências reconhecidas localmente em capturas e Math Capture; não são usados para gerar consultas do Web of Science. Cada tarefa pode escolher seu modelo. Atualizar modelos ou Testar conexão só contatam o endpoint quando solicitado e não enviam texto de tradução, OCR de captura nem imagens do Math Capture. Capturas de referências e tradução são processadas por OCR localmente e não são salvas nem enviadas. O Math Capture converte uma fórmula selecionada em LaTeX: um modelo loopback processa a imagem no Mac, enquanto um endpoint remoto recebe somente a imagem da fórmula selecionada e apenas depois de consentimento separado para a finalidade e endpoint de reconhecimento de fórmulas. Se o consentimento for recusado, nenhuma imagem é enviada. Chaves de API ficam no Chaveiro do macOS.
        </p>
        <h3>Capturas e anotações locais</h3>
        <p>
          A captura geral só lê uma região, janela ou tela quando você inicia a ação; o histórico recente fica no Mac por até 7 dias, 50 itens/500 MB. A Anotação da área de trabalho usa Apple PaperKit/PencilKit localmente para caneta, texto, seleção, laço e borracha. O PNG normal captura a tela atual somente ao exportar; o PNG transparente contém apenas anotações. Auto Fade desvanece e remove de fato a geração expirada no Mac. O WOS Aide Bar não envia essas imagens ou anotações locais.
        </p>
        <h3>Crossref, texto completo, EasyScholar e estatísticas</h3>
        <p>
          O Crossref só envia referências ou DOI quando você inicia explicitamente uma consulta pelo painel dedicado, pelo fluxo de referências de captura ou por uma ação Crossref visível na janela de diálogo. Ocultar o ícone/ação Tab do diálogo não desativa o painel dedicado. Metadados podem ficar em cache por 30 dias e os históricos DOI e BibTeX têm limite padrão de 50, configurável de 10 a 500. O Library Access fica desativado por padrão; uma nova instalação pré-configura localmente PolyU e Monash sem contatar o Third Iron. Depois de ativado, Third Iron/BrowZine recebe Library ID e DOI somente ao atualizar o diretório quando necessário ou ao consultar explicitamente o texto completo. EasyScholar só se conecta para CAS/JCR ou teste de credenciais. A IIDEV não recebe esses dados.
        </p>
        <h3>Listas e Apple</h3>
        <p>
          O app inclui uma pequena lista UTD24 por padrão. O repositório cobre Web of Science SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24 e FT50, e só baixa os CSV quando você escolhe Baixar, Atualizar ou Recarregar. Também é possível importar CSV compatíveis; os arquivos selecionados são processados apenas no Mac. Na inicialização pode ocorrer uma verificação da App Store sem conteúdo do usuário; StoreKit obtém informações de produtos para Support e processa compras voluntárias pela Apple. A IIDEV não recebe dados de cartão. O site não usa cookies de publicidade nem análise comportamental. Contato: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>. O Support também pode exibir QR estáticos incluídos para WeChat Pay ou Alipay. Exibir o QR não contata o provedor; somente ao escaneá-lo em um app de pagamento externo o provedor escolhido processa o pagamento segundo seus próprios termos. Esse apoio externo não desbloqueia recursos.
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
          WOS Aide Bar ne nécessite aucun compte IIDEV et ne contient ni publicité, ni suivi, ni analyse du développeur, ni SDK de rapport de plantage exploité par le développeur. Historique de recherche, réglages, traductions, Crossref DOI/BibTeX, EasyScholar, établissements, saisies DOI et résultats Library Access, ainsi que listes de revues, restent principalement dans le bac à sable de l’app et ne sont pas envoyés à IIDEV. Le presse-papiers n’est lu qu’à l’ouverture du panneau, lors d’une actualisation explicite ou via le raccourci correspondant ; la sélection n’est lue qu’avec le raccourci de traduction. Le texte source peut aussi être saisi manuellement.
        </p>
        <h3>Traduction et fournisseurs d’IA</h3>
        <p>
          Les fournisseurs d’IA peuvent servir à la traduction facultative, au formatage LLM facultatif de références reconnues localement depuis des captures et à Math Capture ; ils ne servent pas à générer les requêtes Web of Science. Chaque tâche peut choisir son modèle. Actualiser les modèles ou Tester la connexion ne contactent le point de terminaison que sur demande et n’envoient ni texte de traduction, ni OCR de capture, ni image Math Capture. Les captures de références et de traduction sont traitées par OCR localement, sans être enregistrées ni téléversées. Math Capture convertit une formule sélectionnée en LaTeX : un modèle loopback traite l’image sur le Mac, tandis qu’un endpoint distant ne reçoit que l’image de formule sélectionnée et uniquement après un consentement séparé pour la finalité et l’endpoint de reconnaissance de formule. En cas de refus, aucune image n’est envoyée. Les clés API restent dans le Trousseau macOS.
        </p>
        <h3>Captures et annotation du bureau locales</h3>
        <p>
          La capture générale ne lit une zone, une fenêtre ou un écran que lorsque vous lancez l’action ; l’historique récent reste sur le Mac jusqu’à 7 jours, 50 éléments/500 MB. L’annotation du bureau utilise Apple PaperKit/PencilKit localement pour stylo, texte, sélection, lasso et gomme. Le PNG normal capture l’écran courant uniquement lors de l’export ; le PNG transparent contient seulement les annotations. Auto Fade fait disparaître puis supprime réellement la génération expirée sur le Mac. WOS Aide Bar ne téléverse pas ces images ou annotations locales.
        </p>
        <h3>Crossref, texte intégral, EasyScholar et statistiques</h3>
        <p>
          Crossref n’envoie des références ou DOI que lorsque vous lancez explicitement une recherche depuis le panneau dédié, le flux de références par capture ou une action Crossref visible dans la fenêtre de dialogue. Masquer l’icône/action Tab du dialogue ne désactive pas le panneau dédié. Les métadonnées peuvent être mises en cache 30 jours et les historiques DOI et BibTeX ont une limite par défaut de 50, configurable de 10 à 500. Library Access est désactivé par défaut ; une nouvelle installation préconfigure localement PolyU et Monash sans contacter Third Iron. Après activation, Third Iron/BrowZine reçoit Library ID et DOI uniquement lors d’une actualisation nécessaire de l’annuaire ou d’une recherche explicite de texte intégral. EasyScholar se connecte seulement pour CAS/JCR ou un test d’identifiants. IIDEV ne reçoit pas ces données.
        </p>
        <h3>Listes et Apple</h3>
        <p>
          L’app inclut une petite liste UTD24 par défaut. Le dépôt couvre Web of Science SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24 et FT50, et ne télécharge les CSV que lorsque vous choisissez Télécharger, Mettre à jour ou Actualiser. Vous pouvez aussi importer des CSV compatibles ; les fichiers sélectionnés sont traités uniquement sur le Mac. Au lancement, une vérification App Store sans contenu utilisateur peut avoir lieu ; StoreKit charge les informations produit pour Support et traite les achats volontaires via Apple. IIDEV ne reçoit pas les données de carte. Le site n’utilise ni cookies publicitaires ni analyse comportementale. Contact : <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>. Support peut aussi afficher des QR statiques intégrés pour WeChat Pay ou Alipay. Afficher le QR ne contacte pas le fournisseur ; ce n’est qu’après le scan dans une app de paiement externe que le fournisseur choisi traite le paiement selon ses propres conditions. Ce soutien externe ne débloque aucune fonction.
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
          WOS Aide Bar benötigt kein IIDEV-Konto und enthält keine Werbung, kein Tracking, keine Entwickleranalyse und kein vom Entwickler betriebenes Crash-Reporting-SDK. Suchverlauf, Einstellungen, Übersetzungen, Crossref DOI/BibTeX, EasyScholar, Einrichtungen, Library-Access-DOI-Eingaben und Ergebnisse sowie Zeitschriftenlisten verbleiben hauptsächlich in der App-Sandbox und werden nicht an IIDEV gesendet. Die Zwischenablage wird nur beim Öffnen des Fensters, ausdrücklichen Aktualisieren oder über den passenden Kurzbefehl gelesen; Auswahltext nur über den Übersetzungskurzbefehl. Ausgangstext kann auch manuell eingegeben werden.
        </p>
        <h3>Übersetzung und KI-Anbieter</h3>
        <p>
          KI-Anbieter können für optionale Übersetzung, optionale LLM-Formatierung von lokal erkanntem Screenshot-Literaturtext und Math Capture verwendet werden; Web-of-Science-Abfragen werden damit nicht erzeugt. Jede Aufgabe kann ihr Modell unabhängig wählen. Modelle aktualisieren oder Verbindung testen kontaktiert den Endpunkt nur auf ausdrückliche Anforderung und sendet weder Übersetzungstext noch Screenshot-OCR noch Math-Capture-Bilder. Literatur- und Übersetzungsaufnahmen werden lokal per OCR verarbeitet und weder gespeichert noch hochgeladen. Math Capture wandelt eine ausgewählte Formel in LaTeX um: Ein Loopback-Modell verarbeitet das Bild auf dem Mac; ein entfernter Endpunkt erhält nur das ausgewählte Formelbild und erst nach einer separaten zweck- und endpunktbezogenen Einwilligung für die Formelerkennung. Bei Ablehnung wird kein Bild gesendet. API-Schlüssel liegen im macOS-Schlüsselbund.
        </p>
        <h3>Lokale Screenshots und Desktop-Markierung</h3>
        <p>
          Allgemeine Screenshots erfassen Bereich, Fenster oder Bildschirm nur nach ausdrücklicher Aktion; der lokale Verlauf bleibt höchstens 7 Tage, 50 Einträge/500 MB auf dem Mac. Desktop-Markierung verwendet Apple PaperKit/PencilKit lokal für Stift, Text, Auswahl, Lasso und Radierer. Der normale PNG-Export erfasst den aktuellen Bildschirm nur beim Export; der transparente PNG enthält nur Annotationen. Auto Fade blendet abgelaufene Generationen lokal aus und entfernt sie tatsächlich. WOS Aide Bar lädt diese lokalen Bilder oder Annotationen nicht hoch.
        </p>
        <h3>Crossref, Volltext, EasyScholar und Statistiken</h3>
        <p>
          Crossref sendet Literaturangaben oder DOI nur, wenn Sie ausdrücklich eine Abfrage im eigenen Panel, im Screenshot-Literaturworkflow oder über eine sichtbare Crossref-Aktion im Dialogfenster starten. Das Ausblenden von Symbol/Tab-Aktion deaktiviert das eigene Panel nicht. Metadaten können bis zu 30 Tage zwischengespeichert werden; DOI- und BibTeX-Verlauf haben standardmäßig 50 Einträge und sind auf 10–500 einstellbar. Library Access ist standardmäßig deaktiviert; bei einer neuen Installation werden PolyU und Monash lokal vorkonfiguriert, ohne Third Iron zu kontaktieren. Nach der Aktivierung erhält Third Iron/BrowZine Library ID und DOI nur bei einer erforderlichen Verzeichnisaktualisierung oder einer ausdrücklichen Volltextabfrage. EasyScholar verbindet sich nur für CAS/JCR oder Zugangsdaten-Test. IIDEV erhält diese Daten nicht.
        </p>
        <h3>Listen und Apple</h3>
        <p>
          Die App enthält standardmäßig eine kleine UTD24-Liste. Das Repository umfasst Web of Science SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24 und FT50; CSV-Dateien werden nur nach ausdrücklichem Laden, Aktualisieren oder Auffrischen abgerufen. Kompatible CSV-Dateien können ebenfalls importiert werden und werden nur auf dem Mac verarbeitet. Beim Start kann eine App-Store-Prüfung ohne Benutzerinhalte erfolgen; StoreKit lädt Produktdaten für Support und verarbeitet freiwillige Käufe über Apple. IIDEV erhält keine Kartendaten. Die Website nutzt keine Werbe-Cookies oder Verhaltensanalyse. Kontakt: <a href="mailto:iihciyekub@gmail.com">iihciyekub@gmail.com</a>. Support kann außerdem gebündelte statische QR-Codes für WeChat Pay oder Alipay anzeigen. Das Anzeigen des QR-Codes kontaktiert den Zahlungsanbieter nicht; erst beim Scannen in einer externen Zahlungs-App verarbeitet der gewählte Anbieter die Zahlung nach seinen eigenen Bedingungen. Diese externe Unterstützung schaltet keine App-Funktion frei.
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
      updated="Effective September 14, 2026"
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
          input and full-text result history, and imported or downloaded
          journal lists are stored in the App sandbox.
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
        <p>
          General Screenshot Editor history, crop/annotation state, and Desktop
          Markup PaperKit/PencilKit state are local App data. General screenshot
          history is bounded to seven days, 50 items, and 500 MB. Desktop Markup
          style/tool preferences and per-display annotation documents remain
          local until edited, cleared, Auto Fade removes expired native content,
          or macOS removes the App data.
        </p>
      </LegalSection>

      <LegalSection number="03" title="Screenshot tools, Desktop Markup, local OCR, and Math Capture">
        <p>
          Screenshot text recognition, reference recognition, and screenshot
          translation run only after you explicitly start the feature and select
          a screen rectangle. They require macOS Screen Recording permission.
          The selected image is captured and processed with Apple Vision OCR
          locally on the Mac and is not saved to those recognition histories or
          uploaded. The general Screenshot Editor is also user-initiated; it can
          capture a region, window, or display and keeps at most 50 recent items /
          500 MB locally for up to seven days so they can remain editable.
        </p>
        <p>
          Screenshot translation passes only recognized text into the normal
          translation flow. If optional LLM reference formatting is enabled in
          Crossref settings, only locally recognized bibliography OCR text is
          sent to the separately selected formatting model; the screenshot image
          is never sent. Remote reference formatting uses a separate consent
          scope for the reference-formatting purpose and endpoint. If consent is
          declined or the model fails, the App continues with local parsing.
        </p>
        <p>
          Desktop Markup uses Apple PaperKit/PencilKit locally for native pen,
          text, selection, lasso, and eraser behavior. Its preferences and
          per-display native annotation state remain on the Mac. Auto Fade seals
          an expired native generation, applies a short local fade, then removes
          and releases it rather than leaving invisible markup in memory. The
          normal PNG export captures the current display only when you explicitly
          choose Export; the transparent PNG export does not capture the desktop
          and contains only annotation pixels on an alpha background. Both write
          only to the save-panel location you choose and neither uploads the image.
        </p>
        <p>
          Math Capture is a separate user-initiated workflow for converting a
          selected mathematical formula to LaTeX. It also captures only the
          rectangle you select and does not add the source image to App history.
          A loopback vision model processes the formula image on the same Mac.
          Before a non-loopback provider or custom endpoint can receive the
          selected formula image, the App identifies the destination and requires
          separate consent for the formula-recognition purpose and endpoint.
          Declining that consent sends no formula image. Returned LaTeX and
          MathML are previewed locally in the App.
        </p>
      </LegalSection>

      <LegalSection
        number="04"
        title="Optional AI features and model providers"
      >
        <p>
          AI provider profiles can be used for optional translation, optional
          screenshot-reference formatting, and Math Capture; the App does not
          use an LLM to generate Web of Science queries. Translation, reference
          formatting, and Math Capture select their models independently. Opening
          provider settings, switching providers, or saving a credential does
          not automatically refresh models. Model discovery contacts the
          configured endpoint only when you explicitly choose Refresh Models.
          Test Connection also runs only on explicit action and sends a
          synthetic structured-output probe. These setup actions may send
          credentials and ordinary request metadata, but no translation source
          text, screenshot OCR/reference text, or Math Capture image.
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
          Screenshot-reference formatting has a separate remote-data consent
          purpose. When it is enabled, locally recognized bibliography OCR text
          is sent only after consent for the selected formatting endpoint. A
          declined request sends no OCR text and keeps reference parsing local.
        </p>
        <p>
          Math Capture has its own remote image-sharing consent purpose. A
          non-loopback endpoint can receive only the formula rectangle you
          explicitly selected, only after you start formula recognition and
          approve the disclosed destination. This consent is independent from
          translation and reference-formatting consent. Declining sends no
          formula image.
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

      <LegalSection number="06" title="Crossref DOI and reference lookup">
        <p>
          Crossref is contacted only when you explicitly start a lookup from
          the dedicated Crossref panel, the screenshot-reference workflow, or a
          Crossref action visible in the conversation/Quick Search window. The
          setting that shows or hides the Crossref icon and Tab action controls
          only that conversation entry point; hiding it does not disable the
          dedicated Crossref panel or other DOI tools. Reference text or DOI
          values used for a lookup are sent directly to the Crossref REST API.
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
          until you enable it. On a new installation, Hong Kong Polytechnic
          University (PolyU) and Monash University are preconfigured locally for
          convenience; this local default does not contact Third Iron and can be
          changed or cleared. After Library Access is enabled, opening Add
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
          The App includes a small default UTD24 journal-title list. Repository-
          backed data includes Web of Science SCIE/SSCI/AHCI/ESCI, Scopus,
          ScienceDirect, PubMed/NLM, EI Compendex, CNKI 北大核心 2023 / CSSCI
          2025–2026 / CSSCI-扩展版 2025–2026, AJG 2024, UTD24, and FT50. These
          lists may be downloaded from the public
          <a href="https://github.com/wosaide/wosaide-journal-lists">
            wosaide-journal-lists repository
          </a>. Opening journal-catalog settings may check that repository&apos;s public
          commit/version status without research content. Actual CSV files are
          fetched only when you explicitly choose Download, Update, or Refresh.
          You may also
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

      <LegalSection number="10" title="Browser, App Store, and StoreKit">
        <p>
          Starting a search or opening a journal asks macOS to open the generated
          URL for the selected external service in your default browser. This may
          include Web of Science, Scopus, ScienceDirect, PubMed, EI/Engineering
          Village, CNKI, DOI.org, or another explicitly selected destination.
          Browser activity, authentication, proxy access, and database use are
          governed by the corresponding service. Opening a resolved institutional
          full-text link similarly hands the returned URL to the default browser.
        </p>
        <p>
          At launch, the App may query Apple&apos;s public App Store lookup
          service to check published version metadata. It sends no search,
          clipboard, translation, API credential, or stored-history content.
          When Support needs current product names, prices, or storefront
          currency, StoreKit may load that metadata from Apple. Voluntary in-app
          support purchases are processed by Apple. IIDEV receives no payment-card
          or bank details from that StoreKit flow and operates no purchase server.
          Support may also display bundled static WeChat Pay or Alipay QR images.
          Merely displaying those images does not contact either payment provider;
          scanning and payment occur outside WOS Aide Bar in the external payment
          app under that provider&apos;s terms. External QR support does not unlock any
          App feature, content, service, subscription, or digital good.
        </p>
        <p>
          See the <a href="https://www.apple.com/legal/privacy/">Apple Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection number="11" title="Retention, Site data, and contact">
        <p>
          Device-local data remains until you delete it, an applicable retention
          limit removes it, you remove the App, or macOS removes it. API
          credentials are stored separately in macOS Keychain and may survive
          App deletion or device migration under macOS/iCloud Keychain behavior;
          remove AI credentials in Settings → LLM or remove EasyScholar
          credentials in EasyScholar settings if you want them deleted before
          uninstalling. Revoking
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
