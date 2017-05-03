import React from "react";
import { browserHistory } from 'react-router';

export default class FoodComponent extends React.Component{

	handleRedirect(target) {
		window.location = target
	}
	handleChoiceRedirect() {
		this.handleRedirect('#/choice')
	}
	
	render(){
		return(
			// const {name,expiration}=this.props??
			<div className="row">
				<div className="foods" onClick={this.handleChoiceRedirect.bind(this)}>
					<span className="foodName">Food Example</span>
					<span className="expirationDate">#Weeks #Days</span>
				</div>
			</div>
		)
	}
}