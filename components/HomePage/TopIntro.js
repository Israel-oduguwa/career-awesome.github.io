import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Fade, Bounce } from "react-awesome-reveal";
import SearchJob from "../SearchJob";
import Link from 'next/link';
export class TopIntro extends Component {
    render() {
        // const {classes} = this.props
        return (
           <div className="introContainer">
               <Fade direction="down" duration={500} cascade>
               <Typography variant="h2" className="topPhrase">
                 Build Your Career and Find amazing Jobs
               </Typography>
            <Typography gutterBottom variant="body1" className="subtext mb-4">
                The best online platform for advanceing and prepareing for you carreer, Create a Resume and look for Job in 10 minutes
            </Typography>
               </Fade>
              
            <br/>
            <Bounce delay={600}>           
        <Button  variant="contained" size ="large" style={{boxShadow: "rgb(178 186 230) 0px 10px 25px", borderRadius:"5px",boxShadow: "rgb(178 186 230) 0px 10px 25px"}} color="primary">
         Get Started for Free
        </Button>    

            </Bounce>
            
        <div className="mt-4">
          <Typography gutterBottom variant="subtitle2">
                This is completly free, no credit card required for employers  
            <Link href="/admin/postJob">
             <a> <span> Post a job here! </span> </a> 
            </Link>
            </Typography>
          
        </div>
           </div>
        )
    }
}

export default TopIntro
