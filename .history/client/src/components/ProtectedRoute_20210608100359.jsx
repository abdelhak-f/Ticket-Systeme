import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
// import { AuthContext } from './contexts/AuthContext';

const ProtectedRoute = ({comp:Component, ...rest}) => {
    const { type, isAuth } = useContext(AuthContext);

    //Array defining components useable by type(Role) of user 
    const authorizations = [
        {
            type: 'admin',
            components: ['create-employee', 'create-teckit', '', 'updateTicketComponent',]
        },
        {
            type: 'user',
            components: ['create-teckit',]
        },
        {
            type: 'technicien',
            components: ['TicketLists']
        }
    ];

    return (
        <div>
         
        </div>
    )
}

export default ProtectedRoute;

  