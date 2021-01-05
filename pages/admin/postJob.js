import React, { Component } from 'react';
import JobDetails from "../../components/postJobForm/JobDetails";
import axios from "axios";
export class postJob extends Component {
    state={
        step: 1,
        auth:false,
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
                    state={this.state} 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}  />
               )
       }
    }
}

export default postJob