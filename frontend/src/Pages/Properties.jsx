import {Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import CatalougeCard from '../components/CatalougeCard'
import Navigationbar from '../components/Navbar';

function Properties() {
  return (
    <Container>
        <Navigationbar />
        <Row className='mt-10'>
          {new Array(20).fill(Math.random()).map((_, index) => (
            <Col key={index} className='mb-5'>
              <CatalougeCard />
            </Col>
          ))}
        </Row>
      </Container>

  )
}

export default Properties