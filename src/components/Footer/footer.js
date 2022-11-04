import "./footer.css";
import {BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsTwitch} from "react-icons/bs";
import { FaHeart, FaReact } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Nav } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <h2>Thanks for visiting!</h2>
          </Row>
          <Row className="align-items-center">
          <span className="socials">
            <Nav>
              <Nav.Link href="#home" className="socialIcon">
                <BsGithub />
              </Nav.Link>
              <Nav.Link href="#skills" className="socialIcon">
                <BsInstagram />
              </Nav.Link>
              <Nav.Link href="#projects" className="socialIcon">
                <BsLinkedin />
              </Nav.Link>
              <Nav.Link href="#projects" className="socialIcon">
                <BsTwitter />
              </Nav.Link>
              <Nav.Link href="#projects" className="socialIcon">
                <BsTwitch />
              </Nav.Link>
            </Nav>
          </span>
        </Row>
        <Row className="align-items-center">
            <h3 className="endNote">Made with <FaHeart color="red"/> and <FaReact color="blue"/> React.Js by Soumyajeet Sarkar</h3>
        </Row>
      </Container>
    </footer>
  );
};
