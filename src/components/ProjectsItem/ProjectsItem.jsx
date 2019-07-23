import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//import './ProjectsItem.styles.scss'

const ProjectsItem = ({title, imageUrl, history, linkUrl, match}) => (
    <Col sm="4">
        <div style={{padding: '25px'}}>
            <img
                alt="..."
                className="img-raised"
                src={`${imageUrl}?set=set2&size=180x180`}
            /> 
        </div>
        
        <Button
        className="btn-simple btn-round"
        color="primary"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        tab={Link}
        
        >
        View {title.toUpperCase()}
        </Button>
    </Col>    
    
    
)

export default withRouter(ProjectsItem)