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
	                    <a href="/about">ABOUT US</a>
	                    <span>|</span>
	                    <a href="/donation">DONATION</a>
	                    <span>|</span>
	                    <a href="/contact">CONTACT</a>
	                </nav>
	                <div className="footer" id="bottom">
	                    All rights reserved YumCache 2017&copy; 
	                </div>
	            </footer>	
    		</div>
		)	
    }
}