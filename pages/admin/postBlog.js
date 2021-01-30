import React, { Component } from 'react';
// import './blog.css';
import 'react-quill/dist/quill.snow.css'; 
import Skeleton from '@material-ui/lab/Skeleton';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Card from "@material-ui/core/Card";
import UserIcons from "../../components/NavBar/UserIcons";
import Paper from '@material-ui/core/Paper';
import Head from "next/head";
import Link from "next/link";
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { connect } from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import {withRouter} from "next/router";
import { postBlogs } from  "../../Redux/Actions/dataAction";
import CancelIcon from '@material-ui/icons/Cancel';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from "axios";
import RenderQuill from "../../components/WYSIWYG/RenderQuill";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const styles = (theme) =>({
   grow:{
      flexGrow: 1,
    },
     NavBar:{ 
        //  boxShadow: "none!important",
        backgroundColor:"#fff",
        zIndex:"998",
        // boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
        boxShadow: "rgb(220, 220, 220) 0px 2px 10px",
        // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    },
   
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        marginTop:"2.35em" 
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      input: {
        display: 'none',
      },
});
export class postBlog extends Component {
    state={
        body:"",
        loading:false,
        language:"",
        category:[],
        description:"",
        title:"",
        thumbnailImage:"",
        imageName:"",
        caption:""
    }
    type = (value) =>{
        this.setState({
            body:value
        })
    }
    handleChange= (e) =>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    handlePost = () =>{
      // localStorage.setItem('blog', this.state.body);
      const newBlog ={
        body:this.state.body,
        title:this.state.title,
        category:this.state.category,
        description:this.state.description,
        thumbnail:this.state.thumbnailImage
      }
      const Router  = this.props.router
      this.props.postBlogs(newBlog, Router);
      
  }
    handlePostImageChange = (e) =>{
      this.setState({
          loading:true
      })   
       const image = e.target.files[0];
      const formData = new FormData();
      formData.append('image', image, image.name);
     
     
      axios.post('/create-pdf/resumeImage' , formData)
      .then((res) =>{
          this.setState({
              thumbnailImage:res.data.url,
            imageName:res.data.imageName,
              loading:false
          })
         
      })
      .catch((err) =>{
          console.log(err)
      })
   }
   PostTimelineImage = (e) =>{
    const file = document.getElementById("postImage");
     file.click()
   
 }
  
    
    addCategory = (e) =>{
        const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.category.find(category => category.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ category: [...this.state.category, val.toLowerCase()]});
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.deleteCat(this.state.category.length - 1);
    }
    }
    deleteCat = (index) =>{
        const category = [...this.state.category]
        category.splice(index, 1)
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        this.setState({
            category
        })
    }
  
      render() {
        const { classes, user:{credentials:{userImage, fullName}} } = this.props; 
        const  body  = this.state.body;
         
        return(
          
            <>
            <Head>
            <title>
            Post Blog</title>
            </Head>
            <AppBar className={classes.NavBar}>
                <Toolbar>
                    <Link href="/admin/blogPosts">
                    <a>
                    <IconButton>
                    <ArrowBackIcon/>
                    </IconButton>
                    </a>
                    </Link>

                    <Typography color="primary" variant="h6">Logo</Typography>
                     <div className={classes.grow} />
                     <Typography color="primary" className="noMobile" variant="subtitle2">Draft in {fullName} </Typography>

                     <IconButton><EmojiObjectsIcon/></IconButton>
                    <UserIcons/>
                </Toolbar>
            </AppBar>
            <div className="container-fluid container2">
                <div className="row">
                    <div className="col-md-9 noPadding">
                    <div className="title-box">
                    <TextField id="title" label="Title" name="title" onChange={this.handleChange} variant="outlined" fullWidth />
                    </div>
                    <br/>
                  <div className="rich-text">
                <div className="rich-text-wall">
                {
                    typeof window !== 'undefined'?
                    <RenderQuill body={body} handleChange={this.type} />:
                    <>
                     <Skeleton height={30} width="100%" />
                    <div style={{height :"70vh"}}>

                    <Skeleton variant="rect" height="100%"/></div>
                    </>                }
            
                </div>
                  </div>
                    </div>
         <div className="col-md-3">
             <div className="right-panel">
 
                 <div className="meta-wall">
                    <div className="row">
                    <div className="col-md-6 col-sm-6 ">
                         <div className="language">
                             <Select name="language" id="language" label="language">
                             <MenuItem value="English">English</MenuItem>
                              <MenuItem value="French">French</MenuItem>
                             </Select>
                         </div>
                     </div>
                     <div className="col-md-6 col-sm-6 noMobile">
                         <div className="publish">
                         <Button onClick={this.handlePost} variant="contained" color="primary" endIcon={<ExpandMoreOutlinedIcon/>} >
                         Publish
                         </Button> 
                        
                         </div>
                     </div>
                   
                           <div className="col-md-12 scheme-input">
                           <Typography variant="subtitle" gutterBottom>Description</Typography>
                             <TextareaAutosize
       onChange={this.handleChange}
       name="description"
       aria-label="maximum height"
       placeholder="Short description of the blog"
     //   defaultValue="L
     />
                           </div>
                       <div className="col-md-12 cont">
                       <div className="categories">
                       <Typography variant="subtitle" gutterBottom >Category</Typography>
                         <Paper component="ul" className={classes.root}>
                         {
                             this.state.category.map((cat, index) =>(
                                 <li key={index}>
                                 <Chip
                                  
                                   label={cat}
                                   onDelete={() => this.deleteCat(index)}
                                   className={classes.chip}
                                 />
                               </li>
                             ))
                         }
     <TextField className="categoryText" label="New category" onKeyDown={this.addCategory} ref={c => { this.tagInput = c ; }}   id="standard-size-small"  size="small" />
     </Paper>
 
                         </div>
                       </div>
                        <div className="col-md-12 conts">
                        <Typography variant="subtitle" gutterBottom>Thumbnail Image</Typography>

                                                 <div className=" cont mb-4">
                         <TextField label="Thumbnail Image Link" onChange={this.handleChange} name="thumbnailImage" value={this.state.thumbnailImage}  fullWidth variant="outlined" />
                         
                         </div>

                        <input type="file" id="postImage" accept="images/*"
                       className={classes.postImage}
                       multiple
                       onChange={this.handlePostImageChange}
                       hidden="hidden"
                       />
       <label htmlFor="contained-button-file">
         <Button
          onClick={this.PostTimelineImage}  
         variant="contained" color="default" endIcon={<PhotoCamera/>} component="span">
           Upload Image
         </Button>
       </label>
       <br/>
       {
                    this.state.thumbnailImage === "" && !this.state.loading ?
                    <p></p>:
                   this.state.loading  ?
                   <CircularProgress/>:
                    <>
                    <Tooltip title="cancelImage">
                    <IconButton 
                   //  onClick={this.cancelImage}o
                    className={classes.coverButton}>
                        <CancelIcon style={{fontSize:"4vh"}} />
                    </IconButton>
                </Tooltip>
                <Card>
                    <CardMedia
                    image={this.state.thumbnailImage}
                    className="card-image2"/>
                 </Card>
                    </>
                }
                        </div>

                          <div className="col-md-12 mt-4 mb-4">
                         <div className="published noLaptop">
                         <Button onClick={this.handlePost} variant="contained" color="primary" endIcon={<ExpandMoreOutlinedIcon/>} >
                         Publish
                         </Button> 
                        
                         </div>
                         </div>
                    </div>
                 </div>
             </div>
         </div>
                   
                </div>
            </div>
            </>
         )
        
       }
      
    }


postBlog.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
  postBlogs:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})
export default connect(mapStateToProps, { postBlogs })((withRouter)(withStyles(styles)(postBlog)))
// { postBlog }