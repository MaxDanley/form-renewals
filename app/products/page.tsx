import type { Metadata } from "next";
import ProductsPageClient from "@/components/products/ProductsPageClient";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop [FORM] renewal peptide skincare and scalp care formulas.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
