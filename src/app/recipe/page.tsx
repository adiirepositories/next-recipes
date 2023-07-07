"use client";

import Cardscomponent from "@/components/cards/cardscomponent";
import Formcontent from "@/components/cards/formcontent";
// import Form from "@/components/form/form";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function page() {
  return (
    <Container maxWidth={false} >

    <Box
    height="90vh" 
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{alignItems: 'center', m:'3rem', flexDirection: 'column'}}>
      {/* <Cardscomponent /> */}
      <Formcontent />
    </Box>
    </Container>

    );

}
