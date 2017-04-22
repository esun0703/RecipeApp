// var React = require("react");
import from react;
// var foodComponent = require("./foodComponent");
import "./foodComponent";
class Main extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-4" id="side">
                        // <div class="row" id="sideTitle">
                        //     <h6>What Foods You Have</h6>
                        //     <hr>
                        //     <p>Foods (#)</p>
                        // </div>
                        // <div class="row" id="foodDisplay">
                        //     <!-- individual food component -->
                        //     <div class="row">
                        //         <div class="foods">
                        //             <p>Food Example<span class="expirationDate">#Weeks #Days</span></p>
                        //         </div>
                        //     </div>
                        // </div>
                        // <input id="foodInput" type="text" placeholder="Food Input">
                        // <button id="submitBtn">Submit</button>
                    </div>
                    // <div class="col-md-8" id="recipeDisplay">
                    //     <div class="row">
                    //         <div class="col-md-4 recipe">
                    //             Recipe
                    //         </div>
                    //         <div class="col-md-4 recipe">
                    //             Recipe
                    //         </div>
                    //     </div>
                    // </div>
                </div>
            </div>
        )
    }
}