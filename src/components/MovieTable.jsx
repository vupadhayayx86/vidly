import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MovieTable = ({Paginatedmovies,handleDelete,handleSort,iconDisplay,stockIconDisplay,ratingIconDisplay}) => {
            const [order,setOrder]=useState("asc")
           // console.log(iconDisplay)
            const handleToggle=(order)=>{
                if(order=="asc"){
                    setOrder("dsc")
                } else {
                    setOrder("asc")
                }
            }

            return (
                    <table className='table'>
                        <thead>
                            <tr>
                            <th onClick={()=>{handleSort("title",order);handleToggle(order,"title");}}>Title <span><FontAwesomeIcon icon={iconDisplay} /></span></th>
                            <th>Genre</th>
                            <th onClick={()=>{handleSort("numberInStock",order);handleToggle(order,"stock")}}>Stock <span><FontAwesomeIcon icon={stockIconDisplay} /></span> </th>
                            <th onClick={()=>{handleSort("dailyRentalRate",order);handleToggle(order,"rate");}}>Rate <span><FontAwesomeIcon icon={ratingIconDisplay} /></span></th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                          <tbody>
                        {
                        Paginatedmovies.map((item)=>(
                            <tr key={item._id}>
                                <td className='w-auto text-nowrap'><Link to={`/moviesdetails/${item._id}`}>{item.title}</Link></td>
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