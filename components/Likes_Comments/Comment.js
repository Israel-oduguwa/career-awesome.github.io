import React, { Component } from 'react';
import PropTypes from "prop-types";
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
export class Comment extends Component {
    render() {
        const { comments, commentCount, comBody, profileImage, HandleShowComment, blogId, handleComment, submitComment } = this.props
        return (
            <>
            <div className="col-1">
                <Avatar alt="profileImage" src={profileImage}/>      
            </div>
            <div className="col-10">
                <FilledInput id="comment"
                type="text"
                name="body"
                onChange={handleComment}
               value={comBody}
                endAdornment={
                    <InputAdornment position="end">
                      <>
                      {
                          comBody.trim() === "" ?
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
                          onClick={submitComment}
                          >                        
                          <SendIcon/>
                          </IconButton>
                      }
                      </>
                    </InputAdornment>
                }
            fullWidth
            
            />

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
                    <button onClick={HandleShowComment}>ShowComment</button>
                    
                }
               </ul>
            </div>
            </>  
        )
    }
}

export default Comment
