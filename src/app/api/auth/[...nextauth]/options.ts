import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions= {
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),

        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "your Username"
                },
                password:{
                    label: "password:",
                    type: "password",
                    placeholder: "your password"
                }
            },
            async authorize(credentials) {
                const user = {id: "98", name: "adi", password: "nextauth"}
                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }else{
                    return null

                }
                
            },
        })
    ],

    pages: {
        signIn: '/signin',
        error: '/api/auth/error',
      }
    // pages:{
    //     signIn: "/signin"
    // }
}