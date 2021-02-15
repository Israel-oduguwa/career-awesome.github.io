import React from 'react';
import {withRouter, useRouter} from "next/router";
import { withStyles } from '@material-ui/core/styles';
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
		return (
			<div>
				{
					!this.props.router.isFallback ?
					<>
					{
						console.log(this.props.job.jobTitle)
					}
					</>
					:
					<></>
				}
			</div>
		)
	}
}

export default ((withRouter)(withStyles(styled)(jobPage)))