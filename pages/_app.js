import React from 'react';
import App  from 'next/app';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import initStore from "../Redux/Store";
import { createWrapper } from "next-redux-wrapper";
import withRedux from "next-redux-wrapper";
import '../styles/globals.css';
import { SET_AUTHENTICATED } from '../Redux/Types';
import { refreshIdToken, getUserData } from '../Redux/Actions/userAction';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from "axios";
import theme from '../theme';
import jwtDecode from "jwt-decode";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

const ISSERVER = typeof window === "undefined";

if(process.browser){

  const token = localStorage.FBIdToken;
  const sessionToken = localStorage.refreshToken
  if (token){
    const decodedToken = jwtDecode(token);
    if(decodedToken.exp * 1000 < Date.now()){
      initStore.dispatch(refreshIdToken(sessionToken))
      // window.location.href ='/signin';
      // console.log("This User is Signed in")
    }
    else{
      initStore.dispatch({ type:SET_AUTHENTICATED});
      axios.defaults.headers.common['Authorization'] = token; 
      // console.log("here")
      initStore.dispatch(getUserData())    
    }
  }
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {  
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  render(){
    const {Component, pageProps } = this.props
    return(
<React.Fragment>
     <Provider store={initStore}>
     <Head>
        {/* <title>My page</title> */}
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
       
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
     </Provider>
    </React.Fragment>
    )
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
const makeStore = ()=>initStore
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp)



















// export default function MyApp(props) {
//   const { Component, pageProps } = props;

//   // React.useEffect(() => {
//   //   // Remove the server-side injected CSS.
//   //   const jssStyles = document.querySelector('#jss-server-side');
//   //   if (jssStyles) {
//   //     jssStyles.parentElement.removeChild(jssStyles);
//   //   }
//   // }, []);

//   return (
//     <React.Fragment>
//      <Provider store={initStore}>
//      <Head>
//         {/* <title>My page</title> */}
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
       
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//      </Provider>
//     </React.Fragment>
//   );
// }