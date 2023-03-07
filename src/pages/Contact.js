import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactForm from "../components/ContactForm/ContactForm";
//import Alert from "../components/Alert";


function Contact (){
  return (
    <div>
        <Container style={{ marginTop: 30}} >
          <Row>
            <Col size="md-6">
              <h1>Contact Me</h1>
              <h4><FontAwesomeIcon icon={faEnvelope}/> sonia_deni@hotmail.com</h4>
              <h4><FontAwesomeIcon icon={faFilePdf}/> CV </h4>
              <h4><a href="https://github.com/Sonia-deni"><FontAwesomeIcon icon={faSquareGithub} /></a></h4>
              <h4><a href="https://www.linkedin.com/in/sonia-denikiewicz/"><FontAwesomeIcon icon={faLinkedin} /></a></h4>
            </Col>
            <Col size="md-6">
            <ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
    );
}


export default Contact;

