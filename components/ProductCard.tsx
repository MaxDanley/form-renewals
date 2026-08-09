import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import PurgoButton from "@/components/PurgoButton";
import { formatPrice, type FormProduct } from "@/lib/products";

export default function ProductCard({ product }: { product: FormProduct }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="block overflow-hidden">
        <div className="transition duration-500 group-hover:scale-[1.02]">
          <PlaceholderImage
            label={product.shortName}
            caption={product.code}
            aspect="portrait"
            tone="brand"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 pt-5">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            {product.badge ? (
              <span className="font-form text-[0.65rem] uppercase tracking-[0.16em] text-brand-deep">
                {product.badge}
              </span>
            ) : null}
            <span className="font-form text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {product.code}
            </span>
          </div>
          <h3 className="font-form text-xl uppercase tracking-[0.06em]">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{product.tagline}</p>
          <p className="font-form text-sm tracking-[0.04em]">
            Starting at {formatPrice(product.price)}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 font-form text-[0.7rem] uppercase tracking-[0.14em] transition hover:border-ink/40"
          >
            View
          </Link>
          <PurgoButton href={product.purgoUrl} className="!px-5 !py-3 !text-[0.7rem]">
            Shop at Purgo
          </PurgoButton>
        </div>
      </div>
    </article>
  );
}
