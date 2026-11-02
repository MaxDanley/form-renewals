import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { purgoRequest,FORM_SERVER_ORIGIN } from '@/lib/purgo-server';
export async function GET(req:Request){
 const response=NextResponse.redirect(new URL('/account',FORM_SERVER_ORIGIN));
 response.cookies.set('form_login','',{path:'/api/account/callback',maxAge:0});response.headers.set('Cache-Control','no-store');response.headers.set('Referrer-Policy','no-referrer');
 try{const params=new URL(req.url).searchParams;const raw=(await cookies()).get('form_login')?.value;const proof=raw?JSON.parse(raw):null;
 if(!proof || params.get('state')!==proof.state || !params.get('code'))throw Error();
 const data=await purgoRequest('/api/form/exchange',{code:params.get('code'),verifier:proof.verifier});
 response.cookies.set('form_session',data.sessionToken,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:7*86400});return response;
 }catch{response.headers.set('Location',new URL('/account?error=signin',FORM_SERVER_ORIGIN).toString());return response;}
}
