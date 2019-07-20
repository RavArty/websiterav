import React from 'react'
import ProjectsItem from '../ProjectsItem/ProjectsItem'
import './ProjectsPreview.styles.scss'

class ProjectsPreview extends React.Component {
  constructor(){
    super()
    this.state = {
      sections: [
        {
          title: 'turtle squad',
          imageUrl: 'https://i.ibb.co/6PvYXwZ/turtlesquad.png',
          id: 1,
          linkUrl: 'turtlesquad'
        },
        {
          title: 'colors',
          imageUrl: 'https://i.ibb.co/sV3vsJg/Screen-Shot-2019-07-18-at-11-02-42-PM.png',
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
  render(){
    return(
      <div id={'Projects'}>
        <h1 style={{width: '100%', textAlign: 'center', padding: '50px 35px'}}>PROJECTS</h1>
        <div className='directory-menu' >
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <ProjectsItem key={id} {...otherSectionProps} />
          ))}
        </div>
      </div>
      
    )
  }
}

export default ProjectsPreview