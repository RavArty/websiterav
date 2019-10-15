import React from 'react';
import ProjectsPreview from '../ProjectsPreview/ProjectsPreview'
import OtherProjects from '../OtherProjects/OtherProjects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Top from '../Top/Top'


const Landing = () =>{

	return(
    <div>
      <Top/>
      <ProjectsPreview/>
      <OtherProjects/>
     {/*<About/> */} 
      <Contact />    
      <Footer/>  
    </div>
 
	);
}

export default Landing;