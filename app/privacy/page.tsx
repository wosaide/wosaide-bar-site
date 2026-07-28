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
          WOS Aide Bar 不要求开发者账户，不含广告、追踪、开发者分析或开发者运营的崩溃报告服务。剪贴板文字、检索历史、收藏、设置、AI 结果、DOI 查询历史、本地使用统计以及导入或下载后的期刊列表主要保存在你的 Mac 上，不会发送给 IIDEV。
        </p>
        <p>
          剪贴板文字只会在你打开菜单栏面板、主动刷新或使用剪贴板查询快捷键时于本机读取。发起 Web of Science 查询时，App 会请求 macOS 在默认浏览器中打开包含查询内容的网址；相关浏览器活动和登录由对应服务处理。
        </p>
        <h3>本地使用统计</h3>
        <p>
          本地统计只记录聚合后的使用次数、日期、服务商与模型名称、WOS 字段、Token 用量及成功情况，不记录原始检索词、参考文献文字、期刊输入或剪贴板文字。每日活动最多保留 400 天；累计统计会保留到你主动清除。所有统计仅在此 Mac 上计算和保存，IIDEV 不接收或使用这些数据。
        </p>
        <h3>AI 助手</h3>
        <p>
          AI 助手为可选功能。远程请求发送前，App 会显示服务商、端点和将发送的数据，并要求你明确允许。允许后，输入的研究问题、为完成请求所需的上下文及随机安装安全标识符（仅 OpenAI）会直接发送至你选择的 OpenAI、OpenRouter 或自定义兼容服务；IIDEV 不会接收这些内容。你可以在设置中撤回许可。API 密钥保存在 macOS 钥匙串中，可能在卸载 App 后仍由系统保留，直至你主动删除。
        </p>
        <h3>Crossref 与期刊 CSV</h3>
        <p>
          Crossref DOI 查询默认关闭。启用并主动选择后，参考文献文字会直接发送给 Crossref；返回结果可在本机缓存最多 30 天。已完成查询及原始文献会在本机保留至你删除；保存上限默认为 100，可在设置中调整为 10 至 500。App 内置一个仅含期刊名称的小型 UTD24 默认列表；SCIE、SSCI、AHCI、ESCI 与 AJG 2024 仅支持导入你自行合法取得的 CSV。UTD24 与 FT50 只在你点击下载或刷新时从 GitHub 获取。GitHub 或其 CDN 会像处理普通网络请求一样看到 IP、时间及请求信息。导入的 CSV 只在本机解析，不会上传。
        </p>
        <h3>购买、网站与联系</h3>
        <p>
          自愿支持购买由 Apple 与 StoreKit 处理；IIDEV 不接收付款卡信息。产品网站不用广告 Cookie 或行为分析，但托管商可能处理常规安全与传输日志。如有隐私问题，请联系
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>。
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
          WOS Aide Bar 不要求建立開發者帳戶，不含廣告、追蹤、開發者分析或由開發者營運的當機回報服務。剪貼簿文字、搜尋記錄、收藏、設定、AI 結果、DOI 查詢記錄、本機使用統計，以及匯入或下載的期刊清單，主要儲存在你的 Mac 上，不會傳送給 IIDEV。
        </p>
        <p>
          剪貼簿文字只會在你開啟選單列面板、主動重新整理或使用剪貼簿搜尋快捷鍵時於本機讀取。當你開始 Web of Science 搜尋時，App 會要求 macOS 在預設瀏覽器中開啟包含查詢內容的網址；相關瀏覽器活動與登入由相應服務處理。
        </p>
        <h3>本機使用統計</h3>
        <p>
          本機統計只記錄彙總後的使用次數、日期、供應商與模型名稱、WOS 欄位、Token 用量及成功狀態，不記錄原始搜尋詞、參考文獻文字、期刊輸入或剪貼簿文字。每日活動最多保留 400 天；累計統計會保留至你主動清除。所有統計只在此 Mac 上計算及儲存，IIDEV 不會接收或使用這些資料。
        </p>
        <h3>AI 助手</h3>
        <p>
          AI 助手為選用功能。傳送遠端要求前，App 會顯示供應商、端點及將傳送的資料，並要求你明確同意。同意後，研究問題、完成要求所需的內容，以及隨機安裝安全識別碼（僅 OpenAI）會直接傳送至你選擇的 OpenAI、OpenRouter 或自訂相容服務；IIDEV 不會接收這些內容。你可以在設定中撤回許可。API 金鑰儲存在 macOS 鑰匙圈中，解除安裝 App 後仍可能由系統保留，直到你主動刪除。
        </p>
        <h3>Crossref 與期刊 CSV</h3>
        <p>
          Crossref DOI 查詢預設關閉。啟用並主動選擇後，參考文獻文字會直接傳送給 Crossref；回傳結果最多可在本機快取 30 天。已完成的查詢及原始文獻會在本機保留至你刪除；預設儲存上限為 100，可在設定中調整為 10 至 500。App 內建一個只含期刊名稱的小型 UTD24 預設清單；SCIE、SSCI、AHCI、ESCI 與 AJG 2024 僅支援匯入你自行合法取得的 CSV。UTD24 與 FT50 只會在你按下下載或重新整理時從 GitHub 取得。GitHub 或其 CDN 會如同處理一般網路要求般看到 IP、時間及要求資訊。匯入的 CSV 只在本機解析，不會上傳。
        </p>
        <h3>購買、網站與聯絡方式</h3>
        <p>
          自願贊助購買由 Apple 與 StoreKit 處理；IIDEV 不會收到付款卡資料。產品網站不使用廣告 Cookie 或行為分析，但託管服務商可能處理一般安全與傳輸記錄。如有隱私疑問，請聯絡
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>。
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
          WOS Aide Bar は開発者アカウントを必要とせず、広告、トラッキング、開発者による分析、または開発者が運営するクラッシュレポート機能を含みません。クリップボードのテキスト、検索履歴、お気に入り、設定、AI の結果、DOI 検索履歴、ローカルの使用統計、インポートまたはダウンロードしたジャーナルリストは、主にお使いの Mac に保存され、IIDEV には送信されません。
        </p>
        <p>
          クリップボードのテキストは、メニューバーパネルを開く、明示的に更新する、またはクリップボード検索のショートカットを使用した場合にのみ、Mac 上で読み取られます。Web of Science 検索を開始すると、App は macOS に、検索内容を含む URL をデフォルトブラウザで開くよう要求します。ブラウザでの操作やログインは、各サービスによって処理されます。
        </p>
        <h3>ローカルの使用統計</h3>
        <p>
          ローカル統計には、集計された使用回数、日付、プロバイダー名とモデル名、WOS フィールド、トークン使用量、成功状態のみが記録されます。元の検索語、参考文献のテキスト、ジャーナル入力、クリップボードのテキストは記録されません。日別アクティビティは最長 400 日間保持され、累計統計はユーザーが消去するまで保持されます。すべての統計はこの Mac 上でのみ計算・保存され、IIDEV が受信または使用することはありません。
        </p>
        <h3>AI アシスタント</h3>
        <p>
          AI アシスタントは任意の機能です。リモートリクエストを送信する前に、App はプロバイダー、エンドポイント、送信されるデータを表示し、明示的な許可を求めます。許可した場合、研究上の質問、リクエストの処理に必要なコンテキスト、およびランダムなインストール安全識別子（OpenAI のみ）が、選択した OpenAI、OpenRouter、または互換性のあるカスタムサービスに直接送信されます。IIDEV がこの内容を受信することはありません。許可は設定で取り消せます。API キーは macOS キーチェーンに保存され、App をアンインストールした後も、ユーザーが削除するまでシステムに残る場合があります。
        </p>
        <h3>Crossref とジャーナル CSV</h3>
        <p>
          Crossref DOI 検索は初期設定で無効です。有効にして明示的に選択した場合、参考文献のテキストが Crossref に直接送信され、結果は Mac に最長 30 日間キャッシュされることがあります。完了した検索と元の参考文献は削除するまでローカルに保持されます。保存上限は初期設定で 100 件で、設定から 10～500 件に変更できます。App にはジャーナル名だけを含む小規模な UTD24 標準リストが同梱されています。SCIE、SSCI、AHCI、ESCI、AJG 2024 は、ユーザーが合法的に入手した CSV のインポートにのみ対応します。UTD24 と FT50 は、ダウンロードまたは更新を押した場合にのみ GitHub から取得されます。GitHub またはその CDN は、通常のネットワークリクエストと同様に、IP アドレス、時刻、リクエスト情報を処理する場合があります。インポートした CSV は Mac 上でのみ解析され、アップロードされません。
        </p>
        <h3>購入、ウェブサイト、お問い合わせ</h3>
        <p>
          任意のサポート購入は Apple と StoreKit が処理し、IIDEV はカード情報を受け取りません。製品サイトは広告 Cookie や行動分析を使用しませんが、ホスティング事業者が通常のセキュリティおよび配信ログを処理する場合があります。プライバシーに関するお問い合わせは
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a> までご連絡ください。
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
        <h2>개인정보 처리방침 요약</h2>
        <p>
          WOS Aide Bar는 개발자 계정을 요구하지 않으며 광고, 추적, 개발자 분석 또는 개발자가 운영하는 충돌 보고 서비스를 포함하지 않습니다. 클립보드 텍스트, 검색 기록, 즐겨찾기, 설정, AI 결과, DOI 조회 기록, 로컬 사용 통계 및 가져오거나 다운로드한 저널 목록은 주로 사용자의 Mac에 저장되며 IIDEV로 전송되지 않습니다.
        </p>
        <p>
          클립보드 텍스트는 메뉴 막대 패널을 열거나, 직접 새로 고침하거나, 클립보드 검색 단축키를 사용할 때만 Mac에서 읽습니다. Web of Science 검색을 시작하면 App은 macOS에 검색 내용이 포함된 URL을 기본 브라우저에서 열도록 요청합니다. 관련 브라우저 활동과 로그인은 해당 서비스에서 처리합니다.
        </p>
        <h3>로컬 사용 통계</h3>
        <p>
          로컬 통계에는 집계된 사용 횟수, 날짜, 제공업체 및 모델 이름, WOS 필드, 토큰 사용량, 성공 여부만 기록됩니다. 원본 검색어, 참고문헌 텍스트, 저널 입력 또는 클립보드 텍스트는 기록하지 않습니다. 일별 활동은 최대 400일 동안 보관되며 누적 통계는 사용자가 삭제할 때까지 유지됩니다. 모든 통계는 이 Mac에서만 계산하고 저장하며 IIDEV는 해당 데이터를 받거나 사용하지 않습니다.
        </p>
        <h3>AI 어시스턴트</h3>
        <p>
          AI 어시스턴트는 선택 기능입니다. 원격 요청을 보내기 전에 App은 제공업체, 엔드포인트 및 전송할 데이터를 표시하고 사용자의 명시적 허용을 요청합니다. 허용하면 연구 질문, 요청 수행에 필요한 맥락 및 무작위 설치 안전 식별자(OpenAI에만 해당)가 선택한 OpenAI, OpenRouter 또는 호환되는 사용자 지정 서비스로 직접 전송됩니다. IIDEV는 이 내용을 받지 않습니다. 설정에서 허용을 철회할 수 있습니다. API 키는 macOS 키체인에 저장되며 App을 제거한 후에도 사용자가 직접 삭제할 때까지 시스템에 남아 있을 수 있습니다.
        </p>
        <h3>Crossref 및 저널 CSV</h3>
        <p>
          Crossref DOI 조회는 기본적으로 꺼져 있습니다. 이 기능을 켜고 직접 선택하면 참고문헌 텍스트가 Crossref로 바로 전송되며 결과는 Mac에 최대 30일 동안 캐시될 수 있습니다. 완료된 조회와 원본 참고문헌은 사용자가 삭제할 때까지 로컬에 보관됩니다. 저장 한도는 기본 100개이며 설정에서 10~500개로 조정할 수 있습니다. App에는 저널 이름만 포함된 소규모 UTD24 기본 목록이 있습니다. SCIE, SSCI, AHCI, ESCI 및 AJG 2024는 사용자가 합법적으로 확보한 CSV만 가져올 수 있습니다. UTD24 및 FT50은 다운로드 또는 새로 고침을 누른 경우에만 GitHub에서 가져옵니다. GitHub 또는 해당 CDN은 일반 네트워크 요청과 마찬가지로 IP 주소, 시간 및 요청 정보를 처리할 수 있습니다. 가져온 CSV는 Mac에서만 분석되며 업로드되지 않습니다.
        </p>
        <h3>구매, 웹사이트 및 문의</h3>
        <p>
          자발적 후원 구매는 Apple과 StoreKit에서 처리하며 IIDEV는 결제 카드 정보를 받지 않습니다. 제품 웹사이트는 광고 쿠키나 행동 분석을 사용하지 않지만 호스팅 제공업체는 일반적인 보안 및 전송 로그를 처리할 수 있습니다. 개인정보 관련 문의는
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>으로 연락해 주세요.
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
          WOS Aide Bar no requiere una cuenta con el desarrollador y no incluye publicidad, seguimiento, analíticas del desarrollador ni un servicio de informes de fallos operado por el desarrollador. El texto del portapapeles, el historial de búsquedas, los favoritos, los ajustes, los resultados de IA, el historial de consultas DOI, las estadísticas de uso locales y las listas de revistas importadas o descargadas se guardan principalmente en tu Mac y no se envían a IIDEV.
        </p>
        <p>
          El texto del portapapeles solo se lee localmente cuando abres el panel de la barra de menús, lo actualizas de forma explícita o utilizas el atajo de búsqueda del portapapeles. Al iniciar una búsqueda en Web of Science, la App solicita a macOS que abra en el navegador predeterminado una URL que contiene la consulta. La actividad del navegador y el inicio de sesión son gestionados por los servicios correspondientes.
        </p>
        <h3>Estadísticas de uso locales</h3>
        <p>
          Las estadísticas locales solo registran recuentos agregados, fechas, nombres de proveedores y modelos, campos de WOS, uso de tokens e indicadores de éxito; no registran las consultas originales, el texto de las referencias, las entradas de revistas ni el texto del portapapeles. La actividad diaria se conserva hasta 400 días y los totales acumulados hasta que los elimines. Todas las estadísticas se calculan y guardan únicamente en este Mac; IIDEV no recibe ni utiliza estos datos.
        </p>
        <h3>Asistente de IA</h3>
        <p>
          El Asistente de IA es opcional. Antes de enviar una solicitud remota, la App muestra el proveedor, el punto de conexión y los datos que se enviarán, y solicita tu permiso expreso. Si lo autorizas, la pregunta de investigación, el contexto necesario para completar la solicitud y un identificador de seguridad de instalación aleatorio (solo con OpenAI) se envían directamente al servicio OpenAI, OpenRouter o compatible personalizado que hayas elegido. IIDEV no recibe ese contenido. Puedes retirar el permiso en Ajustes. Las claves API se guardan en el llavero de macOS y pueden permanecer en el sistema después de desinstalar la App hasta que las elimines.
        </p>
        <h3>Crossref y archivos CSV de revistas</h3>
        <p>
          La consulta DOI de Crossref está desactivada de forma predeterminada. Si la activas y eliges la acción, el texto de la referencia se envía directamente a Crossref y el resultado puede almacenarse en caché en tu Mac durante un máximo de 30 días. Las consultas completadas y las referencias originales se guardan localmente hasta que las elimines. El límite predeterminado es de 100 elementos y puede ajustarse entre 10 y 500. La App incluye una pequeña lista UTD24 predeterminada que solo contiene nombres de revistas. SCIE, SSCI, AHCI, ESCI y AJG 2024 solo admiten la importación de archivos CSV obtenidos legalmente por ti. UTD24 y FT50 se descargan de GitHub únicamente cuando pulsas Descargar o Actualizar. GitHub o su CDN pueden procesar la dirección IP, la hora y los datos de la solicitud como en cualquier solicitud de red normal. Los CSV importados se analizan solo en el Mac y no se cargan.
        </p>
        <h3>Compras, sitio web y contacto</h3>
        <p>
          Las compras voluntarias de apoyo son procesadas por Apple y StoreKit; IIDEV no recibe los datos de tu tarjeta. El sitio del producto no utiliza cookies publicitarias ni analíticas de comportamiento, aunque el proveedor de alojamiento puede procesar registros técnicos habituales de seguridad y entrega. Para cualquier consulta sobre privacidad, escribe a
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>.
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
          O WOS Aide Bar não exige uma conta com o desenvolvedor e não inclui publicidade, rastreamento, análises do desenvolvedor nem um serviço de relatórios de falhas operado pelo desenvolvedor. O texto da área de transferência, o histórico de pesquisas, os favoritos, os ajustes, os resultados de IA, o histórico de consultas DOI, as estatísticas locais de uso e as listas de periódicos importadas ou baixadas ficam armazenados principalmente no seu Mac e não são enviados à IIDEV.
        </p>
        <p>
          O texto da área de transferência só é lido localmente quando você abre o painel da barra de menus, atualiza-o explicitamente ou usa o atalho de pesquisa da área de transferência. Ao iniciar uma pesquisa no Web of Science, o App solicita ao macOS que abra no navegador padrão uma URL contendo a consulta. A atividade do navegador e o login são tratados pelos respectivos serviços.
        </p>
        <h3>Estatísticas locais de uso</h3>
        <p>
          As estatísticas locais registram apenas contagens agregadas, datas, nomes de provedores e modelos, campos do WOS, uso de tokens e indicadores de sucesso. Elas não registram as consultas originais, o texto das referências, entradas de periódicos nem o texto da área de transferência. A atividade diária é mantida por até 400 dias, e os totais acumulados permanecem até que você os apague. Todas as estatísticas são calculadas e armazenadas apenas neste Mac; a IIDEV não recebe nem utiliza esses dados.
        </p>
        <h3>Assistente de IA</h3>
        <p>
          O Assistente de IA é opcional. Antes de enviar uma solicitação remota, o App mostra o provedor, o endpoint e os dados que serão enviados, e solicita sua permissão expressa. Se você permitir, a pergunta de pesquisa, o contexto necessário para concluir a solicitação e um identificador aleatório de segurança da instalação (somente para OpenAI) serão enviados diretamente ao serviço OpenAI, OpenRouter ou compatível personalizado que você escolher. A IIDEV não recebe esse conteúdo. A permissão pode ser revogada nos Ajustes. As chaves de API são armazenadas nas Chaves do macOS e podem permanecer no sistema após a desinstalação do App até que você as exclua.
        </p>
        <h3>Crossref e arquivos CSV de periódicos</h3>
        <p>
          A consulta de DOI pelo Crossref fica desativada por padrão. Se você ativá-la e escolher a ação, o texto da referência será enviado diretamente ao Crossref e o resultado poderá ficar em cache no Mac por até 30 dias. As consultas concluídas e as referências originais ficam armazenadas localmente até que você as exclua. O limite padrão é de 100 itens e pode ser ajustado entre 10 e 500. O App inclui uma pequena lista padrão UTD24 contendo apenas nomes de periódicos. SCIE, SSCI, AHCI, ESCI e AJG 2024 aceitam somente a importação de arquivos CSV obtidos legalmente por você. UTD24 e FT50 são baixados do GitHub apenas quando você toca em Baixar ou Atualizar. O GitHub ou sua CDN pode processar o endereço IP, o horário e os dados da solicitação como em uma solicitação de rede normal. Os arquivos CSV importados são analisados apenas no Mac e não são enviados.
        </p>
        <h3>Compras, site e contato</h3>
        <p>
          As compras voluntárias de apoio são processadas pela Apple e pelo StoreKit; a IIDEV não recebe os dados do cartão. O site do produto não usa cookies de publicidade nem análise comportamental, embora o provedor de hospedagem possa processar registros técnicos comuns de segurança e entrega. Para questões de privacidade, entre em contato pelo e-mail
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>.
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
          WOS Aide Bar ne nécessite aucun compte développeur et ne contient ni publicité, ni suivi, ni analyse opérée par le développeur, ni service de rapport de plantage exploité par le développeur. Le texte du presse-papiers, l’historique des recherches, les favoris, les réglages, les résultats de l’IA, l’historique des recherches DOI, les statistiques d’utilisation locales et les listes de revues importées ou téléchargées sont principalement conservés sur votre Mac et ne sont pas envoyés à IIDEV.
        </p>
        <p>
          Le texte du presse-papiers n’est lu localement que lorsque vous ouvrez le panneau de la barre des menus, l’actualisez explicitement ou utilisez le raccourci de recherche du presse-papiers. Lorsque vous lancez une recherche Web of Science, l’App demande à macOS d’ouvrir dans le navigateur par défaut une URL contenant la requête. L’activité du navigateur et la connexion sont traitées par les services concernés.
        </p>
        <h3>Statistiques d’utilisation locales</h3>
        <p>
          Les statistiques locales enregistrent uniquement des nombres agrégés, des dates, les noms des fournisseurs et des modèles, les champs WOS, l’utilisation des jetons et des indicateurs de réussite. Elles n’enregistrent pas les requêtes originales, le texte des références, les entrées de revues ni le texte du presse-papiers. L’activité quotidienne est conservée jusqu’à 400 jours et les totaux cumulés jusqu’à ce que vous les effaciez. Toutes les statistiques sont calculées et stockées uniquement sur ce Mac ; IIDEV ne reçoit ni n’utilise ces données.
        </p>
        <h3>Assistant IA</h3>
        <p>
          L’Assistant IA est facultatif. Avant d’envoyer une requête à distance, l’App affiche le fournisseur, le point de terminaison et les données qui seront envoyées, puis demande votre autorisation explicite. Si vous l’autorisez, la question de recherche, le contexte nécessaire au traitement de la requête et un identifiant de sécurité d’installation aléatoire (OpenAI uniquement) sont envoyés directement au service OpenAI, OpenRouter ou compatible personnalisé de votre choix. IIDEV ne reçoit pas ce contenu. Vous pouvez retirer l’autorisation dans Réglages. Les clés API sont stockées dans le trousseau macOS et peuvent rester dans le système après la désinstallation de l’App jusqu’à ce que vous les supprimiez.
        </p>
        <h3>Crossref et fichiers CSV de revues</h3>
        <p>
          La recherche de DOI Crossref est désactivée par défaut. Si vous l’activez et choisissez cette action, le texte de la référence est envoyé directement à Crossref et le résultat peut être mis en cache sur votre Mac pendant 30 jours au maximum. Les recherches terminées et les références originales sont conservées localement jusqu’à leur suppression. La limite par défaut est de 100 éléments et peut être réglée de 10 à 500. L’App comprend une petite liste UTD24 par défaut contenant uniquement des noms de revues. Pour SCIE, SSCI, AHCI, ESCI et AJG 2024, seuls les fichiers CSV que vous avez obtenus légalement peuvent être importés. UTD24 et FT50 ne sont téléchargés depuis GitHub que lorsque vous cliquez sur Télécharger ou Actualiser. GitHub ou son CDN peut traiter l’adresse IP, l’heure et les données de la requête comme pour toute requête réseau ordinaire. Les fichiers CSV importés sont analysés uniquement sur le Mac et ne sont pas téléversés.
        </p>
        <h3>Achats, site et contact</h3>
        <p>
          Les achats de soutien facultatifs sont traités par Apple et StoreKit ; IIDEV ne reçoit pas les données de votre carte. Le site du produit n’utilise ni cookies publicitaires ni analyse comportementale, mais l’hébergeur peut traiter les journaux techniques habituels de sécurité et de transmission. Pour toute question relative à la confidentialité, contactez
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>.
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
          WOS Aide Bar erfordert kein Entwicklerkonto und enthält keine Werbung, kein Tracking, keine vom Entwickler betriebene Analyse und keinen vom Entwickler betriebenen Absturzberichtsdienst. Zwischenablagetext, Suchverlauf, Favoriten, Einstellungen, KI-Ergebnisse, DOI-Abfrageverlauf, lokale Nutzungsstatistiken sowie importierte oder heruntergeladene Zeitschriftenlisten werden hauptsächlich auf deinem Mac gespeichert und nicht an IIDEV gesendet.
        </p>
        <p>
          Text aus der Zwischenablage wird nur dann lokal gelesen, wenn du das Menüleistenfenster öffnest, ausdrücklich aktualisierst oder das Tastaturkürzel für die Zwischenablagesuche verwendest. Wenn du eine Web-of-Science-Suche startest, fordert die App macOS auf, eine URL mit der Suchanfrage im Standardbrowser zu öffnen. Browseraktivitäten und Anmeldungen werden von den jeweiligen Diensten verarbeitet.
        </p>
        <h3>Lokale Nutzungsstatistiken</h3>
        <p>
          Lokale Statistiken erfassen nur zusammengefasste Nutzungszahlen, Datumsangaben, Anbieter- und Modellnamen, WOS-Felder, Token-Nutzung und Erfolgsindikatoren. Ursprüngliche Suchanfragen, Literaturangaben, Zeitschrifteneingaben oder Zwischenablagetexte werden nicht erfasst. Tägliche Aktivitäten werden bis zu 400 Tage und Gesamtstatistiken bis zu ihrer Löschung gespeichert. Alle Statistiken werden ausschließlich auf diesem Mac berechnet und gespeichert; IIDEV empfängt oder verwendet diese Daten nicht.
        </p>
        <h3>KI-Assistent</h3>
        <p>
          Der KI-Assistent ist optional. Vor dem Senden einer Remote-Anfrage zeigt die App den Anbieter, den Endpunkt und die zu übertragenden Daten an und bittet um deine ausdrückliche Erlaubnis. Nach deiner Zustimmung werden die Forschungsfrage, der zur Bearbeitung erforderliche Kontext und eine zufällige Installations-Sicherheitskennung (nur bei OpenAI) direkt an den von dir gewählten Dienst OpenAI, OpenRouter oder einen kompatiblen benutzerdefinierten Dienst gesendet. IIDEV empfängt diese Inhalte nicht. Du kannst die Erlaubnis in den Einstellungen widerrufen. API-Schlüssel werden im macOS-Schlüsselbund gespeichert und können nach der Deinstallation der App im System verbleiben, bis du sie löschst.
        </p>
        <h3>Crossref und Zeitschriften-CSV-Dateien</h3>
        <p>
          Die Crossref-DOI-Abfrage ist standardmäßig deaktiviert. Wenn du sie aktivierst und die Aktion auswählst, wird der Literaturangabentext direkt an Crossref gesendet und das Ergebnis kann bis zu 30 Tage auf deinem Mac zwischengespeichert werden. Abgeschlossene Abfragen und ursprüngliche Literaturangaben bleiben lokal gespeichert, bis du sie löschst. Das Standardlimit beträgt 100 Einträge und kann in den Einstellungen auf 10 bis 500 geändert werden. Die App enthält eine kleine UTD24-Standardliste, die nur Zeitschriftentitel enthält. Für SCIE, SSCI, AHCI, ESCI und AJG 2024 können nur von dir rechtmäßig bezogene CSV-Dateien importiert werden. UTD24 und FT50 werden nur dann von GitHub abgerufen, wenn du „Laden“ oder „Aktualisieren“ auswählst. GitHub oder dessen CDN kann wie bei einer normalen Netzwerkanfrage IP-Adresse, Zeitpunkt und Anfragedaten verarbeiten. Importierte CSV-Dateien werden nur auf dem Mac ausgewertet und nicht hochgeladen.
        </p>
        <h3>Käufe, Website und Kontakt</h3>
        <p>
          Freiwillige Unterstützungskäufe werden von Apple und StoreKit verarbeitet; IIDEV erhält keine Kartendaten. Die Produktwebsite verwendet keine Werbe-Cookies oder Verhaltensanalysen. Der Hostinganbieter kann jedoch übliche technische Sicherheits- und Übertragungsprotokolle verarbeiten. Bei Datenschutzfragen schreibe an
          <a href="mailto:iihciyekub@gmail.com"> iihciyekub@gmail.com</a>.
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
      intro="WOS Aide Bar has no developer account system, advertising, tracking, or developer-operated analytics. Most data stays on your Mac. Optional features contact clearly identified third-party services only when you choose to use them."
      updated="Effective July 27, 2026"
      translations={translations}
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
            Clipboard text, read when you open the menu-bar panel, explicitly
            refresh it, or invoke the clipboard-search shortcut.
          </li>
          <li>
            Search history, favorites, preferences, AI results, DOI query
            history, local usage statistics, and imported or downloaded journal
            lists.
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
        <p>
          Local usage statistics contain aggregate counts, dates, provider and
          model names, WOS field names, token usage, and success indicators—not
          raw search queries, reference text, journal input, or clipboard text.
          Daily activity is retained for up to 400 days; lifetime totals remain
          until you clear statistics. All statistics are calculated and stored
          on this Mac and are not received or used by IIDEV.
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
          Data is sent only to perform the feature you request. IIDEV does not
          authorize an integrated service to use App-transmitted data for
          advertising or tracking. IIDEV integrates only services whose
          published privacy and security commitments provide protection at
          least equivalent to this policy and applicable Apple requirements
          for data sent by the App. A custom endpoint is selected by you and is
          not controlled by IIDEV; grant permission only if its operator
          commits to at least equivalent protection.
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
          hash key. Completed DOI queries—including original references,
          candidates, and results—are stored locally until you remove them or
          clear DOI history in Settings. The saved-item limit is 100 by default
          and can be configured from 10 to 500.
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
          The App includes a small default UTD24 list containing journal titles
          only; it does not bundle the complete downloadable journal catalogs.
          You may import your own CSV files, which are parsed and stored
          locally. SCIE, SSCI, AHCI, ESCI, and AJG 2024 are available only
          through user-selected CSV import; you are responsible for obtaining
          and using those files lawfully. UTD24 and FT50 journal-title lists
          can be downloaded from the public{" "}
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
          Device-local data remains until you delete it in the App, an
          applicable retention limit removes it, you remove the App, or macOS
          removes it. Backup copies follow your Apple or backup-provider
          settings. AI credentials in Keychain are handled separately as
          described above and may survive App deletion or device migration.
          Revoking AI permission prevents future remote AI requests until you
          allow them again; it does not retrieve or delete data already
          processed by a third-party provider. Contact that provider for its
          account or data-rights procedures.
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
