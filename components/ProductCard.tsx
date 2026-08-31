"use client";

import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ComingSoonTag from "@/components/ComingSoonTag";
import PurgoButton from "@/components/PurgoButton";
import { productImageClass } from "@/lib/images";
import { formatPrice, type FormProduct } from "@/lib/products";

export default function ProductCard({
  product,
  tone = "light",
}: {
  product: FormProduct;
  tone?: "light" | "onDark";
}) {
  const onDark = tone === "onDark";
  const src = product.cardImage ?? product.image;

  return (
    <article className="group flex h-full flex-col transition duration-300 hover:-translate-y-1">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="seed-card relative aspect-[4/5] overflow-hidden bg-[#ebe8df]">
          <Image
            src={src}
            alt={product.name}
            fill
            className={`${productImageClass(src)} transition duration-500 group-hover:scale-[1.03]`}
            sizes="(max-width: 768px) 90vw, 30vw"
          />
          {product.badge ? (
            <span className="seed-pill absolute left-3 top-3 inline-flex items-center gap-1 bg-white/92 px-3 py-1 text-xs text-shell shadow-sm backdrop-blur">
              <Sparkles className="h-3 w-3" strokeWidth={1.75} />
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 pt-5">
        <div>
          <p
            className={`text-xs uppercase tracking-[0.14em] ${
              onDark ? "text-white/65" : "text-muted"
            }`}
          >
            {product.benefitTags.join(" · ")}
          </p>
          <h3
            className={`mt-2 text-xl font-medium tracking-[-0.01em] ${
              onDark ? "text-white" : "text-shell"
            }`}
          >
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p
            className={`mt-2 text-sm leading-relaxed ${
              onDark ? "text-white/70" : "text-muted"
            }`}
          >
            {product.tagline}
          </p>
        </div>
        <p className={`text-sm ${onDark ? "text-white/85" : "text-shell"}`}>
          {product.comingSoon || product.price === undefined
            ? "Price at launch"
            : `From ${formatPrice(product.price)}`}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <PurgoButton
            href={`/products/${product.slug}`}
            external={false}
            variant={onDark ? "light" : "secondary"}
            className="!px-4 !py-2.5 !text-sm"
            iconRight={<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />}
          >
            View
          </PurgoButton>
          {product.purgoUrl ? (
            <PurgoButton
              href={product.purgoUrl}
              className={`!px-4 !py-2.5 !text-sm ${
                onDark ? "!bg-[#2f2e24] !text-white hover:!bg-black" : ""
              }`}
              icon={<ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />}
            >
              Shop Now
            </PurgoButton>
          ) : (
            <ComingSoonTag
              tone={onDark ? "onDark" : "light"}
              className="!px-4 !py-2.5 !text-sm"
            />
          )}
        </div>
      </div>
    </article>
  );
}
