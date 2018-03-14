import React from 'react'

class AboutMe extends React.Component {
  render(){
    return (
      <div className='about'>
        <h1>Kelly Sample | <span className='pink-head'> Fullstack Web Developer</span></h1>
        <div id='about-para'>
            <p>After working in jobs I loved but didn't challenge me enough, I started teaching myself to code. A year later I'm a proud Flatiron School graduate.</p>
            <p>I'm fluent in JavaScript, React, Ruby, Rails, SQL, and Git. </p> 
            <p>I'm creating something new every week and <a href="https://medium.com/@kellydsample" target="_blank"> blogging</a> about it. 

            My current project is <a href="http://github.com/kellystamps/personal-website" target="_blank">This portfolio site </a>. </p>
        </div>
        
        <div id='about-picture'>
          <img id='xmas-tree' src={require('../images/XmasTree.jpeg')} height="300"/>
          <img id='rigby' src={require('../images/IMG_6998.jpg')} height="200"/>
        </div>
        
      </div>
    )
  }
}

export default AboutMe