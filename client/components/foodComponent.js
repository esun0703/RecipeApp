import React from "react";
import { browserHistory } from 'react-router';

export default class FoodComponent extends React.Component{

	handleClick() {
	  console.log("hello")
	  //Routes to /choices
	}
	
	render(){
		return(
			// const {name,expiration}=this.props??
			<div className="row">
				<div className="foods" onClick={this.handleClick}>
					<span className="foodName">Food Example</span>
					<span className="expirationDate">#Weeks #Days</span>
				</div>
			</div>
		)
	}
}