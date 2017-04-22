// var React = require("react");
import React from "react";
import FoodDisplay from "./foodDisplay";
import ResultComponent from "./resultComponent.js" 


 class MainApp extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <FoodDisplay/>
                    <ResultComponent/>
                </div>
            </div>
        );
    }
}

export default MainApp;
