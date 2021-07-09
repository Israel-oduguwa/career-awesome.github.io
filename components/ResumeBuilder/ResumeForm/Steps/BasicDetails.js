import React from 'react'

export class BasicDetails extends React.Component {
	render() {
		const {nextStep, PrevStep} = this.props
		return (
			<div>
				This is a boy
				<button onClick={PrevStep}>Back</button>
			</div>
		)
	}
}

export default BasicDetails