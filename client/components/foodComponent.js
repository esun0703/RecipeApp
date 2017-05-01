import React from "react";

export default class FoodComponent extends React.Component{

	
	render(){
		return(
			// const {name,expiration}=this.props??
			<div className="row">
				<div className="foods">
					<span className="foodName">Food Example</span>
					<span className="expirationDate">#Weeks #Days</span>
				</div>
			</div>
		)
	}
}