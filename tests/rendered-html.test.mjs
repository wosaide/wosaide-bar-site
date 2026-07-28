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
  ["/", "WOS Aide Bar", "Search Web of Science without memorizing the syntax."],
  ["/en", "WOS Aide Bar", "Four essential workflows"],
  ["/zh-hans", "WOS Aide Bar", "四个核心工作流"],
  ["/zh-hant", "WOS Aide Bar", "四個核心工作流"],
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
