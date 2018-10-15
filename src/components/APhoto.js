import React, { Component } from 'react'
import PhotoCard from './PhotoCard'

export default class APhoto extends Component{

  state = {
    pictureData:[]
  }

  handleClick = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=KJo0JJMXqh2KWfyL2vHopBxkr0PztCTc2si3N8w7')
    .then(response=>response.json())
    .then(photoData=>{
      this.setState({
        pictureData: photoData
      })
    })
  }

  render(){
    console.log(this.state.pictureData)
    return(
      <div>
        <button className="ui primary button" onClick={this.handleClick}>View photo of the day</button>
          <PhotoCard photoData={this.state.pictureData}/>
      </div>
    )
  }
}
