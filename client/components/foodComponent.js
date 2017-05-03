import React from "react";
import { browserHistory } from 'react-router';
import axios from 'axios';

export default class FoodComponent extends React.Component{
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		foods:[{
	// 			name:"testFood",
	// 			shelf_life:"1"
	// 		}],
	// 	}
		
	// }

	// addFood(newFood){
	// 	this.setState({
	// 		foods:this.state.foods.concat(newFood)
	// 	})
	// }
	// getFoods(){
	// 	//change this to route "/all"
	// 	var root = 'https://jsonplaceholder.typicode.com';
	// 	//this can later delete
	// 	const todoToFood =todo=>({name: todo.title, 'shelf_life':todo.id});
	// 	axios.get(`${root}/todos`)
	// 	// axios.get("/all")
	// 	.then(res=> {
	// 	 console.log(res);	
	// 	 return res.data})
	// 	//won't need bottom line
	// 	.then(todos=>todos.map(todoToFood))
	// 	.then(foods=>this.setState({foods}))
	// }

	// componentWillMount(){
	// 	this.getFoods();
	// 	console.log(this.state.foods);

	// }
	handleRedirect(target) {
		window.location = target
	}
	handleChoiceRedirect() {
		this.handleRedirect('#/choice')
	}
	
	render(){


		return(
			// const {name,expiration}=this.props??
			<div className="row">
				<div className="foods" onClick={this.handleChoiceRedirect.bind(this)}>
					<span className="foodName">{this.props.food.name}</span>
					<span className="expirationDate">{this.props.food.shelf_life}</span>
				</div>
			</div>
		)
	}
}