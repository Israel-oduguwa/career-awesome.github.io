import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export class Work extends React.Component {
	render() {
		const {state, classes, addWork, removeWork, handleWorkExperience, nextStep, PrevStep, handlechanege } = this.props;
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
											<Accordion>
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
												                , Unknown - Unknown
												              </Typography>
												                }
												             </div>
												              :
												              <div  alignItems="center">
												                 <Typography  variant="body1">
												                    (Not Specified), Unknown
												                 </Typography>
												                
												             </div>
														}
													</div>	
												</AccordionSummary>
												<AccordionDetails>
													<div className="row">
														<div className="col-md-16">
															<TextField onChange={e => handleWorkExperience(index, e)} value={inputField.jobTitle} label="Job title" name="jobTitle" fullWidth variant="outlined"/> 
														</div>
														<div className="col-md-6">
															<TextField  onChange={e => handleWorkExperience(index, e)} value={inputField.company} label="Employer" 
												                     InputProps={{
												                      endAdornment: <InputAdornment position="end">{
												                       inputField.company.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
												                      } </InputAdornment>,
												                    }}  
												                   name="company" fullWidth
												                    variant="outlined"/> 
														</div>	
													</div>
												</AccordionDetails>
											</Accordion>
										</React.Fragment>
									))
							}
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