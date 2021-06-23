import React, { Component } from 'react';
import { Fade } from "react-awesome-reveal";

export class RightIntro extends Component {
    render() {
        return (
            <Fade triggerOnce={true} direction="right" duration={1300} >
            <div>
               <img src="https://res.cloudinary.com/hilnmyskv/image/upload/q_auto,f_auto/v1620810155/Algolia_com_Website_assets/images/homepage/algolia-home-mockup.png" className="introImage" alt="IntroImage"/>
            </div>
            </Fade>
        )
    }
}

export default RightIntro
// https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_organize_resume_utk5.svg?alt=media&token=9d3d5a87-4444-4a02-9899-8947583956f6