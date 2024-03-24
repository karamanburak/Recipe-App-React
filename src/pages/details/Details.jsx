import React, { useContext } from 'react'
import { RecipeContext } from '../../App'

const Details = () => {
    const { recipeData } = useContext(RecipeContext)
    return (
        <div>
        {recipeData.map((item)=>(
            <div>
            <h4>{item.recipe.label}</h4>
            <h5>{}</h5>
            </div>

        ))}
        </div>
    )
}

export default Details