import React from 'react';
import Typography from '@material-ui/core/Typography';import { withStyles } from '@material-ui/core/styles';import TextField from '@material-ui/core/TextField';import IconButton from '@material-ui/core/IconButton';import Select from '@material-ui/core/Select';
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
        borderRadius:'2px'
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
	render() {
		const {nextStep, PrevStep, classes} = this.props
		return (
			<>
				<div className="container mt-4">
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
										<TextField name="firstName" fullWidth label="firstName" variant="outlined"/>
									</div>
									<div className="col-md-6 mb-4">
										<TextField name="LastName" fullWidth label="LastName" variant="outlined"/>
									</div>
									<div className="col-md-6 mb-4">
										<TextField name="city" fullWidth label="City" variant="outlined"/>
									</div>
									<div className="col-6 col-md-3 mb-4">
										<TextField name="State" fullWidth label="state" variant="outlined"/>
									</div>
									<div className="col-6 col-md-3 mb-4">
										<TextField name="ZipCode" fullWidth label="zip code" variant="outlined"/>
									</div>
									<div className="col-md-12 mb-4">
										<TextField name="Proffesion" fullWidth label="Profession" variant="outlined"/>
									</div>
									<div className="col-6 mb-4">
										<TextField name="EmailAddress" fullWidth label="Email address" variant="outlined"/>
									</div>
									<div className="col-6 mb-4">
										<TextField name="phoneNumber" fullWidth label="Phone number" variant="outlined"/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default withStyles(styles)(BasicDetails)