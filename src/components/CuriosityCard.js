import React, { Component } from 'react'

export default class CuriosityCard extends Component{

  state = {
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
        <div className="four wide column ui card" onClick={this.handleClick}>
        <img src={this.props.curiosityInfo["img_src"]} className="ui large image" alt="Mars Curiosity Rover"/>
        </div>
      )
    }
    else{
      return(
        <div className="four wide column ui card" onClick={this.handleClick}>
          <div className="content">
            <br></br>
            <strong>Camera name: </strong> "{this.props.curiosityInfo.camera["name"]}", AKA {this.props.curiosityInfo.camera["full_name"]}
            <br></br>
            <strong>Earth date: </strong> {this.props.curiosityInfo["earth_date"]}
            <br></br>
            <strong>Solar date: </strong> {this.props.curiosityInfo.sol}
          </div>
        </div>
      )
    }

  }
}
