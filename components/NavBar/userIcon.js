import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { connect } from "react-redux"; 
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) =>({

})
export class UserIcon extends Component {
    state={
        anchor:false
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
    render() {
        const link = [
            {
              id:"1",
              Name:"Jobs",
              href:"/"
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
        const {classes, user:{ authenticated, credentials:{ imageUrl, userId} } } = this.props;
        return (
           <>
            {/* <Link href="/">
                    <a>
                        <IconButton>
                            <SearchOutlinedIcon/>
                        </IconButton>
                    </a>
                </Link> */}
                {
                    authenticated ?
                    <IconButton aria-label="show notification">
                    {/* <Badge badgeContent={1} color="inherit"> */}
                      <NotificationsNoneOutlinedIcon className="bellIcon" />
                    {/* </Badge> */}
                  </IconButton>
                  :
                  <>
                  .
                  </>
                }
                {
                    authenticated  ?
                    <Link href='/admin/profile'>
                    <a>
                        <IconButton className="profileButton">
                        <Avatar alt="userImage" src={imageUrl} />   
                        </IconButton>
                    </a>
                </Link>
                :
                <Link href='/signup'>
                    <a>
                    <Button variant="outlined" color="primary">
                        Sign Up
                    </Button>
                    </a>
                </Link>
                }
               
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
                    </List>
            </div>
            </SwipeableDrawer>
           
           </>
        )
    }
}
UserIcon.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})
export default connect(mapStateToProps)(withStyles(styles)(UserIcon))
