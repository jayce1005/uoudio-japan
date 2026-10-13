/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getGuideArticle, guideArticles } from "../../guides";
import { products } from "../../products";
import { SITE_NAME, SITE_URL, absoluteUrl } from "../../site-config";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return {};
  const url = `${SITE_URL}/guide/${article.slug}`;
  return {
    title: { absolute: `${article.title}｜${SITE_NAME}` },
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: { type: "article", locale: "ja_JP", url, siteName: SITE_NAME, title: article.title, description: article.description, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: absoluteUrl("/og.png"), alt: "UOUDIO Japan" }] },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [absoluteUrl("/og.png")] },
  };
}

export default async function GuideArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) notFound();
  const relatedProducts = article.relatedProductSlugs
    .map((productSlug) => products.find((product) => product.slug === productSlug))
    .filter((product): product is (typeof products)[number] => Boolean(product));
  const pageUrl = `${SITE_URL}/guide/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "ja-JP",
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: "UOUDIO Japan", url: SITE_URL },
    publisher: { "@type": "Organization", name: "UOUDIO Japan", url: SITE_URL, logo: { "@type": "ImageObject", url: absoluteUrl("/uoudio-logo.png") } },
    image: absoluteUrl("/og.png"),
    about: relatedProducts.map((product) => ({ "@type": "Product", name: `${product.brand ?? "UOUDIO"} ${product.model}`, url: `${SITE_URL}/products/${product.slug}` })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "使い方ガイド", item: `${SITE_URL}/guide` },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader links={[{ href: "/guide", label: "使い方ガイド" }, { href: "/support/manuals", label: "取扱説明書" }]} cta={{ href: "/support/contact", label: "問い合わせる" }} />
      <main className="guide-page">
        <div className="support-breadcrumbs"><a href="/">ホーム</a><span>›</span><a href="/guide">使い方ガイド</a><span>›</span><b>{article.category}</b></div>
        <article className="guide-article">
          <header className="guide-article-header">
            <p>{article.category}</p>
            <h1>{article.title}</h1>
            <div><time dateTime={article.publishedAt}>公開日 {article.publishedAt.replaceAll("-", ".")}</time><span>UOUDIO JAPAN OFFICIAL</span></div>
          </header>
          <div className="guide-article-lead">{article.intro}</div>
          <div className="guide-article-body">
            {article.sections.map((section, index) => (
              <section key={section.heading}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            {article.references && (
              <section aria-label="説明書とサポート">
                <h2>説明書とサポート</h2>
                <ul>{article.references.map((reference) => <li key={reference.href}><a href={reference.href}>{reference.label} →</a></li>)}</ul>
              </section>
            )}
          </div>
          <aside className="guide-related-products" aria-label="関連製品">
            <div><p>RELATED PRODUCTS</p><h2>関連する製品と<br />モデル別の使い方</h2></div>
            <div>
              {relatedProducts.map((product) => (
                <a href={`/products/${product.slug}`} key={product.slug}>
                  <Image src={product.image} alt={`${product.brand ?? "UOUDIO"} ${product.model}`} width={320} height={320} />
                  <span><b>{product.model}</b><small>製品情報を見る →</small></span>
                </a>
              ))}
            </div>
          </aside>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
