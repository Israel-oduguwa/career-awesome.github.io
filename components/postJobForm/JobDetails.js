import React, { Component } from 'react';
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

export class JobDetails extends Component {
    render() {
        const {classes, postImage, companyLogo,
             handleChange, handleJobCategoryChange,
            handleSocialChange,
            removeSocial,
            addSocial,
            handleJobIndustryChange, 
            state, nextStep, prevStep } = this.props;
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

            <div className="container jobContainer">
                <div className="row">
                    <div className="col-md-6 field">
                    <TextField id="standard-basic" 
                    fullWidth
                    label="Job Title" variant="outlined"  onChange={handleChange} 
            value={state.jobTitle} name="jobTitle" />
                    </div>
                        <div className="col-md-6 field">
                        <TextField id="standard-basic" 
                        fullWidth variant="outlined"
                        label="companyName"  onChange={handleChange} 
                value={state.companyName} name="companyName" />
                        </div>
                        <div className="col-md-6 field">
                        <Typography gutterBottom variant="body2">
                            Job Category
                        </Typography>
                        <br/>
                        {
                            state.jobCategory.map((inputField, index) => (
                                <React.Fragment key={index}>
                                      <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="select jobCategory">job category</InputLabel>
                                    <Select
                                    name="jobCategories"   
                                    labelId="select jobCat"
                                    id="select jobCat"
                                    value={inputField.jobCategory}
                                    onChange={e => handleJobCategoryChange(index, e)}
                                    label="Social"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                                </React.Fragment>
                            ))
                        }
                        </div>
                        <div className="col-md-6 field">
                        <Typography gutterBottom variant="body2">
                            Job Industry
                        </Typography>
                        <br/>
                        {
                            state.jobIndustry.map((inputField, index) => (
                                <React.Fragment key={index}>
                                      <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="select jobIndustry">job category</InputLabel>
                                    <Select
                                    name="jobIndustries"   
                                    labelId="select jobCat"
                                    id="select jobCat"
                                    value={inputField.jobIndustry}
                                    onChange={e => handleJobIndustryChange(index, e)}
                                    label="Social"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Facebook">Facebook</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                                </React.Fragment>
                            ))
                        }
                        </div>
                        <div className="col-md-7 field">
                        {
                  state.social.map((inputField, index) =>(
                   <React.Fragment key={index}>
                   
                    <div style={{width:"50%"}} className="col-md-6">  
                    <br/>         
                    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select socisl-label">Social Platform</InputLabel>
        <Select
        name="socialWebsite"   
          labelId="select socisl-label"
          id="select socisl"
          value={inputField.socialWebsite}
          onChange={e => handleSocialChange(index, e)}
          label="Social"
        >
          
          <MenuItem value="Website">Website</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Twitter">Twitter</MenuItem>
          <MenuItem value="Linkden">Linkden</MenuItem>
        </Select>
      </FormControl>
                      </div>
                      <div style={{width:"50%"}} className="col-md-6">   
                      <br/>                         
                                  <TextField onChange={e => handleSocialChange(index, e)}
                                     name="socialLink"                 
                                    fullWidth label="Link" value={inputField.socialLink} variant="outlined" />
                                   <IconButton onClick={() => removeSocial(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
                      </div>
                      
                   </React.Fragment>
                  ))
                }
                <div className="col-md-6">
               <IconButton onClick={addSocial}>
           <AddIcon/>
        </IconButton>
               </div>
                        </div>

                        <div className="col-md-6">
                        <TextField id="standard-basic" 
                    fullWidth
                    label="Application Link" variant="outlined"  onChange={handleChange} 
            value={state.companyApplicationLink} name="companyApplicationLink" />
                        </div>
                        {
                            state.deadLine ?
                            <div className="col-md-6">
                        <TextField id="standard-basic" 
                    fullWidth
                    label="Application deadline" variant="outlined"  onChange={handleChange} 
            value={state.applicationDeadLine} name="applicationDeadLine" />
                        </div>:
                        <></>
                        }
                </div>
                <button onClick={nextStep}>Continue</button>
            </div>
           </>
        )
    }
}

export default withStyles(styles)(JobDetails)
