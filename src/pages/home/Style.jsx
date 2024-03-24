import styled from 'styled-components';


const HomeStyle = styled.div`
width: 100%;
/* height: 100vh; */
padding: .5rem;
gap:.5rem;
border: 2px solid #fff;
background: #F1F2B5; 
background: -webkit-linear-gradient(to right, #135058, #F1F2B5);  
background: linear-gradient(to right, #135058, #F1F2B5); 
background-repeat: no-repeat;
background-position: center;
background-size: cover;
object-fit: cover;

`;

export const CardContainerStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
align-items: stretch;
gap: 1rem;
`

export const CardBodyStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
margin: 1rem 0;
text-transform: uppercase;
background-color: indianred;
width: 300px;
height: 350px;
border-radius: 10px;
`


export default HomeStyle;
