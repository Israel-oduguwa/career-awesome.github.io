import React from 'react';
import Typography from "@material-ui/core/Typography";

export class Footer extends React.Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Typography variant="h4">
								Career Awesome Logo
							</Typography>
						</div>
						<div className="col-md-4">
							<Typography variant="h6">
								Company
							</Typography>
							<ul>
								<li>About us</li>
								<li>Contact</li>
								<li>Terms of Use</li>
								<li>Privacy Policy</li>
								<li>Updates and Realeases</li>
							</ul>
						</div>
						<div className="col-md-4">
							<Typography variant="h6">
								Feautures
							</Typography>
							<ul>
								<li>Resume Builder</li>
								<li>Find jobs</li>
								<li>Blog</li>
							</ul>
						</div>
						<div className="col-md-4">
							<Typography variant="h6">
								Career Awesome
							</Typography>
							<Typography variant="subtitle1">
								Wix.com is a leading cloud-based development platform with millions of users worldwide. We make it easy for everyone to create a beautiful, professional web presence.
								Promote your business, showcase your art, set up an online shop or just test out new ideas. The Wix website builder has everything you need to create a fully personalized, high-quality free website.
								
							</Typography>
						</div>
						
							<div className="col-6">
								<img src="https://evernote.com/img/logo/evernote/primary.svg" alt="..s"/>
							</div>
							<div className="col-6">
								<li>
									<ul>
									F
									</ul>
									<ul>
									I
									</ul>
									<ul>
									T
									</ul>
								</li>
								<Typography variant="subtitle1">
								© 2006-2021 Wix.com, Inc
							</Typography>
							</div>
						
					</div>
				</div>

			</>
		)
	}
}

export default Footer 