import React from 'react';
import Typography from '@material-ui/core/Typography';
import Interweave from "interweave";
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
export class JobDesc extends React.Component {
	render() {
		const { job } = this.props;
		return (
			<div className="jobRequirement">
			<div class="card">
			  <img class="card-img-top rounded-top" height="270px" src={job.HeaderImage} alt="Card image cap"/>
			  	<div className="card-img-overlay">
			  		<a href={job.companyApplicationLink} class="btn btn-primary">Apply Now => </a>
			  	</div>
			  <div class="card-body">
			  	<div className="row">
			  		<div className="col-md-4">
			  			<img class="img"  src={job.companyLogo} alt="..."/>
			  		</div>
			  		<div className="col-md-8">
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
			 <div className="skillz">
			 	{
			 		job.requiredSkills.map((skil, index) =>(
			 			<Chip label={skil}  color="primary" key={index}/>
			 			))
			 	}
			 </div>	
			</div>
				
			</div>
		)
	}
}

export default JobDesc