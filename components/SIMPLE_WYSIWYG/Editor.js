import React from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css'; 

class renderQuillReact extends React.Component {

    modules = {
        toolbar: [
        //   [{ 'header': '1'}, { 'header': '2'},],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
          ['bold'],
         
          [{'list': 'bullet'}, 
    
          {'indent': '-1'}, {'indent': '+1'}, 
         ],
            ['link'],         
          [{ 'align': [] }],  
        ],
       
       

      
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
    
    formats = [
        'header', 'font', 'size','clean','direction','script','code-block',
        'align','link',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',  'indent',
        
      ]
      
    render () {
        const { body, handleChange, placeholder } = this.props
      return (

    <ReactQuill 
    theme="snow"
    modules={this.modules}
    formats={this.formats}
    bounds={'.app'}
    value={body}
    onChange={handleChange}
    placeholder={placeholder}
   />
      )
    }
  }

export default renderQuillReact;