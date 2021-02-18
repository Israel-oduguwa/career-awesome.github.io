import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Chip from '@material-ui/core/Chip'
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
export class JobDescRight extends React.Component {
	render() {
		const { job } = this.props;
		return (
			<>
			<div className="sticky-top">
			<div class="card bg-light mb-3 d-none d-lg-block">
  				<div class="card-body">
  				{
  					!job.deadLine ?
  					<p class="alert alert-warning" role="alert">{job.applicationDeadLine}</p>:
  					<></>
  				}
  				<a href={job.companyApplicationLink} class="btn btn-primary">Apply Now </a>
  				</div>
			</div>
			<Typography className="mb-3" variant="h6">Job Information </Typography>
			<Card>
				<CardContent>
					<List>

  						 <ListItem>
                  			<ListItemIcon>
                    			<BusinessIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary={job.companyName}
		                  />
                		</ListItem>

					<ListItem>
                  			<ListItemIcon>
                    			<EmailIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Offered Salary"
		                    secondary={ job.salaryType === "Range" ? 
		                    				<>
		                    					 {job.startingSalary} - {job.maximumSalary} per {job.SalaryDuration}
		                    				</>
		                    : <> {job.mainSalary} </> }
		                  />
                		</ListItem>

                	
                			<ListItem>
                  			<ListItemIcon>
                    			<MultilineChartIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Job Catgeory"
		                    secondary={
		                    	job.jobCategory.map((cat) =>(
		                    	<>
		                    	{cat.jobCategories}
		                    	</>
		                    	))
		                    }
		                    />
		                    </ListItem>

                		<ListItem>
                  			<ListItemIcon>
                    			<SettingsIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Experience"
		                    secondary={job.experience}
		                  />
                		</ListItem>

		                  		                  <ListItem>
                  			<ListItemIcon>
                    			<BubbleChartIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Qualification"
		                    secondary={job.educationStatus}
		                  />
                		</ListItem>

                		<ListItem>
                  			<ListItemIcon>
                    			<EmailIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Email"
		                    secondary={job.email}
		                  />
                		</ListItem>
  					</List>

				</CardContent>
			</Card>
			<Typography className="mb-3 mt-4" variant="h6"> Company Social Links </Typography>
			<Card>
				<CardContent>
					<div className="row">
					<div className="col-4">
					<a href={job.twitter}>
					<IconButton>
						<TwitterIcon/>
					</IconButton>
					</a>
					
					</div>
					<div className="col-4"><a href={job.linkedIn}>
					<IconButton>
						<LinkedInIcon/>
					</IconButton>
					</a></div>
					<div className="col-4"><a href={job.facebook}>
					<IconButton>
						<FacebookIcon/>
					</IconButton>
					</a></div>
					</div>
				</CardContent>
			</Card>	
			<div class="card bg-light mb-3 d-lg-none">
  				<div class="card-body">
  				{
  					!job.deadLine ?
  					<p class="alert alert-warning" role="alert">{job.applicationDeadLine}</p>:
  					<></>
  				}
  				<a href={job.companyApplicationLink} class="btn btn-primary">Apply Now </a>
  				</div>
			</div>
			</div>
			</>
		)
	}
}

export default JobDescRight