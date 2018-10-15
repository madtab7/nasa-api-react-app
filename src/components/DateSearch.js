import React, { Component } from 'react'
import CuriosityCard from './CuriosityCard'

export default class DateSearch extends Component{

  state = {
    date:'',
    searchData:[]
  }

  handleSearchInput = (event) => {
    this.setState({
      date: event.target.value
    }, ()=> {console.log(this.state)})
  }

  handleSearch = ()=>{
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+`${this.state.date}`+'&api_key=KJo0JJMXqh2KWfyL2vHopBxkr0PztCTc2si3N8w7')
    .then(response => response.json())
    .then(nasaData=> {
      this.setState({
        searchData: nasaData.photos
      })
    })

  }


  render(){
    console.log(this.state.searchData)
    return(
      <div>
      <h2>Search Mars Curiosity Rover Images:</h2>
        <div className="ui action input">
          <input type="date" placeholder="Enter a date" onChange={this.handleSearchInput}/>
          <button className="ui button" onClick={this.handleSearch}>Search</button>

        </div>

        <div className="ui grid">
          <br></br>
          {this.state.searchData.map((curiosityInfo)=>{
            return <CuriosityCard key={curiosityInfo.id} curiosityInfo={curiosityInfo}/>
          })}
        </div>

      </div>
    )
  }
}
