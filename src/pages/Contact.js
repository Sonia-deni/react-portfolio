import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactForm from "../components/ContactForm/ContactForm";
//import Alert from "../components/Alert";


class Contact extends Component {

  render(){

    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Contact Me</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
            <ContactForm/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;

