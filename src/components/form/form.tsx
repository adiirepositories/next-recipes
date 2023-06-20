"use client";

// import React from 'react'
import React, { useEffect, useState } from 'react';

import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

export default function Form() {
  const [query, setQuery] = useState('cheese');
  const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=cheese');
  const [Foodname, setFoodname] = useState('');
  const [Foodname2, setFoodname2] = useState('');
  const [foodsdesc, setfoodsdesc] = useState("null");
  
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
      // setFoodname(items.meals[1].strMeal);
      setFoodname2(items.meals[2].strMeal);
      
    } catch (err) {
      // window.location.reload(false);
    }

  };

  // console.log(Foodname);
  console.log(Foodname2);

  return (
    
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

    
  )

}


// export function Formprops() {
//   return (
//     <Typography variant="body2" color="text.secondary" >
//       name: adaafa
//     </Typography>
//   )
// }

