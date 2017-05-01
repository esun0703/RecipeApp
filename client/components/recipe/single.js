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
					<h6>Recipe Example</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				</div>
		)
	}
}