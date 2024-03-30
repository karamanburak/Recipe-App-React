import styled from 'styled-components';

const ContainerStyle = styled.div`
background: #F1F2B5; 
background: -webkit-linear-gradient(to right, #135058, #F1F2B5);  
background: linear-gradient(to right, #135058, #F1F2B5); 
background-position: center;
background-size: cover;
object-fit: cover;
min-height: 100vh;
`;


export const DetailMealImgStyle = styled.img`
width: 200px;
height: 150px;
margin-top: 1rem;
margin-left: 1rem;

`
export const HeaderContainerStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-family: cursive;
color: #E1F1DD;
`

export const DetailsCardStyle = styled.div`
/* display: flex; */
justify-content: center;
align-items: center;
text-transform: uppercase;
font-family: cursive;
background-color: #E1F1DD;
width: 80vw;
margin: auto;
border-radius: 10px;
margin-top: 1rem;
padding: 2rem;

`

export const DetailsCardImg = styled.img`
border-radius: 10px;
border: 2px solid #548073;
padding: 1rem;
`

export default ContainerStyle;
