import React from 'react'

const InputText = ({name, label, value,onChange,errors}) => {
   console.log(value)
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} id={name} className="form-control" />
        {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
    
  )
}

export default InputText