// var React = require("react");
import React from "react";
import Recipe from "./single"


export default class RecipeList extends React.Component {
	constructor(){
        super();

		this.state={
		//el is each element in the array. 
		// recipes: Array(12).fill(0).map((el, id)=>({name: id, id}))
			recipes:[{
				Recipe:"Name",
				Description: "Blah",
				Image: "<>"
			},
			{
				Recipe:"Name",
				Description: "Blah",
				Image: "<>"

			}]
		};
	}
	render(){
		return(
			<div  id="recipeDisplay">
				{this.state.recipes.map((r, idx)=> 
				<div className="col-md-4" key={idx}>
					<Recipe recipeName={r.Recipe} recipeDescription={r.Description}/>
				</div>)}
			</div>
		)
	}
}