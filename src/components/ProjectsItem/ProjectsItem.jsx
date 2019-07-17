import React from 'react'
import { withRouter } from 'react-router-dom'
import './ProjectsItem.styles.scss'

const ProjectsItem = ({title, imageUrl, history, linkUrl, match}) => (
    <div className='menu-item'
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>LEARN MORE</span>
        </div>
    </div>
    
)

export default withRouter(ProjectsItem)