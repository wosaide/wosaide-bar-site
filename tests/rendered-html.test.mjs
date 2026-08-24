import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function worker() {
  const workerUrl = new URL("dist/server/index.js", root);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(pathname) {
  const app = await worker();
  return app.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [path, title, phrase] of [
  ["/", "WOS Aide Bar", "更轻松地构建 WOS 检索式"],
  ["/en", "WOS Aide Bar", "Build WOS searches with less friction."],
  ["/zh-hans", "WOS Aide Bar", "更轻松地构建 WOS 检索式"],
  ["/zh-hant", "WOS Aide Bar", "更輕鬆地建立 WOS 檢索式"],
  ["/community", "加入讨论群", "一起把工具做得更好"],
  ["/privacy", "Privacy Policy", "Optional AI Assistant"],
  ["/terms", "Terms of Use", "Journal-list sources and rights"],
  ["/support", "Support", "How can we help?"],
]) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>[^<]*${title}`));
    assert.match(html, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  });
}

test("privacy page includes every app language", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();

  for (const language of [
    "English",
    "简体中文",
    "繁體中文",
    "日本語",
    "한국어",
    "Español",
    "Português \\(Brasil\\)",
    "Français",
    "Deutsch",
  ]) {
    assert.match(html, new RegExp(language));
  }
});

test("feature navigation uses the client-side intro bypass", async () => {
  const homepage = await render("/");
  const html = await homepage.text();
  assert.match(html, /cinematic-hero is-checking/);
  assert.match(html, /href="\/wosaide-bar-site\/#features"|href="\/#features"/);
});

test("homepage offers the mainland China DMG download", async () => {
  const homepage = await render("/");
  const html = await homepage.text();
  const installer = await stat(
    new URL(
      "../public/downloads/WOS-Aide-Bar-1.0.4-DeveloperID.dmg",
      import.meta.url,
    ),
  );

  assert.match(html, /中国大陆直接下载/);
  assert.match(
    html,
    /href="(?:\/wosaide-bar-site)?\/downloads\/WOS-Aide-Bar-1\.0\.4-DeveloperID\.dmg"/,
  );
  assert.ok(installer.size > 5_000_000);
});
