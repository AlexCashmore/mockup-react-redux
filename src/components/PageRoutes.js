import React from 'react';
import { Switch, withRouter,Route } from 'react-router-dom';



const pages = () => (
    <Switch>

      <Route path="/" exact component={()=>{return(<div><h1>hi</h1></div>)}} />
      <Route path="/1" exact component={()=>{return(<div><h1>bye</h1></div>)}} />
    </Switch>
);
export default withRouter(pages);
