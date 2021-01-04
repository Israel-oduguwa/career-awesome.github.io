import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import useSWR from 'swr';
import { editUserDetails } from "../../Redux/Actions/userAction";
import Head from 'next/head';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {withRouter, useRouter} from "next/router";
import fetch from "isomorphic-unfetch";


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
        const {credentials, loading} = this.props.user
        return(
            <DashBoard>
                <div className="container">
                    <div className="row">
                        {
                            !loading ?
                            <>
                                <div className="col-md-12">
                                <h1>{credentials.fullName}</h1>
                            <h1>{credentials.email}</h1>
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