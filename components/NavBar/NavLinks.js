import React, { Component } from 'react';
import styles from "./navBar.module.css";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";

const styless = (theme) =>({
   grow:{
    flexGrow: 1,
   },
   navLinks: {
    display: 'none',
    fontWeight:500,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    justifyContent:"space-around",
    width:"39%"
  },
})

export class NavLinks extends Component {
        
    render() {
        const {classes} = this.props
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
            
          },
          {
            id:"4",
            Name:"About",
            href:'/about'
          },
          
        ]
        return (         
                <>
                 <div className={classes.navLinks}>
                  <Fade triggerOnce={true} duration={1000} cascade>
                   {
                     link.map((links) =>(
                       
                       <Link key={links.id}  href={links.href}>
                         <a>
                         <Typography key={links.id} className={styles.navBarLinks}  variant="body1" color="inherit" noWrap>
                          {links.Name}
                          </Typography> 
                        </a>   
                       </Link>
                      
                     ))
                   }   
                    </Fade>     
          {/* <button onClick={darkModes}>DarkMode</button> */}         
                 </div>
                 
           
          </>
        )
    }
}
NavLinks.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styless)(NavLinks)