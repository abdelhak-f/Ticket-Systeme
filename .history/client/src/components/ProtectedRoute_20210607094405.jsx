import React from 'react';
import {Route, Redirect} from 'react-router-dom';


function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}) {
    return (
       <Route 
        {...rest}
         
       
       />
    )
}

export default ProtectedRoute
