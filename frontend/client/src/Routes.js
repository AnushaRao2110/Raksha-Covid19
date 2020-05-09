import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/Signup';
import SignIn from './user/Signin';
import Items from './core/Item';
import Cart from './core/Cart';
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/signup' exact component={SignUp}></Route>
                <Route path='/signin' exact component={SignIn}></Route>
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
                <PrivateRoute path="/cart" exact component={Cart} />
                <PrivateRoute path="/items" exact component={Items} />

                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
                {/* default route 
            exact returns route only if the path is an exact match to the url and disables partial matching*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
