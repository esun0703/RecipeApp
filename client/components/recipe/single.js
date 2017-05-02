// var React = require("react");
import React from "react";
// var foodComponent = require("./foodComponent");

export default class Recipe extends React.Component {
	constructor(){
        super();

    }
	render(){
		return(
				<div className="recipe">
					<h6>{this.props.recipeName}</h6>
					<p>{this.props.recipeDescription}</p>
				</div>
		)
	}
}