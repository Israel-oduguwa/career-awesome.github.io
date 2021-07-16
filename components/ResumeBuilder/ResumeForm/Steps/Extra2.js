import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RenderQuill from "../../../WYSIWYG/RenderQuill";
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class Extra2 extends React.Component {
	render() {
		const { classes, state, handleAllToggleChange, handleChange, handleActivites, handleInterest, handleAffliations, handleCustom, PrevStep, nextStep } = this.props
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 mb-4">
							<div>
								<Typography variant="h5"> 2 Other Things you need to add </Typography>
								<Typography variant="p">You need to add the Group </Typography>
							</div>
					</div>
					<div className="col-md-12">
						<div className="Affliations">
							<Typography variant="h3">Affliations</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Affliations"
							         checked={state.affliationToggle}
							         name="affliationToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        {
							    typeof window !== 'undefined'?
				                 <RenderQuill body={state.affliation} handleChange={handleAffliations} />:
			                    <>
							   </>
								 }
						</div>
					</div>
					<div className="col-md-12">
						<div className="interest">
							<Typography variant="h3">Interest</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Interest"
							         checked={state.interestToggle}
							         name="interestToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        {
							    typeof window !== 'undefined'?
				                 <RenderQuill body={state.interest} handleChange={handleInterest} />:
			                    <>
							   </>
								 }
						</div>	
					</div>
					<div className="col-md-12">
						<div className="activites">
							<Typography variant="h3">Activites</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Activites"
							         checked={state.activitesToggle}
							         name="activitesToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        {
							    typeof window !== 'undefined'?
				                 <RenderQuill body={state.activites} handleChange={handleActivites} />:
			                    <>
							   </>
								 }
						</div>
					</div>
					<div className="col-md-12">
						<div className="languages">
							<Typography variant="h3">Languages</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Languages"
							         checked={state.languagesToggle}
							         name="languagesToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        <TextField onChange={handleChange} name="languages" fullWidth label="Languages" defaultValue={state.languages} variant="outlined"/>
						</div>
					</div>
					<div className="col-md-12">
						<div className="custom">
							<Typography variant="h3">Add Your own Section</Typography>
								 <FormControl>
						        	<FormControlLabel
							          value="start"
							          control={<Switch color="primary" />}
							          label="Your Section"
							         checked={state.customToggle}
							         name="customToggle"
							         onChange={handleAllToggleChange}
							         labelPlacement="end"
							        />
					        </FormControl>
					        <TextField onChange={handleChange} name="customTitle" fullWidth label="Name of Section" defaultValue={state.customTitle} variant="outlined"/>
							{
							    typeof window !== 'undefined'?
				                 <RenderQuill body={state.customBody} handleChange={handleCustom} />:
			                    <>
							   </>
								 }
						</div>
					</div>
<Button onClick={PrevStep} variant="text"  color="secondary">
				        	Previous
				        </Button> 
				        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
				          Next Section Extras
				        </Button> 					
				</div>

			</div>
		)
	}
}

export default Extra2