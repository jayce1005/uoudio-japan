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

test("presents platform-neutral support and warranty information", async () => {
  const [contact, product] = await Promise.all([
    htmlFor("/support/contact"),
    htmlFor("/products/s21"),
  ]);

  assert.match(contact, /どこで購入しても/);
  assert.match(contact, /購入したプラットフォーム・販売店名/);
  assert.match(contact, /Amazon、楽天市場、TikTok Shop/);
  assert.doesNotMatch(contact, /Amazonから問い合わせる/);
  assert.match(product, /購入先を問わず受付/);
  assert.match(product, /購入先の注文番号または購入明細/);
  assert.doesNotMatch(product, /Amazonの注文番号が購入証明/);
});

test("renders the S16 light article with readable instructions and source links", async () => {
  const path = "/guide/s16-rgb-light-off-guide";
  const html = await htmlFor(path);
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<!--[\s\S]*?-->/g, "");
  assert.match(body, /再生／ライトボタンを3回押します/);
  assert.match(body, /3秒長押し：Bluetooth接続を切断/);
  assert.match(body, /公開日 2026\.10\.13/);
  assert.match(html, /<link rel="canonical" href="https:\/\/uoudio\.com\/guide\/s16-rgb-light-off-guide"/);
  assert.match(html, /<meta name="robots" content="index, follow"/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const article = schemas.find((schema) => schema["@type"] === "Article");
  assert.equal(article.mainEntityOfPage, `https://uoudio.com${path}`);
  assert.equal(article.datePublished, "2026-10-13");
  assert.ok(schemas.some((schema) => schema["@type"] === "BreadcrumbList"));
  for (const href of ["/manuals/uoudio-s16-manual.pdf", "/support/manuals/s16", "/products/s21", "/support/contact"]) {
    assert.ok(body.includes(`href="${href}"`), `${href} is a crawlable source link`);
  }
  assert.ok((await htmlFor("/guide")).includes(path));
});
