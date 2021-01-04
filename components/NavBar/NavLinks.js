import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';

const styles = (theme) =>({
   grow:{
    flexGrow: 1,
   },
   navLinks: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    justifyContent:"space-around",
    width:"54%"
  },
})

export class NavLinks extends Component {
        
    render() {
        const {classes} = this.props
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
        return (         
                <>
                 <div className={classes.navLinks}>
                   {
                     link.map((links) =>(
                       <Link key={links.id}  href={links.href}>
                         <a>
                         <Typography key={links.id} className="navBarLinks"  variant="body2" color="inherit" noWrap>
                          {links.Name}
                          </Typography> 
                        </a>   
                       </Link>
                     ))
                   }        
          {/* <button onClick={darkModes}>DarkMode</button> */}         
                 </div>
                 
           
          </>
        )
    }
}
NavLinks.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavLinks)