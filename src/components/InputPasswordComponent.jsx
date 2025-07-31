import React from 'react'

export const InputPasswordComponent = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`form-control ${className || ''}`}
    />
  )
}
