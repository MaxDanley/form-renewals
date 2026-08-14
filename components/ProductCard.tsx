"use client";

import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PurgoButton from "@/components/PurgoButton";
import { formatPrice, type FormProduct } from "@/lib/products";

export default function ProductCard({
  product,
  tone = "light",
}: {
  product: FormProduct;
  tone?: "light" | "onDark";
}) {
  const onDark = tone === "onDark";

  return (
    <article className="group flex h-full flex-col transition duration-300 hover:-translate-y-1">
      <Link href={`/products/${product.slug}`} className="block">
        <div
          className={`seed-card relative aspect-[4/5] overflow-hidden ${
            onDark ? "bg-[#6f6c5c]" : "bg-[#ebe8df]"
          }`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center p-8 transition duration-500 group-hover:scale-[1.02] md:p-10"
            sizes="(max-width: 768px) 90vw, 30vw"
          />
          {product.badge ? (
            <span className="seed-pill absolute left-3 top-3 inline-flex items-center gap-1 bg-white px-3 py-1 text-xs text-shell shadow-sm">
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
            {product.code}
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
          From {formatPrice(product.price)}
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
          <PurgoButton
            href={product.purgoUrl}
            className={`!px-4 !py-2.5 !text-sm ${
              onDark ? "!bg-[#2f2e24] !text-white hover:!bg-black" : ""
            }`}
            icon={<ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.75} />}
          >
            Shop Now
          </PurgoButton>
        </div>
      </div>
    </article>
  );
}
