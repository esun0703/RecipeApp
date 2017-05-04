import React from "react";
 export default class Footer extends React.Component {
    constructor(){
        super();

    }

 //    handleClick() {
	//   // this.props.history.push('/some/path');
	//   console.log("hello")
	// }
  
    render(){
		return(
			<div className="row container-fluid">
	            <footer className="footer"> 
	                <nav>
	                    <a href="#/">HOME</a>
	                    <span>&nbsp;|&nbsp;</span>
	                    <a href="#/app/recipes">RECIPES</a>
	                    <span>&nbsp;|&nbsp;</span>
	                     <a href="https://github.com/esun0703/RecipeApp">GITHUB</a>
	                </nav>
	                <div className="footer" id="bottom">
	                    All rights reserved YumCache 2017&copy; 
	                </div>
	            </footer>	
    		</div>
		)	
    }
}