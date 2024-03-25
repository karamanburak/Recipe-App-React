import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { RecipeContext } from '../../App'
import ContainerStyle, { DetailMealImgStyle, DetailsCardImg, DetailsCardStyle, HeaderContainerStyle } from './Style'
import DietLogo from '../../assets/diet.svg'

const Details = () => {
    const {recipeData} = useContext(RecipeContext)
    const {state: {item}} = useLocation()

    return (

            <ContainerStyle>
            <HeaderContainerStyle>
            <h1>{item.recipe.label}</h1>
                <DetailMealImgStyle src={DietLogo}/>
            </HeaderContainerStyle>
            <DetailsCardStyle>
            <p>{item.recipe.nutriens}</p>
            <ol>
            {recipeData.map((i)=>(
                <li key={i.recipe.calories}></li>
            ))}
            </ol>
                <DetailsCardImg src={item.recipe.image} alt="" />
            <ol>
            {recipeData.map((i)=>(
                <li key={i.recipe.calories}>{i.recipe.ingredientLines}</li>
            ))}
            </ol>
            </DetailsCardStyle>
            </ContainerStyle>
    )
}

export default Details