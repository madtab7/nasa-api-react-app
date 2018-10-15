import React, { Component } from 'react'

export default class PhotoCard extends Component{

  state={
    isFront: true
  }

  handleClick = () => {
    this.setState({
      isFront: !this.state.isFront
    })

  }

  render(){

    if(this.state.isFront){
      return(
        <div className="ui fluid card" onClick={this.handleClick}>
        <img src={this.props.photoData.url} />
        </div>
      )
    } else {
      return(
        <div className="ui fluid card content" onClick={this.handleClick}>
          <h2>{this.props.photoData.title}</h2>
          <h3>{this.props.photoData.date}</h3>
          <h4>{this.props.photoData.explanation}</h4>
          <p>Copyright: {this.props.photoData.copyright}</p>
        </div>
      )
    }
  }

}
