import React from 'react';
import tsDescr  from './Descriptions'
import Footer from '../../Footer/Footer'


import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";


class TurtleSquad extends React.Component {

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
									Turtle Squad <br />
                    
                  </h1>
                  <p className="text-white mb-3">
									{tsDescr}
                  </p>
                  <div className="btn-wrapper mb-3">
                    
                    
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href='https://goo.gl/mZ0ZaY'
												rel="noopener noreferrer" 
												target="_blank"
                      >
                        <i className="fab fa-android" />
                      </Button>
                      
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://goo.gl/61M2VV"
                        rel="noopener noreferrer" 
												target="_blank"
                      >
                        <i className="fab fa-apple" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="6" md="4">
								<iframe title='iframe' width="560" height="315" 
									src="https://www.youtube.com/embed/3UbeWYjb57s" 
									frameBorder="0" allow="accelerometer; autoplay; 
									encrypted-media; gyroscope; 
									picture-in-picture" allowFullScreen></iframe>
                </Col>
              </Row>
            </div>
          
		</div>
		<div className='section'>
			<Container className="text-center">
          <Row>
            <Col sm="3">
              
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/pbPBsHX/main.png'
                />
            </Col>
            <Col sm="3">
           
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/Sf8JkcB/chapter.png'
                />

            </Col>
            <Col sm="3">
          
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/Sx88jtP/gameplay2.png'
                />

            </Col>
						<Col sm="3">
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/Sx88jtP/gameplay2.png'
                />
            </Col>
          </Row>
        </Container>
				
		</div>
		<Footer/> 
		</div>
	);
	}

}

export default TurtleSquad;