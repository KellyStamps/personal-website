import React from 'react';
import './App.css';
import Contact from './Contact'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'


class App extends React.Component {
  render() {
    return (
      <div id="App">
          <AboutMe/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
    );
  }
}

export default App;
