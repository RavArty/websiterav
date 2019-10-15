/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class OtherProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h2 className="title">OTHER PROJECTS</h2>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              {/* <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div> */}
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    
                    <NavItem>
                      <NavLink
                        href="https://github.com/RavArty/TwitterClient"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github" />

                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                      <h3>Twitter Client</h3>
                      <p>
                      A simple Twitter client that initially shows general 
                      public tweets. It allows the user to specify a Twitter 
                      handle to view tweets from. After requesting tweets from 
                      a specific user, you can filter/search tweets by text.
                      </p>
                    
                
                 
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    
                    <NavItem>
                      <NavLink
                        href="https://github.com/RavArty/setjwtfront"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github" />

                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                      <h3>Sessions+JWT</h3>
                      <p>
                      A reusable library. If the user signs in and refreshes the page, 
                      he remains signed in. A received token can also be used as access 
                      to whatever a user has right to. The token generates on a backend 
                      server and stores this token in Redis.
                      
                      </p>
                    
                
                 
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    
                    <NavItem>
                      <NavLink
                        href="https://github.com/RavArty/macys_clone"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-github" />

                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                      <h3>E-commerse Website</h3>
                      <p>
                      A fully functional e-commerce website. 
                      Users can sign in using Google account or email/password. 
                      Add/remove items from the cart and proceed to checkout.
                      </p>
                    
                
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OtherProjects;
