import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Image from "next/image"
import Link from 'next/link';
import Pagination from "@material-ui/lab/Pagination";
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
// import { Fade } from "react-awesome-reveal";
import Zoom from 'react-reveal/Zoom';
import useSWR from 'swr';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';

const styled = (theme) =>({
   chips: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  companyName:{ 
  },
  comapnySubtitle:{
    color:"#197ff3",
     fontWeight:"500",
  },
  jobTitle:{
    fontWeight:"600",
  },
  
  details:{
    textTransform:"inherit",
  }
})
export class JobCards extends React.Component {
    state={
        page:1,

    }
	handleChange = (event, value) => {
    this.setState({
        page:value
    }) 
}
	render() {
		const { jobs, classes } = this.props;
        const itemsPerPage = 20;
		return (
			 <div className="row mt-4">
          {
            <div className="col-md-12 mb-4 JobCH">
              <Typography color="primary" variant="subtitle2">Sorted by Date</Typography>
               <Typography color="primary" variant="subtitle2">
              <Link href="/resumeBuilder">
                <a>
                 Create your professional resume 
                </a>
              </Link>
              <span style={{color:"black"}}> - To apply for Job </span>
              </Typography>
            </div>

          }
          <hr/>
                    { jobs.slice((this.state.page-1)*itemsPerPage, this.state.page*itemsPerPage).map((job, index) =>{
                            dayjs.extend(relativeTime)
                            const image =`https://picsum.photos/600?random=${Math.round(Math.random() * 1000)}`
                            return(
                                               
                                <div key={index} className="col-md-4">
                                 <Link href={`/jobs/${job.jobId}/${job.jobTitle.replace(/\s+/g, '-').replace(/\//g,'-')}`}>
                                    <a>
                                    <Card className="jobCard">
                                    <CardActionArea>
                                        <CardContent>
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src={job.companyLogo} className="rounded" alt="..."/>
                                                </div>
                                                <div className="col-9">
                                                    <div className="company">
                                                        <Typography className={classes.companyName} variant="subtitle2">{job.companyName}</Typography>
                                                        <Typography className={classes.comapnySubtitle} variant="caption">{job.jobCityAndState}</Typography>
                                                         
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="title mb-2 mt-1">
                                                        <Typography className={classes.jobTitle} variant="subtitle1">{job.jobTitle}</Typography>
                                                    </div>
                                                    <div className="jobsnippet mb-2">
                                                    <Typography variant="body2">{job.jobSnippet}</Typography>
                                                       
                                                    </div>
                                                     {  
                                                        job.salaryType === "Range" ? 
                                                            <>
                                                                <Typography className={classes.Salary} variant="subtitle2">${job.startingSalary}-${job.maximumSalary}/{job.SalaryDuration}</Typography>
                                                            </>
                                                            : <> <Typography variant="subtitle2">${job.mainSalary}/{job.SalaryDuration}</Typography> </> 
                                                        }
                                                    
                                                    
                                                </div>  
                                            </div>
                                        </CardContent>  
                                      </CardActionArea>
                                    </Card>
                                     </a>
                                     </Link>
                                    </div>
                                
                                )
                        })
                    }
                    <div className="col-md-12 mb-4 mt-4 text-center">
                        <Box component="span">
        <Pagination
          count={ Math.ceil(jobs.length / itemsPerPage)}
          page={this.state.page}
          onChange={this.handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          variant="outlined" shape="rounded"
          showFirstButton
          showLastButton
        //   classes={{ ul: classes.paginator }}
        />
      </Box>
                        </div>
                </div>
		)
	}
}

export default (withStyles(styled)(JobCards))



 // <CardContent>
 //                                        <div className="row">
 //                                            <div className="col-md-8">
 //                                                <div className="row">
 //                                                 <div className="col-lg-2 col-4" style={{paddingRight:"0px"}}>
 //                                            <img src={image} alt="..."/>
 //                                            </div>
 //                                           <div className="col-md-10 col-8">
 //                                           <Typography variant="h6">{job.companyName} <span className="fullTime">Full Time</span> </Typography>
 //                                           <Typography className="mt-1" variant="subtitle2"><LocationOnIcon className="jobLocationIcon"/> {job.jobCityAndState}</Typography>
 //                                           <Typography className="mt-1" variant="body2">Salary: <span className="salarySpan">{job.startingSalary} - {job.maximumSalary}</span></Typography>
                                           
 //                                        </div>
 //                                        <div className="col-md-12 mt-3">
 //                                        {
 //                                            job.requiredSkills ?
 //                                            <>
                                           
 //                                            {
 //                                                job.requiredSkills.map((skill,index) =>(
 //                                                    <Chip key={index} label={skill}/>
 //                                                    ))
 //                                            }
 //                                            </>:<></>
 //                                        } 
                                    
                                         
 //                                        </div>
 //                                                </div>

 //                                            </div>
                                            
 //                                            <div className="col-md-4">

 //                                            <Typography variant="subtitle2">{dayjs(job.createdDate).fromNow()}</Typography>
 //                                                <Typography variant="h5">{job.jobTitle}</Typography>
 //                                                <div className="mt-4">
 //                                                <Button color="primary" variant="contained">View Details</Button>
 //                                                </div>
 //                                            </div>
 //                                        </div>
 //                                      </CardContent>