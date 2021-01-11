import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Image from "next/image"
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import { getAllBlog } from  "../Redux/Actions/dataAction";

import Head from 'next/head';
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';

const AllJobs = (props) =>{
    const { data, error} = useSWR(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllJobs`)
    if (error) return(
        <div> Server Error Refresh </div>
    )
    if(!data) return <div>Loading</div>
    if(props.display){
        return(
            <div className="LandingPageContainer">
                <NavBar>
                    <Head>
                        <title>
                            All Jobs
                        </title>
                    </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                console.log(data)
                            }
                        </div>
                    </div>
                </div>
                </NavBar>
            </div>
        )
    }
}
const GitJobs = (props) =>{
    const { data, error} = useSWR(``)
    if (error) return(
        <div> Server Error Refresh </div>
    )
    if(!data) return <div>Loading</div>
    if(props.display){
        return(
            <div className="LandingPageContainer">
                <NavBar>
                    <Head>
                        <title>
                            All Jobs
                        </title>
                    </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            The Job api will work
                        </div>
                    </div>
                </div>
                </NavBar>
            </div>
        )
    }
}

export class jobs extends Component {
   
    render() {
        const { classes } = this.props;
        return (
            <>  
                <AllJobs display={true}/>
            </>
        )
    }
}

jobs.propTypes = {
    user: PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user:state.user    
})


export default connect(mapStateToProps)(jobs)
