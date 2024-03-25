import axios from "axios";
import React, { createContext, useEffect, useState } from 'react'

export const RecipeContext = createContext()


const RecipeProvider = ({children}) => {
    const [recipeData, setRecipeData] = useState([])
    const [meal, setMeal] = useState([])
    const [query, setQuery] = useState([])
    const [name, setName] = useState(localStorage.getItem("username") || "")
    const [password, setPassword] = useState(localStorage.getItem("password") || "")

    const API_KEY = "ad3262b3de24c620c50d76dc1545a670"
    const API_ID = "e5dc6ef1"
    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`


    const getData = async () => {
        try {
            const { data } = await axios.get(BASE_URL)
            console.log(data.hits);
            setRecipeData(data.hits)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <RecipeContext.Provider value={{recipeData,meal,setMeal,query,setQuery,name,setName,password,setPassword}}>
            {children}
        </RecipeContext.Provider>
    )

}

export default RecipeProvider