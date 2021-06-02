import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Login() {
  return (
    <div className="Login">
    <Forme onSubmit="">
      
        <Label>Email</Label>
        <input
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      
        <Form.Label>Password</Form.Label>
        <input
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
     
      <Button block size="lg" type="submit" >
        Login
      </Button>
    </Forme>
  </div>
  );
}

export default Login;