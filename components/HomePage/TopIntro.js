import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Fade, Bounce } from "react-awesome-reveal";
import SearchJob from "../SearchJob";

export class TopIntro extends Component {
    render() {
        // const {classes} = this.props
        return (
           <div className="introContainer">
               <Fade direction="down" duration={500} cascade>
               <Typography gutterBottom variant="h2">
                   Lorem ipsum dolor sit amet 
               </Typography>
            <Typography gutterBottom variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, iusto!.               
            </Typography>
               </Fade>
            <br/>
           <div className="mb-4 mt-3">
             <SearchJob/>
           </div> 

            <Bounce delay={600}>           
        <Button  variant="contained" size ="large" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)", borderRadius:"5px",boxShadow: "0 10px 25px rgb(253 83 143)"}} color="secondary">
          Find Jobs
        </Button>    
            </Bounce>
           </div>
        )
    }
}

export default TopIntro
