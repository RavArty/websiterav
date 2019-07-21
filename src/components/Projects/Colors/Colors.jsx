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

export default Colors;