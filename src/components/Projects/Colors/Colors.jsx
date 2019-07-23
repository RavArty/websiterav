import React from 'react';
import Footer from '../../Footer/Footer'
import  tsDescr  from './Descriptions'
import './Colors.scss'

import {
  Button,
  Row,
  Col
} from "reactstrap";


class Colors extends React.Component {

	componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
	}
	render(){
			return(
		<div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("../../../assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("../../../assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("../../../assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("../../../assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("../../../assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("../../../assets/img/cercuri.png")}
            />

				<div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
									Colors <br />
                    
                  </h1>
                  <p className="text-white mb-3">
									{tsDescr}
                  </p>
									<div className='proj-list'>
									<p className="text-white mb-3">Used technologies:</p>
										<ul className="text-white mb-3">
											<li>Front End (React.js). Used Clarifai API to detect colors. Ability to sign in and see the whole history </li>
											<li>Back End (Express.js), RESTful API </li>
											<li>Database (PostgreSQL) to keep log in information, history (images, color codes)</li>
										</ul>
									</div>
								
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://colorappfront.herokuapp.com"
												rel="noopener noreferrer" 
												target="_blank"
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="1">
								<img
                    alt="..."
                    className="img-fluid"
                    src='https://i.ibb.co/McfyRfp/colors.png' />
                  
                </Col>
              </Row>
            </div>
          
		</div>
		
		<Footer/> 
		</div>
	);
	}

}

export default Colors;