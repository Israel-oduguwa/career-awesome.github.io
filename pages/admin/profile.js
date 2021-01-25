import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import useSWR from 'swr';
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { editUserDetails } from "../../Redux/Actions/userAction";
import dayjs from "dayjs";
import Head from 'next/head';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import Card from '@material-ui/core/Card';

export class profile extends Component{
    state={
        bio:"",
        languages:"",
        skills:""
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
                            <div className="col-md-12 mb-4">
                            <Typography variant="h5">User Profile</Typography>
                        </div>
                        <div className="col-md-5 mb-4">
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
                                   <span className="text-muted d-block mb-2">Joined at {dayjs(credentials.createdAt).format('ll')}</span>                                        
                                </div>
                               
                           {
                               credentials.bio ?
                                <div className="p-4">
                                <Typography variant="body2">{credentials.bio}</Typography>
                            </div>:<></>
                           }
                            </Card>
                        </div>
                        <div className="col-md-7">
                        <Card small className="card-post">
                            <div className="profile-header">
                            <div className="border-bottom">
                            
                            <Typography variant="h5">Update Profile</Typography>
                            </div>
                                <div className="row">
                                    HI
                                </div>
                            </div>
    
    
  </Card>
                        </div>
                                <div className="col-md-12">
                               
                            <input name="bio" placeholder="enterbio" onChange={this.handleChange}/>
                            <input name="languages" placeholder="language" onChange={this.handleChange}/>
                            <input name="skills" placeholder="skills" onChange={this.handleChange}/>
                            <button onClick={this.handleSubmit}>Update Profile</button>
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
    editUserDetails:PropTypes.func.isRequired 
  }
  const mapStateToProps = (state) => ({
    user: state.user,
  })
export default connect(mapStateToProps, { editUserDetails })(profile)