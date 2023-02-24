import React, { Component } from 'react'
import {getMovie,getMovies,deleteMovie,saveMovie} from "../services/fakeMovieService";
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';
import Genre from './Genre';
import Pagination from './Pagination';

class Movies extends Component{
    state={
        movies:getMovies(),
        genres:getGenres(),
        genreMovies:getMovies(),
        pageSize:3,
        currentPage:1,
        currentGenre:"",
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
    handlePageChange=(pageno)=>{
       
        this.setState({currentPage:pageno})
    }

    render(){
       
        const Paginatedmovies=paginate(this.state.genreMovies,this.state.currentPage,this.state.pageSize)
        return (
            <>
            <div className='row mt-5'>
                <div className='col-3'>
                <Genre genres={this.state.genres} onGenresChange={this.handleGenres} currentGenre={this.state.currentGenre}/>
                </div>
                <div className='col-9'>
                {this.state.movies.length>0?(
                    <p>Showing {this.state.genreMovies.length} movies in the database</p>
                ): <p>There are no movies to display</p> }


                        <table className='table'>
                        <thead>
                            <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                          <tbody>
                        {
                        Paginatedmovies.map((item)=>(
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>{item.genre.name}</td>
                                <td>{item.numberInStock}</td>
                                <td>{item.dailyRentalRate}</td>
                                <td><button onClick={()=>this.handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                                
                            </tr>                         
                        ))
                        }
                     </tbody>
                    </table>

                    <Pagination pageSize={this.state.pageSize} totalRecords={this.state.genreMovies.length} onPageChange={this.handlePageChange}/>

                </div>
                

            </div>
               
                
            </>
          )
    }
}

export default Movies;