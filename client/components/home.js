// var React = require("react");
import React from "react";
import FoodDisplay from "./foodDisplay";
// import ResultComponent from "./resultComponent.js" 
import NavBar from "./navbar.js"
import Footer from "./footer.js"


 class Home extends React.Component {
    render(){
        return(
            <div className="container">
                <NavBar/>
                <div className="container">
                	<div className="row">
                		<img className="mainPic" src="style/main.jpg"/>  
        			</div>

			        <div className="row">
			            <div className="col-md-6 mainImgCol">
			                <img className="mainPic" src="style/main-go.jpg"/>  
			            </div>
			            <div className="col-md-6 marketing rightIndent">    
			                <h4>About YumCache?</h4>
			                <p>Stop wasting food! &nbsp Start enjoying it! <br/> YumCache is designed to help you keep track of what’s in your kitchen and make delicious food with it. All while it’s still perfectly fresh. <br/> Let’s cook something great together. </p>
			                <br/><br/>
			                <h4>Why do we use it?</h4>
			                <p>The world wastes too much food. Food that is beautiful and healthy and could let you live a better life. At YumCache, we help you keep track of what’s in your kitchen, so you don’t forget about things you’ve got before it spoils. And, with the integration of BigOven technology, we help you cook delicious meals with those ingredients. We can’t wait to see what you make!</p>
			            </div>
			        </div>

		            <div className="row">  
		                <div className="col-md-6 leftIndent">
		                    <h2>YumCache</h2>
		                    <p>Don't let your delicious food go bad. Keep track of your food expiration dates and see when it's time to create something beautiful.</p>
		                     <a className="btn homeBtn" href="#/app"><span>VIEW INGREDIENTS</span></a>
		                </div>
		                <div className="col-md-6 mainImgCol">
		                    <img className="mainPic" src="style/main-p1.jpg"/>
		                </div>  
		            </div>
		            <div className="row">
		                <div className="col-md-6 mainImgCol">
		                    <img className="mainPic" src="style/main-p2.jpg"/>
		                </div> 
		                <div className="col-md-6">
		                    <h2>YumCache</h2>
		                    <p>Cook with what you have! Enter ingredients and search from thousands of recipes. Let's make something delicious!</p>
		                    <a className="btn homeBtn yellowBtn" href="#/app/recipes"><span>VIEW MENU</span></a>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-6 leftIndent">
		                    <h2>YumCache</h2>
		                    <p>Can't find a great dish with an ingredient? No problem.. that food can still do some good. Find local charities to give food items to.</p>
		                    <a className="btn homeBtn greenBtn" href="#/app/map"><span>DONATE</span></a>
		                </div>
		                <div className="col-md-6 mainImgCol">
		                    <img className="mainPic" src="style/main-p3.jpg"/>
		                </div>  
		            </div>
		        </div> 
                <Footer/>
            </div>
        );
    }
}

export default Home;
