import React, { useContext, useState } from 'react'
import FormContainerStyle, { ButtonStyle, ImageMealStyle, InputContainerStyle, InputStyle, LoginContainerStyle } from './Style'
import mealLogo from '../../assets/meal.svg'
import { useNavigate } from 'react-router-dom/dist'
import { RecipeContext } from '../../App'

const Login = () => {
  const {name,setName,password,setPassword} = useContext(RecipeContext)
  const navigate = useNavigate()

const handleSubmit = (e) =>{
e.preventDefault()
localStorage.setItem("username",name)
localStorage.setItem("password",password)
navigate(-1)

}

  return (
    <FormContainerStyle onSubmit={handleSubmit}>
      <LoginContainerStyle >
        <InputContainerStyle>
        <ImageMealStyle src={mealLogo} alt="" />
        <div className="mb-3">
            <InputStyle
            type="text"
            name="name"
            placeholder='USERNAME'
            required
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
            <InputStyle
            type="password"
            name="password"
            placeholder='PASSWORD'
            required
              onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div>
          <ButtonStyle 
           type="submit">LOGIN</ButtonStyle>
        </div>
        </InputContainerStyle>
      </LoginContainerStyle>
    </FormContainerStyle>
  )
}

export default Login