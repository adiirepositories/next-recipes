'use client'

import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider
        refetchOnWindowFocus={true}>
            {children}
        </SessionProvider>
    )
}







// import type { AppProps } from "next/app"
// import type { Session } from "next-auth"

// // Use of the <SessionProvider> is mandatory to allow components that call
// // `useSession()` anywhere in your application to access the `session` object.
// export default function AuthProvider({Component,pageProps: { session, ...pageProps },}: AppProps<{ session: Session }>) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }
