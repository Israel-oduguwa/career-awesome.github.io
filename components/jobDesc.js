import React from 'react';
import Typography from '@material-ui/core/Typography';
import Interweave from "interweave";
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const styled = (theme) =>({
	 tags:{
    display: 'flex',
    // justifyContent: 'center',
    marginTop:"5vh",
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
  jobCard:{
    borderRadius: "10px",
    boxShadow: "rgb(149 157 165 / 20%) 0px 8px 24px",
    marginBottom:"1.5rem",
  },
  details:{
    textTransform:"inherit",
  }
})
export class JobDesc extends React.Component {
	render() {
		const { job, classes } = this.props;
		return (
			<div className="jobRequirement">
			<div class="card">
			  <img class="card-img-top rounded" height="270px" src={job.HeaderImage} alt="Card image cap"/>
			  	<div className="card-img-overlay">
			  		
			  	</div>
			  <div class="mt-2 mb-4">
			  	<div className="row">
			  		<div className="col-4">
			  			<img class="img"  src={job.companyLogo} alt="..."/>
			  		</div>
			  		<div className="col-8">
			  			<Typography variant="subtitle2">{job.jobType}</Typography>
			  			<Typography variant="subtitle1" className={classes.jobTitle}>{job.jobTitle}</Typography>
			  			<Typography className="mt-2 mb-1" variant="subtitle2"><span className={classes.comapnySubtitle}>{job.companyName}</span><LocationOnIcon/> {job.jobCityAndState} {job.jobCountry} </Typography>
			    		{
			    			job.salaryType === "Range" ? 
			    			<Typography variant='subtitle2'>  ${job.startingSalary}-${job.maximumSalary}/{job.SalaryDuration} </Typography>:
			    			<Typography variant="subtitle2">  ${job.salaryType}-${job.mainSalary}/{job.SalaryDuration} </Typography>
			    		}
			  		</div>	
			  	</div>
			  </div>
			  <div className="article-body">
                   <div className="m-a">
						<Interweave content={job.jobDescription}/>
				   </div>
				</div>
				<div className="mb-4 mt-2 ">
				<Typography className="mb-2" variant="h6"> skills</Typography>
			 <div className={classes.tags} >
			 	{
			 		job.requiredSkills.map((skil, index) =>(
			 			<Chip label={skil}  color="primary" key={index}/>
			 			))
			 	}
			 </div>	
			 </div>
			</div>
				
			</div>
		)
	}
}

export default (withStyles(styled)(JobDesc))