"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
// import {Formprops} from '../form/form';
// import Form from '../form/form';


// import React from 'react'
import { useEffect, useState } from 'react';
// import { FormControl } from '@mui/material';
// import { InputLabel } from '@mui/material';
// import { FormHelperText } from '@mui/material';
// import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
// import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Cardcomponent from './cardscomponent';
// import Livesearch from './livesearch';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';



//------------------------------
export interface foodlisttype {
  idMeal: string;
  strMeal: string;
  strArea: string;
}
//------------------------------


//------------------------------
// export interface ingredientstype {
//   strIngredient1: string;
//   strIngredient2: string;
//   strIngredient3: string;
//   strIngredient4: string;
//   strIngredient5: string;
//   strIngredient6: string;
//   strIngredient7: string;
//   strIngredient8: string;
//   strIngredient9: string;
//   strIngredient10: string;
//   strIngredient11: string;
//   strIngredient12: string;
//   strIngredient13: string;
//   strIngredient14: string;
//   strIngredient15: string;
//   strIngredient16: string;
// }
//------------------------------

export default function Formcontent() {
  const randomFetch = 'https://www.themealdb.com/api/json/v1/1/random.php?s=';
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(randomFetch);
  const [strInstructions, setstrInstructions] = useState('');
  const [Foodname2, setFoodname2] = useState('');
  const [strCategory, setstrCategory] = useState('');
  const [strMealThumb, setstrMealThumb] = useState('');
  const [strYoutube, setstrYoutube] = useState('');
  const [foodlist, setfoodlist] = useState<foodlisttype[]>([]);

  const [stringredients1, setstringredients1] = useState('');
  const [stringredients2, setstringredients2] = useState('');
  const [stringredients3, setstringredients3] = useState('');
  const [stringredients4, setstringredients4] = useState('');
  const [stringredients5, setstringredients5] = useState('');
  const [stringredients6, setstringredients6] = useState('');
  const [stringredients7, setstringredients7] = useState('');
  const [stringredients8, setstringredients8] = useState('');
  const [stringredients9, setstringredients9] = useState('');
  const [stringredients10, setstringredients10] = useState('');
  const [stringredients11, setstringredients11] = useState('');
  const [stringredients12, setstringredients12] = useState('');
  const [stringredients13, setstringredients13] = useState('');
  const [stringredients14, setstringredients14] = useState('');
  const [stringredients15, setstringredients15] = useState('');

  const [strMeasure1, setstrMeasure1] = useState('');
  const [strMeasure2, setstrMeasure2] = useState('');
  const [strMeasure3, setstrMeasure3] = useState('');
  const [strMeasure4, setstrMeasure4] = useState('');
  const [strMeasure5, setstrMeasure5] = useState('');
  const [strMeasure6, setstrMeasure6] = useState('');
  const [strMeasure7, setstrMeasure7] = useState('');
  const [strMeasure8, setstrMeasure8] = useState('');
  const [strMeasure9, setstrMeasure9] = useState('');
  const [strMeasure10, setstrMeasure10] = useState('');
  const [strMeasure11, setstrMeasure11] = useState('');
  const [strMeasure12, setstrMeasure12] = useState('');
  const [strMeasure13, setstrMeasure13] = useState('');
  const [strMeasure14, setstrMeasure14] = useState('');
  const [strMeasure15, setstrMeasure15] = useState('');
  


//------------------------------
const [isLoading, setLoading] = useState(false)

  useEffect(() => {

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((responsse) => responsse.json())
      .then((json) => setfoodlist(json.meals))

  }, []);
//------------------------------




  //----------------------///
  useEffect(() => {
    setLoading(true)
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const fetchItems = async () => {
    let data;
    try {
      data = await fetch(url);
      const items = await data.json();

      // console.log(items.meals[0].strMeal);
      setFoodname2(items.meals[0].strMeal);
      setstrCategory(items.meals[0].strTags);
      setstrMealThumb(items.meals[0].strMealThumb);
      setstrInstructions(items.meals[0].strInstructions);
      setstrYoutube(items.meals[0].strYoutube);

      //ingredients states
      setstringredients1(items.meals[0].strIngredient1);
      setstringredients2(items.meals[0].strIngredient2);
      setstringredients3(items.meals[0].strIngredient3);
      setstringredients4(items.meals[0].strIngredient4);
      setstringredients5(items.meals[0].strIngredient5);
      setstringredients6(items.meals[0].strIngredient6);
      setstringredients7(items.meals[0].strIngredient7);
      setstringredients8(items.meals[0].strIngredient8);
      setstringredients9(items.meals[0].strIngredient9);
      setstringredients10(items.meals[0].strIngredient10);
      setstringredients11(items.meals[0].strIngredient11);
      setstringredients12(items.meals[0].strIngredient12);
      setstringredients13(items.meals[0].strIngredient13);
      setstringredients14(items.meals[0].strIngredient14);
      setstringredients15(items.meals[0].strIngredient15);

      setstrMeasure1(items.meals[0].strMeasure1);
      setstrMeasure2(items.meals[0].strMeasure2);
      setstrMeasure3(items.meals[0].strMeasure3);
      setstrMeasure4(items.meals[0].strMeasure4);
      setstrMeasure5(items.meals[0].strMeasure5);
      setstrMeasure6(items.meals[0].strMeasure6);
      setstrMeasure7(items.meals[0].strMeasure7);
      setstrMeasure8(items.meals[0].strMeasure8);
      setstrMeasure9(items.meals[0].strMeasure9);
      setstrMeasure10(items.meals[0].strMeasure10);
      setstrMeasure11(items.meals[0].strMeasure11);
      setstrMeasure12(items.meals[0].strMeasure12);
      setstrMeasure13(items.meals[0].strMeasure13);
      setstrMeasure14(items.meals[0].strMeasure14);
      setstrMeasure15(items.meals[0].strMeasure15);
      

      return (setUrl("recipe"));
    } catch (err) {
      // window.location.reload(false);
    }
    setLoading(false)


  };
  if (isLoading) return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  )



  // console.log(Foodname);
  // console.log(Foodname2);
  // console.log(foodlist.meals[0].strMeal);
//------------------------------
  return (
    <>
      <div>
        <Autocomplete
          id="combo-box-demo"
          getOptionLabel={(foodlist) => `${foodlist.strMeal} ${foodlist.strArea}`}
          options={foodlist}
          sx={{ mt: 20, width: 300 }}
          // isOptionEqualToValue={(option, value) =>
          //     option.strMeal === value.strMeal
          // }
          noOptionsText={"no data available"}
          renderOption={(props, foodlist) => (
            <Box component="li" {...props} key={foodlist.idMeal}>
              <a onClick={() => setUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodlist.idMeal}`)}><div>{foodlist.strMeal} - {foodlist.strArea}</div> </a>
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Food list" />}
        />

      </div>


      <Cardscontentname 
      dishname={Foodname2} 
      catname={strCategory} 
      strMealThumbname={strMealThumb} 
      strInstructions={strInstructions} 
      strYoutube={strYoutube} 
      stringredients1={stringredients1} 
      stringredients2={stringredients2} 
      stringredients3={stringredients3} 
      stringredients4={stringredients4} 
      stringredients5={stringredients5} 
      stringredients6={stringredients6} 
      stringredients7={stringredients7} 
      stringredients8={stringredients8} 
      stringredients9={stringredients9} 
      stringredients10={stringredients10} 
      stringredients11={stringredients11} 
      stringredients12={stringredients12} 
      stringredients13={stringredients13} 
      stringredients14={stringredients14} 
      stringredients15={stringredients15} 
      strMeasure1={strMeasure1}
      strMeasure2={strMeasure2}
      strMeasure3={strMeasure3}
      strMeasure4={strMeasure4}
      strMeasure5={strMeasure5}
      strMeasure6={strMeasure6}
      strMeasure7={strMeasure7}
      strMeasure8={strMeasure8}
      strMeasure9={strMeasure9}
      strMeasure10={strMeasure10}
      strMeasure11={strMeasure11}
      strMeasure12={strMeasure12}
      strMeasure13={strMeasure13}
      strMeasure14={strMeasure14}
      strMeasure15={strMeasure15}
      />

      <div>
        <Button sx={{ mb: 7 }}
          type="button"
          onClick={() => setUrl(randomFetch)}
          variant="outlined"
          color="primary"
          startIcon={<RefreshIcon />}
          size="medium"
        >
          Search Random Foods
        </Button>
      </div>
    </>
  )

}


export function Cardscontentname(
  {
    dishname,
    catname,
    strMealThumbname,
    strInstructions,
    strYoutube,
    stringredients1,stringredients2,stringredients3,stringredients4,stringredients5,stringredients6,stringredients7,stringredients8,stringredients9,stringredients10,stringredients11,stringredients12,stringredients13,stringredients14,stringredients15,
    strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,}  :
    {
      dishname: string,
      catname: string,
      strMealThumbname: string,
      strInstructions: string,
      strYoutube: string,
      stringredients1: string,stringredients2: string,stringredients3: string,stringredients4: string,stringredients5: string,stringredients6: string,stringredients7: string,stringredients8: string,stringredients9: string,stringredients10: string,stringredients11: string,stringredients12: string,stringredients13: string,stringredients14: string,stringredients15: string,
      strMeasure1: string,strMeasure2: string,strMeasure3: string,strMeasure4: string,strMeasure5: string,strMeasure6: string,strMeasure7: string,strMeasure8: string,strMeasure9: string,strMeasure10: string,strMeasure11: string,strMeasure12: string,strMeasure13: string,strMeasure14: string,strMeasure15: string,
    }) {

  return (
    <>
      <Cardcomponent 
        cardname={dishname} 
        cardcat={catname} 
        cardthumb={strMealThumbname} 
        cardinstructions={strInstructions} 
        cardstryoutube={strYoutube} 
        cardingredients1={stringredients1} 
        cardingredients2={stringredients2} 
        cardingredients3={stringredients3} 
        cardingredients4={stringredients4} 
        cardingredients5={stringredients5} 
        cardingredients6={stringredients6} 
        cardingredients7={stringredients7} 
        cardingredients8={stringredients8} 
        cardingredients9={stringredients9} 
        cardingredients10={stringredients10} 
        cardingredients11={stringredients11} 
        cardingredients12={stringredients12} 
        cardingredients13={stringredients13} 
        cardingredients14={stringredients14} 
        cardingredients15={stringredients15} 
        cardstrmeasure1={strMeasure1} 
        cardstrmeasure2={strMeasure2} 
        cardstrmeasure3={strMeasure3} 
        cardstrmeasure4={strMeasure4} 
        cardstrmeasure5={strMeasure5} 
        cardstrmeasure6={strMeasure6} 
        cardstrmeasure7={strMeasure7} 
        cardstrmeasure8={strMeasure8} 
        cardstrmeasure9={strMeasure9}
        cardstrmeasure10={strMeasure10}
        cardstrmeasure11={strMeasure11}
        cardstrmeasure12={strMeasure12}
        cardstrmeasure13={strMeasure13}
        cardstrmeasure14={strMeasure14}
        cardstrmeasure15={strMeasure15} />
    </>
  )
}
