import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import Head from 'next/head';
// export async function getStaticPaths(){

// }

export const getServerSideProps = async ({params}) =>{
    const res = await fetch(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/blogUser/${params.id}`)
    const data = await res.json();
   
    return{
        props:{
            data,           
        }
    }
    
}
export class UserName extends Component {
    
    render() {
        const {blogPosts, user } = this.props.data;
        return (
            <div>
                <Head>
                    <title>
                        {user.fullName}
                    </title>
                </Head>
               <ul>
                   {
                       blogPosts.map((blog) => (
                        <li key={blog.blogId}>
                            {blog.title}
                        </li>
                    ))
                   }
                  
               </ul>
            </div>
        )
    }
}

export default UserName
