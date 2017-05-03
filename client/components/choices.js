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
				<button id="donateBtn" type="button" className="btn btn-primary btn-lg" onClick={this.handleMapRedirect.bind(this)}>Donate</button>
				<button id="recipeBtn" type="button" className="btn btn-primary btn-lg" onClick={this.handleRecipesRedirect.bind(this)}>Find Recipes</button>
			</div>
		)
	}
}