import React from 'react'

export const InputURLComponent = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="url"
      className={`form-control ${className || ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
