import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/','/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) =>{
  const {userId, orgId} = auth()
  if(!isPublicRoute(request)){
    auth().protect();
  }

  if (userId && isPublicRoute(request)){
    let path = "/select-org"
    if(orgId){ path = `/organization/${orgId}`}
    const orgSelection = new URL(path,request.url);
    return NextResponse.redirect(orgSelection)
  }

  if(!userId && !isPublicRoute(request)){
    return auth().redirectToSignIn({returnBackUrl: request.url})
  }
  if(userId && !orgId && request.nextUrl.pathname !== "/select-org"){
    const orgSelection = new URL("/select-org",request.url);
    return NextResponse.redirect(orgSelection)
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}