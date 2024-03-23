import React from 'react'
import HomeStyle, { AboutStyle, ImageCodingStyle } from './Style'
import CodingSvg from '../../assets/coding.svg'

const About = () => {
    return (
        <HomeStyle>
                <ImageCodingStyle src={CodingSvg} alt="" />
                <h1>ABOUT SOFTWARE DEVELOPER <span className='text-danger'>BURAK KARAMAN</span></h1>
            <AboutStyle>
                <h2>HI, I'AM BURAK</h2>
                <h4>I'm currently learning Full-Stack Development Languages.
                    I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL, AWS Services.</h4>
                <p style={{ fontWeight: "bold" }}><a href='mailto:karaman.buraak@gmail.com' target='blank'   className='text-white'>Send email :</a>  karaman.buraak@gmail.com</p>
            </AboutStyle>
        </HomeStyle>
    )
}

export default About