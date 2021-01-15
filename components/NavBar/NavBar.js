import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import UserIcon from "./userIcon";
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Head from "next/head"
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ProgressBar from 'react-progressbar-on-scroll';
import NavLinks from "./NavLinks";

// AppBar components
import ProductLogo from "./ProductLogo";

// style
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),    
    },
    grow:{
      flexGrow: 1,
    },
    NavBar:{ 
        //  boxShadow: "none!important",
        backgroundColor:"#fff",
        zIndex:"998",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",

    },
   
    
  }));
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
    const handleClick = (e) => {
        const anchor = (e.target.ownerDocument || document)
        .querySelector('#back-to-top-anchor');   
      
        if (anchor) {
          anchor.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' });
        }      
      };
      return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
          </div>
        </Zoom>
      );
    }
    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
      };
      
      
// The Hide on scroll function
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });  
    return (
      <Slide appear={false} direction="down" in={!trigger }>
        {children}
      </Slide>
    );
  }
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export default function NavBar({props, children}) {  
  const classes = useStyles();
  // const dark = this.props.toggleDark
  return (<React.Fragment>
  
    <CssBaseline />
    <HideOnScroll {...props}>
    <div className={classes.grow}>
   
               
         <AppBar className={classes.NavBar} color="inherit">
            <Toolbar >
              <ProductLogo/>
              <div className={classes.grow} />
              <NavLinks  />
              <UserIcon/>
            </Toolbar>
          </AppBar>
         </div>
    </HideOnScroll>
    <Toolbar id="back-to-top-anchor" />
  
   <ProgressBar
   className={classes.progress}
    
    color="#6520ec"
    height={2}
    direction="right"
    position="top"
    gradient={true}
    gradientColor="#f7588c"/>
   
    <Container style={{ width: "100%", padding:"0", margin:"0", maxWidth:"100%"}}>
      <Box style={{margin:"0"}} my={2}>
        {children}        
      </Box>
    </Container>
    <ScrollTop {...props}>
      <Fab color="secondary"  aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </React.Fragment>);
}