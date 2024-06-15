/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function LoginsPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <h2 ></h2>
          <Login />
          <p>
            Don't have an account?{' '}
            <Button variant="link" onClick={() => navigate('/Registration')}>
              Register now!
            </Button>
          </p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginsPage;