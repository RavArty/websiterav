import React from 'react'
import ProjectsItem from '../ProjectsItem/ProjectsItem'
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "reactstrap";
//import './ProjectsPreview.styles.scss'

class ProjectsPreview extends React.Component {
  constructor(){
    super()
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
          imageUrl: 'https://i.ibb.co/McfyRfp/colors.png',
          id: 3,
          linkUrl: 'colors'
        },
        {
          title: 'rollocoball',
          imageUrl: 'https://i.ibb.co/0Yxxw5L/rol2.jpg',
          id: 2,
          linkUrl: 'rollocoball'
        },
        
      ] 
    }
  }
  render(){
    return(
      
      <div className="section section-examples" data-background-color="black">
        <img alt="..." className="path" src={require("../../assets/img/path1.png")} />
        <div className="space-50" />
        <div className='text-center'>
          <h2 className="title">PROJECTS</h2>
        </div>
        <Container className="text-center">
          <Row>
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <ProjectsItem key={id} {...otherSectionProps} />
                      ))}
          </Row>
        </Container>
      </div>
    
    )
  }
}

export default ProjectsPreview