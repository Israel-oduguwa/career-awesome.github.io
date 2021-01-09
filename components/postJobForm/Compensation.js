import React, { Component } from 'react'
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import RenderQuill from "../WYSIWYG/RenderQuill";
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
export class Compensation extends Component {
    render() {
         const {classes, 
            handleChange, 
           state, nextStep, prevStep, description, addSkills, deleteSkills, refs } = this.props;
        return (
           <>
            <AppBar color="inherit" position="static">
              <Toolbar>              
                <Typography variant="h5" className="form-logo">
                 Career Awesome
                </Typography>
                
                <div className="stepper">
                <Stepper activeSteps={3} />
                </div>
                {/* <div className="phoneStep">
                 <Typography className="phoneStepText" variant="h5">Personal Details</Typography>
                </div> */}
              </Toolbar>
            </AppBar>
                <div className="container jobContainer">
                    <div className="row">
                       <div className="col-md-4">
                       <TextField 
                        id="Display city" 
                        fullWidth
                        label="Maximum salary" variant="outlined"  onChange={handleChange} 
                        value={state.startingSalary} name="startingSalary" />
                       </div>
                       <div className="col-md-4">
                       <TextField id="Maximum Salary" 
                    fullWidth
                    label="Maximum Salary" variant="outlined"  onChange={handleChange} 
            value={state.maximumSalary} name="maximumSalary" />
                       </div>
                       <div className="col-md-6">

                       </div>
                    </div>
                </div>
           </>
        )
    }
}

export default Compensation
