import React, { Component } from 'react';
import Interweave from "interweave";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
export class articleBody extends Component {
    render() {
        const {blog, blogUtils} = this.props;
        dayjs.extend(LocalizedFormat)
        return (
           <>
           <div className="container top">
               <div className="col-md-9">
                   <div className="article-info">
                   <div className="the-title">
                        <Typography variant="h4" gutterBottom>
                          {blog.title}
                        </Typography>
                    </div>
                    
                    <div className="km">
                     <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`} >
                         <a>
                     <div className="ar">
                  <Avatar alt={blog.fullName} src={blog.AuthorImage} />
                         <p class="card-text"><small class="text-muted ro">{blog.fullName}</small></p>
                         <p class="card-text"><small class="text-muted">{dayjs(blog.dataCreated).format('ll')}</small></p>
                   </div>
                          </a> 
                            </Link>
                       </div>                   
                   </div>
                   <div className="article-body">
                   <div className="m-a">
                          <Interweave content={blog.body}/>
                        </div>
                   </div>
               </div>           
           </div>
           </>
        )
    }
}

export default articleBody
