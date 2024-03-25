import React from 'react'
import HeaderStyle, { H1Style } from './Style'
import RecipeCard from '../../pages/home/RecipeCard'
import { Form } from 'react-bootstrap'

const Header = () => {
    return (
        <div className='text-center'>
        <H1Style>RECIPE APP</H1Style>
        <Form/>
        </div>
    )
}

export default Header