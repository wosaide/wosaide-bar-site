export type SiteLocale = "en" | "zh-Hans" | "zh-Hant";

export type ShowcaseItem = {
  badge: string;
  description: string;
  image: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  stat: string;
  title: string;
};

export type HomeCopy = {
  locale: SiteLocale;
  eyebrow: string;
  hero: string;
  heroSecondary: string;
  support: string;
  developer: string;
  assurances: string[];
  metrics: Array<{ value: string; label: string }>;
  showcaseKicker: string;
  showcaseTitle: string;
  showcaseIntro: string;
  showcaseItems: ShowcaseItem[];
  featureKicker: string;
  featureTitle: string;
  featureIntro: string;
  features: Array<{ title: string; description: string }>;
  privacyKicker: string;
  privacyTitle: string;
  privacyItems: Array<{ title: string; description: string }>;
  detailsKicker: string;
  detailsTitle: string;
  privacyPolicy: string;
  terms: string;
  supportLabel: string;
  detailsDescriptions: string[];
  ctaKicker: string;
  ctaTitle: string;
  learnMore: string;
};

const sharedImages = {
  autocomplete: {
    image: "/app-usage.jpeg",
    imageWidth: 500,
    imageHeight: 617,
  },
  core: {
    image: "/feature-core-catalog.jpeg",
    imageWidth: 900,
    imageHeight: 608,
  },
  quickList: {
    image: "/feature-my-list.jpeg",
    imageWidth: 500,
    imageHeight: 617,
  },
  listEditor: {
    image: "/feature-list-editor.jpeg",
    imageWidth: 900,
    imageHeight: 608,
  },
  shortcut: {
    image: "/feature-shortcut.jpeg",
    imageWidth: 900,
    imageHeight: 608,
  },
};

