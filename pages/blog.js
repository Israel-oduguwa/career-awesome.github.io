import React, { Component } from 'react';
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
// import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Image from "next/image"
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import { getAllBlog } from  "../Redux/Actions/dataAction";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Skeleton from '@material-ui/lab/Skeleton';

import Head from 'next/head';
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
const styles = (theme) =>({

})
const BlogPage = (props) =>{
 const { data, error} = useSWR("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllBlog")
if (error) return (
    <div> Server Error Refresh </div>
)
 if(!data) return (
    <>
    {
        Array.from({length: 8}).map((item, index) =>(
            <>
            <div key={index} class="card mb-4" style={{maxWidth:'640px'}}>
            <div class="row no-gutters">
                
                <div class="col-8 col-sm-8">
                <div class="card-body blog-card">
                    <div className="km">
                   
                  <div className="ar">
                   <Skeleton variant="circle" width={25} height={25} />
                    <p class="card-text"><small class="text-muted ro">
                    <Skeleton width="100px"/>
                    </small></p>
                    </div>
                  
                    </div>
                   
                   <h5 class="card-title"><Skeleton width="100%"/></h5>
                    <span class="card-text subtitles"><Skeleton/></span>
                 
                    <p class="card-text"><small class="text-muted"><Skeleton width="100%"/></small></p>
                </div>
                </div>
                <div class="col-4 col-sm-4">
               <Skeleton variant="rect" height="100%" />
                </div> 
            </div>
            </div>
            </>
        ))
    }
</>
 );
 if(props.display){
    dayjs.extend(LocalizedFormat)
     return(
       
        
       
        <div className="con">
        <div className="row">
                        <div className="col-md-8">
                           {
                                data ? 
                               <div>
                               {
                                   data.map((blog) =>{
                                       let urlTitle = blog.title;
                                       urlTitle = urlTitle.replace(/\s+/g, '-');
                                       const url = `blog/${urlTitle}/${blog.blogId}`
                                       return(
                                    <React.Fragment key={blog.blogId}>
                                        <div class="card mb-4" style={{maxWidth:'640px'}}>
                                        <div class="row no-gutters">
                                            
                                            <div class="col-8 col-sm-8">
                                            <div class="card-body blog-card">
                                                <div className="km">
                                               <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`}>
                                              <a>
                                              <div className="ar">
                                                <Avatar className="blogPageAvatar" alt={blog.fullName} src={blog.AuthorImage} />
                                                <p class="card-text"><small class="text-muted ro">{blog.fullName}</small></p>
                                                </div>
                                              </a>
                                                
                                               </Link>
                                                </div>
                                               <Link href={url}>
                                               <a>
                                               <h5 class="card-title">{blog.title}</h5>
                                                <Typography variant="body2" class="card-text subtitles">{blog.description}</Typography>
                                               
                                                </a></Link>
                                                <p class="card-text"><small class="text-muted">{dayjs(blog.dataCreated).format('ll')}</small></p>
                                            </div>
                                            </div>
                                            <div class="col-4 col-sm-4">
                                           <Link href={url}>
                                               <a>
                                               <img src={blog.thumbnail} class="card-img" alt="..."/>
                                               </a>
                                           </Link>
                                            </div> 
                                        </div>
                                        </div>
                                   </React.Fragment>
                                       )
                                   })
                               }
                            </div>: 
                            <>
                            </>
                           }
                        </div>
                        <div className="col-md-4">
                       
                        </div>
                    </div>
        </div>
       
        
  
     )
 }
} 

export class Blog extends Component {
       
    render() {
        const { classes } = this.props
        
        return (
            <>
            
             <div className="LandingPageContainer">
             
            <NavBar>
            <div className="blogHeader">
                <div className="container-fluid">
                    This is the Header
                </div>
            </div>
            <Head>
            <title>Blog</title>

        </Head>
            <BlogPage display={true}/>
            </NavBar>
            </div>
            </>
           
        )
    }
}
Blog.propTypes = {
    classes: PropTypes.object.isRequired,
    // user: PropTypes.object.isRequired,
    // data:PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
   
  }


//   const mapStateToProps = (state) => ({
//     user: state.user,
//     data:state.data
//     // UI: state.UI
//   })
export default (withStyles(styles))(Blog)



