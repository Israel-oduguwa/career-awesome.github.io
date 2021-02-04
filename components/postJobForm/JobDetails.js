import React, { Component } from 'react';
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Fade } from "react-awesome-reveal";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import InfoIcon from '@material-ui/icons/Info';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const styles = (theme) =>({
  navBar:{
       boxShadow: "rgb(220, 220, 220) 0px 2px 10px",
     },
  appBar:{
    justifyContent:"space-between",
  },
  media:{
    height:"300px",
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

export class JobDetails extends Component {
    render() {
        const {classes, postImage, companyLogo,
             handleChange, handleJobCategoryChange,
            handleSocialChange,
            removeSocial,
            addSocial,
            handleJobIndustryChange,
            handleToogleButtons,
            state, nextStep, prevStep } = this.props;
        return (
           <>
           <AppBar className={classes.navBar} color="inherit" position="static" >
              <Toolbar className={classes.appBar}>              
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

            <div className="container-fluid mt-1">
                <div className="row mt-4">
                <div className="col-md-1"></div>
                <div className="col-md-7">
                <div className="row">
                <div className="col-md-12">
               <Typography variant="body1">Tell us about the job</Typography>
                </div>

                    <div className="col-md-12 field">
                    <div className="label mb-1">
                      <Typography variant="subtitle2">Job Title</Typography>
                    </div>
                    <TextField size="small" id="standard-basic" 
                    fullWidth
                     variant="outlined"  onChange={handleChange} 
                      value={state.jobTitle} name="jobTitle" />
                    </div>
                        <div className="col-md-6 field">
                         <div className="label mb-1">
                       <Typography variant="subtitle2">Company Name</Typography>
                      </div>
                        <TextField id="standard-bas" 
                        fullWidth variant="outlined"
                        size="small"
                          onChange={handleChange} 
                value={state.companyName} name="companyName" />
                        </div>
                        <div className="col-md-6 field">
                       <div className="label mb-1">
                       <Typography variant="subtitle2">Company Email</Typography>
                      </div>
                          <TextField id="email" 
                        fullWidth variant="outlined"
                        size="small"
                          onChange={handleChange} 
                value={state.email} name="email" />
                        </div>
                        <div className="col-md-6 field">
                        <div className="label mb-1">
                       <Typography variant="subtitle2">Job Category</Typography>
                      </div>
                        {
                            state.jobCategory.map((inputField, index) =>{ 
                              return (
                                <React.Fragment key={index}>
                                      <FormControl  size="small" variant="outlined" className={classes.formControl}>
                                    <InputLabel id="select jobCategory">Job Category</InputLabel>
                                    <Select
                                    name="jobCategories"   
                                    labelId="select jobCat"
                                    id="select jobCat"
                                    value={inputField.jobCategory}
                                    onChange={e => handleJobCategoryChange(index, e)}
                                    label="Social"
                                    > 
                                    <MenuItem value="Website">Website</MenuItem>
                                    <MenuItem value="Software Enginnering">Software Enginnering</MenuItem>
                                    <MenuItem value="Twitter">Twitter</MenuItem>
                                    <MenuItem value="Linkden">Linkden</MenuItem>
                                    </Select>
                                </FormControl>
                                </React.Fragment>
                            )})
                        }
                        </div>
                        <div className="col-md-6 field">
                     <div className="label mb-1">
                       <Typography variant="subtitle2">Job Industry</Typography>
                      </div>
                        {
                            state.jobIndustry.map((inputField, index) => (
                                <React.Fragment key={index}>
                                      <FormControl size="small" variant="outlined" className={classes.formControl}>
                                    <InputLabel id="select jobIndustry">Job Industry</InputLabel>
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
                        <div className="col-md-12 mb-2 field">
                       <Typography variant="subtitle2">Social Media Links</Typography>
                      </div>
                      <div className="col-md-6 mb-1">
                         <TextField id="standard-basic" 
                    fullWidth
                    label="Twitter" variant="standard"  onChange={handleChange} 
            value={state.twitter} name="twitter" />
                      </div>
                      <div className="col-md-6 mb-1">
                         <TextField id="standard-basic" 
                    fullWidth
                    label="LinkedIn" variant="standard"  onChange={handleChange} 
            value={state.linkedIn} name="linkedIn" />
                      </div>
                       <div className="col-md-6 mb-1 mt-1">
                         <TextField id="standard-basic" 
                    fullWidth
                    label="Facebook" variant="standard"  onChange={handleChange} 
            value={state.facebook} name="facebook" />
                      </div>
                        <div className="col-md-6 field">
                        <div className="label mb-1">
                       <Typography variant="subtitle2">Application Link</Typography>
                      </div>
                        <TextField id="standard-basic" 
                    fullWidth size="small"
                    label="Application Link" variant="outlined"  onChange={handleChange} 
            value={state.companyApplicationLink} name="companyApplicationLink" />
                        </div>
                  <div className="col-md-12 mt-3">
                    <div className="label mb-1">
                     <FormControlLabel
                     style={{margin:"0"}}
                    value="start"
                    control={ <Switch
        checked={state.deadLine}
        onChange={handleToogleButtons}
        name="deadLine"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />}
                    label={<Typography variant="subtitle2">Add Application Deadline</Typography>}
                    labelPlacement="start"
                  />
                      
                      
                      </div>

                  </div>  
                        {
                            state.deadLine ?
                           
                            <div className="col-md-6 mt-2">
                        <TextField id="standard-basic" 
                    fullWidth size="small"
                    label="Application deadline" variant="outlined"  onChange={handleChange} 
            value={state.applicationDeadLine} name="applicationDeadLine" />
                        </div>
                       
                        :
                        <></>
                        }
                </div>
                <button onClick={nextStep}>Continue</button>
            </div>
            <div className="col-md-4">
              <div className="row">
              <div className="col-md-12">
              <div className="label mb-3">
                       <Typography variant="h6">Header Image</Typography>
                      </div>
              </div>
              <div className="col-md-12">
                <Card>
                <CardMedia
        className={classes.media}
        image={state.HeaderImage}
        title="Paella dish"
      />
                </Card>
              </div>
              </div>
            </div>
            </div>
            </div>
           </>
        )
    }
}

export default withStyles(styles)(JobDetails)
