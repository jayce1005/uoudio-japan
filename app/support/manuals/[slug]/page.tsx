/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getManualGuide, manualGuides } from "../../../manual-guides";
import { getProduct } from "../../../products";
import { SITE_NAME, SITE_URL, absoluteUrl } from "../../../site-config";
import SiteFooter from "../../../site-footer";
import SiteHeader from "../../../site-header";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return manualGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getManualGuide(slug);
  if (!guide) return {};
  const url = `${SITE_URL}/support/manuals/${guide.slug}`;
  const product = getProduct(guide.productSlug);

  return {
    title: { absolute: `${guide.title}｜${SITE_NAME}` },
    description: guide.description,
    keywords: [guide.title, `${guide.brand} ${guide.model}`, "Bluetoothスピーカー 使い方", ...guide.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url,
      siteName: SITE_NAME,
      title: guide.title,
      description: guide.description,
      images: product ? [{ url: absoluteUrl(product.image), alt: `${guide.brand} ${guide.model}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: product ? [absoluteUrl(product.image)] : undefined,
    },
  };
}

export default async function ManualGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getManualGuide(slug);
  if (!guide) notFound();
  const product = getProduct(guide.productSlug);
  if (!product) notFound();
  const pageUrl = `${SITE_URL}/support/manuals/${guide.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    inLanguage: "ja-JP",
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: guide.brand },
    publisher: { "@type": "Organization", name: "UOUDIO Japan", url: SITE_URL },
    image: absoluteUrl(product.image),
    about: {
      "@type": "Product",
      name: `${guide.brand} ${guide.model} Bluetoothスピーカー`,
      model: guide.model,
      url: `${SITE_URL}/products/${guide.productSlug}`,
    },
    associatedMedia: {
      "@type": "DigitalDocument",
      name: `${guide.model} 日本語取扱説明書 PDF`,
      encodingFormat: "application/pdf",
      contentUrl: absoluteUrl(guide.manualUrl),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "取扱説明書", item: `${SITE_URL}/support/manuals` },
      { "@type": "ListItem", position: 3, name: guide.model, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader
        links={[
          { href: "#connection", label: "接続方法" },
          { href: "#controls", label: "操作方法" },
          { href: "#troubleshooting", label: "困ったとき" },
        ]}
        cta={{ href: guide.manualUrl, label: "PDFを開く", external: true }}
      />
      <main className="support-page manual-detail-page">
        <div className="support-breadcrumbs">
          <a href="/">ホーム</a><span>›</span><a href="/support/manuals">取扱説明書</a><span>›</span><b>{guide.model}</b>
        </div>

        <section className="manual-detail-hero">
          <div className="manual-detail-hero-copy">
            <p className="support-hero-label">USER MANUAL / {guide.model}</p>
            <h1>{guide.model}<br />取扱説明書・使い方</h1>
            <p>{guide.summary}</p>
            <div className="manual-detail-actions">
              <a className="manual-detail-primary" href={guide.manualUrl} target="_blank" rel="noreferrer">日本語取扱説明書 PDF <span>↗</span></a>
              <a href={`/products/${guide.productSlug}`}>製品情報を見る <span>→</span></a>
            </div>
          </div>
          <div className="manual-detail-product">
            <Image src={product.image} alt={`${guide.brand} ${guide.model} Bluetoothスピーカー`} width={760} height={760} priority />
            <small>{guide.brand} / {guide.model}</small>
          </div>
        </section>

        <nav className="manual-anchor-nav" aria-label={`${guide.model} 操作ガイド目次`}>
          <a href="#connection"><span>01</span>Bluetooth接続</a>
          <a href="#controls"><span>02</span>ボタン・操作</a>
          <a href="#troubleshooting"><span>03</span>困ったとき</a>
          <a href="#safety"><span>04</span>安全上の注意</a>
        </nav>

        <section className="support-section manual-guide-section" id="connection">
          <div className="support-section-heading">
            <div><p className="support-section-label">BLUETOOTH CONNECTION</p><h2>Bluetoothの<br />接続方法</h2></div>
            <p>初めて使用する場合は、スピーカーとスマートフォンを近くに置いて操作してください。</p>
          </div>
          <ol className="manual-step-list">
            {guide.connectionSteps.map((step, index) => (
              <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="support-section manual-guide-section manual-guide-muted" id="controls">
          <div className="support-section-heading">
            <div><p className="support-section-label">BUTTONS &amp; CONTROLS</p><h2>ボタンと<br />基本操作</h2></div>
            <p>短押し、長押し、複数回押しでは動作が異なります。モデル名を確認してから操作してください。</p>
          </div>
          <dl className="manual-control-list">
            {guide.controls.map((control) => <div key={control.label}><dt>{control.label}</dt><dd>{control.action}</dd></div>)}
          </dl>
        </section>

        <section className="support-section manual-guide-section" id="troubleshooting">
          <div className="support-section-heading">
            <div><p className="support-section-label">TROUBLESHOOTING</p><h2>困ったときの<br />確認事項</h2></div>
            <p>接続や再生に問題がある場合は、以下を順番に確認してください。</p>
          </div>
          <div className="manual-troubleshooting-list">
            {guide.troubleshooting.map((item, index) => (
              <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span>{item.question}<i>＋</i></summary><p>{item.answer}</p></details>
            ))}
          </div>
        </section>

        <section className="support-section manual-safety-section" id="safety">
          <div>
            <p className="support-section-label">SAFETY &amp; CARE</p>
            <h2>安全にお使いいただくために</h2>
          </div>
          <ul>{guide.safety.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="manual-download-panel">
          <div><small>OFFICIAL PDF / {guide.model}</small><h2>図解を含む詳しい説明は、<br />PDF版でご確認ください。</h2></div>
          <a href={guide.manualUrl} target="_blank" rel="noreferrer">取扱説明書を開く <span>↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
