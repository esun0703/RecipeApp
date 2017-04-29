import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Main from "./mainApp";
// First we import some modules...


import ResultComponent from "./resultComponent.js" 
import RecipeComponent from "./recipeComponent.js" 
import {RecipeList, Recipe} from "./recipe"


// Then we delete a bunch of code from App and
// add some <Link> elements...
// c
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
const routes =()=>( 
 <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/map" component={ResultComponent} />
      <Route path="recipes" component={RecipeList} >
          <Route path=":id" component={Recipe} />
           <IndexRoute component={Recipe}/>

      </Route>
      <IndexRoute component={RecipeList}/>
    </Route>

  </Router>
)

export default routes;