"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
// import {Formprops} from '../form/form';
// import Form from '../form/form';


// import React from 'react'
import { useEffect, useState } from 'react';

import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Cardcomponent from './cardscomponent';
//------------

export default function Formcontent() {
  const [query, setQuery] = useState('cheese');
  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=cheese');
  const [Foodname, setFoodname] = useState('');
  const [Foodname2, setFoodname2] = useState('');
  const [strCategory, setstrCategory] = useState('');
  
  //----------------------///
  useEffect(() => {
    fetchItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const fetchItems = async () => {
    let data;
    //setError(false);

    try {
      data = await fetch(url);
      const items = await data.json();
      // console.log(items.meals[0].strMeal);
      setFoodname2(items.meals[1].strMeal);
      setstrCategory(items.meals[1].strCategory);
      
    } catch (err) {
      // window.location.reload(false);
    }

  };

  // console.log(Foodname);
  console.log(strCategory);

  return (
    <>

<Cardscontentname dishname={Foodname2} catname={strCategory} />

    <div>
        <FormControl>
          <InputLabel color='secondary' variant='filled' htmlFor="my-input"></InputLabel>
          <Input placeholder="Search Foods.." inputProps={{ 'aria-label': 'description' }} type='text' value={query} onChange={event => setQuery(event.target.value)} />
          <FormHelperText id="my-helper-text">Input name of foods</FormHelperText>
          <Button
            type="button"
            // onClick={() => setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc`)}
            onClick={() => setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)}
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
          >Search Foods
          </Button>
          {/* {error && <div style={{color: `red`}}>some error occurred, while fetching api</div>} */}
        </FormControl>
    </div>



  </>
  )

}



export function Cardscontent() {
  return (
    <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.dadasdad
    </Typography>
  )
}
// {dishname}:{ dishname: string }

export function Cardscontentname({dishname, catname}:{ dishname: string , catname: string }
  ) {
    return (
      <>
      <Cardcomponent cardname={dishname} cardcat={catname}/>

      {/* <Typography variant="body2" color="text.secondary">
      </Typography> */}

      </>
      

    )
  }
