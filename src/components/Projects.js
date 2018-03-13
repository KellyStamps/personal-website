import React from 'react'
import ReactPlayer from 'react-player'

class Projects extends React.Component {
  render(){
    return (
      <div className='projects'>
      
      <h2>Projects</h2>    
      
      <div className='video-1'>
        <ReactPlayer url="https://youtu.be/pus0LMkY-4U"/>
        <p>Filler text filler text</p>
      </div>
      
      <div className='video-2'>
        <ReactPlayer url="https://youtu.be/Riu_P4xfWLU"/>
        <p>Filler text filler text</p>
      </div>
      
      <div className='video-3'>
        <ReactPlayer url="https://youtu.be/pus0LMkY-4U"/>
        <p>Filler text filler text</p>
      </div>

      </div>
    )
  }
}

export default Projects