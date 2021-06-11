import {useState, useEffect, useMemo} from 'react';
import React from 'react';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
import Sidebar from "./components/sidebar.component";
import CreateTicket from "./components/create-ticket.component";
import CreateEmployee from "./components/create-employee";
import UpdateTicket from "./components/update/updatedTicketComponent";
import ManageTickets from "./components/TicketLists";
import LoginEmployer from "./components/Login-employer"
import PageNotFound from "./components/PageNotFound"
// import ProtectedRoute from './components/ProtectedRoute';
// import  {UserContext} from "./components/UserContext";
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';





function App() {
  
  const [type, setType] =useState('');
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    useEffect(() =>{
        axios.get("http://localhost:5000/signin").then((response) =>{
            if (response.data.logedin===true) {
                setType(response.data.user[0].type);
            }
        });
    }, [])
console.log('data login', type)

  return (
   
   
    <Router>
       
      <div className="wrapper">
      {type ==='admin' && <CreateTicket/>}
        <Sidebar/>
        <div id="content">
        
              <Switch>
               <Route path="/" exact component={LoginEmployer} />
                <PrivateRoute  path="/tickets/create" roles={["admin", "user"]} component={CreateTicket} />
                <Route path="/add-employer" exact component={CreateEmployee} />
                <PrivateRoute path="/manage-tickets" roles={["admin"]}  exact component={ManageTickets} />
                <Route path="/updatticket/:id" exact  component={UpdateTicket} />
                <Route path="*" exact  component={PageNotFound} />
              </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
