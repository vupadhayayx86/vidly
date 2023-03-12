import React,{Component} from 'react'
import { getMovie } from '../services/fakeMovieService'
import { saveMovie } from '../services/fakeMovieService'
import InputText from './InputText'


export default class MovieDetails extends Component {
  state={
    movieid:this.props.match.params.id,
    moviedetails:{

    }
  }
  constructor(props){
    super(props)
   // console.log(this.state.movieid)
    this.state.moviedetails=getMovie(this.state.movieid)
    console.log(this.state.moviedetails)
  }

  handleChange=({currentTarget:input})=>{
    const moviedetails={...this.state.moviedetails}
        moviedetails[input.name]=input.value
        this.setState({moviedetails})
  }
  handleSave=(e)=>{
    e.preventDefault()
    saveMovie(this.state.moviedetails)
    this.props.history.push("/movies")
  }
  
  render(){
    //const singlemovie=this.state.moviedetails
    return(
      <div>Movie id{this.state.movieid}
      <form>
       <InputText name="title" label="Title" value={this.state.moviedetails.title} onChange={this.handleChange} />
       <label htmlFor="genre">Genre</label>
         <div className='mb-4'>
         <select name="genre" className='form-control' value={this.state.moviedetails.genre} onChange={this.handleChange}>
         <option value="Action">Action</option>
         <option value="Comedy">Comedy</option>
         <option value="Thriller">Thriller</option>
         </select>
         </div>
         <InputText name="numberInStock" label="Number in Stock" value={this.state.moviedetails.numberInStock} onChange={this.handleChange} />
         <InputText name="dailyRentalRate" label="Rate" value={this.state.moviedetails.dailyRentalRate} onChange={this.handleChange} />
           <button className="btn btn-primary" onClick={this.handleSave} >Save</button>
       </form>
       
      </div>

    )
  }
}


