import React from 'react';
import { ReactComponent as Android } from '../../assets/android.svg';
import { ReactComponent as Apple } from '../../assets/apple.svg';
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

				<a  href="https://goo.gl/mZ0ZaY" target="_blank">
					<Android className = 'contact-logo'/>
				</a>
				<a  href="https://goo.gl/61M2VV" target="_blank">
					<Apple className = 'contact-logo'/>
				</a>
				
				<div className='proj-pics'>
					<div className='tc dib br3 pa3 ma2 mw5 shadow-5'>
						<img alt='' src='https://i.ibb.co/pbPBsHX/main.png' />
					</div>
					<div className='tc dib br3 pa3 ma2 mw5 shadow-5'>
						<img alt='' src='https://i.ibb.co/Sf8JkcB/chapter.png' />
					</div>
					<div className='tc dib br3 pa3 ma2 mw5 shadow-5'>
						<img alt='' src='https://i.ibb.co/Sx88jtP/gameplay2.png' />
					</div>
					<div className='tc dib br3 pa3 ma2 mw5 shadow-5'>
						<img alt='' src='https://i.ibb.co/Sx88jtP/gameplay2.png' />
					</div>
				</div>
		</div>
	);
}

export default TurtleSquad;