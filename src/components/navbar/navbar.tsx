"use client";
import Link from "next/link";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ boxShadow: 2, borderRadius: 1, width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Link href="/">
            <Tab label="Home" />
        </Link>

        <Link href="recipe">
            <Tab label="Recipes" />
        </Link>

        <Link href="/">
            <Tab label="About" />
        </Link>

        <Link href="/">
            <Tab label="Home" />
        </Link>

      </Tabs>
    </Box>
  );
}