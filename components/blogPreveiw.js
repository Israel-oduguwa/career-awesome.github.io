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
            <>
               
               {
                                    data ? 
                                   <>
                                   {
                                       data.map((blog) =>{
                                           let urlTitle = blog.title;
                                           urlTitle = urlTitle.replace(/\s+/g, '-');
                                           const url = `/blog/${urlTitle}/${blog.blogId}`
                                           return(
                                           
                                           <div key={blog.blogId} className="col-md-4">
                                               <div class="card">
                                               <Link href={url}>
                                               <a>
                                                <img class="card-img-top" src={blog.thumbnail} alt="..."/>
                                               </a>
                                               </Link>
                                                <div class="card-body">
                                                <h4 class="card-title">{blog.title}</h4>
                                                <p class="card-text">{blog.description}</p>
                                                <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`}>
                                              <a>
                                                <div className="preview-date">
                                                    <div className="author">
                                                    <Avatar className="blogPageAvatar" alt={blog.fullName} src={blog.AuthorImage} />
                                                    <p class="card-text"><small class="text-muted ro">{blog.fullName}</small></p>
                                                    </div>
                                                    <div className="list-preview">
                                                    <p class="card-text"><small class="text-muted">{dayjs(blog.dataCreated).format('ll')}</small></p>
                                                    </div>
                                                </div>
                                                </a>
                                                </Link>
                                                </div>
                                            </div>
                                            </div>


                                              
                                      
                                           )
                                       })
                                   }
                                </>: 
                                <h2>Loading ...</h2>
                               }
             
            </>
        )
    }
}

export default BlogPreview
