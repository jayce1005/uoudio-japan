/* eslint-disable @next/next/no-html-link-for-pages -- native navigation avoids stalled client routing on the Cloudflare runtime */
import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "../../site-config";
import SiteFooter from "../../site-footer";
import SiteHeader from "../../site-header";

const PAGE_URL = `${SITE_URL}/support/contact`;
const TITLE = "お問い合わせ・保証サポート｜UOUDIO Japan";
const DESCRIPTION = "UOUDIO製品の接続・充電・故障、保証・交換に関する日本語お問い合わせ窓口です。購入した販売店やECプラットフォームを問わず、メールでご相談いただけます。1年間保証と無料の2年延長保証をご案内します。";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", locale: "ja_JP", url: PAGE_URL, siteName: SITE_NAME, title: TITLE, description: DESCRIPTION },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function ContactPage() {
  const mailSubject = encodeURIComponent("UOUDIO製品 サポート・延長保証のお問い合わせ");
  const mailBody = encodeURIComponent("下記をご記入ください。\n\n購入したプラットフォーム・販売店名：\n注文番号：\n製品型番：\nお問い合わせ内容：\n症状が分かる写真・動画：添付をお願いします\n");
  const mailUrl = `mailto:${SUPPORT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "UOUDIO お問い合わせ・保証サポート",
    url: PAGE_URL,
    description: DESCRIPTION,
    inLanguage: "ja-JP",
    mainEntity: {
      "@type": "Organization",
      name: "UOUDIO",
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SUPPORT_EMAIL,
        availableLanguage: "Japanese",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <SiteHeader
        links={[{ href: "/#lineup", label: "製品一覧" }, { href: "/#about", label: "UOUDIOについて" }]}
        cta={{ href: "/support/manuals", label: "説明書を探す" }}
      />
      <main className="support-page">
        <div className="support-breadcrumbs"><a href="/">ホーム</a><span>›</span><b>お問い合わせ</b></div>
        <section className="support-hero">
          <div>
            <p className="support-hero-label">SUPPORT / CONTACT</p>
            <h1>お問い合わせ</h1>
          </div>
          <div className="support-hero-copy">
            <p>製品の接続や充電、使い方、保証・交換について、日本語でご案内します。購入した販売店やECプラットフォームを問わずサポートします。お問い合わせ前に、購入先、注文番号、製品型番をご用意いただくと確認がスムーズです。</p>
            <div className="support-hero-links"><a href="/support/manuals">取扱説明書を確認する</a><a href="#contact-options">問い合わせ方法を見る</a></div>
          </div>
        </section>

        <section className="support-section" id="contact-options">
          <div className="support-section-heading">
            <div><p className="support-section-label">CONTACT OPTIONS</p><h2>どこで購入しても、<br />サポートします。</h2></div>
            <p>Amazon、楽天市場、TikTok Shopをはじめ、その他のECモールや販売店で購入したUOUDIO製品も対象です。ご購入先の注文情報をご用意のうえ、メールでお問い合わせください。</p>
          </div>
          <div className="contact-options">
            <article className="contact-option">
              <small>ALL PURCHASE CHANNELS</small>
              <h2>購入先を問わず受付</h2>
              <p>オンラインモール、ブランドショップ、その他の販売店で購入した製品もサポート対象です。購入先と注文番号または購入明細をご確認ください。</p>
              <a href="#contact-details">必要な情報を確認する <span>↓</span></a>
            </article>
            <article className="contact-option">
              <small>EMAIL SUPPORT</small>
              <h2>メールで問い合わせる</h2>
              <p>購入先、注文番号、製品型番、症状をご記入ください。写真または動画を添付いただくと、より早く状況を確認できます。</p>
              <a href={mailUrl}>{SUPPORT_EMAIL} <span>→</span></a>
            </article>
          </div>
          <p className="support-note" id="contact-details"><b>お問い合わせ時に必要な情報：</b> 購入したプラットフォーム・販売店名、注文番号または購入明細、製品型番、症状、発生した状況、症状が分かる写真または動画</p>
        </section>

        <section className="support-section">
          <div className="support-section-heading">
            <div><p className="support-section-label">WARRANTY</p><h2>購入後も安心して<br />お使いいただくために。</h2></div>
            <p>すべてのUOUDIO製品に1年間のメーカー保証をご用意しています。注文番号と製品型番をメールで登録すると、無料で2年間へ延長できます。</p>
          </div>
          <div className="warranty-overview">
            <article><span>01 / STANDARD</span><h3>1年間メーカー保証</h3><p>正常な使用状態で不具合が生じた場合は、保証規定に基づいてサポートします。購入先の注文番号または購入明細が購入証明になります。</p></article>
            <article><span>02 / FREE EXTENSION</span><h3>無料で2年間へ延長</h3><p>購入先、注文番号、製品型番をメールでお送りください。登録確認メールは保証期間中、大切に保管してください。</p></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
