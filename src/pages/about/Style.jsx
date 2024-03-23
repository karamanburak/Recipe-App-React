import styled from 'styled-components';


const HomeStyle = styled.div`
width: 100%;
height: 90vh;
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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: cursive;

`;

export const ImageCodingStyle = styled.img`
width: 500px;
height: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -4rem;
`

export const AboutStyle = styled.div`
border: 1px solid indianred;
border-radius: 5px;
text-align: end;
padding: 5rem;
text-transform: uppercase;
max-width: 1000px;
`


export default HomeStyle;