import React, { Component } from 'react';
import DashBoard from "../../components/DashBoard/DashBoard";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from "next/link";

const styles = (theme) =>({
      media: {
        height: "10.3125rem",
      },
})
export class AllBlogPosts extends Component {
    render() {
        const {classes, user:{ blogPosts, loading } } = this.props;
        return (
           <DashBoard>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                            <Typography variant="h5" gutterBottom>Blog Posts</Typography>
                       </div>
                     {
                       !loading ?
                       <>
                         {
                           blogPosts ? 
                           <>
                           {
                               blogPosts.map((blog) =>(
                                   <>                                  
                         <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
                         <Card className="card-post">      
        <CardMedia
          className={classes.media}
          image={blog.thumbnail}
          title={blog.userId}
        />
        <CardContent>
          <Link href={`/blog/${blog.title.replace(/\s+/g, '-')}/${blog.blogId}`}>
          <a>
          <Typography gutterBottom variant="h5" component="h3">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {blog.description}
          </Typography>
          </a>
          </Link>
        </CardContent>      
      <CardActions>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Button size="small" color="primary">
          Share
        </Button>
        <Link href={`/admin/editBlog/${blog.blogId}`}>
        <a>
        <Button size="small" color="primary">
          Edit
        </Button>
        </a></Link>
      </CardActions>
    </Card>
                         </div>
                                   </>
                               ))
                           }
                           </>:
                           <div className="col-md-12 text-center">
                               
                               <Typography variant="h5" gutterBottom>No blog Post Yet</Typography>
                           </div>
                       }
                       </>:
                       <h2>Loading ...</h2>
                     }
                   </div>
               </div>
           </DashBoard>
        )
    }
}
AllBlogPosts.propTypes ={
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})
export default connect(mapStateToProps)(withStyles(styles)(AllBlogPosts))