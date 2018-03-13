import React from 'react'

class Contact extends React.Component {
  render(){
    return (
      <div className='contact'>
        <h2>Have questions or wanna chat?</h2> 
        <h2>Email me at: <span className='pink-head'>KellyDSample@gmail.com</span></h2>
        <h3>You can also find me here:</h3>
        <p><a href="http://medium.com/kellydsample" target="_blank">Blog</a></p>
        <p><a href="http://github.com/KellyStamps" target="_blank">GitHub</a></p>
        <p><a href="http://youtube.com" target="_blank">YouTube demos</a></p>
      </div>
    )
  }
}

export default Contact