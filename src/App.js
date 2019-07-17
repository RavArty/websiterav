import React from 'react';
import "./App.css";
//import { Switch, Route } from 'react-router-dom';
import Landing from './components/LandingPage/Landing'
import Navbar from './components/Navbar/Navbar'
import TurtleSquad from './components/Projects/TurtleSquad/TurtleSquad'
import Rollocoball from './components/Projects/Rollocoball/Rollocoball'
import Colors from './components/Projects/Colors/Colors'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/turtlesquad' component={TurtleSquad} />
        <Route path='/rollocoball' component={Rollocoball} />
        <Route path='/colors' component={Colors} />
      </Switch>
      
    </div>
  );
}

export default App;


