import  { Component } from 'react';
import Head from 'next/head'
import Typography from "@material-ui/core/Typography";
import fetch from "isomorphic-unfetch";

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    // console.log(data);
    return { props: { todo: data } };
  }
  
export class ContactUs extends Component {
   state={
       Todo:this.props.todo
   }
    render() {
        return (
            <div>
                <Head>
                    <title>Contact us</title>
                </Head>
                <Typography variant="h4">
                 MaterialUI
                </Typography>
                <ul>
                {
                     this.props.todo.map((todo) =>(
                        <li>{todo.title}</li>
                     ))
                   }
                </ul>
            </div>
        )
    }
}

export default ContactUs
