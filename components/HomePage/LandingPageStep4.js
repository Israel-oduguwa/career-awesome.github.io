import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux"; 
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import BlogPreveiw from "../blogPreveiw";
export class LandingPageStep4 extends Component {
    render() {
    	const {classes, user:{ blogPosts } } = this.props
    	
        return (
            <div className="container">
            	<div className="row" style={{alignItems:"center"}}>
            		<div className="col-md-12">
            			<Typography variant="h4" className="FH LPTC">
                    		Gives You Tips and articles on how to Build You Carerer
                  		</Typography>
            		</div>
            		<div className="col-md-">
            			<Typography variant="body1" className="FH">
                    		Carerer Awesome helps you with tips and articles on how to grow and improve your Carerer, tech solutions and academic tutorials,Task Managment, managing monry and college tips on how to stay focused etc, we have a Blog with Categories from different industry espacially from the tech.
                  		</Typography>
            		</div>
            		{
            			blogPosts ?
            			<BlogPreveiw data={blogPosts.slice(1,4)} />:
            			<></>
            		}
            	</div>
            </div>
        )
    }
}

LandingPageStep4.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})

export default connect(mapStateToProps)(LandingPageStep4)
