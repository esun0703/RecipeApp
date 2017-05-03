// var React = require("react");
import React from "react";
import FoodDisplay from "./foodDisplay";
// import ResultComponent from "./resultComponent.js" 
import NavBar from "./navbar.js"
import Footer from "./footer.js"


 class MainApp extends React.Component {

    render(){
        return(
            <div className="container">
                <NavBar/>
                <div className="container contentDisplay">
                    <div className="row">
                      <div className="col-md-4">
                            <FoodDisplay/>
                        </div>
                        <div className="col-md-8 results">
                            {this.props.children}                  
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MainApp;
