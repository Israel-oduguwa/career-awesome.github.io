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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export class JobDescRight extends React.Component {
	render() {
		const { job } = this.props;
		return (
			<>
			<div className="sticky-top">
			<div class="card bg-light mb-3">
  				<div class="card-body">
  				{
  					job.deadLine ?
  					<p class="alert alert-warning" role="alert">{job.applicationDeadLine}</p>:
  					<></>
  				}
  				<a href={job.companyApplicationLink} class="btn btn-primary">Apply Now </a>
  				</div>
			</div>
			<Typography variant="h6">Job Information </Typography>
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
		                    primary="Email"
		                    secondary={job.email}
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
                    			<EmailIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Offered Salary"
		                    secondary={ job.salaryType === "Range" ? 
		                    				<>
		                    					 {job.startingSalary} - {job.maximumSalary}
		                    				</>
		                    : <> {job.mainSalary} </> }
		                  />
                		</ListItem>
<ListItem>
                  			<ListItemIcon>
                    			<EmailIcon/>
                  			</ListItemIcon>
                  			<ListItemText
		                    primary="Job Catgeory"
		                    secondary={job.email}
		                  />
                		</ListItem>

  					</List>

				</CardContent>
			</Card>
			<Typography variant="h6"> Social Links </Typography>
			<Card>
				<CardContent>
					<Typography variant="h6"> All the social links inthe world of sports </Typography>
				</CardContent>
			</Card>	
			</div>
			</>
		)
	}
}

export default JobDescRight