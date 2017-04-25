// var React = require("react");
import React from "react";
import RecipeComponent from "./recipeComponent"
// var foodComponent = require("./foodComponent");

export default class ResultComponent extends React.Component {
	constructor(){
        super();

this.state={
	recipes: Array(12).fill(0).map((el, id)=>({name: id, id}))
}
    }
	render(){
		return(
			<div className="row" id="recipeDisplay">
				{this.state.recipes.map((r, idx)=> 
				<div className="col-md-4" key={idx}>
					<RecipeComponent recipe={r}/>
				</div>)}

		
			</div>
		)
	}
}