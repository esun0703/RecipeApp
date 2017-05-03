import React from "react";
 export default class NavBar extends React.Component {
    constructor(){
        super();

    }

 //    handleClick() {
	//   // this.props.history.push('/some/path');
	//   console.log("hello")
	// }
  
    render(){
		return(
			<div className="row">
				<nav className="navbar navbar-inverse">
		            <div className="container-fluid">
		                <ul className="nav navbar-nav navbar-left">
		                    <li><a href="#">Main</a></li>
		                    <li><a href="#">Recipe</a></li>
		                    <li><a href="#">Donation</a></li>                    
		                </ul>
		                <a href="./main.html">
		                    <img className="mainlogo" src="./style/mainLogo.jpg"/>
		                </a>
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
