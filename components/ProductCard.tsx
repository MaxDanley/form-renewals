"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PurgoButton from "@/components/PurgoButton";
import { formatPrice, type FormProduct } from "@/lib/products";

export default function ProductCard({ product }: { product: FormProduct }) {
  return (
    <motion.article
      className="group flex h-full flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="seed-card relative aspect-[4/5] overflow-hidden bg-brand-mist">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 90vw, 30vw"
          />
          {product.badge ? (
            <span className="seed-pill absolute left-3 top-3 bg-white px-3 py-1 text-xs text-shell shadow-sm">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted">
            {product.code}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.01em] text-shell">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
        </div>
        <p className="text-sm text-shell">
          Starting at {formatPrice(product.price)}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <PurgoButton
            href={`/products/${product.slug}`}
            external={false}
            variant="secondary"
            className="!px-4 !py-2.5 !text-sm"
          >
            View
          </PurgoButton>
          <PurgoButton href={product.purgoUrl} className="!px-4 !py-2.5 !text-sm">
            Shop Now
          </PurgoButton>
        </div>
      </div>
    </motion.article>
  );
}
