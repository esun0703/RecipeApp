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

			        <div className="row homeRow">
			            <div className="col-md-6 mainImgCol">
			                <img className="mainPic" src="style/main-go.jpg"/>  
			            </div>
			            <div id="firstRow" className="col-md-6 homeContent marketing rightIndent">    
			                <h4>About YumCache?</h4>
			                <br/>
			                <p>Stop wasting food! Start enjoying it! YumCache is designed to help you keep track of what’s in your kitchen and make delicious food with it. All while it’s still perfectly fresh. <br/> Let’s cook something great together. </p>
			                <br/>
			                
			            </div>
			        </div>

		            <div className="row homeRow">  
		                <div className="col-md-6 homeContent leftIndent">
		                    <h2>TRACK INGREDIENTS</h2>
			                <br/>
		                    <p>Don't let your delicious food go bad. Keep track of your food expiration dates and see when it's time to create something beautiful.</p>
			                <br/><br/>
		                     <a className="btn blackBtn homeBtn" href="#/app"><span>VIEW INGREDIENTS</span></a>
		                </div>
		                <div className="col-md-6 mainImgCol">
		                    <img className="mainPic" src="style/main-p1.jpg"/>
		                </div>  
		            </div>
		            <div className="row homeRow">
		                <div className="col-md-6 mainImgCol">
		                    <img className="mainPic" src="style/main-p2.jpg"/>
		                </div> 
		                <div className="col-md-6 homeContent">
		                    <h2>FIND RECIPES</h2>
			                <br/>
		                    <p>Cook with what you have! Enter ingredients and search from thousands of recipes. Let's make something delicious!</p>
			                <br/><br/>
		                    <a className="btn homeBtn yellowBtn" href="#/app/recipes"><span>VIEW MENU</span></a>
		                </div>
		            </div>
		            <div className="row homeRow">
		                <div className="col-md-6 homeContent leftIndent">
		                    <h2>DONATE THE FOOD YOU DON'T WANT</h2>
		                    <br/>
		                    <p>Can't find a great dish with an ingredient? No problem.. that food can still do some good. Find local charities to give food items to.</p>
		                    <br/><br/>
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
