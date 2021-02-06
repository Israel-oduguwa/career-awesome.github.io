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
const styles = (theme) =>({
  navBar:{
       boxShadow: "rgb(220, 220, 220) 0px 2px 10px",
     },
  appBar:{
    justifyContent:"space-between",
  },
  roots: {
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginTop:"2.35em" 
      },
    root: {
        flexGrow: 1,
      },
      completed:{
        color:"white",
      background:"#450477",
      borderRadius:"50%",
      fontSize:"16px",
      },
    step:{
      justifyContent:"center",
      background:"none", 
      
    },
    
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      formRoot: {
        '& > *': {
          margin: theme.spacing(1),
         
        },
      },
      formControl:{
        width:"100%"
      }
})
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
           <div className="row mt-4 ">
            <div className="col-md-4 col-6 mt-1 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Payment Currency</InputLabel>
                                    <Select
                                    name="paymentCurrency"   
                                    labelId="paymentCurrency"
                                    id="paymentCurrency"
                                    value={state.paymentCurrency}
                                    onChange={handleChange}
                                    label="paymentCurrency"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                 <div className="col-md-4 col-6 mt-1 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Salary Range</InputLabel>
                                    <Select
                                    name="salaryType"   
                                    labelId="salaryType"
                                    id="salaryType"
                                    value={state.salaryType}
                                    onChange={handleChange}
                                    label="salaryType"
                                    > 
                                    <MenuItem value="Range">Range</MenuItem>
                                    <MenuItem value="Up to">Up to</MenuItem>
                                    <MenuItem value="Starting from">Starting from</MenuItem>
                                    <MenuItem value="Exact">Exact</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                {
                  state.salaryType==="Range" ?
                  <>
                   <div className="col-md-4 col-6 mt-1 mb-1">
                        <TextField id="standard-bas" 
                        fullWidth variant="standard"
                        label="Minimum salary"
                          onChange={handleChange} 
                value={state.startingSalary} name="startingSalary"/>
                </div>
                   <div className="col-md-4 col-6 mt-1 mb-1">
                      
                        <TextField id="standard-bas" 
                        fullWidth variant="standard"
                        label="Maximum salary"
                          onChange={handleChange} 
                value={state.maximumSalary} name="maximumSalary"/>
                </div>
                </>
                :
                 <div className="col-md-4 col-6 mt-1 mb-1">
                        <TextField id="standard-bas" 
                        fullWidth variant="standard"
                        label="Salary"
                          onChange={handleChange} 
                value={state.mainSalary} name="mainSalary"/>
                        
                </div>

                }

                 <div className="col-md-4 col-6 mt-1 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Salary Duration</InputLabel>
                                    <Select
                                    name="salaryDuration"   
                                    labelId="salaryDuration"
                                    id="salaryDuration"
                                    value={state.salaryDuration}
                                    onChange={handleChange}
                                    label="salaryDuration"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
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

export default withStyles(styles)(Compensation)
