import React, { useContext, useState } from 'react'
import { ButtonStyle, FormStyle, ImageStyle, InputStyle, SelectStyle } from './Style'
import homeLogo from '../../assets/home.svg'
import RecipeCard from '../../pages/home/RecipeCard'
import { RecipeContext } from '../../context/RecipeProvider'
const Form = () => {
    const { recipeData, setQuery, setMeal,getData } = useContext(RecipeContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        getData()
    }
    return (
        <article >
            <FormStyle onSubmit={handleSubmit} className="p-2">
                <div className="mx-3">
                    <InputStyle
                        type="text"
                        name="name"
                        placeholder='Search for a recipe'
                        onChange={(e) => setQuery(e.target.value)}

                    />
                </div>
                <div className="text-center">
                    <ButtonStyle type="submit">
                        SEARCH
                    </ButtonStyle>
                </div>
                <div className="mx-3">
                    <SelectStyle name="mealTypes" id="mealTypes"
                    onChange={(e)=>setMeal(e.target.value)}
                    >
                        <option value="Breakfast">BREAKFAST</option>
                        <option value="Brunch">BRUNCH</option>
                        <option value="Lunch">LUNCH</option>
                        <option value="Dinner">DINNER</option>
                        <option value="Snack">SNACK</option>
                        <option value="TeaTime">TEA TIME</option>
                    </SelectStyle>
                </div>
            </FormStyle>
             {recipeData.length > 0 ? (<div><RecipeCard/></div> 
             ) : (
                <div>
                  <ImageStyle src={homeLogo} alt="" style={{ height: "610px" }} />   
                </div>
            
             )
             }
           
        </article>

    )
}

export default Form