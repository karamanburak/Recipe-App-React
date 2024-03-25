import styled from 'styled-components';

const FormContainerStyle = styled.form`
width: 100vw;
height: 100vh;
background-image: url("https://picsum.photos/1600/900");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
object-fit: cover;
display: flex;
`;


export const LoginContainerStyle = styled.div`
display: flex;
flex-direction: column;
border: 2px solid wheat;
width: 600px;
height: 600px;
border-radius: 50%;
margin: auto;
background-color: #E1F1DD;
opacity: .8;

`
export const ImageMealStyle = styled.img`
width: 250px;
height: 250px;
opacity: 1;
`

export const InputContainerStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.5rem;

`

export const InputStyle = styled.input`
outline: none;
`

export const ButtonStyle = styled.button`
width: 280px;
border: none;
outline: none;
background-color: #66BDC1;

&:hover{
    opacity: .8;
    transition: all ease-in-out .3s;
}

`


export default FormContainerStyle;
