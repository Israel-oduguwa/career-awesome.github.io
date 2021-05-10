import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
export class Footer extends React.Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0">
							<Typography variant="h6">
								CA-LOGO
							</Typography>
							<div className="company-info mt-3">
								<Typography variant="subtitle1">
								Wix.com is a leading cloud-based development platform with millions of users worldwide. We make it easy for everyone to create a beautiful, professional web presence.
								Promote your business.
								</Typography>
							</div>	
						</div>
						<div className="col-6 col-md-4 col-lg mb-5 mb-lg-0">
							<Typography variant="h6">
								Company
							</Typography>
							<ul className="nav nav-sm nav-x-0 nav-white flex-column">
								<li class="nav-item">
									<Link href="/about">
									<a class="nav-Linked">
										About us
									</a>
									</Link>
								</li>
								<li class="nav-item">
									<Link href="/contacts">
									<a class="nav-Linked">
										Contacts
									</a>
									</Link>
								</li>
								<li class="nav-item">
									<Link href="/updates">
									<a class="nav-Linked">
										Updates and Releases
									</a>
									</Link>
								</li>
								<li class="nav-item">
									<Link href="/faqs">
									<a class="nav-Linked">
										FAQs
									</a>
									</Link>
								</li>
								<li class="nav-item">
									<Link href="/blog">
									<a class="nav-Linked">
										Blog
									</a>
									</Link>
								</li>
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
							
						</div>
						
							<div className="col-6">
								<img src="https://evernote.com/img/logo/evernote/primary.svg" alt="..s"/>
							</div>
							<div className="col-6 text-right">
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