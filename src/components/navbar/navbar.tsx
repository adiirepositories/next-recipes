"use client";

// import { useSession } from 'next-auth/react'
import { signIn, signOut, useSession } from 'next-auth/react'

import Link from "next/link";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function CenteredTabs() {

  
  const { data: session } = useSession()

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (session && session.user){

    
    return (
      <Box sx={{  mb:10, boxShadow: 2, borderRadius: 1, width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {/* <LinkTab label="Home" href="/" />
        <LinkTab label="recipe" href="Recipes" />
        <LinkTab label="My Session" href="/session" />
        <Tab onClick={() => signOut({callbackUrl: '/' })} label="signout"/> */}

        <Link href="/">
            <Tab label="Home"/>
        </Link>

        <Link href="recipe">
            <Tab label="Recipes" />
        </Link>
        
        <Link href="/session">
            <Tab label="my session" />
        </Link>

        <Tab onClick={() => signOut({callbackUrl: '/' })} label="signout"/>



        {/* <Link onClick={() => signOut({callbackUrl: '/'})} href="/"> */}
            {/* <Tab onClick={() => signOut({callbackUrl: '/'})} label="signout"/> */}

        {/* </Link> */}
        <Tab label={session.user.name}/>



      </Tabs>
    </Box>
    )
  }
 


  return (
    <Box sx={{  mb:10, boxShadow: 2, borderRadius: 1, width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link href="/">
            <Tab label="Home" />
        </Link>

        <Link href="recipe">
            <Tab label="Recipes" />
        </Link>
    
        <Link href="/session">
            <Tab label="my session" />
        </Link>

        <Link href="/signin">
            <Tab label="SignIN" />
        </Link>

      </Tabs>
    </Box>
  );
}
