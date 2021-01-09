import React, { Component } from 'react'
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

export class jobLocation extends Component {
    render() {
        const { classes, handleChange, nextStep, prevStep, state } = this.props;
        return (
            <>
            <AppBar color="inherit" position="static">
              <Toolbar>              
                <Typography variant="h5" className="form-logo">
                 Career Awesome
                </Typography>
                
                <div className="stepper">
                <Stepper activeSteps={1} />
                </div>
                {/* <div className="phoneStep">
                 <Typography className="phoneStepText" variant="h5">Personal Details</Typography>
                </div> */}
              </Toolbar>
            </AppBar>
            <div className="container jobContainer">
                <div className="row">
                    <div className="col-md-6">
                    <TextField id="country" 
                    fullWidth
                    label="Country" variant="outlined"  onChange={handleChange} 
            value={state.jobCountry} name="jobCountry" />
                    </div>
                    <div className="col-md-6">
                    <TextField id="City, State" 
                    fullWidth
                    label="City, State" variant="outlined"  onChange={handleChange} 
            value={state.jobCityAndState} name="jobCityAndState" />
                    </div>
                    <div className="col-md-6">
                    <TextField id="Job Address" 
                    fullWidth
                    label="Job Address" variant="outlined"  onChange={handleChange} 
            value={state.jobAddress1} name="jobAddress1" />
                    </div>
                    <div className="col-md-3">
                    <TextField id="Zip code" 
                    fullWidth
                    label="Zip code" variant="outlined"  onChange={handleChange} 
            value={state.zipCode} name="zipCode" />
                    </div>
                    <div className="col-md-3">
                    <TextField id="Display city" 
                    fullWidth
                    label="Display city" variant="outlined"  onChange={handleChange} 
            value={state.displayCity} name="displayCity" />
                    </div>

                    <button onClick={nextStep}>Continue</button>
                    <button onClick={prevStep}>Back</button>
                    Reclocation Expenses coverd true  false
                </div>
            </div>
            </>
        )
    }
}

export default jobLocation
