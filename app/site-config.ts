export const SITE_URL = "https://uoudio.com";
export const SITE_NAME = "UOUDIO Japan";
export const SUPPORT_EMAIL = "uoudio_01@outlook.com";
export const HOME_TITLE = "UOUDIO公式｜Bluetoothスピーカー・防水ポータブルスピーカー";
export const DEFAULT_DESCRIPTION =
  "UOUDIO公式サイト。防水・高出力・RGBライト対応など、持ち運びやすいBluetoothスピーカー全8モデルの製品情報、取扱説明書、保証、日本語サポートをご案内します。";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
