import React, { Component } from 'react'
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import Head from "next/head";
import { createUser } from "../Redux/Actions/userAction";
import { withRouter } from "next/router";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
        authDomain:"resume-builder-startup.firebaseapp.com"
    })
}

export class signup extends Component {
    state={
       fullName:"",
       email:"",
       refreshToken:"",
       firstIdToken:"",
       imageUrl:"", 
       userId:""
    }
   uiConfig = {
       
        signInFlow: 'popup',
        
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
         
         
        ],
         callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
          }
        
      };
    //   "AG8BCncuYyWONR4c7SP9fGmO_gINCgVWtBsE4Iik7hw_8Pudgge0wk53iQUniaIYvxfHXYRYbeCXGwSk_7c4NgTR9oV0y-44s5sGQAB4HxRLQRCAtTk6VzLzYWuSdSHbzezRvJc7FjbDsRLwNXcz2_E44t3PS8o_iesL9DAg8QT3JcwZQVQTadYcZ27Gg6FCGTLpA4xjDgA582uPc39wqn079Dp3I1f2V-g-Sf6hyu1JcIIRDCjwo19FFOC18wnFo8L0GW_au9w9YEe3NPJg5Jp6Q99nNcAvj3t7okFXNv-_A72Y59Wvg6FVctXtLErfQWjLjKJQ1zpFnfR3ZV2sDp83I1pRf2Een-nM9wp04Ew0FOw69bCait0QrFvlEBSt5bDA0C3DCuxNfVZqnToRRNMiQEWAk6oqnPV9ES-elJwkT8stDeujVsgJhOUJ1ZnVK-ygWT3TrTev"
componentDidMount = () => {  
    if(this.props.user.authenticated){
        this.props.router.push('/admin/profile')
    } 
    else{
        
        firebase.auth().onAuthStateChanged(user =>{  
         if(user){
            this.setState({
                refreshToken:user.refreshToken,
                fullName:user.providerData[0].displayName,
                email:user.providerData[0].email,
                imageUrl:user.providerData[0].photoURL,
                firstIdToken:user._lat,
                userId:user.uid
            })
           
            const userData = {
                fullName:this.state.fullName,
                email:this.state.email,
                refreshToken:this.state.refreshToken,
                firstIdToken:this.state.firstIdToken,
                imageUrl:this.state.imageUrl,
                userId:this.state.userId
            }
            const Router = this.props.router
            this.props.createUser(userData, Router);
            console.log(user)
         }
        })
    }


}
    render() {
        // const  { user } = this.props
        return (
        <>
        <Head>
          <title>
            Get Started | Signup | CareerAwesome
          </title>
        </Head>
        {
           
            this.state.auth ?
            <p>This is AUth</p>:
            <>
              <div className="row SUP">
                <div className="col-md-5">
                  <div className="container">
                    <div className="row text-center">
                      <div className="col-md-12">
                        <div className="logo mb-4 mt-4">
                            <Typography className="LPTC" variant="h4">
                             CA
                            </Typography>
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <Typography className="LPTC" variant="h6">
                            Login To CareerAwesome
                        </Typography>
                        <Typography className="topPhrase" variant="subtitle1">
                          sign in easily with you social accounts
                        </Typography>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="main-card mb-4 mt-4">
                          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                        </div>  
                      </div>
                      <div className="col-md-12">
                        <div className="terms mt-4">
                          <Typography variant="subtitle2">
                              By signing in you agree with the terms and condition of CareerAwesome
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-md-7 SUPSideImage d-none d-sm-block" style={{height:"100vh"}}>                  
                  <div className="row">
                    <div className="col-md-6">
                         <Typography className="SPT" variant="h4">
                            Find the right Job, Prepare for Your Career as We empower You
                        </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </>
        }
        </>
        )
    }
}

signup.propTypes ={
    // classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    createUser:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})
export default connect(mapStateToProps, {createUser})((withRouter)(signup))
