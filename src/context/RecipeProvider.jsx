import axios from "axios";
import React, { createContext, useState } from 'react'
import { H1Style } from "../pages/details/Style";

export const RecipeContext = createContext()


const RecipeProvider = ({children}) => {
    const [recipeData, setRecipeData] = useState([])
    const [meal, setMeal] = useState("Breakfast")
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState(localStorage.getItem("username") || "")
    const [password, setPassword] = useState(localStorage.getItem("password") || "")

    const API_KEY = "ad3262b3de24c620c50d76dc1545a670"
    const API_ID = "e5dc6ef1"
    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`


    const getData = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(BASE_URL)
            // console.log(data.hits);
            setRecipeData(data.hits)

        } catch (error) {
            setError(true);
        }finally{
            setLoading(false)
        }
    }
    if (error) {
        return <H1Style>Something went wrong.....</H1Style>;
    }
    if (loading) { return <H1Style>Loading...</H1Style> }
    return (
        <RecipeContext.Provider 
        value={{
            recipeData,
            setMeal,
            setQuery,
            name,
            setName,
            password,
            setPassword,
            getData
            }}>
            {children}
        </RecipeContext.Provider>
    )

}

export default RecipeProvider