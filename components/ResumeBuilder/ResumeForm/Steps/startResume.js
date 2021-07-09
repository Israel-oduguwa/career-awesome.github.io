import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
export class startResume extends React.Component {
	render() {
		const { nextStep } = this.props
		return (
			<>
				<div className="container-fluid">
					<div className="row">
							<div className="col-md-12 welcome mb-4">
							<Typography variant="h3">welcome to resume builder bla bla bla</Typography>
						</div>
						<div className="col-md-8">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt, enim aut cumque modi voluptatibus quibusdam amet sint officiis a, architecto fugit, velit beatae deleniti? Recusandae maxime maiores sint necessitatibus itaque temporibus id ipsum deserunt magni aperiam. Asperiores, enim, dolorum.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt, enim aut cumque modi voluptatibus quibusdam amet sint officiis a, architecto fugit, velit beatae deleniti? Recusandae maxime maiores sint necessitatibus itaque temporibus id ipsum deserunt magni aperiam. Asperiores, enim, dolorum.</p>					
						</div>
						<div className="col-md-4">
							<ul>
								<li>Start</li>
								<li>Start</li>
								<li>Start</li>
								<li>Start</li>
							</ul>
							<Button variant="contained" onClick={nextStep} color="primary">Start Building Resume Now</Button>
						</div>
						<div className="col-md-12">
							<p>Charge 0.01$ for each resume dont have to signup we keep your data save and we dont store your info, Payments are handled by secrue Paystack the mots secure </p>
							<p>Breif them the steop the need to take after payment, download is the next, then you pay the it get downloaded automatically then you can delete you data or download another one our tips hlp you to create it under 10 mins</p>
						</div>
					</div>	
				</div>
			</>
		)
	}
}

export default startResume