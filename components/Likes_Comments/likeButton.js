import React, { Component } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import PropTypes from "prop-types";
// REdux
import { connect } from 'react-redux';


export class LikeButton extends Component {

    likedBlog = () =>{
      //  if(this.props.user.likes.length){
      //   if(this.props.user.likes.find(blog => blog.blogId === this.props.blog.blogId).blogId === this.props.blog.blogId)
      //   return true;
      //   else return false;
      //  }
      //  else{
       return false;
       
      //  }
      };
      
      
    render() {
        const { authenticated } = this.props.user;
        const { like, unlike, state } = this.props
        const LikeButton = !authenticated ? (
             <Link href="/signup">
            <a>
            <IconButton>
             
             <FavoriteBorderIcon/>
            
            </IconButton>
            </a>
            </Link>
          ) : 
            this.likedBlog() || state.likeIconClicked ?  (
              <IconButton tip="unlike" onClick={unlike}>
                <FavoriteIcon/>
              </IconButton>
            ) : (
              <IconButton tip="like" onClick={like}>
                <FavoriteBorderIcon/>
              </IconButton>
            );
            return LikeButton;
          
        
    }
}
LikeButton.propTypes ={
    user: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    user: state.user
  });



  export default connect(
    mapStateToProps,
  )(LikeButton);