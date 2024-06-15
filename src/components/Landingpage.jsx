import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Landingpage() {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40
    }
  };

  return (
    <Container fluid className="p-0">
      <Row gutter={0}>
        <Col>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            showDots={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            vertical={true}
            partialVisible={true}
            sliderClass="slider"
            containerClass="carousel-container"
          >
            <div>
              <Image 
                src="https://sirfrancismarketingltd.co.ke/wp-content/uploads/2023/04/Oakland_December_20122_004.jpg" 
                className="fullscreen-image" 
                alt="Landing" 
                rounded 
              />
              <div className="carousel-caption">
                <h2 className="display-4 fw-bold" style={{ fontFamily: 'Pacifico, cursive', color: '#fff' }}>
                  TRUST REAL  ESTATE
                  <br />
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>
                    find your dream home and make it yours, you trust we deliver
                  </span>
                </h2>
              </div>
            </div>
            <div>
              <Image 
                src="https://www.ownitkenya.com/wp-content/uploads/2023/05/1-bedroom-apartment-for-sale-in-westlands-nairobi.jpg" 
                className="fullscreen-image" 
                alt="Landing" 
                rounded 
              />
              <div className="carousel-caption">
                <h2 className="display-4 fw-bold" style={{ fontFamily: 'Pacifico, cursive', color: '#fff' }}>
                  Affordable housing
                </h2>
              </div>
            </div>
            <div>
              <Image 
                src="https://www.nelsonscourt.com/assets/templates/nelson/full%20screen/data1/images/banner1.jpg" 
                className="fullscreen-image" 
                alt="Landing" 
                rounded 
              />
              <div className="carousel-caption">
                <h2 className="display-4 fw-bold" style={{ fontFamily: 'Pacifico, cursive', color: '#fff' }}>
                  Soft Life at its fullest
                </h2>
              </div>
            </div>
          </Carousel>
          <div className="position-absolute bottom-0 end-0 p-4">
            <Button 
              variant="primary" 
              size="lg" 
              className="custom-button"
              onClick={() => navigate('/properties')}
            >
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landingpage;
