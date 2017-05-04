import React from 'react';
import FoodComponent from './foodComponent.js';
import axios from 'axios';

export default class FoodDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [{
        name: 'testFood',
        shelf_life: '1',
      },],
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  // handleInputChange(event) {
  //   this.setState({ 
  //     foods: [{
  //       // food_name:this.state.foods.concat(newFood),
        
  //       }], 
  //   });
  // }
  
  createFood(food) {
    console.log('food argument', food);
    axios.post('/userfoods', {data:{
      food_name: food.food_name,
      shelf_life: food.shelf_life,
    }}).then((nextFood) => {
      console.log('nextfood', nextFood);

      this.getFoods();
    })
    .catch(console.error);
  }
  
  getFoods() {
    // change this to route "/all"
    //  var root = 'https://jsonplaceholder.typicode.com';
    // this can later delete
    // const todoToFood =todo=>({name: todo.title, 'shelf_life':todo.id});
     // uses axios to get the route for the get request
    //  axios.get(`${root}/todos`)
    // won't need bottom line
    // .then(todos=>todos.map(todoToFood))
    axios.get('/all')
      .then((res) => { console.log("axios res",res); return res.data; })
      .then(foods => this.setState({ foods, }));
  }
  
  componentWillMount() {
    this.getFoods();
    console.log(this.state.foods);
  }
  
  handleRedirect(target) {
    window.location = target;
  }
  
  handleChoiceRedirect() {
    this.handleRedirect('#/choice');
  }
  
  handleClick() {
    console.log("handleClick food_name" + this.state.food_name)
    console.log("handleClick shelf_life" + this.state.food_name)
    this.createFood({ 
      food_name: this.state.food_name,
      shelf_life:this.state.shelf_life, 
    });

   // this.props.history.push('/some/path');
    console.log('hello');

   // Submit Route
  }
  
  render() {
    return (
      <div id="side">
        <div className="row" id="sideTitle">
          <h6>What's In Your Fridge</h6>
          <hr/>
          <p className="leftAlign">Foods</p>
          <p className="rightAlign">Expiration Date (Days)</p> 
        </div>

        <div className="row" id="foodDisplay">
          {this.state.foods.map((f, i) =>
            <FoodComponent food={f} key={i}/>
          )}
        </div>
        <form>
        	<div className="form-group">
	        	<input 
              name="food_name"
              value={this.state.food_name}
              onChange={this.handleInputChange} 
              className="formInput" 
              id="food_name" 
              type="text" 
              placeholder="Food Name"
            />
			</div>
			  <div className="form-group">
	        	<input 
              name="shelf_life"
              value={this.state.shelf_life}
              onChange={this.handleInputChange} 
              className="formInput" 
              id="shelf_life" 
              type="text" 
              placeholder="Shelf Life"
            />
			  </div>
	        <button id="submitBtn" onClick={(e)=>{ console.log('this from handle', this, e);this.handleClick()}}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
