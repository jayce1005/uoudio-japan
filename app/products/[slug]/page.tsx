import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `UOUDIO ${product.model}｜仕様・特長・使い方・FAQ`,
    description: `${product.description} UOUDIO ${product.model}の仕様、特長、接続方法、よくある質問、Amazon購入後サポートをご案内します。`,
  };
}

const faq = [
  {
    q: "Bluetoothに接続できません。",
    a: "スピーカーの電源を入れ、スマートフォンのBluetooth設定で製品型番を選択してください。以前の登録が残っている場合は一度削除し、スピーカーとスマートフォンを再起動してから接続してください。",
  },
  {
    q: "TWSで2台を接続する方法は？",
    a: "同じ型番のスピーカー2台の電源を入れ、スマートフォンに接続する前にスピーカー同士をペアリングします。接続音を確認した後、スマートフォンから製品型番を選択してください。",
  },
  {
    q: "水中やお風呂の浴槽内で使えますか？",
    a: "防水モデルも水中での使用や長時間の浸水を目的としていません。充電端子のカバーを確実に閉じ、濡れた状態では充電しないでください。",
  },
  {
    q: "充電できない、または電源が入りません。",
    a: "充電端子の水分や異物を取り除き、適合するケーブルと電源アダプターで十分に充電してください。改善しない場合はAmazonの注文履歴から販売元へご連絡ください。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、「出品者に連絡」から注文番号、製品型番、症状、写真または動画をお送りください。",
  },
];

