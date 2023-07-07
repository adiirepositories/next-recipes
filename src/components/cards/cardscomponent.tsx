"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { createTheme as af, ThemeProvider } from '@mui/material';
// import type { ingredientstype } from './formcontent'
//componntes
// import {Cardscontent, Cardscontentname} from './formcontent';
const theme = af({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardscomponent(
  { cardname,
    cardcat,
    cardthumb,
    cardinstructions,
    cardstryoutube,
    cardingredients1,
    cardingredients2,
    cardingredients3,
    cardingredients4,
    cardingredients5,
    cardingredients6,
    cardingredients7,
    cardingredients8,
    cardingredients9,
    cardingredients10,
    cardingredients11,
    cardingredients12,
    cardingredients13,
    cardingredients14,
    cardingredients15,
    cardstrmeasure1, 
    cardstrmeasure2, 
    cardstrmeasure3, 
    cardstrmeasure4, 
    cardstrmeasure5, 
    cardstrmeasure6,
    cardstrmeasure7, 
    cardstrmeasure8, 
    cardstrmeasure9, 
    cardstrmeasure10, 
    cardstrmeasure11,
    cardstrmeasure12,
    cardstrmeasure13, 
    cardstrmeasure14,
    cardstrmeasure15
 
  }:
    {
      cardname: string,
      cardcat: string,
      cardthumb: string,
      cardinstructions: string,
      cardstryoutube: string,
      cardingredients1: string,
      cardingredients2: string,
      cardingredients3: string,
      cardingredients4: string,
      cardingredients5: string,
      cardingredients6: string,
      cardingredients7: string,
      cardingredients8: string,
      cardingredients9: string,
      cardingredients10: string,
      cardingredients11: string,
      cardingredients12: string,
      cardingredients13: string,
      cardingredients14: string,
      cardingredients15: string,
      cardstrmeasure1: string
      cardstrmeasure2: string
      cardstrmeasure3: string
      cardstrmeasure4: string
      cardstrmeasure5: string
      cardstrmeasure6: string
      cardstrmeasure7: string
      cardstrmeasure8: string
      cardstrmeasure9: string
      cardstrmeasure10: string
      cardstrmeasure11: string
      cardstrmeasure12: string
      cardstrmeasure13: string
      cardstrmeasure14: string
      cardstrmeasure15: string
    }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ alignItems: 'center', m: '1.3rem', flexDirection: 'row' }}>


        <Card sx={{ minWidth: 540, boxShadow: 3, borderRadius: 2, maxWidth: 540 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Typography variant="body1" color="text.secondary">
                <Link target="_blank" variant="body1" color="text.secondary" underline="none" href={cardstryoutube}>
                  {cardname}
                </Link>
              </Typography>}
            subheader={
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {cardcat}
              </Typography>}
          />
          <CardMedia sx={{ alignItems: 'center', maxHeight: 400 }}
            component="img"
            // height="195"
            image={cardthumb}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Ingredients: 
              <a> • </a>{cardingredients1} {cardstrmeasure1}  <a> </a>
              <a> • </a>{cardingredients2} {cardstrmeasure2} <a> </a>
              <a> • </a>{cardingredients3} {cardstrmeasure3} <a> </a>
              <a> • </a>{cardingredients4} {cardstrmeasure4} <a> </a>
              <a> • </a>{cardingredients5} {cardstrmeasure5} <a> </a>
              <a> • </a>{cardingredients6} {cardstrmeasure6} <a> </a>
              <a> • </a>{cardingredients7} {cardstrmeasure7} <a> </a>
              <a> • </a>{cardingredients8} {cardstrmeasure8} <a> </a>
              <a> • </a>{cardingredients9} {cardstrmeasure9} <a> </a>
              <a> • </a>{cardingredients10} {cardstrmeasure10} <a> </a>
              <a> • </a>{cardingredients11} {cardstrmeasure11} <a> </a>
              <a> • </a>{cardingredients12} {cardstrmeasure12} <a> </a>
              <a> • </a>{cardingredients13} {cardstrmeasure13} <a> </a>
              <a> • </a>{cardingredients14} {cardstrmeasure14} <a> </a>
              <a> • </a>{cardingredients15} {cardstrmeasure15} <a> </a>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ fontStyle: 'italic' }} paragraph>Method:</Typography>
              {/* <ThemeProvider theme={theme}> */}

              <Typography sx={{ letterSpacing: 2 }} variant="body1" align = "justify" color="text.secondary" paragraph>
                {cardinstructions}
              </Typography>
              {/* </ThemeProvider> */}

            </CardContent>
          </Collapse>
        </Card>



      </Box>


    </>
  );
}
