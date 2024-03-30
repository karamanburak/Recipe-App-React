import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import PrivateRouter from './PrivateRouter'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import MyNavbar from '../components/navbar/Navbar'
import Details from '../pages/details/Details'
import NotFound from '../pages/errorPage/NotFound'

const AppRouter = () => {
    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                
                <Route path='/login' element={<Login />} />


                <Route path='/about' element={<PrivateRouter />}>
                    <Route path="" element={<About />} />
                </Route>

                <Route path='/details' element={<PrivateRouter />}>
                    <Route path='' element={<Details />} />
                </Route>
                <Route path="*" element={<NotFound />} />

            </Routes>
        </Router>

    )
}

export default AppRouter