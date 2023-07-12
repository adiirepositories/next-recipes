"use client";

import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

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

  return (
    <Box sx={{  mb:10, boxShadow: 2, borderRadius: 1, width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link href="/">
            <Tab label="Home" />
        </Link>

        <Link href="recipe">
            <Tab label="Recipes" />
        </Link>
        <Link href="/api/auth/signout">
            <Tab label="About" />
        </Link>

        <Link href="/signin">
            <Tab label="SignIN" />
        </Link>
{/* 
        {session ? (
        <>
          <Link href="/activity">Activity</Link>
          <Link href="/profile">Profile</Link>
          <button
            type="button"
            onClick={() => {
              signOut('auth0',{ callbackUrl: '/' })
            }}
          >
            Sign Out
          </button>
        </>
      ) : null} */}


      </Tabs>
    </Box>
  );
}
