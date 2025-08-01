import React from 'react'

export const InputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="form-control"
    />
  )
}
