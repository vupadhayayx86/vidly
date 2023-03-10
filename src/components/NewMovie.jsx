import React, { Component } from 'react'
import DropdownMenu from './DropdownMenu'
import InputText from './InputText'
import { saveMovie } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Joi from 'joi-browser'


export default class NewMovie extends Component {
    state={
        moviedetails:{
            title:"",
            genre:"Action",
            numberInStock:"",
            dailyRentalRate:""
        },
        errors:{

        }
    }
    schema={
        title: Joi.string().required().label("Title"),
       // genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.string().required().label("Number in Stock"),
        dailyRentalRate: Joi.string().required().label("Daily Rental Rate")
    }

    validate=()=>{
        const options={
            abortEarly:false
        }
        const {error}= Joi.validate(this.state.moviedetails,this.schema,options)

        if(!error) return null;

        const errors={};
        for(let item of error.details)
            errors[item.path[0]]=item.message;
        return errors
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const errors=this.validate() || {};
        this.setState({errors} || {})
       console.log(saveMovie(this.state.moviedetails))    
    }
    handleChange=({currentTarget:input})=>{
        console.log(input.value)
        const moviedetails={...this.state.moviedetails}
        moviedetails[input.name]=input.value
        this.setState({moviedetails})
       
    }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
        <InputText name="title" label="Title" value={this.state.title} onChange={this.handleChange}  />
        {/* <InputText name="genre" label="Genre" value={this.state.genre} onChange={this.handleChange}  /> */}
        {/* <DropdownMenu name="genre" label="Genre" value={this.state.genre} onChange={this.handleChange} /> */}
        <label htmlFor="genre">Genre</label>
        <div className='mb-4'>
        <select name="genre" className='form-control' onChange={this.handleChange}>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        </select>
        </div>
        <InputText name="numberInStock" label="Number in Stock" value={this.state.numberInStock} onChange={this.handleChange} />
        <InputText name="dailyRentalRate" label="Rate" value={this.state.dailyRentalRate} onChange={this.handleChange} />
        <button className="btn btn-primary">Save</button>
        </form>

      </div>
    )
  }
}
