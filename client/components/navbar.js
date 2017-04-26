import React from "react";
 export default class NavBar extends React.Component {
    constructor(){
        super();
    }
  
    render(){
		return(
			<div className="row">
				<nav className="navbar navbar-inverse">
	        		<div className="container-fluid">
	        			<img id="navImg" src="../public/style/mainLogo.jpg"/>
	            		<ul className="nav navbar-nav navbar-right">
	                		<li><a href="#">Sign Up</a></li>
	                		<li><a href="#">Login</a></li>
	            		</ul>
	        		</div>
	    		</nav>
    		</div>
		)	
    }
}
