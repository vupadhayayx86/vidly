import React from 'react'

const MovieDetails = (props) => {
  //console.log(props.match.params.id)
  const handleSave=()=>{
    props.history.push('/movies')
  }
  return (
    <div>
      <h1>Movie Details {props.match.params.id}</h1>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  )
}

export default MovieDetails