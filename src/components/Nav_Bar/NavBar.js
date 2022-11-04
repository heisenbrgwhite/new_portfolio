import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import img from "../../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";
import { useEffect, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
export const NavBar = (props) =>{
  const LangIsJap = props.setLang;
  const[currentPosition, setCurrentPosition] = useState('home');
  const[scrolled, setScrolled] = useState(false);

  useEffect(()=>{

    const onScroll = () =>{
      if(window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return ()=>{ window.removeEventListener("scroll",onScroll);}
  },[])
    return (
    <Navbar fixed='top' expand="md" className={`${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home"><img src={img} class="logo"/></Navbar.Brand>
        <h2>{`${ LangIsJap ? "ポートフォリオ": "My Portfolio"}`}</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={`${currentPosition==="home" ? "active" : ""} navbar-link`} onClick={()=> {setCurrentPosition('home')}}>Home</Nav.Link>
            <Nav.Link href="#skills" className={`${currentPosition==="skills" ? "active" : ""} navbar-link`} onClick={()=> {setCurrentPosition('skills')}}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={`${currentPosition==="projects" ? "active" : ""} navbar-link`} onClick={()=> {setCurrentPosition('projects')}}>Projects</Nav.Link>
            <Nav.Link href="#" className="lang-button" onClick={()=> {props.setNewLang(!LangIsJap)}}>{`${LangIsJap ? "英語" : "日本語"}`}</Nav.Link>
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href='#'><FaGithub className='icon-github' /></a>
                    <a href='#'><FaLinkedin className='icon-linkedin' /></a>
                </div>
          <ScrollIntoView selector='#contact'><button onClick={()=>{}}><span>Contact Me!</span></button></ScrollIntoView>
        </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}