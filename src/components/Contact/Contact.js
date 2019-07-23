import React from 'react';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Phone } from './phone.svg';
//import './Contact.scss'
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";


const Contact = () =>{
	return(

		
	<div className="section section-download"
        data-background-color="black"
        id="Contact"
      >
        <img alt="..." className="path" src={require("../../assets/img/path1.png")} />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Get In Touch
              </h2>
              
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                color="info"
                href="mailto:ravkart@gmail.com"
								rel="noopener noreferrer"
								target="_blank"
								role="button"
                size="lg"
              >
                Say Hello!
              </Button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-info font-weight-light mb-2">
                Thank you!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="linkedin"
								id="linkedin"
								href='https://www.linkedin.com/in/ravart/'
								target="_blank"
                size="lg"
              >
                <i className="fab fa-linkedin" />
              </Button>
              
              <Button
                className="btn-icon btn-round"
                color="facebook"
								id="facebook"
								href='https://www.facebook.com/Ravshan.Artykov'
								target="_blank"
                size="lg"
              >
                <i className="fab fa-facebook-square" />
              </Button>
             
              <Button
                className="btn-icon btn-round"
                color="github"
                href='https://github.com/RavArty'
								target="_blank"
                size="lg"
                
              >
                <i className="fab fa-github" />
              </Button>
              
            </Col>
          </Row>
        </Container>
      </div>
	);
}

export default Contact;