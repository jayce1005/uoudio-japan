"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

type ColorOption = {
  name: string;
  swatch: string;
  image?: string;
};

type ProductHeroProps = {
  amazonUrl: string;
  brand: string;
  colors?: ColorOption[];
  description: string;
  image: string;
  model: string;
  price?: number;
  slug: string;
  tagline: string;
  tags: string[];
  type: string;
};

export default function ProductHero({
  amazonUrl,
  brand,
  colors,
  description,
  image,
  model,
  price,
  slug,
  tagline,
  tags,
  type,
}: ProductHeroProps) {
  const [selectedColor, setSelectedColor] = useState(colors?.[0]?.name ?? "");
  const activeColor = colors?.find((color) => color.name === selectedColor) ?? colors?.[0];
  const activeImage = activeColor?.image ?? image;
  const formattedPrice = price ? new Intl.NumberFormat("ja-JP").format(price) : null;

  return (
    <section className="detail-hero">
      <div className="detail-copy">
        <p className="eyebrow"><span /> {type}</p>
        <p className="detail-brand">{brand}</p>
        <h1>{model}</h1>
        <h2>{tagline}</h2>
        <p>{description}</p>
        <div className="detail-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {colors && (
          <div className={styles.colorOptions} aria-label="カラーバリエーション">
            <p>カラーバリエーション</p>
            <div>
              {colors.map((color, index) => {
                const selected = color.name === activeColor?.name;
                return (
                  <button
                    type="button"
                    key={color.name}
                    className={selected ? styles.selectedColor : ""}
                    aria-pressed={selected}
                    onClick={() => setSelectedColor(color.name)}
                  >
                    <i style={{ backgroundColor: color.swatch }} />
                    {color.name}
                    {index === 0 && <small>メイン掲載</small>}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {formattedPrice && (
          <div className={styles.priceBlock}>
            <span>Amazon販売価格</span>
            <strong>¥{formattedPrice}</strong>
            <small>※価格は変更される場合があります。</small>
          </div>
        )}
        <div className="detail-actions">
          <a className="button primary" href={amazonUrl} target="_blank" rel="noreferrer">Amazonで見る <span>↗</span></a>
          <a className="text-link" href="#specs">仕様を見る <span>↓</span></a>
        </div>
      </div>
      <div className={`detail-image detail-${slug}`} aria-live="polite">
        <Image
          key={activeImage}
          src={activeImage}
          alt={`${brand} ${model} ${activeColor ? `${activeColor.name} ` : ""}Bluetoothスピーカー`}
          width={1500}
          height={1500}
          priority
        />
      </div>
    </section>
  );
}
