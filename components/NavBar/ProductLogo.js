import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
const styles = theme => ({
  root:{
    textDecoration:"none!important",
    fontWeight:700,
  }
});

 class ProductLogo extends Component { 
    render() {
      const { classes } = this.props;
        return (
          <>
         <Typography color="primary" className={classes.root} variant="h4" noWrap>
           CA
          </Typography>
            </>
        )
    }
}
ProductLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductLogo)