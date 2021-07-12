import React from 'react';
import head from "next/head";
import Typography from '@material-ui/core/Typography';import { withStyles } from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';import IconButton from '@material-ui/core/IconButton';import Select from '@material-ui/core/Select';
import {FaLightbulb} from 'react-icons/fa';import DeleteIcon from '@material-ui/icons/Delete';import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';import DialogContent from '@material-ui/core/DialogContent';import DialogContentText from '@material-ui/core/DialogContentText';import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
const styles = (theme) =>({
	 root: {
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.40)',
        borderRadius:'3px'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0, 0, 0, 0.87)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
},
})
export class BasicDetails extends React.Component {
	state={
		open:false,
	}
	Alert = () =>{
		this.setState({
			open:true
		})
	}
	Back = () =>{
		this.setState({
			open:false
		})
	}
	render() {
		const {state, handleSocialChange, handleChange, addSocial, removeSocial, nextStep, PrevStep, classes} = this.props
		const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return (
			<>
			<head>
				<title>Contact Details | Career Awesome</title>
			</head>
				<div className="container mt-4 mb-4">
					<div className="row">
						<div className="col-md-12 mb-4">
							<div>
								<Typography variant="h5">How can Your Employer Contact You </Typography>
								<Typography variant="p">Give your employer your contact Information to contact you </Typography>
							</div>
						</div>
						<div className="col-md-8 mt-4">
							<form className={classes.root} noValidate>
								<div className="row">
									<div className="col-md-6 mb-4 ">
										<TextField onChange={handleChange} name="firstName" fullWidth label="firstName" variant="outlined" defaultValue={state.firstName}/>
									</div>
									<div className="col-md-6 mb-4">
										<TextField onChange={handleChange} name="lastName" fullWidth label="LastName" defaultValue={state.lastName} variant="outlined"/>
									</div>
									<div className="col-md-6 mb-4">
										<TextField onChange={handleChange} name="city" fullWidth label="City" defaultValue={state.city} variant="outlined"/>
									</div>
									<div className="col-6 col-md-3 mb-4">
										<TextField  onChange={handleChange} name="state" defaultValue={state.state} fullWidth label="state" variant="outlined"/>
									</div>
									<div className="col-6 col-md-3 mb-4">
										<TextField onChange={handleChange} name="zipCode" fullWidth label="zip code" defaultValue={state.zipCode} variant="outlined"/>
									</div>
									<div className="col-12 mb-4">
										<TextField onChange={handleChange} name="profession" style={{width:"90%"}} defaultValue={state.profession} label="Profession" variant="outlined"/><IconButton><FaLightbulb/></IconButton>  
									</div>
									
									<div className="col-md-6 mb-4">
										<TextField onChange={handleChange} name="EmailAddress" defaultValue={state.EmailAddress} fullWidth label="Email address" variant="outlined"/>
									</div>
									<div className="col-md-6 mb-4">
										<TextField onChange={handleChange} name="PhoneNo" defaultValue={state.PhoneNo} fullWidth label="Phone number" variant="outlined"/>
									</div>
									{
										state.social.map((inputField, index) =>(
										 <React.Fragment key={index}>
										 	<div className="col-6">
										 			<FormControl variant="outlined" style={{width:"100%"}}>
												        <InputLabel id="select social contact">Social Platform</InputLabel>
												        <Select
												          name="socialWebsite"   
												          labelId="social-contacts"
												          id="select contacts"
												          value={inputField.socialWebsite}
												          onChange={e => handleSocialChange(index, e)}
												          label="Social Platform">
												          <MenuItem value="Website">Website</MenuItem>
												          <MenuItem value="facebook">Facebook</MenuItem>
												          <MenuItem value="twitter">Twitter</MenuItem>
												          <MenuItem value="linkedin">LinkedIn</MenuItem>
												        </Select>
											      	</FormControl>
										 	</div>
										 	<div className="col-6">
										 		<TextField onChange={e => handleSocialChange(index, e)} name="socialLink" style={{width:"90%"}} label="Link" value={inputField.socialLink} variant="outlined"/>
                                       			<IconButton  onClick={() => removeSocial(index)}>
                                     				<DeleteIcon/>
                                   				</IconButton>
										 	</div>
										 </React.Fragment>
										))
									}
									<div className="col-md-12">
										<div>
											{
												state.social.length >= 4 ?
												<IconButton onClick={addSocial} disabled><AddIcon/></IconButton>:
												<IconButton onClick={addSocial}><AddIcon/></IconButton>
											}
											<Typography variant="p">Add social links</Typography>
										</div>	
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-4">
							<p>Lorem ipsum thi si s lorem dolor ispsum dolor sit, amet, consectetur adipisicing elit. Sit a rerum placeat, ipsam mollitia pariatur, fuga tempora ullam excepturi exercitationem corrupti recusandae numquam officia eos animi quae incidunt. Ipsam ad at ab, culpa, dignissimos temporibus modi sit mollitia, quaerat quibusdam magnam voluptatibus iusto nostrum natus dolores saepe placeat deserunt aliquam. Corporis cumque sequi fuga quisquam commodi, cupiditate tenetur magnam, eius?</p>
						</div>
						<div className="col-md-12">
						      {
						      	state.firstName.trim === "" || state.PhoneNo.trim() === ""  || !state.EmailAddress.match(regEx)  || state.lastName.trim() === "" ?
									<>
							      	<Button onClick={this.Alert} variant="contained" disableElevation   color="secondary">
						          		Next Work Experience
						      		</Button> 
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
							    </>:
							    <Button onClick={nextStep} variant="contained" disableElevation   color="secondary">
						          Next Work Experience
						      </Button> 
						      }
						       <Button onClick={PrevStep} variant="contained" disableElevation   color="secondary">
						          Back
						        </Button> 
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default withStyles(styles)(BasicDetails)