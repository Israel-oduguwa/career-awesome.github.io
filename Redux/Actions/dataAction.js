import axios from "axios";
import fetch from 'isomorphic-unfetch'
import { LOADING_UI, POST_BLOG, CLEAR_ERRORS,
   SET_ERRORS, STOP_LOADING_UI,SUBMIT_COMMENT,
  // DELETE_BLOG,
  LOADING_DATA,
   GET_ALL_BLOG, GET_BLOG} from "../Types";

export const postBlogs = (newBlog, Router) => async (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios.post('https://us-central1-resume-builder-startup.cloudfunctions.net/api/postBlog', newBlog)   
     .then((res) =>{
       dispatch({
        type:POST_BLOG,
        payload:res.data
      });
      dispatch({ type: CLEAR_ERRORS })   
      Router.push('/admin/blogPosts')
     })
     .catch((err) =>{
        console.log(err.response.data)
        // dispatch({
        //  type: SET_ERRORS,
        //  payload: err.response.data
        // })
     });
  }

  // export const postBlogs = (newBlog) => async (dispatch) =>{
  //   const res = fetch
  // }
    // export const deleteTimeline = (blogId) => (dispatch) =>{
    //   axios
    //   .delete(`/getBlog/${blogId}/delete`)
    //   .then((res) =>{
    //     dispatch({ 
    //       type: DELETE_BLOG, 
    //       payload: res.data.message })
    //   })
    //   .catch((err) => console.log(err))
    // }
//   export const postImage = (formData) => (dispatch) => {
//     dispatch({ type: LOADING_UI})
//     axios
//     .post('/create-pdf/resumeImage', formData)
//     .then((res) =>{
//       dispatch({
//         type:POST_IMAGE,
//         payload:res.data
//       });
//        dispatch({ type: CLEAR_ERRORS })
//     })
//     .catch((err) =>{
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data
//       })
//     })
//   }