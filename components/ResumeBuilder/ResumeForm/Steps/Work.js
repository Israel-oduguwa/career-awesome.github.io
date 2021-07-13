import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
export class Work extends React.Component {
	render() {
		const {state, classes, workToggle, addWork, removeWork, handleWorkExperience, nextStep, PrevStep, handlechanege } = this.props;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 mb-4">
							<div>
								<Typography variant="h5">Tell Your Employer about your work experience</Typography>
								<Typography variant="p">Start with your Recent job company</Typography>
							</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							{
								state.workExperience.map((inputField, index)=>(

										<React.Fragment key={index}>
											<Accordion style={{width:"100%"}}>
												<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="work content" id="work-header">
													<div>
														{
															inputField.jobTitle !== "" ?
												             <div  alignItems="center">
												                 <Typography  variant="body1">
												                     {inputField.jobTitle} from {inputField.company}
												                 </Typography>
												                
												                {
												                  inputField.startDate !== "" ?
												                  <Typography  variant="body1">
												                  , {inputField.startDate} - {!inputField.current ? <>{inputField.endDate}</> : <> current </>}
												              </Typography>:
												              <Typography  variant="body1">
												                Date and add Icon
												              </Typography>
												                }
												             </div>
												              :
												              <div  alignItems="center">
												                 <Typography  variant="body1">
												                    Work Title or position |fineicon| Company
												                 </Typography>
												                
												             </div>
														}
														<IconButton onClick={() => removeWork(index)}>
					                                     	<DeleteIcon/>
					                                   </IconButton>
													</div>	
												</AccordionSummary>
												<AccordionDetails>
													<div className="row mt-3" style={{width:"100%"}} >
														<div className="col-md-6 mb-3">
															<TextField onChange={e => handleWorkExperience(index, e)} value={inputField.jobTitle} label="Job title" name="jobTitle" fullWidth variant="outlined"/> 
														</div>
														<div className="col-md-6 mb-3">
															<TextField  onChange={e => handleWorkExperience(index, e)} value={inputField.company} label="Employer" 
												                     InputProps={{
												                      endAdornment: <InputAdornment position="end">{
												                       inputField.company.trim() !== "" ? <CheckIcon /> :  <></>
												                      } </InputAdornment>,
												                    }}  name="company" fullWidth  variant="outlined"/> 
														</div>	
														<div className="col-md-6 mb-3">
															<TextField onChange={e => handleWorkExperience(index, e)}  value={inputField.location} label="Company City" name="location" fullWidth
											                   InputProps={{
											                    endAdornment: <InputAdornment position="end">{
											                     inputField.location.trim() !== "" ? <CheckIcon /> :  <></>
											                    } </InputAdornment>,
											                  }}  variant="outlined"/> 
														</div>
														<div className="col-3 mb-3">
															<TextField id="date1" label="Start Date" type="date" name="startDate" defaultValue={inputField.startDate}
														        onChange={e => handleWorkExperience(index, e)}  InputLabelProps={{
														          shrink: true,
														        }}/>
														</div>
														<div className="col-3 mb-3">
															{
                        									!inputField.current ?
                        									<TextField id="date2" label="End Date" type="date" name="endDate" defaultValue={inputField.endDate} onChange={e => handleWorkExperience(index, e)}
													        InputLabelProps={{
													          shrink: true,
													        }}/>:
													      <TextField disabled id="datecurrent" label="End Date" type="date"
													         InputLabelProps={{
													          shrink: true,
													        }}/>
												          }
														</div>	
														<div className="col-md-12 text-right">
															<FormControlLabel control={ <Checkbox name="current"  inputProps={{ 'aria-label': 'primary checkbox' }} 
														         checked={inputField.current}         
														         onChange={e => workToggle(index, e)} />}
														         labelPlacement="end"
														         label="I currently work here"
														       />
														</div>
													</div>
												</AccordionDetails>
											</Accordion>
										</React.Fragment>
									))
							}
							<div className="col-md-12">
								 <Button
						             className="AddExperienceButton"
						             startIcon={ <AddIcon/>}
						             variant="outlined"
						             onClick={addWork }>
						           Add Experience
						        </Button>
							</div>
						</div>
					</div>
					<div className="col-md-3">
					<button onClick={PrevStep}>Previous</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Work