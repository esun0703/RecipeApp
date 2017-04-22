// var React = require("react");
import from react;
// var foodComponent = require("./foodComponent");
import "./foodComponent";
class Main extends React.Component {
	render(){
		return(
			<div class="col-md-8" id="recipeDisplay">
				<div class="row">
					<div class="col-md-4 recipe">
						Recipe
					</div>
					<div class="col-md-4 recipe">
						Recipe
					</div>
				</div>
			</div>
		)
	}
}