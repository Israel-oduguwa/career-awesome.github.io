import React, { Component } from 'react';
import Compensation from "../../components/postJobForm/Compensation";
import JobRequirement from "../../components/postJobForm/JobRequirement"
import JobLocation from "../../components/postJobForm/jobLocation"
import JobDetails from "../../components/postJobForm/JobDetails";
import axios from "axios";
export class postJob extends Component {
    state={
        step: 1,
        auth:false,
        // Company Details
        companyName:"",
        companyLogo:"",
        HeaderImage:"",
        jobTitle:"",
        jobCategory:[{
            jobCategories:""
        }],
        jobIndustry:[{
            jobIndustries:""
        }],
        facebook:"",
        twitter:"",
        linkedIn:"",
        social:[],
        email:"",
        companyApplicationLink:"",
        deadLine:false,
        applicationDeadline:"",
        // Location
        jobAddress1:"",
        jobAddress2:"",
        jobCountry:"",
        jobCityAndState:"",
        zipCode:"",
        displayCity:"",
        relocationExpensesCovered:"",
        //Job Requirements
        contractType:"", // intership, full staff
        employmentOption:"", // fullTime pertimee,
        contractDuration:"",
        educationStatus:"",
        experience:"",// 1 year, 2year , less Than one year
        Travel:"",
        covid19:false,
        jobDescription:"", // WYSIWYG,
        requiredSkills:[],
        //Compensation
        displayCompensation:false, // Boolean
        startingSalary:"",
        maximumSalary:"",
        mainSalary:"",
        SalaryDuration:"", //Hourly yearly, monthly
        //Bonus 
    }
    nextStep = () =>{
        const { step } = this.state
        this.setState({
            step: step + 1,   
        })
        this.setState({ auth:true })
        localStorage.setItem("steps", this.state.step + 1)
        localStorage.setItem("auth", this.state.auth)

    }
    prevStep = () =>{
        const { step } = this.state
        this.setState({
            step: step - 1
        })
        localStorage.setItem("steps", this.state.step - 1 )        
        localStorage.setItem("condition", this.state.auth)
    }

    handleChange = (e) => {
        this.setState({
             [e.target.name]: e.target.value            
        })
      
    }
    handleJobCategoryChange = (index, e) =>{
        const jobCategory  = [...this.state.jobCategory]
        jobCategory[index][e.target.name] = e.target.value;
        this.setState({
            jobCategory
        })

    }
    handleJobIndustryChange = (index, e) =>{
        const jobIndustry = [...this.state.jobIndustry]
        jobIndustry[index][e.target.name] = e.target.value;
        this.setState({
            jobIndustry
        })
    }
    handleSocialChange = (index, e) =>{
        const social = [...this.state.social]
        social[index][e.target.name] = e.target.value;
        this.setState({
            social
        })
       }
    handleDescription = (value) =>{
        this.setState({
            jobDescription:value
        })
    }
       addMoreSocial = (e) =>{
           if(this.state.social.length < 3){
            this.setState((prevState) =>({
                social:[...prevState.social, {socialWebsite:"", socialLink:""}]
            }))
           } else{
               console.log("too larg")
           }

        
        
    }
    removeMoreSocial = (index) =>{
     const social = [...this.state.social]
     social.splice(index, 1);
     this.setState({
         social
     })
    }
    postImage = (e) =>{
        this.setState({
            loading:true
        })   
         const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
       
       
        axios.post('/create-pdf/resumeImage' , formData)
        .then((res) =>{
            this.setState({
                thumbnailImage:res.data.url,
              imageName:res.data.imageName,
                loading:false
            })
           
        })
        .catch((err) =>{
            console.log(err)
        })
     }
     CompanyLogo = (e) =>{
        const file = document.getElementById("postImage");
         file.click()
       
     }

     addSkills= (e) =>{
        const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.requiredSkills.find(requiredSkills => requiredSkills.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ requiredSkills: [...this.state.requiredSkills, val]});
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.deleteSkills(this.state.requiredSkills.length - 1);
    }
    }
    deleteSkills = (index) =>{
        const requiredSkills = [...this.state.requiredSkills]
        requiredSkills.splice(index, 1)
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        this.setState({
            requiredSkills
        })
    }
    render() {
        const { step } = this.state
        const tag = this.t
       switch(step){
           case 1:
               return(
                   <JobDetails
                    postImage={this.postImage}
                    CompanyLogo={this.CompanyLogo}
                    handleChange={this.handleChange}
                    removeSocial = {this.removeMoreSocial}
                    addSocial={this.addMoreSocial} 
                    handleJobCategoryChange={this.handleJobCategoryChange}
                    state={this.state} 
                    handleSocialChange ={this.handleSocialChange}
                    handleJobIndustryChange={this.handleJobIndustryChange}
                    nextStep={this.nextStep}
                      />
               )
            case 2:
                return(
                    <JobLocation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                     state={this.state} />
                )
            case 3:
                return(
                    <JobRequirement
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    description={this.handleDescription}
                    addSkills = {this.addSkills}
                    deleteSkills={this.deleteSkills}
                    ref={c => { this.tagInput = c ; }}
                    
                     state={this.state}/>
                )
            case 4:
                return(
                    <Compensation 
                    nextStep={this.nextStep}
                    state={this.state}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    description={this.handleDescription}
                    addSkills = {this.addSkills}
                    deleteSkills={this.deleteSkills}
                     />
                )
        default:
            return(
                <div>HI</div>
            )
       }
    }
}

export default postJob