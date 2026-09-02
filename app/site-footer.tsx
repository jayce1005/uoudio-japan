/* eslint-disable @next/next/no-html-link-for-pages -- native hash navigation is intentional in the global footer */
import Image from "next/image";
import Link from "next/link";

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
          <div className="footer-products">
            <p>PRODUCTS</p>
            <a className="footer-all-products" href="/#lineup">すべての製品を見る <span aria-hidden="true">→</span></a>
            <div className="footer-product-grid">
              <Link href="/products/s21"><span>01</span>S16</Link>
              <Link href="/products/s12"><span>02</span>S12</Link>
              <Link href="/products/s19"><span>03</span>X2 PRO</Link>
              <Link href="/products/s20"><span>04</span>S20</Link>
              <Link href="/products/s11"><span>05</span>S11</Link>
              <Link href="/products/gb03"><span>06</span>MG II</Link>
              <Link href="/products/gb-mini"><span>07</span>GB 01</Link>
              <Link href="/products/s2"><span>08</span>S2</Link>
            </div>
          </div>
          <div>
            <p>ABOUT</p>
            <a href="/#about">UOUDIOについて</a>
            <a href="/#lineup">製品を選ぶ</a>
          </div>
          <div>
            <p>SUPPORT</p>
            <Link className="footer-support-link" href="/support/contact">
              <b>お問い合わせ</b>
              <span>保証・交換・製品のご相談</span>
            </Link>
            <Link className="footer-support-link" href="/support/manuals">
              <b>取扱説明書ダウンロード</b>
              <span>製品型番からPDFを選ぶ</span>
            </Link>
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
