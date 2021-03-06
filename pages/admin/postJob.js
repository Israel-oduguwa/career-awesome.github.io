import React, { Component } from 'react';
import Compensation from "../../components/postJobForm/Compensation";
import JobRequirement from "../../components/postJobForm/JobRequirement"
import JobDetails from "../../components/postJobForm/JobDetails";
import axios from "axios";
export class postJob extends Component {
    state={
        step: 1,
        auth:false,
        // Company Details
        companyName:"",
        companyLogo:"https://blog.hubspot.com/hubfs/image8-2.jpg",
        HeaderImage:"https://firebasestorage.googleapis.com/v0/b/resume-builder-startup.appspot.com/o/pexels-vojtech-okenka-392018-min.jpg?alt=media&token=24ec5452-6927-4275-82c1-d3349e50fd70",
        jobTitle:"",
        jobSnippet:"",
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
        // jobAddress2:"",
        jobCountry:"",
        jobCityAndState:"",
        jobCity:"",
        jobState:"",
        zipCode:"",
        displayCity:"",
        relocationExpensesCovered:"", //Yes No Not Spoecifoed
        //Job Requirements
        remoteJob:"",
        jobType:"", // intership, full staff, emploument
        // employmentOption:"", // fullTime pertimee,
        contractDuration:"",
        educationStatus:"", // bsc highschool
        experienceScale:"", // Prefferd or required
        experience:"",// 1 year, 2year , less Than one year
        Travel:"", //Read Worrior
        covid19:false,
        jobDescription:"", // WYSIWYG,
        requiredSkills:[],
        //Compensation
        paymentCurrency:"", //naria //dollar$
        displayCompensation:false, // Boolean
        startingSalary:"", //Range
        maximumSalary:"",
        salaryType:"", // Randge, up to , exact, starting from
        mainSalary:"", // Exact, minimum, upTo, starting from 
        SalaryDuration:"", //Hourly yearly, monthly
        //Bonus 
    }
    submitJob = () =>{
        axios.post(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/postJob`, this.state)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
      handleToogleButtons = () =>{
        this.setState({
         ...this.state, [event.target.name]: event.target.checked });
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
    addMoreCategory = (e) =>{
            this.setState((prevState) =>({
                jobCategory:[...prevState.jobCategory, {jobCategories:""}]
            }))
    }
    addMoreIndustry = (e) =>{
            this.setState((prevState) =>({
                jobIndustry:[...prevState.jobIndustry, {jobIndustries:""}]
            }))
    }
   
    
    removejobCategory = (index) =>{
     const jobCategory = [...this.state.jobCategory]
     jobCategory.splice(index, 1);
     this.setState({
         jobCategory
     })
    }
     removejobindustry = (index) =>{
     const jobIndustry = [...this.state.jobIndustry]
     jobIndustry.splice(index, 1);
     this.setState({
         jobIndustry
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
        // const tag = this.state
       switch(step){
           case 1:
               return(
                   <JobDetails
                    postImage={this.postImage}
                    CompanyLogo={this.CompanyLogo}
                    removejobCategory = {this.removejobCategory}
                    addjobCategory={this.addMoreCategory} 
                    addjobIndustry={this.addMoreIndustry}
                    removejobindustry ={this.removejobindustry}
                    handleChange={this.handleChange}
                   
                    handleJobCategoryChange={this.handleJobCategoryChange}
                    state={this.state} 
                    handleToogleButtons={this.handleToogleButtons}
                    handleSocialChange ={this.handleSocialChange}
                    handleJobIndustryChange={this.handleJobIndustryChange}
                    nextStep={this.nextStep}
                      />
               )
            
            case 2:
                return(
                    <JobRequirement
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    description={this.handleDescription}
                    addSkills = {this.addSkills}
                    deleteSkills={this.deleteSkills}
                    ref={c => { this.tagInput = c ; }}
                    description={this.handleDescription}
                    addSkills = {this.addSkills}
                    submit={this.submitJob}
                     state={this.state}/>
                )
            
        default:
            return(
                <div>HI</div>
            )
       }
    }
}

export default postJob