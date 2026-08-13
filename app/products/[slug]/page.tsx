/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../products";
import { SITE_NAME, SITE_URL, absoluteUrl } from "../../site-config";
import SiteFooter from "../../site-footer";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const pageUrl = `${SITE_URL}/products/${product.slug}`;
  const pageTitle = `UOUDIO ${product.model} Bluetoothスピーカー｜仕様・特長・FAQ`;
  return {
    title: pageTitle,
    description: `${product.description} UOUDIO ${product.model}の仕様、特長、接続方法、よくある質問、Amazon購入後サポートをご案内します。`,
    keywords: [`UOUDIO ${product.model}`, "Bluetoothスピーカー", "ワイヤレススピーカー", ...product.tags],
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: pageUrl,
      siteName: SITE_NAME,
      title: pageTitle,
      description: product.description,
      images: [{ url: absoluteUrl(product.image), width: 1500, height: 1500, alt: `UOUDIO ${product.model} Bluetoothスピーカー` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: product.description,
      images: [absoluteUrl(product.image)],
    },
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

const s12Faq = [
  {
    q: "最大15時間再生の条件は？",
    a: "最大15時間は使用条件による目安です。実際の再生時間は、音量、RGBライトの設定、再生内容、周囲温度、バッテリーの状態によって異なります。長時間使用したい場合はライトをOFFにしてお使いください。",
  },
  {
    q: "RGBライトやボタンのライトは消せますか？",
    a: "はい。6色RGBライトは消灯して使用できます。就寝前や落ち着いた室内など、光が不要な場面でも音楽を楽しめます。",
  },
  {
    q: "TWSステレオで2台を接続する方法は？",
    a: "同じS12を2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がるステレオ再生を楽しめます。",
  },
  {
    q: "IPX7防水なら水中でも使用できますか？",
    a: "防水性能は試験条件に基づくもので、水中での常用や濡れたままの充電は避けてください。使用後は水分を拭き取り、端子部を十分に乾かしてから充電してください。",
  },
  {
    q: "TFカードだけで音楽を再生できますか？",
    a: "はい。S12はTFカード再生に対応しているため、スマートフォンを接続せずに保存した音楽を再生できます。",
  },
  {
    q: "通話にも使えますか？",
    a: "はい。ハンズフリー通話に対応しています。接続中のスマートフォンへの着信時に、スピーカーから通話できます。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番S12、症状、写真または動画をお送りください。",
  },
];

const s21Faq = [
  {
    q: "最大24時間再生の条件は？",
    a: "音量30％、RGBライトOFFでの目安です。実際の再生時間は、音量、ライトの使用状況、再生内容、接続方法、周囲温度、バッテリーの状態によって異なります。",
  },
  {
    q: "デジタル表示では何を確認できますか？",
    a: "再生中は接続モード（BT・AUX・USB）を表示します。音楽を一時停止するとバッテリー残量、＋／－ボタンを押すと現在の音量レベルを数字で確認できます。",
  },
  {
    q: "RGBライトは消せますか？ EQは切り替えられますか？",
    a: "はい。RGBライトは消灯して使用できます。音質は2種類のEQモードから、音楽のジャンルや使用シーンに合わせて切り替えられます。",
  },
  {
    q: "TWSステレオで2台を接続する方法は？",
    a: "同じS21を2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がるステレオ再生を楽しめます。",
  },
  {
    q: "Bluetooth以外でも音楽を再生できますか？",
    a: "はい。Bluetooth接続のほか、AUX入力、USBメモリー、TFカードでの音楽再生に対応しています。",
  },
  {
    q: "IPX6防水なら水中でも使用できますか？",
    a: "水中での使用、浸水、丸洗いには対応していません。水しぶきや雨が気になる場所で使用する際は端子カバーを確実に閉じ、濡れた状態では充電しないでください。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番S21、症状、写真または動画をお送りください。",
  },
];

const s11Faq = [
  {
    q: "最大24時間再生の条件は？",
    a: "音量約30％、RGBライトOFFでの目安です。実際の再生時間は、音量、ライト、再生内容、接続方法、周囲温度、バッテリーの状態によって異なります。",
  },
  {
    q: "Bluetooth以外でも音楽を再生できますか？",
    a: "はい。Bluetooth接続のほか、AUX入力とTFカード再生に対応しています。スマートフォン、パソコン、有線機器、TFカードなど、用途に合わせて選べます。",
  },
  {
    q: "TWSステレオで2台を接続する方法は？",
    a: "同じS11を2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がる立体的なステレオ再生を楽しめます。",
  },
  {
    q: "RGBライトは何種類ありますか？",
    a: "8種類のRGBライトモードを搭載しています。音楽や使用シーンに合わせて光の演出を楽しめます。長時間再生したい場合はライトをOFFにしてください。",
  },
  {
    q: "IPX7防水ならお風呂で使えますか？",
    a: "水しぶきが気になる場所でも使いやすい仕様ですが、水中での常用や濡れた状態での充電は避けてください。使用前に端子カバーを確実に閉じ、使用後は水分を拭き取ってください。",
  },
  {
    q: "Bass 3.0とは何ですか？",
    a: "低音を力強く聴かせるためのサウンドチューニングです。DSP音声処理と組み合わせ、ボーカルや中高音の聞きやすさにも配慮しながら、迫力ある低音を再生します。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番S11、症状、写真または動画をお送りください。",
  },
];

const s20Faq = [
  {
    q: "最大24時間再生の条件は？",
    a: "使用条件による目安です。実際の再生時間は、音量、RGBライト、再生内容、接続方法、周囲温度、バッテリーの状態によって異なります。長時間使用したい場合はライトをOFFにしてお使いください。",
  },
  {
    q: "TWS接続で合計40Wになりますか？",
    a: "はい。同じS20を2台TWS接続すると、左右に広がるステレオ再生と合計最大40Wの出力を楽しめます。TWS接続には同一モデルが2台必要です。",
  },
  {
    q: "RGBライトは消せますか？",
    a: "はい。6色RGBライトは、リズム連動、点滅、固定色などを選べ、消灯にも対応しています。就寝前や落ち着いた室内でも音だけを楽しめます。",
  },
  {
    q: "microSDカードで音楽を再生できますか？",
    a: "はい。最大32GBのmicroSDカードに対応し、MP3形式の音楽ファイルを再生できます。カードの形式やファイルによっては認識しない場合があります。",
  },
  {
    q: "Bluetooth以外の接続方法はありますか？",
    a: "Bluetooth 5.4のほか、3.5mm AUX入力とmicroSDカード再生に対応しています。スマートフォン、パソコン、タブレットなどで使用できます。",
  },
  {
    q: "IPX7防水なら水中や浴槽内で使えますか？",
    a: "水中での常用や浴槽内での使用は避けてください。使用前に端子カバーを確実に閉じ、使用後は水分を拭き取り、濡れた状態では充電しないでください。",
  },
  {
    q: "通話にも使えますか？",
    a: "はい。内蔵マイクを搭載し、接続中のスマートフォンでハンズフリー通話ができます。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番S20、症状、写真または動画をお送りください。",
  },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const productFaq = product.slug === "gb-mini" ? gbMiniFaq : product.slug === "s12" ? s12Faq : product.slug === "s21" ? s21Faq : product.slug === "s11" ? s11Faq : product.slug === "s20" ? s20Faq : faq;
  const amazonUrl = product.amazonUrl ?? `https://www.amazon.co.jp/s?k=UOUDIO+${encodeURIComponent(product.model)}`;
  const formattedPrice = product.price ? new Intl.NumberFormat("ja-JP").format(product.price) : null;
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const productImages = [product.image, product.banner, ...(product.gallery?.map((item) => item.src) ?? [])]
    .filter((image): image is string => Boolean(image))
    .map(absoluteUrl);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `UOUDIO ${product.model} Bluetoothスピーカー`,
    brand: { "@type": "Brand", name: "UOUDIO" },
    url: productUrl,
    sku: product.model,
    model: product.model,
    category: "ポータブルBluetoothスピーカー",
    image: productImages,
    description: product.description,
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    ...(product.amazonUrl ? { sameAs: [product.amazonUrl] } : {}),
    ...(product.amazonUrl && product.price ? {
      offers: {
        "@type": "Offer",
        priceCurrency: "JPY",
        price: product.price,
        url: product.amazonUrl,
      },
    } : {}),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaq.map((item) => ({
      "@type": "Question", name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "製品一覧", item: `${SITE_URL}/#lineup` },
      { "@type": "ListItem", position: 3, name: product.model, item: productUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className="site-header product-header">
        <a className="brand" href="/" aria-label="UOUDIO ホーム">UOUDIO<span>®</span></a>
        <nav aria-label="製品ナビゲーション"><a href="#features">特長</a><a href="#specs">仕様</a><a href="#faq">FAQ</a><a href="#support">サポート</a></nav>
        <a className="header-cta" href={amazonUrl} target="_blank" rel="noreferrer">Amazonで見る</a>
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
            {formattedPrice && (
              <div className={styles.priceBlock}>
                <span>Amazon販売価格</span>
                <strong>¥{formattedPrice}</strong>
                <small>※価格は変更される場合があります。</small>
              </div>
            )}
            <div className="detail-actions">
              <a className="button primary" href={amazonUrl} target="_blank" rel="noreferrer">Amazonで見る <span>↗</span></a>
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
          <div className={`detail-feature-grid ${product.features.length === 5 ? styles.fiveFeatures : ""}`}>
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

      <SiteFooter />
    </>
  );
}
