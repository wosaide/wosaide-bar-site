import assert from "node:assert/strict";
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
  ["/", "WOS Aide Bar", "Search,"],
  ["/en", "WOS Aide Bar", "One compact utility. The whole research loop."],
  ["/zh-hans", "WOS Aide Bar", "一个紧凑工具，覆盖完整科研检索流程"],
  ["/zh-hant", "WOS Aide Bar", "一個緊湊工具，涵蓋完整科研檢索流程"],
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
