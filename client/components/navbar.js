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
					        <li className="dropdown">
					          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign In <span className="caret"></span></a>
					          <ul className="dropdown-menu">
					            <li><a href="#">Sign Up</a></li>
					            <li><a href="#">Log In</a></li>
					          </ul>
					        </li>
					    </ul>
	        		</div>
	    		</nav>
    		</div>
		)	
    }
}
