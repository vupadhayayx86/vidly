import React, { Component } from 'react'
import DropdownMenu from './DropdownMenu'
import InputText from './InputText'
import { saveMovie } from '../services/fakeMovieService'
import Joi from 'joi-browser'


export default class NewMovie extends Component {
    state={
        moviedetails:{
            title:"",
            genre:"",
            numberInStock:"",
            dailyRentalRate:""
        },
        errors:{

        }
    }
    schema={
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().greater(0).required().label("Number in Stock"),
        dailyRentalRate: Joi.number().less(11).required().label("Daily Rental Rate")
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

    validateProperty = ({name,value}) =>{
      const obj={[name]:value};
      const schema={[name]:this.schema[name]}
      const {error}=Joi.validate(obj,schema)
      return error ? error.details[0].message:null;
  }

    handleSubmit=(e)=>{
        e.preventDefault()
        const errors=this.validate() || {};
        this.setState({errors} || {})
       console.log(saveMovie(this.state.moviedetails))
       this.props.history.push("/movies")
     //  console.log(errors)  
    }
    handleChange=({currentTarget:input})=>{
       // console.log(input.value)
        const moviedetails={...this.state.moviedetails}
        moviedetails[input.name]=input.value

        const errors={...this.state.errors}
        const errorMessage=this.validateProperty(input)
        if(errorMessage) errors[input.name]=errorMessage
        else delete errors[input.name]
        this.setState({moviedetails,errors})
       
    }

  render() {
    const {errors} = this.state
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
        <InputText name="title" label="Title" value={this.state.title} onChange={this.handleChange} errors={errors.title}  />
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
        <InputText name="numberInStock" label="Number in Stock" value={this.state.numberInStock} onChange={this.handleChange} errors={errors.numberInStock} />
        <InputText name="dailyRentalRate" label="Rate" value={this.state.dailyRentalRate} onChange={this.handleChange} errors={errors.dailyRentalRate} />
        <button className="btn btn-primary">Save</button>
        </form>

      </div>
    )
  }
}
