export {default} from 'next-auth/middleware'

export const config = { matcher: ["/recipe"] }


// import { getToken } from "next-auth/jwt"

// import { NextRequest, NextResponse } from 'next/server'

// export default async function middleware(req: NextRequest) {
//     const path = req.nextUrl.pathname;

//     const session = await getToken({
//         req,
//         secret: process.env.NEXTAUTH_SECRET,
//     });
//     if (!session && path !== "/signin") {
//         return NextResponse.redirect(new URL('/signin', req.url))
//     } else if (session && (path === '/signin' || path === '/signup')) {
//         return NextResponse.redirect(new URL('/recipe', req.url))
//     }
//     return NextResponse.next()
// }
