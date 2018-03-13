import React from 'react'

class AboutMe extends React.Component {
  render(){
    return (
      <div className='about'>
        <h1>Kelly Sample | <span className='pink-head'> Fullstack Web Developer</span></h1>
        <div id='about-para'>
            <p>Fluent in JavaScript, Ruby, SQL</p>
            <p>Mizzou Alum 🐯</p>
            <p>Loves programming and <a href="http://medium.com/kellydsample" target="_blank"> blogging</a> about it</p>
            <p>Lives in Alphabet City</p>
            <p>Passionate about problem solving, equity in education, running, and dogs</p>
            <p>Currently working on: Collaborative web socket <a href="http://github.com/kellystamps" target="_blank">project</a> with <a href="http://yamunanavada.com" target="_blank">Yamuna Navada</a></p>
        </div>
        
        <div id='about-picture'>
          <img id='xmas-tree' src={require('../images/XmasTree.jpeg')} height="300"/>
        </div>
        
      </div>
    )
  }
}

export default AboutMe