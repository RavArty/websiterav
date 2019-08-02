import React from 'react';
import Footer from '../../Footer/Footer'
import {turtleSquadDescription as tsDescr,
	turtleSquadDescription3 as tsDescr3}  from './Descriptions'

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";


class Rollocoball extends React.Component {

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
                <Col lg="5" md="6">
                  <h1 className="text-white">
									Rollocoball <br />
                    
                  </h1>
                  <p className="text-white mb-3">
									{tsDescr}
                  </p>
									<p className="text-white mb-3">
									{tsDescr3}
                  </p>
                  <div className="btn-wrapper mb-3">
                    
                    
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://goo.gl/miFXUK"
												rel="noopener noreferrer" 
												target="_blank"
                      >
                        <i className="fab fa-android" />
                      </Button>
                      
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://goo.gl/2mBMLy"
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
								src="https://www.youtube.com/embed/CjO5JsBL7BU" 
								frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen></iframe>
                </Col>
              </Row>
            </div>
          
		</div>
		<div className='section'>
			<Container className="text-center">
          <Row>
            <Col sm="4">
              
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/80jyrkG/rol1.jpg'
                />
            </Col>
            <Col sm="4">
           
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/GvsxkqZ/rol4.jpg'
                />

            </Col>
            <Col sm="4">
          
                <img
                  alt="..."
                  className="img-raised"
                  src='https://i.ibb.co/jGvtCcT/rol3.jpg'
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

export default Rollocoball;