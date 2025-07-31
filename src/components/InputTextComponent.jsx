import React from 'react'

export const InputTextComponent = ({ placeholder, value, onChange, name, id, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={`form-control ${className || ''}`}
    />
  )
}
