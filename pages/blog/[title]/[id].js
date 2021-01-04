import React, { Component } from 'react'
import {withRouter, useRouter} from "next/router";
import {withRouterProps} from "next/dist/client/with-router"
import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";
import Head from 'next/head';
import useSWR from 'swr';
import Interweave from "interweave";
import Comment from "../../../components/Likes_Comments/Comment"
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { withStyles } from '@material-ui/core/styles';
// import { getBlog } from  "../Redux/Actions/dataAction";
import Typography from '@material-ui/core/Typography';
import axios from "axios";
// import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import BlogPreview from '../../../components/blogPreveiw';

// export default function blog({blog}){
//     const router = useRouter();
//     if(!router.isFallback && !blog){
//         return <div>ERROR 404</div>
//     }
//     return(
// <>

// </>
//     )
// }
export async function getStaticProps({params}) {
    const id  = params.id
    const res = await fetch(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getBlog/${id}`)
    const data = await res.json()
    // console.log(data);
    return { props: { blog: data } };
  }

  export async function getStaticPaths() {
    const res = await fetch("https://us-central1-resume-builder-startup.cloudfunctions.net/api/getAllBlog")
    const data = await res.json()
    return{ 
        paths:data? data.map((blog) =>({
            params:{
                id:blog.blogId,
                title:blog.title
            }
        })) : [],
        fallback:true
      };
  }
  
  const SimilarBlog = (props) =>{

    const router = useRouter()
    const id  = router.query.id
    const { data, error } = useSWR(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/categoryBlog/${id}`)

    if (error) return <div></div>
    if(!data) return <div>LOading...</div>

     if(props.display){
      return (
        <div>
          <BlogPreview data={data}/>       
        </div>  
      )    
     }
    
  }
 
export class BlogPage extends Component  {
  state={
    comment:"",
    commentCount:"",
    blogId:"",
    likeCount:"",
    body:"",
    loading:false
  }
 
  componentDidMount(prevProps){
    if(!this.props.router.isFallback){    
        this.setState({
          comment:this.props.blog.comments,
          commentCount:this.props.blog.commentCount,
          likeCount:this.props.blog.likeCount        
        })
      }
  }
  hoverSet = () =>{
    this.setState({
      comment:this.props.blog.comments,
      commentCount:this.props.blog.commentCount,
      likeCount:this.props.blog.likeCount        
    })
  }
  handleLike = () =>{
    if(this.props.user.authenticated){
      
    }
  }
  submitComment = () =>{
   if(this.props.user.authenticated){
    const commentData ={
      body:this.state.body
    }
    this.setState({
      loading:true
    })
    axios
    .post(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getBlog/${this.props.blog.blogId}/comment`, commentData)
    .then((res) =>{     
      this.setState({
        loading:false,
        comment:[...this.state.comment, res.data],
        commentCount:this.state.commentCount+1
      })

    })
    .catch((err) =>{
      console.log(err)
    })
   } 
   else{
    this.props.router.push('/signup')
   }

  }

  handleComment = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
    render() {
        // const { router } = this.props;
        const { blog }= this.props
        return (
<>
 { 
    !this.props.router.isFallback ?
    <div className="LandingPageContainer">
                <Head>
                    <title>
                        {this.props.blog.title}
                    </title>
                </Head>
              {/* <StaticPageNavBar> */}
               {
                 
                 this.props.blog ?
                 <div className="container">
                   <button onClick={this.hoverSet}>SEtState</button>
                 <div className="article">
                 <div className="row justify-hcontent-center">
                   <div className="col-md-8 align-self-center text-center">
                   <div className="the-title">
                        <Typography variant="h4" gutterBottom>
                          {blog.title}
                        </Typography>
                    </div>
                    <div className="ai-and-an">
                     
                    <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`}>
                      <a>
                      <Avatar alt={blog.fullName} src={blog.AuthorImage} />
                    <Typography variant="subtitle2">{blog.fullName}</Typography>
                      </a>
                    </Link>
                    </div>
                   </div>
                    <div className="col-md-8 align-self-center">
                      <div className="tp">
                        <div className="bi">
                          <img src={blog.thumbnail} alt="topImage" className="bi-image"/>
                        </div>
                        <div className="m-a">
                          <Interweave content={blog.body}/>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-md-3">
                      hi
                    </div>
                    <div className="col-md-12">
                      likes {blog.likeCount}
                    </div>
                    <div className="col-md-12">
                      <Comment blogId={blog.blogId} submitComment={this.submitComment} handleComment={this.handleComment} comments={this.state.comment} commentCount={this.state.commentCount}/>
                    </div>
                    <div className="col-md-12">
                      <SimilarBlog display={true}/>
                    </div>
                 </div>
                  </div>
                </div>:
                <h1>Loading</h1>
               }
              {/* </StaticPageNavBar> */}
            </div>:
            <></>
}
</>
        )
    }
}

BlogPage.propTypes ={
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
  
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})

export default connect(mapStateToProps)((withRouter)(BlogPage))
