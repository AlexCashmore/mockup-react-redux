import React from 'react';
import { Switch, withRouter,Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListPageContainer from './ListPageContainer';


const pages = () => (
    <Switch>

      <Route path="/" exact component={HomePage} />
      <Route path="/ListExample" exact component={ListPageContainer} />
      <Route path="/Forms" exact component={()=>{return(<div><h1 style={{marginLeft:20}}>under construction</h1></div>)}} />
      <Route path="/option3" exact component={()=>{return(<div><h1>Routing to page 3</h1></div>)}} />
      <Route path="/option4" exact component={()=>{return(<div><h1>Routing to page 4</h1></div>)}} />
    </Switch>
);
export default withRouter(pages);
