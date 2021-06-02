import React, {useState} from 'react';
import {useH}
import './style.component.css';
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Login() {
  const [input, setInput] = useState({
    email: '',
    password: ''
   
});

function handleChange(event) {
  const {name, value} = event.target;
    setInput(preventInput => {
         return {
           ...preventInput,
           [name]: value
         }
    })
  }
  const handleClick = async (event) => {
    event.preventDefault();
    const logedin = {
      email: input.email,
      password: input.password
      
    }
    try {
      await axios.post("http://localhost:5000/signin", logedin)
      
    } catch (error) {
      if(error) throw(error)
    }
   
    }

  

  // const { setInfos } = useContext(UserContext)

  
  

  return (
    <div className="ticket countainer">
       <form >
                <h3>Sign In</h3>

                <div className="form-group sm-col">
                    <label>Email address</label>
                    <input 
                    className="form-control"
                    placeholder="Enter email"
                    type="email" 
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    className="form-control"
                    placeholder="Enter password"
                    type="password" 
                    name="password"
                    value={input.password}
                     onChange={handleChange}
                     required
                    />
                </div>
                <button  onClick={handleClick} type="submit" className="mt-3 btn btn-primary btn-block">logd in</button>
                
            </form>
  </div>
  );
}

export default Login;