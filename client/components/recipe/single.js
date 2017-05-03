// var React = require("react");
import React from "react";
// var foodComponent = require("./foodComponent");

export default class Recipe extends React.Component {
	constructor(){
        super();

    }
	render(){
		return(
				<div className="recipe thumbnail">
					<a className="recipeLnk" href={this.props.recipeLink}>
			            <div>
			                <img className="thumb-img" src={this.props.recipeImage}/>
			                <div className="caption">
			                    <h4>{this.props.recipeName}</h4>
			                </div>
			            </div>
		        	</a>
				</div>			
		)
	}
}

// <h6>{this.props.recipeName}</h6>
// <a className="recipeLnk" href={this.props.recipeLink}>
// 					<img className="recipeImg" src={this.props.recipeImage}/>
// 					</a>