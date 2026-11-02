import { randomBytes,createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { PURGO_SERVER_ORIGIN } from '@/lib/purgo-server';
export async function GET(){
 const state=randomBytes(32).toString('base64url'),verifier=randomBytes(32).toString('base64url');
 const challenge=createHash('sha256').update(verifier).digest('base64url');
 const response=NextResponse.redirect(new URL('/form/authorize?'+new URLSearchParams({state,challenge}),PURGO_SERVER_ORIGIN));
 response.cookies.set('form_login',JSON.stringify({state,verifier}),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/api/account/callback',maxAge:600});
 response.headers.set('Cache-Control','no-store');response.headers.set('Referrer-Policy','no-referrer');return response;
}
