import React from 'react';
import './Resume.scss'



const Resume = () =>{
	return(
	
<div>
	<div style={{width: '100%', textAlign: 'end', padding: '25px 35px'}}>
		<a  className='git-link' href="https://github.com/RavArty/resume/blob/master/RavshanArtykovResume.pdf" target="_blank">
			<h3>Download GitHub Resume</h3>
		</a>
	</div>

<div id="cv">
	<div className="mainDetails">
		
		
		<div id="name">
			<h1>Ravshan Artykov</h1>

		</div>
		
		<div id="contactDetails" >
			<ul>
				<li>e: <a href="mailto:ravkart@gmail.com" target="_blank">ravkart@gmail.com</a></li>
				<li>w: <a href="www.ravarty.com">www.ravarty.com</a></li>
				<li>m: (310) 227-9274</li>
			</ul>
		</div>
		<div className="clear"></div>
	</div>
	
	<div id="mainArea" className="quickFade delayFive">
		
    <section>
			<div className="sectionTitle">
				<h1>Education</h1>
			</div>
			
			<div className="sectionContent">
				<article>
          <table className='educat-header'>
            <tr>
              <td><h2>UCLA Extension</h2></td>
              <td style={{ textAlign : 'right'}}><h3>June 2018 – Present</h3></td>
            </tr>
          </table>
					
					<p className="subDetails">Systems Analysis Certificate</p>
					<p><strong>Coursework:</strong> Relational Database Management, Network Communications with TCP/IP, Big Data, Architecting Cloud Solutions Using AWS, Python, Java</p>
				</article>
				
        <article>
          <table className='educat-header'>
            <tr>
              <td><h2>Moscow Engineering & Physics Institute</h2></td>
              <td style={{textAlign : 'right', verticalAlign: 'bottom', marginBottom: '-2px'}}><h3>Sept 2005 – June 2010</h3></td>
            </tr>
          </table>
					
					<p className="subDetails">B.S. in Computer Science and Applied Mathematics</p>
					<p><strong>Coursework:</strong> Systems and Applications Software, Unix Administration, SQL-programming, Data Networks, Software System Support Development</p>
				</article>
			  </div>
			    <div className="clear"></div>
		    </section>
				<section>
			<div className="sectionTitle">
				<h1>Key Skills</h1>
			</div>
			
			<div className="sectionContent">
				<ul className="keySkills">
					<li>JavaScript</li>
					<li>ReactJS</li>
					<li>Redux</li>
					<li>NodeJS</li>
					<li>ExpressJS</li>
					<li>SQL</li>
					<li>Java</li>
					<li>C#</li>
					<li>Swift</li>
					<li>Python</li>
					<li>UnityEngine</li>
					<li>Git</li>
				</ul>
			</div>
			<div className="clear"></div>
		</section>
	    <section>
			
			<div className="sectionTitle">
				<h1>Software Projects</h1>
			</div>
			
			<div className="sectionContent">
				<article>
					<h2>Web Project "Colors"</h2>
          <ul className='proj-content'>
            <li>Front End (React.js). Used Clarifai API to detect colors. Ability to sign in and see the whole history</li>
            <li>Back End (Express.js), RESTful API</li>
            <li>Database (PostgreSQL) to keep login information, history (images, color codes)</li>
          </ul>
				</article>
				
				<article>
					<h2>IOS/Android App: “Rollocoball"</h2>
          <ul className='proj-content'>
            <li>Developed an arcade game using Unity 3D Engine (C#)</li>
            <li>Simple, minimalistic one-touch game</li>
						<li>In-app purchases, rewards after watching ads</li>
            <li><strong>IOS:</strong> <a className='linkStyle' href="https://goo.gl/2mBMLy" target="_blank">https://goo.gl/2mBMLy</a></li>
            <li><strong>Android:</strong> <a className='linkStyle' href="https://goo.gl/miFXUK" target="_blank">https://goo.gl/miFXUK</a></li>
            <li><strong>YouTube:</strong> <a className='linkStyle' href="https://youtu.be/CjO5JsBL7BU" target="_blank">https://youtu.be/CjO5JsBL7BU</a></li>
				  </ul>
				</article>
				
				<article>
					<h2>IOS/Android App: “Rollocoball"</h2>
          <ul className='proj-content'>
            <li>Developed an arcade game using Unity 3D Engine (C#)</li>
            <li>Simple, minimalistic one-touch game</li>
						<li>In-app purchases, rewards after watching ads</li>
            <li><strong>IOS:</strong> <a className='linkStyle' href="https://goo.gl/2mBMLy" target="_blank">https://goo.gl/2mBMLy</a></li>
            <li><strong>Android:</strong> <a className='linkStyle' href="https://goo.gl/miFXUK" target="_blank">https://goo.gl/miFXUK</a></li>
            <li><strong>YouTube:</strong> <a className='linkStyle' href="https://youtu.be/CjO5JsBL7BU" target="_blank">https://youtu.be/CjO5JsBL7BU</a></li>
				  </ul>
				</article>
			</div>
			<div className="clear"></div>
		</section>
    <section>
			<div className="sectionTitle">
				<h1>Work Experience</h1>
			</div>
			
			<div className="sectionContent">
				<article>
					<h2>Partner Business Manager</h2>
					<h3>Hewlett Packard Enterprise (Moscow, Russia)</h3>
					<p className="subDetails">Sept 2017 – May 2018</p>
					<ul className='proj-content'>
            <li>Increased revenue by 20%</li>
            <li>Increased Silver partners by 10% (Silver partner – a partner with revenue > $500K)</li>
						<li>Increased HPE offerings of five partners’ businesses by 50%</li>
						<li>Established relationships with partners at all organization levels including senior executives</li>
						<li>Actively engaged company resources and senior executives to build strategic relationships with the partners, which ensured long-term business opportunities for the company</li>
					 </ul>
					</article>
				
					<article>
					<h2>Credit Decision developer</h2>
					<h3>Citibank (Moscow, Russia)</h3>
					<p className="subDetails">July 2013 – July 2016</p>
					<ul className='proj-content'>
            <li>Improved productivity by 20% through releasing a data converter to .xls format (Java)</li>
            <li>Integrated a Russian Credit Decision platform into a global credit platform (160+ countries)</li>
						<li>Implemented new credit policies in a Credit Decision system</li>
						<li>Analyzed entering inquiries connected with the introduction of new credit policies</li>
					</ul>
					</article>
				
					<article>
					<h2>Financial Advisor</h2>
					<h3>Alor (Moscow, Russia)</h3>
					<p className="subDetails">May 2011 – Nov 2012</p>
					<ul className='proj-content'>
            <li>Direct sales of professional services</li>
            <li>Participated in exhibitions on behalf of the company</li>
						<li>Conducted meetings and negotiated with potential clients</li>
					</ul>
					</article>
					<article>
					<h2>Software Developer</h2>
					<h3>CMA Small Systems AB (Moscow, Russia)</h3>
					<p className="subDetails">Nov 2009 – Feb 2011</p>
					<ul className='proj-content'>
            <li>Software development for MICEX Settlement House (Electronic Settlements System)</li>
            <li>Optimized SQL queries</li>
						<li>Enhanced processes for an Electronic Settlement System</li>
						<li>Analyzed requirements and developed specifications for an Electronic Settlement System</li>
					</ul>
					</article>
					<article>
					<h2>Software Technical Support</h2>
					<h3>CMA Small Systems AB (Moscow, Russia)</h3>
					<p className="subDetails">Apr 2008 – Nov 2009</p>
					<ul className='proj-content'>
            <li>Installed software (currency/stock exchange trading applications)</li>
            <li>Technically supported on site (30+ financial organizations)</li>
						<li>Configured and set up customers’ trading system subnets</li>
					</ul>
					</article>
			</div>
			<div className="clear"></div>
		</section>
		
	</div>
</div>


</div>
	);
}

export default Resume;