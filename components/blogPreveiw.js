import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
export class BlogPreview extends Component {
    render() {
        const { data } =this.props
        return (
            <div>
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
                                            <div className="wall">
                                    <div className="blog-card">
                                        <div className="rx">
                                            <div className="ry">
                                                <div className="ry-left">
                                                    <div className="user-info"></div>
                                                   <Link href={url}>
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
        )
    }
}

export default BlogPreview
