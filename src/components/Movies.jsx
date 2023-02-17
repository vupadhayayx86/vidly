import React from 'react'
import {getMovie,getMovies,deleteMovie,saveMovie} from "../services/fakeMovieService";

const Movies = () => {
    const movies=getMovies();
    
  return (
    <div>
        <p>Showing {movies.length} movies in the database</p>
                
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
                movies.map((item)=>(
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.genre.name}</td>
                        <td>{item.numberInStock}</td>
                        <td>{item.dailyRentalRate}</td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                        
                    </tr>
                    
                  
                ))
                }
             </tbody>
            </table>
        
    </div>
  )
}

export default Movies