import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";
import { Link as LinkTo } from 'react-router-dom'
import { withRouter} from 'react-router-dom'
import logo from './logo.png'
import './Navbar.scss'


class Navbar extends Component {
  constructor(props){
    super(props)
 //   console.log(props.history)
  }
  scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {

    if (this.props.history.location.pathname !== '/'){
      return(
        <div className='header'>
          <LinkTo className='logo-container' to='/'>
            <div className="pa3" style={{ height: 100, width: 100 }}>
	          <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
          </div>
          </LinkTo>
        </div>
      );
    }else {
      return (
        <div className='header'>
            <a className='logo-container' onClick={this.scrollToTop}>
              <div className="pa3" style={{ height: 100, width: 100 }}>
                <img style={{paddingTop: '5px'}} alt='logo' src={logo}/>
              </div>
            </a>
            <div className='options'>
              <a className='option' onClick={this.scrollToTop}>HOME</a>

              <Link className='option'
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                PROJECTS
              </Link>
              {/*<Link className='option'
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              > 
                ABOUT
              </Link> */}
              
              <LinkTo className='option' to='/resume'> 
                RESUME
              </LinkTo>
              <Link className='option'
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </div>
      </div>
      );
    }
    
  }
}

export default withRouter(Navbar)