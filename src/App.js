import RecipeProvider from './context/RecipeProvider';
import AppRouter from './router/AppRouter';
import React from 'react'


const App = () => {
  

  return (
    <RecipeProvider >
      <AppRouter />
    </RecipeProvider>

  )
}

export default App
