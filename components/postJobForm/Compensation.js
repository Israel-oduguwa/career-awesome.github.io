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
import Divider from "@material-ui/core/Divider";
export class Compensation extends Component {
    render() {
         const {classes, 
            handleChange, 
            submit,
           state} = this.props;
        return (
           <>   
            <div className="JobDetailsCard mt-4">
           <div className="sgh">
           <Typography variant="h6">Location</Typography>
           </div>
           <Divider/>
           <div className="row mt-4">
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
                         
                           <button onClick={submit}>Submit all</button>
                        {/* the time Year or Hoursly  */}
                       </div>
                    </div>
                    </div>
                
           </>
        )
    }
}

export default Compensation
