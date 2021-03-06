import React, { Component } from 'react';
import Head from 'next/head'
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'; 
// Use the top to create unique styles for the Landing Page
import NavBar from "../components/NavBar/NavBar";
import TopIntro from "../components/HomePage/TopIntro";
import RightIntro from "../components/HomePage/RightIntro";
import JobFeautures from "../components/HomePage/JobFeautures";
import EmployersPost from "../components/HomePage/EmployersPost";
import LandingPageStep3 from "../components/HomePage/LandingPageStep3";
import LandingPageStep4 from "../components/HomePage/LandingPageStep4";
// Home Landing Page Container
export class HomePage extends Component{
  render(){
    return (
      <>
        <Head>
          <title>Career Awesome</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="LandingPageContainer">
                  <NavBar>
                  <div className="header">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-5">
                          <TopIntro/>
                        </div>
                        <div className="col-md-7">
                        <RightIntro/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="LandingPage2">
                    <JobFeautures/>
                  </div>
                  <div className="LandingPage2">
                    <LandingPageStep3/>
                  </div>
                  <div className="LandingPage2">
                     <LandingPageStep4/>
                  </div>
                  <div className="LandingPage2">
                    <EmployersPost/>
                  </div>
                  </NavBar>
                  <div className="footer">
                    <hr/>
                    <Footer/>
                  </div>
        </div>
      </>
    )
  }
}
export default HomePage