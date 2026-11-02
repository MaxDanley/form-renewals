import { PURGO_ORIGIN } from "@/lib/brand";
import { products, type FormProduct } from "@/lib/products";

export type FormBundle = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  productSlugs: string[];
  price: number;
  compareAt: number;
  savePercent: number;
  purgoUrl: string;
};

/**
 * Bundles only ever contain launched products, so an unpriced member is a data
 * error rather than a display case — fail loudly at build instead of quietly
 * pricing it at zero.
 */
function listPrice(product: FormProduct): number {
  if (product.price === undefined) {
    throw new Error(
      `Bundle includes an unpriced product: ${product.slug}. Give it a price or drop it from the bundle.`
    );
  }
  return product.price;
}

const shampoo = products[0];
const capsule = products[1];
const lift = products[2];

export const bundles: FormBundle[] = [
  {
    slug: "copper-growth-duo",
    name: "Copper Growth Duo",
    tagline: "Scalp cleanse + melt-on skin capsules.",
    description:
      "Copper Growth Shampoo and Capsule Cream together for a daily peptide ritual across scalp and skin.",
    badge: "Build your routine",
    image: "/images/renewal/collection.png",
    productSlugs: [shampoo.slug, capsule.slug],
    price: Number(((listPrice(shampoo) + listPrice(capsule)) * 1).toFixed(2)),
    compareAt: Number((listPrice(shampoo) + listPrice(capsule)).toFixed(2)),
    savePercent: 0,
    purgoUrl: shampoo.purgoUrl ?? PURGO_ORIGIN,
  },
  {
    slug: "full-ritual",
    name: "Full Peptide Ritual",
    tagline: "Shampoo, Capsule Cream, and Lift Cream.",
    description:
      "The complete [FORM] renewal lineup in one ritual—scalp, face capsules, and focused lift cream.",
    badge: "Build your routine",
    image: "/images/renewal/collection.png",
    productSlugs: [shampoo.slug, capsule.slug, lift.slug],
    price: Number(
      ((listPrice(shampoo) + listPrice(capsule) + listPrice(lift)) * 1).toFixed(2)
    ),
    compareAt: Number(
      (listPrice(shampoo) + listPrice(capsule) + listPrice(lift)).toFixed(2)
    ),
    savePercent: 0,
    purgoUrl: shampoo.purgoUrl ?? PURGO_ORIGIN,
  },
];

export function getBundleProducts(bundle: FormBundle): FormProduct[] {
  return bundle.productSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean) as FormProduct[];
}
