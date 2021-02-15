import React, { Component } from 'react'
import DashBoard from "../../components/DashBoard/DashBoard";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import styles from  "./admin.module.css";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Link from "next/link";
const styled = (theme) =>({
      media: {
        height: "10.3125rem",
      },
})
export class AllJobPost extends Component {
   state={
    open:false,
  }
    handlePopoverOpen = (event) => {
      this.setState({
        open:event.currentTarget
      })
    };
    handlePopoverClose = () => {
      this.setState({
        open:null
      })
    };
    render() {
      const { classes , loading, user:{ jobPosts }} = this.props 
        return(      
          <DashBoard>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12 mt-4 mb-4">
                            <Typography variant="h5" gutterBottom>Job Posts</Typography>
                       </div>
                       {
                        !loading ?
                        <>
                           {
                               jobPosts ? 
                                <>
                           {
                               jobPosts.map((job) =>{
                               
          return(

 <>                                  
                         <div className="mb-4 col-sm-12 col-md-6 col-lg-4">
                         <Card className="card-post">      
        <CardMedia
          className={classes.media}
          image={job.HeaderImage}
          title={job.jobTitle}
        />
        <CardContent>
          <Link href={`/jobs/${job.jobId}/${job.jobTitle.replace(/\s+/g, '-')}`}>
          <a>
          <Typography gutterBottom  className={styles.jobTitle} variant="h6" component="h3">
            {job.jobTitle}
          </Typography>
          <Typography className={styles.jobP} variant="subtitle" color="textSecondary" component="p">
           {job.companyName}
          </Typography>
          </a>
          </Link>
        </CardContent>      
      <CardActions>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Button  onClick={this.handlePopoverOpen} size="small" color="primary">
          Share
        </Button>
         <Popover
                      id="simple-popover"
                      // className={classes.popover}
                      classes={{
                        paper: classes.paper,
                      }}
                      open={this.state.open}
                      anchorEl={this.state.open}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={this.handlePopoverClose}
                      // disableRestoreFocus
                    >
                    <Typography variant="body1">POP over</Typography>
          </Popover>
          <Link href={`/admin/editJob/${job.jobId}`}>
        <a>
        <Button size="small" color="primary">
          Edit
        </Button>
        </a>
        </Link>
      </CardActions>
    </Card>
                         </div>
                         </>
                               )})
                           }
                           </>
                               :
                               <div className="col-md-12 text-center">
                                   <Typography variant="h5" gutterBottom>No Job Post Yet</Typography>
                               </div>
                           }
                       </>
                       :
                       <h2>Loading...</h2>
                       }
                   </div>
               </div>
          </DashBoard>
        )
    }
}
AllJobPost.propTypes ={
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})
export default connect(mapStateToProps)(withStyles(styled)(AllJobPost))
