import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
// import components from
import Sidebar from "./components/sidebar.component";
import CreateTicket from "./components/create-ticket.component";
import CreateEmployee from "./components/create-employee";
import UpdateTicket from "./components/update/updatedTicketComponent";
import ManageTickets from "./components/TicketLists";
import LoginEmployer from "./components/Login-employer"
import PageNotFound from "./components/"


// import './App.css';

function App() {
  return (
    // <div className="App">
    //  <h1>hello </h1>
    // </div>
    <Router>
      <div className="wrapper">
        <Sidebar/>
        <div id="content">
                <Route path="/" exact component={Dashboard} />
                <Route path="/Login-employer" exact component={LoginEmployer} />
                <Route path="/tickets/create" component={CreateTicket} />
                 <Route path="/add-employer" component={CreateEmployee} />
                 <Route path="/manage-tickets" component={ManageTickets} />
                <Route path="/updatticket/:id" component={UpdateTicket} />
                <Route path="*" component={EditTicket} /> 

        </div>
      </div>
    </Router>
  );
}

export default App;
