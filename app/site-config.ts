export const SITE_URL = "https://uoudio.com";
export const SITE_NAME = "UOUDIO Japan";
export const SUPPORT_EMAIL = "uoudio_01@outlook.com";
export const HOME_TITLE = "UOUDIO Japan公式｜Bluetoothスピーカー・取扱説明書・サポート";
export const DEFAULT_DESCRIPTION =
  "UOUDIO Japan公式サイト。防水・高出力・RGBライト対応のポータブルBluetoothスピーカー全8モデルを掲載。製品情報、日本語取扱説明書、1年間保証、無料の2年延長保証、お問い合わせ窓口をご案内します。";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
