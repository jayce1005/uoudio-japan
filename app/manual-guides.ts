export type ManualGuide = {
  slug: string;
  productSlug: string;
  model: string;
  brand: string;
  title: string;
  description: string;
  summary: string;
  manualUrl: string;
  updatedAt: string;
  keywords: string[];
  connectionSteps: { title: string; text: string }[];
  controls: { label: string; action: string }[];
  troubleshooting: { question: string; answer: string }[];
  safety: string[];
};

const commonConnectionSteps = (model: string) => [
  { title: "スピーカーの電源を入れる", text: "電源ボタンを長押しし、起動音またはインジケーターを確認します。" },
  { title: "スマートフォンのBluetoothをオンにする", text: "設定画面からBluetoothを開き、使用可能なデバイスの検索を開始します。" },
  { title: `「${model}」を選択する`, text: "一覧に表示された製品型番を選択します。接続音が鳴る、またはランプが点灯状態になれば接続完了です。" },
];

export const manualGuides: ManualGuide[] = [
  {
    slug: "s16",
    productSlug: "s21",
    model: "S16",
    brand: "UOUDIO",
    title: "UOUDIO S16 取扱説明書・接続方法",
    description: "UOUDIO S16のBluetooth接続、TWSペアリング、EQ切替、RGBライト、リセット、音量・電池表示、AUX・USB・TFカードの使い方を案内します。",
    summary: "Bluetooth 5.4、20Wピーク出力、DSP、最大約24時間再生、IPX6に対応するS16の日本語操作ガイドです。",
    manualUrl: "/manuals/uoudio-s16-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["S16 接続方法", "S16 リセット", "S16 TWS", "S16 ライト 消し方", "S16 取扱説明書"],
    connectionSteps: commonConnectionSteps("S16"),
    controls: [
      { label: "電源", action: "2秒長押しで電源オン／オフ、10秒長押しで再起動、3回押しで工場出荷時設定へリセット" },
      { label: "＋／－", action: "短押しで音量調整、2秒長押しで次／前の曲" },
      { label: "再生ボタン", action: "短押しで再生・一時停止・通話応答／終了、3秒長押しでBluetoothを切断" },
      { label: "ライト", action: "再生ボタンを2回押してモード切替、3回押して消灯" },
      { label: "EQ／TWS", action: "短押しでEQ切替、2回押しでTWS接続／切断" },
      { label: "LED表示", action: "一時停止中は電池残量、＋／－操作時は音量、再生中は接続モードを表示" },
    ],
    troubleshooting: [
      { question: "S16がBluetooth一覧に表示されません。", answer: "前回接続した機器のBluetoothを切り、S16を再起動してください。改善しない場合は電源ボタンを3回押してペアリング情報を初期化します。" },
      { question: "TWSで2台を接続できません。", answer: "スマートフォンとの接続前に同じS16を2台起動し、EQボタンを2回押してスピーカー同士を接続してからスマートフォンへ接続します。" },
      { question: "バッテリー残量が表示されません。", answer: "音楽を一時停止すると、LEDにバッテリー残量がパーセントで表示されます。" },
    ],
    safety: ["入力は5V 1Aまたは5V 2Aを使用してください。", "IPX6は水中使用や丸洗いには対応しません。", "端子が濡れた状態では充電せず、十分に乾かしてください。"],
  },
  {
    slug: "s12",
    productSlug: "s12",
    model: "S12",
    brand: "UOUDIO",
    title: "UOUDIO S12 取扱説明書・接続方法",
    description: "UOUDIO S12のBluetooth接続、TWS、TFカード、RGBライト、リセット、ペアリング情報消去、ハンズフリー通話の操作方法を案内します。",
    summary: "15W出力、DSP、Bluetooth 5.4、最大15時間再生、IPX7に対応するS12の日本語操作ガイドです。",
    manualUrl: "/manuals/uoudio-s12-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["S12 接続方法", "S12 リセット", "S12 TWS", "S12 ライト 消し方", "S12 取扱説明書"],
    connectionSteps: commonConnectionSteps("S12"),
    controls: [
      { label: "電源ボタン", action: "2秒長押しで電源オン／オフ、10秒長押しでリセット、3回押しでペアリング情報を消去" },
      { label: "電源ボタン操作", action: "短押しで再生・一時停止・通話応答／終了、1.5秒長押しで着信拒否、2回押しでBluetooth／TFカード切替" },
      { label: "＋／－", action: "短押しで音量調整、長押しで次／前の曲" },
      { label: "ライト／TWS", action: "短押しでライト切替、3秒長押しで消灯、2回押しでTWS開始／終了" },
    ],
    troubleshooting: [
      { question: "接続しないまま電源が切れます。", answer: "デバイスに約10分間接続されない場合は自動的に電源が切れます。再度電源を入れてペアリングしてください。" },
      { question: "TFカードを認識しません。", answer: "最大32GBまでのTFカードを使用し、カードを差し直してからBluetooth／TFカード機能を切り替えてください。" },
      { question: "音量が小さく感じます。", answer: "スピーカー本体とスマートフォン双方の音量を確認してください。iPhoneでは聴覚保護設定も確認します。" },
    ],
    safety: ["濡れた状態では充電しないでください。", "音量とライト設定によって再生時間が短くなります。", "長時間再生したい場合はRGBライトを消灯してください。"],
  },
  {
    slug: "s11",
    productSlug: "s11",
    model: "S11",
    brand: "UOUDIO",
    title: "UOUDIO S11 取扱説明書・接続方法",
    description: "UOUDIO S11のBluetooth 5.4接続、TWS、AUX・TFカード、RGBライト、Type-C充電、防水使用時の注意点を確認できます。",
    summary: "25W、DSP・Bass 3.0、最大24時間再生、IPX7、8種類のRGBライトを備えたS11の日本語ガイドです。",
    manualUrl: "/manuals/uoudio-s11-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["S11 接続方法", "S11 TWS", "S11 TFカード", "S11 RGBライト", "S11 取扱説明書"],
    connectionSteps: commonConnectionSteps("S11"),
    controls: [
      { label: "再生方法", action: "Bluetooth、3.5mm AUX、TFカードから使用環境に合う方法を選択" },
      { label: "TWS", action: "同じS11を2台用意し、スマートフォンとの接続前にスピーカー同士をペアリング" },
      { label: "RGBライト", action: "8種類のライトモードを切り替え可能。長時間再生時は消灯を推奨" },
      { label: "充電", action: "USB Type-Cで充電。端子部が乾いていることを確認してから接続" },
    ],
    troubleshooting: [
      { question: "最大24時間再生できません。", answer: "最大24時間は音量約30％、RGBライトOFF時の目安です。音量、ライト、再生内容、周囲温度で変化します。" },
      { question: "TWS接続が不安定です。", answer: "2台ともS11であることを確認し、スマートフォンの登録を一度解除してからスピーカー同士を先に接続してください。" },
      { question: "TFカードで再生できません。", answer: "カードの容量・フォーマットと音声ファイル形式を確認し、カードを差し直して再生モードを切り替えてください。" },
    ],
    safety: ["使用前に端子カバーを確実に閉じてください。", "水中での常用や浴槽内での使用は避けてください。", "使用後は水分を拭き取り、乾燥後に充電してください。"],
  },
  {
    slug: "x2-pro",
    productSlug: "s19",
    model: "X2 PRO",
    brand: "UOUDIO",
    title: "UOUDIO X2 PRO 取扱説明書・接続方法",
    description: "UOUDIO X2 PROのBluetooth接続、USB・TF・BT切替、TWS、リセット、RGBライト、通話、音量操作を日本語で案内します。",
    summary: "30W、DSP BASS 3.0、IPX7、最大20時間再生、6種類のRGBライトに対応するX2 PROの操作ガイドです。",
    manualUrl: "/manuals/uoudio-x2-pro-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["X2 PRO 接続方法", "X2 PRO リセット", "X2 PRO TWS", "X2 PRO ライト", "X2 PRO 取扱説明書"],
    connectionSteps: commonConnectionSteps("X2PRO"),
    controls: [
      { label: "電源", action: "3秒長押しで電源オン／オフ、8秒長押しでリセット" },
      { label: "モード", action: "短押しでUSB／TF／Bluetooth切替、2回押しでTWS開始／終了" },
      { label: "再生", action: "短押しで再生・一時停止・通話応答／終了、長押しでペアリング解除" },
      { label: "＋／－", action: "短押しで音量調整、長押しで次／前の曲" },
      { label: "ライト", action: "短押しでライティングモード切替、長押しでライトON／OFF" },
    ],
    troubleshooting: [
      { question: "X2PROがスマートフォンに表示されません。", answer: "本体を再起動し、以前の機器との接続を解除してください。改善しない場合は電源ボタンを8秒長押ししてリセットします。" },
      { question: "再生モードを切り替えたいです。", answer: "モードボタンを短押しするたびにUSB、TFカード、Bluetoothが切り替わります。" },
      { question: "ライトを完全に消せますか？", answer: "はい。ライトボタンを長押しするとライトをON／OFFできます。" },
    ],
    safety: ["5V 1Aまたは5V 2Aの電源を使用してください。", "液体へ浸したまま使用しないでください。", "極端な高温・低温、火気の近く、分解や強い洗剤での清掃を避けてください。"],
  },
  {
    slug: "s20",
    productSlug: "s20",
    model: "S20",
    brand: "UOUDIO",
    title: "UOUDIO S20 取扱説明書・接続方法",
    description: "UOUDIO S20のBluetooth 5.4接続、TWS、microSD・AUX、RGBライト、Type-C充電、ハンズフリー通話を案内します。",
    summary: "20W、DSP、最大24時間再生、IPX7、約345gのコンパクトボディを備えたS20の日本語ガイドです。",
    manualUrl: "/manuals/uoudio-s20-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["S20 接続方法", "S20 TWS", "S20 microSD", "S20 ライト", "S20 取扱説明書"],
    connectionSteps: commonConnectionSteps("S20"),
    controls: [
      { label: "Bluetooth", action: "スマートフォン、タブレット、パソコンから「S20」を選択" },
      { label: "TWS", action: "同じS20を2台接続すると左右に分かれた最大40Wのステレオ再生が可能" },
      { label: "再生方法", action: "Bluetooth、3.5mm AUX、最大32GBのmicroSDカード（MP3）に対応" },
      { label: "RGBライト", action: "リズム連動、点滅、固定色を切り替えられ、消灯にも対応" },
    ],
    troubleshooting: [
      { question: "microSDカードを認識しません。", answer: "最大32GBのカードとMP3形式のファイルを使用し、カードを差し直して再生モードを切り替えてください。" },
      { question: "2台接続でステレオになりません。", answer: "同じS20を2台使用し、スマートフォンへ接続する前にTWSペアリングを完了してください。" },
      { question: "再生時間が短いです。", answer: "音量やRGBライト、再生内容、接続方法、周囲温度で変化します。長時間使用時はライトを消してください。" },
    ],
    safety: ["Type-C充電は5V 1Aを使用してください。", "濡れた状態では充電しないでください。", "水中での常用や浴槽内での使用は避けてください。"],
  },
  {
    slug: "mg-ii",
    productSlug: "gb03",
    model: "MG II",
    brand: "MADDECKERS",
    title: "MADDECKERS MG II 取扱説明書・接続方法",
    description: "MADDECKERS MG IIのBluetooth 6.0接続、3種類のEQ、TWS、USB・microSD・AUX、アンビエントライト、防水防塵の注意点を案内します。",
    summary: "24W、DSP、Bluetooth 6.0、IP67、最大17時間再生に対応するMG IIの日本語操作ガイドです。",
    manualUrl: "/manuals/uoudio-mg2-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["MG II 接続方法", "MG II TWS", "MG II EQ", "MG II ライト", "MG II 取扱説明書"],
    connectionSteps: commonConnectionSteps("MG II"),
    controls: [
      { label: "EQ", action: "音楽や視聴内容に合わせて3種類のEQモードを切り替え" },
      { label: "TWS", action: "同じMG IIを2台接続し、合計48Wのステレオ再生" },
      { label: "再生方法", action: "Bluetooth、USBメモリー、microSDカード、AUX入力に対応" },
      { label: "ライト", action: "常時点灯、呼吸、赤色点滅の3モードと消灯を選択" },
    ],
    troubleshooting: [
      { question: "最大17時間再生できません。", answer: "最大17時間は音量30％での目安です。ライト、EQ、再生内容、周囲温度で変化します。" },
      { question: "TWSで2台を接続できません。", answer: "2台ともMG IIであることを確認し、スマートフォンへ接続する前にスピーカー同士をペアリングしてください。" },
      { question: "有線やメモリーから再生できますか？", answer: "USBメモリー、microSDカード、3.5mm AUX入力に対応しています。" },
    ],
    safety: ["端子カバーを確実に閉じて使用してください。", "IP67でも水中での常用や濡れた状態での充電は避けてください。", "使用後は水分と汚れを拭き取り、十分に乾燥させてください。"],
  },
  {
    slug: "gb-01",
    productSlug: "gb-mini",
    model: "GB 01",
    brand: "UOUDIO",
    title: "UOUDIO GB 01 取扱説明書・接続方法",
    description: "UOUDIO GB 01のBluetooth接続、TWS、USB・TFカード・AUX、ライト、Type-C充電、ボタン操作を日本語で案内します。",
    summary: "10W、Bluetooth 6.0、IPX6、最大約12時間再生に対応するGB 01の日本語操作ガイドです。",
    manualUrl: "/manuals/uoudio-gb01-manual.pdf",
    updatedAt: "2026-10-10",
    keywords: ["GB 01 接続方法", "GB01 TWS", "GB01 TFカード", "GB01 ライト", "GB01 取扱説明書"],
    connectionSteps: commonConnectionSteps("GB01"),
    controls: [
      { label: "電源／モード／TWS", action: "3秒長押しで電源オン／オフ、短押しでBluetooth／USB／TFカード切替、2回押しでTWS" },
      { label: "＋／－", action: "短押しで音量調整、3秒長押しで次／前の曲" },
      { label: "再生／ライト", action: "短押しで再生・一時停止・通話応答／終了、2回押しでライト切替、3秒長押しで着信拒否" },
      { label: "外部メディア", action: "AUX、最大32GBのTFカード・USBメモリー、MP3／WAVに対応" },
    ],
    troubleshooting: [
      { question: "GB01をTWS接続する方法は？", answer: "2台の電源を入れ、接続中の機器をすべて解除します。電源ボタンを2回押してTWSに入り、その後スマートフォンへ接続します。" },
      { question: "USBやTFカードで再生できません。", answer: "最大32GBでMP3またはWAV形式のファイルを使用し、電源／モードボタンで再生モードを切り替えてください。" },
      { question: "充電時間と再生時間の目安は？", answer: "5V 1Aで約3時間充電、ライトOFF・音量30％時で約12時間再生が目安です。" },
    ],
    safety: ["5V 1AのType-C充電を使用してください。", "IPX6は浸水や丸洗いには対応しません。", "直射日光、火気、高温環境を避け、分解や電池交換を行わないでください。"],
  },
];

export function getManualGuide(slug: string) {
  return manualGuides.find((guide) => guide.slug === slug);
}

export function getManualGuideByProductSlug(productSlug: string) {
  return manualGuides.find((guide) => guide.productSlug === productSlug);
}
