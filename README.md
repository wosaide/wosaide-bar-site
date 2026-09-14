# WOS Aide Bar website

Official product, privacy, terms, and support site for the WOS Aide Bar macOS
app.

## Public routes

- `/` — English product page
- `/zh-hans/` — Simplified Chinese product page
- `/zh-hant/` — Traditional Chinese product page
- `/privacy/` — privacy policy with summaries in all nine app languages
- `/terms/` — supplemental terms with summaries in all nine app languages
- `/support/` — support and troubleshooting

The single production website is:
<https://wosaide.com/bar/>

## Product claims

Website copy must stay aligned with the shipping app:

- opening journal-catalog settings may check the public GitHub commit/version
  status without research content; repository-backed Web of Science
  SCIE/SSCI/AHCI/ESCI, Scopus, ScienceDirect, PubMed/NLM, EI Compendex, CNKI
  北大核心/CSSCI/CSSCI-扩展版, AJG 2024, UTD24, and FT50 CSV files are
  downloaded only after an explicit Download, Update, or Refresh action;
- compatible user-selected journal CSV files are processed locally and are not
  uploaded;
- AI provider profiles can be used for optional translation and optional LLM
  formatting of locally recognized screenshot reference text; the app does not
  generate Web of Science queries with an LLM;
- remote translation content requires explicit user permission; remote
  screenshot-reference formatting uses a separate purpose/endpoint consent;
- text/reference/translation screenshot images are captured and OCR-processed
  locally after explicit user action and are not uploaded; optional reference
  formatting sends OCR text only; the general Screenshot Editor keeps a bounded
  local 7-day / 50-item / 500 MB history;
- Desktop Markup uses Apple PaperKit/PencilKit locally. Its normal PNG export
  captures the current display only on explicit request, while transparent PNG
  export contains annotation pixels only; Auto Fade removes expired sealed native
  markup after its short local fade;
- Crossref is contacted only after an explicit lookup; its conversation icon
  and Tab action can be hidden without disabling the dedicated Crossref panel;
- Library Access is off by default; new installations locally preconfigure
  PolyU and Monash without contacting Third Iron;
- no advertising, analytics, or tracking SDK.

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

Production is the static `/bar` build documented in `deploy/README.md`. The old
GitHub Pages path is no longer a maintained production surface. Do not publish
new product, privacy, terms, or support copy to a second public site.
