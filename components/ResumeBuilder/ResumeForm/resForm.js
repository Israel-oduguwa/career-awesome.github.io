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
		auth:false,
		// BasicDetails
		firstName:"",
			profileImage:"",
            lastName:"",
            profession:"",       
            address:"",
            city:"",
            state:"",
            zipCode:"",       
            PhoneNo:"",
            EmailAddress:"",
            social:[],

	}
	componentDidMount(){
		const  auth = localStorage.getItem("auth") === 'true';const step = auth ? JSON.parse(localStorage.getItem("steps")) : this.state.step;const firstName = auth ? localStorage.getItem("firstName") : this.state.firstName;
	   const lastName = auth ? localStorage.getItem("lastName") : this.state.lastName;const profession  = auth ?    localStorage.getItem("profession") : this.state.profession; const address  = auth ?    localStorage.getItem("address") : this.state.address; const city  = auth ?   localStorage.getItem("city") : this.state.city;const state  = auth ?   localStorage.getItem("state") : this.state.state;const zipCode  = auth ?   localStorage.getItem("zipCode") : this.state.zipCode;const phoneNO  = auth ?  localStorage.getItem("phoneNo") : this.state.PhoneNo;const EmailAddress = auth ?   localStorage.getItem("EmailAddress") : this.state.EmailAddress;const social  = auth ?  JSON.parse(localStorage.getItem("social")) : this.state.social;
		this.setState({
			step,auth,firstName:firstName,lastName:lastName,profession:profession,address:address,city:city,state:state,zipCode:zipCode,PhoneNo:phoneNO,EmailAddress:EmailAddress,social:social,
		})
	
	}
	nextStep = () =>{
		const { step } = this.state;
		this.setState({
			step:step + 1,
			auth:true
		})
	 	localStorage.setItem("steps", this.state.step + 1);localStorage.setItem("auth", this.state.auth);localStorage.setItem("firstName", this.state.firstName);localStorage.setItem("lastName", this.state.lastName);localStorage.setItem("profession", this.state.profession);localStorage.setItem("address", this.state.address);localStorage.setItem("city", this.state.city);localStorage.setItem("state", this.state.lastName);localStorage.setItem("zipCode", this.state.zipCode);localStorage.setItem("PhoneNo", this.state.PhoneNo);localStorage.setItem("EmailAddress", this.state.EmailAddress);localStorage.setItem("social", JSON.stringify(this.state.social));
	}
	PrevStep = () =>{
		const { step } = this.state;
		this.setState({
			step:step - 1,
			auth:true
		})
		localStorage.setItem("steps", this.state.step - 1 )

	}
	handleChange = (e) => {
       this.setState({
            [e.target.name]: e.target.value            
       })   }
    addSocial = (e) =>{
       this.setState((prevState) =>({
           social:[...prevState.social, {socialWebsite:"", socialLink:""}]
       }))}
   removeSocial = (index) =>{
    const social = [...this.state.social]
    social.splice(index, 1);
    this.setState({
        social
    })}
    handleSocialChange = (index, e) =>{
    const social = [...this.state.social]
    social[index][e.target.name] = e.target.value;
    this.setState({
        social
    })}

	render() { 
		const { step } = this.state;
		switch(step){
			case 1:
				return(
					<>
					<ResumeNavbar state={this.state}  step={step} /> 
					<StartResume 
					 nextStep={this.nextStep}/>
					</>
					)
			case 2:
				return(
					<>
					<ResumeNavbar step={step} />
					<BasicDetails state={this.state} handleSocialChange={this.handleSocialChange} handleChange={this.handleChange} removeSocial={this.removeSocial} addSocial={this.addSocial} nextStep={this.nextStep} PrevStep={this.PrevStep}/>
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