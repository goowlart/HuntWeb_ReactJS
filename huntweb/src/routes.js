import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from "./pages/main";
import Product from './pages/Product/index';

const Routes = () => (
    <BrowserRouter> 
     <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
     </Switch>
    </BrowserRouter>
);

// <BrowserRouter>  identifies that the route is being used by a browser
// <Switch> allows me to call one route at a time 
// it is recommended to put exactly the first route called /
export default Routes;