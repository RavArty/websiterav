import React from 'react';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Phone } from './phone.svg';
import './Contact.scss'


const Contact = () =>{
	return(
		<div className='tc' id={'Contact'}>
			<h1>CONTACTS</h1>
			<div className='contact-header'>
				<table style={{width: '100%'}}>
					<tr>
						<th><Email className = 'contact-logo'/></th>
						<th><Phone className = 'contact-logo'/></th> 
					</tr>
					<tr>
						<td><a href="mailto:ravkart@gmail.com" target="_blank">ravkart@gmail.com</a></td>
						<td>+1 (310) 227-9274</td>
					</tr>
				</table>

			</div>
		</div>
	);
}

export default Contact;