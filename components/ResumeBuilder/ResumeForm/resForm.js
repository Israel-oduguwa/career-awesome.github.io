import React from 'react'
import StartResume from "./Steps/startResume";
import BasicDetails from "./Steps/BasicDetails";
import Work from "./Steps/Work";
import Skills from "./Steps/Skills";
import Education from "./Steps/education";
import Summary from "./Steps/Summary";
import Extra from "./Steps/Extra";
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
            workExperience:[ 
            { company:"",
            jobTitle:"",
            location:"",
            startDate:"",
            endDate:"",
            current:false,
            jobHighlights:"",}
            ],
            education:[{
                schoolName:"",
                schoolLocation:"",
                Degree:"",
                startDate:"",
                graduationDate:"",
                currents:false,
                customDegree:"",
                field:"",
                educationHighlights:""
                
            }],
            skills:[{
            	body:"",
            	rating:""
            }],
            addRating:false,
            profile:"",
            reference:[{
            	firstName:"",
            	lastName:"",
            	positionTitle:"",
            	refEmail:"",
            	refPhoneNo:"",
            	organizationName:"",
            	RelationShip:"" //OPtional
            	}],
            referenceToggle: true,
            accomplishments:"",
            accomplishmentsTitle:"",
            accomplished:false,
            certifications:[{
            	date:"",
            	name:""
            }],
            certified:false,
            affliation:"",
            affliationToggle:false,
            projects:"",
            projectToggle:false,
            interest:"",
            interestToggle:false,
            languages:"",
            languagesToggle:false,
            activities:"",
            activitiesToggle:false,
            customTitle:"",
            customToggle:false,
            // nameofSummary:""
	}
	componentDidMount(){
		const  auth = localStorage.getItem("auth") === 'true';const step = auth ? JSON.parse(localStorage.getItem("steps")) : this.state.step;const firstName = auth ? localStorage.getItem("firstName") : this.state.firstName;
	   const lastName = auth ? localStorage.getItem("lastName") : this.state.lastName;
	   const profession  = auth ?    localStorage.getItem("profession") : this.state.profession;
	   const address  = auth ?    localStorage.getItem("address") : this.state.address;
	   const city  = auth ?   localStorage.getItem("city") : this.state.city;
	   const state  = auth ?   localStorage.getItem("state") : this.state.state;
	   const zipCode  = auth ?   localStorage.getItem("zipCode") : this.state.zipCode;
	   const PhoneNo  = auth ?  localStorage.getItem("PhoneNo") : this.state.PhoneNo;
	   const EmailAddress = auth ?   localStorage.getItem("EmailAddress") : this.state.EmailAddress;
		const social  = auth ?  JSON.parse(localStorage.getItem("social")) : this.state.social;
		// const workExperience  = auth ?   JSON.parse(localStorage.getItem("workExperience")) : this.state.workExperience;
		// const education  = auth ?   JSON.parse(localStorage.getItem("education")) : this.state.education
		// const skills  = auth ?   JSON.parse(localStorage.getItem("skills")) : this.state.skills
   		// const addRating  = auth ?  localStorage.getItem("addRating") : this.state.addRating
		// const profile = auth ?  localStorage.getItem("profile") : this.state.profile
		this.setState({
			step,auth,firstName:firstName,lastName:lastName,profession:profession,address:address,city:city,state:state,zipCode:zipCode, PhoneNo:PhoneNo,EmailAddress:EmailAddress,social:social,
             // workExperience:workExperience,
             // education:education,
             // skills:skills,
             // addRating:addRating
             // profile:profile,
		})
	
	}
	nextStep = () =>{
		const { step } = this.state;
		this.setState({
			step:step + 1,
			auth:true
		})
	 	localStorage.setItem("steps", this.state.step + 1);localStorage.setItem("auth", this.state.auth);
	 	localStorage.setItem("firstName", this.state.firstName);localStorage.setItem("lastName", this.state.lastName);localStorage.setItem("profession", this.state.profession);localStorage.setItem("address", this.state.address);localStorage.setItem("city", this.state.city);localStorage.setItem("state", this.state.lastName);localStorage.setItem("zipCode", this.state.zipCode);localStorage.setItem("PhoneNo", this.state.PhoneNo);
       	localStorage.setItem("EmailAddress", this.state.EmailAddress);localStorage.setItem("social", JSON.stringify(this.state.social));
		localStorage.setItem("workExperience", JSON.stringify(this.state.workExperience));
		localStorage.setItem("education", JSON.stringify(this.state.education));
		localStorage.setItem("skills", JSON.stringify(this.state.skills))
      	localStorage.setItem("addRating", this.state.addRating);
      	localStorage.setItem("profile", this.state.profile);
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
      handleAllToggleChange = (event) => {  
        this.setState({
            [event.target.name]: event.target.checked
        })     
       };
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
    handleWorkExperience = (index , e) =>{
    const workExperience = [...this.state.workExperience]
    workExperience[index][e.target.name] = e.target.value;
    this.setState({
        workExperience
    })}
    handleJob =(index, value) =>{
    	const workExperience =[...this.state.workExperience]
    	workExperience[index]["jobHighlights"] = value;
    	this.setState({
    		workExperience
    	})
    	
	   }
	 addWork = (e) =>{
       this.setState((prevState) =>({
           workExperience:[...prevState.workExperience, { company:"",
           jobTitle:"",
           location:"",
           startDate:"",
           endDate:"",
           current:false,
           jobHighlights:""}]
       }))
   }
     removeWork = (index) =>{
       const workExperience = [...this.state.workExperience]
       workExperience.splice(index, 1);
       this.setState({
           workExperience
       })}
       workToggle = (index, event) => {  
       const workExperience = [...this.state.workExperience]
       workExperience[index][event.target.name] = event.target.checked
	    this.setState({
	        workExperience
	    })  }
	    addEducation = () =>{
	       this.setState((prevState) => ({
	           education:[...prevState.education, {
	                schoolName:"",
	                schoolLocation:"",
	                Degree:"",
	                startDate:"",
	                graduationDate:"",
	                currents:false,
	                customDegree:"",
	                field:""
	        } ]
       }))
   }
	   deleteEducation = (index) =>{
		    const education = [...this.state.education]
		    education.splice(index, 1);
		    this.setState({
		        education
		    })
	   }
		   handleEducation = (index, e) =>{
	       const Edu =[...this.state.education]
	       Edu[index][e.target.name] = e.target.value;
	       this.setState({
	           Edu
	       })
	   }
	   		handleEducationHighlights = (index, value) =>{
	   			const education =[...this.state.education]
		    	education[index]["educationHighlights"] = value;
		    	this.setState({
		    		education
		    	})
	   		}
	   educationToggle= (index, event) => {  
	       const education = [...this.state.education]
	       education[index][event.target.name] = event.target.checked
		    this.setState({
		        education
		    })    
	   		}
	   	 handleToggleChanges = (index, event) => {  
       const education = [...this.state.education]
       education[index][event.target.name] = event.target.checked
    this.setState({
        education
    })    
   }
    addSkills = () =>{
       this.setState((prevState) => ({
           skills:[...prevState.skills, {
               body:""
           }]
       }))
   }
   deleteSkills = (index) =>{
       const skills = [...this.state.skills]
       skills.splice(index, 1)
       this.setState({
           skills
       })
   }
    handleSkillsRating = (value) =>{
       const skills = [...this.state.skills]
       const index = skills.findIndex(el => el.rating === "rating");
	    skills[index] = {...skills[index], rating: value}
	      this.setState({
	          skills
	      })
	      console.log(value)
	   }
	 handleSkillInput = (index, e) =>{
       const skill =[...this.state.skills]
      skill[index][e.target.name] = e.target.value;
       this.setState({
          skill
       })
   }
   handleProfile = (value) =>{
       this.setState({
           profile:value
       })
   }
   handleRefrenceText = (index, e) =>{
   	const reference = [...this.state.reference]
   	reference[index][e.target.name] = e.target.value;
   	this.setState({
   		reference
   	})
   }
   addReference = () =>{
   	this.setState((prevState)=>({
   		reference:[...prevState.reference, {
            	firstName:"",
            	lastName:"",
            	positionTitle:"",
            	refEmail:"",
            	refPhoneNo:"",
            	organizationName:"",
            	RelationShip:"" //OPtional
            	}]
   	}))
   }
    deleteRef = (index) =>{
       const reference = [...this.state.reference]
       reference.splice(index, 1)
       this.setState({
           reference
       })
   }
   handleAccomp = (value) =>{
        this.setState({
            accomplishments:value
        })
    }
    handleCertificate = (index, e) =>{
   	const reference = [...this.state.reference]
   	reference[index][e.target.name] = e.target.value;
   	this.setState({
   		reference
   	})
   }
    addCertificate = () =>{
   	this.setState((prevState)=>({
   		certifications:[...prevState.certifications, {
            	date:"",
            	name:""
            }]
   	}))
   }
   deleteCertificate = (index) =>{
       const certifications = [...this.state.certifications]
       certifications.splice(index, 1)
       this.setState({
           certifications
       })
   }
    handleProject = (value) =>{
        this.setState({
            projects:value
        })
    }
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
			case 3:
				return(
					<>
					<ResumeNavbar step={step}/>
					<Work handleJob={this.handleJob} workToggle={this.workToggle} state={this.state} addWork={this.addWork} removeWork={this.removeWork} handleWorkExperience={this.handleWorkExperience} handleChange={this.handleChange} nextStep={this.nextStep} PrevStep={this.PrevStep}/>
					</>
				)
			case 4:
				return(
					<>
						<ResumeNavbar step={step}/>
						<Education handleEducationHighlights={this.handleEducationHighlights} educationToggle={this.educationToggle} handleEducation={this.handleEducation} deleteEducation={this.deleteEducation} addEducation={this.addEducation} handleChange={this.handleChange} nextStep={this.nextStep} PrevStep={this.PrevStep} state={this.state} />
					</>
				)
			case 5:
				return(
					<>
						<ResumeNavbar step={step}/>
						<Skills handleSkillInput={this.handleSkillInput} deleteSkills={this.deleteSkills} addSkills={this.addSkills} addRating={this.addRating} handleAllToggleChange={this.handleAllToggleChange} handleSkillsRating={this.handleSkillsRating} handleChange={this.handleChange} nextStep={this.nextStep} PrevStep={this.PrevStep} state={this.state} />
					</>
				)
			case 6:
				return(
					<>
						<ResumeNavbar step={step}/>
						<Summary handleProfile={this.handleProfile} nextStep={this.nextStep} PrevStep={this.PrevStep} state={this.state} />
				
					</>
				)
			case 7:
				return(
					<>
						<ResumeNavbar step={step} />
						<Extra
						 handleCertificate={this.handleCertificate}
						   deleteCertificate={this.deleteCertificate}
						   addReference={this.addReference}
						    addCertificate={this.addCertificate}
						     deleteRef={this.deleteRef} 
						     handleProject={this.handleProject}
						      handleAccomp={this.handleAccomp}
						       handleAllToggleChange={this.handleAllToggleChange} 
						       state={this.state}
						        handleRefrenceText={this.handleRefrenceText}
						         PrevStep={this.PrevStep} 
						         nextStep={this.nextStep} />
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
    // user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    // createUser:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps, {saveResume})(resForm)