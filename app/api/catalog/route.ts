import { purgoRequest } from '@/lib/purgo-server';
export const dynamic='force-dynamic';
export async function GET(){try{return Response.json(await purgoRequest('/api/form/catalog'),{headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'Prices are temporarily unavailable. Please try again.'},{status:503});}}
