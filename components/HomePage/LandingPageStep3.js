import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from '@material-ui/core/styles';

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
               <div className="row sectionMargin1">
                   <div className="Step3Title">
                    <Typography className="topPhrase" variant="h3" gutterBottom >
                       Don't Have a Proffesional Resume,
                    </Typography>
                    <Typography className="topPhrase" variant="h3" gutterBottom >
                       We've got You Covered    
                    </Typography>
                    <Typography variant ="h6">Build A  Professional Resume in 3 simple Step</Typography>
                    
                   </div>
                 
     
                   <div className="row">
                     <div className="row sectionMargin1">
                         <div className="col-md-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                      </div>
                      <div className="col-md-6 offset-md-1 ">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                        </Typography>
                      </div>
                     </div>
                      <div className="row sectionMargin1">
                          <div className="col-md-6 offset-md-1 ">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                        </Typography>
                        </div>
                         <div className="col-md-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                      </div>
                      
                     </div>
                     <div className="row sectionMargin1">
                         <div className="col-md-5">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                      </div>
                      <div className="col-md-6 offset-md-1 ">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                        </Typography>
                      </div>
                     </div>
                   </div>


                 

                 <div className="cards-container text-center">
                 <div className="row sectionMargin1">
                 <div className="col-md-12">
                     <Typography className="topPhrase mt-4 mb-4" variant="h3" gutterBottom >
                       Choose from over 20 Tempates   
                    </Typography>
                 </div>
                 <div className="col-md-4">
                       <Card className={classes.Card}>
                           <CardMedia>
                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                               <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>

                           </CardContent>
                       </Card>
                   </div>

                   <div className="col-md-4">
                   <Card className={classes.Card}>
                           <CardMedia>
                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                           <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>
                           </CardContent>
                       </Card>
                   </div>
                   <div className="col-md-4">
                   <Card className={classes.Card}>
                           <CardMedia>
                           <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-contact-c0519.appspot.com/o/undraw_hiring_cyhs.svg?alt=media&token=490ffc4e-e0f0-4bf6-aff1-e1d0e8328f9f" alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                                                            <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>
                           </CardContent>
                       </Card>
                     </div>
                    </div>
                 </div>
               </div>
           </div>
        )
    }
}

export default withStyles(styles)(LandingPageStep3)
