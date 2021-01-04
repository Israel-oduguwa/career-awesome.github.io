import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Comment extends Component {
    render() {
        const { comments, commentCount, blogId, handleComment, submitComment } = this.props
        return (
            <div>
                <input type="text" onChange={handleComment} name="body"/>
                <button onClick={submitComment}>comment</button>
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
                    <><h2>Loading</h2></>
                    
                }
               </ul>
            </div>
        )
    }
}

export default Comment
