import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import {  Fade } from "react-awesome-reveal";
import HelpIcon from '@material-ui/icons/Help';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Avatar from '@material-ui/core/Avatar';

export class LandingPageStep2 extends Component {
    render() {
        return (
            <div className="container step2landing">
                <div className="row  justify-content-center">
                    <div className="col-md-10">
                          <div className="card mb-3 mt-3">
                            <div className="row mb-4">
                              <div className="row"  style={{alignItems:"center"}}>
                                <div className="col-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/friendme-8be4c.appspot.com/o/undraw_ask_me_anything_k8o0.svg?alt=media&token=b2f1402e-3d06-45e7-bb30-47015f65907f" alt="Question"/>
                              </div>
                              <div className="col-8">
                                <Typography variant="h6">
                                  Wait, What is Career Awesome all about and what do you offer
                                </Typography>
                              </div>
                              </div>
                              <br/>
                               
                              <div className="row mt-3" style={{alignItems:"center"}}>
                              <div className="col-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/friendme-8be4c.appspot.com/o/undraw_respond_8wjt.svg?alt=media&token=9d6fbddf-cbb7-4b72-874b-8a6a1d3e808a" alt="...Response"/>
                              </div>
                                <div className="col-8 mb-2">
                                <Typography variant="h6">
                                  Career Awesome is the only website that teaches and help student to perform and be active all over the world
                                </Typography>
                                </div>
                                
                              </div>
                            </div>
                          </div>
                      </div>
                   <div className="col-md-12 step2landingdash1 mt-4 text-center"><div className="build-head mb-2 mt-4">
                       <Typography className="topPhrase mb-2 mt-4" variant="h3">We help You Build Your Career </Typography>
                        <Typography className="mb-4" variant="h6">The best Career building platform, we are after your success</Typography>
                    </div></div>
                  <div className="row sectionMargin1">
                      <div className="col-md-5 mt-4">
                    
                      <Typography className="topPhrase mb-3 mt-4" variant="h4">Browse Jobs Faster</Typography>
                      <Typography variant="body1">allIt’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker. div</Typography>
                      <a href="#" class="stretched-link">Browse Jobs ==></a>
                   </div>  
                    <div className="col-md-1 d-none d-lg-block"></div>
                    <div className="col-md-5 mt-4 mb-4">
                    <img src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:ed5a5006-c1e0-4c56-b22c-4ab8533fd29d/plan-track.png?cdnVersion=1495" alt="..."/>
                    </div>
                  </div>
                 <div className="row sectionMargin1">
                   <div className="col-md-5 mt-4 d-none d-lg-block mb-4">
                    <img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
                    </div>
                     <div className="col-md-5 offset-md-1 mt-2">
                    
                    <Typography className="topPhrase mb-3 mt-2" variant="h4">Acess to knowledge to advance your career</Typography>
                    <Typography variant="body1">allIt’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker. div</Typography>
                    <a href="#" class="stretched-link">Check Tips knowledge ==></a>
                    </div>  
                    <div className="col-md-5 d-lg-none mt-4 mb-4">
                    <img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
                    </div>
                 </div>

                 <div className="row sectionMargin1">
                    <div className="col-md-3">
                      <Typography variant="h6">
                      Serach This is a Serach Bar at the begining of the amining tim of the random word of the complex things
                      </Typography>
                    </div>
                    <div className="col-md-9 text-center">
                      <img src="https://firebasestorage.googleapis.com/v0/b/resume-builder-startup.appspot.com/o/Untitled%20(1).svg?alt=media&token=6a125d44-e2bd-472a-b544-9e3a81ea69db" alt=""/>
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

 // <div className="col-md-9">
 //                      <div className="row">
 //                        <div className="col-3">
 //                          <img src="https://media.istockphoto.com/vectors/thinking-girl-beautiful-face-doubts-problems-thoughts-emotions-woman-vector-id1201080786?k=6&m=1201080786&s=612x612&w=0&h=MVijjLPl35T4X_1pAZ9UlmPWXP_LPAnZl3a1zht8hWY=" alt=".."/>
 //                        </div>
 //                        <div className="col-9">
 //                          <Typography variant="h4" >What is Career Awesome</Typography>
 //                        </div>
 //                        <div className="col-9">
 //                          <Typography variant="body1">It’s a new way to communicate—faster than email and more focused than chat.</Typography>
 //                        </div>
 //                      </div>
                      

 //                    </div> 