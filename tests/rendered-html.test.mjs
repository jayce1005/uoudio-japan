import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function htmlFor(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200, `${pathname} should return 200`);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
    `${pathname} should return HTML`,
  );
  return response.text();
}

test("server-renders the Japanese storefront with crawlable support links", async () => {
  const html = await htmlFor("/");

  assert.match(html, /<html lang="ja">/i);
  assert.match(html, /<title>UOUDIO Japan公式/);
  assert.match(html, /<link rel="canonical" href="https:\/\/uoudio\.com"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /href="\/support\/manuals"/);
  assert.match(html, /href="\/support\/contact"/);
  assert.match(html, /href="\/guide"/);
  assert.match(html, /UOUDIO S16/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("renders the editorial guide and model-specific manual pages", async () => {
  const [guideIndex, guideArticle, manualIndex, manualDetail] = await Promise.all([
    htmlFor("/guide"),
    htmlFor("/guide/bluetooth-speaker-connection-reset-guide"),
    htmlFor("/support/manuals"),
    htmlFor("/support/manuals/s16"),
  ]);

  assert.match(guideIndex, /Bluetoothスピーカー使い方ガイド/);
  assert.match(guideIndex, /bluetooth-speaker-connection-reset-guide/);
  assert.match(guideArticle, /Bluetoothスピーカーが接続できないときの確認方法/);
  assert.match(guideArticle, /"@type":"Article"/);
  assert.match(manualIndex, /接続方法・使い方を見る/);
  assert.match(manualIndex, /href="\/support\/manuals\/s16"/);
  assert.match(manualDetail, /S16 取扱説明書/);
  assert.match(manualDetail, /"@type":"TechArticle"/);
  assert.match(manualDetail, /Bluetoothの/);
  assert.match(manualDetail, /接続方法/);
});
