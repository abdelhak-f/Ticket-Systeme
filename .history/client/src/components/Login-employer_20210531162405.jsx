import React, {useState} from 'react';
import './style.component.css';
import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Login() {

  // const { setInfos } = useContext(UserContext)

  const initialState = { email:'', password:''}
  const [information, setInformation]= useState(initialState)

const handleChangeInput = e => {
  const {name, value} = e.target
  // console.log(name , " " , value)
      setInformation({...information, [name]: value})
  }

  const handelSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3000/signin', information, { withCredentials: true }).then(response => {
          // console.log("login",response)
          // setInfos(response.data)
          console.log(response.data)
      })
      .catch(err => { console.log(err) })
  }  

  return (
    <div className="ticket countainer">
       <form onSubmit={handelSubmit}>
                <h3>Sign In</h3>

                <div className="form-group sm-col">
                    <label>Email address</label>
                    <input 
                    className="form-control"
                    placeholder="Enter email"
                    type="email" 
                    name="email"
                    onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    className="form-control"
                    placeholder="Enter password"
                    type="password" 
                    name="password"
                    onChange={handleChangeInput}
                    

                    />
                </div>
                <button type="submit" className="mt-3 btn btn-primary btn-block">login</button>
                
            </form>
  </div>
  );
}

export default Login;