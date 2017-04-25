
import React from "react";
import FoodComponent from "./foodComponent.js";
 export default class FoodDisplay extends React.Component {
    constructor(){
        super();
    }
  
    render(){
		return(
			<div id="side">
				<div className="row" id="sideTitle">
					<h6>What's In Your Fridge</h6>
					<hr/>
					<p>Foods (#)</p>
				</div>
				<div className="row" id="foodDisplay">
					<FoodComponent/>
				</div>
				<input id="foodInput" type="text" placeholder="Food Input"/>
				<button id="submitBtn">Submit</button>
			</div>
		)	
    }
}


