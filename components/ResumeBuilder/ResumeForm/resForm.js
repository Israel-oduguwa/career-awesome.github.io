import React from 'react'
import StartResume from "./Steps/startResume";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveResume } from "../../../Redux/Actions/resumeAction";
export class resForm extends React.Component {
	// States
	state={
		step:1,
		margin:"trhi"
	}
	componentDidMount(){
		const Resumestate = this.state
		this.props.saveResume(Resumestate)
	}
	nextStep = () =>{
		const { step } = this.state;
		const Resumestate = this.state
		this.setState({
			step:step + 1
		})
		this.props.saveResume(Resumestate)
	}
	PrevStep = () =>{
		const { step } = this.state;
		const Resumestate = this.state
		this.setState({
			step:step - 1,
			margin:"thj"
		})
		this.props.saveResume(Resumestate)

	}
	render() { 
		const { step } = this.state;
		switch(step){
			case 1:
				return(
					<StartResume nextStep={this.nextStep}/>
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