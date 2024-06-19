/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import CatalogueCard from './CatalougeCard'
import { Container, Row, Col } from 'react-bootstrap';

const CatalogueList = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError(error.message);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4 mt-10">
        {error ? (
          <Col>
            <p>Error fetching properties: {error}</p>
          </Col>
        ) : properties.length > 0 ? (
          properties.map(property => (
            <Col key={property.id}>
              <CatalogueCard
                id={property.id}
                image={property.image}
                description={property.description}
              />
            </Col>
          ))
        ) : (
          <Col>
            <p>No properties available.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default CatalogueList;
