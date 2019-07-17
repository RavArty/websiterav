import React from 'react';
import ProjectsPreview from '../ProjectsPreview/ProjectsPreview'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Top from '../Top/Top'


const Landing = () =>{

	return(
    <div>
      <Top/>
      <ProjectsPreview/>
      <About/>
      <Contact />      
    </div>
 
	);
}

export default Landing;