import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
// import components from
import Sidebar from "./components/sidebar.component";
import CreateTicket from "./components/create-ticket.component";


// import './App.css';

function App() {
  return (
    // <div className="App">
    //  <h1>hello </h1>
    // </div>
    <Router>
      <div className="">
        <Sidebar/>
        <div id="content">
        <Route path="/" exact component={Dashboard} />

        </div>
      </div>
    </Router>
  );
}

export default App;
