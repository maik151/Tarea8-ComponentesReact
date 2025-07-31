import React from 'react'

export const InputSearchComponent = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className || ''}`}
    />
  )
}
