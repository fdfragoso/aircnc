//VIDEO STOPED ON 53MIN

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import New from './pages/New';
import Dashboard from './pages/Dashboard';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}