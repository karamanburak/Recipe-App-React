import React, { createContext, useEffect, useState } from 'react'
import AppRouter from './router/AppRouter';
import axios from 'axios';


//!1- Context area\\
export const RecipeContext = createContext()

const App = () => {
  const [recipeData,setRecipeData] = useState([])
  const [meal,setMeal] = useState([])
  const [query,setQuery] = useState([])
  const API_KEY = "ad3262b3de24c620c50d76dc1545a670"
  const API_ID = "e5dc6ef1"
  // const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`
  const BASE_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

  const getData = async () => {
    try {
      const {data} = await axios.get(BASE_URL)
      console.log(data.hits);
      setRecipeData(data.hits)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
getData()
  },[])


  return (
    <RecipeContext.Provider value={{recipeData}}>
      <AppRouter />
    </RecipeContext.Provider>

  )
}

export default App
