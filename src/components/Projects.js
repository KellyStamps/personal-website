import React from 'react'
import ReactPlayer from 'react-player'

class Projects extends React.Component {
  render(){
    return (
      <div className='projects'>
      
      <h1>Projects</h1>    
      
      <div className='video-1'>
        <h2 className="pink-head">Code Challenger</h2>
        <ReactPlayer url="https://youtu.be/pus0LMkY-4U" width="610px" height="330px"/>
        <p>Challenge yourself to build your coding skills and craft a portfolio page of finished projects.</p> 
        <p className="pink-head">JavaScript| React | Redux | HTML5 | CSS || Rails | PostgreSQL</p>  
      </div>
      
      <div className='video-2'>
        <h2 className="pink-head">Janx</h2>
        <ReactPlayer url="https://youtu.be/6lECuoTIYco" width="610px" height="330px"/>
        <p>Chat with friends in real time. Log in and find an existing chat, or create your own.</p>
        <p className="pink-head">JavaScript| React | HTML5 | CSS || Websockets (ActionCable) | Rails | PostgreSQL</p> 
      </div>
      
      <div className='video-3'>
        <h2 className="pink-head">Lipstick Finder</h2>
        <ReactPlayer url="https://youtu.be/Riu_P4xfWLU" width="610px" height="330px"/>
        <p>Sort through budgest lipstick options by search for key terms or choosing a brand from the drop down menu.</p>
        <p className="pink-head">JavaScript| React | HTML5 | CSS | API </p>
      </div>
      

      </div>
    )
  }
}

export default Projects