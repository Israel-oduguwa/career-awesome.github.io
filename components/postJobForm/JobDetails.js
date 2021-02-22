import React, { Component } from 'react';
import Stepper from "../jobStepper/Stepper";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import JobLocation from "./jobLocation";
import Divider from "@material-ui/core/Divider"
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Fade } from "react-awesome-reveal";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import InfoIcon from '@material-ui/icons/Info';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import IconButton from '@material-ui/core/IconButton';
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
    height:"100px",
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
            removejobCategory,
            addjobCategory,
            addjobIndustry,
            removejobindustry,
            handleJobIndustryChange,
            handleToogleButtons,
            state, nextStep, prevStep } = this.props;
        return (
           <>
           <AppBar className={classes.navBar} color="inherit" position="sticky" >
              <Toolbar className={classes.appBar}>              
                <Typography variant="h6" className="form-logo">
                 Career Awesome
                </Typography>
                <div className="stepper d-md-block d-none">
                <Stepper activeSteps={1} />
                </div>
                {/* <div className="phoneStep">
                 <Typography className="phoneStepText" variant="h5">Personal Details</Typography>
                </div> */}
              </Toolbar>
            </AppBar>

            <div className="container-fluid mt-1">
                <div className="row mt-4">
                <div className="col-lg-7">
              <div className="rhu" >
               <Typography className="mb-2" variant="subtitle2">TELL US ABOUT YOUR JOB</Typography>
                <Divider/>
              </div>
                </div>
                <div className="col-lg-7">
                <div className="JobDetailsCard">
                <div className="row">
                

                    <div className="col-md-12 field">
                    
                    <TextField size="small" id="job-title" 
                    fullWidth label="Job Title"
                     variant="standard"  onChange={handleChange} 
                      value={state.jobTitle} name="jobTitle" />
                    </div>
                        <div className="col-md-6 field">
                      
                        <TextField id="standard-bas" 
                        fullWidth variant="standard"
                        label="Company Name"
                          onChange={handleChange} 
                value={state.companyName} name="companyName" />
                        </div>
                        <div className="col-md-6 field">
                       
                          <TextField id="email" 
                        fullWidth variant="standard"
                        size="small" label="Company Email"
                          onChange={handleChange} 
                value={state.email} name="email" />
                        </div>
                        <div className="col-md-6 field">
                       
                        {
                            state.jobCategory.map((inputField, index) =>{ 
                              const jobCategories = ['Accounting','Banking', 'Biotech', 'Bussiness Development'];
                              return (
                                <React.Fragment key={index}>
                                      <FormControl  size="small" variant="standard" className={classes.formControl}>
                                    <InputLabel id="select jobCategory">Job Category</InputLabel>
                                    <Select
                                    name="jobCategories"   
                                    labelId="select jobCat"
                                    id="select jobCat"
                                    value={inputField.jobCategories}
                                    onChange={e => handleJobCategoryChange(index, e)}
                                    label="Social"
                                    > 
                                     <MenuItem defaultValue = ""value="0">Job Category</MenuItem>
                                    {
                                      jobCategories.map((cat, index) =>(
                                       <MenuItem defaultValue = "" key={index} value={cat} >{cat}</MenuItem>
                                      ))
                                    }
                                   
                                    </Select>
                                  
                                </FormControl>
                                  <IconButton onClick={e => removejobCategory(index, e)}>
                                    <DeleteIcon/>
                                    </IconButton>
                                </React.Fragment>
                            )})
                        }
                        <div className="mt-3">
                        <Button onClick={addjobCategory}>add job category <AddIcon/> </Button>
                        </div>
                        </div>
                        <div className="col-md-6 field">
                     
                        {
                            state.jobIndustry.map((inputField, index) => {
                              const jobIndustries = ['Accounting - Finance','Advertising', 'Agriculture', 'Airline - Aviation', 'Architecture - Building'];
                             return(
                                <React.Fragment key={index}>
                                      <FormControl size="small" variant="standard" className={classes.formControl}>
                                    <InputLabel id="select jobIndustry">Job Industry</InputLabel>
                                    <Select
                                    name="jobIndustries"   
                                    labelId="select jobCat"
                                    id="select jobCat"
                                    value={inputField.jobIndustries}
                                    defaultValue = ""
                                    onChange={e => handleJobIndustryChange(index, e)}
                                    label="Social"
                                    > 
                                    <MenuItem defaultValue = "" value="0">Job Industry</MenuItem>
                                    {
                                      jobIndustries.map((Ind, index) =>(
                                         <MenuItem defaultValue = "" key={index} value={Ind}>{Ind}</MenuItem>
                                        ))
                                    }
                                    </Select>

                                </FormControl>
                                <IconButton onClick={e => removejobindustry(index, e)}>
                                    <DeleteIcon/>
                                    </IconButton>
                                </React.Fragment>
                            )})
                        }
                        <div className="mt-3">
                        <Button onClick={addjobIndustry}>add job Industry <AddIcon/> </Button>
                        </div>
                        </div>
                        <div className="col-md-12 mb-2 field">
                       <Typography variant="subtitle2">Social Media Links</Typography>
                      </div>
                      <div className="col-md-6 mb-1">
                         <TextField id="twitter" 
                    fullWidth
                    label="Twitter" variant="standard"  onChange={handleChange} 
            value={state.twitter} name="twitter" />
                      </div>
                      <div className="col-md-6 mb-1">
                         <TextField id="linkedIn" 
                    fullWidth
                    label="LinkedIn" variant="standard"  onChange={handleChange} 
            value={state.linkedIn} name="linkedIn" />
                      </div>
                       <div className="col-md-6 mb-1 mt-1">
                         <TextField id="facebook" 
                    fullWidth
                    label="Facebook" variant="standard"  onChange={handleChange} 
            value={state.facebook} name="facebook" />
                      </div>
                        <div className="col-md-6 mb-1 mt-1">
                      
                        <TextField id="apply-links" 
                    fullWidth size="small"
                    label="Application Link" variant="standard"  onChange={handleChange} 
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
                        <TextField id="deadline" 
                    fullWidth size="small"
                    label="Application Deadline" variant="standard"  onChange={handleChange} 
            value={state.applicationDeadLine} name="applicationDeadLine" />
                        </div>
                       
                        :
                        <></>
                        }
                </div>
                
                </div>
                <JobLocation  nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                     state={state} />
            </div>
            <div className="col-lg-5 ">
              <div className="row stickyjob">
             
              <div className="col-md-12">
       <div class="card bg-dark text-white">
  <img class="card-img imge" src={state. HeaderImage} alt="Card image"/>
  <div class="card-img-overlay headerjobCard">
    <h5 class="card-title">Header Image</h5>
    <div className="row">
    <div className="col-md-9 col-9"> <p class="card-text" > Create better recognition for your Job by adding your Company Logo.</p></div>
    <div className=" col-md-3 col-3 text-center">
     <label htmlFor="contained-button-file">
      <input accept="image/*"  style={{display:"none"}} className={classes.input} id="icon-button-file" type="file" />
      <Paper>
        <IconButton color="primary" aria-label="upload picture" component="span">
          <EditIcon/>
        </IconButton>
      </Paper>
      </label>
    </div>
    <div className="col-md-4 col-3">
    <Card>
    <CardMedia image={state.companyLogo} className={classes.media}  title="Company logo"/>
    </Card>
    </div>
    </div>
  </div>
</div>

              </div>
              <div className="col-md-12 mt-4">
  <div className="info">
<Typography variant="body1">You can post the image by adding the image link</Typography>
  </div>
</div>
<div className="col-md-6 mt-3">
<TextField id="header"  size="small"
                    fullWidth
                    label="Header Image" variant="outlined"  onChange={handleChange} 
             name="HeaderImage" />
</div>
<div className="col-md-6 mt-3"><TextField id="logo" 
                    fullWidth
                    label="Company Logo" size="small" variant="outlined"  onChange={handleChange} 
           name="companyLogo" /></div>


           <div className="col-md-6 mt-4 mb-4">
           <Button  color="secondary" variant="contained" onClick={nextStep}>Continue</Button>
                
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
