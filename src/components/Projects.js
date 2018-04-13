import React from 'react'
import ReactPlayer from 'react-player'

class Projects extends React.Component {
  render(){
    return (
      <div className='projects'>

      <h1>Projects</h1>

        <div className='video-div'>
          <h2>TopNotch Music</h2>
          <ReactPlayer className='video' url="https://youtu.be/hJ1u4v2q6Ug" width="70%" height="70%"/>
          <p>Log in and search musical artists.</p>
          <p className="pink-head">JavaScript| React | Redux | last.fm API | HTML5 | CSS </p>
          <p className="pink-head">JSON Web Token Authentication | Rails | PostgreSQL</p>
        </div>

      <div className='video-div'>
        <h2>Code Challenger</h2>
        <ReactPlayer className='video' url="https://youtu.be/pus0LMkY-4U" width="70%" height="70%"/>
        <p>Challenge yourself to build your coding skills and craft a portfolio page of finished projects.</p>
        <p className="pink-head">JavaScript| React | Redux | HTML5 | CSS </p>
        <p className="pink-head"> Rails | PostgreSQL</p>
      </div>

      <div className='video-div'>
        <h2>Janx</h2>
        <ReactPlayer className='video' url="https://youtu.be/6lECuoTIYco" width="70%" height="70%"/>
        <p>Chat with friends in real time. Log in and find an existing chat, or create your own.</p>
        <p className="pink-head">JavaScript| React | HTML5 | CSS</p>
        <p className="pink-head">Websockets (ActionCable) | Rails | PostgreSQL</p>
      </div>

      <div className='video-div'>
        <h2>Lipstick Finder</h2>
        <ReactPlayer className='video' url="https://youtu.be/Riu_P4xfWLU" width="70%" height="70%" />
        <p>Sort through budgest lipstick options by search for key terms or choosing a brand from the drop down menu.</p>
        <p className="pink-head">JavaScript| React | HTML5 | CSS | API </p>
      </div>


      </div>
    )
  }
}

export default Projects
