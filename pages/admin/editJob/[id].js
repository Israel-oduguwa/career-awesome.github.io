import React, { Component } from 'react';
import Compensation from "../../../components/postJobForm/Compensation";
import JobRequirement from "../../../components/postJobForm/JobRequirement"
import JobDetails from "../../../components/postJobForm/JobDetails";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserData } from  "../../../Redux/Actions/userAction";
import useSWR from 'swr';
import {withRouter} from "next/router";

export const getServerSideProps = async ({params}) =>{
    const res = await fetch(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getJob/${params.id}`)
    const data = await res.json();
    console.log(data)
    return{ props: { job: data } }
    
}

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
    componentDidMount(){
        if(this.props.user.authenticated){
        this.setState({
        step:this.props.job.step,
        auth:this.props.auth,
        // Company Details
        companyName:this.props.job.companyName,
        companyLogo:this.props.job.companyLogo,
        HeaderImage:this.props.job.HeaderImage,
        jobTitle:this.props.job.jobTitle,
        jobSnippet:this.props.job.jobSnippet,
        jobCategory:this.props.job.jobCategory,
        jobIndustry:this.props.job.jobIndustry,
        facebook:this.props.job.facebook,
        twitter:this.props.job.twitter,
        linkedIn:this.props.job.linkedIn,
        social:this.props.job.social,
        email:this.props.job.email,
        companyApplicationLink:this.props.job.companyApplicationLink,
        deadLine:this.props.job.deadLine,
        applicationDeadline:this.props.job.applicationDeadline,
        // Location
        jobAddress1:this.props.job.jobAddress1,
        // jobAddress2:"",
        jobCountry:this.props.job.jobCountry,
        jobCityAndState:this.props.job.CityAndState,
        jobCity:this.props.job.City,
        jobState:this.props.job.jobState,
        zipCode:this.props.job.zipCode,
        displayCity:this.props.job.displayCity,
        relocationExpensesCovered:this.props.job.relocationExpensesCovered, //Yes No Not Spoecifoed
        //Job Requirements
        jobType:this.props.job.jobType, // intership, full staff, emploument
        // employmentOption:"", // fullTime pertimee,
        contractDuration:this.props.job.contractDuration,
        educationStatus:this.props.job.educationStatus, // bsc highschool
        experienceScale:this.props.job.experienceScale, // Prefferd or required
        experience:this.props.job.experience,// 1 year, 2year , less Than one year
        Travel:this.props.job.Travel, //Read Worrior
        covid19:this.props.job.covid19,
        jobDescription:this.props.job.jobDescription, // WYSIWYG,
        requiredSkills:this.props.job.requiredSkills,
        //Compensation
        paymentCurrency:this.props.job.paymentCurrency, //naria //dollar$
        displayCompensation:this.props.job.displayCompensation, // Boolean
        startingSalary:this.props.job.startingSalary, //Range
        maximumSalary:this.props.job.maximumSalary,
        salaryType:this.props.job.salaryType, // Randge, up to , exact, starting from
        mainSalary:this.props.job.mainSalary, // Exact, minimum, upTo, starting from 
        SalaryDuration:this.props.job.SalaryDuration,
        })
       }else{
           this.props.router.push('/signup')
       }
    }
    submitJob = () =>{
        axios.post(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/postJob/${this.props.job.jobId}/update`, this.state)
        .then((res) =>{
            console.log(res)
            this.props.router.push('/admin/jobPosts')
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

postJob.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
  getUserData:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, { getUserData })(withRouter(postJob))