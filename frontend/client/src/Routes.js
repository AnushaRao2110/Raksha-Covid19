import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/Signup';
import SignIn from './user/Signin';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}></Route> 
            <Route path='/signup' component={SignUp}></Route> 
            <Route path='/signin' component={SignIn}></Route> 
            {/* default route 
            exact returns route only if the path is an exact match to the url and disables partial matching*/}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;
