/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CatalogueCard = ({ id, image, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Link to={`/properties/${id}`}>
          <Button variant="primary">View</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CatalogueCard;
