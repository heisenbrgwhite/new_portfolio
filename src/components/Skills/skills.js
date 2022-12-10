import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown, FaNodeJs, FaReact, FaAws, FaJava } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {SiCss3, SiJavascript, SiFirebase, SiMongodb, SiPostgresql, SiPython , SiGithub} from 'react-icons/si'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Skills = () => {
  useEffect(() => {
    AOS.init({
      disable:'mobile'
    });
    AOS.refresh();
  }, []);
  return (
    <section id="skills" className="skills">
      <Container>
        <Row className="justify-items-center">
          <Col>
            <div className="title-box">
              <h2>My Skills</h2>
              <p>These are some of the skills I have acquired and have been learning, since I started programming and developing. I am constantly studying and trying to learn more.</p>
            </div>
            <div className="skills-list">
              <div //html
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <AiFillHtml5 />
                <h5>Html</h5>
              </div>

              <div //css
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiCss3  />
                <h5>CSS</h5>
              </div>

              <div //react
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <FaReact  />
                <h5>React</h5>
              </div>

              <div //nodejs
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <FaNodeJs  />
                <h5>NodeJS</h5>
              </div>

              <div //mongo db
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiMongodb />
                <h5>MongoDB</h5>
              </div>
                
              <div // firebase
              className="skill-item">
                <SiFirebase/> 
                <h5>Firebase</h5>
              </div>

              <div //aws
              className="skill-item">
                <FaAws />
                <h5>AWS</h5>
              </div>

              <div //sql
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiPostgresql  />
                <h5>SQL</h5>
              </div>

              <div //javascript
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiJavascript  />
                <h5>JavaScript</h5>
              </div>

              <div //python
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiPython />
                <h5>Python</h5>
              </div>

              <div //git
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <SiGithub />
                <h5>Git</h5>
              </div>

              <div //java
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="skill-item"
              >
                <FaJava  />
                <h5>Java</h5>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ScrollIntoView selector="#projects" className="click-text">
            <p>Click to see my projects!</p>
            <FaChevronDown className="scroll-down-icon" />
          </ScrollIntoView>
        </Row>
      </Container>
      {/* <span className="skill-image"><img src={skill}/></span> */}
    </section>
  );
};
