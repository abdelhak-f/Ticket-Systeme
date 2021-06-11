import React, { useContext } from 'react';
import {useEffect, useState} from 'react-router-dom';
import axios from 'axios';
// import { AuthContext } from './contexts/AuthContext';
import CreateTicket from "./components/create-ticket.component";
import CreateEmployee from "./components/create-employee";
import ManageTickets from "./components/TicketLists";
import { useState } from 'react';

const ProtectedRoute = () => {
    const [role, setRole] =useState('');

    useEffect(() =>{
        axios.get("http://localhost:5000/signin").then((response) =>{
            if (response.data.logedin==true) {
                setRole(response.data.user[0].type);
            }
        });
    }, [])
   

    return (
        <div>
         {role &&}
        </div>
    )
}

export default ProtectedRoute;

  