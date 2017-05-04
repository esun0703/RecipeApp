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
		                    <li><a className="navLink" href="#/app">Ingredient List</a></li>
		                    <li><a className="navLink" href="#/app/recipes">Recipe</a></li>
		                    <li><a className="navLink" href="#/app/map">Donation</a></li>                    
		                </ul>
		                <a href="#/">
		                    <img className="mainlogo" src="./style/mainLogo.jpg"/>
		                </a>
		                <ul className="nav navbar-nav navbar-right">
		                    <li className="dropdown">
		                        <a href="#/app" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign In <span className="caret"></span></a>
		                            <ul className="dropdown-menu">
		                                <li><a className="navLink" href="#">Sign Up</a></li>
		                                <li><a className="navLink" href="#">Log In</a></li>
		                            </ul>
		                    </li>
		                </ul>
		            </div>
        		</nav>
    		</div>
		)	
    }
}
