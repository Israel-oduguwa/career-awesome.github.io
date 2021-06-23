import React, { Component } from 'react';
import styles from "./navBar.module.css";
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import firebase from "firebase";
import Popover from '@material-ui/core/Popover';
import { logoutUser } from "../../Redux/Actions/userAction";
import { connect } from "react-redux"; 
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { Slide, Fade } from "react-awesome-reveal";
// import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "next/router";
if (!firebase.apps.length) {
  firebase.initializeApp({
      apiKey:"AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4",
      authDomain:"resume-builder-startup.firebaseapp.com"
  })
}


const styless = (theme) =>({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
})
export class UserIcons extends Component {
    state={
        anchor:false,
        open:false,
        isSigned:false
    }
    // On component Start Fire
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user =>{  
          this.setState({isSigned: !!user})
      })
    }
    logOut = () =>{
        firebase.auth().signOut();
      if(!this.state.isSigned){
         const Router = this.props.router;
         this.props.logoutUser(Router)
      }
    }
   handleOpen = () =>{
    this.setState({
        anchor:true
    })
   }
    handleClose = () =>{
        this.setState({
            anchor:false
        })
    }
  toggleDrawer = (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({
          anchor:true
        })
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
        const link = [
            {
              id:"1",
              Name:"Jobs",
              href:"/jobs"
            },
            {
              id:"2",
              Name:'Resume Builder',
              href:"/"
            },
            {
              id:"3",
              Name:"Blog",
              href:"/blog",
              // url:"/blog"
            },
            // {
            //   id:"4",
            //   Name:"Contact Us",
            //   href:"/ContactUs",
            //   // url:"/ContactUs"
            // },
            {
              id:"4",
              Name:"About",
              href:'/about'
            },
            
          ]
        const {classes, user:{ authenticated, credentials:{ imageUrl, userId, fullName, email} } } = this.props;
        return (
           <>
                {
                    authenticated ?
                    <IconButton aria-label="show notification">
                    {/* <Badge badgeContent={1} color="inherit"> */}
                      <NotificationsNoneOutlinedIcon className="bellIcon" />
                    {/* </Badge> */}
                  </IconButton>
                  :
                  <>
                  </>
                }
                {
                    authenticated  ?
                   <>
                    <IconButton 
                        aria-owns={this.state.open ? 'simple-popover' : undefined}
                        onClick={this.handlePopoverOpen}
                        className={styles.profileButton}>
                        <Avatar alt="userImage" src={imageUrl} />   
                        </IconButton>
                      <Popover
                      id="simple-popover"
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
                      <List>
                      <Fade triggerOnce={true} duration={300} cascade >
                      <Link href="/admin/profile">
                        <a>
                        <ListItem >
                          <ListItemAvatar>
                          <Avatar alt="userImage" src={imageUrl} />   
                          </ListItemAvatar>
                          <ListItemText className={styles.popText} primary={fullName} secondary={email} />
                        </ListItem></a></Link>
                        <Divider/>
                        <Link href="/admin/postJob"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Post a Job" />
                        </ListItem>
                        </a></Link>
                        <Link href="/admin/postBlog"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Write a story" />
                        </ListItem>
                        </a></Link>
                        <Link href="/admin/jobPosts"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Jobs" />
                        </ListItem>
                        </a></Link>
                        <Link href="/admin/blogPosts"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Stories" />
                        </ListItem>
                        </a></Link>
                        <Link href="/admin/profile"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Profile" />
                        </ListItem>
                        </a></Link>
                        <Link href="/admin/settings"><a>
                        <ListItem>
                          <ListItemText className={styles.popText} primary="Settings"/>
                        </ListItem>
                        </a></Link>
                        <Divider/>
                        <ListItem button onClick={this.logOut}>
                          <ListItemText className={styles.popText} primary="Sign out" />
                        </ListItem>
                        </Fade>
                      </List>
                    </Popover>
                   </>
                :
                <Link href='/signup'>
                    <a>
                    <Button className={styles.SignupButton} variant="contained" disableElevation color="primary">
                        Sign In
                    </Button>
                    </a>
                </Link>
                }
                
               <Link href="/admin/postJob">
               <a className={styles.postJobButton} >
               <Button className="d-none d-md-block" variant="outlined" color="primary">
                Post Job
               </Button>
               </a>
               </Link>
             <IconButton onClick={this.handleOpen} className="MenuButton"><MenuIcon/></IconButton>
                 <SwipeableDrawer
                  anchor="left"
                  className="NavDrawer"
                  open={this.state.anchor}
                  onClose={this.handleClose}
                  onOpen={this.handleOpen}>
                          <div             
                    role="presentation"
                    className={classes.List}            
                  >
                    <List>
                    <Slide triggerOnce={true} duration={200} cascade direction="left">
                      {
                        link.map((links) =>(
                          <Link key={links.id} href={links.href}>
                           <a>
                           <ListItem key={links.id} button  onClick={this.handleClose}>
                            <ListItemText primary={links.Name}/>
                            </ListItem>
                            <Divider/>
                           </a>
                          </Link>
                        ))
                      }   
                      </Slide>                
                    </List>
            </div>
            </SwipeableDrawer>
           
           </>
        )
    }
}
UserIcons.propTypes = {
    classes: PropTypes.object.isRequired,
    logoutUser:PropTypes.func.isRequired
  };
  const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})
export default connect(mapStateToProps, { logoutUser })((withRouter)(withStyles(styless)(UserIcons)))
