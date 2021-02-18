import React from 'react';
import {withRouter, useRouter} from "next/router";
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import NavBar from "../../../components/NavBar/NavBar";
import JobDesc from "../../../components/jobDesc";
import JobDescRight from "../../../components/JobDescRight";
import Paper from '@material-ui/core/Paper';
//social Media
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  //Icons
  EmailIcon, FacebookIcon, FacebookMessengerIcon, LinkedinIcon, PinterestIcon,RedditIcon, TelegramIcon, TumblrIcon,TwitterIcon,  WhatsappIcon,
} from "react-share";

const styled = (theme) =>({

})

export async function getStaticProps({params}) {
    const id  = params.id
    const res = await fetch(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getJob/${id}`)
    const data = await res.json()
    // console.log(data);
    return { props: { job: data } };
  }

  export async function getStaticPaths() {
    const res = await fetch("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllJobs")
    const data = await res.json()
    return{ 
        paths:data? data.map((job) =>({
            params:{
                id:job.jobId,
                title:job.jobTitle
            }
        })) : [],
        fallback:true
      };
  }

export class jobPage extends React.Component {
	render() {
		let actions;
        if(!this.props.router.isFallback){
           actions =  [
            {icon:  <FacebookShareButton
              url={`/job/${this.props.job.jobId}/${this.props.job.jobTitle.replace(/\s+/g, '-')}`}
              quote={this.props.job.jobTitle}>
              <FacebookIcon size={34} round />
            </FacebookShareButton>
            , name: 'Facebook'},
            {icon: <TwitterShareButton url="https://www.google.com"  quote={this.props.job.jobTitle} >
               <TwitterIcon size={34} round />
            </TwitterShareButton> , name: 'Twitter'},
            {icon: <WhatsappShareButton url="">
              <WhatsappIcon size={34} round />
            </WhatsappShareButton>, name: 'WhatsApp'},
            {icon: <LinkedinShareButton url="">
              <LinkedinIcon size={34} round />
            </LinkedinShareButton>, name: 'WhatsApp'},
            {icon: <TelegramShareButton>
              <TelegramIcon size={34} round />
            </TelegramShareButton>, name: 'Telegram'},
            {icon: <EmailShareButton>
              <EmailIcon size={34} round />
            </EmailShareButton>, name: 'E-mail'}
          ];
        }else{
          actions = "social Media"
        }
		return (
			<div>
				{
					!this.props.router.isFallback ?
					<>
					 <div className="LandingPageContainer">
					 <NavBar>
					 	<Head>
                    <title>
                        {this.props.job.jobTitle}
                    </title>
                    
              			</Head>
              			<div className="queryPanel">
                			<Paper elevation={2} >
                    			Qury Panel
                			</Paper>
           			 </div>
              			<div className="wrapper">
                    		<div className="container-fluid top">
                      			<div className="row">
                      				<div className="col-md-1">
                      					<div className="social-share sticky-top">
								            {
								                actions.map((action) =>(
								                  <>
								                  <span className="social-icon-blog" >
								                  {action.icon}
								                  </span>
								                  </>
								                ))
								              }
            							</div>
                      				</div>
                      				<div className="col-sm-12 col-lg-7 topArticle">
                      					<div className="blog-detail">
                      						<JobDesc job={this.props.job}/>
                      					</div>
                      				</div>
                      				<div className="col-lg-4">
                      					<JobDescRight job={this.props.job} />
                      				</div>
                      			</div>
                      		</div>
                      </div>


					 </NavBar>
					 </div>
					</>
					:
					<></>
				}
			</div>
		)
	}
}

export default ((withRouter)(withStyles(styled)(jobPage)))