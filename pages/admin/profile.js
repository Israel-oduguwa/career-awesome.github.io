import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import useSWR from 'swr';
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { editUserDetails } from "../../Redux/Actions/userAction";
import dayjs from "dayjs";
import Interweave from "interweave";
import Head from 'next/head';
import firebase from "firebase";
import { logoutUser } from "../../Redux/Actions/userAction";
import { withRouter } from "next/router";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import RenderEdit from "../../components/SIMPLE_WYSIWYG/RenderEdit";
import Card from '@material-ui/core/Card';


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
        authDomain:"resume-builder-startup.firebaseapp.com"
    })
}

export class profile extends Component{
    state={
        bio:"",
        languages:"",
        skills:"",
        isSigned:false
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
    handleChange =(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    type = (value) =>{
        this.setState({
            bio:value
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
    render(){
        const {credentials, loading} = this.props.user;
        dayjs.extend(LocalizedFormat)
        return(
            <DashBoard>
                <div className="container">
                    <div className="row">
                        
                        {
                            !loading ?
                            <>
                            <div className="col-md-12 mt-4">
                            <Typography variant="h5">Profile</Typography>
                        </div>
                        <div className="col-md-5 mt-4">
                            <Card  small className="card-post">
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
                        <div className="col-md-7">
                        <Card small className="card-post">
                            <div className="profile-header">
                            <div className="border-bottom">
                            
                            <Typography variant="h6">Account Settings</Typography>
                            </div>
                                <div className="row">
                                    <div className="col-md-12">
                                    <Typography variant="body1">
                                    About {credentials.fullName} 
                                    </Typography>
                                    <div className="editWrap">
                                                        {
                                        typeof window !== 'undefined'?
                                        <RenderEdit body={this.state.bio} placeholder="About" handleChange={this.type}/>:
                                        <div>Loading</div>
                                    }
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                                                <button onClick={this.handleSubmit}>Update Profile</button>
                                     <button onClick={this.logOut}>
                        LogOut
                    </button>
                    </div>
                                </div>
                            </div>
    
    
  </Card>
                        </div>
                                <div className="col-md-12">
                      
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

profile.propTypes ={
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,  
    editUserDetails:PropTypes.func.isRequired,
    logoutUser:PropTypes.func.isRequired
  }
  const mapStateToProps = (state) => ({
    user: state.user,
  })
export default connect(mapStateToProps, { editUserDetails, logoutUser })(profile)