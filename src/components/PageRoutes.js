import React from 'react';
import { Switch, withRouter,Route } from 'react-router-dom';
import HomePage from './HomePage';



const pages = () => (
    <Switch>

      <Route path="/" exact component={HomePage} />
      <Route path="/1" exact component={()=>{return(<div><h1>Routing to page 2</h1></div>)}} />
    </Switch>
);
export default withRouter(pages);
