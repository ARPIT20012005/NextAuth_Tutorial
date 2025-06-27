import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { useCallback } from "react";


export default withAuth(
    function middleware(req) {
        console.log(req.nextUrl.pathman);
        console.log(req.nextauth.token.role);
        
        if (
            req.nextUrl.pathname.startsWith("/CreateUser") && 
            req.nextauth.token.role != "admin"

        ) {
            return NextResponse.rewrite(new URL ("/Denied", req.url))

        }
    } ,
    {
    callbacks: {
        authorized: ({token}) => !!token 
    }
  }
);

export const config = { matcher: ["/CreateUser"] };

