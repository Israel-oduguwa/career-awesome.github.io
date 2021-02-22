import React from 'react'
import PropTypes from 'prop-types'
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
import relativeTime from "dayjs/plugin/relativeTime";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import useSWR from 'swr';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';

const styled = (theme) =>({
   root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
})
export class JobCards extends React.Component {
	
	render() {
		const { jobs, classes } = this.props
		return (
			 <div className="row mt-4">
                    { jobs.map((job, index) =>{
                            dayjs.extend(relativeTime)
                            const image =`https://picsum.photos/600?random=${Math.round(Math.random() * 1000)}`
                            return(
                                <>
                                <div className="col-md-4">
                                    <Card key={index} className="mb-4">
                                        <CardContent>
                                            <div className="row">
                                                <div className="col-3">
                                                    <img src={job.companyLogo} className="rounded" alt="..."/>
                                                </div>
                                                <div className="col-9">
                                                    <div className="company">
                                                        <Typography variant="h6">{job.companyName}</Typography>
                                                        <Typography variant="subtitle2">{job.jobCityAndState}</Typography>
                                                         
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="title mb-2">
                                                        <Typography variant="h6">{job.jobTitle}</Typography>
                                                    </div>
                                                    <div className="jobsnippet mb-2">
                                                    <Typography variant="body2">{job.jobsnippet}</Typography>
                                                        {  
                                                        job.salaryType === "Range" ? 
                                                            <>
                                                                <Typography variant="subtitle1"> {job.startingSalary} - {job.maximumSalary} per {job.SalaryDuration} </Typography>
                                                            </>
                                                            : <> <Typography variant="subtitle1">{job.mainSalary} </Typography> </> 
                                                        }
                                                    </div>
                                                    <div className="jobChips mb-3">
                                                        <div className={classes.roots}>
                                                            <Chip color="primary" variant="outlined" label="fullTime"/>
                                                            <Chip color="primary" variant="outlined" label="min Year"/>
                                                            <Chip color="primary" variant="outlined" label="Senior Level"/>
                                                        </div>
                                                    </div>
                                                    <Link href={`/jobs/${job.jobId}/${job.jobTitle.replace(/\s+/g, '-')}`}>
                                                    <a>
                                                     <Button color="primary" disableElevation variant="contained">View Details</Button>
                                                     </a>
                                                     </Link>
                                                </div>  
                                            </div>
                                        </CardContent>  
                                    </Card>
                                    </div>
                                </>
                                )
                        })
                    }
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