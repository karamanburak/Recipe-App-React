import React from 'react'
import { ButtonStyle, FormStyle, ImageStyle, InputStyle, SelectStyle } from './Style'
import homeLogo from '../../assets/home.svg'
const Form = () => {
    return (
        <article >
            <FormStyle className="p-2">
                <div className="mx-3">
                    <InputStyle
                        type="text"
                        name="name"
                        placeholder='Search for a recipe '
                    />
                </div>
                <div className="text-center">
                    <ButtonStyle type="submit">
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
            <ImageStyle>
                <img src={homeLogo} alt="" style={{height:"610px"}}/>
            </ImageStyle>
        </article>

    )
}

export default Form