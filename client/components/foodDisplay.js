// var React = require("react");
import from react;
// var foodComponent = require("./foodComponent");
import "./foodComponent";
class Main extends React.Component {
	constructor () {
	    super();
	    this.state = { foods: [] }
  	}

  	componentDidMount () {
	    // fetch(/* Database URL */)
	    //   .then(foods => this.setState({ foods: foods }))
  	}
	render(){
		return(
			<div class="col-md-4" id="side">
				<div class="row" id="sideTitle">
					<h6>What Foods You Have</h6>
					<hr>
					<p>Foods (#)</p>
				</div>
				<div class="row" id="foodDisplay">
					{this.state.foods.map((food, index) => {
				        const { name, expiration } = food
				        return <Food name={name} expiration={expiration} id={index} />
				    })}
					{foodComponent}
				</div>
				<input id="foodInput" type="text" placeholder="Food Input">
				<button id="submitBtn">Submit</button>
			</div>
		)
	}
}
