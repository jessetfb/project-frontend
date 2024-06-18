/* eslint-disable no-undef */
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CatalougeCard from '../components/CatalougeCard';
import Navigationbar from '../components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties')
     .then(response => {
        setProperties(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Navigationbar />
      <Row className='mt-10'>
        {properties.map(property => (
          <Col key={property.id} className='mb-5'>
            <CatalougeCard
              image={property.image}
              description={property.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Properties;