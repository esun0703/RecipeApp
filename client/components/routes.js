import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Main from "./mainApp";
import {RecipeList, Recipe} from "./recipe"
import Maps from "./mapsComponent.js"
import Choices from "./choices.js"
import SplashImage from "./splashImage.js"

const routes =()=>( 
 <Router history={hashHistory}>
    <Route path="/" component={Main}>
	  <Route path="/choice" component={Choices}/>
	  <Route path="/map" component={Maps}>
	  	<IndexRoute component={Maps}/>
	  </Route>
	  <Route path="recipes" component={RecipeList} >
	    <Route path=":id" component={Recipe} />
	    <IndexRoute component={Recipe}/>
	  </Route>
	  <IndexRoute component={SplashImage}/>
    </Route>

  </Router>
)

export default routes;