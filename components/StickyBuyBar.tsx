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
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <div className="min-w-0">
          <p className="font-form truncate text-sm uppercase tracking-[0.08em]">{name}</p>
          <p className="text-sm text-muted">{formatPrice(price)}</p>
        </div>
        <PurgoButton href={purgoUrl} className="shrink-0 !px-5 !py-3">
          Shop at Purgo Labs
        </PurgoButton>
      </div>
    </div>
  );
}
