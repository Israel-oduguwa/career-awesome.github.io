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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from "@material-ui/core/Button";
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';

// const AllJobs = (props) =>{
//     const [jobs, setJobs] = React.useState("")
//     const { data, error} = useSWR(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllJobs`)
//     if (error) return(
//         <div> Server Error Refresh </div>
//     )
//     if(!data) return <div><NavBar><h1>Loading ...</h1></NavBar></div>
//     React.useEffect(() => {
//         setJobs(data)
// });
   
//     if(props.display){
//         return(
//             <>
//             {
//                 console.log(data)
//             }
//                 <div className="mt-4">
//                     {
//                         data.map((job) =>{
//                             dayjs.extend(relativeTime)
//                             const image =`https://picsum.photos/600?random=${Math.round(Math.random() * 1000)}`
//                             return(
//                                 <>
//                                     <Card className="mb-4">
//                                         <CardContent>
//                                         <div className="row">
//                                             <div className="col-md-8">
//                                                 <div className="row">
//                                                  <div className="col-lg-2 col-4" style={{paddingRight:"0px"}}>
//                                             <img src={image} alt="..."/>
//                                             </div>
//                                            <div className="col-md-10 col-8">
//                                            <Typography variant="h6">{job.companyName} <span className="fullTime">Full Time</span> </Typography>
//                                            <Typography className="mt-1" variant="subtitle2"><LocationOnIcon className="jobLocationIcon"/> {job.jobCityAndState}</Typography>
//                                            <Typography className="mt-1" variant="body2">Salary: <span className="salarySpan">{job.startingSalary} - {job.maximumSalary}</span></Typography>
                                           
//                                         </div>
//                                         <div className="col-md-12 mt-3">
//                                         {
//                                             job.requiredSkills ?
//                                             <>
                                           
//                                             {
//                                                 job.requiredSkills.map((skill,index) =>(
//                                                     <Chip key={index} label={skill}/>
//                                                     ))
//                                             }
//                                             </>:<></>
//                                         } 
                                    
                                         
//                                         </div>
//                                                 </div>

//                                             </div>
                                            
//                                             <div className="col-md-4">

//                                             <Typography variant="subtitle2">{dayjs(job.createdDate).fromNow()}</Typography>
//                                                 <Typography variant="h5">{job.jobTitle}</Typography>
//                                                 <div className="mt-4">
//                                                 <Button color="primary" variant="contained">View Details</Button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                       </CardContent>

//                                     </Card>
//                                 </>
//                                 )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

// const GitJobs = (props) =>{
//     const { data, error} = useSWR(``)
//     if (error) return(
//         <div> Server Error Refresh </div>
//     )
//     if(!data) return <div>Loading</div>
//     if(props.display){
//         return(
//             <div className="LandingPageContainer">
//                 <NavBar>
//                     <Head>
//                         <title>
//                             All Jobs
//                         </title>
//                     </Head>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             The Job api will work
//                         </div>
//                     </div>
//                 </div>
//                 </NavBar>
//             </div>
//         )
//     }
// }

export class jobs extends Component {
   state={
    jobs:"",
    githubJobs:"",
    loading:true,
    loadingGit:true
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
    render() {
        const { classes } = this.props;
        const { jobs }= this.state
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
                <Paper elevation={2} >
                    Qury Panel
                </Paper>
            </div>
             <div className="container-fluid">
                    <div className="row">
                       <div className="col-3 sticky-top ">
                    
                        <div class="card bg-light mb-3">
  
  <div class="card-body">
                        <div className="category-wrapper mt-4 mb-2">
<FormControl component="fieldset">
      <Typography variant="h6">Salary</Typography>
      <RadioGroup aria-label="gender" name="gender1">
        <FormControlLabel control={<Radio />} label="Female" />
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Other" />
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Other" />
        <FormControlLabel control={<Radio />} label="Male" />
        <FormControlLabel control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
                        </div>
  </div>
</div>
                       </div>
                       <div className="col-md-9">
                           {
                            !this.state.loading ?
                            <JobCards jobs={jobs}/>
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
