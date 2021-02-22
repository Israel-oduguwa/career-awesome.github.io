import React from 'react'

export class SimilarJob extends React.Component {
	render() {
		const {data} = this.props;
		return (
			<div>
				{console.log(data)}
			</div>
		)
	}
}

export default SimilarJob