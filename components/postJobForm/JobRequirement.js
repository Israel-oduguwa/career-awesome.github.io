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
import RenderEdit from "../SIMPLE_WYSIWYG/RenderEdit";
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Compensation from "./Compensation";
import Button from '@material-ui/core/Button';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Divider from "@material-ui/core/Divider"


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
export class JobRequirement extends Component {
    render() {
        const {classes, 
            handleChange, 
           state, nextStep, submit, prevStep, description, addSkills, deleteSkills, refs } = this.props;
        return (
            <>
             <AppBar color="inherit" className={classes.navBar} position="sticky">
              <Toolbar className={classes.appBar}>              
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

            <div className="container-fluid">
             <div className="row mt-4">
                <div className="col-md-12">
               <Typography variant="h6">Tell us about the job</Typography>
                </div>
                <div className="col-md-6">
                <div className="JobDetailsCard">
                <div className="mb-1">
           <Typography variant="subtitle2">Requirements</Typography>
           </div>
           
                 <div className="row">
                <div className="col-md-4 col-6 mt-1 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Employment Type</InputLabel>
                                    <Select
                                    name="jobType"   
                                    labelId="Employment Type"
                                    id="job Type"
                                    value={state.jobType}
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
                <div className="col-md-4 col-6 mt-1 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Experience</InputLabel>
                                    <Select
                                    name="experience"   
                                    labelId="Experience"
                                    id="experience"
                                    value={state.experience}
                                    onChange={handleChange}
                                    label="Experience"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                <div className="col-md-4 col-6 mt-2 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Education</InputLabel>
                                    <Select
                                    name="education"   
                                    labelId="Education"
                                    id="experience"
                                    value={state.education}
                                    onChange={handleChange}
                                    label="Education"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                 <div className="col-md-4 col-6 mt-2 mb-1">
                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel id="eduStaus">Experience Preference</InputLabel>
                                    <Select
                                    name="experienceScale"   
                                    labelId="Education"
                                    id="experience"
                                    value={state.experienceScale}
                                    onChange={handleChange}
                                    label="Education"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                </div>
                <div className="col-md-12 mt-3 mb-2 ">
                 <div className="jobdescSpace">
                    <Typography className="mb-3" variant="subtitle2">Job Description</Typography>
                {
                    typeof window !== 'undefined'?
                    <RenderEdit body={state.jobDescription} handleChange={description} />:
                    <div>Loading</div>
                }
               
               </div>
                </div>
                <div className="col-md-12 mt-4 jobskil">
                    <div className="categories mt-4">
                       <Typography variant="subtitle2" gutterBottom>Skills</Typography>
                         <Paper component="ul" >
                        <div className={classes.roots}>
                         {
                             state.requiredSkills.map((cat, index) =>(
                                 <li className="chipLI" key={index}>
                                 <Chip
                                  color="primary"

                                   label={cat}
                                   onDelete={() => deleteSkills(index)}
                                   className={classes.chip}
                                 />
                               </li>
                             ))
                         }
                                                   </div>
                             <div className="mt-2 mb-2">
                            <TextField disabled={state.requiredSkills.length === 6}  className="categoryText mb-2" label="skills" onKeyDown={addSkills} ref={refs} 
                                 id="standard-size-small"  size="small" />
                             </div>
     </Paper>
 


                         </div>
                         </div>
                </div>
               
                  <button onClick={prevStep}>Previous</button>
                </div>

                </div>
               
                <div className="col-md-6">
                <Compensation 
                    handleChange={handleChange}
                    submit={submit}
                     state={state}/>
                </div>
                </div>
               
                 
            </div>
            </>
        )
    }
}
export default withStyles(styles)(JobRequirement)