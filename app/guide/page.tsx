/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { guideArticles } from "../guides";
import { SITE_NAME, SITE_URL } from "../site-config";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

const PAGE_URL = `${SITE_URL}/guide`;
const TITLE = "Bluetoothスピーカー使い方ガイド｜UOUDIO Japan";
const DESCRIPTION = "Bluetoothスピーカーの接続、TWS、リセット、充電、防水使用時の注意点を、UOUDIO公式の製品資料と取扱説明書に基づいて解説します。";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", locale: "ja_JP", url: PAGE_URL, siteName: SITE_NAME, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function GuideIndexPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    url: PAGE_URL,
    description: DESCRIPTION,
    inLanguage: "ja-JP",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guideArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: `${SITE_URL}/guide/${article.slug}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <SiteHeader links={[{ href: "/#lineup", label: "製品一覧" }, { href: "/support/manuals", label: "取扱説明書" }]} cta={{ href: "/support/contact", label: "問い合わせる" }} />
      <main className="guide-page">
        <div className="support-breadcrumbs"><a href="/">ホーム</a><span>›</span><b>使い方ガイド</b></div>
        <section className="guide-index-hero">
          <p>UOUDIO SUPPORT JOURNAL</p>
          <h1>音楽をもっと自由に楽しむための、<br />使い方とお手入れ。</h1>
          <span>公式の製品資料と取扱説明書に基づき、接続方法や困ったときの確認事項を分かりやすく紹介します。</span>
        </section>
        <section className="guide-index-list" aria-label="使い方ガイド記事一覧">
          {guideArticles.map((article, index) => (
            <article key={article.slug}>
              <a href={`/guide/${article.slug}`}>
                <small>{String(index + 1).padStart(2, "0")} / {article.category}</small>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <span><time dateTime={article.publishedAt}>{article.publishedAt.replaceAll("-", ".")}</time><b>記事を読む →</b></span>
              </a>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
