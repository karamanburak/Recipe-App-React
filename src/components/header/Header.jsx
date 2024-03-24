import React from 'react'
import HeaderStyle from './Style'
import RecipeCard from '../../pages/home/RecipeCard'
import { Form } from 'react-bootstrap'

const Header = () => {
    return (
        <div className='text-center'>
        <h1 style={{color:"indianred"}}>RECIPE APP</h1>
        <Form/>
        </div>
    )
}

export default Header