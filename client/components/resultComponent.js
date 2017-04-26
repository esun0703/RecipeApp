// var React = require("react");
import React from "react";
// var foodComponent = require("./foodComponent");

export default class ResultComponent extends React.Component {
	constructor(){
        super();
    }
	render(){
		return(
			<div class="col-md-8" id="recipeDisplay">
				<div class="row">
					<div class="col-md-4 recipe">
						Recipe
					</div>
					<div class="col-md-4 recipe">
						Recipe
					</div>
				</div>
			</div>
		)
	}
}