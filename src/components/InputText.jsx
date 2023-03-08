import React from 'react'

const InputText = ({name, label, value,onChange}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} id={name} className="form-control" placeholder='Enter Username'  />
    </div>
  )
}

export default InputText