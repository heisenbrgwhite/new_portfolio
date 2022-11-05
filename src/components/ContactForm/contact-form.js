import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "../../assets/contact-me.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact-form.css";
export const ContactForm = () => {
  const formInitialDetails = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const updateFormDetails=(attr, val) =>{
      setFormDetails({
          ...formDetails,
          [attr] : val
      })
  }
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      setButtonText('Sending...');
      emailjs
        .sendForm(
          "service_zuqkcj2",
          "template_sd5m3w6",
          form.current,
          "-CIvMj6mZ95rm1sEj"
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus({success: true, message: "Message sent successfully"});
            setButtonText('Send');
            setFormDetails(formInitialDetails);
          },
          (error) => {
            setStatus({success: false, message: error.text})
            console.log(error.text);
          }
        );
    };
    // setStatus({success: true, message: 'Message sent Successfully'});

    // setStatus({success: false, message: "Something went wrong. Please Try again later."})
  
  return (
    <>
      <section id="contact" className="contactForm">
        <Container>
          <Row className="items-align-center">
            <Col md={6}>
              <img src={img} alt="contact-me" />
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="FirstName"
                      name="user_firstName"
                      onChange={(e) => {
                        updateFormDetails("firstName", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      name="user_lastName"
                      placeholder="LastName"
                      onChange={(e) => {
                        updateFormDetails("lastName", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      name="user_email"
                      placeholder="Email"
                      onChange={(e) => {
                        updateFormDetails("email", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="number"
                      value={formDetails.phone}
                      name="user_phone"
                      placeholder="Phone No."
                      onChange={(e) => {
                        updateFormDetails("phone", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <input
                      className="textarea"
                      type="text"
                      value={formDetails.message}
                      name="user_message"
                      placeholder="Your Message"
                      onChange={(e) => {
                        updateFormDetails("message", e.target.value);
                      }}
                    />
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "error" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
