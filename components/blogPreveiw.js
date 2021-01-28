import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
export class BlogPreview extends Component {
    render() {
        const { data } =this.props;
        dayjs.extend(LocalizedFormat)
        return (
            <>
               
               {
                                    data ? 
                                   <>
                                   {
                                       data.map((blog,index) =>{
                                           let urlTitle = blog.title;
                                           urlTitle = urlTitle.replace(/\s+/g, '-');
                                           const url = `/blog/${urlTitle}/${blog.blogId}`
                                           return(
                                           <div class="col-md-4 mt-2 mb-3">
                                            <Card className="previewCard" key={index}>
                                            <CardMedia component="img"
                                            alt="..." height="160"
                                            image={blog.thumbnail}
                                            title={blog.title}/>
                                           <Link href={url}>
                                           <a >
                                            <CardContent>
                                            <Typography gutterBottom variant="h6">
                                            {blog.title}
                                            </Typography>
                                            <Typography variant="body2" className="previewP" color="textSecondary" component="p">
                                            {blog.description}
                                            </Typography>
                                            </CardContent>
                                            <CardActions>
                                            <Link  href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`}>
                                            <a>
                                            <div className="ar">
                                            <Avatar className="blogPageAvatar" alt={blog.fullName} src={blog.AuthorImage} />
                                            <Typography className="ro" variant="subtitle2">
                                            {blog.fullName}</Typography></div></a></Link>

                                            <Typography variant="subtitle2">{dayjs(blog.dataCreated).format('ll')}</Typography>
                                            </CardActions>
                                            </a></Link>
                                            </Card>
                                              
                                      
                                           </div>
                                           
                                           )
                                       })
                                   }
                                </>:
                                <>
                                {
                                  Array.from({length: 3}).map((item, index)=>(
                                  <div class="col-md-4 mt-2 mb-3">
                                            <Card className="previewCard" key={index}>
                                             <div style={{height:"160px"}}>
               <Skeleton variant="rect" height="100%" />
                </div> 
                                            <CardContent>
                                             <h5 class="card-title"><Skeleton width="100%"/></h5>
                                             <span class="card-text subtitles"><Skeleton/></span>
                                            </CardContent>
                                            <CardActions>
                                            <div className="ar">
                   <Skeleton variant="circle" width={25} height={25} />
                    <p class="card-text"><small class="text-muted ro">
                    <Skeleton width="100px"/>
                    </small></p>
                    </div>
                  </CardActions>
                                            </Card>
                                           </div>
                                  ))
                                } 
                                </>
                                
                               }
             
            </>
        )
    }
}

export default BlogPreview
