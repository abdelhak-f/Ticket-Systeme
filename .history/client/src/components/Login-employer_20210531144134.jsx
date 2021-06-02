import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Login() {
  return (
    <div className="Login">
    <Form onSubmit={handleSubmit}>
      
        <Label>Email</Label>
        <Form.Control
          autoFocus
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
     
      <Button block size="lg" type="submit" >
        Login
      </Button>
    </Form>
  </div>
  );
}

export default Login;