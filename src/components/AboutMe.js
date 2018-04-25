import React from 'react'

class AboutMe extends React.Component {
  render(){
    return (
      <div className='about'>
        <h1>Kelly Sample  <span className='pink-head'> Fullstack Web Developer</span></h1>
        <div id='about-para'>
            <p>A NYC based full stack web developer fluent in JavaScript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML5, CSS, and GitHub/Git. </p>
            <p>I'm creating something new every week and <a href="https://medium.com/@kellydsample" target="_blank"> blogging</a> about the experience. </p>

            <p>My current project is <a href="https://medium.com/@kellydsample/challenge-3-run-a-vanilla-js-project-in-your-browser-with-node-791e124aa2c6" target="_blank">learning how to launch a vanilla JS app in the browser with Node.</a></p>
        </div>

        <div id='about-picture'>
          <img id='xmas-tree' src={require('../images/XmasTree.jpeg')} height="350"/>
        </div>

      </div>
    )
  }
}

export default AboutMe
