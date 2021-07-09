import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ResForm from "../components/ResumeBuilder/ResumeForm/resForm";

export class resumeBuilder extends React.Component {
	render() {
		return (
			<div className="LandingPageContainer">

				<ResForm/>
			</div>
		)
	}
}

export default resumeBuilder 