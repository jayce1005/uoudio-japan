export const SITE_URL = "https://uoudio.com";
export const SITE_NAME = "UOUDIO Japan";
export const DEFAULT_DESCRIPTION =
  "UOUDIOポータブルBluetoothスピーカーの日本向け公式製品情報。製品仕様、使い方、よくある質問、Amazon購入後サポートをご案内します。";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
