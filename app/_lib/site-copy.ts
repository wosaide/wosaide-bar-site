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

export type DemoItem = {
  ariaLabel: string;
  badge: string;
  description: string;
  poster: string;
  stat: string;
  title: string;
  video: string;
};

export type DemoControls = {
  carouselLabel: string;
  next: string;
  pause: string;
  play: string;
  previous: string;
};

export type HomeCopy = {
  locale: SiteLocale;
  eyebrow: string;
  hero: string;
  heroSecondary: string;
  support: string;
  developer: string;
  assurances: string[];
  demoControls: DemoControls;
  demoItems: DemoItem[];
  metrics: Array<{ value: string; label: string }>;
  journalDemoCaption: string;
  journalDemoAriaLabel: string;
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

const screens = {
  main: {
    image: "/screenshots/main-panel.png",
    imageWidth: 900,
    imageHeight: 483,
  },
  search: {
    image: "/screenshots/manual-search.png",
    imageWidth: 714,
    imageHeight: 162,
  },
  assistant: {
    image: "/screenshots/assistant-settings.png",
    imageWidth: 900,
    imageHeight: 688,
  },
  catalogs: {
    image: "/screenshots/journal-catalogs.png",
    imageWidth: 900,
    imageHeight: 688,
  },
  journals: {
    image: "/screenshots/journal-list.png",
    imageWidth: 900,
    imageHeight: 688,
  },
  insights: {
    image: "/screenshots/local-insights.png",
    imageWidth: 900,
    imageHeight: 688,
  },
  general: {
    image: "/screenshots/settings-general.png",
    imageWidth: 900,
    imageHeight: 688,
  },
};

const demoMedia = {
  journal: {
    poster: "/videos/features/journal-match-poster.jpg",
    video: "/videos/features/journal-match.mp4",
  },
  doi: {
    poster: "/videos/features/doi-lookup-poster.jpg",
    video: "/videos/features/doi-lookup.mp4",
  },
  query: {
    poster: "/videos/features/ai-query-poster.jpg",
    video: "/videos/features/ai-query.mp4",
  },
  settings: {
    poster: "/videos/features/settings-workflow-04-v2-poster.jpg",
    video: "/videos/features/settings-workflow-04-v2.mp4",
  },
};

export const homeCopy: Record<SiteLocale, HomeCopy> = {
  en: {
    locale: "en",
    eyebrow: "Web of Science search companion for macOS",
    hero: "Make Web of Science search construction simple.",
    heroSecondary:
      "For researchers who already have Web of Science access: match journal initials to full titles, build and review WOS queries, and keep reusable searches organized on your Mac.",
    support: "Product guide & availability",
    developer: "See what it simplifies",
    assurances: [
      "Use your own WOS access",
      "Local-first data",
      "Review before opening",
    ],
    demoControls: {
      carouselLabel: "Four live product workflows",
      previous: "Previous demo",
      next: "Next demo",
      pause: "Pause demo",
      play: "Play demo",
    },
    demoItems: [
      {
        ...demoMedia.journal,
        badge: "Journal matching",
        title: "Type the initials. Get the indexed title.",
        description:
          "Enter an abbreviation such as IJIR. WOS Aide Bar matches the journal catalogs you installed—including SCIE, SSCI, AHCI, and ESCI—and surfaces the full title, ISSNs, publisher, language, and index coverage.",
        stat: "Local catalog match · no upload",
        ariaLabel:
          "WOS Aide Bar matching journal initials to indexed full titles and catalog details",
      },
      {
        ...demoMedia.doi,
        badge: "DOI resolution",
        title: "Paste the citation. Open the exact paper.",
        description:
          "Send a copied reference to Crossref only when you choose to. Review the matched title, DOI, authors, journal, and year, then open the DOI or continue directly to Web of Science.",
        stat: "Crossref on demand · history on Mac",
        ariaLabel:
          "WOS Aide Bar resolving a literature reference to a DOI and Web of Science result",
      },
      {
        ...demoMedia.query,
        badge: "AI query builder",
        title: "Ask naturally. Review a valid WOS expression.",
        description:
          "Turn a research question into a structured Web of Science query with OpenAI, OpenRouter, an OpenAI-compatible service, or a local LLM endpoint. Review the expression before opening the search.",
        stat: "Remote or local LLM · syntax reviewed",
        ariaLabel:
          "WOS Aide Bar converting natural language into a reviewed Web of Science query",
      },
      {
        ...demoMedia.settings,
        badge: "Settings & control",
        title: "Configure the app around your workflow.",
        description:
          "Choose providers and models, connect a local endpoint, manage consent, journal catalogs, personal lists, language, appearance, launch behavior, and shortcuts from one native settings window.",
        stat: "Keychain credentials · permission controls",
        ariaLabel:
          "Tour of WOS Aide Bar settings for AI providers, models, privacy, journal lists, appearance, and shortcuts",
      },
    ],
    metrics: [
      { value: "7", label: "optional journal catalog sources" },
      { value: "9", label: "interface languages" },
      { value: "3", label: "AI provider modes" },
      { value: "0", label: "analytics or tracking SDKs" },
    ],
    journalDemoCaption:
      "Live workflow · journal initials to the indexed full title",
    journalDemoAriaLabel:
      "Demonstration of WOS Aide Bar completing journal initials to a full Web of Science-indexed journal title",
    showcaseKicker: "The complete app",
    showcaseTitle: "One compact utility. The whole research loop.",
    showcaseIntro:
      "Every image below is a current capture from WOS Aide Bar 1.0—not a concept render.",
    showcaseItems: [
      {
        ...screens.main,
        badge: "Menu bar",
        title: "Everything starts one click away",
        description:
          "Open manual search, search the clipboard, revisit favorites and recent searches, manage your journal list, inspect local usage, or change language and theme from one compact panel.",
        stat: "Native menu-bar control center",
        imageAlt: "WOS Aide Bar main menu with search, favorites, settings, and local insights",
      },
      {
        ...screens.search,
        badge: "Quick search",
        title: "Search the way the source is written",
        description:
          "Enter a journal, topic, author, DOI, WOS ID, publication year, or advanced expression. Choose the field, generate an AI-assisted query, or open the search directly.",
        stat: "Guided fields · advanced syntax · DOI",
        imageAlt: "WOS Aide Bar floating manual search window",
      },
      {
        ...screens.assistant,
        badge: "AI assistant",
        title: "Your provider, model, and endpoint",
        description:
          "Use OpenAI, OpenRouter, an OpenAI-compatible service, or a local LM Studio-style endpoint. Models are discovered from the service, credentials stay in Keychain, and remote sharing requires consent.",
        stat: "Three-stage generation and review",
        imageAlt: "WOS Aide Bar assistant provider and model configuration",
      },
      {
        ...screens.catalogs,
        badge: "Journal catalogs",
        title: "Current lists, installed only when you need them",
        description:
          "Import your own SCIE, SSCI, AHCI, ESCI, or AJG 2024 CSV. Download UTD24 and FT50 title lists on request. Files are validated, indexed, and matched locally.",
        stat: "7 sources · local CSV processing",
        imageAlt: "WOS Aide Bar journal catalog manager",
      },
      {
        ...screens.journals,
        badge: "My Journal List",
        title: "A personal shortlist that stays editable",
        description:
          "Start with UTD24, enter one journal per line, or import a CSV. Your list remains immediately available from the floating search window.",
        stat: "Manual editing or CSV import",
        imageAlt: "WOS Aide Bar personal journal list editor",
      },
      {
        ...screens.insights,
        badge: "Local insights",
        title: "See your workflow without becoming telemetry",
        description:
          "Review searches, model calls, DOI lookups, journal completions, streaks, model success, tokens, and frequently used fields. Statistics are calculated and stored only on this Mac.",
        stat: "Private usage statistics",
        imageAlt: "WOS Aide Bar local insights calendar and activity statistics",
      },
      {
        ...screens.general,
        badge: "Made for macOS",
        title: "Tune it to your desktop",
        description:
          "Launch at login, switch among nine languages, follow the system appearance or choose light or dark, set global shortcuts, and size the quick-search window by percentage or pixels.",
        stat: "macOS 13+ · light and dark",
        imageAlt: "WOS Aide Bar general settings",
      },
    ],
    featureKicker: "Everything included",
    featureTitle: "Built around real literature-search work.",
    featureIntro:
      "The latest release covers the path from a rough idea or copied reference to a reusable, verifiable query.",
    features: [
      {
        title: "Clipboard to search",
        description:
          "Read the clipboard only when you ask, then turn journal titles, topics, authors, DOIs, WOS IDs, and advanced expressions into ready-to-open searches.",
      },
      {
        title: "Reviewed AI queries",
        description:
          "Translate a natural-language question into structured intent, generate broad, balanced, and precise candidates, then review them with a deterministic syntax validator.",
      },
      {
        title: "Provider freedom",
        description:
          "Choose OpenAI, OpenRouter, named compatible services, or a local model endpoint, with model discovery and manual model entry.",
      },
      {
        title: "Crossref DOI lookup",
        description:
          "Resolve one or several references only when you choose the Crossref action, with history and cache controls available in Settings.",
      },
      {
        title: "WOS field guidance",
        description:
          "Search by source, topic, author, organization, publication year, identifier, or a free-form advanced query without keeping field codes in memory.",
      },
      {
        title: "Favorites and history",
        description:
          "Save, rename, reopen, and organize useful searches locally. Recent work stays close without a cloud account.",
      },
      {
        title: "Journal intelligence",
        description:
          "Match installed journal lists locally, show index coverage and AJG ratings, and maintain a separate personal journal shortlist.",
      },
      {
        title: "A real macOS citizen",
        description:
          "Use a configurable global shortcut, pin or edge-hide the floating panel, launch at login, resize it, and switch language or appearance instantly.",
      },
    ],
    privacyKicker: "Local by design",
    privacyTitle: "Your research trail is not our dataset.",
    privacyItems: [
      {
        title: "User-initiated access",
        description:
          "Clipboard text is read locally only after you open the panel or explicitly refresh. Crossref lookup is off by default.",
      },
      {
        title: "Sandboxed local storage",
        description:
          "History, favorites, settings, installed catalogs, AI history, caches, and usage insights stay in the app sandbox; API keys stay in macOS Keychain.",
      },
      {
        title: "Transparent external services",
        description:
          "Before the first remote AI request, the app names the provider and endpoint and asks for permission. Requests go directly to that configured service, not through IIDEV.",
      },
    ],
    detailsKicker: "Clear before you install",
    detailsTitle: "Product, privacy, and support in plain language.",
    privacyPolicy: "Privacy Policy",
    terms: "Terms of Use",
    supportLabel: "Support",
    detailsDescriptions: [
      "App and website data practices",
      "License, external services, and purchases",
      "Setup, troubleshooting, and contact",
    ],
    ctaKicker: "WOS Aide Bar 1.0 · macOS 13 and later",
    ctaTitle: "Keep WOS search construction simple.",
    learnMore: "Read the access & setup guide",
  },
  "zh-Hans": {
    locale: "zh-Hans",
    eyebrow: "Web of Science 检索辅助与管理工具",
    hero: "让 Web of Science 检索构造更简单。",
    heroSecondary:
      "面向已拥有 Web of Science 使用权限的用户：匹配期刊首字母与完整刊名，构造并检查 WOS Query，并在 Mac 上管理常用检索。",
    support: "产品指南与获取方式",
    developer: "查看它简化了什么",
    assurances: [
      "使用你自己的 WOS 权限",
      "数据本地优先",
      "打开检索前可审核",
    ],
    demoControls: {
      carouselLabel: "四段真实功能演示",
      previous: "上一段演示",
      next: "下一段演示",
      pause: "暂停演示",
      play: "播放演示",
    },
    demoItems: [
      {
        ...demoMedia.journal,
        badge: "期刊智能匹配",
        title: "输入首字母，找到完整收录期刊名。",
        description:
          "输入 IJIR 等简称，WOS Aide Bar 会在你已安装的 SCIE、SSCI、AHCI、ESCI 等期刊目录中本地匹配，并显示完整刊名、ISSN、出版社、语言和收录范围。",
        stat: "本地目录匹配 · 无需上传",
        ariaLabel:
          "WOS Aide Bar 将期刊首字母简称匹配为完整收录刊名和目录信息",
      },
      {
        ...demoMedia.doi,
        badge: "DOI 文献解析",
        title: "粘贴参考文献，直达准确论文。",
        description:
          "只有在你主动选择时，才把复制的参考文献发送给 Crossref。确认匹配的标题、DOI、作者、期刊与年份，然后打开 DOI 或直接继续检索 Web of Science。",
        stat: "按需使用 Crossref · 历史留在 Mac",
        ariaLabel:
          "WOS Aide Bar 将参考文献解析为 DOI 并打开 Web of Science 结果",
      },
      {
        ...demoMedia.query,
        badge: "AI 检索式生成",
        title: "用自然语言提问，审核后再检索。",
        description:
          "使用 OpenAI、OpenRouter、兼容 OpenAI 的服务或本地 LLM 端点，把研究问题转换成结构化 Web of Science Query；确认表达式后再打开检索。",
        stat: "远程或本地 LLM · 语法复核",
        ariaLabel:
          "WOS Aide Bar 将自然语言转换为经审核的 Web of Science 检索表达式",
      },
      {
        ...demoMedia.settings,
        badge: "设置与控制",
        title: "让 App 适应你的科研工作流。",
        description:
          "在一个原生设置窗口中选择服务商与模型、连接本地端点、管理外发许可、期刊目录、个人清单、语言、外观、登录启动和快捷键。",
        stat: "钥匙串保存密钥 · 明确权限控制",
        ariaLabel:
          "WOS Aide Bar 的 AI 服务商、模型、隐私、期刊清单、外观和快捷键设置演示",
      },
    ],
    metrics: [
      { value: "7", label: "可选期刊目录来源" },
      { value: "9", label: "界面语言" },
      { value: "3", label: "AI 服务模式" },
      { value: "0", label: "分析或跟踪 SDK" },
    ],
    journalDemoCaption: "真实操作演示 · 从期刊首字母简写到收录全名",
    journalDemoAriaLabel:
      "WOS Aide Bar 将期刊首字母简写补全为 Web of Science 收录期刊全名的演示",
    showcaseKicker: "完整 App",
    showcaseTitle: "一个紧凑工具，覆盖完整科研检索流程。",
    showcaseIntro: "下面每张图都来自 WOS Aide Bar 1.0 的当前真实界面，不是概念渲染。",
    showcaseItems: [
      {
        ...screens.main,
        badge: "菜单栏",
        title: "所有功能，一点即达",
        description:
          "手动检索、剪贴板检索、收藏、最近记录、个人期刊列表、本地洞察、语言和主题，都集中在一个紧凑面板。",
        stat: "原生菜单栏控制中心",
        imageAlt: "WOS Aide Bar 主菜单，包含检索、收藏、设置和本地洞察",
      },
      {
        ...screens.search,
        badge: "快速检索",
        title: "按资料本来的样子输入",
        description:
          "输入期刊、主题、作者、DOI、WOS ID、出版年或高级表达式；选择字段、生成 AI 检索式，或直接打开检索。",
        stat: "引导字段 · 高级语法 · DOI",
        imageAlt: "WOS Aide Bar 浮动手动检索窗口",
      },
      {
        ...screens.assistant,
        badge: "AI 助手",
        title: "服务商、模型与端点由你决定",
        description:
          "支持 OpenAI、OpenRouter、兼容 OpenAI 的服务与本地 LM Studio 类端点；自动发现模型，密钥存入钥匙串，远程外发前先征得同意。",
        stat: "三阶段生成与审核",
        imageAlt: "WOS Aide Bar AI 服务商与模型配置",
      },
      {
        ...screens.catalogs,
        badge: "期刊目录",
        title: "只在需要时安装最新清单",
        description:
          "导入你自行取得的 SCIE、SSCI、AHCI、ESCI 或 AJG 2024 CSV；UTD24 与 FT50 名称清单可按需下载。所有文件都在本机验证、索引与匹配。",
        stat: "7 个来源 · 本地 CSV 处理",
        imageAlt: "WOS Aide Bar 期刊目录管理器",
      },
      {
        ...screens.journals,
        badge: "我的期刊列表",
        title: "可随时编辑的个人期刊清单",
        description:
          "从 UTD24 开始、每行输入一本期刊，或导入 CSV；你的清单可从浮动检索窗口直接打开。",
        stat: "手动编辑或 CSV 导入",
        imageAlt: "WOS Aide Bar 个人期刊列表编辑器",
      },
      {
        ...screens.insights,
        badge: "本地洞察",
        title: "看清使用方式，不把它变成遥测数据",
        description:
          "查看检索、模型调用、DOI 查询、期刊补全、连续使用、模型成功率、tokens 与常用字段；统计只在本机计算和保存。",
        stat: "私密的个人使用统计",
        imageAlt: "WOS Aide Bar 本地洞察日历和活动统计",
      },
      {
        ...screens.general,
        badge: "为 macOS 而生",
        title: "按自己的桌面习惯调整",
        description:
          "登录时启动、九种语言、跟随系统或固定浅色/深色、全局快捷键，以及按百分比或像素设置快速检索窗口宽度。",
        stat: "macOS 13+ · 浅色与深色",
        imageAlt: "WOS Aide Bar 通用设置",
      },
    ],
    featureKicker: "完整功能",
    featureTitle: "围绕真实文献检索流程构建。",
    featureIntro: "从模糊想法或复制的参考文献，到可复用、可验证的检索式，最新版覆盖完整路径。",
    features: [
      {
        title: "剪贴板直达检索",
        description: "仅在你要求时读取剪贴板，把期刊、主题、作者、DOI、WOS ID 与高级表达式变成可打开的检索。",
      },
      {
        title: "经审核的 AI 检索式",
        description: "把自然语言问题转为结构化意图，生成宽泛、平衡、精确三类候选，再用确定性语法验证器复核。",
      },
      {
        title: "自由选择 AI 服务",
        description: "使用 OpenAI、OpenRouter、命名的兼容服务或本地模型端点，支持模型发现与手动填写。",
      },
      {
        title: "Crossref DOI 解析",
        description: "只有选择 Crossref 操作时才解析一条或多条参考文献；设置中可管理历史与缓存。",
      },
      {
        title: "WOS 字段引导",
        description: "按来源、主题、作者、机构、出版年、标识符检索，或直接输入高级检索式，无需背字段代码。",
      },
      {
        title: "收藏与历史",
        description: "在本机保存、重命名、重新打开并整理检索；无需云端账户，最近工作始终触手可及。",
      },
      {
        title: "期刊智能匹配",
        description: "本地匹配已安装目录，显示索引收录与 AJG 等级，并维护独立的个人期刊清单。",
      },
      {
        title: "真正的 macOS 体验",
        description: "自定义全局快捷键，固定或贴边隐藏浮动面板，登录时启动，调整尺寸，并即时切换语言与外观。",
      },
    ],
    privacyKicker: "本地优先",
    privacyTitle: "你的科研轨迹，不是我们的数据集。",
    privacyItems: [
      {
        title: "仅在用户操作时访问",
        description: "只有打开面板或主动刷新时才在本机读取剪贴板；Crossref 查询默认关闭。",
      },
      {
        title: "沙盒内本地保存",
        description: "历史、收藏、设置、已安装目录、AI 历史、缓存与使用洞察留在 App 沙盒；API 密钥保存在 macOS 钥匙串。",
      },
      {
        title: "外部服务清楚透明",
        description: "首次远程 AI 请求前，App 会说明服务商与端点并征得许可；请求直达所配置服务，不经 IIDEV 中转。",
      },
    ],
    detailsKicker: "安装前清楚了解",
    detailsTitle: "用清晰语言说明产品、隐私与支持。",
    privacyPolicy: "隐私政策",
    terms: "使用条款",
    supportLabel: "支持",
    detailsDescriptions: ["App 与网站的数据处理方式", "许可、外部服务与购买", "设置、故障排查与联系"],
    ctaKicker: "WOS Aide Bar 1.0 · 适用于 macOS 13 及更高版本",
    ctaTitle: "让 WOS 检索构造始终简单。",
    learnMore: "查看使用前提与设置",
  },
  "zh-Hant": {
    locale: "zh-Hant",
    eyebrow: "Web of Science 檢索輔助與管理工具",
    hero: "讓 Web of Science 檢索構造更簡單。",
    heroSecondary:
      "面向已擁有 Web of Science 使用權限的使用者：配對期刊首字母與完整刊名，構造並檢查 WOS Query，並在 Mac 上管理常用檢索。",
    support: "產品指南與取得方式",
    developer: "查看它簡化了什麼",
    assurances: [
      "使用你自己的 WOS 權限",
      "資料本機優先",
      "開啟檢索前可審核",
    ],
    demoControls: {
      carouselLabel: "四段真實功能示範",
      previous: "上一段示範",
      next: "下一段示範",
      pause: "暫停示範",
      play: "播放示範",
    },
    demoItems: [
      {
        ...demoMedia.journal,
        badge: "期刊智慧配對",
        title: "輸入首字母，找到完整收錄期刊名。",
        description:
          "輸入 IJIR 等簡稱，WOS Aide Bar 會在你已安裝的 SCIE、SSCI、AHCI、ESCI 等期刊目錄中於本機配對，並顯示完整刊名、ISSN、出版社、語言和收錄範圍。",
        stat: "本機目錄配對 · 無需上傳",
        ariaLabel:
          "WOS Aide Bar 將期刊首字母簡稱配對為完整收錄刊名和目錄資訊",
      },
      {
        ...demoMedia.doi,
        badge: "DOI 文獻解析",
        title: "貼上參考文獻，直達準確論文。",
        description:
          "只有在你主動選擇時，才把複製的參考文獻傳送給 Crossref。確認配對的標題、DOI、作者、期刊與年份，然後開啟 DOI 或直接繼續檢索 Web of Science。",
        stat: "按需使用 Crossref · 歷史留在 Mac",
        ariaLabel:
          "WOS Aide Bar 將參考文獻解析為 DOI 並開啟 Web of Science 結果",
      },
      {
        ...demoMedia.query,
        badge: "AI 檢索式生成",
        title: "用自然語言提問，審核後再檢索。",
        description:
          "使用 OpenAI、OpenRouter、相容 OpenAI 的服務或本機 LLM 端點，把研究問題轉換成結構化 Web of Science Query；確認運算式後再開啟檢索。",
        stat: "遠端或本機 LLM · 語法覆核",
        ariaLabel:
          "WOS Aide Bar 將自然語言轉換為經審核的 Web of Science 檢索運算式",
      },
      {
        ...demoMedia.settings,
        badge: "設定與控制",
        title: "讓 App 配合你的科研工作流程。",
        description:
          "在一個原生設定視窗中選擇服務商與模型、連接本機端點、管理外傳許可、期刊目錄、個人清單、語言、外觀、登入啟動和快速鍵。",
        stat: "鑰匙圈保存密鑰 · 明確權限控制",
        ariaLabel:
          "WOS Aide Bar 的 AI 服務商、模型、隱私、期刊清單、外觀和快速鍵設定示範",
      },
    ],
    metrics: [
      { value: "7", label: "可選期刊目錄來源" },
      { value: "9", label: "介面語言" },
      { value: "3", label: "AI 服務模式" },
      { value: "0", label: "分析或追蹤 SDK" },
    ],
    journalDemoCaption: "真實操作示範 · 從期刊首字母簡寫到收錄全名",
    journalDemoAriaLabel:
      "WOS Aide Bar 將期刊首字母簡寫補全為 Web of Science 收錄期刊全名的示範",
    showcaseKicker: "完整 App",
    showcaseTitle: "一個緊湊工具，涵蓋完整科研檢索流程。",
    showcaseIntro: "下方每張圖都來自 WOS Aide Bar 1.0 的目前真實介面，不是概念渲染。",
    showcaseItems: [
      {
        ...screens.main,
        badge: "選單列",
        title: "所有功能，一點即達",
        description:
          "手動檢索、剪貼簿檢索、收藏、最近記錄、個人期刊清單、本機洞察、語言與主題，都集中在一個緊湊面板。",
        stat: "原生選單列控制中心",
        imageAlt: "WOS Aide Bar 主選單，包含檢索、收藏、設定和本機洞察",
      },
      {
        ...screens.search,
        badge: "快速檢索",
        title: "按資料原本的樣子輸入",
        description:
          "輸入期刊、主題、作者、DOI、WOS ID、出版年或進階運算式；選擇欄位、生成 AI 檢索式，或直接開啟檢索。",
        stat: "引導欄位 · 進階語法 · DOI",
        imageAlt: "WOS Aide Bar 浮動手動檢索視窗",
      },
      {
        ...screens.assistant,
        badge: "AI 助手",
        title: "服務商、模型與端點由你決定",
        description:
          "支援 OpenAI、OpenRouter、相容 OpenAI 的服務與本機 LM Studio 類端點；自動探索模型，密鑰存入鑰匙圈，遠端外傳前先徵得同意。",
        stat: "三階段生成與審核",
        imageAlt: "WOS Aide Bar AI 服務商與模型設定",
      },
      {
        ...screens.catalogs,
        badge: "期刊目錄",
        title: "只在需要時安裝最新清單",
        description:
          "匯入你自行取得的 SCIE、SSCI、AHCI、ESCI 或 AJG 2024 CSV；UTD24 與 FT50 名稱清單可按需下載。所有檔案都在本機驗證、索引與配對。",
        stat: "7 個來源 · 本機 CSV 處理",
        imageAlt: "WOS Aide Bar 期刊目錄管理器",
      },
      {
        ...screens.journals,
        badge: "我的期刊清單",
        title: "可隨時編輯的個人期刊清單",
        description:
          "從 UTD24 開始、每行輸入一本期刊，或匯入 CSV；你的清單可從浮動檢索視窗直接開啟。",
        stat: "手動編輯或 CSV 匯入",
        imageAlt: "WOS Aide Bar 個人期刊清單編輯器",
      },
      {
        ...screens.insights,
        badge: "本機洞察",
        title: "看清使用方式，不把它變成遙測資料",
        description:
          "查看檢索、模型呼叫、DOI 查詢、期刊補全、連續使用、模型成功率、tokens 與常用欄位；統計只在本機計算和保存。",
        stat: "私密的個人使用統計",
        imageAlt: "WOS Aide Bar 本機洞察日曆和活動統計",
      },
      {
        ...screens.general,
        badge: "為 macOS 而生",
        title: "按自己的桌面習慣調整",
        description:
          "登入時啟動、九種語言、跟隨系統或固定淺色／深色、全域快速鍵，以及按百分比或像素設定快速檢索視窗寬度。",
        stat: "macOS 13+ · 淺色與深色",
        imageAlt: "WOS Aide Bar 一般設定",
      },
    ],
    featureKicker: "完整功能",
    featureTitle: "圍繞真實文獻檢索流程建立。",
    featureIntro: "從模糊想法或複製的參考文獻，到可重用、可驗證的檢索式，最新版涵蓋完整路徑。",
    features: [
      {
        title: "剪貼簿直達檢索",
        description: "僅在你要求時讀取剪貼簿，把期刊、主題、作者、DOI、WOS ID 與進階運算式變成可開啟的檢索。",
      },
      {
        title: "經審核的 AI 檢索式",
        description: "把自然語言問題轉為結構化意圖，生成寬泛、平衡、精確三類候選，再用確定性語法驗證器覆核。",
      },
      {
        title: "自由選擇 AI 服務",
        description: "使用 OpenAI、OpenRouter、命名的相容服務或本機模型端點，支援模型探索與手動填寫。",
      },
      {
        title: "Crossref DOI 解析",
        description: "只有選擇 Crossref 操作時才解析一條或多條參考文獻；設定中可管理歷史與快取。",
      },
      {
        title: "WOS 欄位引導",
        description: "按來源、主題、作者、機構、出版年、識別碼檢索，或直接輸入進階檢索式，無需背欄位代碼。",
      },
      {
        title: "收藏與歷史",
        description: "在本機保存、重新命名、再次開啟並整理檢索；無需雲端帳戶，最近工作始終觸手可及。",
      },
      {
        title: "期刊智慧配對",
        description: "本機配對已安裝目錄，顯示索引收錄與 AJG 等級，並維護獨立的個人期刊清單。",
      },
      {
        title: "真正的 macOS 體驗",
        description: "自訂全域快速鍵，固定或貼邊隱藏浮動面板，登入時啟動，調整尺寸，並即時切換語言與外觀。",
      },
    ],
    privacyKicker: "本機優先",
    privacyTitle: "你的科研軌跡，不是我們的資料集。",
    privacyItems: [
      {
        title: "僅在使用者操作時存取",
        description: "只有開啟面板或主動重新整理時才在本機讀取剪貼簿；Crossref 查詢預設關閉。",
      },
      {
        title: "沙盒內本機保存",
        description: "歷史、收藏、設定、已安裝目錄、AI 歷史、快取與使用洞察留在 App 沙盒；API 密鑰保存在 macOS 鑰匙圈。",
      },
      {
        title: "外部服務清楚透明",
        description: "首次遠端 AI 請求前，App 會說明服務商與端點並徵得許可；請求直達所設定服務，不經 IIDEV 中轉。",
      },
    ],
    detailsKicker: "安裝前清楚瞭解",
    detailsTitle: "用清晰語言說明產品、隱私與支援。",
    privacyPolicy: "隱私權政策",
    terms: "使用條款",
    supportLabel: "支援",
    detailsDescriptions: ["App 與網站的資料處理方式", "授權、外部服務與購買", "設定、疑難排解與聯絡"],
    ctaKicker: "WOS Aide Bar 1.0 · 適用於 macOS 13 及更高版本",
    ctaTitle: "讓 WOS 檢索構造始終簡單。",
    learnMore: "查看使用前提與設定",
  },
};
