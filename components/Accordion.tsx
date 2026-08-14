"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-form text-sm uppercase tracking-[0.12em]">
                {item.title}
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-muted">
                {open ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.75} />
                ) : (
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
                )}
              </span>
            </button>
            {open ? (
              <div className="pb-5 text-sm leading-relaxed text-muted">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
