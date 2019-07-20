import React from 'react';
import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as Apple } from '../../assets/apple.svg';
import {turtleSquadDescription as tsDescr,
				turtleSquadDescription2 as tsDescr2,
				turtleSquadDescription3 as tsDescr3}  from './Descriptions'
import './Rollocoball.scss'

const Rollocoball = () =>{
	return(
		<div className='project-page'>
			<h1>TurtleSquad</h1>
			<iframe width="560" height="315" 
				src="https://www.youtube.com/embed/3UbeWYjb57s" 
				frameBorder="0" allow="accelerometer; autoplay; 
				encrypted-media; gyroscope; 
				picture-in-picture" allowFullScreen></iframe>
			<p className ='descr'>{tsDescr}</p>

			<p className ='descr'>{tsDescr3}</p>

				<a  href="https://goo.gl/mZ0ZaY" target="_blank">
					<Android className = 'contact-logo'/>
				</a>
				<a  href="https://goo.gl/61M2VV" target="_blank">
					<Apple className = 'contact-logo'/>
				</a>
				
				<div className='proj-pics'>
					<div className='tc dib br3 pa3 ma2 mw6 shadow-5'>
						<img alt='' src='https://i.ibb.co/nr4bGQM/rol3.png' />
					</div>
					<div className='tc dib br3 pa3 ma2 mw6 shadow-5'>
						<img alt='' src='https://i.ibb.co/CJm0Nby/rol1.png' />
					</div>
					<div className='tc dib br3 pa3 ma2 mw6 shadow-5'>
						<img alt='' src='https://i.ibb.co/FwjLq7g/rol2.png' />
					</div>
				</div>
		</div>
	);
}

export default Rollocoball;
