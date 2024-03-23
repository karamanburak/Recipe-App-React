import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import PrivateRouter from './PrivateRouter'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import MyNavbar from '../components/navbar/Navbar'

const AppRouter = () => {
    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route path='/about' element={<PrivateRouter />}>
                    <Route path='' element={<About />} />
                </Route>

                <Route path='/register' element={<Register />} />
                <Route path='/register' element={<Login />} />

            </Routes>
        </Router>

    )
}

export default AppRouter