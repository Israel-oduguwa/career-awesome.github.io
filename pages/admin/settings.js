import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import firebase from "firebase";
import { logoutUser } from "../../Redux/Actions/userAction";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { connect } from "react-redux";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
        authDomain:"resume-builder-startup.firebaseapp.com"
    })
}


export class settings extends Component {
    state={
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
    render() {
        return (
            <DashBoard>
                Settings
                <div>
                    <button onClick={this.logOut}>
                        LogOut
                    </button>
                </div>
               
            </DashBoard>
        )
    }
}

settings.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    logoutUser:PropTypes.func.isRequired
  }
  const mapStateToProps = (state) => ({
    user: state.user,
  })

export default connect(mapStateToProps, { logoutUser })((withRouter)(settings))