const gbMiniFaq = [
  {
    q: "最大12時間再生の条件は？",
    a: "音量約30％、ライトOFFでの目安です。実際の再生時間は、音量、ライトモード、再生内容、周囲温度、バッテリーの状態によって異なります。",
  },
  {
    q: "TWSステレオで2台を接続する方法は？",
    a: "同じGB MINIを2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がる合計20Wのステレオ再生を楽しめます。",
  },
  {
    q: "TFカードやUSBメモリーで再生できますか？",
    a: "最大32GB、FAT32形式のTFカードとUSBメモリーに対応しています。対応音声ファイルはMP3です。WAV・FLACなどは再生できません。",
  },
  {
    q: "IPX6防水なら水中でも使用できますか？",
    a: "水中での使用、浸水、丸洗いには対応していません。雨や日常の水しぶきから保護する仕様です。濡れた状態では充電せず、端子を十分に乾かしてください。",
  },
  {
    q: "ライトの種類と切り替え方法は？",
    a: "ホワイト常時点灯、暖色ブリージング、赤色SOS点滅の3種類です。ライトをOFFにすることもできます。SOS点滅は周囲へ注意を促す補助機能としてお使いください。",
  },
  {
    q: "充電器の仕様は？",
    a: "USB Type-Cポートから5V 1Aまたは5V 2Aで充電してください。充電前に端子部に水分や異物がないことを確認してください。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番GB MINI、症状、写真または動画をお送りください。",
  },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const productFaq = product.slug === "gb-mini" ? gbMiniFaq : faq;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `UOUDIO ${product.model} Bluetoothスピーカー`,
    brand: { "@type": "Brand", name: "UOUDIO" },
    model: product.model,
    image: product.image,
    description: product.description,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaq.map((item) => ({
      "@type": "Question", name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="site-header product-header">
        <a className="brand" href="/" aria-label="UOUDIO ホーム">UOUDIO<span>®</span></a>
        <nav aria-label="製品ナビゲーション"><a href="#features">特長</a><a href="#specs">仕様</a><a href="#faq">FAQ</a><a href="#support">サポート</a></nav>
        <a className="header-cta" href={`https://www.amazon.co.jp/s?k=UOUDIO+${encodeURIComponent(product.model)}`} target="_blank" rel="noreferrer">Amazonで探す</a>
      </header>

      <main className="product-page">
        <div className="breadcrumbs"><a href="/">ホーム</a><span>›</span><a href="/#lineup">製品一覧</a><span>›</span><b>{product.model}</b></div>
        <section className="detail-hero">
          <div className="detail-copy">
            <p className="eyebrow"><span /> {product.type}</p>
            <p className="detail-brand">UOUDIO</p>
            <h1>{product.model}</h1>
            <h2>{product.tagline}</h2>
            <p>{product.description}</p>
            <div className="detail-tags">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="detail-actions">
              <a className="button primary" href={`https://www.amazon.co.jp/s?k=UOUDIO+${encodeURIComponent(product.model)}`} target="_blank" rel="noreferrer">Amazonで探す <span>↗</span></a>
              <a className="text-link" href="#specs">仕様を見る <span>↓</span></a>
            </div>
          </div>
          <div className={`detail-image detail-${product.slug}`}>
            <Image src={product.image} alt={`UOUDIO ${product.model} Bluetoothスピーカー`} width={1500} height={1500} priority />
          </div>
        </section>

        {product.banner && (
          <section className="product-banner" aria-label={`${product.model} 製品イメージ`}>
            <Image src={product.banner} alt={`${product.model} Bluetoothスピーカー`} width={1464} height={600} />
          </section>
        )}

        <section className="detail-features section" id="features">
          <div className="section-heading"><p className="eyebrow"><span /> KEY FEATURES</p><h2>{product.model}の特長</h2></div>
          <div className="detail-feature-grid">
            {product.features.map((feature, index) => (
              <article key={feature.title}><b>0{index + 1}</b><h3>{feature.title}</h3><p>{feature.text}</p></article>
            ))}
          </div>
        </section>

        {product.gallery && (
          <section className="product-gallery section" aria-label={`${product.model} 機能紹介`}>
            <div className="section-heading"><p className="eyebrow"><span /> PRODUCT DETAILS</p><h2>音・光・使いやすさを、<br />画像で詳しく。</h2></div>
            <div className="product-gallery-grid">
              {product.gallery.map((item) => <Image key={item.src} src={item.src} alt={item.alt} width={1254} height={1254} />)}
            </div>
          </section>
        )}

        <section className="spec-section section" id="specs">
          <div className="section-heading compact"><p className="eyebrow light"><span /> SPECIFICATIONS</p><h2>主な仕様</h2></div>
          <dl>
            {product.specs.map((spec) => (
              <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}{spec.note && <small>{spec.note}</small>}</dd></div>
            ))}
            <div><dt>製品型番</dt><dd>{product.model}</dd></div>
            <div><dt>ブランド</dt><dd>UOUDIO</dd></div>
          </dl>
          <p className="spec-note">※ 表記は提供資料に基づきます。実際の再生時間や使用感は、音量・再生内容・周囲温度などにより異なります。</p>
        </section>

        <section className="usage-section section">
          <div className="section-heading compact"><p className="eyebrow"><span /> QUICK START</p><h2>基本の使い方</h2></div>
          <ol>
            <li><b>01</b><div><h3>電源を入れる</h3><p>電源ボタンを長押しし、起動音またはライトを確認します。</p></div></li>
            <li><b>02</b><div><h3>Bluetoothを開く</h3><p>スマートフォンの設定からBluetoothをオンにします。</p></div></li>
            <li><b>03</b><div><h3>型番を選ぶ</h3><p>使用可能な機器から「{product.model}」を選択します。</p></div></li>
          </ol>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading compact"><p className="eyebrow"><span /> FAQ / {product.model}</p><h2>よくあるご質問</h2></div>
          <div className="faq-list">
            {productFaq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>0{index + 1}</span>{item.q}<i>＋</i></summary><p>{item.a}</p></details>)}
          </div>
        </section>

        <section className="product-support" id="support">
          <div><p className="eyebrow light"><span /> AFTER-SALES SUPPORT</p><h2>解決しない場合は、<br />販売元へご相談ください。</h2><p>注文番号、製品型番「{product.model}」、症状が分かる写真または動画をご用意ください。</p></div>
          <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer"><b>Amazon注文履歴</b><span>販売元へ連絡する ↗</span></a>
        </section>

        <section className="other-products section">
          <div className="section-heading compact"><p className="eyebrow"><span /> OTHER PRODUCTS</p><h2>ほかの製品を見る</h2></div>
          <div>{products.filter((item) => item.slug !== product.slug).slice(0, 3).map((item) => <a href={`/products/${item.slug}`} key={item.slug}><Image src={item.image} alt={`UOUDIO ${item.model}`} width={500} height={500} /><span>{item.model}<i>→</i></span></a>)}</div>
        </section>
      </main>

      <footer><div className="footer-brand">UOUDIO<span>®</span></div><p>MAKE EVERY MOMENT SOUND BETTER.</p><div className="footer-links"><a href="/">ホーム</a><a href="/#lineup">製品一覧</a><a href="#support">サポート</a></div><small>© {new Date().getFullYear()} UOUDIO. All rights reserved.</small></footer>
    </>
  );
}
