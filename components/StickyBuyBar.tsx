"use client";

import PurgoButton from "@/components/PurgoButton";
import { formatPrice } from "@/lib/products";

type StickyBuyBarProps = {
  name: string;
  price: number;
  purgoUrl: string;
};

export default function StickyBuyBar({ name, price, purgoUrl }: StickyBuyBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:px-5">
      <div className="glass-nav seed-pill mx-auto flex max-w-[900px] items-center justify-between gap-4 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.22)]">
        <div className="min-w-0 text-white">
          <p className="truncate text-sm font-medium">{name}</p>
          <p className="text-sm text-white/70">{formatPrice(price)}</p>
        </div>
        <PurgoButton href={purgoUrl} variant="light" className="shrink-0 !px-5 !py-2.5 !text-sm">
          Shop Now
        </PurgoButton>
      </div>
    </div>
  );
}
