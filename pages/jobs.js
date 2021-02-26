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
import CardContent from '@material-ui/core/CardContent';
import dayjs from "dayjs";
import JobCards from "../components/jobPage/jobCards";
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


export class jobs extends Component {
   state={
    jobs:"",
    githubJobs:"",
    loading:true,
    loadingGit:true,
    permanent:false,
    fulltime:false,
    hi:""
   
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
    [e.target.name]:e.target.value.toLowerCase()
  })
}
   //filter the cards 

handleChanges = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

    render() {
        const { classes } = this.props;
        const { jobs }= this.state
        const checkbox =[
        {
          "id":1,
          "name":"FullTime"
        },
       {
         "id":2,
        "name":"permanent"
       }];

        const filteredJobs = Object.values(this.state.jobs).filter((job) => 
        
          job.jobTitle.toLowerCase().includes(this.state.hi)) 
          
        return (
            <>  
            <Head>
                <title>
                 All Jobs
                </title>
             </Head>

            <div className="LandingPageContainer">

            <NavBar>
            <div className="queryPanel">
                <form class="form-inline mb-4 mt-4">
                <input onChange={this.handleChange} class="form-control mr-sm-2" name="keyword" value={this.state.keyword} placeholder="Job title" aria-label="Search"/>
                              
                              <input onChange={this.handleChange} class="form-control mr-sm-2" name="hi" value={this.state.hi} placeholder="Job title" aria-label="Search"/>
                        </form>
            </div>
             <div className="container-fluid">
                    <div className="row">
                       <div className="col-3 sticky-top ">
                    
                        <div class="card bg-light mb-3">
  
  <div class="card-body">
                        <div className="category-wrapper mt-4 mb-2">
                           <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={this.state.permanent} onChange={this.handleChanges} name="permanent" />}
            label="permanent"
          />
          <FormControlLabel
            control={<Checkbox checked={this.state.fulltime} onChange={this.handleChanges} name="fulltime" />}
            label="FullTime"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
                        </div>
  </div>
</div>
                       </div>
                       <div className="col-md-9">
                           {
                            !this.state.loading ?
                            <JobCards jobs={filteredJobs}/>
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


export default connect(mapStateToProps)(jobs)
