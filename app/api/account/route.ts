import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { purgoRequest,sameOrigin } from '@/lib/purgo-server';
export async function GET(){const token=(await cookies()).get('form_session')?.value;if(!token)return Response.json({user:null},{headers:{'Cache-Control':'no-store'}});try{return Response.json(await purgoRequest('/api/form/account',{sessionToken:token}),{headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'Please sign in again.'},{status:401});}}
export async function DELETE(req:Request){if(!sameOrigin(req))return Response.json({error:'Invalid request'},{status:403});const token=(await cookies()).get('form_session')?.value;if(token){try{await purgoRequest('/api/form/logout',{sessionToken:token});}catch{return Response.json({error:'Unable to sign out securely. Please retry.'},{status:503});}}const response=NextResponse.json({ok:true});response.cookies.set('form_session','',{path:'/',maxAge:0});return response;}
