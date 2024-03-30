import ContainerStyle, { DetailMealImgStyle, DetailsCardImg, DetailsCardStyle, HeaderContainerStyle } from './Style'
import DietLogo from '../../assets/diet.svg'
import { useLocation } from 'react-router-dom';

const Details = () => {
    const {state: {item},} = useLocation()
    console.log(item);

    return (

            <ContainerStyle>
            <HeaderContainerStyle>
            <h1>{item.recipe.label}</h1>
                <DetailMealImgStyle src={DietLogo} />
            </HeaderContainerStyle>
            <DetailsCardStyle>
                <p>
                    {item.recipe.totalNutrients.CA.label}:
                    {Math.round(item.recipe.totalNutrients.CA.quantity)}
                    {item.recipe.totalNutrients.CA.unit}
                </p>
                <p>
                    {item.recipe.totalNutrients.CHOCDF.label}:
                    {Math.round(item.recipe.totalNutrients.CHOCDF.quantity)}
                    {item.recipe.totalNutrients.CHOCDF.unit}
                </p>
                <p>
                    {item.recipe.totalNutrients.CHOLE.label}:
                    {Math.round(item.recipe.totalNutrients.CHOLE.quantity)}
                    {item.recipe.totalNutrients.CHOLE.unit}
                </p>
                <p>
                    {item.recipe.totalNutrients.ENERC_KCAL.label}:
                    {Math.round(item.recipe.totalNutrients.ENERC_KCAL.quantity)}
                    {item.recipe.totalNutrients.ENERC_KCAL.unit}
                </p>
                <p>{item.recipe.totalWeight} </p>
                <p>Calories:{Math.round(item.recipe.calories)} </p>
          
                <p>
                    {item.recipe.digest.slice(0, 4).map((item, index) => (
                        <p key={index}>
                            {item.label}: {Math.round(item.total)}
                        </p>
                    ))}
                </p>
            </DetailsCardStyle>
            </ContainerStyle>
    )
}

export default Details