export const homeCopy: Record<SiteLocale, HomeCopy> = {
  en: {
    locale: "en",
    eyebrow: "Native macOS menu-bar research utility",
    hero:
      "Search Web of Science without memorizing the syntax—and keep your journal tools one shortcut away.",
    heroSecondary:
      "Autocomplete journal names, browse 20,000+ WOS Core journals, and keep a personal journal list ready on your Mac.",
    support: "Get support",
    developer: "Developer profile ↗",
    assurances: ["No account", "No analytics", "No tracking"],
    metrics: [
      { value: "20K+", label: "supported WOS Core journals" },
      { value: "24,146", label: "catalog records across four indexes" },
      { value: "3", label: "interface languages" },
      { value: "100%", label: "local history and journal lists" },
    ],
    showcaseKicker: "Explore the app",
    showcaseTitle: "More than a journal search box.",
    showcaseIntro:
      "Switch between real WOS Aide Bar screens to see how each part supports a faster research workflow.",
    showcaseItems: [
      {
        ...sharedImages.autocomplete,
        badge: "Autocomplete",
        title: "Journal-aware suggestions",
        description:
          "Start typing a journal title and get an immediate match with ISSN and SCIE, SSCI, AHCI, or ESCI coverage.",
        stat: "Suggestions as you type",
        imageAlt:
          "WOS Aide Bar matching Nature Human Behaviour with SCIE and SSCI badges",
      },
      {
        ...sharedImages.core,
        badge: "WOS Core",
        title: "20,000+ journals built in",
        description:
          "Enable the SCIE, SSCI, AHCI, and ESCI lists you need. Replace any list with a current CSV while all processing stays local.",
        stat: "24,146 catalog records",
        imageAlt:
          "WOS Aide Bar settings showing SCIE, SSCI, AHCI, and ESCI journal catalogs",
      },
      {
        ...sharedImages.quickList,
        badge: "Quick list",
        title: "Your journals, one click away",
        description:
          "Open My Journal List directly from the search panel and launch a favorite journal in Web of Science without retyping it.",
        stat: "Fast personal access",
        imageAlt:
          "WOS Aide Bar My Journal List popover with a personal collection of journals",
      },
      {
        ...sharedImages.listEditor,
        badge: "Custom lists",
        title: "Make the journal list yours",
        description:
          "Enter one journal per line, restore the built-in UTD24 list, or import a CSV using familiar journal-title headings.",
        stat: "Manual entry or CSV import",
        imageAlt:
          "WOS Aide Bar custom journal list editor with import and save controls",
      },
      {
        ...sharedImages.shortcut,
        badge: "Always ready",
        title: "Call it from any app",
        description:
          "Use a configurable global shortcut to show or hide the floating search window. Move it to a desktop edge for automatic standby.",
        stat: "Default shortcut: ⌥ Space",
        imageAlt:
          "WOS Aide Bar global shortcut settings for the floating Quick Search Window",
      },
    ],
    featureKicker: "Built for research momentum",
    featureTitle: "A focused companion for everyday literature work.",
    featureIntro:
      "The app handles repetitive query structure and keeps your working tools close.",
    features: [
      {
        title: "Clipboard to query",
        description:
          "Turn copied journal titles, topics, authors, DOIs, WOS IDs, or advanced expressions into ready-to-open searches.",
      },
      {
        title: "Favorites and history",
        description:
          "Save useful searches, rename favorites, and reopen recent work without a cloud account.",
      },
      {
        title: "Guided or advanced",
        description:
          "Choose a Web of Science field for everyday searches or enter a free-form advanced query when precision matters.",
      },
      {
        title: "Made for the menu bar",
        description:
          "Launch at login, switch appearance, and keep the floating panel pinned or edge-hidden to match your desktop workflow.",
      },
    ],
    privacyKicker: "Designed for privacy",
    privacyTitle: "Your research trail stays yours.",
    privacyItems: [
      {
        title: "User-initiated clipboard access",
        description:
          "Clipboard text is read locally only when you open the panel or explicitly refresh it.",
      },
      {
        title: "Local app storage",
        description:
          "History, favorites, settings, and imported journal lists remain in the app sandbox.",
      },
      {
        title: "No profiling",
        description:
          "No advertising, analytics, tracking, or developer-operated crash-reporting SDK.",
      },
    ],
    detailsKicker: "Clear before you install",
    detailsTitle: "Product and legal details, in plain language.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Use",
    supportLabel: "Support",
    detailsDescriptions: [
      "App and website data practices",
      "License, external services, and purchases",
      "Help, troubleshooting, and contact",
    ],
    ctaKicker: "Made for macOS 13 and later",
    ctaTitle: "Keep the search close. Keep the data local.",
    learnMore: "Learn more",
  },
  "zh-Hans": {
    locale: "zh-Hans",
    eyebrow: "原生 macOS 菜单栏科研工具",
    hero: "无需记忆复杂语法，也能快速检索 Web of Science；常用期刊工具，一个快捷键即可呼出。",
    heroSecondary:
      "自动补全期刊名称，覆盖 20,000+ 本 WOS Core 期刊，并可在 Mac 上维护自己的期刊列表。",
    support: "获取支持",
    developer: "开发者主页 ↗",
    assurances: ["无需账户", "无分析统计", "无跟踪"],
    metrics: [
      { value: "20K+", label: "支持的 WOS Core 期刊" },
      { value: "24,146", label: "四大索引目录记录" },
      { value: "3", label: "界面语言" },
      { value: "100%", label: "本地历史与期刊列表" },
    ],
    showcaseKicker: "探索 App",
    showcaseTitle: "不只是一个期刊检索框。",
    showcaseIntro: "切换下面的真实 App 界面，查看每项功能如何加快日常科研检索。",
    showcaseItems: [
      {
        ...sharedImages.autocomplete,
        badge: "自动补全",
        title: "懂期刊名称的输入提示",
        description:
          "输入期刊名称时即时匹配，同时显示 ISSN 与 SCIE、SSCI、AHCI、ESCI 收录信息。",
        stat: "边输入，边匹配",
        imageAlt: "WOS Aide Bar 自动匹配 Nature Human Behaviour 并显示 SCIE 与 SSCI",
      },
      {
        ...sharedImages.core,
        badge: "WOS Core",
        title: "内置 20,000+ 本期刊",
        description:
          "按需启用 SCIE、SSCI、AHCI、ESCI，也可用最新 CSV 替换任一目录；所有处理都在本机完成。",
        stat: "24,146 条目录记录",
        imageAlt: "WOS Aide Bar 显示四大 WOS Core 期刊目录",
      },
      {
        ...sharedImages.quickList,
        badge: "快速查看",
        title: "自己的期刊，一点即开",
        description:
          "直接在检索窗口打开“我的期刊列表”，无需重复输入即可进入 Web of Science。",
        stat: "个人期刊快速入口",
        imageAlt: "WOS Aide Bar 我的期刊列表快速查看窗口",
      },
      {
        ...sharedImages.listEditor,
        badge: "自定义列表",
        title: "期刊列表由你定义",
        description:
          "每行输入一本期刊，也可恢复内置 UTD24 列表，或从含期刊名称字段的 CSV 导入。",
        stat: "手动编辑或 CSV 导入",
        imageAlt: "WOS Aide Bar 自定义期刊列表编辑界面",
      },
      {
        ...sharedImages.shortcut,
        badge: "随时待命",
        title: "从任何 App 快捷呼出",
        description:
          "自定义全局快捷键，显示或隐藏浮动检索窗口；移到桌面边缘后可自动收起待命。",
        stat: "默认快捷键：⌥ Space",
        imageAlt: "WOS Aide Bar 浮动检索窗口全局快捷键设置",
      },
    ],
    featureKicker: "为科研节奏而设计",
    featureTitle: "日常文献工作中的专注型助手。",
    featureIntro: "把重复的检索结构交给 App，把注意力留给真正重要的文献。",
    features: [
      {
        title: "剪贴板直达检索",
        description: "把期刊、主题、作者、DOI、WOS ID 或高级表达式快速转成可打开的检索。",
      },
      {
        title: "收藏与历史记录",
        description: "保存常用检索、重命名收藏并重新打开最近任务，全程无需云端账户。",
      },
      {
        title: "引导式或高级检索",
        description: "日常使用可选择字段，需要精确控制时也可直接输入高级检索式。",
      },
      {
        title: "为菜单栏而生",
        description: "支持登录时启动、外观切换，并可将浮动窗口固定或在桌面边缘自动隐藏。",
      },
    ],
    privacyKicker: "隐私优先",
    privacyTitle: "你的科研轨迹，只属于你。",
    privacyItems: [
      {
        title: "仅在用户操作时读取剪贴板",
        description: "只有打开面板或主动刷新时，App 才在本机读取剪贴板文本。",
      },
      {
        title: "数据保存在本机",
        description: "历史、收藏、设置和导入的期刊列表都保留在 App 沙盒中。",
      },
      {
        title: "不建立用户画像",
        description: "无广告、无分析统计、无跟踪，也没有开发者运营的崩溃上报 SDK。",
      },
    ],
    detailsKicker: "安装前清楚了解",
    detailsTitle: "产品与法律信息，用清晰的语言说明。",
    privacyPolicy: "隐私政策",
    terms: "使用条款",
    supportLabel: "支持",
    detailsDescriptions: ["App 与网站的数据处理方式", "许可、外部服务与购买", "帮助、故障排查与联系"],
    ctaKicker: "适用于 macOS 13 及更高版本",
    ctaTitle: "检索近在手边，数据留在本机。",
    learnMore: "了解更多",
  },
  "zh-Hant": {
    locale: "zh-Hant",
    eyebrow: "原生 macOS 選單列科研工具",
    hero: "無需記憶複雜語法，也能快速檢索 Web of Science；常用期刊工具，一個快速鍵即可叫出。",
    heroSecondary:
      "自動補全期刊名稱，涵蓋 20,000+ 本 WOS Core 期刊，並可在 Mac 上維護自己的期刊列表。",
    support: "取得支援",
    developer: "開發者首頁 ↗",
    assurances: ["無需帳戶", "無分析統計", "無追蹤"],
    metrics: [
      { value: "20K+", label: "支援的 WOS Core 期刊" },
      { value: "24,146", label: "四大索引目錄記錄" },
      { value: "3", label: "介面語言" },
      { value: "100%", label: "本機歷史與期刊列表" },
    ],
    showcaseKicker: "探索 App",
    showcaseTitle: "不只是一個期刊檢索框。",
    showcaseIntro: "切換下方真實 App 介面，查看每項功能如何加快日常科研檢索。",
    showcaseItems: [
      {
        ...sharedImages.autocomplete,
        badge: "自動補全",
        title: "懂期刊名稱的輸入提示",
        description:
          "輸入期刊名稱時即時配對，同時顯示 ISSN 與 SCIE、SSCI、AHCI、ESCI 收錄資訊。",
        stat: "邊輸入，邊配對",
        imageAlt: "WOS Aide Bar 自動配對 Nature Human Behaviour 並顯示 SCIE 與 SSCI",
      },
      {
        ...sharedImages.core,
        badge: "WOS Core",
        title: "內建 20,000+ 本期刊",
        description:
          "按需啟用 SCIE、SSCI、AHCI、ESCI，也可用最新 CSV 取代任一目錄；所有處理都在本機完成。",
        stat: "24,146 筆目錄記錄",
        imageAlt: "WOS Aide Bar 顯示四大 WOS Core 期刊目錄",
      },
      {
        ...sharedImages.quickList,
        badge: "快速查看",
        title: "自己的期刊，一點即開",
        description:
          "直接在檢索視窗開啟「我的期刊列表」，無需重複輸入即可進入 Web of Science。",
        stat: "個人期刊快速入口",
        imageAlt: "WOS Aide Bar 我的期刊列表快速查看視窗",
      },
      {
        ...sharedImages.listEditor,
        badge: "自訂列表",
        title: "期刊列表由你定義",
        description:
          "每行輸入一本期刊，也可恢復內建 UTD24 列表，或從含期刊名稱欄位的 CSV 匯入。",
        stat: "手動編輯或 CSV 匯入",
        imageAlt: "WOS Aide Bar 自訂期刊列表編輯介面",
      },
      {
        ...sharedImages.shortcut,
        badge: "隨時待命",
        title: "從任何 App 快速叫出",
        description:
          "自訂全域快速鍵，顯示或隱藏浮動檢索視窗；移到桌面邊緣後可自動收起待命。",
        stat: "預設快速鍵：⌥ Space",
        imageAlt: "WOS Aide Bar 浮動檢索視窗全域快速鍵設定",
      },
    ],
    featureKicker: "為科研節奏而設計",
    featureTitle: "日常文獻工作中的專注型助手。",
    featureIntro: "把重複的檢索結構交給 App，把注意力留給真正重要的文獻。",
    features: [
      {
        title: "剪貼簿直達檢索",
        description: "把期刊、主題、作者、DOI、WOS ID 或進階運算式快速轉成可開啟的檢索。",
      },
      {
        title: "收藏與歷史記錄",
        description: "儲存常用檢索、重新命名收藏並開啟最近工作，全程無需雲端帳戶。",
      },
      {
        title: "引導式或進階檢索",
        description: "日常使用可選擇欄位，需要精確控制時也可直接輸入進階檢索式。",
      },
      {
        title: "為選單列而生",
        description: "支援登入時啟動、外觀切換，並可將浮動視窗固定或在桌面邊緣自動隱藏。",
      },
    ],
    privacyKicker: "隱私優先",
    privacyTitle: "你的科研軌跡，只屬於你。",
    privacyItems: [
      {
        title: "僅在使用者操作時讀取剪貼簿",
        description: "只有開啟面板或主動重新整理時，App 才在本機讀取剪貼簿文字。",
      },
      {
        title: "資料保存在本機",
        description: "歷史、收藏、設定和匯入的期刊列表都保留在 App 沙盒中。",
      },
      {
        title: "不建立使用者輪廓",
        description: "無廣告、無分析統計、無追蹤，也沒有開發者營運的崩潰回報 SDK。",
      },
    ],
    detailsKicker: "安裝前清楚瞭解",
    detailsTitle: "產品與法律資訊，以清晰語言說明。",
    privacyPolicy: "隱私權政策",
    terms: "使用條款",
    supportLabel: "支援",
    detailsDescriptions: ["App 與網站的資料處理方式", "授權、外部服務與購買", "協助、疑難排解與聯絡"],
    ctaKicker: "適用於 macOS 13 及更高版本",
    ctaTitle: "檢索近在手邊，資料留在本機。",
    learnMore: "瞭解更多",
  },
};
