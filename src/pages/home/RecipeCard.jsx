import React, { useContext } from 'react'
import { RecipeContext } from '../../App';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom/dist';
import { CardBodyStyle, CardContainerStyle } from './Style';

const RecipeCard = () => {
    //! 3- GET DATA\\
    const {recipeData} = useContext(RecipeContext)
    console.log(recipeData);
    const navigate = useNavigate()
    return (
        <CardContainerStyle className='mt-4'>
            {recipeData.map((item)=>(
                <CardBodyStyle key={item.recipe.totalWeight}>
                        <Card.Title>{item.recipe.label}</Card.Title>
                        <Card.Img variant="top" src={item.recipe.image} style={{ width: '12rem' }} />
                        <Button onClick={()=> navigate("/details", {state: {item}})} variant="warning">View Recipe</Button>
                    </CardBodyStyle>
            ))}
        </CardContainerStyle>
    )
}

export default RecipeCard