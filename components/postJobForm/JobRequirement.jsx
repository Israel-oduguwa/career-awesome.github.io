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


const styles = (theme) =>({
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
export class JobRequirement extends Component {
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
                <Stepper activeSteps={2} />
                </div>
                {/* <div className="phoneStep">
                 <Typography className="phoneStepText" variant="h5">Personal Details</Typography>
                </div> */}
              </Toolbar>
            </AppBar>
            <div className="container jobContainer">
                <div className="row">
                <div className="col-md-4">
                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Education</InputLabel>
                                    <Select
                                    name="educationStatus"   
                                    labelId="Education Status"
                                    id="educationStatus"
                                    value={state.educationStatus}
                                    onChange={handleChange}
                                    label="eduationStatus"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                <div className="col-md-4">
                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Required Experience</InputLabel>
                                    <Select
                                    name="educationStatus"   
                                    labelId="Required Experience"
                                    id="experience"
                                    value={state.experience}
                                    onChange={handleChange}
                                    label="Required Experinece"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                <div className="col-md-4">
                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Employment</InputLabel>
                                    <Select
                                    name="employmentOption"   
                                    labelId="Required Experience"
                                    id="experience"
                                    value={state.employmentOption}
                                    onChange={handleChange}
                                    label="Required Experinece"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                <div className="col-md-10">
                    <Typography variant="body2">Job Description</Typography>
                {
                    typeof window !== 'undefined'?
                    <RenderQuill body={state.jobDescription} handleChange={description} />:
                    <div>Loading</div>
                }
                Do not forget to Create another componejjnt so that people cant post images 
                </div>
                <div className="col-md-12">
                    <h3>Skills</h3>
                    <div className="categories">
                       <Typography variant="subtitle" gutterBottom>Skills</Typography>
                         <Paper component="ul" className={classes.root}>
                         {
                             state.requiredSkills.map((cat, index) =>(
                                 <li key={index}>
                                 <Chip
                                  
                                   label={cat}
                                   onDelete={() => deleteSkills(index)}
                                   className={classes.chip}
                                 />
                               </li>
                             ))
                         }
     <TextField className="categoryText" label="skills" onKeyDown={addSkills} ref={refs} 
       id="standard-size-small"  size="small" />
     </Paper>
 
                         </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}

export default withStyles(styles)(JobRequirement)
