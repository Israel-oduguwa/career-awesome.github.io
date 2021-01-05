import React, { Component } from 'react';
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

    render() {
        const { step } = this.state
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
                    prevStep={this.prevStep}  />
               )
       }
    }
}

export default postJob