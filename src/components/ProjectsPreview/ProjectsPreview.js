import React from 'react'

import { Container, Button, Row, Col } from "reactstrap";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



class ProjectsPreview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sections: [
        {
          title: 'turtle squad',
          imageUrl: 'https://i.ibb.co/p0HfyYr/turtles2.png',
          id: 1,
          linkUrl: 'turtlesquad'
        },
        {
          title: 'colors',
          imageUrl: 'https://i.ibb.co/G9h7J4H/colorsv2.png',
          id: 3,
          linkUrl: 'colors'
        },
        {
          title: 'rollocoball',
          imageUrl: 'https://i.ibb.co/Dzf3qPh/rollocoball.png',
          id: 2,
          linkUrl: 'rollocoball'
        },
        
      ] 
    }
  }

  componentDidMount() {
    document.body.classList.toggle("profile-page");
  }

  render(){
    const { history, match } = this.props
    return(
      <div id={'Projects'}>
        <div className='text-center'>
          <h2 className="title">PROJECTS</h2>
        </div>
        {/* Colors */}
        <div className='section'>
          <Container>
            <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                  <img
                    alt="..."
                    className="img-raised"
                    src='https://i.ibb.co/G9h7J4H/colorsv2.png'
                  /> 
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Colors</h1>
                  <h5 className="text-on-back">01</h5>
                  <h1 className="profile-description text-left">
                    A web app for detecting dominant colors on uploaded images.
                  </h1>
                  <div className="btn-wrapper pt-3">
                  
                    <Button
                      className="btn-simple"
                      color="info"
                      to='colors'
                      tag={Link}
                     // href="#pablo"
                     // onClick={() => history.push(`${match.url}colors`)}
                    >
                      <i className="tim-icons icon-bulb-63" /> Learn More
                    </Button>
                  </div>
                </Col>
              </Row>
          </Container>
          </div>
        <div className='section'>
          <Container>
            {/* Turtles */}
              <Row className="justify-content-between">
                <Col md="5">
                  <h1 className="profile-title text-left">Turtle Squad</h1>
                  <h5 className="text-on-back">02</h5>
                  <h1 className="profile-description text-left">
                    A puzzle arcade game written on Unity Engine.
                    Multiple levels, In-app purchases, rewards after watching ads.
                  </h1>
                  <div className="btn-wrapper pt-3">
                  
                    <Button
                      className="btn-simple"
                      color="info"
                    //  href="#pablo"
                      to='turtlesquad'
                      tag={Link}
                     // onClick={() => history.push(`${match.url}turtlesquad`)}
                    >
                      <i className="tim-icons icon-bulb-63" /> Learn More
                    </Button>
                  </div>
                </Col>
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                  <img
                    alt="..."
                    className="img-raised"
                    src='https://i.ibb.co/p0HfyYr/turtles2.png'
                  /> 
                  </Row>
                </Col>
              </Row>
             
              
            </Container> 
        </div>
        
          <div className='section'>
          <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                  <img
                    alt="..."
                    className="img-raised"
                    src='https://i.ibb.co/0Yxxw5L/rol2.jpg'
                  /> 
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Rollocoball</h1>
                  <h5 className="text-on-back">03</h5>
                  <h1 className="profile-description text-left">
                    An arcade game written on Unity Engine.
                    Simple, minimalistic one-touch game.
                    In-app purchases, rewards after watching ads
                  </h1>
                  <div className="btn-wrapper pt-3">
                  
                    <Button
                      className="btn-simple"
                      color="info"
                      to='rollocoball'
                      tag={Link}
                    //  href="#pablo"
                    //  onClick={() => history.push(`${match.url}rollocoball`)}
                    >
                      <i className="tim-icons icon-bulb-63" /> Learn More
                    </Button>
                  </div>
                </Col>
              </Row> 
            </Container> 
        </div>

        
        
            
        </div>      
    )
  }
}

export default withRouter(ProjectsPreview)