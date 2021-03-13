import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import {  Bounce } from "react-awesome-reveal"

export class LandingPageStep2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-3">
                          <img src="https://media.istockphoto.com/vectors/thinking-girl-beautiful-face-doubts-problems-thoughts-emotions-woman-vector-id1201080786?k=6&m=1201080786&s=612x612&w=0&h=MVijjLPl35T4X_1pAZ9UlmPWXP_LPAnZl3a1zht8hWY=" alt=".."/>
                        </div>
                        <div className="col-9">
                          <Typography variant="body1">What is Career Awesome<Typography>
                        </div>
                        <div className="col-9">
                          It’s a new way to communicate—faster than email and more focused than chat.
                        </div>
                      </div>
                    </div> 
                   
                </div>
            </div>
        )
    }
}

export default LandingPageStep2


 // <div className="col-md-12">
 //                    <div className="Step2Title">
 //                        <Typography variant="h5" gutterBottom align="center">
 //                            Lorem ipsum dolor sit amet consectetur.
 //                        </Typography>
 //                    </div>
 //                  <div className="innerPreview">
 //                  {"(descriprtions) This is going to be image of examples of Resumes made by the app like a show case"}
 //                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                  </div>
 //                  <br/>
 //                  <Bounce delay={600}>           
 //                    <Button size="large" variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
 //                   Choose Templates
 //                    </Button>    
 //                  </Bounce>
 //                    </div>