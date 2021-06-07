import React, { Component } from 'react';
import Interweave from "interweave";
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/LocalizedFormat";
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
export class articleBody extends Component {
    render() {
        const {blog, blogUtils} = this.props;
        const actions = [
            {icon:  <FacebookShareButton
              url={`/blog/${this.props.blog.title.replace(/\s+/g, '-')}/${this.props.blog.blogId}`}
              quote={this.props.blog.title}>
              <FacebookIcon size={28} round />
            </FacebookShareButton>
            , name: 'Facebook'},
            {icon: <TwitterShareButton url="https://www.google.com"  quote={this.props.blog.title} >
               <TwitterIcon size={28} round />
            </TwitterShareButton> , name: 'Twitter'},
            {icon: <WhatsappShareButton url="">
              <WhatsappIcon size={28} round />
            </WhatsappShareButton>, name: 'WhatsApp'},
            {icon: <LinkedinShareButton url="">
              <LinkedinIcon size={28} round />
            </LinkedinShareButton>, name: 'WhatsApp'},
            {icon: <TelegramShareButton>
              <TelegramIcon size={28} round />
            </TelegramShareButton>, name: 'Telegram'},
            {icon: <EmailShareButton>
              <EmailIcon size={28} round />
            </EmailShareButton>, name: 'E-mail'}
          ];
        dayjs.extend(LocalizedFormat)
        return (
           <>
           
                   <div className="article-info">
                       <div className="article-bread bottom">
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
                            <Typography variant="h3" color="textPrimary">{blog.title}</Typography>
                        </Breadcrumbs>
                       </div>
                  
                    
                    <div className="km">
                     <Link href={`/user/${blog.userId}/${blog.fullName.replace(/\s+/g, '-')}`} >
                         <a>
                     <div className="ar">
                  <Avatar className="blogPageAvatar2" alt={blog.fullName} src={blog.AuthorImage} />                         
                    <div className="in">
                    <Typography variant="subtitle2"> By {blog.fullName}</Typography>
                    {
                        blog.updatedDate ?
                        <Typography variant="subtitle2">Updated on {dayjs(blog.updatedDate).format('ll')}</Typography>:
                        <Typography variant="subtitle2">First Published on {dayjs(blog.dataCreated).format('ll')}</Typography>
                    }
                    </div>
                   </div>
                          </a> 
                            </Link>
                       </div> 
                       <div className="social-shares sticky-top">
            {
                actions.map((action) =>(
                  <>
                  <span className="social-icon-blogs" >
                  {action.icon}
                  </span>
                  </>
                ))
              }
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
