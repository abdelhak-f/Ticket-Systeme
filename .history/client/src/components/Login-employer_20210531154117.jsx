import React, {useState} from 'react';
import './style.component.css';
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
      axios.post('http://localhost:3000/api/Login', information, { withCredentials: true }).then(response => {
          // console.log("login",response)
          setInfos(response.data)
          console.log(response.data)
      })
      .catch(err => { console.log(err) })

  return (
    <div className="ticket countainer">
       <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group sm-col">
                    <label>Email address</label>
                    <input 
                    className="form-control"
                    placeholder="Enter email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    className="form-control"
                    placeholder="Enter password"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    

                    />
                </div>
                <button type="submit" className="mt-3 btn btn-primary btn-block">Submit</button>
                
            </form>
  </div>
  );
}

export default Login;