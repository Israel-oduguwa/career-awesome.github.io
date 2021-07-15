import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RenderQuill from "../../../WYSIWYG/RenderQuill";
export class Extra extends React.Component {
	render() {
		const {state, handleAllToggleChange, addReference, nextStep, PrevStep,handleCertificate,deleteCertificate,deleteRef,handleProject, handleAccomp } = this.state;
		return (
			<>
				<div className="conatiner">
					<div className="row">
						<div className="col-md-12 mb-4">
							<div>
								<Typography variant="h5">Other Things you need to add </Typography>
								<Typography variant="p">You need to add the Group </Typography>
							</div>
						</div>
						<div className="col-md-12">
							<div className="referenceHead">
								<Typography variant="h3">Reference</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Reference"
							         checked={state.referenceToggle}
							         name="referenceToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
							</div>
						</div>
						<div className="col-md-12">
							<div className="awards">
								<Typography className="mb-4" variant="h5">Awards and Acheivement</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Accomplishment and awards"
							         checked={state.accomplished}
							         name="accomplished"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        	{
							    typeof window !== 'undefined'?
				                 <RenderQuill body={state.accomplishments} handleChange={handleProfile} />:
			                    <>
							   </>
								 }
							</div>	
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Extra