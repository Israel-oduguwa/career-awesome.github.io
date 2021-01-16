import React, { Component } from 'react';
import Interweave from "interweave";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
export class articleBody extends Component {
    render() {
        const {blog, blogUtils} = this.props;
        dayjs.extend(LocalizedFormat)
        return (
           <>
           
                   <div className="article-info">
                       <div className="article-bread">
                       <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            <Link href="/">
                            <a>
                            Home
                            </a>
                            </Link>
                            <Link href="/blog">
                            <a>
                                Blog
                            </a>
                            </Link>
                            <Typography color="textPrimary">{blog.title}</Typography>
                        </Breadcrumbs>
                       </div>
                   <div className="the-title">
                        <Typography variant="h3" gutterBottom>
                          {blog.title}

                        </Typography>
                    </div>
                    
                    <div className="km">
                     <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`} >
                         <a>
                     <div className="ar">
                  <Avatar className="blogPageAvatar2" alt={blog.fullName} src={blog.AuthorImage} />                         
                    <div className="in">
                    <Typography variant="subtitle2">WRITTEN BY {blog.fullName}</Typography>
                    <Typography variant="subtitle2">{dayjs(blog.dataCreated).format('ll')}</Typography>
                    </div>
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
              
           </>
        )
    }
}

export default articleBody
