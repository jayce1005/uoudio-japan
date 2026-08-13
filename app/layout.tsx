import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "UOUDIO Japan｜ポータブルBluetoothスピーカー",
      template: "%s | UOUDIO Japan",
    },
    description:
      "UOUDIOポータブルBluetoothスピーカーの日本向け製品情報、使い方、よくある質問、Amazon購入後サポート。",
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "UOUDIO Japan",
      title: "UOUDIO Japan｜音のある毎日を、もっと自由に。",
      description: "UOUDIO Bluetoothスピーカーの製品ラインアップとAmazon購入後サポート。",
      images: [{ url: `${origin}/og.png`, width: 1732, height: 908, alt: "UOUDIO Bluetoothスピーカー" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "UOUDIO Japan｜音のある毎日を、もっと自由に。",
      description: "UOUDIO Bluetoothスピーカーの製品ラインアップとAmazon購入後サポート。",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
