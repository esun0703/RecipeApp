// var React = require("react");
import React from "react";
import RecipeComponent from "./recipeComponent"
// var foodComponent = require("./foodComponent");
import MapsComponent from "./Donate/mapsComponent.js"

export default class ResultComponent extends React.Component {
	constructor(){
        super();
		this.state={
			//el is each element in the array. 
			recipes: Array(12).fill(0).map((el, id)=>({name: id, id})),
			lat: 48.858608,
			lon:2.294471
		}
    }
    updateLocation() { 
    	//todo
    	this.setState({
    		lat: 43.6426,
    		lon: -79.3871
    	})
    }

	render(){

		setTimeout(() => {
			this.updateLocation();
		}, 3000);
		

		return(
			<div>
				<div className="row" id="recipeDisplay">
					{this.state.recipes.map((r, idx)=> 
					<div className="col-md-4" key={idx}>
						<RecipeComponent recipe={r}/>					
					</div>)}
				</div>
				<MapsComponent lat={this.state.lat} lon={this.state.lon}/>
			</div>
		)
	}
}