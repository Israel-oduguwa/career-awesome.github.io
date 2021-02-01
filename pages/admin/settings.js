import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import firebase from "firebase";
import useSWR from 'swr';
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import fetch from "isomorphic-unfetch";
import { logoutUser } from "../../Redux/Actions/userAction";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { editUserDetails } from "../../Redux/Actions/userAction";
import dayjs from "dayjs";
import Button from "@material-ui/core/Button";
import Interweave from "interweave";
import Head from 'next/head';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography"
import TextField from '@material-ui/core/TextField';
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
        authDomain:"resume-builder-startup.firebaseapp.com"
    })
}


export class settings extends Component {
     state={
        bio:"",
        languages:"",
        skills:"",
        isSigned:false
    }
     handleChange =(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        const userDetails ={
            bio:this.state.bio,
            
            languages:this.state.languages,
            skills:this.state.skills
        }
        this.props.editUserDetails(userDetails)
    }
    
      componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{  
            this.setState({isSigned: !!user})
        })
      }
      logOut = () =>{
          firebase.auth().signOut();
          
        if(!this.state.isSigned){
           const Router = this.props.router;
           this.props.logoutUser(Router)

        }
      }
    render() {
      const {credentials, loading} = this.props.user;
        dayjs.extend(LocalizedFormat)
        return (
             <DashBoard>
                <div className="container">
                    <div className="row">
                        
                        {
                            !loading ?
                            <>
                            <div className="col-md-12 mt-4">
                            <Typography variant="h5">Settings</Typography>

                        </div>
                        <div className="col-md-4 mt-4">
                            <Card  small className="card-post sticky">
                                <div className="border-bottom text-center"> 
                                <div className="mb-3 mx-auto">
                                <img
                                        className="rounded-circle"
                                        src={credentials.imageUrl}
                                        alt={credentials.fullName}
                                        width="110"
                                        />                              
                                </div>    
                                <Typography variant="h5">{credentials.fullName}</Typography>
                                   <span className="text-muted d-block mb-2">{dayjs(credentials.createdAt).format('ll')}</span>                                        
                                </div>
                               
                           {
                               credentials.bio ?
                                <div className="p-4">
                               <Interweave content={credentials.bio}/>
                            </div>:<></>
                           }
                            </Card>
                        </div>
                        <div className="col-md-8 mt-4">
                        <Card small className="card-post">
                            <div className="profile-header">
                            <div className="border-bottom">
                            
                            <Typography variant="h6">Profile Info</Typography>
                            </div>
                                <div className="row">
                                 <div className="col-md-12 mt-3">
                                    <Typography variant="subtitle2">
                                   Username

                                    </Typography>
                                    </div>
                                     <div className="col-md-12">
                                        <TextField name="userName" onBlur={this.handleChange}  size="small" fullWidth variant="outlined"/>

                                      </div>

                                    <div className="col-md-12 mt-1 mb-1">
                                    <Typography variant="subtitle2">
                                  
                                    Bio 
                                    </Typography>
                                    </div>

                                    <div className="col-md-12">
                                        <TextareaAutosize
                                         onBlur={this.handleChange}
                                         name="bio"
                                        

                                         aria-label="maximum height"
                                         placeholder=""
                                       
                                       />
                                      
                                    </div>
                                    <div className="col-md-12 mt-1 mb-1">
                                    <Typography variant="subtitle2">
                                   Website
                                    </Typography>
                                    </div>
                                     <div className="col-md-12">
                                        <TextField name="website" onBlur={this.handleChange}  size="small" fullWidth variant="outlined"/>

                                      </div>

                                      <div className="col-md-12 mt-1 mb-1">
                                    <Typography variant="subtitle2">
                                   Languages
                                    </Typography>
                                    </div>
                                     <div className="col-md-12">
                                        <TextField name="languages" onBlur={this.handleChange}  size="small" fullWidth variant="outlined"/>

                                      </div>
                                    <div className="col-md-12 mb-2 mt-3">
                                      <Button  variant="outlined" color="primary" onClick={this.handleSubmit}>Update Profile</Button>
                                    
                        <div className="border-bottom mt-4">
                     <Typography variant="h6">Account</Typography>
                     
                    </div>
                    <div className="row">
                     <div className="col-md-12 mt-3">
                     <Typography variant="subtitle2">Log Out</Typography></div>
                     <div className="col-md-12 mt-1">
                         <Button variant="outlined" color="primary" onClick={this.logOut}>
                        LogOut
                    </Button>
                                </div></div>
                      </div>
                   
                                </div>
                            </div>
    
    
  </Card>
                        </div>
                                
                            </>
                            :
                            <h3>LOADING</h3>

                            
                        }


                    </div>
                </div>
            </DashBoard>
        )
    }
}

settings.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    logoutUser:PropTypes.func.isRequired,
    editUserDetails:PropTypes.func.isRequired
  }
  const mapStateToProps = (state) => ({
    user: state.user,
  })

export default connect(mapStateToProps, { logoutUser, editUserDetails })((withRouter)(settings))