import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { FaPhabricator } from "react-icons/fa";
import img from "../../assets/contact-me.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact-form.css";
export const ContactForm = ()=>{
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const updateFormDetails=(attr, val) =>{
        setFormDetails({
            ...formDetails,
            [attr] : val
        })
    }

    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success: true, message: 'Message sent Successfully'});
        }
        else setStatus({success: false, message: "Something went wrong. Please Try again later."})
    }
    return <>
        <section id="contact" className="contactForm">
            <Container>
                <Row className="items-align-center">
                    <Col md={6} >
                        <img src={img} alt="contact-me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={onSubmitHandler}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="FirstName" onChange={(e)=>{updateFormDetails('firstName', e.target.value)}}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="LastName" onChange={(e)=>{updateFormDetails('lastName', e.target.value)}}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=>{updateFormDetails('email', e.target.value)}}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="number" value={formDetails.phone} placeholder="Phone No." onChange={(e)=>{updateFormDetails('phone', e.target.value)}}/>
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input className="textarea" type="text" value={formDetails.message} placeholder="Your Message" onChange={(e)=>{updateFormDetails('message', e.target.value)}}/>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                { status.message && 
                                    <Col>
                                        <p className={status.success === false ? "error" : "success"}>{status.message}</p>
                                    </Col>
                                    }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}