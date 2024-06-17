

import {Card ,Button} from "react-bootstrap"

function CatalougeCard() {
  return (
    <Card style={{ width:'10 rem' }}>
    <Card.Img variant="top" src="https://sirfrancismarketingltd.co.ke/wp-content/uploads/2023/04/IMG_5493-scaled.jpg" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the 
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CatalougeCard