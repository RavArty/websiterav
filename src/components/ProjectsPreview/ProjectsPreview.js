import React from 'react'
import ProjectsItem from '../ProjectsItem/ProjectsItem'
import './ProjectsPreview.styles.scss'

class ProjectsPreview extends React.Component {
  constructor(){
    super()
    this.state = {
      sections: [
        {
          title: 'turtlesquad',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'turtlesquad'
        },
        {
          title: 'rollocoball',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'rollocoball'
        },
        {
          title: 'colors',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'colors'
        },
      ] 
    }
  }
  render(){
    return(
      <div className='directory-menu'>
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <ProjectsItem key={id} {...otherSectionProps} />
      ))}
    </div>
    )
  }
}

export default ProjectsPreview