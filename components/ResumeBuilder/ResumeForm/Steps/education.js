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
import FormControl from '@material-ui/core/FormControl';
import RenderQuill from "../../../WYSIWYG/RenderQuill";
import Select from '@material-ui/core/Select';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog'; import DialogActions from '@material-ui/core/DialogActions';import DialogContent from '@material-ui/core/DialogContent';import DialogContentText from '@material-ui/core/DialogContentText';import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) =>({

})

export class education extends React.Component {
	render() {
		const {PrevStep, educationToggle, classes, deleteEducation, addEducation, handleChange, nextStep, state} = this.props
		return (
			<div className="container-fluid mb-4 mt-4">
				<div className="row">
					<div className ="col-md-12 mb-4">
							<div>
								<Typography variant="h5">Tell Your Employer Your Education</Typography>
								<Typography variant="p">Start with you Highest Education Levelor recent university</Typography>
							</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							{
								state.education.map((edu, index)=>(

										<React.Fragment key={index}>
											<Accordion className="mb-4" style={{width:"100%"}}>
												<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="work content" id="work-header">
													<div style={{display:"flex", flexGrow:1, justifyContent:"space-between"}}>
														{
															edu.Degree || edu.startDate !== "" ?
												             <div  alignItems="center">
												                 <Typography  variant="body1">
												                    {edu.Degree} at {edu.schoolName}, {edu.startDate}
												                 </Typography>
												             </div>
												              :
												              <div  alignItems="center">
												                 <Typography  variant="body1">
												                    Work Title or position |fineicon| Company  Date and add Icon
												                 </Typography>
												                
												             </div>
														}
														<IconButton style={{padding:0}} onClick={() => deleteEducation(index)}>
					                                     	<DeleteIcon/>
					                                   </IconButton>
													</div>	
												</AccordionSummary>
												<AccordionDetails>
													<div className="row mt-3" style={{width:"100%"}} >
														<div className="col-md-6 mb-3">
															<TextField onChange={e => handleEducation(index, e)} value={edu.schoolName} label="School Name" name="schoolName" fullWidth variant="outlined"/> 
														</div>
														<div className="col-md-6 mb-3">
															<TextField  onChange={e => handleEducation(index, e)} value={edu.schoolLocation} label="School location" 
												                     InputProps={{
												                      endAdornment: <InputAdornment position="end">{
												                       edu.schoolLocation.trim() !== "" ? <CheckIcon /> :  <></>
												                      } </InputAdornment>,
												                    }}  name="schoolLocation" fullWidth  variant="outlined"/> 
														</div>	
														<div className="col-md-6 mb-3">
															<FormControl variant="outlined" className={classes.formControl}>
													        <InputLabel id="selectDegree">Degree</InputLabel>
													        <Select
													        name="Degree"   
													          labelId="selectDegree"
													          id="select-Degree"         
													          onChange={e => handleEducation(index, e)}
													          value={edu.Degree}
													          label="Degree"
													        >
													          <MenuItem value="High School Diploma">High School Diploma</MenuItem>
													          <MenuItem value="GED">GED</MenuItem>
													          <MenuItem value="Associate of Arts">Associate of Arts</MenuItem>
													          <MenuItem value="Associate of Applied Science">Associate of Applied Science</MenuItem>
													          <MenuItem value="Associate of Science">Associate of Science</MenuItem>
													          <MenuItem value="Bachelor of Science">Bachelor of Science</MenuItem>
													          <MenuItem value="Bachelor of Art">Bachelor of Art</MenuItem>
													          <MenuItem value="Bachelor of Fine Arts">Bachelor of Fine Arts</MenuItem>
													          <MenuItem value="BBA">BBA</MenuItem>
													          <MenuItem value="Master of Science">Master of Science</MenuItem>
													          <MenuItem value="Master of Arts">Master of Arts</MenuItem>
													          <MenuItem value="MBA">MBA</MenuItem>
													          <MenuItem value="Ph.D">Ph.D</MenuItem>
													          <MenuItem value="J.D">J.D</MenuItem>
													          <MenuItem value="M.D">M.D</MenuItem>
													          <MenuItem value="DDS">DDS</MenuItem>
													          <MenuItem value="Enter a different degree">Enter a different degree</MenuItem>
													          <MenuItem value="No Degree">No Degree</MenuItem>
													        </Select>
													        </FormControl>
            											</div>
            											<div className="col-md-6">
            												{ 
											                  edu.Degree === "Enter a different degree" ?
											                  <TextField 
											                    onChange={e => handleEducation(index, e)}   
											                    value={edu.customDegree}
											                     label="Enter a degree" 
											                   name="customDegree" fullWidth
											                   InputProps={{
											                    endAdornment: <InputAdornment position="end">{
											                     edu.customDegree.trim() !== "" ? <CheckIcon  /> :  <></>
											                    } </InputAdornment>,
											                  }}  
											                    variant="outlined"/>:
											                    <></>
											                  }
            											</div>
            											 <div className="col-md-6">
											               {
											                  edu.Degree !== "High School Diploma" && edu.Degree !== "GED"?
											                  <TextField 
											                  onChange={e => handleEducation(index, e)}   
											                  value={edu.field}
											                   label="Field of Study" 
											                 name="field" fullWidth
											                 InputProps={{
											                  endAdornment: <InputAdornment position="end">{
											                   edu.field.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
											                  } </InputAdornment>,
											                }}  
											                  variant="outlined"/>:
											                  <TextField 
											                  disabled
											                   label="Field of Study" 
											                 name="field" fullWidth
											                  variant="outlined"/>
											               }
											             
											             </div>

														<div className="col-3 mb-3">
											                      <TextField
														        id="date1"
														        label="Start Date"
														        type="date"
														        name="startDate"
														         defaultValue={edu.startDate}
														        onChange={e => handleEducation(index, e)}
														        InputLabelProps={{
														          shrink: true,
														        }}
														      />
														</div>
														<div className="col-3 mb-3">
															{
                        									!edu.currents ?
                        									<TextField
										                       id="date2"
										                       label="Graduation Date"
										                       type="date"
										                       name="graduationDate"
										                        defaultValue={edu.graduationDate}
										                       onChange={e => handleEducation(index, e)}
										                       InputLabelProps={{
										                         shrink: true,
										                       }}
										                     />:
													      <TextField disabled id="datecurrent" label="End Date" type="date"
													         InputLabelProps={{
													          shrink: true,
													        }}/>
												          }
														</div>	
														<div className="col-md-12 text-right">
															<FormControlLabel control={ <Checkbox name="currents"  inputProps={{ 'aria-label': 'primary checkbox' }} 
														         checked={edu.currents}         
														         onChange={e => educationToggle(index, e)} />}
														         labelPlacement="end"
														         label="Still in school"
														       />
														</div>
														<div className="col-md-12">
																 {
										                    typeof window !== 'undefined'?
										                    <RenderQuill body={edu.highlights} handleChange={e => handleEducationHighlights(index, e)} />:
										                    <>
										                    </>
										                }
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
						             onClick={addEducation}>
						           Add Education
						        </Button>
							</div>
						</div>
					</div>
					<div className="col-md-3">
					
					{
						state.education.length < 1 ?
						<>
							<Button   variant="contained" color="primary" onClick={this.Alert}>Next Step Education</Button>
							<Dialog
									        open={this.state.open}
									        onClose={this.Back}
									        aria-labelledby="alert-dialog-title"
									        aria-describedby="alert-dialog-description"
									      >
									        <DialogTitle id="alert-dialog-title">{"You Did not fill some forms"}</DialogTitle>
									        <DialogContent>
									          <DialogContentText id="alert-dialog-description">
									            n. This means sending anonymous location data to
									            Google, even when no apps are runnin.Let Google help apps determine locatio
									            lorem20 thi si s msksjjsjks sjsjs this is s is Moment of the disraaf a dhhdb import compose, graphql from react-apollo.
									          </DialogContentText>
									        </DialogContent>
									        <DialogActions>
									          <Button onClick={nextStep} color="primary">
									            Continue Anyways
									          </Button>
									          <Button onClick={this.Back} color="primary" autoFocus>
									            Back
									          </Button>
									        </DialogActions>
							</Dialog>
						</>
						:
						<Button  variant="contained" color="primary" onClick={nextStep}>Next Step Education</Button>
					}
					<Button  variant="contained" color="primary" onClick={PrevStep}>Previous</Button>
						<div className="mt-4">
							. This means sending anonymous location data to
									            Google, even when no apps are runnin.Let Google help apps determine locatio
									            lorem20 thi si s msksjjsjks sjsjs this is s is Moment of the disraaf a dhhdb import compose, graphql from react-apollo.
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(education)