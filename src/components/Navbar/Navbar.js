import React, { Component } from "react";
import { Link as LinkScroll, animateScroll } from "react-scroll";
import { Link } from 'react-router-dom'
import { withRouter} from 'react-router-dom'
import logo from './logo.png'
import './Navbar.scss'

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap'


class NavbarComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    }
  }
  scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToContact = () => {
    document
      .getElementById("Contact")
      .scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  render() {

    if (this.props.history.location.pathname !== '/'){
      return(
        <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
          <NavbarBrand
              data-placement="bottom"
              to='/'
              tag={Link}
            >
              <span>{`<RavArty>`}</span>
      
            </NavbarBrand>
            </div>
            </Container>
            </Navbar>
        
      );
    }else {
      return (
        <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
          <NavbarBrand
              data-placement="bottom"
              onClick={this.scrollToTop}
              tag={Link}
            >
              <span>{`<RavArty>`}</span>
              
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    RA
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
              <NavLink
                  data-placement="bottom"
                  href="https://www.linkedin.com/in/ravart/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
              <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/Ravshan.Artykov"
                  rel="noopener noreferrer"
                  target="_blank" 
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
              <NavLink
                  data-placement="bottom"
                  href="https://github.com/RavArty"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
              </NavItem>
              <div className='linkscroll'>
              <a onClick={this.scrollToTop}>HOME</a>
              </div>
              
              <LinkScroll className='linkscroll'
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </LinkScroll>
              
              
              <LinkScroll className='linkscroll'
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </LinkScroll>
              
                
              <NavLink className='linkscroll'
                href="https://github.com/RavArty/resume/blob/master/RavshanArtykovResume.pdf"
                rel="noopener noreferrer" 
                target="_blank"
                
              >
                <p>RESUME</p>
              </NavLink>
                     
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
        /*
         <div className='header'>
            <a className='logo-container' onClick={this.scrollToTop}>
              <div className="pa3" style={{ height: 100, width: 100 }}>
                <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
              </div>
            </a>
            <div className='options'>
              <a className='option' onClick={this.scrollToTop}>HOME</a>

              <Link className='option'
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                PROJECTS
              </Link>
              <Link className='option'
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > 
                ABOUT
              </Link> 
              
              <LinkTo className='option' to='/resume'> 
                RESUME
              </LinkTo>
              <Link className='option'
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </div>
      </div>
        */
       
      );
    }
    
  }
}

export default withRouter(NavbarComponent)