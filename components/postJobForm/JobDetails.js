import React, { Component } from 'react';
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography"
export class JobDetails extends Component {
    render() {
        const { postImage, companyLogo, handleChange, state, nextStep, prevStep } = this.props;
        return (
           <>
           <AppBar color="inherit" position="static">
              <Toolbar>              
                <Typography variant="h5" className="form-logo">
                 Career Awesome
                </Typography>
                
                <div className="stepper">
                <Stepper activeSteps={0} />
                </div>
                {/* <div className="phoneStep">
                 <Typography className="phoneStepText" variant="h5">Personal Details</Typography>
                </div> */}
              </Toolbar>
            </AppBar>
           </>
        )
    }
}

export default JobDetails
