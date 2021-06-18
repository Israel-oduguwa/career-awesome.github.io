import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const styles = theme =>({
    Card:{
        marginTop:"2vh"
    }
})
export class LandingPageStep3 extends Component {
    render() {
        const { classes }= this.props;
        return (
          <div className="container">
            <div className="RFH">
              <div className="row">
                <div className="col-md-8">
                  <Typography variant="h4" className="FH LPTC">
                    Do not Have a Professional Resume?
                  </Typography>
                  <Typography variant="h6" className="STH">
                     Yet! Career Awesome Got You Covered.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="RFC">
              <div className="row">
                <div className="col-md-5 mt-4 d-none d-lg-block mb-4">
                  <img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
                </div>
                <div className="col-md-5 offset-md-1 mt-2">
                  <Typography className="topPhrase mb-3 mt-2 LPTC" variant="h4">Create Resume from Professional Templates</Typography>
                  <Typography variant="body1">Choose professional, elegant, creative, or modern resume templates. Zety's resume maker offers 18 templates. You can easily change colors and adapt the layout to any resume format you choose: functional, reverse-chronological, or combination.</Typography>                   
                </div>  
                <div className="col-md-5 d-lg-none mt-4 mb-4">
                  <img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
                </div>
                <div className="col-md-5 mt-4">
                  <Typography className="topPhrase mb-3 mt-4 LPTC" variant="h4">Edit the resume as your like</Typography>
                  <Typography variant="body1">Choose font types, sizes, and spacing. You can bold, italicize, and underline your text. You don't need to use MS Word resume templates: we take care of the formatting, and give you access to the best resume designs you'll ever see. From colors to fonts to line heights  you have the super power to customize your resume to your taste full-page resume This is for everybody including tips for non techies</Typography>
                    <Button
                    color="primary"
                    className='mt-4'
                    endIcon={<TrendingFlatIcon/>}
                  >
                  Build Resume Now No Signup Required </Button>
                  </div>  
                  <div className="col-md-7 mt-4 mb-4">
                    <img src="https://evernote.com/c/assets/homepage/feature_document_scanning__en.png?82b87618cf404580" alt="..."/>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Typography variant="h4" className="FH LPTC">
                      Create Your Resume in Less Than 10 minutes in Four Simple Steps
                  </Typography>
                </div>
              </div>
              <div className="row LPMT">
                <div className="col-md-3">
                  <Card className={classes.Card}>
                    <CardMedia>
                      <img src="https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4" alt="tsetIamge" className="TestImage"/>
                    </CardMedia>
                    <CardContent>
                      <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                      </Typography>

                    </CardContent>
                  </Card>
                </div>

                <div className="col-md-3">
                      <Card className={classes.Card}>
                        <CardMedia>
                          <img src="https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4" alt="tsetIamge" className="TestImage"/>
                        </CardMedia>
                        <CardContent>
                          <Typography variant="body2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                          </Typography>
                        </CardContent>
                      </Card>
                </div>
                <div className="col-md-3">
                    <Card className={classes.Card}>
                      <CardMedia>
                        <img src="https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4" alt="tsetIamge" className="TestImage"/>
                          </CardMedia>
                      <CardContent>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                        </Typography>
                      </CardContent>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className={classes.Card}>
                      <CardMedia>
                        <img src="https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4" alt="tsetIamge" className="TestImage"/>
                          </CardMedia>
                      <CardContent>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                        </Typography>
                      </CardContent>
                    </Card>
                </div>
                <div className="col-md-12 mt-4 text-center">
                  <div className="mt-4">
                    <Button variant="contained" size ="large" style={{boxShadow: "rgb(178 186 230) 0px 10px 25px", borderRadius:"5px",boxShadow: "rgb(178 186 230) 0px 10px 25px"}} color="primary">
                      Build Your Resume Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default withStyles(styles)(LandingPageStep3)






























 // <div className="container">
 //               <div className="row JobFeauturesHeading">
 //                   <div className="Step3Title">
 //                    <Typography className="topPhrase" variant="h3" gutterBottom >
 //                       Don't Have a Proffesional Resume,
 //                    </Typography>
 //                    <Typography className="topPhrase" variant="h3" gutterBottom >
 //                       We've got You Covered    
 //                    </Typography>
 //                    <Typography variant ="h6">Build A  Professional Resume in 3 simple Step</Typography>
                    
 //                   </div>
                 
     
 //                   <div className="row">
 //                     <div className="row sectionMargin1">
 //                         <div className="col-md-5">
 //                        <img src="https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4" alt="tsetIamge" className="TestImage"/>
 //                      </div>
 //                      <div className="col-md-6 offset-md-1 ">
 //                        <Typography variant="body1https://evernote.com/c/assets/homepage/feature_mobile__en.png?f596b1597ab3f1b4 //                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                        </Typography>
 //                      </div>
 //                     </div>
 //                      <div className="row sectionMargin1">
 //                          <div className="col-md-6 offset-md-1 ">
 //                        <Typography variant="body1">
 //                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                        </Typography>
 //                        </div>
 //                         <div className="col-md-5">
 //                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                      </div>
                      
 //                     </div>
 //                     <div className="row sectionMargin1">
 //                         <div className="col-md-5">
 //                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                      </div>
 //                      <div className="col-md-6 offset-md-1 ">
 //                        <Typography variant="body1">
 //                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                        </Typography>
 //                      </div>
 //                     </div>
 //                   </div>


                 

 //                 <div className="cards-container text-center">
 //                 <div className="row sectionMargin1">
 //                 <div className="col-md-12">
 //                     <Typography className="topPhrase mt-4 mb-4" variant="h3" gutterBottom >
 //                       Choose from over 20 Tempates   
 //                    </Typography>
 //                 </div>
 //                 <div className="col-md-4">
 //                       <Card className={classes.Card}>
 //                           <CardMedia>
 //                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                           </CardMedia>
 //                           <CardContent>
 //                               <Typography variant="body2">
 //                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                               </Typography>

 //                           </CardContent>
 //                       </Card>
 //                   </div>

 //                   <div className="col-md-4">
 //                   <Card className={classes.Card}>
 //                           <CardMedia>
 //                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                           </CardMedia>
 //                           <CardContent>
 //                           <Typography variant="body2">
 //                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                               </Typography>
 //                           </CardContent>
 //                       </Card>
 //                   </div>
 //                   <div className="col-md-4">
 //                   <Card className={classes.Card}>
 //                           <CardMedia>
 //                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
 //                           </CardMedia>
 //                           <CardContent>
 //                                                            <Typography variant="body2">
 //                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
 //                               </Typography>
 //                           </CardContent>
 //                       </Card>
 //                     </div>
 //                    </div>
 //                 </div>
 //               </div>
//           </div>