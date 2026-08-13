export type Product = {
  slug: string;
  model: string;
  image: string;
  type: string;
  tagline: string;
  description: string;
  tags: string[];
  specs: { label: string; value: string; note?: string }[];
  features: { title: string; text: string }[];
  gallery?: { src: string; alt: string }[];
  banner?: string;
  amazonUrl?: string;
  price?: number;
};

export const products: Product[] = [
  {
    slug: "s2", model: "S2", image: "/s2.jpg", type: "POWERFUL OUTDOOR",
    tagline: "大きな音で、外へ出よう。",
    description: "広い場所にも音を届ける80W出力。持ちやすい大型ハンドルとタフな防水設計を備えた、アウトドア向けモデルです。",
    tags: ["80W", "IPX7", "30時間", "RGBライト"],
    specs: [
      { label: "定格出力", value: "80W" }, { label: "防水性能", value: "IPX7" },
      { label: "連続再生", value: "最大30時間", note: "音量・ライト設定により異なります" },
      { label: "ライト", value: "6モード RGB" },
    ],
    features: [
      { title: "80Wパワフルサウンド", text: "アウトドアやパーティーでも存在感のある、力強い低音と大音量を届けます。" },
      { title: "IPX7防水", text: "水辺や突然の雨にも配慮した防水設計。屋外へ気軽に持ち出せます。" },
      { title: "最大30時間再生", text: "一度の充電で長時間楽しめる、ロングライフバッテリーを搭載。" },
      { title: "音と光の演出", text: "6種類のRGBライトが音楽に合わせて空間を彩ります。" },
    ],
  },
  {
    slug: "s21", model: "S21", image: "/s21-main.jpg", type: "20W / DSP / 24H PLAYBACK",
    tagline: "20Wの音を、一日中どこへでも。",
    description: "20W出力とDSPサウンド処理を備えたポータブルBluetoothスピーカー。最大24時間再生、音量・バッテリー残量のデジタル表示、2種類のEQ、RGBライト、IPX6防水に対応します。",
    tags: ["20W + DSP", "最大24時間", "IPX6", "デジタル表示"],
    amazonUrl: "https://www.amazon.co.jp/dp/B0H2V7R7Q2",
    price: 3699,
    specs: [
      { label: "定格出力", value: "20W" },
      { label: "音質処理", value: "DSPサウンド処理" },
      { label: "Bluetooth", value: "Bluetooth 5.4" },
      { label: "連続再生", value: "最大24時間", note: "音量30％・RGBライトOFF時の目安" },
      { label: "デジタル表示", value: "接続モード / バッテリー残量 / 音量" },
      { label: "音質調整", value: "2種類のEQモード" },
      { label: "ライト", value: "RGBライト / 消灯可能" },
      { label: "ステレオ", value: "TWS対応", note: "同一モデルが2台必要です" },
      { label: "再生方法", value: "Bluetooth / AUX / USBメモリー / TFカード" },
      { label: "防水性能", value: "IPX6", note: "水中使用・丸洗いには非対応" },
      { label: "充電", value: "USB Type-C" },
      { label: "携帯性", value: "吊り下げストラップ付き" },
    ],
    features: [
      { title: "20W大音量・DSPサウンド処理", text: "DSPで音のバランスを整え、低音から中高音まで聞き取りやすく再生。音楽、動画、ラジオ、ポッドキャストなどを、屋内外でクリアに楽しめます。" },
      { title: "最大24時間・Type-C充電", text: "音量30％・RGBライトOFF時で最大24時間の連続再生に対応。自宅での長時間使用はもちろん、旅行やキャンプにも便利です。" },
      { title: "音量・バッテリーのデジタル表示", text: "接続中はBT・AUX・USBのモードを表示。一時停止中はバッテリー残量、＋／－ボタン操作時は音量レベルを数字で確認できます。" },
      { title: "RGBライト・2種類のEQ", text: "音楽の雰囲気を高めるRGBライトを搭載し、消灯にも対応。2種類のEQモードから、曲や使用シーンに合わせたサウンドを選べます。" },
      { title: "Bluetooth 5.4・TWS・IPX6", text: "Bluetooth、AUX、USBメモリー、TFカード再生に対応。同一モデル2台でTWSステレオを楽しめ、IPX6防水とストラップで屋外にも持ち出しやすい設計です。" },
    ],
    banner: "/s21-banner.jpg",
    gallery: [
      { src: "/s21-sound.jpg", alt: "S21 20W大音量サウンド" },
      { src: "/s21-dsp.jpg", alt: "S21 DSPサウンド処理" },
      { src: "/s21-battery.jpg", alt: "S21 最大24時間連続再生" },
      { src: "/s21-display.jpg", alt: "S21 音量とバッテリー残量のデジタル表示" },
      { src: "/s21-eq.jpg", alt: "S21 2種類のEQモードとRGBライト" },
      { src: "/s21-tws.jpg", alt: "S21 2台接続TWSステレオ" },
      { src: "/s21-waterproof.jpg", alt: "S21 IPX6防水仕様" },
      { src: "/s21-portable.jpg", alt: "S21 吊り下げストラップ付きポータブル設計" },
    ],
  },
  {
    slug: "s19", model: "S19", image: "/s19.jpg", type: "LIGHTING PERFORMANCE",
    tagline: "音楽を、光でも楽しむ。",
    description: "30Wの迫力と鮮やかなRGBライトを両立。日常からアウトドアまで、空間を盛り上げるモデルです。",
    tags: ["30W", "IPX7", "20時間", "TWS"],
    specs: [
      { label: "定格出力", value: "30W" }, { label: "防水性能", value: "IPX7" },
      { label: "連続再生", value: "最大20時間", note: "音量・ライト設定により異なります" },
      { label: "バッテリー", value: "4000mAh" },
    ],
    features: [
      { title: "30W重低音", text: "デュアルドライバーとDSP BASS 3.0で、深みのある低音を再生します。" },
      { title: "6種類のライト", text: "シーンに合わせて切り替えられるRGBライティングを搭載。" },
      { title: "TWSペアリング", text: "2台接続時は合計最大60Wのステレオサウンドを楽しめます。" },
      { title: "持ち運びやすい", text: "ストラップ付きで、バッグやアウトドアギアにも取り付けられます。" },
    ],
  },
  {
    slug: "s20", model: "S20", image: "/s20.jpg", type: "LIGHT & PORTABLE",
    tagline: "軽やかに、いい音を。",
    description: "約345gの軽量ボディに20Wサウンドと防水性能を搭載。毎日連れ歩きやすいスリムモデルです。",
    tags: ["20W", "約345g", "IPX7", "RGBライト"],
    specs: [
      { label: "定格出力", value: "20W" }, { label: "防水性能", value: "IPX7" },
      { label: "重量", value: "約345g" }, { label: "携帯性", value: "ストラップ付き" },
    ],
    features: [
      { title: "20Wサウンド", text: "52mmドライバーを2基搭載し、厚みのある低音とクリアな音を再生します。" },
      { title: "約345gの軽量設計", text: "バッグに収まりやすく、手軽に持ち運べるコンパクトなボディ。" },
      { title: "IPX7防水", text: "バスルームやキッチン、アウトドアでも使いやすい防水設計です。" },
      { title: "RGBライト", text: "音楽の雰囲気に合わせて光の色を切り替えられます。" },
    ],
  },
  {
    slug: "s11", model: "S11", image: "/s11-main.jpg", type: "25W / BASS 3.0 / IPX7",
    tagline: "迫力の25Wを、音と光で楽しむ。",
    description: "25W高出力とDSP音声処理、Bass 3.0重低音を備えたポータブルBluetoothスピーカー。Bluetooth 5.4、最大24時間再生、IPX7防水、TWSステレオ、8種類のRGBライトに対応します。",
    tags: ["25W + DSP", "Bass 3.0", "最大24時間", "IPX7"],
    amazonUrl: "https://www.amazon.co.jp/dp/B0G7GQCTL9?th=1",
    price: 3999,
    specs: [
      { label: "定格出力", value: "25W" },
      { label: "音質処理", value: "DSP音声処理 / Bass 3.0" },
      { label: "Bluetooth", value: "Bluetooth 5.4" },
      { label: "連続再生", value: "最大24時間", note: "音量約30％・RGBライトOFF時の目安" },
      { label: "防水性能", value: "IPX7", note: "使用前に端子カバーを確実に閉じてください" },
      { label: "ステレオ", value: "TWS対応", note: "同一モデルが2台必要です" },
      { label: "ライト", value: "8種類のRGBライトモード" },
      { label: "再生方法", value: "Bluetooth / AUX / TFカード" },
      { label: "充電", value: "USB Type-C" },
      { label: "対応機器", value: "スマートフォン / タブレット / パソコンほか" },
      { label: "使用シーン", value: "室内 / お風呂 / キャンプ / アウトドア" },
    ],
    features: [
      { title: "25W高出力・DSP・Bass 3.0", text: "コンパクトなボディから25Wのパワフルな音を再生。DSPで音のバランスを整え、ボーカルはクリアに、低音はBass 3.0で力強く届けます。" },
      { title: "Bluetooth 5.4・3つの再生方法", text: "スマートフォンやタブレット、パソコンとスムーズに接続。Bluetoothのほか、AUX入力とTFカード再生にも対応します。" },
      { title: "最大24時間・Type-C充電", text: "音量約30％・RGBライトOFF時で最大24時間再生。自宅での長時間使用から旅行、キャンプまで幅広く活躍します。" },
      { title: "IPX7防水・屋内外で使いやすい", text: "水しぶきや急な雨が気になる場所でも使いやすいIPX7防水仕様。お風呂、キッチン、ベランダ、キャンプなどで音楽を楽しめます。" },
      { title: "TWSステレオ・8種類RGB", text: "同じS11を2台接続すると、左右に広がるTWSステレオ再生が可能。8種類のRGBライトが音楽に合わせて空間を演出します。" },
    ],
    gallery: [
      { src: "/s11-sound.jpg", alt: "S11 25W高出力とBass 3.0重低音" },
      { src: "/s11-tws.jpg", alt: "S11 Bluetooth 5.4とTWSステレオ" },
      { src: "/s11-inputs.jpg", alt: "S11 Bluetooth AUX TFカードの3種類の再生方法" },
      { src: "/s11-battery.jpg", alt: "S11 最大24時間再生とUSB Type-C充電" },
      { src: "/s11-waterproof.jpg", alt: "S11 IPX7防水仕様" },
      { src: "/s11-portable.jpg", alt: "S11 キャンプやアウトドアでの使用イメージ" },
    ],
  },
  {
    slug: "s12", model: "S12", image: "/s12-main.jpg", type: "15W / DSP / RGB",
    tagline: "毎日のそばで、クリアに響く15W。",
    description: "DSP音声チューニングと15W出力を備えた、約380gのポータブルBluetoothスピーカー。Bluetooth 5.4、6色RGBライト、IPX7防水、TWSステレオ、最大15時間再生に対応します。",
    tags: ["15W + DSP", "Bluetooth 5.4", "IPX7", "最大15時間"],
    amazonUrl: "https://www.amazon.co.jp/dp/B0H5HX29VC/ref=twister_B0H8WVMG44?_encoding=UTF8&th=1",
    specs: [
      { label: "定格出力", value: "15W" },
      { label: "音質処理", value: "DSP音声チューニング" },
      { label: "Bluetooth", value: "Bluetooth 5.4" },
      { label: "ライト", value: "6色RGB / 消灯可能" },
      { label: "操作ボタン", value: "バックライト搭載" },
      { label: "防水性能", value: "IPX7", note: "濡れた状態では充電しないでください" },
      { label: "ステレオ", value: "TWS対応", note: "同一モデルが2台必要です" },
      { label: "連続再生", value: "最大15時間", note: "音量・ライト設定・再生内容・使用環境により異なります" },
      { label: "充電", value: "USB Type-C" },
      { label: "再生方法", value: "Bluetooth / TFカード" },
      { label: "通話", value: "ハンズフリー通話対応" },
      { label: "重量", value: "約380g" },
      { label: "携帯性", value: "ストラップ付き" },
    ],
    features: [
      { title: "DSP音声チューニング・15W出力", text: "DSPで音のバランスを整え、ボーカルやBGM、動画の音声を聞き取りやすく再生。コンパクトながら、日常使いに十分な15Wサウンドを届けます。" },
      { title: "6色RGB・発光ボタン", text: "音楽に合わせて空間を彩る6色RGBライトと、暗い場所でも操作しやすい発光ボタンを搭載。ライトは消灯して使用できます。" },
      { title: "Bluetooth 5.4・TWS・TFカード", text: "スマートフォンやタブレットと接続しやすいBluetooth 5.4に対応。同一モデル2台でTWSステレオ再生、TFカードでの音楽再生も楽しめます。" },
      { title: "IPX7防水・約380g", text: "水しぶきや急な雨が気になる場所でも使いやすいIPX7防水仕様。約380gの軽量ボディとストラップで、室内からアウトドアまで気軽に持ち出せます。" },
      { title: "最大15時間・Type-C充電", text: "最大15時間の連続再生とUSB Type-C充電に対応。ハンズフリー通話も利用でき、毎日の持ち歩きにも使いやすい一台です。" },
    ],
    banner: "/s12-portable-banner.jpg",
    gallery: [
      { src: "/s12-sound.jpg", alt: "S12 15WサウンドとDSP音声チューニング" },
      { src: "/s12-rgb.jpg", alt: "S12 6色RGBライトと発光ボタン" },
      { src: "/s12-tws.jpg", alt: "S12 Bluetooth 5.4とTWSステレオ" },
      { src: "/s12-waterproof.jpg", alt: "S12 IPX7防水仕様" },
      { src: "/s12-inputs.jpg", alt: "S12 Bluetooth接続とTFカード再生" },
      { src: "/s12-battery.jpg", alt: "S12 最大15時間再生と約380gの軽量設計" },
    ],
  },
  {
    slug: "gb03", model: "GB03", image: "/gb03.jpg", type: "LONG PLAY SQUARE",
    tagline: "長く聴ける、30W。",
    description: "30Wサウンドと最大20時間再生を備えたスクエアモデル。シンプルなデザインでどこにでも馴染みます。",
    tags: ["30W", "20時間", "DSP", "TWS"],
    specs: [
      { label: "定格出力", value: "30W" }, { label: "連続再生", value: "最大20時間" },
      { label: "音質処理", value: "DSP" }, { label: "ステレオ", value: "TWS対応" },
    ],
    features: [
      { title: "30Wサウンド", text: "屋内外で楽しめる、力強くバランスのよいサウンドを届けます。" },
      { title: "最大20時間再生", text: "朝から夜まで音楽を楽しめるロングライフ設計です。" },
      { title: "DSPオーディオ", text: "再生する音を整え、クリアな音と深い低音を両立します。" },
      { title: "TWS対応", text: "2台を接続して、広がりのあるステレオ再生が可能です。" },
    ],
  },
  {
    slug: "gb-mini", model: "GB MINI", image: "/gb-mini-product.jpg", type: "RETRO MINI / DSP SOUND",
    tagline: "手のひらサイズに、豊かな10Wサウンド。",
    description: "10WフルレンジドライバーとDSP音質補正を搭載した、レザー調シリコンボディのポータブルBluetoothスピーカー。IPX6防水、TWS、最大12時間再生、3種類のライト、AUX・TFカード・USB再生に対応します。",
    tags: ["10W + DSP", "IPX6", "最大12時間", "TWS 20W"],
    specs: [
      { label: "定格出力", value: "10W" },
      { label: "音質処理", value: "DSPデジタル音声処理" },
      { label: "TWSステレオ", value: "2台接続で合計20W", note: "同一モデルが2台必要です" },
      { label: "防水性能", value: "IPX6", note: "水中使用・丸洗いには非対応" },
      { label: "連続再生", value: "最大12時間", note: "30%音量・ライトOFF時の目安" },
      { label: "ライト", value: "ホワイト常時点灯 / 暖色ブリージング / SOS赤色点滅 / OFF" },
      { label: "再生方法", value: "Bluetooth / 3.5mm AUX / TFカード / USBメモリー" },
      { label: "メディア対応", value: "最大32GB・FAT32・MP3", note: "TFカード・USBメモリー" },
      { label: "充電", value: "USB Type-C・5V 1A / 2A" },
      { label: "付属品", value: "ストラップ / 日本語取扱説明書" },
    ],
    features: [
      { title: "10Wサウンド・DSP音質補正", text: "10WフルレンジドライバーとDSP技術で歪みを抑え、高音・中音・低音をバランスよく再生。ボーカルや会話も聞き取りやすいクリアなサウンドです。" },
      { title: "TWSステレオ・2台で20W", text: "同一モデル2台をワイヤレス接続すると、左右に広がる合計20Wのステレオ再生を楽しめます。" },
      { title: "レザー調シリコンボディ", text: "滑りにくく、汚れを拭き取りやすいシボ加工。擦れや細かな傷を抑え、落下時の衝撃もやわらげます。" },
      { title: "IPX6防水・3種類のライト", text: "雨や日常の水しぶきに対応。ホワイト常時点灯、暖色ブリージング、SOS赤色点滅を選べ、ライトOFFにもできます。" },
      { title: "最大12時間・多彩な再生方法", text: "Bluetooth、3.5mm AUX、TFカード、USBメモリーに対応。Type-C充電、ストラップ、日本語取扱説明書付きです。" },
    ],
    banner: "/gb-mini-banner.jpg",
    gallery: [
      { src: "/gb-mini-sound.jpg", alt: "GB MINI 10Wフルレンジドライバーと内部構造" },
      { src: "/gb-mini-dsp.jpg", alt: "GB MINI DSPデジタル音声処理" },
      { src: "/gb-mini-tws.jpg", alt: "GB MINI 2台接続TWSステレオ" },
      { src: "/gb-mini-lights.jpg", alt: "GB MINI 3種類のライトモード" },
      { src: "/gb-mini-battery.jpg", alt: "GB MINI 最大12時間連続再生" },
      { src: "/gb-mini-waterproof.jpg", alt: "GB MINI IPX6防水" },
      { src: "/gb-mini-inputs.jpg", alt: "GB MINI AUX TFカード USB Type-C対応" },
      { src: "/gb-mini-sos.jpg", alt: "GB MINI SOS赤色点滅ライト" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
