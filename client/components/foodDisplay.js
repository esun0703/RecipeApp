import React from "react";
import FoodComponent from "./foodComponent.js";
import axios  from 'axios';


 export default class FoodDisplay extends React.Component {
   constructor(){
		super()
		this.state = {
			foods:[{
				name:"testFood",
				shelf_life:"1"
			}],
		}
		
	}

	addFood(newFood){
		this.setState({
			foods:this.state.foods.concat(newFood)
		})
	}
	getFoods(){
		//change this to route "/all"
		var root = 'https://jsonplaceholder.typicode.com';
		//this can later delete
		const todoToFood =todo=>({name: todo.title, 'shelf_life':todo.id});
		//uses axios to get the route for the get request
		axios.get(`${root}/todos`)
		// axios.get("/all")
		.then(res=> {
		 console.log(res);	
		 return res.data})
		//won't need bottom line
		.then(todos=>todos.map(todoToFood))
		.then(foods=>this.setState({foods}))
	}

	componentWillMount(){
		this.getFoods();
		console.log(this.state.foods);

	}
	handleRedirect(target) {
		window.location = target
	}
	handleChoiceRedirect() {
		this.handleRedirect('#/choice')
	}
	 handleClick() {
	  // this.props.history.push('/some/path');
	  console.log("hello")
	  //Submit Route
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
					{this.state.foods.map((f,i)=> 
						<FoodComponent food={f} key={i}/>		
					)}				
				</div>
				<input id="foodInput" type="text" placeholder="Food Input"/>
				<button id="submitBtn" onClick={this.handleClick}>Submit</button>
			</div>
		)	
    }
}


