import styled from 'styled-components';


const HeaderStyle = styled.div`
display: block;
text-align: center;
font-size: 2rem;
font-weight: bold;
padding: 1rem;
font-family: cursive;
color: indianred;
`;

export const FormStyle = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
border: 2px solid wheat;
border-radius: 7px;
font-size: 1.2rem;
width: 650px;
margin: auto;
`

export const ButtonStyle = styled.button`
background-color: #E1F1DD;
border: none;
padding: 0.8rem;
border-radius: 5px;
font-family: cursive;
&:hover{
    transition: all ease-in-out .4s;
    transform: scale(.97);
    background-color: indianred;
}
`

export const InputStyle = styled.input`
padding: 0.8rem;
font-family: cursive;
border-radius: 5px;
border: none;
text-transform: uppercase;
`

export const SelectStyle = styled.select`
padding: 0.8rem;
font-family: cursive;
border-radius: 5px;
`

export const ImageStyle = styled.img`
display: block;
text-align: center; 
margin: auto;
margin-top: 2rem;


`

export const H1Style = styled.h1`
font-family: "Rubik Scribble", system-ui;
color: indianred;
font-weight: bold;
font-size: 3rem;
`

export default HeaderStyle;
