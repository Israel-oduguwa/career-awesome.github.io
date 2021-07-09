import React from 'react'
import StartResume from "./Steps/startResume";
import BasicDetails from "./Steps/BasicDetails";
import { connect } from "react-redux";
import ResumeNavbar from "./resumeNavbar";
import PropTypes from "prop-types";
import { saveResume } from "../../../Redux/Actions/resumeAction";
export class resForm extends React.Component {
	// States
	state={
		step:1,
		auth:false
	}
	componentDidMount(){
		const  auth = localStorage.getItem("auth") === 'true'
		const step = auth ? JSON.parse(localStorage.getItem("steps")) : this.state.step;
		this.setState({
			step,auth
		})
	
	}
	nextStep = () =>{
		const { step } = this.state;
		this.setState({
			step:step + 1,
			auth:true
		})
	 	localStorage.setItem("steps", this.state.step + 1)
	 	localStorage.setItem("auth", this.state.auth)
	}
	PrevStep = () =>{
		const { step } = this.state;
		this.setState({
			step:step - 1,
			auth:true
		})
		localStorage.setItem("steps", this.state.step - 1 )

	}
	render() { 
		const { step } = this.state;
		switch(step){
			case 1:
				return(
					<>
					<ResumeNavbar step={step} />
					<StartResume nextStep={this.nextStep}/>
					</>
					)
			case 2:
				return(
					<>
					<ResumeNavbar step={step} />
					<BasicDetails nextStep={this.nextStep} PrevStep={this.PrevStep}/>
					</>
				)
				default:
					return(
						<>
							<button onClick={this.PrevStep}>Back</button>
						</>
						)
		}
	}
}
resForm.propTypes ={
    // classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired,
    createUser:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps, {saveResume})(resForm)