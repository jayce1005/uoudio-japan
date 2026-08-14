import type { MetadataRoute } from "next";
import { products } from "./products";
import { SITE_URL } from "./site-config";

const LAST_UPDATED = new Date("2026-08-14T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [product.image, product.banner, ...(product.gallery?.map((item) => item.src) ?? [])]
      .filter((image): image is string => Boolean(image))
      .map((image) => `${SITE_URL}${image}`),
  }));

  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/home-hero-lifestyle-v1.png`,
        ...products.map((product) => `${SITE_URL}${product.image}`),
      ],
    },
    ...productPages,
  ];
}
