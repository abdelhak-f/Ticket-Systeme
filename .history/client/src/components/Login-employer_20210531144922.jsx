import React from 'react';
import './style.component.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Login() {
  return (
    <div className="ticket countainer">
   <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="mt-3 btn btn-primary btn-block">Submit</button>
                
            </form>
  </div>
  );
}

export default Login;