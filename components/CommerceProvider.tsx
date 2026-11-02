'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {cleanCart,FORM_PURGO_SLUGS,type CatalogProduct,type CartLine} from '@/lib/commerce';
import {formatPrice,products} from '@/lib/products';
const Context=createContext<{catalog:CatalogProduct[];loading:boolean;error:string;cart:CartLine[];setQuantity:(slug:string,n:number)=>void;add:(slug:string)=>void;refresh:()=>void}|null>(null);
export function CommerceProvider({children}:{children:ReactNode}){
 const [catalog,setCatalog]=useState<CatalogProduct[]>([]),[loading,setLoading]=useState(true),[error,setError]=useState(''),[cart,setCart]=useState<CartLine[]>([]),[hydrated,setHydrated]=useState(false),[revision,setRevision]=useState(0);
 useEffect(()=>{try{setCart(cleanCart(JSON.parse(localStorage.getItem('form_cart')||'[]')));}catch{}setHydrated(true);},[]);
 useEffect(()=>{if(hydrated)try{localStorage.setItem('form_cart',JSON.stringify(cart));}catch{}},[cart,hydrated]);
 useEffect(()=>{const controller=new AbortController();setLoading(true);fetch('/api/catalog',{signal:controller.signal}).then(async r=>{if(!r.ok)throw Error();return r.json();}).then(d=>{setCatalog(d.products);setError('');}).catch(e=>{if(e.name!=='AbortError'){setCatalog([]);setError('Prices unavailable. Please try again.');}}).finally(()=>{if(!controller.signal.aborted)setLoading(false);});return()=>controller.abort();},[revision]);
 const setQuantity=(slug:string,n:number)=>setCart(old=>cleanCart([...old.filter(l=>l.slug!==slug),{slug,quantity:n}]));
 const add=(slug:string)=>setCart(old=>cleanCart([...old,{slug,quantity:1}]));
 return <Context.Provider value={{catalog,loading,error,cart,setQuantity,add,refresh:()=>setRevision(v=>v+1)}}>{children}</Context.Provider>;
}
export function useCommerce(){const c=useContext(Context);if(!c)throw Error('CommerceProvider missing');return c;}
export function useLiveProduct(slug:string){const c=useCommerce();return c.catalog.find(p=>p.slug===FORM_PURGO_SLUGS[slug]);}
export function LivePrice({slug}:{slug:string}){const c=useCommerce(),p=useLiveProduct(slug),variant=p?.variants[0];return <>{products.find(item=>item.slug===slug)?.comingSoon?'Coming soon':c.loading?'Loading price…':variant?formatPrice(variant.price):'Currently unavailable'}</>;}
export function AddToCart({slug,className}:{slug:string;className?:string}){const c=useCommerce(),p=useLiveProduct(slug),v=p?.variants[0], [added,setAdded]=useState(false);const available=!!v&&v.stockCount>0;return <button type="button" className={className} disabled={!available||c.loading} onClick={()=>{c.add(slug);setAdded(true);}}>{c.loading?'Loading…':!v?'Unavailable':!available?'Sold out':added?'Added · add another':'Add to bag'}</button>;}
