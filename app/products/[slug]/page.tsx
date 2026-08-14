/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../products";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL, absoluteUrl } from "../../site-config";
import SiteFooter from "../../site-footer";
import ProductHero from "./product-hero";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const productBrand = product.brand ?? "UOUDIO";
  const pageUrl = `${SITE_URL}/products/${product.slug}`;
  const pageTitle = `${productBrand} ${product.model} Bluetoothスピーカー｜仕様・特長・FAQ`;
  return {
    title: pageTitle,
    description: `${product.description} ${productBrand} ${product.model}の仕様、特長、接続方法、よくある質問、Amazon購入後サポートをご案内します。`,
    keywords: [`UOUDIO ${product.model}`, "Bluetoothスピーカー", "ワイヤレススピーカー", ...product.tags],
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: pageUrl,
      siteName: SITE_NAME,
      title: pageTitle,
      description: product.description,
      images: [{ url: absoluteUrl(product.image), width: 1500, height: 1500, alt: `${productBrand} ${product.model} Bluetoothスピーカー` }],
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
    a: "同じGB 01を2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がる合計20Wのステレオ再生を楽しめます。",
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
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番GB 01、症状、写真または動画をお送りください。",
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

const s16Faq = [
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
    a: "同じS16を2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は左右に広がるステレオ再生を楽しめます。",
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
    a: "Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番S16、症状、写真または動画をお送りください。",
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

const mg2Faq = [
  {
    q: "最大17時間再生の条件は？",
    a: "音量30％での目安です。実際の再生時間は、音量、ライト、EQ、再生内容、接続方法、周囲温度、バッテリーの状態によって異なります。",
  },
  {
    q: "EQとアンビエントライトは切り替えられますか？",
    a: "はい。音質は3種類のEQモードから選べます。ライトは常時点灯、呼吸、赤色点滅の3モードに加え、消灯にも対応しています。",
  },
  {
    q: "TWSステレオで2台を接続する方法は？",
    a: "同じMG IIを2台用意し、スマートフォンと接続する前にスピーカー同士をTWSペアリングします。接続後は合計48Wの広がりあるステレオ再生を楽しめます。",
  },
  {
    q: "IP67なら水中でも使用できますか？",
    a: "防水・防塵性能は試験条件に基づくもので、水中での常用や濡れた状態での充電は避けてください。使用前に端子カバーを確実に閉じ、使用後は十分に乾かしてください。",
  },
  {
    q: "Bluetooth以外でも再生できますか？",
    a: "はい。Bluetooth 6.0のほか、USBメモリー、microSDカード、AUX入力に対応しています。",
  },
  {
    q: "カラーは何色ありますか？",
    a: "ブラック＆ブラスとクリームの2色です。本サイトではブラック＆ブラスを主に掲載しています。",
  },
  {
    q: "保証や交換について相談したいです。",
    a: "2年間の品質保証があります。Amazonの注文履歴から対象商品を開き、販売元へ注文番号、製品型番MG II、症状、写真または動画をお送りください。",
  },
];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const baseFaq = product.slug === "gb-mini" ? gbMiniFaq : product.slug === "s12" ? s12Faq : product.slug === "s21" ? s16Faq : product.slug === "s11" ? s11Faq : product.slug === "s20" ? s20Faq : product.slug === "gb03" ? mg2Faq : faq;
  const productFaq = baseFaq.map((item) => item.q.includes("保証や交換") ? {
    q: "保証期間と2年延長サービスについて教えてください。",
    a: `通常のメーカー保証は購入日から1年間です。無料の延長保証をご希望の場合は、Amazonの注文番号と製品型番「${product.model}」をサポート窓口へお送りください。登録確認後、保証期間を2年間へ延長します。`,
  } : item);
  const amazonUrl = product.amazonUrl ?? `https://www.amazon.co.jp/s?k=UOUDIO+${encodeURIComponent(product.model)}`;
  const productBrand = product.brand ?? "UOUDIO";
  const productUrl = `${SITE_URL}/products/${product.slug}`;
  const supportSubject = encodeURIComponent(`${productBrand} ${product.model} サポート・延長保証のお問い合わせ`);
  const supportBody = encodeURIComponent(`下記をご記入ください。\n\nAmazon注文番号：\n製品型番：${product.model}\nお問い合わせ内容：\n症状が分かる写真・動画：添付をお願いします\n`);
  const supportMailUrl = `mailto:${SUPPORT_EMAIL}?subject=${supportSubject}&body=${supportBody}`;
  const productImages = [product.image, product.banner, ...(product.gallery?.map((item) => item.src) ?? [])]
    .filter((image): image is string => Boolean(image))
    .map(absoluteUrl);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${productBrand} ${product.model} Bluetoothスピーカー`,
    brand: { "@type": "Brand", name: productBrand },
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
    ...(product.manualUrl ? {
      subjectOf: {
        "@type": "DigitalDocument",
        name: `${productBrand} ${product.model} 取扱説明書`,
        encodingFormat: "application/pdf",
        url: absoluteUrl(product.manualUrl),
      },
    } : {}),
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
        <nav aria-label="製品ナビゲーション"><a href="#features">特長</a><a href="#specs">仕様</a><a href="#warranty">保証</a>{product.manualUrl && <a href="#manual">説明書</a>}<a href="#faq">FAQ</a><a href="#support">サポート</a></nav>
        <a className="header-cta" href={amazonUrl} target="_blank" rel="noreferrer">Amazonで見る</a>
      </header>

      <main className="product-page">
        <div className="breadcrumbs"><a href="/">ホーム</a><span>›</span><a href="/#lineup">製品一覧</a><span>›</span><b>{product.model}</b></div>
        <ProductHero
          amazonUrl={amazonUrl}
          brand={productBrand}
          colors={product.colors}
          description={product.description}
          image={product.image}
          model={product.model}
          price={product.price}
          slug={product.slug}
          tagline={product.tagline}
          tags={product.tags}
          type={product.type}
        />

        <section className="product-assurance" id="warranty" aria-label="保証と日本語サポート">
          <div className="assurance-intro">
            <span className="assurance-shield" aria-hidden="true">✓</span>
            <div>
              <small>UOUDIO AFTER-SALES CARE</small>
              <b>購入後も、安心してお使いいただけます。</b>
              {product.manualUrl
                ? <a className="assurance-manual-link" href={product.manualUrl} target="_blank" rel="noreferrer">{product.model} 取扱説明書を見る <span>↗</span></a>
                : <a className="assurance-manual-link" href="#faq">製品別FAQを見る <span>↓</span></a>}
            </div>
          </div>
          <div className="assurance-items">
            <article>
              <span>01–02</span>
              <div><b>1年間保証・無料で2年間へ延長</b><small>注文番号と型番をメールで登録</small></div>
            </article>
            <article className="assurance-contact">
              <span>03</span>
              <div>
                <b>日本語アフターサポート</b>
                <div className="assurance-contact-links">
                  <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer">Amazon注文履歴 ↗</a>
                  <a href={supportMailUrl}>{SUPPORT_EMAIL} →</a>
                </div>
              </div>
            </article>
          </div>
          <a href="#support">保証・サポートを見る <span>↓</span></a>
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
            <div><dt>ブランド</dt><dd>{productBrand}</dd></div>
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

        {product.manualUrl && (
          <section className="manual-section section" id="manual">
            <div className="section-heading compact">
              <p className="eyebrow"><span /> USER MANUAL</p>
              <h2>取扱説明書</h2>
              <p>詳しい操作方法や安全上のご注意は、PDF版の取扱説明書でご確認いただけます。</p>
            </div>
            <a className="manual-download" href={product.manualUrl} target="_blank" rel="noreferrer">
              <span><small>PDF / {product.model}</small><b>取扱説明書を開く</b></span>
              <i>↗</i>
            </a>
          </section>
        )}

        <section className="care-section section" id="support">
          <div className="care-heading">
            <p className="eyebrow"><span /> WARRANTY &amp; SUPPORT</p>
            <h2>困ったときも、<br />迷わない<br />サポート。</h2>
            <p>接続や充電などの多くの問題は、設定の確認や再接続で解決できます。まずは説明書とFAQをご確認ください。解決しない場合は、日本語サポートが対応します。</p>
          </div>

          <div className="care-content">
            <div className="warranty-card">
              <div className="warranty-badge"><strong>1</strong><span>YEAR<br />WARRANTY</span></div>
              <div>
                <small>STANDARD WARRANTY</small>
                <h3>購入日から1年間のメーカー保証</h3>
                <p>正常な使用状態で製品に不具合が生じた場合は、保証規定に基づいてサポートします。Amazonの注文番号が購入証明になります。</p>
              </div>
            </div>

            <div className="extension-card">
              <p><span>FREE</span> 延長保証サービス</p>
              <h3>簡単なメール登録で、<br />保証期間を2年間へ。</h3>
              <ol>
                <li><b>1</b><span>Amazonの注文番号を確認</span></li>
                <li><b>2</b><span>注文番号と型番「{product.model}」を送信</span></li>
                <li><b>3</b><span>登録確認メールを保管</span></li>
              </ol>
              <a href={supportMailUrl}>2年延長保証を登録する <span>→</span></a>
            </div>

            <div className="support-route">
              <div className="support-route-heading">
                <small>CONTACT US</small>
                <h3>解決しない場合はこちら</h3>
                <p>お問い合わせ時に注文番号、製品型番、症状が分かる写真または動画をお送りいただくと、確認がスムーズです。</p>
              </div>
              <div className="support-route-actions">
                <a className="amazon-support" href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer">
                  <span className="support-icon" aria-hidden="true">A</span>
                  <span><small>購入情報と一緒に相談</small><b>Amazonの注文履歴から連絡</b></span>
                  <i>↗</i>
                </a>
                <a className="email-support" href={supportMailUrl}>
                  <span className="support-icon" aria-hidden="true">✉</span>
                  <span><small>直接メールで相談</small><b>{SUPPORT_EMAIL}</b></span>
                  <i>→</i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading compact"><p className="eyebrow"><span /> FAQ / {product.model}</p><h2>よくあるご質問</h2></div>
          <div className="faq-list">
            {productFaq.map((item, index) => <details key={item.q} open={index === 0}><summary><span>0{index + 1}</span>{item.q}<i>＋</i></summary><p>{item.a}</p></details>)}
          </div>
        </section>

        <section className="other-products section">
          <div className="section-heading compact"><p className="eyebrow"><span /> OTHER PRODUCTS</p><h2>ほかの製品を見る</h2></div>
          <div>{products.filter((item) => item.slug !== product.slug).slice(0, 3).map((item) => <a href={`/products/${item.slug}`} key={item.slug}><Image src={item.image} alt={`${item.brand ?? "UOUDIO"} ${item.model}`} width={500} height={500} /><span>{item.model}<i>→</i></span></a>)}</div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
