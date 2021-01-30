import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import Typography from '@material-ui/core/Typography';
import styles from  "./admin.module.css";
import Card from '@material-ui/core/Card';
import Popover from '@material-ui/core/Popover';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from "react-redux";
import Head from "next/head";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "next/link";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  //Icons
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon, 
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon, 
  WhatsappIcon,
  } from "react-share";

const styled = (theme) =>({
      media: {
        height: "10.3125rem",
      },
})
export class AllBlogPosts extends Component {
  state={
    open:false,
  }
    handlePopoverOpen = (event) => {
      this.setState({
        open:event.currentTarget
      })
    };
    handlePopoverClose = () => {
      this.setState({
        open:null
      })
    };
    render() {
        const {classes, user:{ blogPosts, loading } } = this.props;
        return (
           <DashBoard>
           <Head>
           <title>
           Career Awesome: Blog Posts</title></Head>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 mt-4 mb-4">
                            <Typography variant="h5" gutterBottom>Blog Posts</Typography>
                       </div>
                     {
                       !loading ?
                       <>
                         {
                           blogPosts ? 
                           <>
                           {
                               blogPosts.map((blog) =>{
                               const actions =  [
            {icon:  <FacebookShareButton
              url={`/blog/${blog.title.replace(/\s+/g, '-')}/${blog.blogId}`}
              quote={blog.title}>
              <FacebookIcon size={34} round />
            </FacebookShareButton>
            , name: 'Facebook'},
            {icon: <TwitterShareButton url="https://www.google.com"  quote={blog.title} >
               <TwitterIcon size={34} round />
            </TwitterShareButton> , name: 'Twitter'},
            {icon: <WhatsappShareButton url="">
              <WhatsappIcon size={34} round />
            </WhatsappShareButton>, name: 'WhatsApp'},
            {icon: <LinkedinShareButton url="">
              <LinkedinIcon size={34} round />
            </LinkedinShareButton>, name: 'WhatsApp'},
            {icon: <TelegramShareButton>
              <TelegramIcon size={34} round />
            </TelegramShareButton>, name: 'Telegram'},
            {icon: <EmailShareButton>
              <EmailIcon size={34} round />
            </EmailShareButton>, name: 'E-mail'}
          ]; 
          return(
                                   <>                                  
                         <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
                         <Card className="card-post">      
        <CardMedia
          className={classes.media}
          image={blog.thumbnail}
          title={blog.userId}
        />
        <CardContent>
          <Link href={`/blog/${blog.title.replace(/\s+/g, '-')}/${blog.blogId}`}>
          <a>
          <Typography gutterBottom  className={styles.blogTitle} variant="h6" component="h3">
            {blog.title}
          </Typography>
          <Typography className={styles.blogP} variant="body2" color="textSecondary" component="p">
           {blog.description}
          </Typography>
          </a>
          </Link>
        </CardContent>      
      <CardActions>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Button  onClick={this.handlePopoverOpen} size="small" color="primary">
          Share
        </Button>
         <Popover
                      id="simple-popover"
                      // className={classes.popover}
                      classes={{
                        paper: classes.paper,
                      }}
                      open={this.state.open}
                      anchorEl={this.state.open}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={this.handlePopoverClose}
                      // disableRestoreFocus
                    >
                    {
                actions.map((action) =>(
                  <>
                  <span className="social-icon-blog" >
                  {action.icon}
                  </span>
                  </>
                ))
              }
                    </Popover>
        <Link href={`/admin/editBlog/${blog.blogId}`}>
        <a>
        <Button size="small" color="primary">
          Edit
        </Button>
        </a></Link>
      </CardActions>
    </Card>
                         </div>
                                   </>
                               )})
                           }
                           </>:
                        
                               
                               <Typography variant="h5" gutterBottom>No blog Post Yet</Typography>
                           
                       }
                       </>:
                       <h2>Loading ...</h2>
                     }
                   </div>
               </div>
           </DashBoard>
        )
    }
}
AllBlogPosts.propTypes ={
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})
export default connect(mapStateToProps)(withStyles(styled)(AllBlogPosts))