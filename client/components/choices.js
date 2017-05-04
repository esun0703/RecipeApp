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
		        <div id="choiceRow" className="row">
		          <div className="col-md-6">
		            <img id="choiceImg" src="/style/main-p2.jpg"/>
		          </div>
		          <div id="choiceIntro" className="col-md-6">
		          	<h3>DONATE</h3>
		            <p>You can choose to donate by searching for your local food pantry.</p>
		            <p>This not only helps those in need but also helps prevent food waste. We encourage this simply because there are so many benefits, to you and to others.</p>
		            <br/>
		            <h3>FIND RECIPES</h3>
		            <p> We get it, sometimes you forget something is in the fridge, or you only used a ingredient one time for another recipe. We're here to help you get more brilliant ideas!</p>
		          </div>
		        </div>
				<button type="button" className="btn btn-primary btn-lg greenBtn" onClick={this.handleMapRedirect.bind(this)}>Donate</button>
				<button type="button" className="btn btn-primary btn-lg yellowBtn" onClick={this.handleRecipesRedirect.bind(this)}>Find Recipes</button>
			</div>
		)
	}
}