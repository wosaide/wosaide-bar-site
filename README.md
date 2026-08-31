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

The production GitHub Pages URL is:
<https://wosaide.github.io/wosaide-bar-site/>

## Product claims

Website copy must stay aligned with the shipping app:

- opening journal-catalog settings may check the public GitHub commit/version
  status without research content; SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24,
  and FT50 CSV files are downloaded only after an explicit Download, Update, or
  Refresh action;
- compatible user-selected journal CSV files are processed locally and are not
  uploaded;
- AI provider profiles can be used for optional translation and optional LLM
  formatting of locally recognized screenshot reference text; the app does not
  generate Web of Science queries with an LLM;
- remote translation content requires explicit user permission;
- screenshot images are captured and OCR-processed locally after explicit user
  action and are not uploaded; optional reference formatting sends OCR text only;
- Crossref is contacted only after an explicit lookup; its conversation icon
  and Tab action can be hidden without disabling the dedicated Crossref panel;
- Library Access is off by default; new installations locally preconfigure
  PolyU and Monash without contacting Third Iron;
- optional iCloud Drive backup is off by default;
- no advertising, analytics, or tracking SDK.

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

GitHub Pages deployment is defined in `.github/workflows/deploy-pages.yml`.
The repository also contains `.openai/hosting.json`; when deploying through
OpenAI Sites, reuse its existing project ID rather than creating another site.
