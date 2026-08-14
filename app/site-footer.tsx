import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "./site-config";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" aria-label="UOUDIO Japan ホーム">
            <Image src="/uoudio-logo.png" alt="UOUDIO" width={2172} height={724} />
          </Link>
          <h2>どこでも音楽を、もっと自由に。</h2>
          <p>ポータブルBluetoothスピーカーを中心に、毎日の音楽をもっと身近に楽しめるオーディオブランドです。</p>
        </div>

        <nav className="site-footer-nav" aria-label="フッターナビゲーション">
          <div>
            <p>PRODUCTS</p>
            <Link href="/#lineup">製品一覧</Link>
            <Link href="/products/s21">S16</Link>
            <Link href="/products/s12">S12</Link>
            <Link href="/products/s11">S11</Link>
          </div>
          <div>
            <p>ABOUT</p>
            <Link href="/#about">UOUDIOについて</Link>
            <Link href="/#lineup">製品を選ぶ</Link>
          </div>
          <div>
            <p>SUPPORT</p>
            <Link href="/#support">ご購入後のサポート</Link>
            <Link href="/#lineup">製品別FAQ</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <a href="https://www.amazon.co.jp/gp/css/order-history" target="_blank" rel="noreferrer">Amazon注文履歴 ↗</a>
          </div>
        </nav>
      </div>

      <div className="site-footer-bottom">
        <small>© {new Date().getFullYear()} UOUDIO. All rights reserved.</small>
        <span>UOUDIO JAPAN OFFICIAL WEBSITE</span>
      </div>
    </footer>
  );
}
