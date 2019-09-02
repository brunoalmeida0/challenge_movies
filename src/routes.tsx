import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Details from './pages/Details';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    </BrowserRouter>
);

export default Routes;