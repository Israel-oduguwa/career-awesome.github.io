import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

export class LandingPageStep4 extends Component {
    render() {
        return (
            <div className="container">
            	<div className="row">
            		<div className="col-md-12 text-center">
            			<Typography variant="h4" className="FH">
                    		Gives You Tips and articles on how to Build You Carerer
                  		</Typography>
            		</div>
            		<div className="col-md-8">
            			<Typography variant="body1" className="FH">
                    		Carerer Awesome helps you with tips and articles on how to grow and improve your Carerer, tech solutions and academic tutorials,Task Managment, managing monry and college tips on how to stay focused etc, we have a Blog with Categories from different industry espacially from the tech.
                  		</Typography>
            		</div>
            	</div>
            </div>
        )
    }
}

export default LandingPageStep4
