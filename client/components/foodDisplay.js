import React from 'react';
import FoodComponent from './foodComponent.js';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default class FoodDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [],
    };
  }
  
  addFood(newFood) {
    this.setState({ foods: this.state.foods.concat(newFood), });
  }
  
  getFoods() { 
    axios.get('/all')
      .then((res) => { console.log("axios res",res); return res.data; })
      .then(foods => this.setState({ foods, }));
  }
  
  componentWillMount() {
    this.getFoods();
    console.log(this.state.foods);
  }
  
  createFood(food) {
    console.log('food argument', food);
    axios.post('/userfoods', food).then((nextFood) => {
      console.log('nextfood', nextFood);

      this.getFoods();
    })
    .catch(console.error);
  }
    getFormFood(e){
          e.preventDefault();
          // console.log(e.target, e.target.elements);
          // console.log(e.target.elements.food_name.value);
          // console.log(e.target.elements.shelf_life.value);
          var newFood = {
            food_name:e.target.elements.food_name.value,
            shelf_life:e.target.elements.shelf_life.value,
          };
          this.createFood(newFood)
          console.log(e.target.value);
          

}
   handleClick() {
    this.createFood({ food_name: 'testFood', shelf_life: 1, });

  }


  handleRedirect(target) {
    window.location = target;
  }
  
  handleChoiceRedirect() {
    this.handleRedirect('#/choice');
  }
  
  render() {
    return (
      <div id="side">
        <h6>What's In Your Fridge?</h6>
        <div className="row" id="sideTitle">
          <p className="leftAlign">Foods</p>
          <p className="rightAlign">Expiration Date (Days)</p> 
        </div>

        <div className="row" id="foodDisplay">
          {this.state.foods.map((f, i) =>
            <FoodComponent food={f} key={i}/>
          )}

        </div>
        <form onSubmit={(e)=>{ this.getFormFood(e) }}>
        	<div className="form-group">
	        	<input className="formInput" id="food_name" type="text" placeholder="Food Name" name="food_name"/>
			</div>
			  <div className="form-group">
	        	<input className="formInput" id="shelf_life" type="text" placeholder="Shelf Life" name="shelf_life"/>
			  </div>
	        <button onClick={(...args)=>{console.log(args,"args");}}  type="submit" id="submitBtn" >Search</button>
        </form>
      </div>
    );
  }
}


  // createFood(food) {
  //   console.log('food argument', food);
  //   axios.post('/userfoods', {data:{
  //     food_name: food.food_name,
  //     shelf_life: food.shelf_life,
  //   }}).then((nextFood) => {
  //     console.log('nextfood', nextFood);

  //     this.getFoods();
  //   })
  //   .catch(console.error);
  // }

// change this to route "/all"
  //  var root = 'https://jsonplaceholder.typicode.com';
    // this can later delete
    // const todoToFood =todo=>({name: todo.title, 'shelf_life':todo.id});
     // uses axios to get the route for the get request
    //  axios.get(`${root}/todos`)
    // won't need bottom line
    // .then(todos=>todos.map(todoToFood))

 // handleClick() {
  //   this.createFood({ food_name: 'testFood', shelf_life: 1, });

  //  // this.props.history.push('/some/path');
  //   console.log('hello');

  //  // Submit Route
  // }

// onClick={(e)=>{ console.log('this from handle', this, e);this.handleClick()}}
