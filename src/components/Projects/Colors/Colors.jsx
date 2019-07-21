import React from 'react';

import  tsDescr  from './Descriptions'
import './Colors.scss'

const Colors = () =>{
	return(
		<div className='project-page'>
			<h1>Colors</h1>
			<div className='tc dib br3 pa3 ma2 mw6 shadow-5'>
						<img alt='' src='https://i.ibb.co/sV3vsJg/Screen-Shot-2019-07-18-at-11-02-42-PM.png' />
					</div>
			  <p className ='descr'>{tsDescr}</p>

	
				
				<div className='proj-list'>
					<p>Used technologies:</p>
				<ul>
				<li>Front End (React.js). Used Clarifai API to detect colors. Ability to sign in and see the whole history </li>
				<li>Back End (Express.js), RESTful API </li>
				<li>Database (PostgreSQL) to keep log in information, history (images, color codes)</li>
			</ul>
				</div>
		</div>
	);
}

export default Colors;