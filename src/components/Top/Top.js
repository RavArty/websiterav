import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Container } from "reactstrap";
//import './Top.scss'



const Top = () =>{

	return(
		<div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Ravshan Artykov</h1>
            <h3 className="d-none d-sm-block">
            I'm a software engineer specializing in building high-quality websites and applications.
            </h3>
          </div>
        </Container>
      </div>
	);
}

export default Top;