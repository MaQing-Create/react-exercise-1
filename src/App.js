import React, { Component } from 'react';
import './App.scss';
import Photograph from './components/Photograph.js'
import Introduce from './components/Introduce.js'
import SplitLine from './components/SplitLine.js'
import AboutMe from './components/AboutMe.js'
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
        <div className="app" style={{marginTop:150+'px'}}>
          <Photograph/>
          <Introduce/>
          <SplitLine/>
          <AboutMe/>
          <Education/>
        </div>

        );
  }
}

export default App;
