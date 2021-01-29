import { SET_USER, LOADING_UI, LOADING_USER, CLEAR_ERRORS, SET_ERRORS, SET_UNAUTHENTICATED } from "../Types";
import axios from "axios";

export const createUser = ( userData, Router ) => async (dispatch) =>{
    dispatch({type:LOADING_UI});
    axios.post('https://us-central1-resume-builder-startup.cloudfunctions.net/api/createAccount', userData)
    .then((res)=>{
        setAuthorizationHeader(res.data.firstIdToken);
        storeSessionToken(res.data.refreshToken)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        Router.push('/admin/profile');
        dispatch(getUserData());
    })
    .catch((err) =>{
      
     });
}
export const editUserDetails = (userDetails) => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  const res = await axios.post('https://us-central1-resume-builder-startup.cloudfunctions.net/api/user', userDetails)      
        dispatch(getUserData());
        console.log(res.data)
    //   })
    //   .catch((err) => console.log(err));
  };

//This will fetch all the user INfo from the DataBase
export const getUserData = () => async (dispatch) => {
    dispatch({ type: LOADING_USER})
  axios.get('https://us-central1-resume-builder-startup.cloudfunctions.net/api/user')     
  .then((res) =>{
      
    dispatch({
        type: SET_USER,
        payload: res.data
    })
  })
  .catch((err) => console.log(err))
   
}
//This will refresh the acsess toekm
export const refreshIdToken = (sessionToken) => async (dispatch) =>{
    const res = await axios.post(`https://securetoken.googleapis.com/v1/token?key=AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4`,
    {
        grant_type:"refresh_token",        
        refresh_token:sessionToken
    }
    )    
       
        setAuthorizationHeader(res.data.access_token)
        dispatch(getUserData());
    
    // .catch((err) =>{
    //     console.log(err)
    // })
}
//Set the Authorizationheader for the Jwt token and user permisssio

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };
const storeSessionToken = (sessionToken) =>{
    const refreshToken = sessionToken;
    localStorage.setItem('refreshToken', refreshToken)
}

export const logoutUser = (Router) => (dispatch) =>{
    localStorage.removeItem('FBIdToken'); 
    localStorage.removeItem('refreshToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
    Router.push('/');
}

// Update User ACcount

