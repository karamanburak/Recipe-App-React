import React, { createContext } from 'react'
import AppRouter from './router/AppRouter';


//!1- Context area\\
export const RecipeContext = createContext()

const App = () => {

  const API_KEY = "ad3262b3de24c620c50d76dc1545a670"
  const API_ID = "e5dc6ef1"
  const BASE_URL = "https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}"

  return (
    <RecipeContext.Provider>
      <AppRouter />
    </RecipeContext.Provider>

  )
}

export default App
