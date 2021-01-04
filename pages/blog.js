import React, { Component } from 'react';
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
// import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Image from "next/image"
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
// import { getAllBlog } from  "../Redux/Actions/dataAction";
import PropTypes from "prop-types";
import Head from 'next/head';
import styled from './blog.module.css';
import NavBar from "../components/NavBar/NavBar";
import useSWR from 'swr';
const styles = (theme) =>({

})
const BlogPage = (props) =>{
 const { data, error} = useSWR("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllBlog")
if (error) return (
    <div> Server Error Refresh </div>
)
 if(!data) return <div>Loading...</div>
 if(props.display){
     return(
        <div className="LandingPageContainer">
        <NavBar>
        <Head>
            <title>Blog</title>

        </Head>
       
        <div className="container">
           
            <div className="row">
                <div className="header">This is the blog siyte</div>
                <div className="column-blog"></div>
                <div className="row-blog">
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
                                        <div className="wall">
                                <div className="blog-card">
                                    <div className="rx">
                                        <div className="ry">
                                            <div className="ry-left">
                                                <div className="user-info"></div>
                                               <Link as={url} href="/blog/[title]/[id]">
                                                   <a>
                                               <div className="link" >
                                                    <Typography   variant="h6" gutterBottom>
                                                   {blog.title}
                                                    </Typography>
                                                    <div className="description">
                                                        <Typography variant="subtitle2">
                                                        {blog.description}
                                                        </Typography>
                                                    </div>
                                                </div>
                                                </a>
                                                </Link>
                                            </div>
                                            <div className="ry-right">
                                                <img width={70} height={80} src={blog.thumbnail} alt={blog.userId}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                   </React.Fragment>
                                       )
                                   })
                               }
                            </div>: <h2>Loading ...</h2>
                           }
                        </div>
                        <div className="col-md-4">
                        okay the space i want for postiion sticky to stcik
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </NavBar>
    </div>
     )
 }
} 
// export async function getServerSideProps() {
//     const res = await fetch("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllBlog")
//     const data = await res.json()
//     // console.log(data);
//     return { props: { blogs: data } };
//   }
export class Blog extends Component {
    
   
    render() {
        const { classes } = this.props
        
        return (
            <>
            <BlogPage display={true}/>
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