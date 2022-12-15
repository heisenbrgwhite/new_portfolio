import { Row, Container, Col } from "react-bootstrap";
import "./projects.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import valflix from "../../assets/valflix.JPG";
import chatify from "../../assets/chatify.jpg";
import workInProgress from "../../assets/work_in_progress.jpg"
import tictactoe from "../../assets/tictactoe.png";
export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <Row>
          <h2>My Projects</h2>
          <p>These are some of my projects I decided to upload. I am working on more projects while learning about new technologies.</p>

          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={tictactoe} />
              <Card.Body>
                <Card.Title>TIC-TAC-TOE</Card.Title>
                <Card.Text>
                  A game of tic-tac-toe and one of my very first React projects I made when I started developing with React.
                </Card.Text>
                <Button variant="primary" href="https://tictactoe-soumyajeet.netlify.app/">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={valflix} />
              <Card.Body>
                <Card.Title>Valflix</Card.Title>
                <Card.Text>
                  A netflix clone that I built while learning firebase and styled Components. I used Firebase for the database/API and I used styled components and REACT to design the UI.
                </Card.Text>
                <Button variant="primary" href="https://sarkar-soumyajeet-valflix.netlify.app">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={chatify} />
              <Card.Body>
                <Card.Title>Chatify</Card.Title>
                <Card.Text>
                  This is a normal chat app built with Firebase. It has the functionality of chatting in realtime with all the existing users. 
                </Card.Text>
                <Button variant="primary" href="https://soumyajeet-sarkar-chatify.netlify.app">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={workInProgress} />
              <Card.Body>
                <Card.Title>Sort Visualizer</Card.Title>
                <Card.Text>
                  This project visualizes sorting methods on random generated array. Sort methods include Bubble Sort, Insertion Sort and Merge Sort.
                  ***I am currently working on this project***
                </Card.Text>
                <Button variant="primary" href="https://sort-visualizer-soumyjeetsarkar.netlify.app">Go to Website</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} xl={6} className="project-item">
            <Card style={{ width: "90%" }} className="project">
              <Card.Img variant="top" src={workInProgress} />
              <Card.Body>
                <Card.Title>More Projects Coming Soon</Card.Title>
                <Card.Text>
  
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
