/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactUs() {
  return (
    <Container
      fluid
      className="p-0"
      style={{
        backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rHQr5IHHTDCq_65B1cb3MTsG8fyP0ntfjA&s"})`,
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <Container
        className="text-center text-white"
        style={{ position: "relative", top: "50%", transform: "translateY(-50%)", }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Trust us to deliver in real estate matters. We are a certified real estate firm with extensive experience.
        </p>
      </Container>
      <Container
        fluid
        className="bg-light p-3"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: 'blue' }}
      >
        <Row className="justify-content-between align-items-center">
          <Col xs={6} className="text-center text-muted">
            <p>Contact us</p>
            <Button variant="outline-secondary" className="rounded-circle">
              <i className="bi bi-telephone"></i>
            </Button>
            <p>0793290416</p>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <Button variant="outline-secondary" className="me-2">
              <i className="bi bi-whatsapp"></i>
              <span className="ms-2">WhatsApp</span>
            </Button>
            <Button variant="outline-secondary" className="me-2">
              <i className="bi bi-twitter"></i>
              <span className="ms-2">Twitter</span>
            </Button>
            <Button variant="outline-secondary" className="me-2">
              <i className="bi bi-facebook"></i>
              <span className="ms-2">Facebook</span>
            </Button>
            <Button variant="outline-secondary">
              <i className="bi bi-instagram"></i>
              <span className="ms-2">Instagram</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
