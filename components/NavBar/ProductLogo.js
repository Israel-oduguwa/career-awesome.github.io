import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
// import Link from 'react-router-dom/Link';

const styles = theme => ({
  root:{
    textDecoration:"none!important",
    // color:"black"
  }
});

 class ProductLogo extends Component { 
    render() {
      const { classes } = this.props;
        return (
          <>
         <Typography color="inherit" className={classes.root} variant="h6" noWrap>
           Career Awsome
          </Typography>
            </>
        )
    }
}
ProductLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductLogo)