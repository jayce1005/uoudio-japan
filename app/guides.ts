export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  intro: string;
  keywords: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  relatedProductSlugs: string[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "bluetooth-speaker-connection-reset-guide",
    title: "Bluetoothスピーカーが接続できないときの確認方法｜再接続・リセット手順",
    description: "Bluetoothスピーカーがスマートフォンに表示されない、接続できない、音が出ない場合の確認手順を、UOUDIO各モデルの説明書に基づいて解説します。",
    category: "接続・トラブル解決",
    publishedAt: "2026-10-10",
    updatedAt: "2026-10-10",
    intro: "Bluetoothスピーカーが接続できない場合でも、故障とは限りません。以前の接続情報、スマートフォン側の設定、再生モードなどを順番に確認すると解決できることがあります。ここではUOUDIO製品の取扱説明書をもとに、共通して確認できる手順をまとめます。",
    keywords: ["Bluetoothスピーカー 接続できない", "Bluetooth ペアリング できない", "スピーカー リセット", "Bluetooth 音が出ない"],
    sections: [
      {
        heading: "最初に確認する4つのポイント",
        paragraphs: ["まずスピーカーとスマートフォンを1m以内に置き、双方の電池残量を確認します。そのうえで、次の項目を順番に確認してください。"],
        bullets: [
          "スピーカーの電源が入り、Bluetoothモードになっているか",
          "別のスマートフォンやパソコンへ自動接続されていないか",
          "スマートフォンのBluetoothがオンになっているか",
          "音量がスピーカー側とスマートフォン側の両方で上がっているか",
        ],
      },
      {
        heading: "登録済みの接続情報を削除して再接続する",
        paragraphs: [
          "スマートフォンのBluetooth設定を開き、対象の製品型番を一度削除します。スピーカーの電源を切ってから再度入れ、利用可能なデバイス一覧から型番を選択してください。",
          "S16は電源ボタンを3回押すと工場出荷時設定へ戻せます。S12は電源ボタンを3回押してペアリング情報を消去できます。X2 PROは電源ボタンを8秒長押しするとリセットできます。モデルごとに操作が異なるため、製品別の操作ガイドも確認してください。",
        ],
      },
      {
        heading: "Bluetooth以外の再生モードになっていないか確認する",
        paragraphs: [
          "USBメモリー、TFカード、microSD、AUX入力に対応するモデルでは、別の再生モードが選択されているとBluetoothから音が出ません。モードボタンを押し、Bluetoothモードへ戻してから再接続します。",
          "S16のデジタル表示では、BT・AUX・USBなど現在の接続モードを確認できます。GB 01は電源／モードボタンの短押しでBluetooth、USB、TFカードを切り替えます。",
        ],
      },
      {
        heading: "TWS接続時はスマートフォンより先に2台を接続する",
        paragraphs: [
          "TWSを使用するときは、同じ型番のスピーカーを2台用意します。スマートフォンとのBluetooth接続をいったん解除し、2台のスピーカー同士を先にTWSペアリングしてください。接続音を確認してから、スマートフォンで代表となる1台の型番を選択します。",
          "異なる型番同士ではTWS接続できません。接続が不安定な場合は2台の電源を切り、スマートフォンに残っている登録情報を削除してから最初からやり直します。",
        ],
      },
      {
        heading: "改善しない場合",
        paragraphs: [
          "別のスマートフォンでも同じ症状が起きるか確認すると、本体側と端末側のどちらに原因があるか切り分けやすくなります。充電後の再起動、登録情報の削除、製品別リセットを行っても改善しない場合は、製品型番、症状、購入情報、状態が分かる写真または動画を添えてサポート窓口へご相談ください。",
        ],
      },
    ],
    relatedProductSlugs: ["s21", "s12", "s11", "s19"],
  },
];

export function getGuideArticle(slug: string) {
  return guideArticles.find((article) => article.slug === slug);
}
