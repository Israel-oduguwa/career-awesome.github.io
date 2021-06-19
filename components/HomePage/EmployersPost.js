import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
export class EmployersPost extends React.Component {
	render() {
		return (
			<div className="LPMT">
				<div className="container">
					<div className="LPMT">
						<div className="row">
							<div className="col-md-12 text-center">
								<Typography variant="h4" className="FH LPTC">
				                    For Employers Looking to Post a Job
				                 </Typography>
				                 <Typography variant="h6" className="STH">
				                     Post and advertize your company Job Information on our platform
				                 </Typography>
				                 <div className="mt-4">
				                    <Button variant="contained" size ="large" style={{boxShadow: "rgb(178 186 230) 0px 10px 25px", borderRadius:"5px",boxShadow: "rgb(178 186 230) 0px 10px 25px"}} color="primary">
				                      Post a Job
				                    </Button>
				                 </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EmployersPost