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
import Pagination from "@material-ui/lab/Pagination";
import dayjs from "dayjs";
import Skeleton from '@material-ui/lab/Skeleton';

import Head from 'next/head';
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import Box from '@material-ui/core/Box';
const styles = (theme) =>({

})
const BlogPage = (props) =>{
  
 const { data, error} = useSWR("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllBlog");
 const itemsPerPage = 10;
 const [page, setPage] = React.useState(1);
 const myDivToFocus = React.createRef();

const handleChange = (event, value) => {
 setPage(value);
 if(myDivToFocus.current){
    myDivToFocus.current.scrollIntoView({ 
       behavior: "smooth", 
       block: "start"
    })
}
};
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
       
        <div className="conner">
        <div ref={myDivToFocus}  className="row">
                        <div className="col-md-12">
                           {
                                data ? 
                               <div>
                               {
                                   data.slice((page -1) * itemsPerPage, page* itemsPerPage).map((blog) =>{
                                       let urlTitle = blog.title;
                                       urlTitle = urlTitle.replace(/\s+/g, '-');
                                       const url = `blog/${urlTitle}/${blog.blogId}`
                                       return(
                                    <React.Fragment key={blog.blogId}>
                                        <div class="card mb-4" >
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
                        <div className="col-md-12">
                        <Box component="span">
        <Pagination
          count={ Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          variant="outlined" shape="rounded"
          showFirstButton
          showLastButton
        //   classes={{ ul: classes.paginator }}
        />
      </Box>
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
            <Head>
            <title>Blog</title>

        </Head>
        <div className="blogHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Typography variant="h4" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod!
                            </Typography>
                            <Typography variant="h6">
                            Mockplus - Design Faster. Collaborate Better.
                             </Typography>
                        </div>                       
                    </div>
                </div>
            </div>
            <div className="container blogList">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-left-blog">
                        <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="https://cdn-pgm.netdna-ssl.com/wp-content/uploads/2021/01/xPixelgrade_Renovarepart655-1900x1264.jpg.pagespeed.ic.pJlcT4cHop.webp" class="card-img" alt="..."/>
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Best Easy Recipes for Breakfast Menus</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                <div className="ar">
                                                <Avatar  alt='...' src="http://demo.niceverynice.com/parrot/img/user5.jpg" />
                                                <p class="card-text"><small class="text-muted ro">Elon musk</small></p>
                                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card bg-dark text-white">
                    <img src="https://pixelgrade.com/wp-content/uploads/2020/12/Own-your-website-content-to-control-the-experience.jpg" class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                    </div>
                    </div>
                    {
                        Array.from({ length:3}).map((item, index) =>(
                            <div key={item} className="col-md-4">
                                <div class="card mb-3">
                                <img src="https://pixelgrade.com/wp-content/uploads/2020/08/Helping-an-educational-center-build-a-digital-home-1.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-md-8">
                  <div className="top-left-blog">

                  </div>

    <BlogPage display={true}/>
                    </div>
                    <div className="col-md-4 ">
                        <div className="sticky-top">
                        {
        Array.from({length: 2}).map((item, index) =>(
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
                        </div>
                  
                    </div>
                </div>
            
            </div>
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



