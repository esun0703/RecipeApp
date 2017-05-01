// var React = require("react");
import React from "react";
import FoodDisplay from "./foodDisplay";
// import ResultComponent from "./resultComponent.js" 
import NavBar from "./navbar.js"


 class MainApp extends React.Component {

    render(){
        return(
            <div className="container">
                <NavBar/>
                <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                            <FoodDisplay/>
                        </div>
                        <div className="col-md-8 results">
                            {this.props.children}                  
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainApp;
