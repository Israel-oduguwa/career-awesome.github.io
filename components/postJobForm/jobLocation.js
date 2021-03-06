import React, { Component } from 'react'
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Divider from "@material-ui/core/Divider"
export class jobLocation extends Component {
    render() {
        const { classes, handleChange, nextStep, prevStep, state } = this.props;
        return (
            <>
           <div className="JobDetailsCard mt-4">
           <div className="sgh">
           <Typography variant="subtitle2">COMPANY LOCATION</Typography>
           </div>
           <Divider/>
                <div className="row">
                    <div className="col-md-6 mb-2 mt-1">
                    <TextField id="country" 
                    fullWidth
                    label="Country" variant="standard"  onChange={handleChange} 
            value={state.jobCountry} name="jobCountry" />
                    </div>
                    <div className="col-md-6 mb-2 mt-1">
                    <TextField id="City, State" 
                    fullWidth
                    label="City, State" variant="standard"  onChange={handleChange} 
            value={state.jobCityAndState} name="jobCityAndState" />
                    </div>
                    <div className="col-md-6 mb-2">
                    <TextField id="Job Address" 
                    fullWidth
                    label="Job Address" variant="standard"  onChange={handleChange} 
            value={state.jobAddress1} name="jobAddress1" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <TextField id="Zip code" 
                    fullWidth
                    label="Zip code" variant="standard"  onChange={handleChange} 
            value={state.zipCode} name="zipCode" />
                    </div>
                    <div className="col-md-3 mb-2">
                    <TextField id="Display city" 
                    fullWidth
                    label="Display city" variant="standard"  onChange={handleChange} 
            value={state.displayCity} name="displayCity" />
                    </div>
                   <div className="col-md-12 mt-3">
                   <Typography variant="subtitle2" className="form-logo">
                 Relocation expenses covered
                </Typography>
                    <FormControlLabel
                      value="start"
                      control={<Radio 
                        name="relocationExpensesCovered"
                        value="Yes"
                        onChange={handleChange}
                        checked={state.relocationExpensesCovered === "Yes"}
                        color="primary" />}
                      label="Yes"
                      labelPlacement="start"
                    />
                     <FormControlLabel
                      value="start"
                      control={<Radio 
                        name="relocationExpensesCovered"
                        value="No"
                        onChange={handleChange}
                        checked={state.relocationExpensesCovered === "No"}
                        color="primary" />}
                      label="No"
                      labelPlacement="start"
                    />
                     <FormControlLabel
                      value="start"
                      control={<Radio 
                        name="relocationExpensesCovered"
                        value="Not specified"
                        onChange={handleChange}
                        checked={state.relocationExpensesCovered === "Not specified"}
                        color="primary" />}
                      label="Not specified"
                      labelPlacement="start"
                    />
                   </div>
                </div>
          </div>
            </>
        )
    }
}

export default jobLocation
