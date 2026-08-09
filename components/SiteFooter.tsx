import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PURGO_ORIGIN } from "@/lib/brand";
import { products } from "@/lib/products";

export default function SiteFooter() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div className="space-y-5">
          <BrandLogo tone="light" size="md" href="/" />
          <p className="max-w-sm text-sm leading-relaxed text-white/80">
            Peptide skincare and scalp care by [FORM] renewal. Frontend shell now;
            purchase fulfilled through Purgo Labs.
          </p>
        </div>

        <div>
          <p className="font-form mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-white/60">
            Products
          </p>
          <ul className="space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="hover:underline">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-form mb-4 text-[0.7rem] uppercase tracking-[0.2em] text-white/60">
            Purchase
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={PURGO_ORIGIN} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Purgo Labs
              </a>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Shop all
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/65 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} [FORM] renewal</p>
          <p>Brand color Pantone 6207 U · A Purgo Labs company</p>
        </div>
      </div>
    </footer>
  );
}
