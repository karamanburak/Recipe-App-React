import React from 'react'
import FormContainerStyle, { ImageMealStyle, InputContainerStyle, LoginContainerStyle } from './Style'
import mealLogo from '../../assets/meal.svg'
import { useNavigate } from 'react-router-dom/dist'

const Login = () => {
  const navigate = useNavigate()
  return (
    <FormContainerStyle>
      <LoginContainerStyle >
        <InputContainerStyle>
        <ImageMealStyle src={mealLogo} alt="" />
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder='USERNAME'
            // value={""}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder='PASSWORD'
            // value={""}
            required
          />
        </div>
        <div>
          <button 
          onClick={()=>navigate("/")}
           type="submit">LOGIN</button>
        </div>
        </InputContainerStyle>
      </LoginContainerStyle>
    </FormContainerStyle>
  )
}

export default Login