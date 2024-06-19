/* eslint-disable no-unused-vars */
import React from 'react';
import CatalogueList from '../components/CatalogueList';
import Navigationbar from '../components/Navigationbar';
import { Container } from 'react-bootstrap';

const Properties = () => {
  return (
    <Container>
      <Navigationbar />
      <CatalogueList />
    </Container>
  );
}

export default Properties;
