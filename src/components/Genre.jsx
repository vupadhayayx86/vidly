import React, { Component } from 'react'

class Genre extends Component{
render(){
    const {genres}= this.props
    let listgitem='list-group-item active';
    return(
        <div>
            <ul className='list-group'>
            {
                genres.map((item)=>(
                    <li key={item._id} className={item.name===this.props.currentGenre?"list-group-item active":"list-group-item"}>
                        <a onClick={()=>{this.props.onGenresChange(item.name)}}>{item.name}</a>
                    </li>
                ))
            }
            </ul>
            
        </div>
    )
}
}

export default Genre