import React from 'react';
import { Switch, withRouter,Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListPageContainer from './ListPageContainer';
import ListItemContainer from './ListItemContainer';
import DetailsController from "./DetailsController";

const pages = () => (
    <Switch>

      <Route path="/" exact component={HomePage} />
      <Route path="/ListExample/" exact component={ListPageContainer} />
      <Route path="/ListExample/:id" exact component={ListItemContainer} />
      <Route path="/Forms" exact component={DetailsController} />
      <Route path="/option3" exact component={()=>{return(<div><h1>Routing to page 3</h1></div>)}} />
      <Route path="/option4" exact component={()=>{return(<div><h1>Routing to page 4</h1></div>)}} />
    </Switch>
);
export default withRouter(pages);
