export const SITE_URL = "https://uoudio.com";
export const SITE_NAME = "UOUDIO Japan";
export const DEFAULT_DESCRIPTION =
  "どこでも音楽を、もっと自由に。UOUDIOは、使いやすさ、持ち運びやすさ、安定した接続を追求するポータブルBluetoothスピーカーブランドです。";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
