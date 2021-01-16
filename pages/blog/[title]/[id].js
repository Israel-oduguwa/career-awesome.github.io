import React, { Component } from 'react'
import {withRouter, useRouter} from "next/router";
import {withRouterProps} from "next/dist/client/with-router"
import Link from "next/link";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import Chip from '@material-ui/core/Chip';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';

import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import fetch from "isomorphic-unfetch";
import Head from 'next/head';
import useSWR from 'swr';
import ArticleBody from "../../../components/articleBody";
import NavBar from "../../../components/NavBar/NavBar";
import Comment from "../../../components/Likes_Comments/Comment";

import ButtonGroup from '@material-ui/core/ButtonGroup';
// import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { withStyles } from '@material-ui/core/styles';
// import { getBlog } from  "../Redux/Actions/dataAction";
import Typography from '@material-ui/core/Typography';
import axios from "axios";
// import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import BlogPreview from '../../../components/blogPreveiw';

const styled = (theme) =>({
  tags:{
    display: 'flex',
    justifyContent: 'center',
    marginTop:"5vh",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  speedDial: {
    position: 'fixed',
    bottom:"90px",
    right: theme.spacing(2),

  },
})
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
    open:false,
    hidden:false,
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
 handleVisibility = () => {
    this.setState((prevState) =>({
      hidden: !prevState.hidden
    }))
  };

 handleOpen = () => {
    this.setState({
      open:true
    }) 
  };

 handleClose = () => {
  this.setState({
    open:false
  }) 
  };
    render() {
        // const { router } = this.props;
        const actions = [
          { icon: <FileCopyIcon />, name: 'Copy' },
          { icon: <SaveIcon />, name: 'Save' },
          { icon: <PrintIcon />, name: 'Print' },
          { icon: <ShareIcon />, name: 'Share' },
          { icon: <FavoriteIcon />, name: 'Like' },
        ];
        const { blog, classes }= this.props;
        const cat = ['Job Interviews', 'Career Advice', 'Resume Help', 'CV Help', 'Cover Letter Help', 'Ui Design Trends']
        return (
<>
 { 
    !this.props.router.isFallback ?
    <div className="LandingPageContainer">
                <Head>
                    <title>
                        {this.props.blog.title}
                    </title>
                    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
              </Head>
                <NavBar>
                  <div className="wrapper">
                    <div className="container  top">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                        <ArticleBody hoverSet={this.hoverSet} blogUtils={blog} blog={this.props.blog}/>
                    <div className="co">
                      likes {blog.likeCount}
                    </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 top2">
                       <div className="sticky-top">
                       <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search this blog"/>
                      <div class="input-group-append">
                        <button class="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                       <div className={classes.tags}>
                         {
                           cat.map((cat) =>(
                             <Chip label={cat} clickable/>
                           ))
                         }
                       </div>

                       </div>
                        </div>
                      </div>
                    </div>
                    
                    <Comment blogId={blog.blogId} submitComment={this.submitComment} handleComment={this.handleComment} comments={this.state.comment} commentCount={this.state.commentCount}/>
                    <SimilarBlog display={true}/>
                    <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button>
      <SpeedDial
       
      
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={this.state.hidden}
        icon={<ShareIcon openIcon={<ShareIcon />} />}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        open={this.state.open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={this.handleClose}
          />
        ))}
      </SpeedDial>
                  </div>

                </NavBar>                            
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

export default connect(mapStateToProps)((withRouter)(withStyles(styled)(BlogPage)))
