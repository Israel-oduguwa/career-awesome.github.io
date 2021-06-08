import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';

export class Comment extends React.Component {
    state ={
        body:"",
        commentCount:"",
        isCommentClicked:false,
        loading:false,
        comment:"",
    }
    handleComments = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
   HandleShowComment =(prevState) =>{
    this.setState({
      comment:this.props.blog.comments,
      isCommentClicked:!prevState.isCommentClicked
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
    render() {
        const { user:{credentials:{imageUrl}} } = this.props
        const {comment, body} = this.state
        return (
            <>
            <div className="col-md-8">
                 <Grid container spacing={2} alignItems="flex-end">
          <Grid item>
            <Avatar alt="profileImage" src={imageUrl}/>  
          </Grid>
          <Grid item>
          <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          name="body"
          value={this.state.body}
          onChange={this.handleComments}
        />
          </Grid>
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
        </Grid>
            </div>
            <div className="col-md-12">
                <ul>
               {
                    comment ? 
                    <>
                    {
                        comment.map((com, index) =>(
                           <div className="row">
                                <div className="col-3">
                                    <Avatar src={com.userImage} alt="profile-img"/>
                                </div>
                                <div className="col-9">
                                    <Typography variant="h6">
                                        {com.fullName}
                                    </Typography>
                                    <Typography variant='subtitle2'>2 days ago</Typography>
                                    <Typography variant="body1">
                                        {com.body}
                                    </Typography>
                                    <hr/>
                                </div>
                           </div>
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

export default Comment
