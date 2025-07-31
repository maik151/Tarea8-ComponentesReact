import React from 'react'

export const InputTelComponent = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="tel"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className || ''}`}
    />
  )
}
