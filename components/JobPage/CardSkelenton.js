import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export class CardSkelenton extends React.Component {
	render() {
		return (
			<>
				<div className="row mt-4">
				{
					 Array.from({length: 8}).map((item, index) => (
					 	<div className="col-md-4" key={index}>
					 		<Card className="jobCard">
                                    <CardActionArea>
                                        <CardContent>
                                            <div className="row">
                                                <div className="col-3">
                                                    <Skeleton variant="rect" height="20px" className="rounded" />
                                                </div>
                                                <div className="col-9">
                                                    <div className="company">
                                                    <Skeleton width="100%"/>
                                                    <Skeleton width="100%"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <Skeleton variant="rect" height="100px" />
                                                </div>  
                                            </div>
                                        </CardContent>  
                                      </CardActionArea>
                                    </Card>
					 	</div>
					 ))	
				}
				</div>
			</>
		)
	}
}

export default CardSkelenton


// <Skeleton variant="rect" height="150px" />


