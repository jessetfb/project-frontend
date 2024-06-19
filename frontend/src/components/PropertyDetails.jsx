/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/properties/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const propertyData = await response.json();
        setProperty(propertyData);
      } catch (error) {
        setError(`Error fetching property details: ${error.message}`);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  const handleBuy = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/properties/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert('Property bought successfully!');
      navigate('/properties'); // Redirect to properties page
    } catch (error) {
      alert(`Error buying property: ${error.message}`);
    }
  };

  const handleRent = () => {
    alert('Property rented successfully!');
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Property Details</h2>
      <Row>
        <Col md={6}>
          <Image src={property.image} alt={property.description} fluid style={{ height: '300px', objectFit: 'cover' }} />
        </Col>
        <Col md={6}>
          <p>ID: {property.id}</p>
          <p>Description: {property.description}</p>
          <p>Price: ${property.price}</p>
          <Button variant="success" onClick={handleBuy} className="me-2">Buy</Button>
          <Button variant="primary" onClick={handleRent}>Rent</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
