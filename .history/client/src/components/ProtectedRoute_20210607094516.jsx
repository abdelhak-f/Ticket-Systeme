import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';


function ProtectedRoute({isAuth: isAuth, component: Component, ...rest}) {
    return (
       <Route 
        {...rest}
        render = {(props) => {props} 
        
        }
       
       />
    )
}

export default ProtectedRoute
