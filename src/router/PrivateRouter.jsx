import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeProvider';


const PrivateRouter = () => {
    const {name,password} = useContext(RecipeContext)

    return (name === "burak" && password === "1234" ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
        // kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git, yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
    )

    )
}

export default PrivateRouter