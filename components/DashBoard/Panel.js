import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles';
import Link from "next/link";
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import SettingsIcon from '@material-ui/icons/Settings'
import PersonIcon from '@material-ui/icons/Person';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
const styles = (theme) =>({
    root: {        
        backgroundColor:theme.palette.main.panel,
        position:"fixed",
        width:"16.666667%",
        zIndex:"99999",
        height:"100vh",
        boxShadow:"0 0.125rem 9.375rem rgba(90,97,105,.1), 0 0.25rem 0.5rem rgba(90,97,105,.12), 0 0.9375rem 1.375rem rgba(90,97,105,.1), 0 0.4375rem 2.1875rem rgba(165,182,201,.1)"
      },
      List:{
          paddingLeft:"10px"
      },
      Logo:{
          padding:"0.7rem"
      }
})


export class Panel extends Component {
    render() {
        const { classes } = this.props;

        const link = [
            {   id:1,
                Name:"Job Posts",
                icon: <WorkIcon/>,
                href:'/admin/jobPosts'
            },
            { id:2,
                Name:"Blog Posts",
                icon:<BookIcon/>,
                href:'/admin/blogPosts'
            },
            { id:3,
                Name:"Profile",
                icon:<PersonIcon/>,
                href:'/admin/profile'
            },
            { id:4,
                Name:"Setting",
                icon:<SettingsIcon/>,
                href:'/admin/settings'
            },
            // {
            //     Name:"Job Posts",
            //     icon:' <WorkIcon/>',
            //     href:'/admin/jobPosts'
            // },
            
        ]
        return (
            <div className="main-navbar">
                <div className="nav-wrapper">
                <div className={classes.root} color="panel">
      <List component="nav" aria-label="main mailbox folders">
      <ListItem
        className={classes.Logo}        
        >
          
          <ListItemText primary="THe Logo"/>
        </ListItem>
      <Divider />
       {
           link.map((links) =>(
            <Link href={links.href}>
                <a>
                <ListItem
                key={links.id}
          button
          className={classes.List}
         
        >
          <ListItemIcon>
            {links.icon}
          </ListItemIcon>
          <ListItemText primary={links.Name} />
        </ListItem>
                </a>
            </Link>
           ))
       }
    
      </List>
      <Divider/>
      {/* <ListItem
          button
          className={classes.List}
          component={Link} to="/admin"
        >
          <ListItemIcon>
            <PostAddOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Post A Blog" />
        </ListItem>
        <ListItem
          button
          className={classes.List}
          component={Link} to="/admin"
        >
          <ListItemIcon>
            <PostAddOutlinedIcon/>
          </ListItemIcon>
          <ListItemText primary="Post A Job" />
        </ListItem> */}
    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Panel)