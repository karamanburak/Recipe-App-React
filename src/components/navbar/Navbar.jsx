import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import mainLogo from '../../assets/main-logo.png'
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavbarStyled, { ImgStyle, NavLinkStyle, NavStyle, TitleStyle } from './Style';

const MyNavbar = () => {
    const navigate = useNavigate()

    return (
        <NavbarStyled>
            <Navbar expand="lg" backgroundColor>
                <ImgStyle onClick={()=> navigate("/")} src={mainLogo} alt="" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavStyle className="ms-auto gap-3 fs-4">
                        <NavLinkStyle onClick={() => navigate("/")}>HOME</NavLinkStyle>
                        <NavLinkStyle onClick={() => navigate("/about")}>ABOUT</NavLinkStyle>
                        <NavLinkStyle onClick={() => navigate("/register")}>REGISTER</NavLinkStyle>
                        <NavLinkStyle onClick={() => navigate("/login")}>LOGIN</NavLinkStyle>
                    </NavStyle>
                </Navbar.Collapse>
            </Navbar>
        </NavbarStyled>
    )
}

export default MyNavbar