// var React = require("react");
import React from "react";
import Recipe from "./single"


export default class RecipeList extends React.Component {
	constructor(){
        super();

	this.state={
	//el is each element in the array. 
	recipes: Array(12).fill(0).map((el, id)=>({name: id, id}))
}
    }
	render(){
		return(
			<div  id="recipeDisplay">
				{this.state.recipes.map((r, idx)=> 
				<div className="col-md-4" key={idx}>
					<Recipe recipe={r}/>
				</div>)}
			</div>
		)
	}
}