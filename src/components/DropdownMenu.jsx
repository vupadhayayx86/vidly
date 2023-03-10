import React from 'react'

const DropdownMenu = ({name,label,value}) => {
  return (
    <div className="form-group">
    <label htmlFor="genre">{label}</label>
    <select name={name} className='form-control'>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
    </select>
    </div>
    
  )
}

export default DropdownMenu