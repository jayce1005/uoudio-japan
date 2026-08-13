import type { Metadata } from "next";
import Image from "next/image";
import { products } from "./products";

export const metadata: Metadata = {
  title: "UOUDIO Japan｜Bluetoothスピーカー製品一覧",
  description: "UOUDIOのBluetoothスピーカー全製品をご紹介。S2、S11、S12、S19、S20、S21、GB03、GB MINIから、あなたに合う一台を見つけてください。",
};

export default function Home() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UOUDIO Bluetoothスピーカー製品一覧",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/products/${product.slug}`,
      name: `UOUDIO ${product.model}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="UOUDIO ホーム">UOUDIO<span>®</span></a>
        <nav aria-label="メインナビゲーション">
          <a href="#lineup">製品一覧</a>
          <a href="#about">ブランド</a>
          <a href="#support">サポート</a>
        </nav>
        <a className="header-cta" href="#lineup">製品を探す</a>
      </header>

      <main id="top">
        <section className="brand-hero">
          <div className="brand-hero-copy">
            <p className="eyebrow light"><span /> UOUDIO / PORTABLE AUDIO</p>
            <h1>音のある毎日を、<br />もっと自由に。</h1>
            <p>暮らしにも、旅にも、集まる時間にも。<br />あなたの一日にちょうどいい音を届けます。</p>
            <a className="button primary" href="#lineup">製品ラインアップ <span>↓</span></a>
          </div>
          <div className="brand-hero-image">
            <Image src="/og.png" alt="UOUDIO Bluetoothスピーカーのラインアップ" width={1732} height={908} priority />
          </div>
        </section>

        <section className="trust-bar" aria-label="UOUDIOのサービス方針">
          <p>8 PRODUCT MODELS</p><span /><p>JAPANESE PRODUCT GUIDE</p><span /><p>AMAZON AFTER-SALES SUPPORT</p>
        </section>

        <section className="lineup section" id="lineup">
          <div className="lineup-heading">
            <div className="section-heading">
              <p className="eyebrow"><span /> ALL PRODUCTS</p>
              <h2>あなたに合う音を、<br />見つけよう。</h2>
            </div>
            <p>製品を選ぶと、詳しいパラメータ、特長、使い方、よくあるご質問をご覧いただけます。</p>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className={`product-card product-${index + 1}`} key={product.model}>
                <a className="product-card-image" href={`/products/${product.slug}`}>
                  <Image src={product.image} alt={`UOUDIO ${product.model} Bluetoothスピーカー`} width={1500} height={1500} />
                </a>
                <div className="product-card-copy">
                  <p>{product.type}</p>
                  <h3>{product.model}</h3>
                  <div className="product-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <p className="product-note">{product.tagline}</p>
                  <a href={`/products/${product.slug}`}>製品を見る <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-index">ABOUT<br />UOUDIO</div>
          <div className="about-copy">
            <p className="eyebrow light"><span /> OUR PHILOSOPHY</p>
            <h2>いい音は、<br />毎日を少し楽しくする。</h2>
            <p>UOUDIOは、ポータブルオーディオをもっと身近にするブランドです。大きな音を楽しみたい日も、ひとりで静かに聴きたい時間も。使う場所やスタイルに合わせて選べるスピーカーを届けます。</p>
            <div className="about-values">
              <div><b>01</b><h3>使いやすさ</h3><p>直感的な操作と、持ち運びやすい設計。</p></div>
              <div><b>02</b><h3>選べる音</h3><p>10Wのミニモデルから80Wの大型モデルまで。</p></div>
              <div><b>03</b><h3>毎日の安心</h3><p>日本語ガイドとAmazon購入後サポート。</p></div>
            </div>
          </div>
        </section>

        <section className="home-support section" id="support">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> SUPPORT</p>
            <h2>ご購入後も、安心。</h2>
            <p>好評カードのQRコードからお越しの方は、お持ちの製品を選んで各製品ページのFAQをご確認ください。</p>
          </div>
          <div className="home-support-actions">
            <a href="#lineup"><b>製品別の使い方・FAQ</b><span>製品を選ぶ →</span></a>
            <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer"><b>保証・交換のご相談</b><span>Amazon注文履歴を開く ↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">UOUDIO<span>®</span></div>
        <p>MAKE EVERY MOMENT SOUND BETTER.</p>
        <div className="footer-links"><a href="#lineup">製品一覧</a><a href="#about">ブランド</a><a href="#support">サポート</a></div>
        <small>© {new Date().getFullYear()} UOUDIO. All rights reserved.</small>
      </footer>
    </>
  );
}
