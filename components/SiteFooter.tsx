import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { PURGO_ORIGIN } from "@/lib/brand";
import { products } from "@/lib/products";

export default function SiteFooter() {
  return (
    <footer className="bg-shell text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-10 md:py-16">
        <div className="space-y-5">
          <BrandLogo tone="light" size="sm" href="/" />
          <p className="max-w-sm text-lg font-medium leading-snug tracking-[-0.02em] text-white md:text-xl">
            Peptide skincare for scalp and skin.
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">
            Formulas by [FORM] renewal. Purchase currently fulfilled through
            Purgo Labs.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/50">
            Products
          </p>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <Link href="/products" className="hover:text-white">
                Shop All
              </Link>
            </li>
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/50">
            About
          </p>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <Link href="/#science" className="hover:text-white">
                Science
              </Link>
            </li>
            <li>
              <Link href="/#stories" className="hover:text-white">
                Stories
              </Link>
            </li>
            <li>
              <a
                href={PURGO_ORIGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Purgo Labs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/50">
            Help
          </p>
          <ul className="space-y-3 text-sm text-white/85">
            <li>
              <a
                href={PURGO_ORIGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Contact
              </a>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} [FORM] renewal</p>
          <p>A Purgo Labs company</p>
        </div>
      </div>
    </footer>
  );
}
