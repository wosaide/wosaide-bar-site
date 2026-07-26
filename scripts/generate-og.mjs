import sharp from "sharp";

const width = 1536;
const height = 1024;

const backdrop = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#f5f0e8"/>
    <circle cx="1370" cy="60" r="390" fill="#163b42"/>
    <circle cx="1280" cy="1050" r="360" fill="#d6a34a"/>
    <circle cx="690" cy="890" r="330" fill="#b7d0c9" fill-opacity=".5"/>
    <path d="M0 860 C260 760 420 890 650 820" fill="none" stroke="#d6a34a" stroke-width="2" stroke-opacity=".6"/>
    <rect x="74" y="70" width="1388" height="884" rx="42" fill="none" stroke="#142326" stroke-opacity=".12"/>
    <text x="96" y="320" fill="#142326" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700">WOS Aide Bar</text>
    <text x="96" y="400" fill="#142326" font-family="Georgia, 'Times New Roman', serif" font-size="78" font-weight="600">
      <tspan x="96" dy="0">Search,</tspan>
      <tspan x="96" dy="82">without</tspan>
      <tspan x="96" dy="82">the syntax.</tspan>
    </text>
    <text x="99" y="700" fill="#667173" font-family="Arial, Helvetica, sans-serif" font-size="24">Native macOS research utility</text>
    <text x="99" y="752" fill="#e7653f" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2">REAL APP CAPTURES · VERSION 1.0</text>
  </svg>
`);

const appIcon = await sharp("public/brand/app-icon.png")
  .resize(112, 112)
  .png()
  .toBuffer();

const mainPanel = await sharp("public/screenshots/main-panel.png")
  .resize({ width: 760 })
  .extend({
    top: 14,
    bottom: 14,
    left: 14,
    right: 14,
    background: "#101d20",
  })
  .png()
  .toBuffer();

const quickSearch = await sharp("public/screenshots/manual-search.png")
  .resize({ width: 660 })
  .extend({
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    background: "#101d20",
  })
  .png()
  .toBuffer();

await sharp(backdrop)
  .composite([
    { input: appIcon, left: 96, top: 112 },
    { input: mainPanel, left: 696, top: 246 },
    { input: quickSearch, left: 790, top: 735 },
  ])
  .png()
  .toFile("public/og.png");
