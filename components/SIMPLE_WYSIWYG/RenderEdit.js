import React from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(
  () => import('./Editor'),
  { ssr: false, loading: () => <p>Loading WYSIWYG</p> },
)

export class RenderEdit extends React.Component {
	render () {
    const { body, handleChange } = this.props
    return (
        <QuillNoSSRWrapper body={body} handleChange={handleChange}/>
    )
  }
}

export default RenderEdit