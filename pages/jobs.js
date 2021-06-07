import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Image from "next/image"
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  //Icons
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon, 
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon, 
  WhatsappIcon,
  
} from "react-share";
import CardContent from '@material-ui/core/CardContent';
import dayjs from "dayjs";
import JobCards from "../components/jobPage/jobCards";
import PayFilter from "../components/jobPage/PayFilter";
import FormControl from '@material-ui/core/FormControl';
import relativeTime from "dayjs/plugin/relativeTime";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
// import { getAllBlog } from  "../Redux/Actions/dataAction";
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
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

const style = (theme) =>({
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"rgb(248 249 250)",
    '&:hover': {
      backgroundColor:"rgb(248 249 250)",
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
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%!important',
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
    jobTypeFilter:[{
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
    // salaryFilter:[{
    //   id:1,
    //   name:"year"
    // },
    // {
    //   id:2,
    //   name:"month"
    // },
    // {
    //   id:3,
    //   name:"hour"
    // },
    // {
    //   id:4,
    //   name:"day"
    // },{
    //   id:5,
    //   name:week
    // }]
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
            
             <div className="container-fluid">
             <Paper className="mt-4 mb-4" elevation={0}>
              <div className="row">
              
                <div className="col-md-5">
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
                <div className="col-md-2">
                  <PayFilter state={this.state} handleChange={this.handleChange} />
                </div>  
               
              </div>
              <div className="queryPanel">
                
            </div>
             </Paper>
             
                    <div className="row">
                     
                       <div className="col-2">
                    
                        <div class="card mb-3 sticky-top">
  
  
  <div class="card-body">
                        <div className="category-wrapper mt-4 mb-2">
                           <FormControl component="fieldset">
        <FormLabel component="legend">Job Type</FormLabel>
        <FormGroup>
        {
          this.state.jobTypeFilter.map((fill) =>(
            <FormControlLabel key={fill.id}
            onChange={() => this.jobTypeFilterChange(fill.name)}
            control={<Checkbox checked={activeJob.includes(fill.name)} />}
            label={fill.name}
          />
            ))
        }
          
        </FormGroup>
       
      </FormControl>
                        </div>
          <div className="category-wrapper mt-4 mb-2">
                          <FormControl component="fieldset">
      <FormLabel component="legend">Salary</FormLabel>
      <RadioGroup aria-label="salary" name="salaryFilter" value={this.state.salaryFilter} onChange={this.handleChange}>
      <FormControlLabel value="All" control={<Radio />} label="All" />
      <FormControlLabel value="year" control={<Radio />} label="Yearly" />
        <FormControlLabel value="week" control={<Radio />} label="Weekly" />
        <FormControlLabel value="month" control={<Radio />} label="Monthly" />
        <FormControlLabel value="day" control={<Radio />} label="Daily" />
        <FormControlLabel value="hour" control={<Radio />} label="Hourly" />
      </RadioGroup>
    </FormControl>
                        </div>
                        
  </div>
</div>
                       </div>
                       <div className="col-md-10">
                           {
                            !this.state.loading ?
                            <JobCards jobs={experienceFilterData}/>
                            : <h1>Loading</h1>
                           }
                       </div>
                       <div className="col-md-4">
                       ADs and Extreas</div>
                    </div>
                </div> 
                <footer>
                <div className="footer">
                FOOTER</div></footer>              
            </NavBar>
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
