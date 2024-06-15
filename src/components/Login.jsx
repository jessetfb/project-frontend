/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = async () => {
    // Add your login logic here
    console.log('Sign in with email:', email, 'and password:', password);
  };

  const handleCheckboxPress = async () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 className="text-center">Login</h2>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group controlId="rememberMe">
              <Form.Check
                type="checkbox"
                label="Remember me"
                checked={rememberMe}
                onChange={handleCheckboxPress}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSignIn}>
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;