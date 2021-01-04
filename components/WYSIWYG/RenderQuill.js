import React from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(
  () => import('./RenderReactQuill'),
  { ssr: false, loading: () => <p>Loading WYSIWYG</p> },
)

class RenderQuill extends React.Component {
  render () {
    const { body, handleChange } = this.props
    return (
        <QuillNoSSRWrapper body={body} handleChange={handleChange}/>
    )
  }
}


export default RenderQuill