import React from "react";

export default class Choices extends React.Component{

	
	render(){
		return(
			// const {name,expiration}=this.props??
			<div id="choiceDisplay">
				<h1>What Would You Like To Do With Your Food?</h1>
				<button type="button" class="btn btn-primary btn-lg">Donate</button>
				<button type="button" class="btn btn-primary btn-lg">Find Recipes</button>
			</div>
		)
	}
}