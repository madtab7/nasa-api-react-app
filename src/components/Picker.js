import React from 'react'
import DateSearch from './DateSearch'
import APhoto from './APhoto'

const Picker = (props) => {
  console.log(this.props)

  if(props.userClick === "MarsCuriosity"){
    return <DateSearch />
  } else if (props.userClick === "APOD"){
    return <APhoto />
  }

}

export default Picker
