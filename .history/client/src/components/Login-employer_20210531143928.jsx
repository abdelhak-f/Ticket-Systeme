import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Login() {
  return (
    <div className="Login">
    <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button block size="lg" type="submit" disabled={!validateForm()}>
        Login
      </Button>
    </Form>
  </div>
  );
}

export default Login;