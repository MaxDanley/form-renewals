import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageClient from "@/components/products/ProductPageClient";
import { getProduct, products } from "@/lib/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const otherProducts = products.filter((item) => item.slug !== product.slug);

  return <ProductPageClient product={product} otherProducts={otherProducts} />;
}
