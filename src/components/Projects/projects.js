import { Row, Container, Col } from "react-bootstrap";
import "./projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import valflix from "../../assets/valflix.JPG";
import chatify from "../../assets/chatify.jpg";
export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <h2>My Projects</h2>
          <p>About my projects and how i made it</p>
          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={valflix} />
              <Card.Body>
                <Card.Title>Valflix</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" href="#">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={chatify} />
              <Card.Body>
                <Card.Title>Chatify</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" href="#">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
