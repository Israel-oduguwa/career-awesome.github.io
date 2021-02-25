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
			  			<Typography variant="body1">{job.jobType}</Typography>
			  			<h5 class="card-title">{job.jobTitle}</h5>
			  			<Typography className="mt-2 mb-1" variant="body1">{job.companyName} <LocationOnIcon/> {job.jobCityAndState} {job.jobCountry} </Typography>
			    		{
			    			job.salaryType === "Range" ? 
			    			<Typography variant='body1'> {job.startingSalary} - {job.maximumSalary} {job.paymentCurrency} per {job.SalaryDuration} </Typography>:
			    			<Typography variant="body1"> <MonetizationOnIcon/> {job.salaryType} {job.mainSalary} {job.paymentCurrency} per {job.SalaryDuration} </Typography>
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