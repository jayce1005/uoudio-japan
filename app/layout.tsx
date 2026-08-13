import type { Metadata } from "next";
import "./globals.css";
import "./brand-logo.css";
import "./site-footer.css";
import "./japan-theme.css";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "./site-config";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: "UOUDIO Japan｜ポータブルBluetoothスピーカー",
      template: "%s | UOUDIO Japan",
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "UOUDIO",
      "Bluetoothスピーカー",
      "ワイヤレススピーカー",
      "ポータブルスピーカー",
      "防水スピーカー",
      "アウトドアスピーカー",
    ],
    creator: "UOUDIO",
    publisher: "UOUDIO",
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: "UOUDIO Japan｜どこでも音楽を、もっと自由に。",
      description: "UOUDIO Bluetoothスピーカーの製品ラインアップとAmazon購入後サポート。",
      images: [{ url: absoluteUrl("/og.png"), width: 1732, height: 908, alt: "UOUDIO Bluetoothスピーカー" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "UOUDIO Japan｜どこでも音楽を、もっと自由に。",
      description: "UOUDIO Bluetoothスピーカーの製品ラインアップとAmazon購入後サポート。",
      images: [absoluteUrl("/og.png")],
    },
  };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "UOUDIO",
        url: SITE_URL,
        logo: absoluteUrl("/uoudio-logo.png"),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "ja-JP",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        {children}
      </body>
    </html>
  );
}
