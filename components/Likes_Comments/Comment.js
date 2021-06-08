import React, { Component } from 'react';
import PropTypes from "prop-types";
import {withRouter, useRouter} from "next/router";
import {withRouterProps} from "next/dist/client/with-router"
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { getUserData } from "../../Redux/Actions/userAction";
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
const styled = (theme) =>({
    
})
export class Comment extends Component {
    state ={
        body:"",
        commentCount:"",
        blogId:"",
        isCommentClicked:false,
        loading:false,
        comment:"",
    }
    handleComments = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    submitComment = () =>{
            if(this.props.user.authenticated){
        const commentData ={
          body:this.state.body
        }
        this.setState({
          loading:true
        })
        axios
        .post(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getBlog/${this.props.blog.blogId}/comment`, commentData)
        .then((res) =>{     
          this.setState({
            loading:false,
            comment:[...this.state.comment, res.data],
            commentCount:this.state.commentCount+1
          })

        })
        .catch((err) =>{
          console.log(err)
        })
       } 
       else{
        this.props.router.push('/signup')
       }
    }
    HandleShowComment =(prevState) =>{
    this.setState({
      comment:this.props.blog.comments,
      isCommentClicked:!prevState.isCommentClicked
    })
  }
    render() {
        const { user:{credentials:{imageUrl}} } = this.props
        const {comment, body} = this.state
        return (
            <>
            <div className="col-1">
                <Avatar alt="profileImage" src={imageUrl}/>      
            </div>
            <div className="col-10">
            <FormControl>
                <InputLabel htmlFor="standard-adornment-password">Enter a Comment</InputLabel>
                    <Input id="comment"
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.handleComments}
                endAdornment={
                    <InputAdornment position="end">
                      <>
                      {
                          body.trim() === "" ?
                          <IconButton 
                          aria-label="send-disabled"
                          edge="end"
                          disabled
                          >                        
                          <SendIcon/>
                          </IconButton>:
                          <IconButton 
                          aria-label="sendComment"
                          edge="end"
                          onClick={this.submitComment}
                          >                        
                          <SendIcon/>
                          </IconButton>
                      }
                      </>
                    </InputAdornment>
                }
            fullWidth
            />
                
            </FormControl>
               
            </div>
            
            <div className="col-md-12">
                <ul>
               {
                    comments ? 
                    <>
                    {
                        comments.map((com, index) =>(
                            <li key={index}>{com.body}</li>
                        ))
                    }
                    </> :
                    <button onClick={this.HandleShowComment}>ShowComment</button>
                    
                }
               </ul>
            </div>
            </>  
        )
    }
}
Comment.propTypes ={
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
  getUserData:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})
export default connect(mapStateToProps,  {getUserData})((withRouter)(withStyles(styled)(Comment)))
