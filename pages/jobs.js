import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import {AiTwotoneAlert} from "react-icons/ai"
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import {EmailShareButton,FacebookShareButton,LinkedinShareButton,PinterestShareButton,RedditShareButton,TelegramShareButton,TwitterShareButton,WhatsappShareButton,
  //Icons
  EmailIcon,FacebookIcon,FacebookMessengerIcon,LinkedinIcon, PinterestIcon,RedditIcon,TelegramIcon,TumblrIcon,TwitterIcon, WhatsappIcon,
  
} from "react-share";
import CardContent from '@material-ui/core/CardContent';
import dayjs from "dayjs";
import JobCards from "../components/jobPage/jobCards";
import PayFilter from "../components/jobPage/PayFilter";
import FormControl from '@material-ui/core/FormControl';
import SalaryFilter from "../components/jobPage/SalaryFilter";
import CardSkelenton from "../components/jobPage/CardSkelenton";
import relativeTime from "dayjs/plugin/relativeTime";
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
// import GraphicEqRoundedIcon from '@material-ui/icons/GraphicEqRounded';
import axios from "axios";
import Head from 'next/head';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from "@material-ui/core/Button";
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Toolbar from '@material-ui/core/Toolbar';
import {RiEqualizerLine} from "react-icons/ri";
import Footer from "../components/Footer";

