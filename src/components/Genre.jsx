import React, { Component } from 'react'

class Genre extends Component{
render(){
    const {genres}= this.props
    let listgitem='list-group-item ';
                
   // console.log(genres)
    return(
        <div>
            <ul className='list-group'>
            <li className='list-group-item'><a onClick={(this.props.onGenres("All Movies"))}>All Movies</a></li>   
            {
               
                genres.map((item)=>(
                    <li key={item._id} className={listgitem}>
                        <a onClick={()=>{this.props.onGenres(item.name)}}>{item.name}</a>
                    </li>
                ))
            }
            </ul>
            
        </div>
    )
}
}

export default Genre