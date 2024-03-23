import React from 'react'
import Header from '../../components/header/Header'
import Form from '../../components/header/Form'
import HomeStyle from './Style'

const Home = () => {
    const API_KEY = "ad3262b3de24c620c50d76dc1545a670"
    const API_ID = "e5dc6ef1"
    const BASE_URL = "https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}"

    return (
        <HomeStyle>
            <Header />
            <Form />
        </HomeStyle>
    )
}

export default Home