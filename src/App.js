import React from 'react';

import ScrollToTop from './ScrollToTop.js';
//import { Switch, Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing'
import NavbarComponent from './components/Navbar/Navbar'
import TurtleSquad from './components/Projects/TurtleSquad/TurtleSquad'
import Rollocoball from './components/Projects/Rollocoball/Rollocoball'
import Colors from './components/Projects/Colors/Colors'
import Resume from './components/Resume/Resume'
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    document.body.classList.toggle("index-page");
  }

  render() {
    return (
    <div>
      <NavbarComponent />
        <ScrollToTop>
          <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/turtlesquad' component={TurtleSquad} />
          <Route path='/rollocoball' component={Rollocoball} />
          <Route path='/resume' component={Resume} />
          <Route path='/colors' component={Colors} />
        </Switch>
        
      </ScrollToTop>
      
    </div>
  );
  }
  
}


export default App;


