/* eslint-disable @next/next/no-html-link-for-pages -- native navigation avoids stalled client routing on the Cloudflare runtime */
import type { Metadata } from "next";
import Image from "next/image";
import { getManualGuideByProductSlug } from "../../manual-guides";
import { products } from "../../products";
import { SITE_NAME, SITE_URL } from "../../site-config";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";

const PAGE_URL = `${SITE_URL}/support/manuals`;
const TITLE = "取扱説明書ダウンロード｜UOUDIO Bluetoothスピーカー";
const DESCRIPTION = "UOUDIO Bluetoothスピーカーの日本語取扱説明書、Bluetooth接続方法、TWS、リセット、ライト操作を製品型番から確認できます。S16、S12、X2 PRO、S20、S11、MG II、GB 01に対応。";
const manualProductSlugs = ["s21", "s12", "s19", "s20", "s11", "gb03", "gb-mini", "s2"];
const manualProductOrder = new Map(manualProductSlugs.map((slug, index) => [slug, index]));
const manualProducts = [...products].sort(
  (a, b) => (manualProductOrder.get(a.slug) ?? 999) - (manualProductOrder.get(b.slug) ?? 999),
);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", locale: "ja_JP", url: PAGE_URL, siteName: SITE_NAME, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function ManualsPage() {
  const manualsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "UOUDIO 取扱説明書ダウンロード",
    url: PAGE_URL,
    description: DESCRIPTION,
    inLanguage: "ja-JP",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: manualProducts.filter((product) => product.manualUrl).map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${product.model} 日本語取扱説明書`,
        url: getManualGuideByProductSlug(product.slug)
          ? `${SITE_URL}/support/manuals/${getManualGuideByProductSlug(product.slug)?.slug}`
          : `${SITE_URL}${product.manualUrl}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(manualsSchema) }} />
      <SiteHeader
        links={[{ href: "/#lineup", label: "製品一覧" }, { href: "/#about", label: "UOUDIOについて" }]}
        cta={{ href: "/support/contact", label: "問い合わせる" }}
      />
      <main className="support-page">
        <div className="support-breadcrumbs"><a href="/">ホーム</a><span>›</span><b>取扱説明書ダウンロード</b></div>
        <section className="support-hero">
          <div>
            <p className="support-hero-label">SUPPORT / MANUALS</p>
            <h1>取扱説明書<br />ダウンロード</h1>
          </div>
          <div className="support-hero-copy">
            <p>お使いの製品型番を選び、Bluetooth接続、基本操作、困ったときの確認事項、日本語取扱説明書PDFをご確認ください。型番は本体またはパッケージに記載されています。</p>
            <div className="support-hero-links"><a href="/support/contact">製品について問い合わせる</a><a href="#manual-list">型番を選ぶ</a></div>
          </div>
        </section>

        <section className="support-section" id="manual-list">
          <div className="support-section-heading">
            <div><p className="support-section-label">USER MANUALS</p><h2>製品型番から<br />説明書を選ぶ。</h2></div>
            <p>PDFはブラウザで開いた後、端末へ保存できます。操作方法や安全上のご注意、防水製品のお取り扱いなどをご使用前にご確認ください。</p>
          </div>
          <div className="manual-list">
            {manualProducts.map((product, index) => (
              <article className="manual-card" key={product.slug}>
                <a className="manual-card-image" href={`/products/${product.slug}`} aria-label={`${product.model} 製品ページを見る`}>
                  <Image src={product.image} alt={`${product.model} Bluetoothスピーカー`} width={500} height={500} />
                </a>
                <div className="manual-card-copy">
                  <small>{String(index + 1).padStart(2, "0")} / USER MANUAL</small>
                  <h2>{product.model}</h2>
                  <p>{product.brand ?? "UOUDIO"} Bluetoothスピーカー</p>
                  {product.manualUrl ? (
                    <div className="manual-card-actions">
                      {getManualGuideByProductSlug(product.slug) && (
                        <a href={`/support/manuals/${getManualGuideByProductSlug(product.slug)?.slug}`}>接続方法・使い方を見る <span>→</span></a>
                      )}
                      <a href={product.manualUrl} target="_blank" rel="noreferrer">日本語取扱説明書 PDF <span>↗</span></a>
                    </div>
                  ) : <span className="manual-pending">取扱説明書は準備中です</span>}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
