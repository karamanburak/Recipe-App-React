import React, { useContext, useState } from 'react'
import { ButtonStyle, FormStyle, ImageStyle, InputStyle, SelectStyle } from './Style'
import homeLogo from '../../assets/home.svg'
import RecipeCard from '../../pages/home/RecipeCard'
import { RecipeContext } from '../../context/RecipeProvider'
const Form = () => {
    const { recipeData, query, setQuery, meal, setMeal } = useContext(RecipeContext)

    const [showCard,setShowCard] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <article >
            <FormStyle onSubmit={handleSubmit} className="p-2">
                <div className="mx-3">
                    <InputStyle
                        type="text"
                        name="name"
                        placeholder='Search for a recipe'
                    />
                </div>
                <div className="text-center">
                    <ButtonStyle onClick={()=>setShowCard(false)} type="submit">
                        SEARCH
                    </ButtonStyle>
                </div>
                <div className="mx-3">
                    <SelectStyle name="" id="">
                        <option value="breakfast">BREAKFAST</option>
                        <option value="brunch">BRUNCH</option>
                        <option value="lunch">LUNCH</option>
                        <option value="dinner">DINNER</option>
                        <option value="snack">SNACK</option>
                        <option value="teatime">TEA TIME</option>
                    </SelectStyle>
                </div>
            </FormStyle>
            {showCard && ( <ImageStyle src={homeLogo} alt="" style={{height:"610px"}}/>) }
            {!showCard && (<RecipeCard/>)}
           
        </article>

    )
}

export default Form