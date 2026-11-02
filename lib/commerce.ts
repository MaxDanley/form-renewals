export const FORM_PURGO_SLUGS:Record<string,string>={
 'copper-growth-shampoo':'ghk-cu-copper-peptide-shampoo',
 'capsule-cream':'ghk-cu-copper-peptide-capsule-cream',
 'lift-cream':'ghk-cu-lift-cream',
 'hair-growth-scalp-serum':'ghk-cu-serum',
};
export type CatalogVariant={id:string;size:string;price:number;stockCount:number};
export type CatalogProduct={id:string;slug:string;image:string;variants:CatalogVariant[]};
export type CartLine={slug:string;quantity:number};
export function cleanCart(value:unknown):CartLine[]{
 if(!Array.isArray(value))return [];
 const quantities=new Map<string,number>();
 for(const line of value){if(line && typeof line.slug==='string' && FORM_PURGO_SLUGS[line.slug] && Number.isInteger(line.quantity)&&line.quantity>0)quantities.set(line.slug,Math.min(20,(quantities.get(line.slug)||0)+line.quantity));}
 return [...quantities].map(([slug,quantity])=>({slug,quantity}));
}
