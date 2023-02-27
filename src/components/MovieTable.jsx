import React from 'react'

const MovieTable = ({Paginatedmovies,handleDelete,handleSort}) => {
    
            return (
                    <table className='table'>
                        <thead>
                            <tr>
                            <th onClick={()=>handleSort("title")}>Title</th>
                            <th>Genre</th>
                            <th onClick={()=>handleSort("numberInStock")}>Stock</th>
                            <th onClick={()=>handleSort("dailyRentalRate")}>Rate</th>
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
                                <td><button onClick={()=>handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                                
                            </tr>                         
                        ))
                        }
                     </tbody>
                    </table>

  )
}

export default MovieTable