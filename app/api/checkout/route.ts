import {cookies} from 'next/headers';
import {purgoRequest,PURGO_SERVER_ORIGIN,sameOrigin} from '@/lib/purgo-server';
import {cleanCart,FORM_PURGO_SLUGS,type CatalogProduct} from '@/lib/commerce';
export async function POST(req:Request){
 if(!sameOrigin(req))return Response.json({error:'Invalid request'},{status:403});
 const sessionToken=(await cookies()).get('form_session')?.value;if(!sessionToken)return Response.json({error:'Please sign in to continue.'},{status:401});
 try{const body=await req.json();const cart=cleanCart(body.items);if(!cart.length)return Response.json({error:'Your bag is empty.'},{status:400});const catalog=await purgoRequest('/api/form/catalog');
 const items=cart.map(line=>{const p=(catalog.products as CatalogProduct[]).find(p=>p.slug===FORM_PURGO_SLUGS[line.slug]);const v=p?.variants[0];if(!v || v.stockCount<line.quantity)throw Error('An item is unavailable. Refresh your bag.');return {variantId:v.id,quantity:line.quantity};});
 const data=await purgoRequest('/api/form/checkout',{sessionToken,items});if(typeof data.token!=='string'||!/^[A-Za-z0-9_-]{43}$/.test(data.token))throw Error('Invalid checkout response');
 return Response.json({url:new URL('/form/checkout/'+data.token,PURGO_SERVER_ORIGIN).toString()},{headers:{'Cache-Control':'no-store','Referrer-Policy':'no-referrer'}});
 }catch(e){return Response.json({error:(e as Error).message},{status:(e as Error).message.includes('sign in')?401:503});}
}
