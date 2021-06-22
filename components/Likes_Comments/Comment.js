import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withRouter } from "next/router";
import CommentIcon from '@material-ui/icons/Comment';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from "axios";
import Collapse from '@material-ui/core/Collapse';
import Link from 'next/link';
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
        // isCommentClicked:false,
        loading:false,
        expanded:false,
        comment:"",
        times:0
    }
    handleComments = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
   HandleShowComment = () =>{
    // Note That This is some spaghetti cod Rember to change them and write efficient code as the site scale
    if(this.props.user.authenticated){
      this.setState({
      times:this.state.times+1
      // isCommentClicked:!isCommentClicked
      })
      if(this.state.times <=1){
        this.setState({
           comment:this.props.blog.comments,
          expanded:!this.state.expanded
        })

      }
      else{
        this.setState({
          expanded:!this.state.expanded
        })

      }
    }
    else{
      this.props.router.push('/signup')
    }
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
        const { user:{credentials:{imageUrl},authenticated} } = this.props
        const {comment, body} = this.state
        return (
            <>
            
            <div className="col-md-9 mt-4 top2 mb-4">
            
            
                 
            </div>
            <hr/>
            <div className="col-md-9 mt-4 mb-4 commentSection">
            <div className="CT mb-3">
              {
                authenticated ?
                <Button size="large"
                    onClick={this.HandleShowComment}
                    color="primary"
                    className='mb-2'
                    variant="outlined"
                    endIcon={<CommentIcon/>}
                  >
                    {
                    this.state.expanded ? 
                    "Hide Comments":
                    "Show Comments"
                   }
                </Button>:
                <Link href="/signup">
                  <a>
                    <Button
                    size="large"
                    color="primary"
                    className='mb-2'
                    variant="outlined"
                    endIcon={<CommentIcon/>}
                  >
                    {
                    this.state.expanded ? 
                    "Hide Comments":
                    "Show Comments"
                   }
                </Button>
                  </a>
                </Link>
               }
               {
                authenticated || !this.state.expanded ?
                <div className="commentCounts">
                 <Typography color="primary" variant="subtitle1">
                    {this.state.comment.length} Comments
                  </Typography>
               </div>:
               <></>
               }
               
            </div>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                {
                  authenticated ? 
                  <div className="row mb-4" style={{margin:0}}>
                  <div className="col-3ss">
                      <Avatar alt="profileImage" src={imageUrl}/>  
                  </div>
                  <div className="col-9">
                                <TextField
                                id="standard-textarea"
                                label="Write a public comment"
                                placeholder="Placeholder"
                                multiline
                                size="small"
                                rowsMax={9}
                                name="body"
                                fullWidth
                                value={this.state.body}
                                onChange={this.handleComments}
                              />
                  </div>
                  <div className="col-3ss">
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
                  </div>
              </div>:
              <>
              </>
                }
                <ul className="commentUL row">
               {
                    comment ? 
                    <>
                    {
                        comment.map((com, index) =>(
                           <div className="row">
                                <div className="col-3ss">
                                    <Avatar src={com.userImage} alt="profile-img"/>
                                </div>
                                <div className="col-9">
                                    <Typography variant="subtitle2">
                                        {com.fullName}
                                    </Typography>
                                    <Typography variant='caption'>2 days ago</Typography>
                                    <Typography variant="body2">
                                        {com.body}
                                    </Typography>
                                    <hr style={{marginTop:"0.9rem",marginBottom:"0.9rem"}}/>
                                </div>
                           </div>
                        ))
                    }
                    </> :
                    <>
                    </>
                    
                }
                  
                </ul>
               </Collapse>
               
               
            </div>
            

            </>  
        )
    }
}

export default ((withRouter)(Comment))
