import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlatIcon';
import SearchJob from "../SearchJob";
import Icon from '@material-ui/core/Icon';
const styles = (theme) =>({

})

export class JobFeautures extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="JobFeauturesHeading">
					<div className="row">
						<div className="col-md-8">
							<Typography variant="h4" className="FH">
			                 Simple and Faster Way to find Jobs.
			               	</Typography>
			               	<Typography variant="body1" className="STH">
			                 Building a business is hard. Getting paid shouldn't be.
			               	</Typography>
						</div>
					</div>
				</div>
				<div className="JobFeauturesContent">
					<div className="row" style={{alignItems:"center"}}>
						<div className="col-md-5 mt-4">
                      		<Typography className="topPhrase mb-3 mt-4" variant="h4">Browse Jobs Faster</Typography>
                      		<Typography variant="body1">allIt’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker. div</Typography>
                      			<Button
						        color="primary"
						        endIcon={<Icon>TrendingFlatIcon</Icon>}
					     	 	>
					     	 	Check Jobs </Button>
                   		</div>  
                   		<div className="col-md-7 mt-4 mb-4">
                    		<img src="https://evernote.com/c/assets/homepage/feature_document_scanning__en.png?82b87618cf404580" alt="..."/>
                    	</div>
                    	<div className="col-md-5 mt-4 d-none d-lg-block mb-4">
	                    	<img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
	                    </div>
	                     <div className="col-md-5 offset-md-1 mt-2">
	                    	<Typography className="topPhrase mb-3 mt-2" variant="h4">Lightining Fast Search with Filters for Easy Job Search</Typography>
	                    	<Typography variant="body1">allIt’s fast, it’s easy, and it can make a professional, full-page resume for anyone. Regardless of how much work experience you have, how long you went to school, or what skills you possess, our software was designed by certified resume writers to generate a complete resume for every kind of job seeker. div</Typography>
	                    	<SearchJob/>
	                    	<Button
						        
						        color="primary"
						        
						        endIcon={<Icon>TrendingFlatIcon</Icon>}
					     	 	>
					     	 	Enter Jobs and Search</Button>
	                    </div>  
	                    <div className="col-md-5 d-lg-none mt-4 mb-4">
	                    	<img src="https://clickup.com/landing/images/v2/switch-to-the-best-project-management.png" alt="..."/>
	                    </div>
						</div>
				</div>
			</div>
		)
	}
}

export default (withStyles(styles)(JobFeautures))