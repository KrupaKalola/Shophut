import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Container/LandingPage'
import Cart from './Container/Cart'
import Product from './Container/Product'


function Routing() {
    return (
        
        <Switch> 
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Product/id=:id&category=:category" component={Product} />
        </Switch>
    )
}

export default Routing
