import React from 'react'

class AboutMe extends React.Component {
  render(){
    return (
      <div className='about'>
        <h1>Kelly Sample  <span className='pink-head'> Fullstack Web Developer</span></h1>
        <div id='about-para'>
            <p>A NYC based full stack web developer fluent in JavaScript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML5, CSS, and GitHub/Git. </p>
            <p>I'm creating something new every week and <a href="https://medium.com/@kellydsample" target="_blank"> blogging</a> about the experience. </p>

            <p>My current project is <a href="https://github.com/KellyStamps/auth-app" target="_blank">a React + Rails app</a> utilizing authorization and authentication. </p>
        </div>

        <div id='about-picture'>
          <img id='xmas-tree' src={require('../images/XmasTree.jpeg')} height="350"/>
        </div>

      </div>
    )
  }
}

export default AboutMe
