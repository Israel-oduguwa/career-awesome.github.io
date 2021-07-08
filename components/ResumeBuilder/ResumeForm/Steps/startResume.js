import React from 'react'

export class startResume extends React.Component {
	render() {
		const{ nextStep } = this.props
		return (
			<div>
				<button onClick={nextStep}>Next</button>
			</div>
		)
	}
}

export default startResume