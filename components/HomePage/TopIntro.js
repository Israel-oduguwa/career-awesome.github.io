import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Fade, Bounce } from "react-awesome-reveal";
import Link from 'next/link';

export class TopIntro extends Component {
    render() {
        return (
           <div className="introContainer">
            <Fade triggerOnce={true} direction="down" duration={500} cascade>
               <Typography variant="h2" className="topPhrase LPTC">
                 Build Your Career and Find amazing Jobs
               </Typography>
                <Typography gutterBottom variant="body1" className="subtext mb-4">
                    The best online platform for advancing and preparing for you carrier, Create a Resume and look for Job in 10 minutes
                </Typography>
            </Fade>
            <br/>
            <Bounce triggerOnce={true} delay={600}>           
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
