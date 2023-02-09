import React from 'react';
import {Routes as ReactRoutes, Route} from "react-router";
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoute';
import Cryptage from '../pages/Cryptage/Cryptage';


const Router = () => (
    <ReactRoutes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
            path="/Cryptage"
            element={<Cryptage/>}
        />
        <Route
            path="/login"
            element={<Login/>}
        />
    
        <Route
            path="/compte"
            element={<Home/>}
        />


    </ReactRoutes>  
)
export default Router;