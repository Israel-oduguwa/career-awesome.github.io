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
                   We help you develop your career!
               </Typography>
            <Typography gutterBottom variant="body1" className="subtext">
                by providing you with the essential tools and advice you need to advance you career 
            </Typography>
               </Fade>
            <br/>
           <div className="mb-4 mt-3">
             <SearchJob/>
           </div> +

            <Bounce delay={600}>           
        <Button  variant="contained" size ="large" style={{boxShadow: "rgb(178 186 230) 0px 10px 25px", borderRadius:"5px",boxShadow: "rgb(178 186 230) 0px 10px 25px"}} color="primary">
         Get Started
        </Button>    
            </Bounce>
        <div className="mt-4">
          for employers  
            <Link href="/admin/postJob">
             <a> <span>Post a job </span> </a> 
            </Link>
        </div>
           </div>
        )
    }
}

export default TopIntro
