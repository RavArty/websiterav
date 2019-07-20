import React from 'react';
import tsDescr  from './Descriptions'
import './TurtleSquad.scss'

const TurtleSquad = () =>{
	return(
		<div className='project-page'>
			<h1>TurtleSquad</h1>
			<iframe width="560" height="315" 
				src="https://www.youtube.com/embed/3UbeWYjb57s" 
				frameBorder="0" allow="accelerometer; autoplay; 
				encrypted-media; gyroscope; 
				picture-in-picture" allowFullScreen></iframe>
			<p className ='descr'>{tsDescr}</p>
		</div>
	);
}

export default TurtleSquad;