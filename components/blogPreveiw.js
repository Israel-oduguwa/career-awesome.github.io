import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
export class BlogPreview extends Component {
    render() {
        const { data } =this.props;
        dayjs.extend(LocalizedFormat)
        return (
            <div>
               <div className="col-md-4">
               {
                                    data ? 
                                   <div>
                                   {
                                       data.map((blog) =>{
                                           let urlTitle = blog.title;
                                           urlTitle = urlTitle.replace(/\s+/g, '-');
                                           const url = `/blog/${urlTitle}/${blog.blogId}`
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
                                </div>: <h2>Loading ...</h2>
                               }
               </div>
            </div>
        )
    }
}

export default BlogPreview
