import React, { Component } from 'react';
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import TextField from '@material-ui/core/TextField';


export class Comment extends Component {
    render() {
        const { comments, commentCount, profileImage, HandleShowComment, blogId, handleComment, submitComment } = this.props
        return (
            <>
            <div className="col-1">
                <Avatar alt="profileImage" src={profileImage}/>      
            </div>
            <div className="col-10">
                <TextField onChange={handleComment} fullWidth name="body" id="outlined-basic" label="Enter your comment here" variant="outlined" />
            </div>
            <div className="col-1">
                <button onClick={submitComment}>comment</button>
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
