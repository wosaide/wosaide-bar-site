# WOS Aide Bar website

Official product, privacy, terms, and support site for the WOS Aide Bar macOS
app.

## Public routes

- `/` — English product page
- `/zh-hans/` — Simplified Chinese product page
- `/zh-hant/` — Traditional Chinese product page
- `/privacy/` — privacy policy with summaries in all nine app languages
- `/terms/` — bilingual supplemental terms
- `/support/` — support and troubleshooting

The production GitHub Pages URL is:
<https://wosaide.github.io/wosaide-bar-site/>

## Product claims

Website copy must stay aligned with the shipping app:

- no bundled commercial journal database;
- SCIE, SSCI, AHCI, ESCI, AJG 2024, UTD24, and FT50 are downloaded from the
  project GitHub repository only after an explicit Download or Refresh action;
- compatible user-selected journal CSV files are processed locally and are not
  uploaded;
- AI is used only for optional translation/provider configuration; the app does
  not generate Web of Science queries with an LLM;
- remote translation content requires explicit user permission;
- Crossref DOI lookup is optional and off by default;
- Library Access is optional and off by default;
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
