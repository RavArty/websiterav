import React from 'react';
import './Resume.scss'
import resume from './RavshanArtykovResume.pdf'
import { Document } from 'react-pdf';


class Resume extends React.Component {
 

 
  render() {
   
 
    return (
      <div className="wrapper">
        <div style={{ width: 600 }}>
          <Document
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            
          </Document>
        </div>
        
      </div>
    );
  }
}

export default Resume;