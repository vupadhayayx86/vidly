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
        genreMovies:[],
        pageSize:3,
        currentPage:1,
    }
    handleGenres=(genrename)=>{
        console.log(genrename)
        if(genrename==="All Movies"){
            this.setState({genreMovies:this.state.movies})
            return
        }
        const genreMovies=this.state.movies.filter(movie=>movie.genre.name===genrename)
        this.setState({genreMovies})
    }


    handleDelete=(movieid)=>{
       // console.log(deleteMovie(movieid))
        const newMovies=this.state.movies.filter(movie=>movie._id!==movieid)
        this.setState({movies:newMovies})
    }
    handlePageChange=(pageno)=>{
        //console.log(pageno)
        this.setState({currentPage:pageno})
    }

    render(){
       
       
        
        const Paginatedmovies=paginate(this.state.genreMovies,this.state.currentPage,this.state.pageSize)
      //  console.log(movies);
        return (
            <>
                <Genre genres={this.state.genres} onGenres={this.handleGenres}/>
                {this.state.movies.length>0?(
                    <p>Showing {this.state.movies.length} movies in the database</p>
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
                
            </>
          )
    }
}

export default Movies;