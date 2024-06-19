/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactUs() {
  // Array of background image URLs
  const imageUrls = [
    "https://le-mac.hotels-of-nairobi.com/data/Pics/OriginalPhoto/15506/1550613/1550613550/le-mac-nairobi-pic-3.JPEG",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxObAzNCy4LTtkuJDGBEu-ty8L8GHFaSrAw&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMqv6_YBT7hkrqfpC342saLfZ0tElB31jmA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhsqqk1S4hW_8P4mq5TWjVCKfgCA6KwmSSg&s",
  ];

  // State to manage current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <Container
      fluid
      className="p-0"
      style={{
        backgroundImage: `url(${imageUrls[currentImageIndex]})`,
        backgroundSize: "cover",
        height: "100vh",
        transition: "background-image 0.5s ease-in-out" // Optional: Add transition effect
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
        className="bg-darkgrey p-3" // Changed background color to dark grey
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Row className="justify-content-between align-items-center">
          <Col xs={6} className="text-center text-white">
            <p>Contact us</p>
            <Button variant="outline-secondary" className="rounded-circle" style={{ backgroundColor: 'grey', color: 'white' }}>
              <i className="bi bi-telephone"></i>
            </Button>
            <p>0793290416</p>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <Button variant="outline-secondary" className="me-2" style={{ backgroundColor: 'green', color: 'white' }}>
              <i className="bi bi-whatsapp"></i>
              <span className="ms-2">WhatsApp</span>
            </Button>
            <Button variant="outline-secondary" className="me-2" style={{ backgroundColor: 'black', color: 'white' }}>
              <i className="bi bi-twitter"></i>
              <span className="ms-2">Twitter</span>
            </Button>
            <Button variant="outline-secondary" className="me-2" style={{ backgroundColor: 'blue', color: 'white' }}>
              <i className="bi bi-facebook"></i>
              <span className="ms-2">Facebook</span>
            </Button>
            <Button variant="outline-secondary" style={{ backgroundColor: 'red', color: 'white' }}>
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
