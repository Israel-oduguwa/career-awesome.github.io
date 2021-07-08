import React from 'react';
import Typography from '@material-ui/core/Typography';
import {AppBar,Toolbar} from '@material-ui/core';
export class resumeNavbar extends React.Component {
	render() {
		return (
			<>
				<AppBar position="static" color="inherit" style={{boxShadow:"rgb(220, 220, 220) 0px 2px 10px"}}>
		            <Toolbar >
		             	<h3>CA</h3>
		             	<p>Start</p>
		            </Toolbar>
        		</AppBar>
			</>
		)
	}
}

export default resumeNavbar
