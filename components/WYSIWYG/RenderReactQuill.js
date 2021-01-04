import React from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css'; 
Quill.register('modules/blotFormatter', BlotFormatter);
import BlotFormatter from 'quill-blot-formatter';

class renderQuillReact extends React.Component {

    modules = {
        toolbar: [
        //   [{ 'header': '1'}, { 'header': '2'},],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'blockquote','code-block'],
         
          [{'list': 'ordered'}, {'list': 'bullet'}, 
    
          {'indent': '-1'}, {'indent': '+1'}, 
         ],
         [{ 'direction': 'rtl' }], 
         [{ 'font': [] }],
         [{ 'script': 'sub'}, { 'script': 'super' }],
          ['link', 'image', 'video'],
         
          [{ 'color': [] }, { 'background': [] }],  
          [{ 'align': [] }],
          ['clean']      
        ],
       
        // imageResize: {
        //     parchment: Quill.import('parchment')
        //     // See optional "config" below
        // },

        blotFormatter: {
           
            },
          
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
    
    formats = [
        'header', 'font', 'size','clean','direction','script','video','code-block',
        'align','image','link',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',  'indent',
        'color', 'background'
      ]
      
    render () {
        const { body, handleChange } = this.props
      return (

    <ReactQuill 
    theme="snow"
    modules={this.modules}
    formats={this.formats}
    bounds={'.app'}
    value={body}
    onChange={handleChange}
    placeholder=""
   />
      )
    }
  }

export default renderQuillReact;