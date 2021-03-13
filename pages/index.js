import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import NavBar from "../components/NavBar/NavBar";
import TopIntro from "../components/HomePage/TopIntro";
import RightIntro from "../components/HomePage/RightIntro";
import LandingPageStep2 from "../components/HomePage/LandingPageStep2";
import LandingPageStep3 from "../components/HomePage/LandingPageStep3";
import LandingPageStep4 from "../components/HomePage/LandingPageStep4";

export class HomePage extends Component{
  render(){
    return (
      <>
        <Head>
          <title>Career Awesome</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className="LandingPageContainer">
                  
                  <NavBar>
                  <header className="header">
                  <div className="container">
                      <div className="row">
                      <div className="col-md-7 d-lg-none">
                          <RightIntro/>
                          </div>
                          <div className="col-md-5">
                              <TopIntro/>
                          </div>
                          <div className="col-md-7 d-lg-none">
                          <RightIntro/>
                          </div>
                      </div>
  
                  </div>
                  </header>
                  <div className="LandingPage2">
                      <LandingPageStep2/>
                  </div>
                  
                  <div className="LandingPage2">
                      <LandingPageStep3/>
                  </div>
                  <div className="LandingPage2">
                     <LandingPageStep4/>
                  </div>
              
                 
                  </NavBar>
          </div>
  
        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer> */}
      </>
    )
  }
}
export default HomePage