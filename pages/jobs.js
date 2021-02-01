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
    if(!data) return <div><NavBar><h1>Loading ...</h1></NavBar></div>
    if(props.display){
        return(
            <>
                <div className="mt-4">
                    {
                        data.map((job) =>{
                            return(
                                <>
                               <div class="card" >
  <img class="card-img-top" src="https://www.multipurposethemes.com/admin/joblly-admin-template-dashboard/images/logo/logo-1.jpg" alt="Card image cap" height="100px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
                                </>
                                )
                        })
                    }
                </div>
            </>
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
            <Head>
                <title>
                 All Jobs
                 </title>
             </Head>

            <div className="LandingPageContainer">

            <NavBar>
            <div className="queryPanel">
            QUERY PANEL
            </div>
             <div className="container-fluid">
                    <div className="row">
                       <div className="col-md-1">
                       Right
                       </div>
                       <div className="col-md-8">
                             <AllJobs display={true}/>
                       </div>
                       <div className="col-md-3">
                       ADs and Extreas</div>
                    </div>
                </div> 
                <footer>
                <div className="footer">
                FOOTER</div></footer>              
            </NavBar>
            </div>
               
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
