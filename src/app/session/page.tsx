"use client";

import { data } from "autoprefixer";
import { useSession } from "next-auth/react";


// export default function Session() {
//   const {data:session} = useSession()

//   if (session) {
//     return (
//         <div> 
//             <p>Signed in as {session?.user?.name}</p>
//         </div>
//     )
//   }

// //   return <a href="/api/auth/signin">Sign in</a>
// }


// Remember you must use an AuthProvider for 
// client components to useSession
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

export default function Session() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
        
    })

    // console.log(session?.user?.name);


    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Client"} />
            <pre>{JSON.stringify(session, null, 2)}</pre>
        </section>

        
    )
}
