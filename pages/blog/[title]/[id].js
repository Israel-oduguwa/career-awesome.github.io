import React, { Component } from 'react'
import {withRouter, useRouter} from "next/router";
import {withRouterProps} from "next/dist/client/with-router"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { getUserData } from "../../../Redux/Actions/userAction";
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import Divider from "@material-ui/core/Divider";
import Chip from '@material-ui/core/Chip';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
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
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon, 
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon, 
  WhatsappIcon,
  
} from "react-share";
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import fetch from "isomorphic-unfetch";
import Head from 'next/head';
import useSWR from 'swr';
import ArticleBody from "../../../components/articleBody";
import NavBar from "../../../components/NavBar/NavBar";
import Comment from "../../../components/Likes_Comments/Comment";
import LikeButton from "../../../components/Likes_Comments/likeButton";


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
      return  <BlogPreview data={data}/>       
          
     }
    
  }
 
export class BlogPage extends Component  {
  state={
    open:false,
    hidden:false,
    comment:"",
    likeIconClicked:false,
    commentCount:"",
    blogId:"",
    likeCount:"",
    likeData:"",
    unlikeData:"",
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
      axios
      .get(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getBlog/${this.props.blog.blogId}/like`)
      .then((res) => {
        this.props.getUserData()
        console.log(res)
        this.setState({
          likeData:res.data,
          likeIconClicked:true,
          likeCount:likeCount + 1
        })
      })
      .catch((err) => console.log(err));
    }
  }
  handleUnlike = () =>{
    this.props.getUserData()
    if(this.props.user.authenticated){
      axios
      .get(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/getBlog/${this.props.blog.blogId}/unlike`)
      .then((res) => {
        console.log(res)
        this.setState({
          unlikeData:res.data,
          likeData:"",
          likeIconClicked:false,
          likeCount:likeCount - 1
        })
      })
      .catch((err) => console.log(err));
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
        
        let actions;
        if(!this.props.router.isFallback){
           actions =  [
            {icon:  <FacebookShareButton
              url={`/blog/${this.props.blog.title.replace(/\s+/g, '-')}/${this.props.blog.blogId}`}
              quote={this.props.blog.title}>
              <FacebookIcon size={34} round />
            </FacebookShareButton>
            , name: 'Facebook'},
            {icon: <TwitterShareButton url="https://www.google.com"  quote={this.props.blog.title} >
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
       
        const { blog, classes }= this.props;
        const state = this.state;
        // const cat = ['Job Interviews', 'Career Advice', 'Resume Help', 'CV Help', 'Cover Letter Help', 'Ui Design Trends']
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
                <NavBar>
                  <div className="wrapper">
                    <div className="container-fluid top">
                      <div className="row">
                        <div className="col-md-1 ">
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
                        <div className="col-sm-12 col-lg-8 topArticle">
                      <div className="blog-detail">
                      <ArticleBody hoverSet={this.hoverSet} blogUtils={blog} blog={this.props.blog}/>
                    <div className="co">
                      <LikeButton blog={blog} cond={this.props.router.isFallback} like={this.handleLike} unlike={this.handleUnlike} state={state} /> likes : {this.state.likeCount}
                    </div>
                      </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 top2">
                       <div className="sticky-top">
                      
                       <div className={classes.tags}>
                         {
                           blog.category.map((cat, index) =>(
                             <Chip label={cat} key={index} clickable/>
                           ))
                         }
                       </div>
                       <div class="bc-banner text-center">
   <a href="http://hubs.to/ppTGS" onclick="ga('send', 'event', 'BC-banner', 'click', 'hubspot marketing signup');">
   
   <div class="bc-banner-body">
      <h4>Start Collecting More Leads in Minutes</h4> 
      <p>Best Prototyping Tool for Mobile, Web and Desktop Apps.</p>

      <span class="btn btn-primary">Sign Up For Free</span>
       
   </div>
      
<img src="https://www.hubspot.com/hs-fs/hubfs/lead-capture-3-1.jpg?width=1800&name=lead-capture-3-1.jpg" alt="HubSpot Marketing Free" class="bc-banner-cover img-responsive"/>
      
      
      </a>
</div>
                       </div>
                        </div>
                      
                      </div>
                     <div className="container top">
                     <div className="row">
                      <div className="col-md-12 col-lg-12">
                      <Comment blogId={blog.blogId} submitComment={this.submitComment} handleComment={this.handleComment} comments={this.state.comment} commentCount={this.state.commentCount}/>                   
                    </div>
                    <div className="col-md-12">
                    <Typography gutterBottom variant="h6">
                    Related posts
                    </Typography>
                    <Divider/> 
                    </div>
                    <SimilarBlog display={true}/>
                      </div>
                     </div>
                    </div>
                   
                    
                    <Button onClick={this.handleVisibility} style={{display:"none"}}>Toggle Speed Dial</Button>
      <SpeedDial
       
      
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={this.state.hidden}
        icon={<ShareIcon openIcon={<CloseIcon/>} />}
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
  getUserData:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})

export default connect(mapStateToProps,  {getUserData})((withRouter)(withStyles(styled)(BlogPage)))
