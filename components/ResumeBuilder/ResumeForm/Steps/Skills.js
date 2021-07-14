import React from 'react';
import head from "next/head"
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckIcon from '@material-ui/icons/Check';

export class Skills extends React.Component {
	render() {
		const {classes, PrevStep, nextStep, handleSkillInput, handleSkillsRating, handleChange, handleAllToggleChange, addSkills, deleteSkills, addRating, state} = this.props
		return (
			<div className="container mb-4 mt-4">
				<div className="row">
					<div className ="col-md-12 mb-4">
							<div>
								<Typography variant="h5">Add You Skills</Typography>
								<Typography variant="p">add at least four Skills</Typography>
							</div>
					</div>
					<div className="col-md-6">
						<div className="Skills">
							{
								 state.skills.map((skills, index) =>(
				                  <React.Fragment key={index}>
				              <div>
				              <Card>
				              <div className="row">
				              <div className="col-md-6">
				                   <TextField 
				                    onChange={e => handleSkillInput(index, e)}   
				                    value={skills.body}
				                     label="skill" 
				                     InputProps={{
				                      endAdornment: <InputAdornment position="end">{
				                       skills.body.trim() !== "" ? <CheckIcon /> :  <></>
				                      } </InputAdornment>,
				                    }}  
				                   name="body" fullWidth
				                    variant="outlined"/> 
				                   </div>
				                   <div className="col-md-4 col-sm-8 col-8">
				                   {state.addRating ?
				                   <TextField 
				                   onChange={e => handleSkillInput(index, e)}   
				                   value={skills.rating}
				                    label="%" 
				                  name="rating" fullWidth 
				                   variant="outlined"/> :
				                   <TextField 
				                   disabled
				                   onChange={e => handleSkillInput(index, e)}   
				                   value={skills.rating}
				                    label="%" 
				                  name="rating" fullWidth 
				                   variant="outlined"/> }
				                   </div>
				                   <div className="col-md-2 col-sm-2 col-sm-2 col-2">
				                   <IconButton onClick={() => deleteSkills(index)} >
				                                   <DeleteIcon/>
				                               </IconButton>
				                  
				                   
				                 </div>
				              </div>
				               </Card>
				              </div>
				                   
				               
				               
				                  </React.Fragment>
				               ))
							}
						</div>
						<div className="mt-4 mb-4">
							<Button  startIcon={ <AddIcon/>} variant="outlined" onClick={addSkills}>
					           Add skills
					        </Button>
					        <FormControl>
					        <FormControlLabel
					          value="start"
					          control={<Switch color="primary" />}
					          label="Show experience level"
					         checked={state.addRating}
					         name="addRating"
					         onChange={handleAllToggleChange}
					          labelPlacement="end"
					        />
					        </FormControl>
						</div>
					</div>
					<div className="col-md-6">
						<Button onClick={PrevStep} variant="text" color="secondary">
				        <KeyboardArrowLeft /> Previous
				        </Button> 
				        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
				        	Next Professional summary
				        </Button> 
					</div>
				</div>
			</div>
		)
	}
}

export default Skills

