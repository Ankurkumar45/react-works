// import logo from './logo.svg';
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
// import Button from 'react-bootstrap/Button';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import BasicExample from './Card';



function App() {

  let headerInfo = {

    email: 'ankurkumardwivedi779@gmail.com',
    phone: '7079076206'

  }

  return (
    <div className="main">
      <Header headerInfo={headerInfo}>
        <h1>This is header section</h1>
        <FontAwesomeIcon icon={faWhatsapp} className='text-success' />
      </Header>
      <Container fluid>
        <Container>
          <Row>
            <Col className="col-12 text-center py-10 my-5">
              Our Courses
            </Col>
          </Row>
          <Row>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Course - 01</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Course - 02</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Course - 03</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>Course - 04</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          {blog.map((v,i) => {
            return(
              <ProductItems pitem={v} key={i}/>
            );
          })}
          
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;

function ProductItems({pitem}) {
  return (
    <div class='mb-4 col-lg-3'>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>
            {pitem.title}
          </Card.Title>
          <Card.Text>
          {pitem.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}