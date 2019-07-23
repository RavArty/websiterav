import React from 'react';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

const Footer = () =>{
	return(
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <h4 className="mb-0 font-weight-light">
              © 2019 <b>Ravshan Artykov</b>, All Rights Reserved 
            </h4>
          </Col>
          <Col>
            <h4 className="mb-0 font-weight-light">
              ravkart@gmail.com 
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
	);
}

export default Footer;