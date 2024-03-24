import styled from 'styled-components';

const NavbarStyled = styled.div`
background-color: #E1F1DD;
color: indianred;
cursor: pointer;
font-family: "Creepster", system-ui;
background-color: ${({ backgroundColor }) => (backgroundColor || "#E1F1DD")};
width: 100%;
padding: 2rem;
`;

export const ImgStyle = styled.img`
width:100px;
`


export const NavStyle = styled.div`
display: flex;
@media screen and (max-width: 900px) {
    display:flex;
    flex-direction: column;
   text-align: center;
 }

`
export const NavLinkStyle = styled(NavStyle)`
@media screen and (max-width: 900px) {
    display:flex;
    flex-direction: column;
   text-align: center;
   border-bottom: 1px solid #00ADBB;
   text-decoration: none;
 }

&:hover{
    color: #00ADBB;
}
`


export default NavbarStyled;
