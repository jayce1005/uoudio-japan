import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UOUDIO S21｜防水ポータブルBluetoothスピーカー",
  description:
    "UOUDIO S21の日本向け公式製品ガイド。20Wサウンド、IPX6防水、TWS、EQモードを備えたポータブルBluetoothスピーカー。使い方・よくある質問・Amazon購入後のサポートをご案内します。",
  keywords: [
    "UOUDIO",
    "UOUDIO S21",
    "Bluetoothスピーカー",
    "防水スピーカー",
    "ポータブルスピーカー",
    "キャンプ スピーカー",
    "Amazon スピーカー サポート",
  ],
};

const features = [
  {
    number: "01",
    title: "20W パワフルサウンド",
    text: "コンパクトなボディから、屋内でもアウトドアでも楽しめる力強いサウンドを届けます。",
  },
  {
    number: "02",
    title: "IPX6 防水設計",
    text: "突然の雨や水しぶきに配慮した生活防水。キャンプ、バーベキュー、キッチンでも気軽に。",
  },
  {
    number: "03",
    title: "TWS ステレオペアリング",
    text: "S21を2台つなげば、左右に広がるステレオサウンドを楽しめます。",
  },
  {
    number: "04",
    title: "EQモード & LEDライト",
    text: "シーンに合わせて音の表情を切り替え。音楽と連動するライトが空間を彩ります。",
  },
];

