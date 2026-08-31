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
    badge: "Bundle + Save 25%",
    image: "/images/home/s6-duo.jpg",
    productSlugs: [shampoo.slug, capsule.slug],
    price: Number(((shampoo.price + capsule.price) * 0.75).toFixed(2)),
    compareAt: Number((shampoo.price + capsule.price).toFixed(2)),
    savePercent: 25,
    purgoUrl: shampoo.purgoUrl,
  },
  {
    slug: "full-ritual",
    name: "Full Peptide Ritual",
    tagline: "Shampoo, Capsule Cream, and Lift Cream.",
    description:
      "The complete [FORM] renewal lineup in one ritual—scalp, face capsules, and focused lift cream.",
    badge: "Bundle + Save 20%",
    image: "/images/home/s5-bundle.jpg",
    productSlugs: [shampoo.slug, capsule.slug, lift.slug],
    price: Number(
      ((shampoo.price + capsule.price + lift.price) * 0.8).toFixed(2)
    ),
    compareAt: Number(
      (shampoo.price + capsule.price + lift.price).toFixed(2)
    ),
    savePercent: 20,
    purgoUrl: shampoo.purgoUrl,
  },
];

export function getBundleProducts(bundle: FormBundle): FormProduct[] {
  return bundle.productSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean) as FormProduct[];
}
