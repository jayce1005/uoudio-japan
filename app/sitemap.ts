import type { MetadataRoute } from "next";
import { products } from "./products";
import { SITE_URL } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [`${SITE_URL}${product.image}`],
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${SITE_URL}/og.png`],
    },
    ...productPages,
  ];
}
