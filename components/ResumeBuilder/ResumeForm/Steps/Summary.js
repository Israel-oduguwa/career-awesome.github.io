import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import IconButton from '@material-ui/core/IconButton';
import RenderQuill from "../../../WYSIWYG/RenderQuill";
import Typography from '@material-ui/core/Typography';
export class Summary extends React.Component {
	render() {
		const {nextStep, PrevStep, state, handleProfile, classes }= this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 mb-4">
							<div>
								<Typography variant="h5">How can Your Employer Contact You </Typography>
								<Typography variant="p">Give your employer your contact Information to contact you </Typography>
							</div>
					</div>
					<div className="col-md-8">
						 {
						    typeof window !== 'undefined'?
			                 <RenderQuill body={state.profile} handleChange={handleProfile} />:
			                    <>
							   </>
						 }
					</div>
					<div className="col-md-4">
						lorem This is a man heei sht eshut of the man the killl
						<Button onClick={PrevStep} variant="text"  color="secondary">
				        	<KeyboardArrowLeft /> Previous
				        </Button> 
				        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
				          Next Section Extras
				        </Button> 
					</div>
				</div>
			</div>
		)
	}
}

export default Summary