import React, {useState} from 'react';
import './style.component.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="ticket countainer">
       <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group sm-col">
                    <label>Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email}
            onChange={(e) => setEmail(e.target.value)}
                    />
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