const style = (theme) =>({
    appBar:{
       top: 'auto',
        bottom: 0,
        backgroundColor:"#fff",
    },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    background:"rgb(225, 237, 249)",
    '&:hover': {
      backgroundColor:"rgb(248, 249, 250)",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    inputRoot:{
      width:'100%',
    },
    conLabel:{
      marginBottom:0,
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '90%!important',
      [theme.breakpoints.up('sm')]: {
        width: '100%!important',
        '&:focus': {
          width: '100%',
        },
      },
    },
})
export class jobs extends Component {
  state={
    jobs:"",
    open:false,
    jobTypeFilter:[
      {
        id:1,
        name:'Full-time'
      },{
        id:2,
        name:"InternShip"
      },{
        id:3,
        name:"Contract",
      },{
        id:4,
        name:"permanent"
      },{
        id:5,
        name:"Temporaray"
      },
      {
        id:6,
        name:"freelance"
      }     
      ],
      salaryFilter:"All",
      experienceFilter:"None",
      activeJob:[],
      githubJobs:"",
      loading:true,
      loadingGit:true,
      permanent:false,
      fulltime:false,
      hi:"",
      jobType:"",

      anime:false
  }
   componentDidMount(){
        axios.get('https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllJobs')
        .then((res)=>{
            this.setState({
                jobs:res.data,
                loading:false
            })
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get('https://jobs.github.com/positions.json')
        .then((res) =>{
          console.lg(res.data)
            this.setState({
                githubJobs:res.data,
                loadingGit:false
            })
        })
        .catch((err) =>{
          console.log(err)
        })
    }
openDrawer =()=>{
  this.setState({
    open:true
  })
}
closeDrawer =()=>{
  this.setState({
    open:false
  })
}
handleChange=(e)=>{
  this.setState({
    [e.target.name]:e.target.value
  })
 this.setState({ anime: !this.state.anime });
}
   //filter the cards 

handleChanges = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  jobTypeFilterChange(typeFilter) {
    const { jobTypeFilter, activeJob } = this.state;
    if (typeFilter === "ALL") {
      if (activeJob.length === jobTypeFilter.length) {
        this.setState({ activeJob: [] });
      } else {
        this.setState({ activeJob: jobTypeFilter.map(filter => filter.name) });
      }
    } else {
      if (activeJob.includes(typeFilter)) {
        const filterIndex = activeJob.indexOf(typeFilter);
        const newFilter = [...activeJob];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeJob: newFilter });
      } else {
        this.setState({ activeJob: [...activeJob, typeFilter] });
      }
    }
  }

  filterSearch = (filtered) =>{
    return Object.values(filtered).filter((job) => 
          job.jobTitle.toLowerCase().includes(this.state.hi.toLowerCase()))
  }
  salaryFilter = (jobs) =>{
    return this.state.salaryFilter === "All" ?
    jobs:
    jobs.filter(job => job.SalaryDuration === this.state.salaryFilter)
  }
  experienceFilters = (jobs) =>{
    return this.state.experienceFilter === "None" ?
    jobs:
    jobs.filter(job => job.experience === this.state.experienceFilter)}
    render() {
        const { classes } = this.props;
        const { jobs }= this.state;
        const { jobTypeFilter, activeJob } = this.state;
            let filteredList;
            if (
              activeJob.length === 0 ||
              activeJob.length === jobTypeFilter.length
            ) {
              filteredList = this.state.jobs;
            } else {
              filteredList = this.state.jobs.filter(item =>
                this.state.activeJob.includes(item.jobType) 
              
              );
            };
  
      const searchAndCheck = this.filterSearch(filteredList);
      const filterBySalary = this.salaryFilter(searchAndCheck);
      const experienceFilterData = this.experienceFilters(filterBySalary);
        return (
            <>  
            <Head>
                <title>
                 All Jobs
                </title>
             </Head>

            <div className="LandingPageContainer">

            <NavBar>
              <Paper elevation={0} square>
                  
                    <div className="jobqueryPanel">
                    <div className="container">
                          <div className="row" style={{margin:"0", alignItems:"center"}}>
                        
                          <div className="col-10 col-md-8" style={{padding:0}}>
                                    <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                <SearchIcon />
                              </div>
                              <InputBase
                                placeholder="Search…"
                                classes={{
                                  root: classes.inputRoot,
                                  input: classes.inputInput,
                                }}
                                onChange={this.handleChange} name="hi" value={this.state.hi} 
                                inputProps={{ 'aria-label': 'search' }}
                              />
                              </div>  
                          </div>
                          <div className="col-md-2 d-none d-md-block">
                            <PayFilter state={this.state} handleChange={this.handleChange} />
                          </div>  
                          <div className="col-md-2 d-none d-md-block">
                            <SalaryFilter handleChange={this.handleChange} salaryFilter={this.state.salaryFilter}/>
                          </div>
                          <div className="col-2 d-md-none">
                             <IconButton onClick={this.openDrawer}>
                              <RiEqualizerLine/>
                             </IconButton>
                          </div>  
                          <Drawer className="FD d-lg-none d-md-block" open={this.state.open} variant="temporary" onClose={this.closeDrawer}>
                              <div className="row FilH">
                                    <div className="col-10">
                                         <Typography variant="h6" style={{fontWeight:700}}>Filters</Typography>
                                    </div> 
                                    <div className="col-2">
                                      <IconButton  color="action" onClick={this.closeDrawer}>
                                          <CloseRoundedIcon/>
                                      </IconButton>
                                    </div> 
                              </div>
                              <hr style={{margin:0}}/>
                            <div className="row" style={{paddingBottom:"100px", width:"100%"}}>

                                <div className="col-md-12">

                                          <div className="card mb-3">
                                          <div className="FJC">
                                          <div className="category-wrapper mb-2">
                                             <FormControl component="fieldset">
                                               <Typography color="primary" variant="subtitle1">Job Type</Typography>
                                              <FormGroup>
                                              {
                                                this.state.jobTypeFilter.map((fill) =>(
                                                  <FormControlLabel className={classes.conLabel} key={fill.id}
                                                  onChange={() => this.jobTypeFilterChange(fill.name)}
                                                  control={<Checkbox color="primary" checked={activeJob.includes(fill.name)} />}
                                                  label={fill.name}
                                                />
                                                  ))
                                              }
                                              </FormGroup>
                                            </FormControl>
                                          </div>
                                          <hr/>
                                          <div className="category-wrappermb-2">
                                            <FormControl component="fieldset">
                                              <Typography color="primary" variant="subtitle1">Salary Time</Typography>
                                              <RadioGroup aria-label="salary" name="salaryFilter" value={this.state.salaryFilter} onChange={this.handleChange}>
                                              <FormControlLabel className={classes.conLabel} value="All" control={<Radio color="primary" />} label="All" />
                                              <FormControlLabel  className={classes.conLabel} value="year" control={<Radio color="primary" />} label="Yearly" />
                                                <FormControlLabel className={classes.conLabel} value="week" control={<Radio color="primary" />} label="Weekly" />
                                                <FormControlLabel className={classes.conLabel} value="month" control={<Radio color="primary" />} label="Monthly" />
                                                <FormControlLabel className={classes.conLabel} value="day" control={<Radio color="primary" />} label="Daily" />
                                                <FormControlLabel className={classes.conLabel} value="hour" control={<Radio color="primary" />} label="Hourly" />
                                              </RadioGroup>
                                            </FormControl>
                                          </div>
                                          
                                        </div>
                              </div>
                            </div>  
                            </div>
                                <AppBar position="fixed" className={classes.appBar}>
                                
                                  <div className="row" style={{padding:"20px 0"}}>
                                    <div className="col-12 text-center">
                                      <Button color="primary" variant="contained" onClick={this.closeDrawer}>Apply Filter</Button>
                                    </div>
                                  </div>
                                
                              </AppBar>
                          </Drawer>   
                        </div>
                    </div>
                    </div>

              </Paper>
             <div className="container-fluid">
             
             
                    <div className="row">
                        
                       <div className="col-md-3 mt-4 d-none d-md-block">
                        <div class="card text-white">
                         
                          <div class="card-body" style={{background:"#f9f9fb"}}>
                            <h6 class="card-title" >Create a Job alert <span><AiTwotoneAlert/></span> </h6>
                           <Typography color="primary" variant="caption">Create a job alert now and never miss a job </Typography>
                            <TextField fullWidth className="mb-2 mt-3" style={{background:"white"}} size="small" id="outlined-basic" label="Enter job Key words" variant="outlined" />
                            <Button variant="contained" disableElevation size="small" color="primary">Create Job alerts</Button>
                          </div>
                        </div>
                        <div className="card mb-3 sticky-top">
  
                        <div className="card-body">
                        <div className="category-wrapper mt-4 mb-2">
                           <FormControl component="fieldset">
                             <Typography variant="subtitle2">Type of employment</Typography>
                            <FormGroup>
                            {
                              this.state.jobTypeFilter.map((fill) =>(
                                <FormControlLabel className={classes.conLabel} key={fill.id}
                                onChange={() => this.jobTypeFilterChange(fill.name)}
                                control={<Checkbox color="primary" checked={activeJob.includes(fill.name)} />}
                                label={fill.name}
                              />
                                ))
                            }
                              
                            </FormGroup>
                           
                          </FormControl>
                        </div>
                        <div className="category-wrapper mt-4 mb-2">
                          <FormControl component="fieldset">
                            <Typography variant="subtitle2">Salary</Typography>
                            <RadioGroup aria-label="salary" name="salaryFilter" value={this.state.salaryFilter} onChange={this.handleChange}>
                            <FormControlLabel className={classes.conLabel} value="All" control={<Radio color="primary" />} label="All" />
                            <FormControlLabel  className={classes.conLabel} value="year" control={<Radio color="primary" />} label="Yearly" />
                              <FormControlLabel className={classes.conLabel} value="week" control={<Radio color="primary" />} label="Weekly" />
                              <FormControlLabel className={classes.conLabel} value="month" control={<Radio color="primary" />} label="Monthly" />
                              <FormControlLabel className={classes.conLabel} value="day" control={<Radio color="primary" />} label="Daily" />
                              <FormControlLabel className={classes.conLabel} value="hour" control={<Radio color="primary" />} label="Hourly" />
                            </RadioGroup>
                          </FormControl>
                        </div>
                        
                      </div>
</div>
                       </div>
                       <div className="col-md-9">
                           {
                            !this.state.loading ?
                            <JobCards jobs={experienceFilterData}/>
                            : <CardSkelenton/>
                           }
                       </div>
                      
                    </div>
                </div> 
                           
            </NavBar>
           <div className="footer">
              <hr/>

               <Footer/>
           </div>
            </div>
               
            </>
        )
    }
}

jobs.propTypes = {
    user: PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user:state.user    
})


export default connect(mapStateToProps)(withStyles(style)(jobs))
