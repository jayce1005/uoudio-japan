/* eslint-disable @next/next/no-html-link-for-pages -- native navigation avoids stalled client routing on the Cloudflare runtime */
type HeaderLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  className?: string;
  links?: HeaderLink[];
  cta?: {
    href: string;
    label: string;
    external?: boolean;
  };
};

const supportLinks = [
  {
    href: "/support/contact",
    label: "お問い合わせ",
    description: "保証・交換・製品のご相談",
  },
  {
    href: "/support/manuals",
    label: "取扱説明書ダウンロード",
    description: "製品型番からPDFを選ぶ",
  },
];

export default function SiteHeader({ className = "", links = [], cta }: SiteHeaderProps) {
  return (
    <header className={`site-header ${className}`.trim()}>
      <a className="brand" href="/" aria-label="UOUDIO Japan ホーム">
        UOUDIO<span>®</span>
      </a>

      <nav aria-label="メインナビゲーション">
        {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        <details className="header-support-menu">
          <summary>サポート <span aria-hidden="true">⌄</span></summary>
          <div className="header-support-dropdown">
            <small>SUPPORT</small>
            {supportLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <b>{link.label}</b>
                <span>{link.description}</span>
              </a>
            ))}
          </div>
        </details>
      </nav>

      <div className="header-actions">
        <a className="header-support-shortcut" href="/support/contact">サポート</a>
        {cta && (
          <a
            className="header-cta"
            href={cta.href}
            {...(cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {cta.label}
          </a>
        )}
      </div>
    </header>
  );
}
