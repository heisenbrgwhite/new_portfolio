import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactVisibilitySensor from "react-visibility-sensor";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.css";
import { useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

export const Skills = () => {

  // useEffect(()=>{
  //   const onScroll = () =>{
  //     document.getElementById('projects').scrollIntoView({behaviour: 'smooth'});
  //   }
  //   window.addEventListener("scroll", onScroll);
  //   return ()=>{ window.removeEventListener("scroll",onScroll);}
  // },[])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="skills">
      <Container>
      
        <Row className="justify-items-center">
          <Col>
            <div className="skills-box">
              <h2>My Skills</h2>
              <p>About my skills and how did i learned it.</p>
              <Carousel
                showArrows={true}
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="skill-item">
                <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 85 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>Html</h5>
                </div>

                <div className="skill-item">
                  <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>CSS</h5>
                </div>

                <div className="skill-item">
                <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 75 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>React.Js</h5>
                </div>

                <div className="skill-item">
                <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 68 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>Node.Js</h5>
                </div>

                <div className="skill-item">
                <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>Firebase</h5>
                </div>
                <div className="skill-item">
                <ReactVisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 80 : 0;
                      return (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                        />
                      );
                    }}
                  </ReactVisibilitySensor>
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </Col>
          </Row>
          <Row className="justify-content-center">
          <ScrollIntoView selector="#projects" className="click-text">
            <p>Click to see my projects!</p>
            <FaChevronDown className="scroll-down-icon"  />
          </ScrollIntoView>
        </Row>
      </Container>
      {/* <span className="skill-image"><img src={skill}/></span> */}
    </section>
  );
};
