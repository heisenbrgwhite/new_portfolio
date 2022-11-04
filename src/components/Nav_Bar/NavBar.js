import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
export const NavBar = () => {
  const [currentPosition, setCurrentPosition] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  console.log(currentPosition);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    const scrollListen = () => {
      var scroll = window.scrollY;
      if(scroll<300){
        setCurrentPosition('home');
      }
      else if(300<scroll && scroll<1500){
        setCurrentPosition('skills');
      }
      else if(scroll>1500) {
        setCurrentPosition('projects');
      }
      else if(scroll>2500) {
        setCurrentPosition('');
      }
    };
    window.addEventListener("scroll", scrollListen);
    return () => {
      window.removeEventListener("scroll", scrollListen);
    };
  },[]);
  return (
    <Navbar fixed="top" expand="md" className={`${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={img} class="logo" alt="profile"/>
        </Navbar.Brand>
        <h2>My Portfolio</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link ${
                currentPosition === "home" ? "active" : ""
              }`}
              
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${
                currentPosition === "skills" ? "active" : ""
              } navbar-link`}
              
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${
                currentPosition === "projects" ? "active" : ""
              } navbar-link`}
              
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <FaGithub className="icon-github" />
              </a>
              <a href="#">
                <FaLinkedin className="icon-linkedin" />
              </a>
            </div>
            <ScrollIntoView selector="#contact">
              <button onClick={() => {}}>
                <span>Contact Me!</span>
              </button>
            </ScrollIntoView>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
