import 'server-only';
export const PURGO_SERVER_ORIGIN = process.env.PURGO_ORIGIN || 'https://www.purgolabs.com';
export const FORM_SERVER_ORIGIN = process.env.FORM_ORIGIN || 'https://www.formrenewal.com';
export async function purgoRequest(path:string, body?:unknown) {
  const secret=process.env.FORM_BRIDGE_SECRET;
  if(body && (!secret || secret.length<32)) throw new Error('Account connection is not configured');
  const response=await fetch(new URL(path,PURGO_SERVER_ORIGIN),{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json',Authorization:`Bearer ${secret}`}:{},body:body?JSON.stringify(body):undefined,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw new Error(response.status===401?'Please sign in again.':'Purgo connection is temporarily unavailable.');
  return response.json();
}
export function sameOrigin(req:Request){return req.headers.get('origin')===new URL(FORM_SERVER_ORIGIN).origin;}
