import React from "react";

export default class Choices extends React.Component {
	// handleClick() {
	//   // this.props.history.push('/some/path');
	//   console.log("hello")
	// }
	handleRedirect(target) {
		window.location = target
	}
	handleMapRedirect() {
		this.handleRedirect('#/app/map')
	}
	handleRecipesRedirect() {
		this.handleRedirect('#/app/recipes')
	}
	render() {
		return(
			// const {name,expiration}=this.props??
			<div id="choiceDisplay">
				<h1>What Would You Like To Do With Your Food?</h1>
				<button type="button" className="btn btn-primary btn-lg greenBtn" onClick={this.handleMapRedirect.bind(this)}>Donate</button>
				<button type="button" className="btn btn-primary btn-lg yellowBtn" onClick={this.handleRecipesRedirect.bind(this)}>Find Recipes</button>
			</div>
		)
	}
}