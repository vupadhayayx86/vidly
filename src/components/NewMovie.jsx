import React, { Component } from 'react'

export default class NewMovie extends Component {
    state={
        moviedetails:{
            title:"",
            genre:"",
            numberinstock:"",
            rate:""
        }
    }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>

      </div>
    )
  }
}