const faq = [
  {
    q: "Bluetoothに接続できません。",
    a: "S21の電源を入れ、スマートフォンのBluetooth設定で「S21」を選択してください。以前の接続が残っている場合は、登録を一度削除してから再接続してください。",
  },
  {
    q: "2台をTWS接続する方法は？",
    a: "2台のS21の電源を入れ、スマートフォンへ接続する前にスピーカー同士をペアリングします。接続音を確認後、スマートフォンからS21へ接続してください。",
  },
  {
    q: "お風呂や水中で使えますか？",
    a: "IPX6は水しぶきへの保護を想定した規格です。水中に沈めたり、浴槽内で使用したりしないでください。充電端子のカバーは確実に閉じてください。",
  },
  {
    q: "充電できない・電源が入りません。",
    a: "付属または適合する充電ケーブルを使い、端子の水分や異物を取り除いてから十分に充電してください。改善しない場合はAmazonの注文履歴から販売元へご連絡ください。",
  },
];

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "UOUDIO S21 ポータブルBluetoothスピーカー",
    brand: { "@type": "Brand", name: "UOUDIO" },
    model: "S21",
    description:
      "20Wサウンド、IPX6防水、TWS、EQモードを備えたポータブルBluetoothスピーカー。",
    image: "/s21-main.jpg",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="UOUDIO ホーム">
          UOUDIO<span>®</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#product">製品</a>
          <a href="#features">特長</a>
          <a href="#support">サポート</a>
          <a href="#contact">お問い合わせ</a>
        </nav>
        <a className="header-cta" href="#amazon">
          Amazonで見る
        </a>
      </header>

      <main id="top">
        <section className="hero" id="product">
          <div className="hero-copy">
            <p className="eyebrow"><span /> UOUDIO S21</p>
            <h1>音を、もっと<br />自由に。</h1>
            <p className="hero-lead">
              どこへでも連れ出せる、タフでパワフルな<br className="desktop-only" />
              ポータブルBluetoothスピーカー。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#amazon">Amazonで製品を見る <span>↗</span></a>
              <a className="text-link" href="#support">購入後のサポート <span>→</span></a>
            </div>
            <dl className="spec-strip" aria-label="主な製品仕様">
              <div><dt>20W</dt><dd>出力</dd></div>
              <div><dt>IPX6</dt><dd>防水</dd></div>
              <div><dt>TWS</dt><dd>ステレオ</dd></div>
              <div><dt>EQ</dt><dd>モード</dd></div>
            </dl>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="product-halo" />
            <Image
              className="product-image"
              src="/s21-main.jpg"
              alt="水しぶきの中にある黒いUOUDIO S21 Bluetoothスピーカー"
              width={2000}
              height={2000}
              priority
            />
            <div className="sound-lines" aria-hidden="true">
              <i /><i /><i /><i />
            </div>
            <p className="image-note">PORTABLE<br />SOUND SYSTEM</p>
          </div>
        </section>

        <section className="trust-bar" aria-label="UOUDIOのサービス方針">
          <p>日本語サポート</p><span />
          <p>Amazon購入後も安心</p><span />
          <p>製品ガイドをいつでも確認</p>
        </section>

        <section className="features section" id="features">
          <div className="section-heading">
            <p className="eyebrow"><span /> PRODUCT FEATURES</p>
            <h2>小さなボディに、<br />楽しさを詰め込んで。</h2>
            <p>S21は、日常のあらゆる場所を音楽のある空間に変えます。</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <p className="feature-number">{feature.number}</p>
                <div className={`feature-icon icon-${feature.number}`} aria-hidden="true"><b /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scene-section">
          <div className="scene-image">
            <Image
              src="/s21-main.jpg"
              alt="UOUDIO S21の操作ボタンとLEDライト"
              width={2000}
              height={2000}
            />
          </div>
          <div className="scene-copy">
            <p className="eyebrow light"><span /> DESIGNED FOR EVERYDAY</p>
            <h2>家でも、外でも。<br />好きな場所が、特等席。</h2>
            <p>リビングでのリラックスタイムから、キャンプや海辺のひとときまで。縦置き・横置きに対応したデザインで、音楽の楽しみ方が広がります。</p>
            <ul>
              <li><b>01</b><span>ワンタッチで直感的に操作</span></li>
              <li><b>02</b><span>バッテリー残量をデジタル表示</span></li>
              <li><b>03</b><span>持ち運びに便利なストラップ対応</span></li>
            </ul>
          </div>
        </section>

        <section className="support section" id="support">
          <div className="support-intro">
            <p className="eyebrow"><span /> AFTER-SALES SUPPORT</p>
            <h2>ご購入後も、<br />すぐそばに。</h2>
            <p>同梱カードのQRコードからお越しの方へ。まずは下の項目をご確認ください。解決しない場合は、Amazonの注文履歴から販売元へお問い合わせいただけます。</p>
          </div>
          <div className="support-panel">
            <p className="support-label">お困りの内容を選んでください</p>
            <div className="support-links">
              <a href="#faq"><span>01</span><b>接続・ペアリング</b><i>→</i></a>
              <a href="#faq"><span>02</span><b>充電・電源</b><i>→</i></a>
              <a href="#faq"><span>03</span><b>音質・操作方法</b><i>→</i></a>
              <a href="#contact"><span>04</span><b>保証・交換のご相談</b><i>→</i></a>
            </div>
            <p className="support-tip"><b>お問い合わせ前に</b> 注文番号と製品名「S21」、症状が分かる写真または動画をご用意いただくとスムーズです。</p>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> FAQ</p>
            <h2>よくあるご質問</h2>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary><span>0{index + 1}</span>{item.q}<i>＋</i></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="amazon-section" id="amazon">
          <div>
            <p className="eyebrow light"><span /> OFFICIAL STORE</p>
            <h2>UOUDIO S21を<br />Amazonでチェック。</h2>
            <p>価格・在庫・配送予定はAmazonの商品ページでご確認ください。</p>
          </div>
          <a className="amazon-button" href="https://www.amazon.co.jp/s?k=UOUDIO+S21" target="_blank" rel="noreferrer">
            <span className="amazon-smile">amazon</span>
            <b>製品を探す</b><i>↗</i>
          </a>
        </section>

        <section className="contact section" id="contact">
          <div className="section-heading compact">
            <p className="eyebrow"><span /> CONTACT</p>
            <h2>お問い合わせ</h2>
            <p>Amazonでご購入いただいた製品については、注文履歴の「出品者に連絡」からお問い合わせください。</p>
          </div>
          <div className="contact-card">
            <div className="contact-mark">U</div>
            <div>
              <p>Amazonカスタマーサポート窓口</p>
              <h3>購入履歴から販売元へ連絡</h3>
              <small>受付後、内容を確認して順次ご案内します。</small>
            </div>
            <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer">注文履歴を開く <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">UOUDIO<span>®</span></div>
        <p>MAKE EVERY MOMENT SOUND BETTER.</p>
        <div className="footer-links">
          <a href="#product">製品情報</a>
          <a href="#support">サポート</a>
          <a href="#faq">よくあるご質問</a>
          <a href="#contact">お問い合わせ</a>
        </div>
        <small>© {new Date().getFullYear()} UOUDIO. All rights reserved.</small>
      </footer>
    </>
  );
}
