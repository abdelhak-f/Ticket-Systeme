import React from 'react';
import {useState} from 'react';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
// import components from
// import Dashboard from "./components/Dashboard"
import Sidebar from "./components/sidebar.component";
import CreateTicket from "./components/create-ticket.component";
import CreateEmployee from "./components/create-employee";
import UpdateTicket from "./components/update/updatedTicketComponent";
import ManageTickets from "./components/TicketLists";
import LoginEmployer from "./components/Login-employer"
import PageNotFound from "./components/PageNotFound"
import ProtectedRoute from "./components/ProtectedRoute"


// import './App.css';
const [role, setRole] =useState('');

    useEffect(() =>{
        axios.get("http://localhost:5000/signin").then((response) =>{
            if (response.data.logedin==true) {
                setRole(response.data.user[0].type);
            }
        });
    }, [])

function App() {


  return (
   
   
    <Router>
       
      <div className="wrapper">
      {role =='admin' && <CreateTicket/>}
        <Sidebar/>
        <div id="content">
              <Switch>
                {/* <Route path="/" exact component={Dashboard} /> */}
               <Route path="/" exact component={LoginEmployer} />
                <Route path="/tickets/create" component={CreateTicket} />
                <Route path="/add-employer" exact component={CreateEmployee} />
                <Route path="/manage-tickets" exact component={ManageTickets} />
                <Route path="/updatticket/:id" exact  component={UpdateTicket} />
                <Route path="*" exact  component={PageNotFound} /> 
              </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
