import type { Metadata } from "next";
import Image from "next/image";
import { products } from "./products";
import SiteFooter from "./site-footer";

const bestsellerSlugs = ["s21", "s12", "s11"];
const bestsellerOrder = new Map(bestsellerSlugs.map((slug, index) => [slug, index]));
const homeProducts = [...products].sort(
  (a, b) => (bestsellerOrder.get(a.slug) ?? 999) - (bestsellerOrder.get(b.slug) ?? 999),
);

export const metadata: Metadata = {
  title: "UOUDIO Japan｜Bluetoothスピーカー製品一覧",
  description: "どこでも音楽を、もっと自由に。UOUDIOのポータブルBluetoothスピーカー全8モデルと、日本向け製品情報・購入後サポートをご案内します。",
};

export default function Home() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UOUDIO Bluetoothスピーカー製品一覧",
    itemListElement: homeProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/products/${product.slug}`,
      name: `UOUDIO ${product.model}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <header className="site-header home-header">
        <a className="brand" href="#top" aria-label="UOUDIO ホーム">UOUDIO<span>®</span></a>
        <nav aria-label="メインナビゲーション">
          <a href="#lineup">製品一覧</a>
          <a href="#about">UOUDIOについて</a>
          <a href="#support">サポート</a>
        </nav>
        <a className="header-cta" href="#lineup">製品を探す</a>
      </header>

      <main className="home" id="top">
        <section className="home-banner" aria-label="UOUDIO メインビジュアル">
          <Image
            className="home-banner-image"
            src="/home-hero-lifestyle-v1.png"
            alt="光と緑を感じる、UOUDIOのある自由なライフスタイル"
            fill
            priority
            sizes="100vw"
          />
          <div className="home-banner-copy">
            <p className="home-banner-kicker">どこでも音楽を、もっと自由に。</p>
            <h1>いい音と、<br />好きな場所へ。</h1>
            <p className="home-banner-lead">家でも、旅でも、アウトドアでも。<br />毎日の気分と過ごし方に寄り添う音を届けます。</p>
            <a className="home-banner-button" href="#lineup">製品ラインアップを見る <span>↓</span></a>
          </div>
        </section>

        <section className="home-lineup" id="lineup">
          <div className="home-section-lead">
            <div>
              <p className="home-section-label">製品ラインアップ</p>
              <h2>毎日のそばに、<br />いい音を。</h2>
            </div>
            <p>家でも、外でも。使う場所や聴き方に合わせて、8つのモデルからお選びいただけます。</p>
          </div>
          <div className="home-product-grid">
            {homeProducts.map((product, index) => (
              <article className={`home-product-card home-product-${index + 1}`} key={product.model}>
                {bestsellerOrder.has(product.slug) && <span className="home-product-badge">人気モデル</span>}
                <a className="home-product-image" href={`/products/${product.slug}`} aria-label={`${product.model}の製品ページを見る`}>
                  <Image
                    src={product.image}
                    alt={`UOUDIO ${product.model} Bluetoothスピーカー`}
                    width={1500}
                    height={1500}
                    sizes="(max-width: 720px) 42vw, (max-width: 1100px) 38vw, 260px"
                  />
                </a>
                <div className="home-product-copy">
                  <p className="home-product-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{product.model}</h3>
                  <p className="home-product-tagline">{product.tagline}</p>
                  <dl className="home-product-specs">
                    {product.specs.slice(0, 4).map((spec) => (
                      <div key={spec.label}>
                        <dt>{spec.label}</dt>
                        <dd>{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a className="home-product-link" href={`/products/${product.slug}`}>製品を見る</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-about" id="about">
          <div className="home-about-inner">
            <div className="home-about-copy">
              <p className="home-section-label">UOUDIOについて</p>
              <h2>どこでも音楽を、<br />もっと自由に。</h2>
              <p>UOUDIOは、ポータブルBluetoothスピーカーを中心に、毎日の音楽をもっと身近に楽しめるオーディオブランドです。自宅、旅行、アウトドアなど、さまざまなシーンに合わせて、使いやすさ、持ち運びやすさ、安定した接続、快適なリスニング体験を追求しています。</p>
            </div>
            <div className="home-about-points">
              <article><b>01</b><h3>選べるラインアップ</h3><p>手のひらサイズから80Wモデルまで、用途に合わせて選べます。</p></article>
              <article><b>02</b><h3>持ち運びやすい設計</h3><p>暮らしにも外出にもなじむ、使いやすさを考えたデザインです。</p></article>
              <article><b>03</b><h3>屋内外で楽しめる</h3><p>防水に対応したモデルも揃え、さまざまな場所で音楽を楽しめます。</p></article>
              <article><b>04</b><h3>日本語で確認できる</h3><p>各製品ページで、仕様や使い方、よくあるご質問をご案内します。</p></article>
            </div>
          </div>
        </section>

        <section className="home-aftercare" id="support">
          <div className="home-aftercare-inner">
            <div className="home-aftercare-copy">
              <p className="home-section-label">ご購入後のサポート</p>
              <h2>ご購入後も、安心して<br />お使いいただくために。</h2>
              <p>製品の使い方やよくあるご質問、保証・交換のご相談窓口をご案内しています。</p>
            </div>
            <div className="home-aftercare-links">
              <a href="#lineup">
                <span>01</span><b>製品別の使い方・FAQ</b><small>お持ちの製品を選ぶ</small>
              </a>
              <a href="#lineup">
                <span>02</span><b>仕様・取扱情報</b><small>製品ページで確認する</small>
              </a>
              <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer">
                <span>03</span><b>保証・交換のご相談</b><small>Amazon注文履歴から販売元へ連絡</small>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
