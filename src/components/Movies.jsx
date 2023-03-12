import React, { Component } from 'react'
import {getMovie,getMovies,deleteMovie,saveMovie} from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import Genre from './Genre';
import Pagination from './Pagination';
import MovieTable from './MovieTable';
import { faSortUp, faSortDown,faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import InputText from "./InputText"


class Movies extends Component{
    state={
        movies:getMovies(),
        genres:getGenres(),
        genreMovies:getMovies(),
        pageSize:3,
        currentPage:1,
        currentGenre:"",
        iconDisplay:faArrowDown,
        stockIconDisplay:faArrowDown,
        ratingIconDisplay:faArrowDown,
        searchText:""

    }

    handleGenres=(genrename)=>{
        let genreMovies=[];
        this.state.currentGenre=genrename;
        if(genrename==="All Movies"){
            genreMovies=this.state.movies;
        } else {
            genreMovies=this.state.movies.filter(movie=>movie.genre.name===genrename)
        }
        this.setState({genreMovies})
    }
    handleDelete=(movieid)=>{
        const newMovies=this.state.genreMovies.filter(movie=>movie._id!==movieid)
        this.setState({genreMovies:newMovies})
    }
    handleSort=(field,order)=>{
        const moviesList=this.state.genreMovies
        console.log(order)
        switch(field){
            case 'title':
                moviesList.sort((a,b)=>a.title.localeCompare(b.title))
                if(order=="asc"){
                    this.setState({iconDisplay:faArrowUp})
                } else {
                    moviesList.reverse()
                    this.setState({iconDisplay:faArrowDown})
                }
                break;
            case 'dailyRentalRate':
                moviesList.sort((a,b)=>Number(a.dailyRentalRate) - Number(b.dailyRentalRate))
                if(order=="asc"){
                    this.setState({ratingIconDisplay:faArrowUp})
                } else {
                    moviesList.reverse()
                    this.setState({ratingIconDisplay:faArrowDown})
                }
                break;
            case 'numberInStock':
                moviesList.sort((a,b)=>Number(a.numberInStock) - Number(b.numberInStock))
                if(order=="asc"){
                    this.setState({stockIconDisplay:faArrowUp})
                } else {
                    moviesList.reverse()
                    this.setState({stockIconDisplay:faArrowDown})
                }
                break;
            default:
               
        }
        
        this.setState({genreMovies:moviesList})   
    }
    handlePageChange=(pageno)=>{
        this.setState({currentPage:pageno})
    }
    handleSearch=(e)=>{
        this.state.searchText=e.target.value
        const searchText=this.state.searchText
        const searchResult=this.state.movies.filter((item)=>item.title.includes(searchText,0))
        this.setState({genreMovies:searchResult})
    }

    render(){
       
        const Paginatedmovies=paginate(this.state.genreMovies,this.state.currentPage,this.state.pageSize)
        return (
            <>
            <div className='row mt-5'>
                <div className='col-3'>
                <Genre 
                genres={this.state.genres} 
                onGenresChange={this.handleGenres} 
                currentGenre={this.state.currentGenre}
                />
                </div>
                
                <div className='col-9'>
                <div className='mb-2'><NavLink className="nav-link" to="/movies/new"><button className="btn btn-primary">New Movie</button></NavLink></div>
                {this.state.genreMovies.length>0?(
                    <p>Showing {this.state.genreMovies.length} movies in the database</p>
                ): <p>There are no movies to display</p> }
                <InputText name="search" label="Search" value={this.state.currentGenre.searchText} onChange={this.handleSearch}/>

                <MovieTable 
                Paginatedmovies={Paginatedmovies}
                handleDelete={this.handleDelete}
                handleSort={this.handleSort}
                iconDisplay={this.state.iconDisplay}
                stockIconDisplay={this.state.stockIconDisplay}
                ratingIconDisplay={this.state.ratingIconDisplay}
                />

                <Pagination 
                pageSize={this.state.pageSize} 
                totalRecords={this.state.genreMovies.length} 
                onPageChange={this.handlePageChange}
                />

                </div>
            </div>
            </>
          )
    }
}

export default Movies;